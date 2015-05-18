// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof stream_of_redditness_cljs.core.app_state !== 'undefined'){
} else {
stream_of_redditness_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973),false,new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),false,new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900),"",new cljs.core.Keyword(null,"intervalId","intervalId",665295291),(0),new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),true], null)], null));
}
stream_of_redditness_cljs.core.deep_merge = (function stream_of_redditness_cljs$core$deep_merge(a,b){
return cljs.core.merge_with.call(null,(function (x,y){
if(cljs.core.map_QMARK_.call(null,x)){
return stream_of_redditness_cljs$core$deep_merge.call(null,x,y);
} else {
return y;
}
}),a,b);
});
stream_of_redditness_cljs.core.readAppStateWithZipper = (function stream_of_redditness_cljs$core$readAppStateWithZipper(zip){
return cljs.core.reduce.call(null,(function (p1__25583_SHARP_,p2__25584_SHARP_){
return cljs.core.get.call(null,p1__25583_SHARP_,p2__25584_SHARP_);
}),cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state),zip);
});
stream_of_redditness_cljs.core.writeAppState = (function stream_of_redditness_cljs$core$writeAppState(hashmap){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return stream_of_redditness_cljs.core.deep_merge.call(null,state,hashmap);
}));
});
stream_of_redditness_cljs.core.writeAppStateWithZipper = (function stream_of_redditness_cljs$core$writeAppStateWithZipper(zip,hashmap){
return stream_of_redditness_cljs.core.writeAppState.call(null,cljs.core.reduce.call(null,(function (p1__25586_SHARP_,p2__25585_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__25585_SHARP_],[p1__25586_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});
stream_of_redditness_cljs.core.refreshView = (function stream_of_redditness_cljs$core$refreshView(){
return stream_of_redditness_cljs.core.writeAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973)], null),cljs.core.not.call(null,stream_of_redditness_cljs.core.readAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973)], null))));
});
stream_of_redditness_cljs.core.parseObjForce = (function stream_of_redditness_cljs$core$parseObjForce(jsonString){
var parsed = (function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(jsonString));
}catch (e25588){if((e25588 instanceof Error)){
var e = e25588;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e25588;

}
}})();
if(cljs.core.map_QMARK_.call(null,parsed)){
return parsed;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
stream_of_redditness_cljs.core.localStorage = window.localStorage;
stream_of_redditness_cljs.core.storageString = "StreamOfRedditnessStorage";
stream_of_redditness_cljs.core.readLocalStorage = (function stream_of_redditness_cljs$core$readLocalStorage(){
return stream_of_redditness_cljs.core.parseObjForce.call(null,stream_of_redditness_cljs.core.localStorage.getItem(stream_of_redditness_cljs.core.storageString));
});
stream_of_redditness_cljs.core.readLocalStorageWithZipper = (function stream_of_redditness_cljs$core$readLocalStorageWithZipper(zip){
return cljs.core.reduce.call(null,(function (p1__25589_SHARP_,p2__25590_SHARP_){
return cljs.core.get.call(null,p1__25589_SHARP_,cljs.core.name.call(null,p2__25590_SHARP_));
}),stream_of_redditness_cljs.core.readLocalStorage.call(null),zip);
});
stream_of_redditness_cljs.core.writeLocalStorage = (function stream_of_redditness_cljs$core$writeLocalStorage(hashmap){
return stream_of_redditness_cljs.core.localStorage.setItem(stream_of_redditness_cljs.core.storageString,JSON.stringify(cljs.core.clj__GT_js.call(null,stream_of_redditness_cljs.core.deep_merge.call(null,stream_of_redditness_cljs.core.readLocalStorage.call(null),hashmap))));
});
stream_of_redditness_cljs.core.writeLocalStorageWithZipper = (function stream_of_redditness_cljs$core$writeLocalStorageWithZipper(zip,hashmap){
return stream_of_redditness_cljs.core.writeLocalStorage.call(null,cljs.core.reduce.call(null,(function (p1__25592_SHARP_,p2__25591_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__25591_SHARP_],[p1__25592_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});
stream_of_redditness_cljs.core.socket = io("http://localhost:3000");
stream_of_redditness_cljs.core.socket.on("authVal",(function (msg){
if(cljs.core.truth_(stream_of_redditness_cljs.core.readAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634)], null)))){
return stream_of_redditness_cljs.core.writeAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900),msg,new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),false], null));
} else {
return null;
}
}));
stream_of_redditness_cljs.core.socket.on("authData",(function (msg){
var msg__$1 = cljs.core.js__GT_clj.call(null,msg);
stream_of_redditness_cljs.core.writeLocalStorageWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),msg__$1);

stream_of_redditness_cljs.core.writeLocalStorageWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null),cljs.core.first.call(null,cljs.core.first.call(null,msg__$1)));

