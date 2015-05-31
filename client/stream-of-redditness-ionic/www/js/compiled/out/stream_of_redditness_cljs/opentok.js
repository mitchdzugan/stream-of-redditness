// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.opentok');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('stream_of_redditness_cljs.active_threads');
goog.require('stream_of_redditness_cljs.util');
goog.require('stream_of_redditness_cljs.globals');
stream_of_redditness_cljs.opentok.deep_merge_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.deep_merge_in_BANG_,stream_of_redditness_cljs.globals.opentok_sessions_atom);
stream_of_redditness_cljs.opentok.write_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.write_in_BANG_,stream_of_redditness_cljs.globals.opentok_sessions_atom);
stream_of_redditness_cljs.opentok.get_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.get_in_BANG_,stream_of_redditness_cljs.globals.opentok_sessions_atom);
stream_of_redditness_cljs.opentok.remove_from_BANG_ = (function stream_of_redditness_cljs$opentok$remove_from_BANG_(z,v){
return stream_of_redditness_cljs.opentok.write_in_BANG_.call(null,z,(function (p1__35365_SHARP_){
return clojure.set.difference.call(null,p1__35365_SHARP_,cljs.core.PersistentHashSet.fromArray([v], true));
}).call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,z)));
});
stream_of_redditness_cljs.opentok.add_to_BANG_ = (function stream_of_redditness_cljs$opentok$add_to_BANG_(z,v){
return stream_of_redditness_cljs.opentok.write_in_BANG_.call(null,z,(function (p1__35366_SHARP_){
return clojure.set.union.call(null,p1__35366_SHARP_,cljs.core.PersistentHashSet.fromArray([v], true));
}).call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,z)));
});
stream_of_redditness_cljs.opentok.is_in_BANG__QMARK_ = (function stream_of_redditness_cljs$opentok$is_in_BANG__QMARK_(z,v){
return cljs.core.contains_QMARK_.call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,z),v);
});
stream_of_redditness_cljs.opentok.string_to_num = (function stream_of_redditness_cljs$opentok$string_to_num(s){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__35367_SHARP_){
return p1__35367_SHARP_.charCodeAt((0));
})),s);
});
stream_of_redditness_cljs.opentok.introduce = (function stream_of_redditness_cljs$opentok$introduce(session,thread_id,client,client_id,iinf){
cljs.core.println.call(null,[cljs.core.str("Introducing: "),cljs.core.str(client.connectionId)].join(''));

stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),client_id);

stream_of_redditness_cljs.opentok.add_to_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885)], null),client_id);

setTimeout((function (){
if(cljs.core.truth_(stream_of_redditness_cljs.opentok.is_in_BANG__QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885)], null),client_id))){
stream_of_redditness_cljs.opentok.add_to_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),client_id);

stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885)], null),client_id);

return iinf.call(null,session,thread_id);
} else {
return null;
}
}),(5000));

stream_of_redditness_cljs.active_threads.send_large_data.call(null,thread_id,"introduction",stream_of_redditness_cljs.util.get_in_BANG_.call(null,stream_of_redditness_cljs.globals.active_threads_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),thread_id], null)));

return session.signal({"to": client, "type": "introduction-complete"});
});
stream_of_redditness_cljs.opentok.introduce_if_necessary = (function stream_of_redditness_cljs$opentok$introduce_if_necessary(session,thread_id){
var my_id = stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"my-id","my-id",1668580742)], null));
var clients = stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"clients","clients",1436018090)], null));
var is_unintroduced_BANG__QMARK_ = cljs.core.partial.call(null,stream_of_redditness_cljs.opentok.is_in_BANG__QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null));
if(cljs.core.not.call(null,is_unintroduced_BANG__QMARK_.call(null,my_id))){
var seq__35374 = cljs.core.seq.call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null)));
var chunk__35375 = null;
var count__35376 = (0);
var i__35377 = (0);
while(true){
if((i__35377 < count__35376)){
var client_id = cljs.core._nth.call(null,chunk__35375,i__35377);
if(cljs.core._EQ_.call(null,my_id,cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (seq__35374,chunk__35375,count__35376,i__35377,client_id,my_id,clients,is_unintroduced_BANG__QMARK_){
return (function (p1__35369_SHARP_){
return (stream_of_redditness_cljs.opentok.string_to_num.call(null,client_id) - stream_of_redditness_cljs.opentok.string_to_num.call(null,p1__35369_SHARP_));
});})(seq__35374,chunk__35375,count__35376,i__35377,client_id,my_id,clients,is_unintroduced_BANG__QMARK_))
,cljs.core.sort_by.call(null,stream_of_redditness_cljs.opentok.string_to_num,cljs.core.filter.call(null,((function (seq__35374,chunk__35375,count__35376,i__35377,client_id,my_id,clients,is_unintroduced_BANG__QMARK_){
return (function (p1__35368_SHARP_){
return cljs.core.not.call(null,is_unintroduced_BANG__QMARK_.call(null,p1__35368_SHARP_));
});})(seq__35374,chunk__35375,count__35376,i__35377,client_id,my_id,clients,is_unintroduced_BANG__QMARK_))
,cljs.core.keys.call(null,clients))))))){
stream_of_redditness_cljs.opentok.introduce.call(null,session,thread_id,cljs.core.get.call(null,clients,client_id),client_id,stream_of_redditness_cljs$opentok$introduce_if_necessary);
} else {
}

