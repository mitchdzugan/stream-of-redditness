(ns figwheel.connect (:require [figwheel.client] [stream-of-redditness-cljs.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload stream-of-redditness-cljs.core/on-js-reload, :build-id "dev"})