return stream_of_redditness_cljs.core.refreshView.call(null);
}));
stream_of_redditness_cljs.core.onAuthNewClick = (function stream_of_redditness_cljs$core$onAuthNewClick(event){
if(cljs.core.truth_(stream_of_redditness_cljs.core.readAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"requestSent","requestSent",-727519711)], null)))){
stream_of_redditness_cljs.core.writeAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),true,new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),false], null));

stream_of_redditness_cljs.core.socket.emit("requestAuth");

return stream_of_redditness_cljs.core.writeAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intervalId","intervalId",665295291),window.setInterval((function (){
if(cljs.core.not.call(null,stream_of_redditness_cljs.core.readAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634)], null)))){
window.clearInterval(stream_of_redditness_cljs.core.readAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"intervalId","intervalId",665295291)], null)));

window.open(stream_of_redditness_cljs.core.readAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900)], null)),"_system");

return stream_of_redditness_cljs.core.writeAppStateWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),true], null));
} else {
return null;
}
}),(1000))], null));
} else {
return null;
}
});
stream_of_redditness_cljs.core.authButton = (function stream_of_redditness_cljs$core$authButton(){
return om.core.root.call(null,(function (data,owner){
var storedAuths = stream_of_redditness_cljs.core.readLocalStorageWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null));
if(((0) < cljs.core.count.call(null,storedAuths))){
if(typeof stream_of_redditness_cljs.core.t25599 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t25599 = (function (storedAuths,owner,data,authButton,meta25600){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButton = authButton;
this.meta25600 = meta25600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t25599.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t25599.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.span(null,"Currently logged in as: ",React.DOM.button({"class": "button"},stream_of_redditness_cljs.core.readLocalStorageWithZipper.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null))));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t25599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_25601){
var self__ = this;
var _25601__$1 = this;
return self__.meta25600;
});})(storedAuths))
;

stream_of_redditness_cljs.core.t25599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_25601,meta25600__$1){
var self__ = this;
var _25601__$1 = this;
return (new stream_of_redditness_cljs.core.t25599(self__.storedAuths,self__.owner,self__.data,self__.authButton,meta25600__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t25599.cljs$lang$type = true;

stream_of_redditness_cljs.core.t25599.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t25599";

stream_of_redditness_cljs.core.t25599.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t25599");
});})(storedAuths))
;

stream_of_redditness_cljs.core.__GT_t25599 = ((function (storedAuths){
return (function stream_of_redditness_cljs$core$authButton_$___GT_t25599(storedAuths__$1,owner__$1,data__$1,authButton__$1,meta25600){
return (new stream_of_redditness_cljs.core.t25599(storedAuths__$1,owner__$1,data__$1,authButton__$1,meta25600));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.core.t25599(storedAuths,owner,data,stream_of_redditness_cljs$core$authButton,cljs.core.PersistentArrayMap.EMPTY));
} else {
if(typeof stream_of_redditness_cljs.core.t25602 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t25602 = (function (storedAuths,owner,data,authButton,meta25603){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButton = authButton;
this.meta25603 = meta25603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t25602.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t25602.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.button({"onClick": stream_of_redditness_cljs.core.onAuthNewClick, "class": "button"},"Authorize Account");
});})(storedAuths))
;

stream_of_redditness_cljs.core.t25602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_25604){
var self__ = this;
var _25604__$1 = this;
return self__.meta25603;
});})(storedAuths))
;

stream_of_redditness_cljs.core.t25602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_25604,meta25603__$1){
var self__ = this;
var _25604__$1 = this;
return (new stream_of_redditness_cljs.core.t25602(self__.storedAuths,self__.owner,self__.data,self__.authButton,meta25603__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t25602.cljs$lang$type = true;

stream_of_redditness_cljs.core.t25602.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t25602";

stream_of_redditness_cljs.core.t25602.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t25602");
});})(storedAuths))
;

stream_of_redditness_cljs.core.__GT_t25602 = ((function (storedAuths){
return (function stream_of_redditness_cljs$core$authButton_$___GT_t25602(storedAuths__$1,owner__$1,data__$1,authButton__$1,meta25603){
return (new stream_of_redditness_cljs.core.t25602(storedAuths__$1,owner__$1,data__$1,authButton__$1,meta25603));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.core.t25602(storedAuths,owner,data,stream_of_redditness_cljs$core$authButton,cljs.core.PersistentArrayMap.EMPTY));
}
}),stream_of_redditness_cljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("AuthButton")], null));
});
goog.exportSymbol('stream_of_redditness_cljs.core.authButton', stream_of_redditness_cljs.core.authButton);
stream_of_redditness_cljs.core.on_js_reload = (function stream_of_redditness_cljs$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431950191001