var G__35378 = seq__35374;
var G__35379 = chunk__35375;
var G__35380 = count__35376;
var G__35381 = (i__35377 + (1));
seq__35374 = G__35378;
chunk__35375 = G__35379;
count__35376 = G__35380;
i__35377 = G__35381;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35374);
if(temp__4126__auto__){
var seq__35374__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35374__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__35374__$1);
var G__35382 = cljs.core.chunk_rest.call(null,seq__35374__$1);
var G__35383 = c__18901__auto__;
var G__35384 = cljs.core.count.call(null,c__18901__auto__);
var G__35385 = (0);
seq__35374 = G__35382;
chunk__35375 = G__35383;
count__35376 = G__35384;
i__35377 = G__35385;
continue;
} else {
var client_id = cljs.core.first.call(null,seq__35374__$1);
if(cljs.core._EQ_.call(null,my_id,cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (seq__35374,chunk__35375,count__35376,i__35377,client_id,seq__35374__$1,temp__4126__auto__,my_id,clients,is_unintroduced_BANG__QMARK_){
return (function (p1__35369_SHARP_){
return (stream_of_redditness_cljs.opentok.string_to_num.call(null,client_id) - stream_of_redditness_cljs.opentok.string_to_num.call(null,p1__35369_SHARP_));
});})(seq__35374,chunk__35375,count__35376,i__35377,client_id,seq__35374__$1,temp__4126__auto__,my_id,clients,is_unintroduced_BANG__QMARK_))
,cljs.core.sort_by.call(null,stream_of_redditness_cljs.opentok.string_to_num,cljs.core.filter.call(null,((function (seq__35374,chunk__35375,count__35376,i__35377,client_id,seq__35374__$1,temp__4126__auto__,my_id,clients,is_unintroduced_BANG__QMARK_){
return (function (p1__35368_SHARP_){
return cljs.core.not.call(null,is_unintroduced_BANG__QMARK_.call(null,p1__35368_SHARP_));
});})(seq__35374,chunk__35375,count__35376,i__35377,client_id,seq__35374__$1,temp__4126__auto__,my_id,clients,is_unintroduced_BANG__QMARK_))
,cljs.core.keys.call(null,clients))))))){
stream_of_redditness_cljs.opentok.introduce.call(null,session,thread_id,cljs.core.get.call(null,clients,client_id),client_id,stream_of_redditness_cljs$opentok$introduce_if_necessary);
} else {
}

var G__35386 = cljs.core.next.call(null,seq__35374__$1);
var G__35387 = null;
var G__35388 = (0);
var G__35389 = (0);
seq__35374 = G__35386;
chunk__35375 = G__35387;
count__35376 = G__35388;
i__35377 = G__35389;
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
stream_of_redditness_cljs.opentok.ensure_someone_is_introduced = (function stream_of_redditness_cljs$opentok$ensure_someone_is_introduced(session,thread_id){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"clients","clients",1436018090)], null))),cljs.core.count.call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null))))){
stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"my-id","my-id",1668580742)], null)));

session.signal({"type": "am-introduced"});

return stream_of_redditness_cljs.opentok.introduce_if_necessary.call(null,session,thread_id);
} else {
return null;
}
});
stream_of_redditness_cljs.opentok.set_opentok_callbacks = (function stream_of_redditness_cljs$opentok$set_opentok_callbacks(thread_id,session){
session.on("sessionConnected",(function (_){
cljs.core.println.call(null,[cljs.core.str("Session Connected: "),cljs.core.str(session.connection.connectionId)].join(''));

return stream_of_redditness_cljs.opentok.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"session","session",1008279103),session,new cljs.core.Keyword(null,"my-id","my-id",1668580742),session.connection.connectionId,new cljs.core.Keyword(null,"clients","clients",1436018090),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885),cljs.core.PersistentHashSet.EMPTY], null));
}));

