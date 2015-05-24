// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.core');
goog.require('cljs.core');
goog.require('clojure.set');
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
stream_of_redditness_cljs.core.allPoss = (function (){var iter__18870__auto__ = (function stream_of_redditness_cljs$core$iter__49600(s__49601){
return (new cljs.core.LazySeq(null,(function (){
var s__49601__$1 = s__49601;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49601__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var a = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__49601__$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__49600_$_iter__49602(s__49603){
return (new cljs.core.LazySeq(null,((function (s__49601__$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__49603__$1 = s__49603;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__49603__$1);
if(temp__4126__auto____$1){
var xs__4624__auto____$1 = temp__4126__auto____$1;
var b = cljs.core.first.call(null,xs__4624__auto____$1);
var iterys__18866__auto__ = ((function (s__49603__$1,s__49601__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604(s__49605){
return (new cljs.core.LazySeq(null,((function (s__49603__$1,s__49601__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__49605__$1 = s__49605;
while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__49605__$1);
if(temp__4126__auto____$2){
var xs__4624__auto____$2 = temp__4126__auto____$2;
var c = cljs.core.first.call(null,xs__4624__auto____$2);
var iterys__18866__auto__ = ((function (s__49605__$1,s__49603__$1,s__49601__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606(s__49607){
return (new cljs.core.LazySeq(null,((function (s__49605__$1,s__49603__$1,s__49601__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__49607__$1 = s__49607;
while(true){
var temp__4126__auto____$3 = cljs.core.seq.call(null,s__49607__$1);
if(temp__4126__auto____$3){
var xs__4624__auto____$3 = temp__4126__auto____$3;
var d = cljs.core.first.call(null,xs__4624__auto____$3);
var iterys__18866__auto__ = ((function (s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606_$_iter__49608(s__49609){
return (new cljs.core.LazySeq(null,((function (s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__49609__$1 = s__49609;
while(true){
var temp__4126__auto____$4 = cljs.core.seq.call(null,s__49609__$1);
if(temp__4126__auto____$4){
var xs__4624__auto____$4 = temp__4126__auto____$4;
var e = cljs.core.first.call(null,xs__4624__auto____$4);
var iterys__18866__auto__ = ((function (s__49609__$1,s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606_$_iter__49608_$_iter__49610(s__49611){
return (new cljs.core.LazySeq(null,((function (s__49609__$1,s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__49611__$1 = s__49611;
while(true){
var temp__4126__auto____$5 = cljs.core.seq.call(null,s__49611__$1);
if(temp__4126__auto____$5){
var s__49611__$2 = temp__4126__auto____$5;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49611__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__49611__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__49613 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__49612 = (0);
while(true){
if((i__49612 < size__18869__auto__)){
var f = cljs.core._nth.call(null,c__18868__auto__,i__49612);
cljs.core.chunk_append.call(null,b__49613,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null));

var G__49614 = (i__49612 + (1));
i__49612 = G__49614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49613),stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606_$_iter__49608_$_iter__49610.call(null,cljs.core.chunk_rest.call(null,s__49611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49613),null);
}
} else {
var f = cljs.core.first.call(null,s__49611__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null),stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606_$_iter__49608_$_iter__49610.call(null,cljs.core.rest.call(null,s__49611__$2)));
}
} else {
return null;
}
break;
}
});})(s__49609__$1,s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__49609__$1,s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,e,xs__4624__auto____$4,temp__4126__auto____$4,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606_$_iter__49608.call(null,cljs.core.rest.call(null,s__49609__$1)));
} else {
var G__49615 = cljs.core.rest.call(null,s__49609__$1);
s__49609__$1 = G__49615;
continue;
}
} else {
return null;
}
break;
}
});})(s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__49607__$1,s__49605__$1,s__49603__$1,s__49601__$1,d,xs__4624__auto____$3,temp__4126__auto____$3,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604_$_iter__49606.call(null,cljs.core.rest.call(null,s__49607__$1)));
} else {
var G__49616 = cljs.core.rest.call(null,s__49607__$1);
s__49607__$1 = G__49616;
continue;
}
} else {
return null;
}
break;
}
});})(s__49605__$1,s__49603__$1,s__49601__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__49605__$1,s__49603__$1,s__49601__$1,c,xs__4624__auto____$2,temp__4126__auto____$2,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__49600_$_iter__49602_$_iter__49604.call(null,cljs.core.rest.call(null,s__49605__$1)));
} else {
var G__49617 = cljs.core.rest.call(null,s__49605__$1);
s__49605__$1 = G__49617;
continue;
}
} else {
return null;
}
break;
}
});})(s__49603__$1,s__49601__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__49603__$1,s__49601__$1,b,xs__4624__auto____$1,temp__4126__auto____$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__49600_$_iter__49602.call(null,cljs.core.rest.call(null,s__49603__$1)));
} else {
var G__49618 = cljs.core.rest.call(null,s__49603__$1);
s__49603__$1 = G__49618;
continue;
}
} else {
return null;
}
break;
}
});})(s__49601__$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__49601__$1,a,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,stream_of_redditness_cljs.core.binary));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$iter__49600.call(null,cljs.core.rest.call(null,s__49601__$1)));
} else {
var G__49619 = cljs.core.rest.call(null,s__49601__$1);
s__49601__$1 = G__49619;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,f,l),cljs.core.filter.call(null,(function (p1__49620_SHARP_){
return cljs.core.not.call(null,f.call(null,p1__49620_SHARP_));
}),l)], null);
});
if(typeof stream_of_redditness_cljs.core.app_state !== 'undefined'){
} else {
stream_of_redditness_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973),false,new cljs.core.Keyword(null,"oauthReq","oauthReq",-764076356),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"awaitingReqUrl","awaitingReqUrl",1066049634),false,new cljs.core.Keyword(null,"reqUrl","reqUrl",21754900),"",new cljs.core.Keyword(null,"intervalId","intervalId",665295291),(0),new cljs.core.Keyword(null,"requestSent","requestSent",-727519711),true], null),new cljs.core.Keyword(null,"popups","popups",938719781),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popupShower","popupShower",-451695923),(function (p){
return null;
}),new cljs.core.Keyword(null,"activePopup","activePopup",-712123004),null,new cljs.core.Keyword(null,"lastClickNotInPopup","lastClickNotInPopup",1022932402),true], null),new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),cljs.core.PersistentArrayMap.EMPTY], null));
}
stream_of_redditness_cljs.core.deep_merge_root = (function stream_of_redditness_cljs$core$deep_merge_root(f,a,b){
return cljs.core.merge_with.call(null,(function (x,y){
if(cljs.core.map_QMARK_.call(null,y)){
return stream_of_redditness_cljs$core$deep_merge_root.call(null,f,x,y);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return f.call(null,x,y);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return f.call(null,x,y);
} else {
return y;

}
}
}
}),a,b);
});
stream_of_redditness_cljs.core.merge_vectors = (function stream_of_redditness_cljs$core$merge_vectors(k,x,y){
return cljs.core.map.call(null,(function (p1__49621_SHARP_){
return stream_of_redditness_cljs.core.deep_merge_root.call(null,cljs.core.partial.call(null,stream_of_redditness_cljs$core$merge_vectors,k),cljs.core.reduce.call(null,(function (el,v){
if(cljs.core._EQ_.call(null,k.call(null,el),k.call(null,p1__49621_SHARP_))){
return el;
} else {
return p1__49621_SHARP_;
}
}),x),p1__49621_SHARP_);
}),y);
});
stream_of_redditness_cljs.core.deep_merge = (function stream_of_redditness_cljs$core$deep_merge(){
var G__49623 = arguments.length;
switch (G__49623) {
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
stream_of_redditness_cljs.core.playFun = (function stream_of_redditness_cljs$core$playFun(d1,d2){
return cljs.core.reduce.call(null,stream_of_redditness_cljs.core.deep_merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49627){
var vec__49628 = p__49627;
var k = cljs.core.nth.call(null,vec__49628,(0),null);
var v = cljs.core.nth.call(null,vec__49628,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,d1,k))){
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var nv = stream_of_redditness_cljs$core$playFun.call(null,k.call(null,d1),v);
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
if(cljs.core._EQ_.call(null,v,k.call(null,d1))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);

}
}
}
}
}),d2));
});
stream_of_redditness_cljs.core.pf2 = (function stream_of_redditness_cljs$core$pf2(d1,d2){
return (function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,stream_of_redditness_cljs.core.deep_merge.call(null,d1,a)], null);
}).call(null,stream_of_redditness_cljs.core.playFun.call(null,d1,d2));
});
stream_of_redditness_cljs.core.t1 = (function stream_of_redditness_cljs$core$t1(){
return stream_of_redditness_cljs.core.pf2.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1482224470),(3),new cljs.core.Keyword(null,"c","c",-1763192079),(2),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),(4)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"g","g",1738089905),(3),new cljs.core.Keyword(null,"c","c",-1763192079),(2),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),(1)], null)], null)], null));
});
stream_of_redditness_cljs.core.dicSize = (function stream_of_redditness_cljs$core$dicSize(d){
return cljs.core.count.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,d)));
});
stream_of_redditness_cljs.core.withLim = (function stream_of_redditness_cljs$core$withLim(){
var G__49632 = arguments.length;
switch (G__49632) {
case 1:
return stream_of_redditness_cljs.core.withLim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return stream_of_redditness_cljs.core.withLim.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

stream_of_redditness_cljs.core.withLim.cljs$core$IFn$_invoke$arity$1 = (function (d){
return stream_of_redditness_cljs.core.withLim.call(null,d,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

stream_of_redditness_cljs.core.withLim.cljs$core$IFn$_invoke$arity$4 = (function (d,dsi,cdi,kli){
return cljs.core.reduce.call(null,(function (p__49633,p__49634){
var vec__49635 = p__49633;
var ds = cljs.core.nth.call(null,vec__49635,(0),null);
var cd = cljs.core.nth.call(null,vec__49635,(1),null);
var kl = cljs.core.nth.call(null,vec__49635,(2),null);
var vec__49636 = p__49634;
var k = cljs.core.nth.call(null,vec__49636,(0),null);
var v = cljs.core.nth.call(null,vec__49636,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
var vec__49637 = stream_of_redditness_cljs.core.withLim.call(null,v,ds,cd,cljs.core.conj.call(null,kl,k));
var nds = cljs.core.nth.call(null,vec__49637,(0),null);
var ncd = cljs.core.nth.call(null,vec__49637,(1),null);
var _ = cljs.core.nth.call(null,vec__49637,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nds,ncd,kl], null);
} else {
if(cljs.core.seq_QMARK_.call(null,v)){
return cljs.core.List.EMPTY;
} else {
var jvd = cljs.core.reduce.call(null,((function (vec__49635,ds,cd,kl,vec__49636,k,v){
return (function (p1__49630_SHARP_,p2__49629_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__49629_SHARP_],[p1__49630_SHARP_]);
});})(vec__49635,ds,cd,kl,vec__49636,k,v))
,new cljs.core.PersistentArrayMap.fromArray([k,v], true, false),cljs.core.reverse.call(null,kl));
var nd = stream_of_redditness_cljs.core.deep_merge.call(null,cd,jvd);
if(((3000) < stream_of_redditness_cljs.core.dicSize.call(null,nd))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ds,cd),jvd,kl], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ds,nd,kl], null);
}

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dsi,cdi,kli], null),d);
});

stream_of_redditness_cljs.core.withLim.cljs$lang$maxFixedArity = 4;
stream_of_redditness_cljs.core.allKeysToKeywords = (function stream_of_redditness_cljs$core$allKeysToKeywords(d){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49641){
var vec__49642 = p__49641;
var k = cljs.core.nth.call(null,vec__49642,(0),null);
var v = cljs.core.nth.call(null,vec__49642,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),((cljs.core.map_QMARK_.call(null,v))?stream_of_redditness_cljs$core$allKeysToKeywords.call(null,v):v
)], null);
}),d));
});
stream_of_redditness_cljs.core.twl = (function stream_of_redditness_cljs$core$twl(){
return stream_of_redditness_cljs.core.withLim.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(23),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),(123),new cljs.core.Keyword(null,"d","d",1972142424),"asdaasdaasdaaaasdaasdaasdaasdaasdaasda",new cljs.core.Keyword(null,"j","j",-1397974765),(213)], null),new cljs.core.Keyword(null,"k","k",-2146297393),"ay"], null));
});
stream_of_redditness_cljs.core.zipReadState = (function stream_of_redditness_cljs$core$zipReadState(zip){
return cljs.core.reduce.call(null,(function (p1__49643_SHARP_,p2__49644_SHARP_){
return cljs.core.get.call(null,p1__49643_SHARP_,p2__49644_SHARP_);
}),cljs.core.deref.call(null,stream_of_redditness_cljs.core.app_state),zip);
});
stream_of_redditness_cljs.core.writeState = (function stream_of_redditness_cljs$core$writeState(f,hashmap){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return stream_of_redditness_cljs.core.deep_merge.call(null,state,hashmap,f);
}));
});
stream_of_redditness_cljs.core.zipWriteState = (function stream_of_redditness_cljs$core$zipWriteState(){
var G__49650 = arguments.length;
switch (G__49650) {
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
return stream_of_redditness_cljs.core.writeState.call(null,cljs.core.concat,cljs.core.reduce.call(null,(function (p1__49646_SHARP_,p2__49645_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__49645_SHARP_],[p1__49646_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});

stream_of_redditness_cljs.core.zipWriteState.cljs$core$IFn$_invoke$arity$3 = (function (zip,hashmap,f){
return stream_of_redditness_cljs.core.writeState.call(null,f,cljs.core.reduce.call(null,(function (p1__49648_SHARP_,p2__49647_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__49647_SHARP_],[p1__49648_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});

stream_of_redditness_cljs.core.zipWriteState.cljs$lang$maxFixedArity = 3;
stream_of_redditness_cljs.core.zipOverwriteState = (function stream_of_redditness_cljs$core$zipOverwriteState(zip,hashmap){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.core.app_state,(function (state){
return cljs.core.reduce.call(null,(function (newBranch,p__49656){
var vec__49657 = p__49656;
var k = cljs.core.nth.call(null,vec__49657,(0),null);
var oldBranch = cljs.core.nth.call(null,vec__49657,(1),null);
return cljs.core.assoc.call(null,oldBranch,k,newBranch);
}),hashmap,cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,zip),cljs.core.pop.call(null,cljs.core.reduce.call(null,(function (p1__49652_SHARP_,p2__49653_SHARP_){
return cljs.core.conj.call(null,p1__49652_SHARP_,p2__49653_SHARP_.call(null,cljs.core.peek.call(null,p1__49652_SHARP_)));
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,state),zip))));
}));
});
stream_of_redditness_cljs.core.refreshView = (function stream_of_redditness_cljs$core$refreshView(){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973)], null),cljs.core.not.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tripwire","tripwire",-2010231973)], null))));
});
stream_of_redditness_cljs.core.parseObjForce = (function stream_of_redditness_cljs$core$parseObjForce(jsonString){
var parsed = (function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(jsonString));
}catch (e49659){if((e49659 instanceof Error)){
var e = e49659;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e49659;

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
return cljs.core.reduce.call(null,(function (p1__49660_SHARP_,p2__49661_SHARP_){
return cljs.core.get.call(null,p1__49660_SHARP_,cljs.core.name.call(null,p2__49661_SHARP_));
}),stream_of_redditness_cljs.core.readStorage.call(null),zip);
});
stream_of_redditness_cljs.core.writeStorage = (function stream_of_redditness_cljs$core$writeStorage(hashmap){
return stream_of_redditness_cljs.core.localStorage.setItem(stream_of_redditness_cljs.core.storageString,JSON.stringify(cljs.core.clj__GT_js.call(null,stream_of_redditness_cljs.core.deep_merge.call(null,stream_of_redditness_cljs.core.readStorage.call(null),cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,hashmap))))));
});
stream_of_redditness_cljs.core.zipWriteStorage = (function stream_of_redditness_cljs$core$zipWriteStorage(zip,hashmap){
return stream_of_redditness_cljs.core.writeStorage.call(null,cljs.core.reduce.call(null,(function (p1__49663_SHARP_,p2__49662_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__49662_SHARP_],[p1__49663_SHARP_]);
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
stream_of_redditness_cljs.core.strToNum = (function stream_of_redditness_cljs$core$strToNum(s){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__49664_SHARP_){
return p1__49664_SHARP_.charCodeAt((0));
})),s);
});
stream_of_redditness_cljs.core.introduce = (function stream_of_redditness_cljs$core$introduce(session,threadId,client){
cljs.core.println.call(null,[cljs.core.str("Introducing: "),cljs.core.str(client.connectionId)].join(''));

var vec__49670_49675 = stream_of_redditness_cljs.core.withLim.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null)));
var restMsgs_49676 = cljs.core.nth.call(null,vec__49670_49675,(0),null);
var lastMsg_49677 = cljs.core.nth.call(null,vec__49670_49675,(1),null);
var __49678 = cljs.core.nth.call(null,vec__49670_49675,(2),null);
cljs.core.println.call(null,"Messages: ");

cljs.core.println.call(null,restMsgs_49676);

cljs.core.println.call(null,lastMsg_49677);

var seq__49671_49679 = cljs.core.seq.call(null,cljs.core.conj.call(null,restMsgs_49676,lastMsg_49677));
var chunk__49672_49680 = null;
var count__49673_49681 = (0);
var i__49674_49682 = (0);
while(true){
if((i__49674_49682 < count__49673_49681)){
var msg_49683 = cljs.core._nth.call(null,chunk__49672_49680,i__49674_49682);
session.signal(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"introduction",new cljs.core.Keyword(null,"to","to",192099007),client,new cljs.core.Keyword(null,"data","data",-232669377),msg_49683], null)));

var G__49684 = seq__49671_49679;
var G__49685 = chunk__49672_49680;
var G__49686 = count__49673_49681;
var G__49687 = (i__49674_49682 + (1));
seq__49671_49679 = G__49684;
chunk__49672_49680 = G__49685;
count__49673_49681 = G__49686;
i__49674_49682 = G__49687;
continue;
} else {
var temp__4126__auto___49688 = cljs.core.seq.call(null,seq__49671_49679);
if(temp__4126__auto___49688){
var seq__49671_49689__$1 = temp__4126__auto___49688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49671_49689__$1)){
var c__18901__auto___49690 = cljs.core.chunk_first.call(null,seq__49671_49689__$1);
var G__49691 = cljs.core.chunk_rest.call(null,seq__49671_49689__$1);
var G__49692 = c__18901__auto___49690;
var G__49693 = cljs.core.count.call(null,c__18901__auto___49690);
var G__49694 = (0);
seq__49671_49679 = G__49691;
chunk__49672_49680 = G__49692;
count__49673_49681 = G__49693;
i__49674_49682 = G__49694;
continue;
} else {
var msg_49695 = cljs.core.first.call(null,seq__49671_49689__$1);
session.signal(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"introduction",new cljs.core.Keyword(null,"to","to",192099007),client,new cljs.core.Keyword(null,"data","data",-232669377),msg_49695], null)));

