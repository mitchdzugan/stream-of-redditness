// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
stream_of_redditness_cljs.core.printReturn = (function stream_of_redditness_cljs$core$printReturn(a){
cljs.core.println.call(null,a);

return a;
});
stream_of_redditness_cljs.core.binary = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
stream_of_redditness_cljs.core.allPoss = (function (){var iter__18870__auto__ = (function stream_of_redditness_cljs$core$iter__66085(s__66086){
return (new cljs.core.LazySeq(null,(function (){
var s__66086__$1 = s__66086;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66086__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var a = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__66086__$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__66085_$_iter__66087(s__66088){
return (new cljs.core.LazySeq(null,((function (s__66086__$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__66088__$1 = s__66088;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__66088__$1);
if(temp__4126__auto____$1){
var xs__4624__auto____$1 = temp__4126__auto____$1;
var b = cljs.core.first.call(null,xs__4624__auto____$1);
var iterys__18866__auto__ = ((function (s__66088__$1,s__66086__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089(s__66090){
return (new cljs.core.LazySeq(null,((function (s__66088__$1,s__66086__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__66090__$1 = s__66090;
while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__66090__$1);
if(temp__4126__auto____$2){
var xs__4624__auto____$2 = temp__4126__auto____$2;
var c = cljs.core.first.call(null,xs__4624__auto____$2);
var iterys__18866__auto__ = ((function (s__66090__$1,s__66088__$1,s__66086__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091(s__66092){
return (new cljs.core.LazySeq(null,((function (s__66090__$1,s__66088__$1,s__66086__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__66092__$1 = s__66092;
while(true){
var temp__4126__auto____$3 = cljs.core.seq.call(null,s__66092__$1);
if(temp__4126__auto____$3){
var xs__4624__auto____$3 = temp__4126__auto____$3;
var d = cljs.core.first.call(null,xs__4624__auto____$3);
var iterys__18866__auto__ = ((function (s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091_$_iter__66093(s__66094){
return (new cljs.core.LazySeq(null,((function (s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__66094__$1 = s__66094;
while(true){
var temp__4126__auto____$4 = cljs.core.seq.call(null,s__66094__$1);
if(temp__4126__auto____$4){
var xs__4624__auto____$4 = temp__4126__auto____$4;
var e = cljs.core.first.call(null,xs__4624__auto____$4);
var iterys__18866__auto__ = ((function (s__66094__$1,s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091_$_iter__66093_$_iter__66095(s__66096){
return (new cljs.core.LazySeq(null,((function (s__66094__$1,s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__66096__$1 = s__66096;
while(true){
var temp__4126__auto____$5 = cljs.core.seq.call(null,s__66096__$1);
if(temp__4126__auto____$5){
var s__66096__$2 = temp__4126__auto____$5;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66096__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__66096__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__66098 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__66097 = (0);
while(true){
if((i__66097 < size__18869__auto__)){
var f = cljs.core._nth.call(null,c__18868__auto__,i__66097);
cljs.core.chunk_append.call(null,b__66098,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null));

var G__66099 = (i__66097 + (1));
i__66097 = G__66099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66098),stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091_$_iter__66093_$_iter__66095.call(null,cljs.core.chunk_rest.call(null,s__66096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66098),null);
}
} else {
var f = cljs.core.first.call(null,s__66096__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null),stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091_$_iter__66093_$_iter__66095.call(null,cljs.core.rest.call(null,s__66096__$2)));
}
} else {
return null;
}
break;
}
});})(s__66094__$1,s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__66094__$1,s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091_$_iter__66093.call(null,cljs.core.rest.call(null,s__66094__$1)));
} else {
var G__66100 = cljs.core.rest.call(null,s__66094__$1);
s__66094__$1 = G__66100;
continue;
}
} else {
return null;
}
break;
}
});})(s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__66092__$1,s__66090__$1,s__66088__$1,s__66086__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089_$_iter__66091.call(null,cljs.core.rest.call(null,s__66092__$1)));
} else {
var G__66101 = cljs.core.rest.call(null,s__66092__$1);
s__66092__$1 = G__66101;
continue;
}
} else {
return null;
}
break;
}
});})(s__66090__$1,s__66088__$1,s__66086__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__66090__$1,s__66088__$1,s__66086__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__66085_$_iter__66087_$_iter__66089.call(null,cljs.core.rest.call(null,s__66090__$1)));
} else {
var G__66102 = cljs.core.rest.call(null,s__66090__$1);
s__66090__$1 = G__66102;
continue;
}
} else {
return null;
}
break;
}
});})(s__66088__$1,s__66086__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__66088__$1,s__66086__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__66085_$_iter__66087.call(null,cljs.core.rest.call(null,s__66088__$1)));
} else {
var G__66103 = cljs.core.rest.call(null,s__66088__$1);
s__66088__$1 = G__66103;
continue;
}
} else {
return null;
}
break;
}
});})(s__66086__$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__66086__$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__66085.call(null,cljs.core.rest.call(null,s__66086__$1)));
} else {
var G__66104 = cljs.core.rest.call(null,s__66086__$1);
s__66086__$1 = G__66104;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18870__auto__.call(null,stream_of_redditness_cljs.core.binary);
})();
stream_of_redditness_cljs.core.partition2 = (function stream_of_redditness_cljs$core$partition2(f,l){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,f,l),cljs.core.filter.call(null,(function (p1__66105_SHARP_){
return cljs.core.not.call(null,f.call(null,p1__66105_SHARP_));
}),l)], null);
});
if(typeof stream_of_redditness_cljs.core.app_state !== 'undefined'){
} else {
stream_of_redditness_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973),false,new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),false,new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900),"",new cljs.core.Keyword(null,"intervalId","intervalId",665295291),(0),new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),true], null),new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popupShower","popupShower",-451695923),(function (p){
return null;
}),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004),null,new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402),true], null),new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607),cljs.core.PersistentVector.EMPTY], null)], null));
}
stream_of_redditness_cljs.core.set_html_BANG_ = (function stream_of_redditness_cljs$core$set_html_BANG_(el,content){
return (el["innerHTML"] = content);
});
stream_of_redditness_cljs.core.deep_merge_root = (function stream_of_redditness_cljs$core$deep_merge_root(f,a,b){
return cljs.core.merge_with.call(null,(function (x,y){
if(cljs.core.map_QMARK_.call(null,y)){
return stream_of_redditness_cljs$core$deep_merge_root.call(null,f,x,y);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return f.call(null,x,y);
} else {
return y;

}
}
}),a,b);
});
stream_of_redditness_cljs.core.merge_vectors = (function stream_of_redditness_cljs$core$merge_vectors(k,x,y){
return cljs.core.map.call(null,(function (p1__66106_SHARP_){
return stream_of_redditness_cljs.core.deep_merge_root.call(null,cljs.core.partial.call(null,stream_of_redditness_cljs$core$merge_vectors,k),cljs.core.reduce.call(null,(function (el,v){
if(cljs.core._EQ_.call(null,k.call(null,el),k.call(null,p1__66106_SHARP_))){
return el;
} else {
return p1__66106_SHARP_;
}
}),x),p1__66106_SHARP_);
}),y);
});
stream_of_redditness_cljs.core.deep_merge = (function stream_of_redditness_cljs$core$deep_merge(){
var G__66108 = arguments.length;
switch (G__66108) {
case 2:
return stream_of_redditness_cljs.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stream_of_redditness_cljs.core.deep_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

stream_of_redditness_cljs.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return stream_of_redditness_cljs.core.deep_merge_root.call(null,cljs.core.concat,a,b);
});

stream_of_redditness_cljs.core.deep_merge.cljs$core$IFn$_invoke$arity$3 = (function (a,b,f){
return stream_of_redditness_cljs.core.deep_merge_root.call(null,f,a,b);
});

stream_of_redditness_cljs.core.deep_merge.cljs$lang$maxFixedArity = 3;
stream_of_redditness_cljs.core.zipReadState = (function stream_of_redditness_cljs$core$zipReadState(zip){
return cljs.core.reduce.call(null,(function (p1__66110_SHARP_,p2__66111_SHARP_){
return cljs.core.get.call(null,p1__66110_SHARP_,p2__66111_SHARP_);
}),cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state),zip);
});
stream_of_redditness_cljs.core.writeState = (function stream_of_redditness_cljs$core$writeState(f,hashmap){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return stream_of_redditness_cljs.core.deep_merge.call(null,state,hashmap,f);
}));
});
stream_of_redditness_cljs.core.zipWriteState = (function stream_of_redditness_cljs$core$zipWriteState(){
var G__66117 = arguments.length;
switch (G__66117) {
case 2:
return stream_of_redditness_cljs.core.zipWriteState.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stream_of_redditness_cljs.core.zipWriteState.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

stream_of_redditness_cljs.core.zipWriteState.cljs$core$IFn$_invoke$arity$2 = (function (zip,hashmap){
return stream_of_redditness_cljs.core.writeState.call(null,cljs.core.concat,cljs.core.reduce.call(null,(function (p1__66113_SHARP_,p2__66112_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__66112_SHARP_],[p1__66113_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});

stream_of_redditness_cljs.core.zipWriteState.cljs$core$IFn$_invoke$arity$3 = (function (zip,hashmap,k){
return stream_of_redditness_cljs.core.writeState.call(null,cljs.core.partial.call(null,stream_of_redditness_cljs.core.merge_vectors,k),cljs.core.reduce.call(null,(function (p1__66115_SHARP_,p2__66114_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__66114_SHARP_],[p1__66115_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});

stream_of_redditness_cljs.core.zipWriteState.cljs$lang$maxFixedArity = 3;
stream_of_redditness_cljs.core.zipOverwriteState = (function stream_of_redditness_cljs$core$zipOverwriteState(zip,hashmap){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return cljs.core.reduce.call(null,(function (newBranch,p__66123){
var vec__66124 = p__66123;
var k = cljs.core.nth.call(null,vec__66124,(0),null);
var oldBranch = cljs.core.nth.call(null,vec__66124,(1),null);
return cljs.core.assoc.call(null,oldBranch,k,newBranch);
}),hashmap,cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,zip),cljs.core.pop.call(null,cljs.core.reduce.call(null,(function (p1__66119_SHARP_,p2__66120_SHARP_){
return cljs.core.conj.call(null,p1__66119_SHARP_,p2__66120_SHARP_.call(null,cljs.core.peek.call(null,p1__66119_SHARP_)));
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,state),zip))));
}));
});
stream_of_redditness_cljs.core.refreshView = (function stream_of_redditness_cljs$core$refreshView(){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973)], null),cljs.core.not.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973)], null))));
});
stream_of_redditness_cljs.core.parseObjForce = (function stream_of_redditness_cljs$core$parseObjForce(jsonString){
var parsed = (function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(jsonString));
}catch (e66126){if((e66126 instanceof Error)){
var e = e66126;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e66126;

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
stream_of_redditness_cljs.core.readStorage = (function stream_of_redditness_cljs$core$readStorage(){
return stream_of_redditness_cljs.core.parseObjForce.call(null,stream_of_redditness_cljs.core.localStorage.getItem(stream_of_redditness_cljs.core.storageString));
});
stream_of_redditness_cljs.core.zipReadStorage = (function stream_of_redditness_cljs$core$zipReadStorage(zip){
return cljs.core.reduce.call(null,(function (p1__66127_SHARP_,p2__66128_SHARP_){
return cljs.core.get.call(null,p1__66127_SHARP_,cljs.core.name.call(null,p2__66128_SHARP_));
}),stream_of_redditness_cljs.core.readStorage.call(null),zip);
});
stream_of_redditness_cljs.core.writeStorage = (function stream_of_redditness_cljs$core$writeStorage(hashmap){
return stream_of_redditness_cljs.core.localStorage.setItem(stream_of_redditness_cljs.core.storageString,JSON.stringify(cljs.core.clj__GT_js.call(null,stream_of_redditness_cljs.core.deep_merge.call(null,stream_of_redditness_cljs.core.readStorage.call(null),cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,hashmap))))));
});
stream_of_redditness_cljs.core.zipWriteStorage = (function stream_of_redditness_cljs$core$zipWriteStorage(zip,hashmap){
return stream_of_redditness_cljs.core.writeStorage.call(null,cljs.core.reduce.call(null,(function (p1__66130_SHARP_,p2__66129_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__66129_SHARP_],[p1__66130_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});
document.addEventListener("click",(function (){
if(cljs.core.truth_((function (){var and__18104__auto__ = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402)], null));
if(cljs.core.truth_(and__18104__auto__)){
return stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null));
} else {
return and__18104__auto__;
}
})())){
stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null)).close();
} else {
}

