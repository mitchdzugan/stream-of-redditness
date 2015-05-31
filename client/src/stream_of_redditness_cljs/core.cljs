(ns ^:figwheel-always stream-of-redditness-cljs.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [ajax.core :refer [GET POST]]
              [clojure.string :as string]
              [clojure.set :as set]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<!]]
              [stream-of-redditness-cljs.popup]
              [stream-of-redditness-cljs.ctrls]
              [stream-of-redditness-cljs.views]
              [stream-of-redditness-cljs.opentok])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)
(println "Edits to this text should show up in your developer console.")

(defn printReturn [a]
  (println a)
  a)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
) 