var G__49696 = cljs.core.next.call(null,seq__49671_49689__$1);
var G__49697 = null;
var G__49698 = (0);
var G__49699 = (0);
seq__49671_49679 = G__49696;
chunk__49672_49680 = G__49697;
count__49673_49681 = G__49698;
i__49674_49682 = G__49699;
continue;
}
} else {
}
}
break;
}

return session.signal(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"introduction-complete",new cljs.core.Keyword(null,"to","to",192099007),client], null)));
});
stream_of_redditness_cljs.core.introduceIfNecessary = (function stream_of_redditness_cljs$core$introduceIfNecessary(session,threadId){
var myId = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"myId","myId",679282210)], null));
var clients = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null));
var unintroduced_clients = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null));
var introduced_clients = cljs.core.sort_by.call(null,stream_of_redditness_cljs.core.strToNum,cljs.core.filter.call(null,((function (myId,clients,unintroduced_clients){
return (function (p1__49700_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,unintroduced_clients,p1__49700_SHARP_));
});})(myId,clients,unintroduced_clients))
,cljs.core.keys.call(null,clients)));
if(!(cljs.core.contains_QMARK_.call(null,unintroduced_clients,myId))){
var seq__49706 = cljs.core.seq.call(null,unintroduced_clients);
var chunk__49707 = null;
var count__49708 = (0);
var i__49709 = (0);
while(true){
if((i__49709 < count__49708)){
var clientId = cljs.core._nth.call(null,chunk__49707,i__49709);
if(cljs.core._EQ_.call(null,myId,cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (seq__49706,chunk__49707,count__49708,i__49709,clientId,myId,clients,unintroduced_clients,introduced_clients){
return (function (p1__49701_SHARP_){
return (stream_of_redditness_cljs.core.strToNum.call(null,clientId) - stream_of_redditness_cljs.core.strToNum.call(null,p1__49701_SHARP_));
});})(seq__49706,chunk__49707,count__49708,i__49709,clientId,myId,clients,unintroduced_clients,introduced_clients))
,introduced_clients)))){
stream_of_redditness_cljs.core.introduce.call(null,session,threadId,cljs.core.get.call(null,clients,clientId));
} else {
}

