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
var seq__28000_28012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28001_28013 = null;
var count__28002_28014 = (0);
var i__28003_28015 = (0);
while(true){
if((i__28003_28015 < count__28002_28014)){
var f_28016 = cljs.core._nth.call(null,chunk__28001_28013,i__28003_28015);
cljs.core.println.call(null,"  ",f_28016);

var G__28017 = seq__28000_28012;
var G__28018 = chunk__28001_28013;
var G__28019 = count__28002_28014;
var G__28020 = (i__28003_28015 + (1));
seq__28000_28012 = G__28017;
chunk__28001_28013 = G__28018;
count__28002_28014 = G__28019;
i__28003_28015 = G__28020;
continue;
} else {
var temp__4126__auto___28021 = cljs.core.seq.call(null,seq__28000_28012);
if(temp__4126__auto___28021){
var seq__28000_28022__$1 = temp__4126__auto___28021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28000_28022__$1)){
var c__18901__auto___28023 = cljs.core.chunk_first.call(null,seq__28000_28022__$1);
var G__28024 = cljs.core.chunk_rest.call(null,seq__28000_28022__$1);
var G__28025 = c__18901__auto___28023;
var G__28026 = cljs.core.count.call(null,c__18901__auto___28023);
var G__28027 = (0);
seq__28000_28012 = G__28024;
chunk__28001_28013 = G__28025;
count__28002_28014 = G__28026;
i__28003_28015 = G__28027;
continue;
} else {
var f_28028 = cljs.core.first.call(null,seq__28000_28022__$1);
cljs.core.println.call(null,"  ",f_28028);

var G__28029 = cljs.core.next.call(null,seq__28000_28022__$1);
var G__28030 = null;
var G__28031 = (0);
var G__28032 = (0);
seq__28000_28012 = G__28029;
chunk__28001_28013 = G__28030;
count__28002_28014 = G__28031;
i__28003_28015 = G__28032;
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
var seq__28004 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28005 = null;
var count__28006 = (0);
var i__28007 = (0);
while(true){
if((i__28007 < count__28006)){
var vec__28008 = cljs.core._nth.call(null,chunk__28005,i__28007);
var name = cljs.core.nth.call(null,vec__28008,(0),null);
var map__28009 = cljs.core.nth.call(null,vec__28008,(1),null);
var map__28009__$1 = ((cljs.core.seq_QMARK_.call(null,map__28009))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009):map__28009);
var arglists = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28033 = seq__28004;
var G__28034 = chunk__28005;
var G__28035 = count__28006;
var G__28036 = (i__28007 + (1));
seq__28004 = G__28033;
chunk__28005 = G__28034;
count__28006 = G__28035;
i__28007 = G__28036;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28004);
if(temp__4126__auto__){
var seq__28004__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28004__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__28004__$1);
var G__28037 = cljs.core.chunk_rest.call(null,seq__28004__$1);
var G__28038 = c__18901__auto__;
var G__28039 = cljs.core.count.call(null,c__18901__auto__);
var G__28040 = (0);
seq__28004 = G__28037;
chunk__28005 = G__28038;
count__28006 = G__28039;
i__28007 = G__28040;
continue;
} else {
var vec__28010 = cljs.core.first.call(null,seq__28004__$1);
var name = cljs.core.nth.call(null,vec__28010,(0),null);
var map__28011 = cljs.core.nth.call(null,vec__28010,(1),null);
var map__28011__$1 = ((cljs.core.seq_QMARK_.call(null,map__28011))?cljs.core.apply.call(null,cljs.core.hash_map,map__28011):map__28011);
var arglists = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28041 = cljs.core.next.call(null,seq__28004__$1);
var G__28042 = null;
var G__28043 = (0);
var G__28044 = (0);
seq__28004 = G__28041;
chunk__28005 = G__28042;
count__28006 = G__28043;
i__28007 = G__28044;
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

//# sourceMappingURL=repl.js.map?rel=1431907797517