return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402)], null),true);
}));
stream_of_redditness_cljs.core.registerPopupShower = (function stream_of_redditness_cljs$core$registerPopupShower(popupShower){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"popupShower","popupShower",-451695923)], null),popupShower);
});
goog.exportSymbol('stream_of_redditness_cljs.core.registerPopupShower', stream_of_redditness_cljs.core.registerPopupShower);
stream_of_redditness_cljs.core.showPopup = (function stream_of_redditness_cljs$core$showPopup(popupDetails){
var popup = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"popupShower","popupShower",-451695923)], null)).call(null,popupDetails);
document.getElementsByClassName("popup").item((0)).addEventListener("click",((function (popup){
return (function (){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402)], null),false);
});})(popup))
);

stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null),popup);

return popup.then(((function (popup){
return (function (res){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null),null);
});})(popup))
);
});
goog.exportSymbol('stream_of_redditness_cljs.core.showPopup', stream_of_redditness_cljs.core.showPopup);
stream_of_redditness_cljs.core.socket = io("http://localhost:3000");
stream_of_redditness_cljs.core.socket.on("authVal",(function (msg){
if(cljs.core.truth_(stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634)], null)))){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900),msg,new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),false], null));
} else {
return null;
}
}));
stream_of_redditness_cljs.core.socket.on("authData",(function (msg){
var msg__$1 = cljs.core.js__GT_clj.call(null,msg);
stream_of_redditness_cljs.core.zipWriteStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),msg__$1);

stream_of_redditness_cljs.core.zipWriteStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null),cljs.core.first.call(null,cljs.core.first.call(null,msg__$1)));