var G__49710 = seq__49706;
var G__49711 = chunk__49707;
var G__49712 = count__49708;
var G__49713 = (i__49709 + (1));
seq__49706 = G__49710;
chunk__49707 = G__49711;
count__49708 = G__49712;
i__49709 = G__49713;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__49706);
if(temp__4126__auto__){
var seq__49706__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49706__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__49706__$1);
var G__49714 = cljs.core.chunk_rest.call(null,seq__49706__$1);
var G__49715 = c__18901__auto__;
var G__49716 = cljs.core.count.call(null,c__18901__auto__);
var G__49717 = (0);
seq__49706 = G__49714;
chunk__49707 = G__49715;
count__49708 = G__49716;
i__49709 = G__49717;
continue;
} else {
var clientId = cljs.core.first.call(null,seq__49706__$1);
if(cljs.core._EQ_.call(null,myId,cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (seq__49706,chunk__49707,count__49708,i__49709,clientId,seq__49706__$1,temp__4126__auto__,myId,clients,unintroduced_clients,introduced_clients){
return (function (p1__49701_SHARP_){
return (stream_of_redditness_cljs.core.strToNum.call(null,clientId) - stream_of_redditness_cljs.core.strToNum.call(null,p1__49701_SHARP_));
});})(seq__49706,chunk__49707,count__49708,i__49709,clientId,seq__49706__$1,temp__4126__auto__,myId,clients,unintroduced_clients,introduced_clients))
,introduced_clients)))){
stream_of_redditness_cljs.core.introduce.call(null,session,threadId,cljs.core.get.call(null,clients,clientId));
} else {
}

