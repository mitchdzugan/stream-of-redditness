// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.ctrls');
goog.require('cljs.core');
goog.require('stream_of_redditness_cljs.views');
goog.require('clojure.string');
goog.require('stream_of_redditness_cljs.active_threads');
stream_of_redditness_cljs.ctrls.csl_to_vector = (function stream_of_redditness_cljs$ctrls$csl_to_vector(csl,prepend_string){
return cljs.core.js__GT_clj.call(null,JSON.parse([cljs.core.str("["),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,(function (item){
return [cljs.core.str("\""),cljs.core.str(prepend_string),cljs.core.str(item),cljs.core.str("\"")].join('');
}),clojure.string.split.call(null,csl,/,/)))),cljs.core.str("]")].join('')));
});
stream_of_redditness_cljs.ctrls.stream_ctrls = (function stream_of_redditness_cljs$ctrls$stream_ctrls(thread_ids_string,colors_string){
var thread_ids = cljs.core.map.call(null,cljs.core.keyword,stream_of_redditness_cljs.ctrls.csl_to_vector.call(null,thread_ids_string,""));
var colors = cljs.core.concat.call(null,stream_of_redditness_cljs.ctrls.csl_to_vector.call(null,colors_string,"#"),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#387ef5","#33cd5f","#ffc900","#ef473a","#886aea","#444444"], null)));
stream_of_redditness_cljs.active_threads.set_active_threads.call(null,thread_ids,colors);

return stream_of_redditness_cljs.views.stream_view.call(null);
});
goog.exportSymbol('stream_of_redditness_cljs.ctrls.stream_ctrls', stream_of_redditness_cljs.ctrls.stream_ctrls);

//# sourceMappingURL=ctrls.js.map?rel=1433044912175