return stream_of_redditness_cljs.core.refreshView.call(null);
}));
stream_of_redditness_cljs.core.onAuthNewClick = (function stream_of_redditness_cljs$core$onAuthNewClick(event){
if(cljs.core.truth_(stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"requestSent","requestSent",-727519711)], null)))){
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),true,new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),false], null));

stream_of_redditness_cljs.core.socket.emit("requestAuth");

return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intervalId","intervalId",665295291),window.setInterval((function (){
if(cljs.core.not.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634)], null)))){
window.clearInterval(stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"intervalId","intervalId",665295291)], null)));

window.open(stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900)], null)),"_system");

return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),true], null));
} else {
return null;
}
}),(1000))], null));
} else {
return null;
}
});
stream_of_redditness_cljs.core.switchActiveUser = (function stream_of_redditness_cljs$core$switchActiveUser(username){
stream_of_redditness_cljs.core.zipWriteStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null),username);

return stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004)], null)).close();
});
stream_of_redditness_cljs.core.onAuthSwitchClick = (function stream_of_redditness_cljs$core$onAuthSwitchClick(event){
return stream_of_redditness_cljs.core.showPopup.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),[cljs.core.str("<div class=\"list\">"),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,(function (username){
return [cljs.core.str("<label class=\"item item-radio\">\n                                             <input type=\"radio\" name=\"group\" \n                                                    onClick=\"stream_of_redditness_cljs\n                                                                  .core\n                                                                  .switchActiveUser('"),cljs.core.str(username),cljs.core.str("')\""),cljs.core.str(((cljs.core._EQ_.call(null,username,stream_of_redditness_cljs.core.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null))))?" checked=\"checked\">":">")),cljs.core.str("<div class=\"item-content\">"),cljs.core.str(username),cljs.core.str("</div>\n                                             <i class=\"radio-icon ion-checkmark\"></i>\n                                           </label>")].join('');
}),cljs.core.keys.call(null,stream_of_redditness_cljs.core.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null)))))),cljs.core.str("</div>")].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Select an account to use",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add new account",new cljs.core.Keyword(null,"onTap","onTap",1867620869),stream_of_redditness_cljs.core.onAuthNewClick], null)], null)], null)));
});
stream_of_redditness_cljs.core.authButtonView = (function stream_of_redditness_cljs$core$authButtonView(){
return om.core.root.call(null,(function (data,owner){
var storedAuths = stream_of_redditness_cljs.core.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null));
if(((0) < cljs.core.count.call(null,storedAuths))){
if(typeof stream_of_redditness_cljs.core.t66137 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t66137 = (function (storedAuths,owner,data,authButtonView,meta66138){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButtonView = authButtonView;
this.meta66138 = meta66138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t66137.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t66137.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (this__21938__auto__){
var self__ = this;
var this__21938__auto____$1 = this;
return React.DOM.h3(null,"Logged in as: ",React.DOM.button({"onClick": stream_of_redditness_cljs.core.onAuthSwitchClick, "className": "button"},React.DOM.a(null,stream_of_redditness_cljs.core.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null)))));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t66137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_66139){
var self__ = this;
var _66139__$1 = this;
return self__.meta66138;
});})(storedAuths))
;

stream_of_redditness_cljs.core.t66137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_66139,meta66138__$1){
var self__ = this;
var _66139__$1 = this;
return (new stream_of_redditness_cljs.core.t66137(self__.storedAuths,self__.owner,self__.data,self__.authButtonView,meta66138__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t66137.cljs$lang$type = true;

stream_of_redditness_cljs.core.t66137.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t66137";

stream_of_redditness_cljs.core.t66137.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t66137");
});})(storedAuths))
;