var G__49718 = cljs.core.next.call(null,seq__49706__$1);
var G__49719 = null;
var G__49720 = (0);
var G__49721 = (0);
seq__49706 = G__49718;
chunk__49707 = G__49719;
count__49708 = G__49720;
i__49709 = G__49721;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
stream_of_redditness_cljs.core.ensureSomeoneIsIntroduced = (function stream_of_redditness_cljs$core$ensureSomeoneIsIntroduced(session,threadId){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null))),cljs.core.count.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null))))){
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),cljs.core.PersistentHashSet.fromArray([stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"myId","myId",679282210)], null))], true),clojure.set.difference);

session.signal(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"am-introduced"], null)));

return stream_of_redditness_cljs.core.introduceIfNecessary.call(null,session,threadId);
} else {
return null;
}
});
stream_of_redditness_cljs.core.socket = io("http://stream-of-redditness.herokuapp.com/");
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
stream_of_redditness_cljs.core.socket.on("threadSession",(function (msg){
var vec__49722 = cljs.core.js__GT_clj.call(null,msg);
var threadId_str = cljs.core.nth.call(null,vec__49722,(0),null);
var opentokKey = cljs.core.nth.call(null,vec__49722,(1),null);
var sessionId = cljs.core.nth.call(null,vec__49722,(2),null);
var token = cljs.core.nth.call(null,vec__49722,(3),null);
var session = TB.initSession(sessionId);
var threadId = cljs.core.keyword.call(null,threadId_str);
session.on("sessionConnected",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (_){
cljs.core.println.call(null,[cljs.core.str("Session Connected: "),cljs.core.str(session.connection.connectionId)].join(''));

return stream_of_redditness_cljs.core.zipOverwriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"session","session",1008279103),session,new cljs.core.Keyword(null,"myId","myId",679282210),session.connection.connectionId,new cljs.core.Keyword(null,"clients","clients",1436018090),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885),cljs.core.PersistentHashSet.EMPTY], null));
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