session.on("sessionDisconnected",(function (_){
cljs.core.println.call(null,"Disconnected");

return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.opentok_sessions_atom,(function (p1__35390_SHARP_){
return cljs.core.dissoc.call(null,p1__35390_SHARP_,thread_id);
}));
}));

session.on("connectionCreated",(function (event){
var client = event.connection;
var client_id = client.connectionId;
var my_id = stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"my-id","my-id",1668580742)], null));
cljs.core.println.call(null,[cljs.core.str("Connection Created: "),cljs.core.str(client_id)].join(''));

if(cljs.core.truth_(stream_of_redditness_cljs.opentok.is_in_BANG__QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"clients","clients",1436018090)], null),my_id))){
if(cljs.core.truth_(stream_of_redditness_cljs.opentok.is_in_BANG__QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),my_id))){
session.signal({"type": "am-not-introduced"});
} else {
}

stream_of_redditness_cljs.opentok.add_to_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),client_id);
} else {
if(cljs.core._EQ_.call(null,client_id,my_id)){
stream_of_redditness_cljs.opentok.add_to_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),my_id);
} else {
}
}

stream_of_redditness_cljs.opentok.deep_merge_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"clients","clients",1436018090)], null),new cljs.core.PersistentArrayMap.fromArray([client_id,client], true, false));

stream_of_redditness_cljs.opentok.ensure_someone_is_introduced.call(null,session,thread_id);

return stream_of_redditness_cljs.opentok.introduce_if_necessary.call(null,session,thread_id);
}));

session.on("connectionDestroyed",(function (event){
var client_id = event.connection.connectionId;
cljs.core.println.call(null,[cljs.core.str("Connection Destroyed: "),cljs.core.str(client_id)].join(''));

stream_of_redditness_cljs.opentok.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"clients","clients",1436018090)], null),cljs.core.dissoc.call(null,stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"clients","clients",1436018090)], null),client_id)));

stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),client_id);

stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885)], null),client_id);

stream_of_redditness_cljs.opentok.ensure_someone_is_introduced.call(null,session,thread_id);

return stream_of_redditness_cljs.opentok.introduce_if_necessary.call(null,session,thread_id);
}));

session.on("signal:am-not-introduced",(function (event){
var client_id = event.from.id;
cljs.core.println.call(null,[cljs.core.str("Received not introduced: "),cljs.core.str(client_id)].join(''));

stream_of_redditness_cljs.opentok.add_to_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),client_id);

stream_of_redditness_cljs.opentok.ensure_someone_is_introduced.call(null,session,thread_id);

return stream_of_redditness_cljs.opentok.introduce_if_necessary.call(null,session,thread_id);
}));

session.on("signal:am-introduced",(function (event){
var client_id = event.from.id;
cljs.core.println.call(null,[cljs.core.str("Received am introduced: "),cljs.core.str(client_id)].join(''));

stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"should-be-introduced-clients","should-be-introduced-clients",2034603885)], null),client_id);

return stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),client_id);
}));

session.on("signal:introduction",(function (event){
return stream_of_redditness_cljs.active_threads.write_active_thread.call(null,thread_id,stream_of_redditness_cljs.util.deep_keys_to_keywords.call(null,cljs.core.js__GT_clj.call(null,event.data)));
}));

session.on("signal:introduction-complete",(function (_){
cljs.core.println.call(null,[cljs.core.str("I am fully introduced")].join(''));

stream_of_redditness_cljs.opentok.remove_from_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"unintroduced-clients","unintroduced-clients",-703070263)], null),stream_of_redditness_cljs.opentok.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"my-id","my-id",1668580742)], null)));

return session.signal({"type": "am-introduced"});
}));

return session.on("signal:comment-update",(function (event){
return stream_of_redditness_cljs.active_threads.write_active_thread.call(null,thread_id,stream_of_redditness_cljs.util.deep_keys_to_keywords.call(null,cljs.core.js__GT_clj.call(null,event.data)));
}));
});
stream_of_redditness_cljs.globals.socket.on("threadSession",(function (msg){
var vec__35391 = cljs.core.js__GT_clj.call(null,msg);
var thread_id_str = cljs.core.nth.call(null,vec__35391,(0),null);
var opentok_key = cljs.core.nth.call(null,vec__35391,(1),null);
var session_id = cljs.core.nth.call(null,vec__35391,(2),null);
var token = cljs.core.nth.call(null,vec__35391,(3),null);
var session = TB.initSession(session_id);
var thread_id = cljs.core.keyword.call(null,thread_id_str);
stream_of_redditness_cljs.opentok.set_opentok_callbacks.call(null,thread_id,session);

return session.connect(opentok_key,token);
}));

//# sourceMappingURL=opentok.js.map?rel=1433054963142