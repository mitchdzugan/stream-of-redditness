(defproject stream-of-redditness-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta1"]
                 [org.clojure/clojurescript "0.0-3208"]
                 [org.omcljs/om "0.8.8"]]

  :plugins [[lein-cljsbuild "1.0.5"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out/stream_of_redditness_cljs" "out/stream_of_redditness_cljs.js"]

  :cljsbuild {
    :builds [{:id "stream-of-redditness-cljs"
              :source-paths ["src"]
              :compiler {
                :main stream-of-redditness-cljs.core
                :output-to "out/stream_of_redditness_cljs.js"
                :output-dir "out"
                :optimizations :none
                :verbose true}}]})
