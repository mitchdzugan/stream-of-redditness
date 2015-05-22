(ns stream-of-redditness-cljs.core)

(defmacro defer [body]
  `(let [yield# (cljs.core.async/chan)]
     (js/setImmediate #(cljs.core.async/put! yield# (list ~@(rest body))))
     (apply ~(first body) (cljs.core.async/<! yield#))))