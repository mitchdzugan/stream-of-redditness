(ns ^:figwheel-always stream-of-redditness-cljs.popup
    (:require [stream-of-redditness-cljs.util :as util]
              [stream-of-redditness-cljs.globals :as globals]))


(def deep-merge-in! (partial util/deep-merge-in! globals/popup-atom))
(def write-in! (partial util/write-in! globals/popup-atom))
(def get-in! (partial util/get-in! globals/popup-atom))

(defn close-active-popup []
  (.close (get-in! [:active-popup])))

(.addEventListener js/document "click" 
                   (fn []
                     (if (and 
                           (get-in! [:last-click-not-in-popup])
                           (get-in! [:active-popup]))
                       (close-active-popup))
                     (write-in! [:last-click-not-in-popup] true)))

(defn ^:export registerPopupShower [popupShower]
  (write-in! [:popup-shower] popupShower))

(defn ^:export showPopup [popupDetails]
  (let [popup ((get-in! [:popup-shower]) popupDetails)]
    (-> js/document
        (.getElementsByClassName "popup") 
        (.item 0)
        (.addEventListener "click" (fn [] (write-in! 
                                            [:last-click-not-in-popup] 
                                            false))))
    (write-in! [:active-popup] popup)
    (.then popup (fn [res] (write-in! [:active-popup] nil)))))