(ns ^:figwheel-always stream-of-redditness-cljs.active-threads
    (:require [stream-of-redditness-cljs.globals :as globals]
              [stream-of-redditness-cljs.util :as util]
              [ajax.core :refer [GET POST]]
              [clojure.string :as string]
              [clojure.set :as set]))

(def deep-merge-in! (partial util/deep-merge-in! globals/active-threads-atom))
(def write-in! (partial util/write-in! globals/active-threads-atom))
(def get-in! (partial util/get-in! globals/active-threads-atom))

(defn write-active-thread [thread-id contents]
  (if (get-in! [:threads thread-id])
    (deep-merge-in! [:threads thread-id] contents)
    nil))

(defn send-large-data [thread-id type contents]
  (let [session (util/get-in! globals/opentok-sessions-atom
                             [thread-id :sesssion])]
    (if session
      (doseq [message (util/chunkify-map contents 8000)]
        (.signal session #js {:type type :to client :data message})))))

(defn write-and-send-active-thread [thread-id contents]
  (let [thread-diff (util/map-diff (get-in! [:threads thread-id]) contents)]
    (if (write-active-thread thread-id thread-diff)
      (send-large-data thread-id "comment-update" thread-diff))))

(defn redditCommentData [c]
  {:body (-> c (get "data") (get "body"))
   :time (-> c (get "data") (get "created_utc"))
   :id (-> c (get "data") (get "id"))
   :score (-> c (get "data") (get "score"))
   :gilded (-> c (get "data") (get "gilded"))
   :saved (-> c (get "data") (get "saved"))
   :likes (-> c (get "data") (get "likes"))
   :author (-> c (get "data") (get "author"))
   :flair-css (-> c (get "data") (get "author_flair_css_class"))
   :flair-text (-> c (get "data") (get "author_flair_text"))})

(defn partition2 [f l]
  [(filter f l) (filter #(not (f %)) l)])

(defn moreCommentsJSONHandler [threadIds response]
  (doall (->> 
    (get response "jquery")
    (filter (fn [jqueryArray]
              (-> jqueryArray 
                  (nth 3) 
                  first
                  first
                  (get "data"))))
    (map (fn [jqueryArray]
           (-> 
             jqueryArray
             (nth 3)
             first
             (#(reduce 
                 (fn [[moreComments paths] listEntry]
                   (let [kind (get listEntry "kind")
                         commentData (get listEntry "data")
                         childs (string/join "," (get commentData "children"))
                         parentId 
                         (-> commentData
                             (get "parent_id")
                             ((fn [pid] (drop 3 pid)))
                             ((fn [pid] (string/join "" pid)))
                             keyword)
                         commentId 
                         (-> commentData
                             (get "id")
                             keyword)]
                     (if (= kind "more")
                       (do 
                         (swap!
                           globals/request-queue-atom
                           (partial 
                             concat
                             [{:time (.now js/Date)
                               :thread-id (first threadIds)
                               :request-fun (fn []
                                              (GET 
                                                (str "https://api.reddit.com/api/"
                                                     "morechildren?link_id=t3_"
                                                     (name (first threadIds))
                                                     "&children="
                                                     childs
                                                     "&sort=new")
                                                   {:handler (partial moreCommentsJSONHandler
                                                                      (parentId paths))}))
                               :type :more}]))
                         [moreComments paths])
                       [(util/deep-merge 
                          moreComments
                          (reduce (fn [commentTree pathEl]
                                    {pathEl commentTree}) 
                                  {commentId
                                   (util/deep-merge {:comments {}}
                                                    (redditCommentData listEntry))}
                                  (reverse (parentId paths))))
                        (assoc paths commentId 
                          (concat (parentId paths) 
                                  [commentId :comments]))]))) 
                 [{} {(first (rest (reverse threadIds))) threadIds}] %))
             first)))
    (reduce util/deep-merge {})
    ((first threadIds))
    (write-and-send-active-thread (first threadIds)))))

(defn processCommentTree [pathTo commentTree]
  (->>
    commentTree
    (#(get % "data"))
    (#(get % "children"))
    (partition2 #(= "t1" (get % "kind")))
    ((fn [[t1 more]]
       (->>
         more
         (map 
           (fn [moreData]
             {:time (.now js/Date)
              :thread-id (first pathTo)
              :request-fun (fn []
                            (GET 
                              (str "https://api.reddit.com/api/morechildren?link_id=t3_"
                                   (name (first pathTo))
                                   "&children="
                                   (-> moreData
                                       (get "data")
                                       (get "children")
                                       (#(string/join "," %)))
                                   "&sort=new")
                                 {:handler (partial moreCommentsJSONHandler pathTo)}))
              :type :more}))
         (#(swap! globals/request-queue-atom (partial concat %)))
         )
       t1))
    (map (fn [c] [(-> c (get "data") (get "id") keyword)
                  (util/deep-merge
                        (redditCommentData c)
                        {:comments (processCommentTree 
                                     (concat
                                       pathTo
                                       [(keyword (-> c 
                                            (get "data") 
                                            (get "id"))) :comments]) 
                                     (-> c
                                         (get "data")
                                         (get "replies")))})]))
    (into {})))

(defn newCommentsJSONHandler [threadId response]
  (->> 
    (js->clj response)
    (#(nth % 1))
    (processCommentTree [threadId :comments])
    ((fn [comments] {:comments comments}))
    (util/deep-merge {:receivedData true
                      :subreddit (->
                                   response js->clj (nth 0)
                                   (get "data") (get "children")
                                   (nth 0) (get "data") (get "subreddit"))
                      :title (->
                               response js->clj (nth 0)
                               (get "data") (get "children")
                               (nth 0) (get "data") (get "title"))})
    (write-and-send-active-thread threadId)))

(defn new-comments-poller [thread-id]
  (GET (str "https://api.reddit.com/comments/"
            (name thread-id) ".json?sort=new")
       {:handler (partial newCommentsJSONHandler thread-id)})
  (.setTimeout js/window (fn [] (new-comments-poller thread-id)) 31500))


(defn set-active-threads [thread-ids colors]
  (->>
    thread-ids
    (map (fn [thread-id] {thread-id {:receivedData false 
                                     :comments {} 
                                     :id thread-id}}))
    (reduce merge)
    (#(util/deep-merge % (get-in! [:threads])))
    (util/deep-merge (reduce merge (map #(-> {%1 {:color %2}})
                                        thread-ids colors)))
    (group-by (fn [[thread-id _]] (= nil ((set thread-ids) thread-id))))
    ((fn [grouped-threads] 
       (let [inactive-threads (into {} (get grouped-threads true))
             active-threads (into {} (get grouped-threads false))]
         ;; Delete opentok session for no longer active threads
         (doseq [thread-id (keys inactive-threads)]
           (.disconnect (util/get-in! globals/opentok-sessions-atom 
                                      [thread-id :sesssion])))
         ;; Request opentok session for newly active threads
         (doseq [thread-id (keys active-threads)]
           (if-not (util/get-in! globals/opentok-sessions-atom
                                 [thread-id :sesssion])
             (.emit globals/socket "joinThread" thread-id)))
         ;; Delete request queue for no longer active threads
         (swap! globals/request-queue-atom 
                #(util/deep-remove-keys % (keys inactive-threads)))
         ;; Add request queue for newly active threads
         (swap! globals/request-queue-atom
                (partial concat 
                         (map #(-> {:time (.now js/Date)
                                    :thread-id %
                                    :request-fun (fn [] 
                                                   (new-comments-poller %))
                                    :type :new}) 
                              (keys active-threads))))
         ;; Write the finalized group of active threads to memory
         (write-in! [:threads] active-threads))))))

(defn makeNextRequest []
  (->> 
    @globals/request-queue-atom
    (filter #((:thread-id %) (get-in! [:threads])))
    (sort-by :time)
    (partition2 #(= :new (:type %)))
    ((fn [[news others]]
       (->
         (reduce
           (fn [dict threadDict]
             (assoc dict (:thread-id threadDict) threadDict))
           {} 
           news)
         vals
         (concat others))))
    ((fn [requests]
       (if (first requests) ((:request-fun (first requests))))
       (reset! globals/request-queue-atom (rest requests))))))

(.setInterval js/window makeNextRequest 2200)