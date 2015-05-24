(ns ^:figwheel-always stream-of-redditness-cljs.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [ajax.core :refer [GET POST]]
              [clojure.string :as string]
              [clojure.set :as set])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)
(println "Edits to this text should show up in your developer console.")

(defn printReturn [a]
  (println a)
  a)

(def binary [0 1])
(def allPoss (for [a binary
                   b binary
                   c binary
                   d binary
                   e binary
                   f binary]
               [a b c d e f]))


(defn partition2 [f l]
  [(filter f l) (filter #(not (f %)) l)])

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom
                     {:tripwire false
                      :oauthReq
                      {:awaitingReqUrl false
                       :reqUrl ""
                       :intervalId 0
                       :requestSent true}
                      :popups
                      {:popupShower (fn [p] nil)
                       :activePopup nil
                       :lastClickNotInPopup true}
                      :reddit
                      {:activeThreads {}
                       :requestQueue []}
                      :opentokSessions {}}))

(defn deep-merge-root [f a b]
  (merge-with (fn [x y]
                (cond (map? y) (deep-merge-root f x y)
                      (set? x) (f x y)
                      (seq? x) (f x y)
                      :else y)) 
                 a b))

(defn merge-vectors [k x y]
  (map #(deep-merge-root (partial merge-vectors k) (reduce (fn [el v] (if (= (k el) (k %)) el %)) x) %) y))

(defn deep-merge 
  ([a b] (deep-merge-root concat a b))
  ([a b f] (deep-merge-root f a b)))

(defn playFun [d1 d2]
  (->> d2
       (map (fn [[k v]]
              (cond (not (contains? d1 k)) {k v}
                    (map? v) (let [nv (playFun (k d1) v)]
                               (if (= {} nv) {} {k nv}))
                    (seq? v) (if (= 0 (count v)) {} {k v})
                    (= v (k d1)) {}
                    :else {k v})))
       (reduce deep-merge {})))

(defn pf2 [d1 d2]
  (->> (playFun d1 d2)
       ((fn [a] [a (deep-merge d1 a)]))))

(defn t1 []
  (pf2 {:a {:b 3 :c 2 :d {:e 4}}}
           {:a {:g 3 :c 2 :d {:e 1}}}))

(defn dicSize [d]
  (count (.stringify js/JSON (clj->js d))))

(defn withLim 
  ([d] (withLim d [] {} []))
  ([d dsi cdi kli]
   (reduce (fn [[ds cd kl] [k v]]
             (cond (map? v) (let [[nds ncd _] (withLim v ds cd (conj kl k))]
                              [nds ncd kl])
                   (seq? v) ()
                   :else (let [jvd (reduce #(hash-map %2 %1) {k v} (reverse kl))
                               nd (deep-merge cd jvd)]
                           (if (< 3000 (dicSize nd)) 
                             [(conj ds cd) jvd kl]
                             [ds nd kl])))) [dsi cdi kli] d)))

(defn allKeysToKeywords [d]
  (into {}
        (map (fn [[k v]]
               [(keyword k)
                (cond (map? v) (allKeysToKeywords v)
                      :else v)]) d)))

(defn twl [] 
  (withLim {:a 23 :b {:c 123 :d "asdaasdaasdaaaasdaasdaasdaasdaasdaasda" :j 213} :k "ay"}))

(defn zipReadState [zip]
  (reduce #(get %1 %2) @app-state zip))

(defn writeState [f hashmap]
    (swap! app-state (fn [state] (deep-merge state hashmap f))))
(defn zipWriteState 
  ([zip hashmap] 
   (writeState concat (reduce #(hash-map %2 %1) hashmap (reverse zip))))
  ([zip hashmap f]
   (writeState f (reduce #(hash-map %2 %1) hashmap (reverse zip)))))
(defn zipOverwriteState [zip hashmap]
  (swap! app-state 
         (fn [state] 
           (->>
             zip
             (reduce #(conj %1 (%2 (peek %1))) (list state))
             pop
             (map vector (->> zip reverse))
             (reduce (fn [newBranch [k oldBranch]] 
                       (assoc oldBranch k newBranch)) hashmap)))))
(defn refreshView []
  (zipWriteState [:tripwire] 
                           (not (zipReadState [:tripwire]))))

(defn parseObjForce [jsonString]
  (let [parsed (try 
                  (js->clj (.parse js/JSON jsonString)) 
                  (catch js/Error e {}))]
    (if (map? parsed)
      parsed
      {})))

(def localStorage (.-localStorage js/window))
(def storageString "StreamOfRedditnessStorage")
(defn readStorage [] (-> localStorage 
                              (.getItem storageString) 
                              parseObjForce))
(defn zipReadStorage [zip] 
  (reduce #(get %1 (name %2)) (readStorage) zip))
(defn writeStorage [hashmap]
  (.setItem localStorage storageString 
            (->> (deep-merge (readStorage) (js->clj (clj->js hashmap)))
                 clj->js
                 (.stringify js/JSON))))
(defn zipWriteStorage [zip hashmap]
  (writeStorage (reduce #(hash-map %2 %1) hashmap (reverse zip))))

(.addEventListener js/document "click" 
                   (fn [] 
                     (if (and 
                           (zipReadState [:popups :lastClickNotInPopup])
                           (zipReadState [:popups :activePopup]))
                       (.close (zipReadState [:popups :activePopup])))
                     (zipWriteState [:popups :lastClickNotInPopup] true)))

(defn ^:export registerPopupShower [popupShower]
  (zipWriteState [:popups :popupShower] popupShower))

(defn ^:export showPopup [popupDetails]
  (let [popup ((zipReadState [:popups :popupShower]) popupDetails)]
    (-> js/document
        (.getElementsByClassName "popup") 
        (.item 0)
        (.addEventListener "click" (fn [] (zipWriteState [:popups :lastClickNotInPopup] false))))
    (zipWriteState [:popups :activePopup] popup)
    (.then popup (fn [res] (zipWriteState [:popups :activePopup] nil)))))

(defn strToNum [s]
  (reduce + (map #(.charCodeAt % 0)) s))

(defn introduce [session threadId client]
  (println (str "Introducing: " (.-connectionId client)))
  (let [[restMsgs lastMsg _] (withLim (zipReadState [:reddit 
                                                     :activeThreads 
                                                     threadId]))]
    (println "Messages: ")
    (println restMsgs)
    (println lastMsg)
    (doseq [msg (conj restMsgs lastMsg)]
      (.signal session (clj->js {:type "introduction"
                                 :to client
                                 :data msg}))))
  (.signal session (clj->js {:type "introduction-complete"
                             :to client})))

(defn introduceIfNecessary [session threadId]
  (let [myId (zipReadState [:opentokSessions threadId :myId])
        clients (zipReadState [:opentokSessions threadId :clients])
        unintroduced-clients (zipReadState [:opentokSessions threadId 
                                            :unintroduced-clients])
        introduced-clients (sort-by
                             strToNum
                             (filter #(not (contains? unintroduced-clients %))
                                     (keys clients)))]
    ;;(println (str "Intro'd: " introduced-clients))
    ;;(println (str "Not Intro'd: " unintroduced-clients))
    (if-not (contains? unintroduced-clients myId)
      (doseq [clientId unintroduced-clients]
        (if (= myId (first (sort-by #(- (strToNum clientId) (strToNum %)) introduced-clients)))
          (introduce session threadId (get clients clientId)))))))

(defn ensureSomeoneIsIntroduced [session threadId]
  (if (= (count (zipReadState [:opentokSessions threadId 
                               :clients]))
         (count (zipReadState [:opentokSessions threadId 
                               :unintroduced-clients])))
   (do
     (zipWriteState [:opentokSessions threadId 
                     :unintroduced-clients]
                    #{(zipReadState [:opentokSessions threadId
                                     :myId])}
                    set/difference)
     (.signal session (clj->js {:type "am-introduced"}))
     (introduceIfNecessary session threadId))))

(def socket (js/io "http://stream-of-redditness.herokuapp.com/"))
(.on socket "authVal" 
     (fn [msg] (if (zipReadState 
                     [:oauthReq :awaitingReqUrl])
                 (zipWriteState 
                   [:oauthReq] 
                   {:reqUrl msg :awaitingReqUrl false}))))
(.on socket "authData"
     (fn [msg]
       (let [msg (js->clj msg)]
         (zipWriteStorage [:users] msg)
         (zipWriteStorage [:active-user] (first (first msg)))
         (refreshView))))
(.on socket "threadSession"
     (fn [msg]
       (let [[threadId-str opentokKey sessionId token] (js->clj msg)
             session (.initSession js/TB sessionId)
             threadId (keyword threadId-str)]
         (.on session "sessionConnected"
              (fn [_]
                (println (str "Session Connected: " (.. session -connection -connectionId)))
                (zipOverwriteState [:opentokSessions threadId]
                               {:session session
                                :myId (.. session -connection -connectionId)
                                :clients {}
                                :unintroduced-clients #{}
                                :should-be-introduced-clients #{}})))
         (.on session "connectionCreated" 
              (fn [event]
                (let [client (.-connection event)
                      clientId (.-connectionId client)
                      myId (zipReadState [:opentokSessions threadId :myId])]
                  (println (str "Connection Created: " clientId))
                  (if (contains? (zipReadState
                                   [:opentokSessions threadId :clients]) myId)
                    (do
                      (if (contains? (zipReadState
                                       [:opentokSessions threadId 
                                        :unintroduced-clients]) myId)
                        (.signal session (clj->js {:type "am-not-introduced"})))
                      (zipWriteState [:opentokSessions 
                                      threadId 
                                      :unintroduced-clients] 
                                     #{clientId} set/union))
                    (if (and (= clientId myId) (< 0 (count (zipReadState 
                                                             [:opentokSessions 
                                                              threadId 
                                                              :clients]))))
                      (zipWriteState [:opentokSessions 
                                      threadId 
                                      :unintroduced-clients] 
                                     #{clientId} set/union)))
                  (zipWriteState [:opentokSessions 
                                  threadId 
                                  :clients] {clientId client})
                  (introduceIfNecessary session threadId))))
         (.on session "connectionDestroyed"
              (fn [event]
                (let [clientId (.. event -connection -connectionId)
                      newClients (dissoc
                                   (zipReadState [:opentokSessions threadId
                                                  :clients]) clientId)]
                  (println (str "Connection Destroyed: " clientId))
                  (zipOverwriteState [:opentokSessions threadId :clients]
                                     newClients)
                  (zipWriteState [:opentokSessions threadId]
                                 {:unintroduced-clients #{clientId}
                                  :should-be-introduced-clients #{clientId}}
                                 set/difference)
                  (introduceIfNecessary session threadId))
                (ensureSomeoneIsIntroduced session threadId)))
         (.on session "signal:am-not-introduced" 
              (fn [event] 
                (let [clientId (.. event -from -id)]
                  (println (str "Received not introduced: " clientId))
                  (zipWriteState [:opentokSessions threadId 
                                  :unintroduced-clients]
                                 #{clientId} set/union)
                  (introduceIfNecessary session threadId))
                (ensureSomeoneIsIntroduced session threadId)))
         (.on session "signal:am-introduced" 
              (fn [event] 
                (let [clientId (.. event -from -id)]
                  (println (str "Received am introduced: " clientId))
                  (zipWriteState [:opentokSessions threadId]
                                 {:unintroduced-clients #{clientId}
                                  :should-be-introduced-clients #{clientId}}
                                 set/difference))))
         (.on session "signal:introduction" 
              (fn [event]
                (zipWriteState [:reddit :activeThreads threadId]
                               (allKeysToKeywords (js->clj (.-data event))))))
         (.on session "signal:introduction-complete" 
              (fn [event]
                (println (str "I am fully introduced"))
                (zipWriteState [:opentokSessions threadId 
                                :unintroduced-clients]
                               #{(zipReadState [:opentokSessions threadId
                                                :myId])} set/difference)
                (.signal session (clj->js {:type "am-introduced"}))
                (.on session "signal:comment-update"
                     (fn [event]
                       (zipWriteState [:reddit :activeThreads threadId]
                                      (.-data event))))))
         (.connect session opentokKey token)
         )))

(defn onAuthNewClick [event]
  (if (zipReadState [:oauthReq :requestSent]) 
    (do
      (zipWriteState [:oauthReq] {:awaitingReqUrl true 
                                            :requestSent false})
      (.emit socket "requestAuth")
      (zipWriteState 
        [:oauthReq]
        {:intervalId 
         (.setInterval 
           js/window 
           (fn [] 
             (if-not (zipReadState [:oauthReq :awaitingReqUrl]) 
               (do
                 (.clearInterval js/window (zipReadState 
                                             [:oauthReq :intervalId]))
                 (.open js/window (zipReadState 
                                    [:oauthReq :reqUrl]) "_system")
                 (zipWriteState [:oauthReq] {:requestSent true}))))
           1000)}))))

(defn switchActiveUser [username]
  (zipWriteStorage [:active-user] username)
  (.close (zipReadState [:popups :activePopup])))

(defn onAuthSwitchClick [event] 
  (showPopup (clj->js 
               {:template 
                (str "<div class=\"list\">"
                     (reduce str (map 
                                   (fn [username]
                                     (str "<label class=\"item item-radio\">
                                             <input type=\"radio\" name=\"group\" 
                                                    onClick=\"stream_of_redditness_cljs
                                                                  .core
                                                                  .switchActiveUser('" username "')\""
                                           (if (= username (zipReadStorage [:active-user]))
                                                  " checked=\"checked\">" ">")
                                               "<div class=\"item-content\">" username "</div>
                                             <i class=\"radio-icon ion-checkmark\"></i>
                                           </label>")) 
                                   (keys (zipReadStorage [:users]))))
                     "</div>")
                :title "Select an account to use"
                :buttons [{:text "Add new account"
                           :onTap onAuthNewClick}]})))

(defn ^:export authButtonView []
  (om/root
    (fn [data owner]
      (let [storedAuths (zipReadStorage [:users])]
        (if (< 0 (count storedAuths))
          (om/component
            (dom/h3 nil "Logged in as: " 
                    (dom/button #js {:className "button" :onClick onAuthSwitchClick} 
                                (dom/a nil (zipReadStorage
                                             [:active-user])))))
          (om/component
            (dom/button #js {:className "button" :onClick onAuthNewClick}
                        "Authorize An Account")))))
    app-state {:target (. js/document (getElementById "AuthButton"))}))

(defn renderBaseComment [baseComment]
  (dom/div #js {:className "item"} 
           (:content baseComment)
           (apply dom/div #js {:className "list"} 
                  (map renderBaseComment 
                       (reverse 
                         (sort-by :time (vals (:comments baseComment))))))))

(defn renderBaseComment1 [baseComment]
  (dom/div (clj->js {:className "item" :style {:padding "0px" :backgroundColor (:color baseComment)}})
           (dom/div (clj->js {:className "item" :style {:marginLeft "10px"}})
                    (:content baseComment)
                    (apply dom/div #js {:className "list"} 
                           (map renderBaseComment 
                                (reverse 
                                  (sort-by :time (vals (:comments baseComment)))))))))

(defn renderThreads [threads]
  (->> threads
       vals
       (map (fn [thread] (reduce
                           (fn [t k]
                             (assoc-in t [:comments k :color] (:color thread)))
                           thread 
                           (keys (:comments thread)))))
       (reduce deep-merge)
       ;;(reduce #(loop [l1 %1 l2 %2 lmerged []]
       ;;           (let [l1head (first l1) l1rest (rest l1)
       ;;                 l2head (first l2) l2rest (rest l2)]
       ;;             (if (or l1head l2head)
       ;;               (if (and l1head 
       ;;                        (or (not l2head)
       ;;                            (> (:time l1head) (:time l2head))))
       ;;                 (recur l1rest 
       ;;                        (conj l2rest l2head) 
       ;;                        (conj lmerged l1head))
       ;;                 (recur (conj l1rest l1head) 
       ;;                        l2rest 
       ;;                        (conj lmerged l2head)))
       ;;               lmerged))))
       :comments
       vals
       (sort-by :time)
       reverse
       (map renderBaseComment1)))

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
                             keyword)
                         body 
                         (-> commentData
                             (get "body"))
                         t
                         (-> commentData
                             (get "created"))]
                     (if (= kind "more")
                       (do 
                         (zipWriteState 
                           [:reddit :requestQueue]
                           [{:time (.now js/Date)
                            :threadId (first threadIds)
                            :requestFun (fn []
                                          (GET 
                                            (str "https://api.reddit.com/api/"
                                                 "morechildren?link_id=t3_"
                                                 (name (first threadIds))
                                                 "&children="
                                                 childs
                                                 "&sort=new")
                                               {:handler (partial moreCommentsJSONHandler 
                                                                  (parentId paths))}))
                            :type :more}])
                         [moreComments paths])
                       [(deep-merge 
                          moreComments
                          (reduce (fn [commentTree pathEl]
                                    {pathEl commentTree}) {commentId 
                                                           {:id commentId 
                                                            :content body
                                                            :comments {}
                                                            :time t}} (reverse (parentId paths))))  
                        (assoc paths commentId 
                          (concat (parentId paths) 
                                  [commentId :comments]))]))) 
                 [{} {(first (rest (reverse threadIds))) threadIds}] %))
             first)))
    (reduce deep-merge {})
    (zipWriteState [:reddit :activeThreads]))))

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
         (zipWriteState [:reddit :requestQueue])
         )
       t1))
    (map (fn [c] [(-> c (get "data") (get "id") keyword) 
                  {:comments (processCommentTree (concat
                                                   pathTo
                                                   [(keyword (-> c 
                                                        (get "data") 
                                                        (get "id"))) :comments]) 
                                                 (-> c
                                                     (get "data")
                                                     (get "replies")))
                   :content (-> c (get "data") (get "body"))
                   :time (-> c (get "data") (get "created"))
                   :id (-> c (get "data") (get "id"))}]))
    (into {})))

(defn newCommentsJSONHandler [threadId response]
  (if (zipReadState [:reddit :activeThreads threadId]) 
    (->> 
      (js->clj response)
      (#(nth % 1))
      (processCommentTree [threadId :comments])
      ((fn [comments] {:comments comments}))
      (zipWriteState [:reddit :activeThreads threadId])))
  ;;(println "we here tho")
  ;;(doall (map #(.signal (zipReadState [:opentokSessions threadId :session])
  ;;               (clj->js {:data %})) (range 10)))
  )
  ;;(.signal (zipReadState [:opentokSessions threadId :session]) 
  ;;         (clj->js {:data (zipReadState [:reddit :activeThreads threadId])})
  ;;         (fn [err] (if err (println (.-message err)) (println "SHOULD WORK WHAT DAFUQ")))))

(defn pollReddit []
  (println "Still doin this shit")
  (let [incedWaitTimes (->> 
                         (zipReadState [:reddit :activeThreads])
                         (map (fn [[k v]] [k (assoc v 
                                               :waitTime 
                                               (+ 1 (:waitTime v)))]))
                         (into {}))
        targetId (->> incedWaitTimes
                      (apply max-key (fn [[k v]] (:waitTime v)))
                      first)]
    (->> {targetId {:waitTime 0}}
         (#(deep-merge incedWaitTimes %))
         (zipWriteState [:reddit :activeThreads]))
    (GET (str "https://api.reddit.com/comments/" 
              (name targetId) ".json?sort=new")
         {:handler (partial newCommentsJSONHandler [targetId] processCommentTree)})))

(defn newCommentsPoller [threadId]
  (GET (str "https://api.reddit.com/comments/"
            (name threadId) ".json?sort=new")
       {:handler (partial newCommentsJSONHandler threadId)})
  (.setTimeout js/window (fn [] (newCommentsPoller threadId)) 31500))

(defn myFun []
  (reduce (fn [df dc] (assoc df :a (:a dc))) {} [{:a 1} {:a 2}]))

(defn ^:export streamView [threadsString]
  (let [threads (->> (str "[" (->>
                                (string/split threadsString #",")
                                (map (fn [item] (str "\"" item "\"")))
                                (string/join ",")) 
                          "]")
                     (.parse js/JSON)
                     js->clj
                     (map keyword))
        activeThreads (zipReadState [:reddit :activeThreads])
        stillActiveThreads (select-keys 
                             activeThreads 
                             (for [[k v] activeThreads when (some #{k} 
                                                                  threads)] k))]
    (->> threads
         (map vector (reverse ["#ff0000" "#00ff00" "#0000ff" "#FFFF00" "#00FFFF" "#FF00FF"]))
         (reduce #(assoc %1 (nth %2 1) {:waitTime 0 :requestQueue [] :comments {} 
                                        :color (nth %2 0) :id (nth %2 1)}) {})
         (deep-merge stillActiveThreads)
         (#(do 
             (zipWriteState [:reddit :activeThreads] %)
             (->> %
                  keys
                  (map (fn [threadId] 
                         {:time (.now js/Date)
                          :threadId threadId
                          :requestFun (fn [] (newCommentsPoller threadId))
                          :type :new}))
                  ((fn [requests]
                     (zipWriteState 
                       [:reddit :requestQueue] requests))))))))
  (doall (->> 
           (zipReadState [:reddit :activeThreads])
           keys
           (map (fn [threadId] (.emit socket "joinThread" threadId)))))
  (om/root
    (fn [activeThreads owner]
      (om/component (apply dom/div #js {:className "list"} 
                           (renderThreads (:activeThreads (:reddit activeThreads))))))
    ;;(:activeThreads (:reddit 
                      app-state
    ;;                  )) 
    {:target (. js/document (getElementById "StreamContainer"))}))

(defn makeNextRequest []
  (->> 
    (zipReadState [:reddit :requestQueue])
    (filter #((:threadId %) (zipReadState [:reddit :activeThreads])))
    (sort-by :time)
    (partition2 #(= :new (:type %)))
    ((fn [[news others]]
       (->
         (reduce
           (fn [dict threadDict]
             (assoc dict (:threadId threadDict) threadDict))
           {} 
           news)
         vals
         (concat others))))
    ((fn [requests]
       (if (first requests) ((:requestFun (first requests))))
       (zipOverwriteState [:reddit :requestQueue] (rest requests))))))

(.setInterval js/window makeNextRequest 2200)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
) 