(ns ^:figwheel-always stream-of-redditness-cljs.io
    (:require [stream-of-redditness-cljs.state :as state]
              [ajax.core :refer [GET POST]]
              [clojure.string :as string]
              [clojure.set :as set]
              [cljs-http.client :as http]))


;; Close popups if click occurs outside of popup
(.addEventListener js/document "click" 
                   (fn [] 
                     (if (and 
                           (zipReadState [:popups :lastClickNotInPopup])
                           (zipReadState [:popups :activePopup]))
                       (.close (zipReadState [:popups :activePopup])))
                     (zipWriteState [:popups :lastClickNotInPopup] true)))