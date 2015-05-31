// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.controllers');
goog.require('cljs.core');
goog.require('stream_of_redditness_cljs.views');
goog.require('clojure.string');
goog.require('stream_of_redditness_cljs.active_threads');
stream_of_redditness_cljs.controllers.csl_to_vector = (function stream_of_redditness_cljs$controllers$csl_to_vector(csl,prepend_string){
return cljs.core.js__GT_clj.call(null,JSON.parse([cljs.core.str("["),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,(function (item){
return [cljs.core.str("\""),cljs.core.str(prepend_string),cljs.core.str(item),cljs.core.str("\"")].join('');
}),clojure.string.split.call(null,csl,/,/)))),cljs.core.str("]")].join('')));
});
stream_of_redditness_cljs.controllers.stream_controller = (function stream_of_redditness_cljs$controllers$stream_controller(thread_ids_string,colors_string){
var thread_ids = cljs.core.map.call(null,cljs.core.keyword,stream_of_redditness_cljs.controllers.csl_to_vector.call(null,thread_ids_string,""));
var colors = stream_of_redditness_cljs.controllers.csl_to_vector.call(null,colors_string,"#");
stream_of_redditness_cljs.active_threads.set_active_threads.call(null,thread_ids,colors);

return stream_of_redditness_cljs.views.stream_view.call(null);
});
goog.exportSymbol('stream_of_redditness_cljs.controllers.stream_controller', stream_of_redditness_cljs.controllers.stream_controller);

//# sourceMappingURL=controllers.js.map?rel=1432981484745