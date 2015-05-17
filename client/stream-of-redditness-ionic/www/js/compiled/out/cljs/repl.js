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
var seq__22511_22526 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22512_22527 = null;
var count__22513_22528 = (0);
var i__22514_22529 = (0);
while(true){
if((i__22514_22529 < count__22513_22528)){
var f_22530 = cljs.core._nth.call(null,chunk__22512_22527,i__22514_22529);
cljs.core.println.call(null,"  ",f_22530);

var G__22531 = seq__22511_22526;
var G__22532 = chunk__22512_22527;
var G__22533 = count__22513_22528;
var G__22534 = (i__22514_22529 + (1));
seq__22511_22526 = G__22531;
chunk__22512_22527 = G__22532;
count__22513_22528 = G__22533;
i__22514_22529 = G__22534;
continue;
} else {
var temp__4126__auto___22535 = cljs.core.seq.call(null,seq__22511_22526);
if(temp__4126__auto___22535){
var seq__22511_22536__$1 = temp__4126__auto___22535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22511_22536__$1)){
var c__18901__auto___22537 = cljs.core.chunk_first.call(null,seq__22511_22536__$1);
var G__22538 = cljs.core.chunk_rest.call(null,seq__22511_22536__$1);
var G__22539 = c__18901__auto___22537;
var G__22540 = cljs.core.count.call(null,c__18901__auto___22537);
var G__22541 = (0);
seq__22511_22526 = G__22538;
chunk__22512_22527 = G__22539;
count__22513_22528 = G__22540;
i__22514_22529 = G__22541;
continue;
} else {
var f_22542 = cljs.core.first.call(null,seq__22511_22536__$1);
cljs.core.println.call(null,"  ",f_22542);

var G__22543 = cljs.core.next.call(null,seq__22511_22536__$1);
var G__22544 = null;
var G__22545 = (0);
var G__22546 = (0);
seq__22511_22526 = G__22543;
chunk__22512_22527 = G__22544;
count__22513_22528 = G__22545;
i__22514_22529 = G__22546;
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
var seq__22515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22516 = null;
var count__22517 = (0);
var i__22518 = (0);
while(true){
if((i__22518 < count__22517)){
var vec__22519 = cljs.core._nth.call(null,chunk__22516,i__22518);
var name = cljs.core.nth.call(null,vec__22519,(0),null);
var map__22520 = cljs.core.nth.call(null,vec__22519,(1),null);
var map__22520__$1 = ((cljs.core.seq_QMARK_.call(null,map__22520))?cljs.core.apply.call(null,cljs.core.hash_map,map__22520):map__22520);
var arglists = cljs.core.get.call(null,map__22520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__22520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22547 = seq__22515;
var G__22548 = chunk__22516;
var G__22549 = count__22517;
var G__22550 = (i__22518 + (1));
seq__22515 = G__22547;
chunk__22516 = G__22548;
count__22517 = G__22549;
i__22518 = G__22550;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22515);
if(temp__4126__auto__){
var seq__22515__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22515__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__22515__$1);
var G__22551 = cljs.core.chunk_rest.call(null,seq__22515__$1);
var G__22552 = c__18901__auto__;
var G__22553 = cljs.core.count.call(null,c__18901__auto__);
var G__22554 = (0);
seq__22515 = G__22551;
chunk__22516 = G__22552;
count__22517 = G__22553;
i__22518 = G__22554;
continue;
} else {
var vec__22521 = cljs.core.first.call(null,seq__22515__$1);
var name = cljs.core.nth.call(null,vec__22521,(0),null);
var map__22522 = cljs.core.nth.call(null,vec__22521,(1),null);
var map__22522__$1 = ((cljs.core.seq_QMARK_.call(null,map__22522))?cljs.core.apply.call(null,cljs.core.hash_map,map__22522):map__22522);
var arglists = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22561 = cljs.core.next.call(null,seq__22515__$1);
var G__22562 = null;
var G__22563 = (0);
var G__22564 = (0);
seq__22515 = G__22561;
chunk__22516 = G__22562;
count__22517 = G__22563;
i__22518 = G__22564;
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

//# sourceMappingURL=repl.js.map?rel=1431821090182