session.on("connectionCreated",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event){
var client = event.connection;
var clientId = client.connectionId;
var myId = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"myId","myId",679282210)], null));
cljs.core.println.call(null,[cljs.core.str("Connection Created: "),cljs.core.str(clientId)].join(''));

if(cljs.core.contains_QMARK_.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null)),myId)){
if(cljs.core.contains_QMARK_.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null)),myId)){
session.signal(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"am-not-introduced"], null)));
} else {
}

stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),cljs.core.PersistentHashSet.fromArray([clientId], true),clojure.set.union);
} else {
if((cljs.core._EQ_.call(null,clientId,myId)) && (((0) < cljs.core.count.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null)))))){
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),cljs.core.PersistentHashSet.fromArray([clientId], true),clojure.set.union);
} else {
}
}

stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null),new cljs.core.PersistentArrayMap.fromArray([clientId,client], true, false));

return stream_of_redditness_cljs.core.introduceIfNecessary.call(null,session,threadId);
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

session.on("connectionDestroyed",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event){
var clientId_49723 = event.connection.connectionId;
var newClients_49724 = cljs.core.dissoc.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null)),clientId_49723);
cljs.core.println.call(null,[cljs.core.str("Connection Destroyed: "),cljs.core.str(clientId_49723)].join(''));

stream_of_redditness_cljs.core.zipOverwriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"clients","clients",1436018090)], null),newClients_49724);

stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263),cljs.core.PersistentHashSet.fromArray([clientId_49723], true),new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885),cljs.core.PersistentHashSet.fromArray([clientId_49723], true)], null),clojure.set.difference);

stream_of_redditness_cljs.core.introduceIfNecessary.call(null,session,threadId);

return stream_of_redditness_cljs.core.ensureSomeoneIsIntroduced.call(null,session,threadId);
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

session.on("signal:am-not-introduced",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event){
var clientId_49725 = event.from.id;
cljs.core.println.call(null,[cljs.core.str("Received not introduced: "),cljs.core.str(clientId_49725)].join(''));

stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),cljs.core.PersistentHashSet.fromArray([clientId_49725], true),clojure.set.union);

stream_of_redditness_cljs.core.introduceIfNecessary.call(null,session,threadId);

return stream_of_redditness_cljs.core.ensureSomeoneIsIntroduced.call(null,session,threadId);
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

session.on("signal:am-introduced",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event){
var clientId = event.from.id;
cljs.core.println.call(null,[cljs.core.str("Received am introduced: "),cljs.core.str(clientId)].join(''));

return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263),cljs.core.PersistentHashSet.fromArray([clientId], true),new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885),cljs.core.PersistentHashSet.fromArray([clientId], true)], null),clojure.set.difference);
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

session.on("signal:introduction",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null),stream_of_redditness_cljs.core.allKeysToKeywords.call(null,cljs.core.js__GT_clj.call(null,event.data)));
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

session.on("signal:introduction-complete",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event){
cljs.core.println.call(null,[cljs.core.str("I am fully introduced")].join(''));

stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),cljs.core.PersistentHashSet.fromArray([stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opentokSessions","opentokSessions",-1493801848),threadId,new cljs.core.Keyword(null,"myId","myId",679282210)], null))], true),clojure.set.difference);

session.signal(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"am-introduced"], null)));

return session.on("signal:comment-update",((function (vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId){
return (function (event__$1){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null),event__$1.data);
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);
});})(vec__49722,threadId_str,opentokKey,sessionId,token,session,threadId))
);

return session.connect(opentokKey,token);
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
if(typeof stream_of_redditness_cljs.core.t49732 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t49732 = (function (storedAuths,owner,data,authButtonView,meta49733){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButtonView = authButtonView;
this.meta49733 = meta49733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t49732.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t49732.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (this__21938__auto__){
var self__ = this;
var this__21938__auto____$1 = this;
return React.DOM.h3(null,"Logged in as: ",React.DOM.button({"onClick": stream_of_redditness_cljs.core.onAuthSwitchClick, "className": "button"},React.DOM.a(null,stream_of_redditness_cljs.core.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null)))));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t49732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_49734){
var self__ = this;
var _49734__$1 = this;
return self__.meta49733;
});})(storedAuths))
;

