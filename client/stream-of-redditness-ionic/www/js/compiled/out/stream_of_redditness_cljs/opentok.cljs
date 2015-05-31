(ns ^:figwheel-always stream-of-redditness-cljs.opentok
    (:require [stream-of-redditness-cljs.globals :as globals]
              [stream-of-redditness-cljs.util :as util]
              [stream-of-redditness-cljs.active-threads :as active-threads]
              [clojure.set :as set]))

(def deep-merge-in! (partial util/deep-merge-in! 
                             globals/opentok-sessions-atom))
(def write-in! (partial util/write-in! globals/opentok-sessions-atom))
(def get-in! (partial util/get-in! globals/opentok-sessions-atom))

(defn remove-from!
  [z v]
  (->> (get-in! z)
       (#(set/difference % #{v}))
       (write-in! z)))

(defn add-to!
  [z v]
  (->> (get-in! z)
       (#(set/union % #{v}))
       (write-in! z)))

(defn is-in!? [z v] (contains? (get-in! z) v))

(defn string-to-num [s] (reduce + (map #(.charCodeAt % 0)) s))

(defn introduce [session thread-id client client-id iinf]
  (println (str "Introducing: " (.-connectionId client)))
  (remove-from! [thread-id :unintroduced-clients] client-id)
  (add-to! [thread-id :should-be-introduced-clients] client-id)
  (js/setTimeout
    (fn []
      (if (is-in!? [thread-id :should-be-introduced-clients] client-id)
        (do 
          (add-to! [thread-id :unintroduced-clients] client-id)
          (remove-from! [thread-id :should-be-introduced-clients] client-id)
          (iinf session thread-id)))), 5000)
  (active-threads/send-large-data thread-id "introduction"
                                  (util/get-in! globals/active-threads-atom 
                                                [:threads thread-id]))
  (.signal session #js {:type "introduction-complete" :to client}))

(defn introduce-if-necessary [session thread-id]
  (let [my-id  (get-in! [thread-id :my-id])
        clients (get-in! [thread-id :clients])
        is-unintroduced!? (partial is-in!? [thread-id :unintroduced-clients])]
    (if-not (is-unintroduced!? my-id)
      (doseq [client-id (get-in! [thread-id :unintroduced-clients])]
        (if (= my-id (->> clients
                          keys
                          (filter #(not (is-unintroduced!? %)))
                          (sort-by string-to-num)
                          (sort-by #(- (string-to-num client-id) 
                                       (string-to-num %)))
                          first))
          (introduce session thread-id (get clients client-id) 
                     client-id introduce-if-necessary))))))

(defn ensure-someone-is-introduced [session thread-id]
  (if (= (count (get-in! [thread-id :clients]))
         (count (get-in! [thread-id :unintroduced-clients])))
   (do
     (remove-from! [thread-id :unintroduced-clients]
                   (get-in! [thread-id :my-id]))
     (.signal session #js {:type "am-introduced"})
     (introduce-if-necessary session thread-id))))

(defn set-opentok-callbacks 
  [thread-id session]
  (.on session "sessionConnected"
       (fn [_]
         (println (str "Session Connected: " 
                       (.. session -connection -connectionId)))
         (write-in! [thread-id]
                    {:session session
                     :my-id (.. session -connection -connectionId)
                     :clients {}
                     :unintroduced-clients #{}
                     :should-be-introduced-clients #{}})))
  
  (.on session "sessionDisconnected"
       (fn [_]
         (println "Disconnected")
         (swap! globals/opentok-sessions-atom #(dissoc % thread-id))))
  
  (.on session "connectionCreated" 
       (fn [event]
         (let [client (.-connection event)
               client-id (.-connectionId client)
               my-id (get-in! [thread-id :my-id])]
           (println (str "Connection Created: " client-id))
           
           (if (is-in!? [thread-id :clients] my-id)
             (do
               (if (is-in!? [thread-id :unintroduced-clients] my-id)
                 (.signal session #js {:type "am-not-introduced"}))
               (add-to! [thread-id :unintroduced-clients] client-id))
             (if (= client-id my-id)
               (add-to! [thread-id :unintroduced-clients] my-id)))
           (deep-merge-in! [thread-id :clients] {client-id client})
           (ensure-someone-is-introduced session thread-id)
           (introduce-if-necessary session thread-id))))
  
  (.on session "connectionDestroyed"
       (fn [event]
         (let [client-id (.. event -connection -connectionId)]
           (println (str "Connection Destroyed: " client-id))
           (write-in! [thread-id :clients]
                      (dissoc (get-in! [thread-id :clients] client-id)))
           (remove-from! [thread-id :unintroduced-clients] client-id)
           (remove-from! [thread-id :should-be-introduced-clients] client-id)
           (ensure-someone-is-introduced session thread-id)
           (introduce-if-necessary session thread-id))))
  
  (.on session "signal:am-not-introduced" 
       (fn [event] 
         (let [client-id (.. event -from -id)]
           (println (str "Received not introduced: " client-id))
           (add-to! [thread-id :unintroduced-clients] client-id)
           (ensure-someone-is-introduced session thread-id)
           (introduce-if-necessary session thread-id))))
  
  (.on session "signal:am-introduced" 
       (fn [event] 
         (let [client-id (.. event -from -id)]
           (println (str "Received am introduced: " client-id))
           (remove-from! [thread-id :should-be-introduced-clients] client-id)
           (remove-from! [thread-id :unintroduced-clients] client-id))))
  
  (.on session "signal:introduction" 
       (fn [event] (active-threads/write-active-thread 
                     thread-id 
                     (util/deep-keys-to-keywords (js->clj (.-data event))))))
  
  (.on session "signal:introduction-complete" 
       (fn [_]
         (println (str "I am fully introduced"))
         (remove-from! [thread-id :unintroduced-clients] 
                       (get-in! [thread-id :my-id]))
         (.signal session #js {:type "am-introduced"})))
  
  (.on session "signal:comment-update"
       (fn [event] (active-threads/write-active-thread 
                     thread-id 
                     (util/deep-keys-to-keywords (js->clj (.-data event)))))))

(.on globals/socket "threadSession"
     (fn [msg]
       (let [[thread-id-str opentok-key session-id token] (js->clj msg)
             session (.initSession js/TB session-id)
             thread-id (keyword thread-id-str)]
         (set-opentok-callbacks thread-id session)
         (.connect session opentok-key token))))