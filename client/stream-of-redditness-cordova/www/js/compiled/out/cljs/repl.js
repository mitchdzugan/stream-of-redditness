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
var seq__22564_22591 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22565_22592 = null;
var count__22566_22593 = (0);
var i__22567_22594 = (0);
while(true){
if((i__22567_22594 < count__22566_22593)){
var f_22596 = cljs.core._nth.call(null,chunk__22565_22592,i__22567_22594);
cljs.core.println.call(null,"  ",f_22596);

var G__22599 = seq__22564_22591;
var G__22600 = chunk__22565_22592;
var G__22601 = count__22566_22593;
var G__22602 = (i__22567_22594 + (1));
seq__22564_22591 = G__22599;
chunk__22565_22592 = G__22600;
count__22566_22593 = G__22601;
i__22567_22594 = G__22602;
continue;
} else {
var temp__4126__auto___22603 = cljs.core.seq.call(null,seq__22564_22591);
if(temp__4126__auto___22603){
var seq__22564_22604__$1 = temp__4126__auto___22603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22564_22604__$1)){
var c__18901__auto___22605 = cljs.core.chunk_first.call(null,seq__22564_22604__$1);
var G__22606 = cljs.core.chunk_rest.call(null,seq__22564_22604__$1);
var G__22607 = c__18901__auto___22605;
var G__22608 = cljs.core.count.call(null,c__18901__auto___22605);
var G__22609 = (0);
seq__22564_22591 = G__22606;
chunk__22565_22592 = G__22607;
count__22566_22593 = G__22608;
i__22567_22594 = G__22609;
continue;
} else {
var f_22610 = cljs.core.first.call(null,seq__22564_22604__$1);
cljs.core.println.call(null,"  ",f_22610);

var G__22611 = cljs.core.next.call(null,seq__22564_22604__$1);
var G__22612 = null;
var G__22613 = (0);
var G__22614 = (0);
seq__22564_22591 = G__22611;
chunk__22565_22592 = G__22612;
count__22566_22593 = G__22613;
i__22567_22594 = G__22614;
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
var seq__22570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22571 = null;
var count__22572 = (0);
var i__22573 = (0);
while(true){
if((i__22573 < count__22572)){
var vec__22574 = cljs.core._nth.call(null,chunk__22571,i__22573);
var name = cljs.core.nth.call(null,vec__22574,(0),null);
var map__22575 = cljs.core.nth.call(null,vec__22574,(1),null);
var map__22575__$1 = ((cljs.core.seq_QMARK_.call(null,map__22575))?cljs.core.apply.call(null,cljs.core.hash_map,map__22575):map__22575);
var arglists = cljs.core.get.call(null,map__22575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__22575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22618 = seq__22570;
var G__22619 = chunk__22571;
var G__22620 = count__22572;
var G__22621 = (i__22573 + (1));
seq__22570 = G__22618;
chunk__22571 = G__22619;
count__22572 = G__22620;
i__22573 = G__22621;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22570);
if(temp__4126__auto__){
var seq__22570__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22570__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__22570__$1);
var G__22624 = cljs.core.chunk_rest.call(null,seq__22570__$1);
var G__22625 = c__18901__auto__;
var G__22626 = cljs.core.count.call(null,c__18901__auto__);
var G__22627 = (0);
seq__22570 = G__22624;
chunk__22571 = G__22625;
count__22572 = G__22626;
i__22573 = G__22627;
continue;
} else {
var vec__22578 = cljs.core.first.call(null,seq__22570__$1);
var name = cljs.core.nth.call(null,vec__22578,(0),null);
var map__22579 = cljs.core.nth.call(null,vec__22578,(1),null);
var map__22579__$1 = ((cljs.core.seq_QMARK_.call(null,map__22579))?cljs.core.apply.call(null,cljs.core.hash_map,map__22579):map__22579);
var arglists = cljs.core.get.call(null,map__22579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__22579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22634 = cljs.core.next.call(null,seq__22570__$1);
var G__22635 = null;
var G__22636 = (0);
var G__22637 = (0);
seq__22570 = G__22634;
chunk__22571 = G__22635;
count__22572 = G__22636;
i__22573 = G__22637;
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

//# sourceMappingURL=repl.js.map?rel=1431876834516