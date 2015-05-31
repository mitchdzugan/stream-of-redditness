(ns ^:figwheel-always stream-of-redditness-cljs.controllers
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

(defn ^:export stream-controller [thread-ids-string colors-string]
  (let [thread-ids (map keyword (csl-to-vector thread-ids-string ""))
        colors (csl-to-vector colors-string "#")]
    (active-threads/set-active-threads thread-ids colors)
    (views/stream-view)))