stream_of_redditness_cljs.core.t49732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_49734,meta49733__$1){
var self__ = this;
var _49734__$1 = this;
return (new stream_of_redditness_cljs.core.t49732(self__.storedAuths,self__.owner,self__.data,self__.authButtonView,meta49733__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t49732.cljs$lang$type = true;

stream_of_redditness_cljs.core.t49732.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t49732";

stream_of_redditness_cljs.core.t49732.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t49732");
});})(storedAuths))
;

stream_of_redditness_cljs.core.__GT_t49732 = ((function (storedAuths){
return (function stream_of_redditness_cljs$core$authButtonView_$___GT_t49732(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta49733){
return (new stream_of_redditness_cljs.core.t49732(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta49733));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.core.t49732(storedAuths,owner,data,stream_of_redditness_cljs$core$authButtonView,null));
} else {
if(typeof stream_of_redditness_cljs.core.t49735 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t49735 = (function (storedAuths,owner,data,authButtonView,meta49736){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButtonView = authButtonView;
this.meta49736 = meta49736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t49735.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t49735.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (this__21938__auto__){
var self__ = this;
var this__21938__auto____$1 = this;
return React.DOM.button({"onClick": stream_of_redditness_cljs.core.onAuthNewClick, "className": "button"},"Authorize An Account");
});})(storedAuths))
;

stream_of_redditness_cljs.core.t49735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_49737){
var self__ = this;
var _49737__$1 = this;
return self__.meta49736;
});})(storedAuths))
;

stream_of_redditness_cljs.core.t49735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_49737,meta49736__$1){
var self__ = this;
var _49737__$1 = this;
return (new stream_of_redditness_cljs.core.t49735(self__.storedAuths,self__.owner,self__.data,self__.authButtonView,meta49736__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.core.t49735.cljs$lang$type = true;

stream_of_redditness_cljs.core.t49735.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t49735";

stream_of_redditness_cljs.core.t49735.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t49735");
});})(storedAuths))
;

stream_of_redditness_cljs.core.__GT_t49735 = ((function (storedAuths){
return (function stream_of_redditness_cljs$core$authButtonView_$___GT_t49735(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta49736){
return (new stream_of_redditness_cljs.core.t49735(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta49736));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.core.t49735(storedAuths,owner,data,stream_of_redditness_cljs$core$authButtonView,null));
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
return cljs.core.first.call(null,(function (p1__49738_SHARP_){
return cljs.core.reduce.call(null,(function (p__49741,listEntry){
var vec__49742 = p__49741;
var moreComments = cljs.core.nth.call(null,vec__49742,(0),null);
var paths = cljs.core.nth.call(null,vec__49742,(1),null);
var kind = cljs.core.get.call(null,listEntry,"kind");
var commentData = cljs.core.get.call(null,listEntry,"data");
var childs = clojure.string.join.call(null,",",cljs.core.get.call(null,commentData,"children"));
var parentId = cljs.core.keyword.call(null,((function (kind,commentData,childs,vec__49742,moreComments,paths){
return (function (pid){
return clojure.string.join.call(null,"",pid);
});})(kind,commentData,childs,vec__49742,moreComments,paths))
.call(null,((function (kind,commentData,childs,vec__49742,moreComments,paths){
return (function (pid){
return cljs.core.drop.call(null,(3),pid);
});})(kind,commentData,childs,vec__49742,moreComments,paths))
.call(null,cljs.core.get.call(null,commentData,"parent_id"))));
var commentId = cljs.core.keyword.call(null,cljs.core.get.call(null,commentData,"id"));
var body = cljs.core.get.call(null,commentData,"body");
var t = cljs.core.get.call(null,commentData,"created");
if(cljs.core._EQ_.call(null,kind,"more")){
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"threadId","threadId",-440699805),cljs.core.first.call(null,threadIds),new cljs.core.Keyword(null,"requestFun","requestFun",1837053695),((function (kind,commentData,childs,parentId,commentId,body,t,vec__49742,moreComments,paths){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/"),cljs.core.str("morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,threadIds))),cljs.core.str("&children="),cljs.core.str(childs),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs$core$moreCommentsJSONHandler,parentId.call(null,paths))], null));
});})(kind,commentData,childs,parentId,commentId,body,t,vec__49742,moreComments,paths))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moreComments,paths], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream_of_redditness_cljs.core.deep_merge.call(null,moreComments,cljs.core.reduce.call(null,((function (kind,commentData,childs,parentId,commentId,body,t,vec__49742,moreComments,paths){
return (function (commentTree,pathEl){
return new cljs.core.PersistentArrayMap.fromArray([pathEl,commentTree], true, false);
});})(kind,commentData,childs,parentId,commentId,body,t,vec__49742,moreComments,paths))
,new cljs.core.PersistentArrayMap.fromArray([commentId,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),commentId,new cljs.core.Keyword(null,"content","content",15833224),body,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"time","time",1385887882),t], null)], true, false),cljs.core.reverse.call(null,parentId.call(null,paths)))),cljs.core.assoc.call(null,paths,commentId,cljs.core.concat.call(null,parentId.call(null,paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commentId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,threadIds))),threadIds], true, false)], null),p1__49738_SHARP_);
}).call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))));
}),cljs.core.filter.call(null,(function (jqueryArray){
return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))),"data");
}),cljs.core.get.call(null,response,"jquery"))))));
});
stream_of_redditness_cljs.core.processCommentTree = (function stream_of_redditness_cljs$core$processCommentTree(pathTo,commentTree){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comments","comments",-293346423),stream_of_redditness_cljs$core$processCommentTree.call(null,cljs.core.concat.call(null,pathTo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"replies")),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"body"),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"created"),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")], null)], null);
}),(function (p__49749){
var vec__49750 = p__49749;
var t1 = cljs.core.nth.call(null,vec__49750,(0),null);
var more = cljs.core.nth.call(null,vec__49750,(1),null);
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null),cljs.core.map.call(null,((function (vec__49750,t1,more){
return (function (moreData){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"threadId","threadId",-440699805),cljs.core.first.call(null,pathTo),new cljs.core.Keyword(null,"requestFun","requestFun",1837053695),((function (vec__49750,t1,more){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,pathTo))),cljs.core.str("&children="),cljs.core.str(((function (vec__49750,t1,more){
return (function (p1__49746_SHARP_){
return clojure.string.join.call(null,",",p1__49746_SHARP_);
});})(vec__49750,t1,more))
.call(null,cljs.core.get.call(null,cljs.core.get.call(null,moreData,"data"),"children"))),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.core.moreCommentsJSONHandler,pathTo)], null));
});})(vec__49750,t1,more))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null);
});})(vec__49750,t1,more))
,more));

