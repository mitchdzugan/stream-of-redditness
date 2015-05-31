// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.atoms');
goog.require('cljs.core');
if(typeof stream_of_redditness_cljs.atoms.active_threads_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.atoms.active_threads_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof stream_of_redditness_cljs.atoms.request_queue_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.atoms.request_queue_atom = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof stream_of_redditness_cljs.atoms.opentok_sessions_atom !== 'undefined'){
} else {
stream_of_redditness_cljs.atoms.opentok_sessions_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

//# sourceMappingURL=atoms.js.map?rel=1432897759034