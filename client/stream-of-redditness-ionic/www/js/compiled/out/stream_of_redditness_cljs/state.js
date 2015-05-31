// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.state');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
if(typeof stream_of_redditness_cljs.state.app_state !== 'undefined'){
} else {
stream_of_redditness_cljs.state.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"subredditInput","subredditInput",-2731422),new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),new cljs.core.Keyword(null,"popularSubredditThreads","popularSubredditThreads",1612585128),new cljs.core.Keyword(null,"popularThreads","popularThreads",2052262955),new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973),new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"reddit","reddit",-1323650081)],["",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popupShower","popupShower",-451695923),(function (p){
return null;
}),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004),null,new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402),true], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,false,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),false,new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900),"",new cljs.core.Keyword(null,"intervalId","intervalId",665295291),(0),new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607),cljs.core.PersistentVector.EMPTY], null)]));
}
stream_of_redditness_cljs.state.deep_map = (function stream_of_redditness_cljs$state$deep_map(m,f){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49709){
var vec__49710 = p__49709;
var k = cljs.core.nth.call(null,vec__49710,(0),null);
var v = cljs.core.nth.call(null,vec__49710,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,stream_of_redditness_cljs$state$deep_map.call(null,v,f)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}),m));
});
stream_of_redditness_cljs.state.deep_filter = (function stream_of_redditness_cljs$state$deep_filter(m,f){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49713){
var vec__49714 = p__49713;
var k = cljs.core.nth.call(null,vec__49714,(0),null);
var v = cljs.core.nth.call(null,vec__49714,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,stream_of_redditness_cljs$state$deep_filter.call(null,v,f)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}),cljs.core.filter.call(null,f,m)));
});
stream_of_redditness_cljs.state.deep_keys_to_keywords = (function stream_of_redditness_cljs$state$deep_keys_to_keywords(m){
return stream_of_redditness_cljs.state.deep_map.call(null,m,(function (p__49717){
var vec__49718 = p__49717;
var k = cljs.core.nth.call(null,vec__49718,(0),null);
var v = cljs.core.nth.call(null,vec__49718,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}));
});
stream_of_redditness_cljs.state.deep_remove_keys = (function stream_of_redditness_cljs$state$deep_remove_keys(m,ks){
return stream_of_redditness_cljs.state.deep_filter.call(null,m,(function (p1__49719_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ks,cljs.core.first.call(null,p1__49719_SHARP_)));
}));
});
stream_of_redditness_cljs.state.deep_merge = (function stream_of_redditness_cljs$state$deep_merge(m1,m2){
return cljs.core.merge_with.call(null,(function (x,y){
if(cljs.core.map_QMARK_.call(null,y)){
return stream_of_redditness_cljs$state$deep_merge.call(null,x,y);
} else {
return y;

}
}),m1,m2);
});
/**
 * Obtain the minimal changes from map1 to map2.
 * The following two expressions are always equal
 * (deep-merge m1 (map-diff m1 m2))
 * (deep-merge m1 m2)
 */
stream_of_redditness_cljs.state.map_diff = (function stream_of_redditness_cljs$state$map_diff(m1,m2){
return cljs.core.reduce.call(null,stream_of_redditness_cljs.state.deep_merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49722){
var vec__49723 = p__49722;
var k = cljs.core.nth.call(null,vec__49723,(0),null);
var v = cljs.core.nth.call(null,vec__49723,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,m1,k))){
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var nv = stream_of_redditness_cljs$state$map_diff.call(null,k.call(null,m1),v);
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,nv)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,nv], true, false);
}
} else {
if(cljs.core.seq_QMARK_.call(null,v)){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,v))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);
}
} else {
if(cljs.core._EQ_.call(null,v,k.call(null,m1))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);

}
}
}
}
}),m2));
});
/**
 * Obtain the size in bytes of the JSON
 * representation of the map.
 */
stream_of_redditness_cljs.state.map_size_bytes = (function stream_of_redditness_cljs$state$map_size_bytes(m){
return cljs.core.count.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,m)));
});
/**
 * Segments a map into chunks where each
 * chunk's json representation's size is less
 * than the size provided.
 * The following two expressions are always equal
 * m
 * (reduce deep-merge (chunkify-map m s)
 */