return t1;
}).call(null,stream_of_redditness_cljs.core.partition2.call(null,(function (p1__49745_SHARP_){
return cljs.core._EQ_.call(null,"t1",cljs.core.get.call(null,p1__49745_SHARP_,"kind"));
}),(function (p1__49744_SHARP_){
return cljs.core.get.call(null,p1__49744_SHARP_,"children");
}).call(null,(function (p1__49743_SHARP_){
return cljs.core.get.call(null,p1__49743_SHARP_,"data");
}).call(null,commentTree))))));
});
stream_of_redditness_cljs.core.newCommentsJSONHandler = (function stream_of_redditness_cljs$core$newCommentsJSONHandler(threadId,response){
if(cljs.core.truth_(stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null)))){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495),threadId], null),(function (comments){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),comments], null);
}).call(null,stream_of_redditness_cljs.core.processCommentTree.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threadId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),(function (p1__49751_SHARP_){
return cljs.core.nth.call(null,p1__49751_SHARP_,(1));
}).call(null,cljs.core.js__GT_clj.call(null,response)))));
} else {
return null;
}
});
stream_of_redditness_cljs.core.pollReddit = (function stream_of_redditness_cljs$core$pollReddit(){
cljs.core.println.call(null,"Still doin this shit");

var incedWaitTimes = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49757){
var vec__49758 = p__49757;
var k = cljs.core.nth.call(null,vec__49758,(0),null);
var v = cljs.core.nth.call(null,vec__49758,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"waitTime","waitTime",1818151535),((1) + new cljs.core.Keyword(null,"waitTime","waitTime",1818151535).cljs$core$IFn$_invoke$arity$1(v)))], null);
}),stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null))));
var targetId = cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.max_key,((function (incedWaitTimes){
return (function (p__49759){
var vec__49760 = p__49759;
var k = cljs.core.nth.call(null,vec__49760,(0),null);
var v = cljs.core.nth.call(null,vec__49760,(1),null);
return new cljs.core.Keyword(null,"waitTime","waitTime",1818151535).cljs$core$IFn$_invoke$arity$1(v);
});})(incedWaitTimes))
,incedWaitTimes));
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null),((function (incedWaitTimes,targetId){
return (function (p1__49752_SHARP_){
return stream_of_redditness_cljs.core.deep_merge.call(null,incedWaitTimes,p1__49752_SHARP_);
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
var threads_49786 = cljs.core.map.call(null,cljs.core.keyword,cljs.core.js__GT_clj.call(null,JSON.parse([cljs.core.str("["),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,(function (item){
return [cljs.core.str("\""),cljs.core.str(item),cljs.core.str("\"")].join('');
}),clojure.string.split.call(null,threadsString,/,/)))),cljs.core.str("]")].join(''))));
var activeThreads_49787 = stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null));
var stillActiveThreads_49788 = cljs.core.select_keys.call(null,activeThreads_49787,(function (){var iter__18870__auto__ = ((function (threads_49786,activeThreads_49787){
return (function stream_of_redditness_cljs$core$streamView_$_iter__49775(s__49776){
return (new cljs.core.LazySeq(null,((function (threads_49786,activeThreads_49787){
return (function (){
var s__49776__$1 = s__49776;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49776__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__49782 = cljs.core.first.call(null,xs__4624__auto__);
var k = cljs.core.nth.call(null,vec__49782,(0),null);
var v = cljs.core.nth.call(null,vec__49782,(1),null);
var iterys__18866__auto__ = ((function (s__49776__$1,vec__49782,k,v,xs__4624__auto__,temp__4126__auto__,threads_49786,activeThreads_49787){
return (function stream_of_redditness_cljs$core$streamView_$_iter__49775_$_iter__49777(s__49778){
return (new cljs.core.LazySeq(null,((function (s__49776__$1,vec__49782,k,v,xs__4624__auto__,temp__4126__auto__,threads_49786,activeThreads_49787){
return (function (){
var s__49778__$1 = s__49778;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__49778__$1);
if(temp__4126__auto____$1){
var s__49778__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49778__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__49778__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__49780 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__49779 = (0);
while(true){
if((i__49779 < size__18869__auto__)){
var when = cljs.core._nth.call(null,c__18868__auto__,i__49779);
cljs.core.chunk_append.call(null,b__49780,k);

var G__49789 = (i__49779 + (1));
i__49779 = G__49789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49780),stream_of_redditness_cljs$core$streamView_$_iter__49775_$_iter__49777.call(null,cljs.core.chunk_rest.call(null,s__49778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49780),null);
}
} else {
var when = cljs.core.first.call(null,s__49778__$2);
return cljs.core.cons.call(null,k,stream_of_redditness_cljs$core$streamView_$_iter__49775_$_iter__49777.call(null,cljs.core.rest.call(null,s__49778__$2)));
}
} else {
return null;
}
break;
}
});})(s__49776__$1,vec__49782,k,v,xs__4624__auto__,temp__4126__auto__,threads_49786,activeThreads_49787))
,null,null));
});})(s__49776__$1,vec__49782,k,v,xs__4624__auto__,temp__4126__auto__,threads_49786,activeThreads_49787))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([k], true),threads_49786)));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,stream_of_redditness_cljs$core$streamView_$_iter__49775.call(null,cljs.core.rest.call(null,s__49776__$1)));
} else {
var G__49790 = cljs.core.rest.call(null,s__49776__$1);
s__49776__$1 = G__49790;
continue;
}
} else {
return null;
}
break;
}
});})(threads_49786,activeThreads_49787))
,null,null));
});})(threads_49786,activeThreads_49787))
;
return iter__18870__auto__.call(null,activeThreads_49787);
})());
((function (threads_49786,activeThreads_49787,stillActiveThreads_49788){
return (function (p1__49763_SHARP_){
stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null),p1__49763_SHARP_);

return ((function (threads_49786,activeThreads_49787,stillActiveThreads_49788){
return (function (requests){
return stream_of_redditness_cljs.core.zipWriteState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null),requests);
});})(threads_49786,activeThreads_49787,stillActiveThreads_49788))
.call(null,cljs.core.map.call(null,((function (threads_49786,activeThreads_49787,stillActiveThreads_49788){
return (function (threadId){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"threadId","threadId",-440699805),threadId,new cljs.core.Keyword(null,"requestFun","requestFun",1837053695),((function (threads_49786,activeThreads_49787,stillActiveThreads_49788){
return (function (){
return stream_of_redditness_cljs.core.newCommentsPoller.call(null,threadId);
});})(threads_49786,activeThreads_49787,stillActiveThreads_49788))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new","new",-2085437848)], null);
});})(threads_49786,activeThreads_49787,stillActiveThreads_49788))
,cljs.core.keys.call(null,p1__49763_SHARP_)));
});})(threads_49786,activeThreads_49787,stillActiveThreads_49788))
.call(null,stream_of_redditness_cljs.core.deep_merge.call(null,stillActiveThreads_49788,cljs.core.reduce.call(null,((function (threads_49786,activeThreads_49787,stillActiveThreads_49788){
return (function (p1__49761_SHARP_,p2__49762_SHARP_){
return cljs.core.assoc.call(null,p1__49761_SHARP_,cljs.core.nth.call(null,p2__49762_SHARP_,(1)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"waitTime","waitTime",1818151535),(0),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.call(null,p2__49762_SHARP_,(0)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.nth.call(null,p2__49762_SHARP_,(1))], null));
});})(threads_49786,activeThreads_49787,stillActiveThreads_49788))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff0000","#00ff00","#0000ff","#FFFF00","#00FFFF","#FF00FF"], null)),threads_49786))));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (threadId){
return stream_of_redditness_cljs.core.socket.emit("joinThread",threadId);
}),cljs.core.keys.call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null)))));

