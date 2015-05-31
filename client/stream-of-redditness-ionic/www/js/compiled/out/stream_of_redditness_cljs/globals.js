// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.globals');
goog.require('cljs.core');
if(typeof stream_of_redditness_cljs.globals.active_threads_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.globals.active_threads_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"threads","threads",-1717798734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"comment","comment",532206069),""], null));
}
if(typeof stream_of_redditness_cljs.globals.request_queue_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.globals.request_queue_atom = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof stream_of_redditness_cljs.globals.opentok_sessions_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.globals.opentok_sessions_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof stream_of_redditness_cljs.globals.auth_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.globals.auth_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof stream_of_redditness_cljs.globals.popup_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.globals.popup_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof stream_of_redditness_cljs.globals.socket !== 'undefined'){
} else {
stream_of_redditness_cljs.globals.socket = io("http://localhost:3000");
}

//# sourceMappingURL=globals.js.map?rel=1433048057089