stream_of_redditness_cljs.core.__GT_t66137 = ((function (storedAuths){
return (function stream_of_redditness_cljs$core$authButtonView_$___GT_t66137(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta66138){
return (new stream_of_redditness_cljs.core.t66137(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta66138));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.core.t66137(storedAuths,owner,data,stream_of_redditness_cljs$core$authButtonView,null));
} else {
if(typeof stream_of_redditness_cljs.core.t66140 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t66140 = (function (storedAuths,owner,data,authButtonView,meta66141){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButtonView = authButtonView;
this.meta66141 = meta66141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t66140.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t66140.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (this__21938__auto__){
var self__ = this;
var this__21938__auto____$1 = this;
return React.DOM.button({"onClick": stream_of_redditness_cljs.core.onAuthNewClick, "className": "button"},"Authorize An Account");
});})(storedAuths))
;

stream_of_redditness_cljs.core.t66140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_66142){
var self__ = this;
var _66142__$1 = this;
return self__.meta66141;
});})(storedAuths))
;

stream_of_redditness_cljs.core.t66140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_66142,meta66141__$1){
var self__ = this;
var _66142__$1 = this;
return (new stream_of_redditness_cljs.core.t66140(self__.storedAuths,self__.owner,self__.data,self__.authButtonView,meta66141__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t66140.cljs$lang$type = true;

stream_of_redditness_cljs.core.t66140.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t66140";

stream_of_redditness_cljs.core.t66140.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t66140");
});})(storedAuths))
;

