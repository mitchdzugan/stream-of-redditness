// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof stream_of_redditness_cljs.core.app_state !== 'undefined'){
} else {
stream_of_redditness_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
om.core.root.call(null,(function (data,owner){
if(typeof stream_of_redditness_cljs.core.t21365 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t21365 = (function (owner,data,meta21366){
this.owner = owner;
this.data = data;
this.meta21366 = meta21366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t21365.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t21365.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data));
});

stream_of_redditness_cljs.core.t21365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21367){
var self__ = this;
var _21367__$1 = this;
return self__.meta21366;
});

stream_of_redditness_cljs.core.t21365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21367,meta21366__$1){
var self__ = this;
var _21367__$1 = this;
return (new stream_of_redditness_cljs.core.t21365(self__.owner,self__.data,meta21366__$1));
});

stream_of_redditness_cljs.core.t21365.cljs$lang$type = true;

stream_of_redditness_cljs.core.t21365.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t21365";

stream_of_redditness_cljs.core.t21365.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t21365");
});

stream_of_redditness_cljs.core.__GT_t21365 = (function stream_of_redditness_cljs$core$__GT_t21365(owner__$1,data__$1,meta21366){
return (new stream_of_redditness_cljs.core.t21365(owner__$1,data__$1,meta21366));
});

}

return (new stream_of_redditness_cljs.core.t21365(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),stream_of_redditness_cljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
stream_of_redditness_cljs.core.on_js_reload = (function stream_of_redditness_cljs$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431821087215