return om.core.root.call(null,(function (activeThreads,owner){
if(typeof stream_of_redditness_cljs.core.t49783 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.core.t49783 = (function (owner,activeThreads,threadsString,streamView,meta49784){
this.owner = owner;
this.activeThreads = activeThreads;
this.threadsString = threadsString;
this.streamView = streamView;
this.meta49784 = meta49784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.core.t49783.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.core.t49783.prototype.om$core$IRender$render$arity$1 = (function (this__21938__auto__){
var self__ = this;
var this__21938__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "list"},stream_of_redditness_cljs.core.renderThreads.call(null,new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reddit","reddit",-1323650081).cljs$core$IFn$_invoke$arity$1(self__.activeThreads))));
});

stream_of_redditness_cljs.core.t49783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49785){
var self__ = this;
var _49785__$1 = this;
return self__.meta49784;
});

stream_of_redditness_cljs.core.t49783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49785,meta49784__$1){
var self__ = this;
var _49785__$1 = this;
return (new stream_of_redditness_cljs.core.t49783(self__.owner,self__.activeThreads,self__.threadsString,self__.streamView,meta49784__$1));
});

stream_of_redditness_cljs.core.t49783.cljs$lang$type = true;

stream_of_redditness_cljs.core.t49783.cljs$lang$ctorStr = "stream-of-redditness-cljs.core/t49783";

stream_of_redditness_cljs.core.t49783.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.core/t49783");
});

stream_of_redditness_cljs.core.__GT_t49783 = (function stream_of_redditness_cljs$core$streamView_$___GT_t49783(owner__$1,activeThreads__$1,threadsString__$1,streamView__$1,meta49784){
return (new stream_of_redditness_cljs.core.t49783(owner__$1,activeThreads__$1,threadsString__$1,streamView__$1,meta49784));
});

}

return (new stream_of_redditness_cljs.core.t49783(owner,activeThreads,threadsString,stream_of_redditness_cljs$core$streamView,null));
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
}).call(null,(function (p__49795){
var vec__49796 = p__49795;
var news = cljs.core.nth.call(null,vec__49796,(0),null);
var others = cljs.core.nth.call(null,vec__49796,(1),null);
return cljs.core.concat.call(null,cljs.core.vals.call(null,cljs.core.reduce.call(null,((function (vec__49796,news,others){
return (function (dict,threadDict){
return cljs.core.assoc.call(null,dict,new cljs.core.Keyword(null,"threadId","threadId",-440699805).cljs$core$IFn$_invoke$arity$1(threadDict),threadDict);
});})(vec__49796,news,others))
,cljs.core.PersistentArrayMap.EMPTY,news)),others);
}).call(null,stream_of_redditness_cljs.core.partition2.call(null,(function (p1__49792_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__49792_SHARP_));
}),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.filter.call(null,(function (p1__49791_SHARP_){
return new cljs.core.Keyword(null,"threadId","threadId",-440699805).cljs$core$IFn$_invoke$arity$1(p1__49791_SHARP_).call(null,stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"activeThreads","activeThreads",927066495)], null)));
}),stream_of_redditness_cljs.core.zipReadState.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"requestQueue","requestQueue",1503283607)], null)))))));
});
window.setInterval(stream_of_redditness_cljs.core.makeNextRequest,(2200));
stream_of_redditness_cljs.core.on_js_reload = (function stream_of_redditness_cljs$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1432425584295