stream_of_redditness_cljs.core.__GT_t66140 = ((function (storedAuths){
return (function stream_of_redditness_cljs$core$authButtonView_$___GT_t66140(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta66141){
return (new stream_of_redditness_cljs.core.t66140(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta66141));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.core.t66140(storedAuths,owner,data,stream_of_redditness_cljs$core$authButtonView,null));
}
}),stream_of_redditness_cljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("AuthButton")], null));
});
goog.exportSymbol('stream_of_redditness_cljs.core.authButtonView', stream_of_redditness_cljs.core.authButtonView);
stream_of_redditness_cljs.core.renderBaseComment = (function stream_of_redditness_cljs$core$renderBaseComment(baseComment){
return React.DOM.div({"className": "item"},new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(baseComment),cljs.core.apply.call(null,om.dom.div,{"className": "list"},cljs.core.map.call(null,stream_of_redditness_cljs$core$renderBaseComment,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.vals.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(baseComment)))))));
});
stream_of_redditness_cljs.core.renderBaseComment1 = (function stream_of_redditness_cljs$core$renderBaseComment1(baseComment){
return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"item",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(baseComment)], null)], null)),React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"item",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null)),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(baseComment),cljs.core.apply.call(null,om.dom.div,{"className": "list"},cljs.core.map.call(null,stream_of_redditness_cljs.core.renderBaseComment,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.vals.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(baseComment))))))));
});
stream_of_redditness_cljs.core.renderThreads = (function stream_of_redditness_cljs$core$renderThreads(threads){
return cljs.core.map.call(null,stream_of_redditness_cljs.core.renderBaseComment1,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.vals.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,stream_of_redditness_cljs.core.deep_merge,cljs.core.map.call(null,(function (thread){
return cljs.core.reduce.call(null,(function (t,k){
return cljs.core.assoc_in.call(null,t,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),k,new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(thread));
}),thread,cljs.core.keys.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(thread)));
}),cljs.core.vals.call(null,threads))))))));
});
stream_of_redditness_cljs.core.moreCommentsJSONHandler = (function stream_of_redditness_cljs$core$moreCommentsJSONHandler(threadIds,response){
return cljs.core.doall.call(null,stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null),cljs.core.reduce.call(null,stream_of_redditness_cljs.core.deep_merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (jqueryArray){
return cljs.core.first.call(null,(function (p1__66144_SHARP_){
return cljs.core.reduce.call(null,(function (p__66147,commentData){
var vec__66148 = p__66147;
var moreComments = cljs.core.nth.call(null,vec__66148,(0),null);
var paths = cljs.core.nth.call(null,vec__66148,(1),null);
var parentId = cljs.core.keyword.call(null,((function (vec__66148,moreComments,paths){
return (function (pid){
return clojure.string.join.call(null,"",pid);
});})(vec__66148,moreComments,paths))
.call(null,((function (vec__66148,moreComments,paths){
return (function (pid){
return cljs.core.drop.call(null,(3),pid);
});})(vec__66148,moreComments,paths))
.call(null,cljs.core.get.call(null,commentData,"parent_id"))));
var commentId = cljs.core.keyword.call(null,cljs.core.get.call(null,commentData,"id"));
var body = cljs.core.get.call(null,commentData,"body");
var t = cljs.core.get.call(null,commentData,"created");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream_of_redditness_cljs.core.deep_merge.call(null,moreComments,cljs.core.reduce.call(null,((function (parentId,commentId,body,t,vec__66148,moreComments,paths){
return (function (commentTree,pathEl){
return new cljs.core.PersistentArrayMap.fromArray([pathEl,commentTree], true, false);
});})(parentId,commentId,body,t,vec__66148,moreComments,paths))
,new cljs.core.PersistentArrayMap.fromArray([commentId,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),commentId,new cljs.core.Keyword(null,"content","content",15833224),body,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"time","time",1385887882),t], null)], true, false),cljs.core.reverse.call(null,parentId.call(null,paths)))),cljs.core.assoc.call(null,paths,commentId,cljs.core.concat.call(null,parentId.call(null,paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commentId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,threadIds))),threadIds], true, false)], null),p1__66144_SHARP_);
}).call(null,(function (p1__66143_SHARP_){
return cljs.core.map.call(null,(function (isoCommentData){
return cljs.core.get.call(null,isoCommentData,"data");
}),p1__66143_SHARP_);
}).call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3))))));
}),cljs.core.filter.call(null,(function (jqueryArray){
return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))),"data");
}),cljs.core.get.call(null,response,"jquery"))))));
});
stream_of_redditness_cljs.core.processCommentTree = (function stream_of_redditness_cljs$core$processCommentTree(pathTo,commentTree){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comments","comments",-293346423),stream_of_redditness_cljs$core$processCommentTree.call(null,cljs.core.concat.call(null,pathTo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"replies")),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"body"),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"created"),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")], null)], null);
}),(function (p__66155){
var vec__66156 = p__66155;
var t1 = cljs.core.nth.call(null,vec__66156,(0),null);
var more = cljs.core.nth.call(null,vec__66156,(1),null);
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null),cljs.core.map.call(null,((function (vec__66156,t1,more){
return (function (moreData){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"threadId","threadId",-440699805),cljs.core.first.call(null,pathTo),new cljs.core.Keyword(null,"requestFun","requestFun",1837053695),((function (vec__66156,t1,more){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,pathTo))),cljs.core.str("&children="),cljs.core.str(((function (vec__66156,t1,more){
return (function (p1__66152_SHARP_){
return clojure.string.join.call(null,",",p1__66152_SHARP_);
});})(vec__66156,t1,more))
.call(null,cljs.core.get.call(null,cljs.core.get.call(null,moreData,"data"),"children"))),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.core.moreCommentsJSONHandler,pathTo)], null));
});})(vec__66156,t1,more))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null);
});})(vec__66156,t1,more))
,more));

