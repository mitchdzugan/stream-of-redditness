// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof stream_of_redditness_cljs.core.app_state !== 'undefined'){
} else {
stream_of_redditness_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"awaitingAuthVal","awaitingAuthVal",1059582561),false,new cljs.core.Keyword(null,"authVal","authVal",34653298),"FUCK YOU",new cljs.core.Keyword(null,"authIntervalId","authIntervalId",1829584553),(0),new cljs.core.Keyword(null,"authWorkCleared","authWorkCleared",2086668602),true], null));
}
stream_of_redditness_cljs.core.socket = io("http://localhost:3000");
stream_of_redditness_cljs.core.socket.on("authVal",(function (msg){
if(cljs.core.truth_(new cljs.core.Keyword(null,"awaitingAuthVal","awaitingAuthVal",1059582561).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state)))){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"authVal","authVal",34653298),msg,new cljs.core.Keyword(null,"awaitingAuthVal","awaitingAuthVal",1059582561),false);
}));
} else {
return null;
}
}));
stream_of_redditness_cljs.core.onAuthNewClick = (function stream_of_redditness_cljs$core$onAuthNewClick(event){
if(cljs.core.truth_(new cljs.core.Keyword(null,"authWorkCleared","authWorkCleared",2086668602).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state)))){
cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"awaitingAuthVal","awaitingAuthVal",1059582561),true,new cljs.core.Keyword(null,"authWorkCleared","authWorkCleared",2086668602),false);
}));

stream_of_redditness_cljs.core.socket.emit("requestAuth");

return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"authIntervalId","authIntervalId",1829584553),window.setInterval((function (){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"awaitingAuthVal","awaitingAuthVal",1059582561).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state)))){
window.clearInterval(new cljs.core.Keyword(null,"authIntervalId","authIntervalId",1829584553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state)));

window.open(new cljs.core.Keyword(null,"authVal","authVal",34653298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state)),"_system");

return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"authWorkCleared","authWorkCleared",2086668602),true);
}));
} else {
return null;
}
}),(1000)));
}));
} else {
return null;
}
});
om.core.root.call(null,(function (data,owner){
if(typeof stream_of_redditness_cljs.core.t21366 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t21366 = (function (owner,data,meta21367){
this.owner = owner;
this.data = data;
this.meta21367 = meta21367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t21366.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t21366.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button(null,"Ayy lmao"),React.DOM.br(null),React.DOM.button({"onClick": stream_of_redditness_cljs.core.onAuthNewClick, "id": "AuthButton"},"Authorize New Account"),React.DOM.h2(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

stream_of_redditness_cljs.core.t21366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21368){
var self__ = this;
var _21368__$1 = this;
return self__.meta21367;
});

stream_of_redditness_cljs.core.t21366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21368,meta21367__$1){
var self__ = this;
var _21368__$1 = this;
return (new stream_of_redditness_cljs.core.t21366(self__.owner,self__.data,meta21367__$1));
});

stream_of_redditness_cljs.core.t21366.cljs$lang$type = true;

stream_of_redditness_cljs.core.t21366.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t21366";

stream_of_redditness_cljs.core.t21366.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t21366");
});

stream_of_redditness_cljs.core.__GT_t21366 = (function stream_of_redditness_cljs$core$__GT_t21366(owner__$1,data__$1,meta21367){
return (new stream_of_redditness_cljs.core.t21366(owner__$1,data__$1,meta21367));
});

}

return (new stream_of_redditness_cljs.core.t21366(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),stream_of_redditness_cljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
stream_of_redditness_cljs.core.on_js_reload = (function stream_of_redditness_cljs$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431876831931