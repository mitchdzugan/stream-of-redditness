(ns ^:figwheel-always stream-of-redditness-cljs.ctrls
    (:require [stream-of-redditness-cljs.active-threads :as active-threads]
              [clojure.string :as string]
              [stream-of-redditness-cljs.views :as views]))

(defn csl-to-vector [csl prepend-string]
  (->> (str "[" (->>
                  (string/split csl #",")
                  (map (fn [item] (str "\"" prepend-string item "\"")))
                  (string/join ",")) 
            "]")
       (.parse js/JSON)
       js->clj))

(defn ^:export stream-ctrls [thread-ids-string colors-string]
  (let [thread-ids (map keyword (csl-to-vector thread-ids-string ""))
        colors (concat (csl-to-vector colors-string "#")
                       (cycle ["#387ef5" "#33cd5f" "#ffc900" 
                               "#ef473a" "#886aea" "#444444"]))]
    (active-threads/set-active-threads thread-ids colors)
    (views/stream-view)))