(ns ^:figwheel-always stream-of-redditness-cljs.core
    (:require[om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom { :text "Hello world!"
                           :awaitingAuthVal false
                           :authVal "FUCK YOU"
                           :authIntervalId 0
                           :authWorkCleared true}))

(def socket (js/io "http://localhost:3000"))
(.on socket "authVal" 
     (fn [msg] (if (:awaitingAuthVal @app-state) 
                 (swap! app-state (fn [state] (assoc state :authVal msg :awaitingAuthVal false))))))

(defn onAuthNewClick [event]
  (if (:authWorkCleared @app-state) 
    (do
      (swap! app-state (fn [state] (assoc state :awaitingAuthVal true :authWorkCleared false)))
      (.emit socket "requestAuth")
      (swap! app-state 
             (fn [state] 
               (assoc state :authIntervalId 
                 (.setInterval 
                   js/window 
                   (fn [] 
                     (if-not (:awaitingAuthVal @app-state) 
                       (do
                         (.clearInterval js/window (:authIntervalId @app-state))
                         (.open js/window (:authVal @app-state) "_system")
                         (swap! app-state (fn [state] (assoc state :authWorkCleared true))))))
                   1000)))))))

(om/root
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (dom/div nil
          (dom/button nil "Ayy lmao") (dom/br nil)
          (dom/button #js {:id "AuthButton" :onClick onAuthNewClick} "Authorize New Account")
          (dom/h2 nil (:text data))))))
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
) 

