(ns ^:figwheel-always stream-of-redditness-cljs.atoms)

(defonce active-threads-atom (atom {}))
(defonce request-queue-atom (atom []))
(defonce opentok-sessions-atom (atom {}))