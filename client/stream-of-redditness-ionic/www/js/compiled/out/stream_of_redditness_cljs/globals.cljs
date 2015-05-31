(ns ^:figwheel-always stream-of-redditness-cljs.globals)

(defonce active-threads-atom (atom {:threads {}
                                    :comment ""}))
(defonce request-queue-atom (atom []))
(defonce opentok-sessions-atom (atom {}))
(defonce auth-atom (atom {}))
(defonce popup-atom (atom {}))
(defonce socket (js/io "http://localhost:3000"))