return t1;
}).call(null,stream_of_redditness_cljs.core.partition2.call(null,(function (p1__66151_SHARP_){
return cljs.core._EQ_.call(null,"t1",cljs.core.get.call(null,p1__66151_SHARP_,"kind"));
}),(function (p1__66150_SHARP_){
return cljs.core.get.call(null,p1__66150_SHARP_,"children");
}).call(null,(function (p1__66149_SHARP_){
return cljs.core.get.call(null,p1__66149_SHARP_,"data");
}).call(null,commentTree))))));
});
stream_of_redditness_cljs.core.newCommentsJSONHandler = (function stream_of_redditness_cljs$core$newCommentsJSONHandler(threadId,response){
if(cljs.core.truth_(stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null)))){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null),(function (comments){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),comments], null);
}).call(null,stream_of_redditness_cljs.core.processCommentTree.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threadId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),(function (p1__66157_SHARP_){
return cljs.core.nth.call(null,p1__66157_SHARP_,(1));
}).call(null,cljs.core.js__GT_clj.call(null,response)))));
} else {
return null;
}
});
stream_of_redditness_cljs.core.pollReddit = (function stream_of_redditness_cljs$core$pollReddit(){
cljs.core.println.call(null,"Still doin this shit");

var incedWaitTimes = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__66163){
var vec__66164 = p__66163;
var k = cljs.core.nth.call(null,vec__66164,(0),null);
var v = cljs.core.nth.call(null,vec__66164,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"waitTime","waitTime",1818151535),((1) + new cljs.core.Keyword(null,"waitTime","waitTime",1818151535).cljs$core$IFn$_invoke$arity$1(v)))], null);
}),stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null))));
var targetId = cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.max_key,((function (incedWaitTimes){
return (function (p__66165){
var vec__66166 = p__66165;
var k = cljs.core.nth.call(null,vec__66166,(0),null);
var v = cljs.core.nth.call(null,vec__66166,(1),null);
return new cljs.core.Keyword(null,"waitTime","waitTime",1818151535).cljs$core$IFn$_invoke$arity$1(v);
});})(incedWaitTimes))
,incedWaitTimes));
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null),((function (incedWaitTimes,targetId){
return (function (p1__66158_SHARP_){
return stream_of_redditness_cljs.core.deep_merge.call(null,incedWaitTimes,p1__66158_SHARP_);
});})(incedWaitTimes,targetId))
.call(null,new cljs.core.PersistentArrayMap.fromArray([targetId,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"waitTime","waitTime",1818151535),(0)], null)], true, false)));

return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/comments/"),cljs.core.str(cljs.core.name.call(null,targetId)),cljs.core.str(".json?sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.core.newCommentsJSONHandler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetId], null),stream_of_redditness_cljs.core.processCommentTree)], null));
});
stream_of_redditness_cljs.core.newCommentsPoller = (function stream_of_redditness_cljs$core$newCommentsPoller(threadId){
ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/comments/"),cljs.core.str(cljs.core.name.call(null,threadId)),cljs.core.str(".json?sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.core.newCommentsJSONHandler,threadId)], null));

