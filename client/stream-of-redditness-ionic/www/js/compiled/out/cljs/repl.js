// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29240_29252 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29241_29253 = null;
var count__29242_29254 = (0);
var i__29243_29255 = (0);
while(true){
if((i__29243_29255 < count__29242_29254)){
var f_29256 = cljs.core._nth.call(null,chunk__29241_29253,i__29243_29255);
cljs.core.println.call(null,"  ",f_29256);

var G__29257 = seq__29240_29252;
var G__29258 = chunk__29241_29253;
var G__29259 = count__29242_29254;
var G__29260 = (i__29243_29255 + (1));
seq__29240_29252 = G__29257;
chunk__29241_29253 = G__29258;
count__29242_29254 = G__29259;
i__29243_29255 = G__29260;
continue;
} else {
var temp__4126__auto___29261 = cljs.core.seq.call(null,seq__29240_29252);
if(temp__4126__auto___29261){
var seq__29240_29262__$1 = temp__4126__auto___29261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29240_29262__$1)){
var c__18901__auto___29263 = cljs.core.chunk_first.call(null,seq__29240_29262__$1);
var G__29264 = cljs.core.chunk_rest.call(null,seq__29240_29262__$1);
var G__29265 = c__18901__auto___29263;
var G__29266 = cljs.core.count.call(null,c__18901__auto___29263);
var G__29267 = (0);
seq__29240_29252 = G__29264;
chunk__29241_29253 = G__29265;
count__29242_29254 = G__29266;
i__29243_29255 = G__29267;
continue;
} else {
var f_29268 = cljs.core.first.call(null,seq__29240_29262__$1);
cljs.core.println.call(null,"  ",f_29268);

var G__29269 = cljs.core.next.call(null,seq__29240_29262__$1);
var G__29270 = null;
var G__29271 = (0);
var G__29272 = (0);
seq__29240_29252 = G__29269;
chunk__29241_29253 = G__29270;
count__29242_29254 = G__29271;
i__29243_29255 = G__29272;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18116__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29244 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29245 = null;
var count__29246 = (0);
var i__29247 = (0);
while(true){
if((i__29247 < count__29246)){
var vec__29248 = cljs.core._nth.call(null,chunk__29245,i__29247);
var name = cljs.core.nth.call(null,vec__29248,(0),null);
var map__29249 = cljs.core.nth.call(null,vec__29248,(1),null);
var map__29249__$1 = ((cljs.core.seq_QMARK_.call(null,map__29249))?cljs.core.apply.call(null,cljs.core.hash_map,map__29249):map__29249);
var arglists = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29273 = seq__29244;
var G__29274 = chunk__29245;
var G__29275 = count__29246;
var G__29276 = (i__29247 + (1));
seq__29244 = G__29273;
chunk__29245 = G__29274;
count__29246 = G__29275;
i__29247 = G__29276;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29244);
if(temp__4126__auto__){
var seq__29244__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29244__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__29244__$1);
var G__29277 = cljs.core.chunk_rest.call(null,seq__29244__$1);
var G__29278 = c__18901__auto__;
var G__29279 = cljs.core.count.call(null,c__18901__auto__);
var G__29280 = (0);
seq__29244 = G__29277;
chunk__29245 = G__29278;
count__29246 = G__29279;
i__29247 = G__29280;
continue;
} else {
var vec__29250 = cljs.core.first.call(null,seq__29244__$1);
var name = cljs.core.nth.call(null,vec__29250,(0),null);
var map__29251 = cljs.core.nth.call(null,vec__29250,(1),null);
var map__29251__$1 = ((cljs.core.seq_QMARK_.call(null,map__29251))?cljs.core.apply.call(null,cljs.core.hash_map,map__29251):map__29251);
var arglists = cljs.core.get.call(null,map__29251__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29281 = cljs.core.next.call(null,seq__29244__$1);
var G__29282 = null;
var G__29283 = (0);
var G__29284 = (0);
seq__29244 = G__29281;
chunk__29245 = G__29282;
count__29246 = G__29283;
i__29247 = G__29284;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1432432039930