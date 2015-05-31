(ns ^:figwheel-always stream-of-redditness-cljs.poll-reddit
    (:require [stream-of-redditness-cljs.globals :as globals]
              [stream-of-redditness-cljs.util :as util]
              [ajax.core :refer [GET POST]]
              [clojure.string :as string]
              [clojure.set :as set]))


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
              :threadId (first pathTo)
              :requestFun (fn []
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