return window.setTimeout((function (){
return stream_of_redditness_cljs$core$newCommentsPoller.call(null,threadId);
}),(31500));
});
stream_of_redditness_cljs.core.myFun = (function stream_of_redditness_cljs$core$myFun(){
return cljs.core.reduce.call(null,(function (df,dc){
return cljs.core.assoc.call(null,df,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(dc));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null)], null));
});
stream_of_redditness_cljs.core.streamView = (function stream_of_redditness_cljs$core$streamView(threadsString){
var threads_66192 = cljs.core.map.call(null,cljs.core.keyword,cljs.core.js__GT_clj.call(null,JSON.parse([cljs.core.str("["),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,(function (item){
return [cljs.core.str("\""),cljs.core.str(item),cljs.core.str("\"")].join('');
}),clojure.string.split.call(null,threadsString,/,/)))),cljs.core.str("]")].join(''))));
var activeThreads_66193 = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null));
var stillActiveThreads_66194 = cljs.core.select_keys.call(null,activeThreads_66193,(function (){var iter__18870__auto__ = ((function (threads_66192,activeThreads_66193){
return (function stream_of_redditness_cljs$core$streamView_$_iter__66181(s__66182){
return (new cljs.core.LazySeq(null,((function (threads_66192,activeThreads_66193){
return (function (){
var s__66182__$1 = s__66182;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66182__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__66188 = cljs.core.first.call(null,xs__4624__auto__);
var k = cljs.core.nth.call(null,vec__66188,(0),null);
var v = cljs.core.nth.call(null,vec__66188,(1),null);
var iterys__18866__auto__ = ((function (s__66182__$1,vec__66188,k,v,xs__4624__auto__,temp__4126__auto__,threads_66192,activeThreads_66193){
return (function stream_of_redditness_cljs$core$streamView_$_iter__66181_$_iter__66183(s__66184){
return (new cljs.core.LazySeq(null,((function (s__66182__$1,vec__66188,k,v,xs__4624__auto__,temp__4126__auto__,threads_66192,activeThreads_66193){
return (function (){
var s__66184__$1 = s__66184;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__66184__$1);
if(temp__4126__auto____$1){
var s__66184__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66184__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__66184__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__66186 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__66185 = (0);
while(true){
if((i__66185 < size__18869__auto__)){
var when = cljs.core._nth.call(null,c__18868__auto__,i__66185);
cljs.core.chunk_append.call(null,b__66186,k);

var G__66195 = (i__66185 + (1));
i__66185 = G__66195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66186),stream_of_redditness_cljs$core$streamView_$_iter__66181_$_iter__66183.call(null,cljs.core.chunk_rest.call(null,s__66184__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66186),null);
}
} else {
var when = cljs.core.first.call(null,s__66184__$2);
return cljs.core.cons.call(null,k,stream_of_redditness_cljs$core$streamView_$_iter__66181_$_iter__66183.call(null,cljs.core.rest.call(null,s__66184__$2)));
}
} else {
return null;
}
break;
}
});})(s__66182__$1,vec__66188,k,v,xs__4624__auto__,temp__4126__auto__,threads_66192,activeThreads_66193))
,null,null));
});})(s__66182__$1,vec__66188,k,v,xs__4624__auto__,temp__4126__auto__,threads_66192,activeThreads_66193))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([k], true),threads_66192)));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$streamView_$_iter__66181.call(null,cljs.core.rest.call(null,s__66182__$1)));
} else {
var G__66196 = cljs.core.rest.call(null,s__66182__$1);
s__66182__$1 = G__66196;
continue;
}
} else {
return null;
}
break;
}
});})(threads_66192,activeThreads_66193))
,null,null));
});})(threads_66192,activeThreads_66193))
;
return iter__18870__auto__.call(null,activeThreads_66193);
})());
((function (threads_66192,activeThreads_66193,stillActiveThreads_66194){
return (function (p1__66169_SHARP_){
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null),p1__66169_SHARP_);

return ((function (threads_66192,activeThreads_66193,stillActiveThreads_66194){
return (function (requests){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null),requests);
});})(threads_66192,activeThreads_66193,stillActiveThreads_66194))
.call(null,cljs.core.map.call(null,((function (threads_66192,activeThreads_66193,stillActiveThreads_66194){
return (function (threadId){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"threadId","threadId",-440699805),threadId,new cljs.core.Keyword(null,"requestFun","requestFun",1837053695),((function (threads_66192,activeThreads_66193,stillActiveThreads_66194){
return (function (){
return stream_of_redditness_cljs.core.newCommentsPoller.call(null,threadId);
});})(threads_66192,activeThreads_66193,stillActiveThreads_66194))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new","new",-2085437848)], null);
});})(threads_66192,activeThreads_66193,stillActiveThreads_66194))
,cljs.core.keys.call(null,p1__66169_SHARP_)));
});})(threads_66192,activeThreads_66193,stillActiveThreads_66194))
.call(null,stream_of_redditness_cljs.core.deep_merge.call(null,stillActiveThreads_66194,cljs.core.reduce.call(null,((function (threads_66192,activeThreads_66193,stillActiveThreads_66194){
return (function (p1__66167_SHARP_,p2__66168_SHARP_){
return cljs.core.assoc.call(null,p1__66167_SHARP_,cljs.core.nth.call(null,p2__66168_SHARP_,(1)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"waitTime","waitTime",1818151535),(0),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.call(null,p2__66168_SHARP_,(0)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.nth.call(null,p2__66168_SHARP_,(1))], null));
});})(threads_66192,activeThreads_66193,stillActiveThreads_66194))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff0000","#00ff00","#0000ff","#FFFF00","#00FFFF","#FF00FF"], null)),threads_66192))));

return om.core.root.call(null,(function (activeThreads,owner){
if(typeof stream_of_redditness_cljs.core.t66189 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t66189 = (function (owner,activeThreads,threadsString,streamView,meta66190){
this.owner = owner;
this.activeThreads = activeThreads;
this.threadsString = threadsString;
this.streamView = streamView;
this.meta66190 = meta66190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t66189.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t66189.prototype.om$core$IRender$render$arity$1 = (function (this__21938__auto__){
var self__ = this;
var this__21938__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "list"},stream_of_redditness_cljs.core.renderThreads.call(null,new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reddit","reddit",-1323650081).cljs$core$IFn$_invoke$arity$1(self__.activeThreads))));
});

stream_of_redditness_cljs.core.t66189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66191){
var self__ = this;
var _66191__$1 = this;
return self__.meta66190;
});

stream_of_redditness_cljs.core.t66189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66191,meta66190__$1){
var self__ = this;
var _66191__$1 = this;
return (new stream_of_redditness_cljs.core.t66189(self__.owner,self__.activeThreads,self__.threadsString,self__.streamView,meta66190__$1));
});

stream_of_redditness_cljs.core.t66189.cljs$lang$type = true;

stream_of_redditness_cljs.core.t66189.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t66189";

stream_of_redditness_cljs.core.t66189.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t66189");
});

stream_of_redditness_cljs.core.__GT_t66189 = (function stream_of_redditness_cljs$core$streamView_$___GT_t66189(owner__$1,activeThreads__$1,threadsString__$1,streamView__$1,meta66190){
return (new stream_of_redditness_cljs.core.t66189(owner__$1,activeThreads__$1,threadsString__$1,streamView__$1,meta66190));
});

}

return (new stream_of_redditness_cljs.core.t66189(owner,activeThreads,threadsString,stream_of_redditness_cljs$core$streamView,null));
}),stream_of_redditness_cljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("StreamContainer")], null));
});
goog.exportSymbol('stream_of_redditness_cljs.core.streamView', stream_of_redditness_cljs.core.streamView);
stream_of_redditness_cljs.core.makeNextRequest = (function stream_of_redditness_cljs$core$makeNextRequest(){
return (function (requests){
if(cljs.core.truth_(cljs.core.first.call(null,requests))){
new cljs.core.Keyword(null,"requestFun","requestFun",1837053695).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,requests)).call(null);
} else {
}

return stream_of_redditness_cljs.core.zipOverwriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null),cljs.core.rest.call(null,requests));
}).call(null,(function (p__66201){
var vec__66202 = p__66201;
var news = cljs.core.nth.call(null,vec__66202,(0),null);
var others = cljs.core.nth.call(null,vec__66202,(1),null);
return cljs.core.concat.call(null,cljs.core.vals.call(null,cljs.core.reduce.call(null,((function (vec__66202,news,others){
return (function (dict,threadDict){
return cljs.core.assoc.call(null,dict,new cljs.core.Keyword(null,"threadId","threadId",-440699805).cljs$core$IFn$_invoke$arity$1(threadDict),threadDict);
});})(vec__66202,news,others))
,cljs.core.PersistentArrayMap.EMPTY,news)),others);
}).call(null,stream_of_redditness_cljs.core.partition2.call(null,(function (p1__66198_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__66198_SHARP_));
}),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.filter.call(null,(function (p1__66197_SHARP_){
return new cljs.core.Keyword(null,"threadId","threadId",-440699805).cljs$core$IFn$_invoke$arity$1(p1__66197_SHARP_).call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null)));
}),stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null)))))));
});
window.setInterval(stream_of_redditness_cljs.core.makeNextRequest,(8200));
stream_of_redditness_cljs.core.on_js_reload = (function stream_of_redditness_cljs$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1432275466500