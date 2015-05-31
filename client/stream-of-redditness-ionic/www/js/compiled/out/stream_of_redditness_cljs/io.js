// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.io');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('stream_of_redditness_cljs.state');
document.addEventListener("click",(function (){
if(cljs.core.truth_((function (){var and__18104__auto__ = stream_of_redditness_cljs.io.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402)], null));
if(cljs.core.truth_(and__18104__auto__)){
return stream_of_redditness_cljs.io.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null));
} else {
return and__18104__auto__;
}
})())){
stream_of_redditness_cljs.io.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null)).close();
} else {
}

return stream_of_redditness_cljs.io.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402)], null),true);
}));

//# sourceMappingURL=io.js.map?rel=1432874482702