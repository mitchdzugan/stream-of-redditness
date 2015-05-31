(ns ^:figwheel-always stream-of-redditness-cljs.auth
    (:require [stream-of-redditness-cljs.globals :as globals]
              [stream-of-redditness-cljs.util :as util]
              [stream-of-redditness-cljs.popup :as popup]))

(def deep-merge-in! (partial util/deep-merge-in! globals/auth-atom))
(def write-in! (partial util/write-in! globals/auth-atom))
(def get-in! (partial util/get-in! globals/auth-atom))


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
            (->> (util/deep-merge (readStorage) (js->clj (clj->js hashmap)))
                 clj->js
                 (.stringify js/JSON))))
(defn zipWriteStorage [zip hashmap]
  (writeStorage (reduce #(hash-map %2 %1) hashmap (reverse zip))))

(.on globals/socket "authVal" 
     (fn [msg] (if (get-in! [:awaiting-req-url])
                 (deep-merge-in! [] {:req-url msg :awaiting-req-url false}))))

(.on globals/socket "authData"
     (fn [msg]
       (let [msg (js->clj msg)]
         (println msg)
         (zipWriteStorage [:users] msg)
         (zipWriteStorage [:active-user] (first (first msg))))))

(defn onAuthNewClick [event]
  (if (get-in! [:request-sent]) 
    (do
      (deep-merge-in! [] {:awaiting-req-url true 
                          :request-sent false})
      (.emit globals/socket "requestAuth")
      (deep-merge-in! 
        []
        {:interval-id 
         (.setInterval 
           js/window 
           (fn [] 
             (if-not (get-in! [:awaiting-req-url]) 
               (do
                 (.clearInterval js/window (get-in! 
                                             [:interval-id]))
                 (.open js/window (get-in! 
                                    [:req-url]) "_blank")
                 (deep-merge-in! [] {:request-sent true}))))
           1000)}))))

(defn switchActiveUser [username]
  (zipWriteStorage [:active-user] username)
  (popup/close-active-popup))

(defn onAuthSwitchClick [event]
  (println "AYYYYYYYYYY LMAO")
  (popup/showPopup 
    (clj->js 
      {:template 
       (str "<div class=\"list\">"
            (reduce str (map 
                          (fn [username]
                            (str "<label class=\"item item-radio\">
                                    <input type=\"radio\" name=\"group\" 
                                           onClick=\"stream_of_redditness_cljs
                                                         .auth
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

(defn users []
  (zipReadStorage [:users]))
(defn active-user []
  (zipReadStorage [:active-user]))

(defn active-access-token []
  (zipReadStorage 
    [:users (zipReadStorage [:active-user]) :access_token]))