stream_of_redditness_cljs.state.chunkify_map = (function stream_of_redditness_cljs$state$chunkify_map(){
var G__49727 = arguments.length;
switch (G__49727) {
case 2:
return stream_of_redditness_cljs.state.chunkify_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return stream_of_redditness_cljs.state.chunkify_map.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

stream_of_redditness_cljs.state.chunkify_map.cljs$core$IFn$_invoke$arity$2 = (function (m,s){
return stream_of_redditness_cljs.state.chunkify_map.call(null,m,s,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

stream_of_redditness_cljs.state.chunkify_map.cljs$core$IFn$_invoke$arity$5 = (function (m,s,msi,cmi,kli){
return cljs.core.reduce.call(null,(function (p__49728,p__49729){
var vec__49730 = p__49728;
var ms = cljs.core.nth.call(null,vec__49730,(0),null);
var cm = cljs.core.nth.call(null,vec__49730,(1),null);
var kl = cljs.core.nth.call(null,vec__49730,(2),null);
var vec__49731 = p__49729;
var k = cljs.core.nth.call(null,vec__49731,(0),null);
var v = cljs.core.nth.call(null,vec__49731,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
var vec__49732 = stream_of_redditness_cljs.state.chunkify_map.call(null,v,s,ms,cm,cljs.core.conj.call(null,kl,k));
var nms = cljs.core.nth.call(null,vec__49732,(0),null);
var ncm = cljs.core.nth.call(null,vec__49732,(1),null);
var _ = cljs.core.nth.call(null,vec__49732,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nms,ncm,kl], null);
} else {
if(cljs.core.seq_QMARK_.call(null,v)){
return cljs.core.List.EMPTY;
} else {
var jvm = cljs.core.reduce.call(null,((function (vec__49730,ms,cm,kl,vec__49731,k,v){
return (function (p1__49725_SHARP_,p2__49724_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__49724_SHARP_],[p1__49725_SHARP_]);
});})(vec__49730,ms,cm,kl,vec__49731,k,v))
,new cljs.core.PersistentArrayMap.fromArray([k,v], true, false),cljs.core.reverse.call(null,kl));
var nm = stream_of_redditness_cljs.state.deep_merge.call(null,cm,jvm);
if((s < stream_of_redditness_cljs.state.map_size_bytes.call(null,nm))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ms,cm),jvm,kl], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,nm,kl], null);
}

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msi,cmi,kli], null),m);
});

stream_of_redditness_cljs.state.chunkify_map.cljs$lang$maxFixedArity = 5;
stream_of_redditness_cljs.state.deep_merge_in_BANG_ = (function stream_of_redditness_cljs$state$deep_merge_in_BANG_(a,z,v){
return cljs.core.swap_BANG_.call(null,a,(function (s){
return cljs.core.update_in.call(null,s,z,(function (p1__49734_SHARP_){
return stream_of_redditness_cljs.state.deep_merge.call(null,p1__49734_SHARP_,v);
}));
}));
});
stream_of_redditness_cljs.state.write_in_BANG_ = (function stream_of_redditness_cljs$state$write_in_BANG_(a,z,v){
return cljs.core.swap_BANG_.call(null,a,(function (p1__49735_SHARP_){
return cljs.core.assoc_in.call(null,p1__49735_SHARP_,z,v);
}));
});
stream_of_redditness_cljs.state.get_in_BANG_ = (function stream_of_redditness_cljs$state$get_in_BANG_(a,z){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),z);
});
stream_of_redditness_cljs.state.parseObjForce = (function stream_of_redditness_cljs$state$parseObjForce(jsonString){
var parsed = (function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(jsonString));
}catch (e49737){if((e49737 instanceof Error)){
var e = e49737;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e49737;

}
}})();
if(cljs.core.map_QMARK_.call(null,parsed)){
return parsed;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
stream_of_redditness_cljs.state.localStorage = window.localStorage;
stream_of_redditness_cljs.state.storageString = "StreamOfRedditnessStorage";
stream_of_redditness_cljs.state.readStorage = (function stream_of_redditness_cljs$state$readStorage(){
return stream_of_redditness_cljs.state.parseObjForce.call(null,stream_of_redditness_cljs.state.localStorage.getItem(stream_of_redditness_cljs.state.storageString));
});
stream_of_redditness_cljs.state.zipReadStorage = (function stream_of_redditness_cljs$state$zipReadStorage(zip){
return cljs.core.reduce.call(null,(function (p1__49738_SHARP_,p2__49739_SHARP_){
return cljs.core.get.call(null,p1__49738_SHARP_,cljs.core.name.call(null,p2__49739_SHARP_));
}),stream_of_redditness_cljs.state.readStorage.call(null),zip);
});
stream_of_redditness_cljs.state.writeStorage = (function stream_of_redditness_cljs$state$writeStorage(hashmap){
return stream_of_redditness_cljs.state.localStorage.setItem(stream_of_redditness_cljs.state.storageString,JSON.stringify(cljs.core.clj__GT_js.call(null,stream_of_redditness_cljs.state.deep_merge.call(null,stream_of_redditness_cljs.state.readStorage.call(null),cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,hashmap))))));
});
stream_of_redditness_cljs.state.zipWriteStorage = (function stream_of_redditness_cljs$state$zipWriteStorage(zip,hashmap){
return stream_of_redditness_cljs.state.writeStorage.call(null,cljs.core.reduce.call(null,(function (p1__49741_SHARP_,p2__49740_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__49740_SHARP_],[p1__49741_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});

//# sourceMappingURL=state.js.map?rel=1432887831112