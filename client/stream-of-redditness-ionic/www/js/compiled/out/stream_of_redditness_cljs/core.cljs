(ns ^:figwheel-always stream-of-redditness-cljs.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)
(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom
                     {:tripwire false
                      :oauthReq
                      {:awaitingReqUrl false
                       :reqUrl ""
                       :intervalId 0
                       :requestSent true}}))

(defn deep-merge [a b]
  (merge-with (fn [x y]
                (if (map? x) (deep-merge x y) y)) a b))

(defn readAppStateWithZipper [zip]
  (reduce #(get %1 %2) @app-state zip))

(defn writeAppState [hashmap]
    (swap! app-state (fn [state] (deep-merge state hashmap))))
(defn writeAppStateWithZipper [zip hashmap]
  (writeAppState (reduce #(hash-map %2 %1) hashmap (reverse zip))))
(defn refreshView []
  (writeAppStateWithZipper [:tripwire] 
                           (not (readAppStateWithZipper [:tripwire]))))

(defn parseObjForce [jsonString]
  (let [parsed (try 
                  (js->clj (.parse js/JSON jsonString)) 
                  (catch js/Error e {}))]
    (if (map? parsed)
      parsed
      {})))

(def localStorage (.-localStorage js/window))
(def storageString "StreamOfRedditnessStorage")
(defn readLocalStorage [] (-> localStorage 
                              (.getItem storageString) 
                              parseObjForce))
(defn readLocalStorageWithZipper [zip] 
  (reduce #(get %1 (name %2)) (readLocalStorage) zip))
(defn writeLocalStorage [hashmap]
  (.setItem localStorage storageString 
            (->> (deep-merge (readLocalStorage) hashmap)
                 clj->js
                 (.stringify js/JSON))))
(defn writeLocalStorageWithZipper [zip hashmap]
  (writeLocalStorage (reduce #(hash-map %2 %1) hashmap (reverse zip))))

(def socket (js/io "http://localhost:3000"))
(.on socket "authVal" 
     (fn [msg] (if (readAppStateWithZipper 
                     [:oauthReq :awaitingReqUrl])
                 (writeAppStateWithZipper 
                   [:oauthReq] 
                   {:reqUrl msg :awaitingReqUrl false}))))
(.on socket "authData"
     (fn [msg]
       (let [msg (js->clj msg)]
         (writeLocalStorageWithZipper [:users] msg)
         (writeLocalStorageWithZipper [:active-user] (first (first msg)))
         (refreshView))))

(defn onAuthNewClick [event]
  (if (readAppStateWithZipper [:oauthReq :requestSent]) 
    (do
      (writeAppStateWithZipper [:oauthReq] {:awaitingReqUrl true 
                                            :requestSent false})
      (.emit socket "requestAuth")
      (writeAppStateWithZipper 
        [:oauthReq]
        {:intervalId 
         (.setInterval 
           js/window 
           (fn [] 
             (if-not (readAppStateWithZipper [:oauthReq :awaitingReqUrl]) 
               (do
                 (.clearInterval js/window (readAppStateWithZipper 
                                             [:oauthReq :intervalId]))
                 (.open js/window (readAppStateWithZipper 
                                             [:oauthReq :reqUrl]) "_system")
                 (writeAppStateWithZipper [:oauthReq] {:requestSent true}))))
           1000)}))))

(defn ^:export authButton []
  (om/root
    (fn [data owner]
      (let [storedAuths (readLocalStorageWithZipper [:users])]
        (if (< 0 (count storedAuths))
            (reify om/IRender
              (render [_]
                      (dom/span nil "Currently logged in as: " 
                                (dom/button #js {:class "button"} 
                                            (readLocalStorageWithZipper 
                                              [:active-user])))))
            (reify om/IRender 
            (render [_] 
                    (dom/button #js {:class "button" :onClick onAuthNewClick}
                                "Authorize Account"))))))
    app-state {:target (. js/document (getElementById "AuthButton"))}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
) 