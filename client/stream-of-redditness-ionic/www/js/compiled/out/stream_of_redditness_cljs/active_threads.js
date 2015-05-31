// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.active_threads');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('stream_of_redditness_cljs.util');
goog.require('stream_of_redditness_cljs.globals');
stream_of_redditness_cljs.active_threads.deep_merge_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.deep_merge_in_BANG_,stream_of_redditness_cljs.globals.active_threads_atom);
stream_of_redditness_cljs.active_threads.write_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.write_in_BANG_,stream_of_redditness_cljs.globals.active_threads_atom);
stream_of_redditness_cljs.active_threads.get_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.get_in_BANG_,stream_of_redditness_cljs.globals.active_threads_atom);
stream_of_redditness_cljs.active_threads.write_active_thread = (function stream_of_redditness_cljs$active_threads$write_active_thread(thread_id,contents){
if(cljs.core.truth_(stream_of_redditness_cljs.active_threads.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),thread_id], null)))){
return stream_of_redditness_cljs.active_threads.deep_merge_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),thread_id], null),contents);
} else {
return null;
}
});
stream_of_redditness_cljs.active_threads.send_large_data = (function stream_of_redditness_cljs$active_threads$send_large_data(thread_id,type,contents){
var session = stream_of_redditness_cljs.util.get_in_BANG_.call(null,stream_of_redditness_cljs.globals.opentok_sessions_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id,new cljs.core.Keyword(null,"sesssion","sesssion",1935819232)], null));
if(cljs.core.truth_(session)){
var seq__35258 = cljs.core.seq.call(null,stream_of_redditness_cljs.util.chunkify_map.call(null,contents,(8000)));
var chunk__35259 = null;
var count__35260 = (0);
var i__35261 = (0);
while(true){
if((i__35261 < count__35260)){
var message = cljs.core._nth.call(null,chunk__35259,i__35261);
session.signal({"data": message, "to": stream_of_redditness_cljs.active_threads.client, "type": type});

var G__35262 = seq__35258;
var G__35263 = chunk__35259;
var G__35264 = count__35260;
var G__35265 = (i__35261 + (1));
seq__35258 = G__35262;
chunk__35259 = G__35263;
count__35260 = G__35264;
i__35261 = G__35265;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35258);
if(temp__4126__auto__){
var seq__35258__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35258__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__35258__$1);
var G__35266 = cljs.core.chunk_rest.call(null,seq__35258__$1);
var G__35267 = c__18901__auto__;
var G__35268 = cljs.core.count.call(null,c__18901__auto__);
var G__35269 = (0);
seq__35258 = G__35266;
chunk__35259 = G__35267;
count__35260 = G__35268;
i__35261 = G__35269;
continue;
} else {
var message = cljs.core.first.call(null,seq__35258__$1);
session.signal({"data": message, "to": stream_of_redditness_cljs.active_threads.client, "type": type});

var G__35270 = cljs.core.next.call(null,seq__35258__$1);
var G__35271 = null;
var G__35272 = (0);
var G__35273 = (0);
seq__35258 = G__35270;
chunk__35259 = G__35271;
count__35260 = G__35272;
i__35261 = G__35273;
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
stream_of_redditness_cljs.active_threads.write_and_send_active_thread = (function stream_of_redditness_cljs$active_threads$write_and_send_active_thread(thread_id,contents){
var thread_diff = stream_of_redditness_cljs.util.map_diff.call(null,stream_of_redditness_cljs.active_threads.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),thread_id], null)),contents);
if(cljs.core.truth_(stream_of_redditness_cljs.active_threads.write_active_thread.call(null,thread_id,thread_diff))){
return stream_of_redditness_cljs.active_threads.send_large_data.call(null,thread_id,"comment-update",thread_diff);
} else {
return null;
}
});
stream_of_redditness_cljs.active_threads.redditCommentData = (function stream_of_redditness_cljs$active_threads$redditCommentData(c){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flair-css","flair-css",-588591035),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"likes","likes",792554542),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"flair-text","flair-text",1091346291),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"gilded","gilded",-1876029513),new cljs.core.Keyword(null,"body","body",-2049205669)],[cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"author_flair_css_class"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"created_utc"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"likes"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"author"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"author_flair_text"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"score"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"saved"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"gilded"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"body")]);
});
stream_of_redditness_cljs.active_threads.partition2 = (function stream_of_redditness_cljs$active_threads$partition2(f,l){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,f,l),cljs.core.filter.call(null,(function (p1__35274_SHARP_){
return cljs.core.not.call(null,f.call(null,p1__35274_SHARP_));
}),l)], null);
});
stream_of_redditness_cljs.active_threads.moreCommentsJSONHandler = (function stream_of_redditness_cljs$active_threads$moreCommentsJSONHandler(threadIds,response){
return cljs.core.doall.call(null,stream_of_redditness_cljs.active_threads.write_and_send_active_thread.call(null,cljs.core.first.call(null,threadIds),cljs.core.first.call(null,threadIds).call(null,cljs.core.reduce.call(null,stream_of_redditness_cljs.util.deep_merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (jqueryArray){
return cljs.core.first.call(null,(function (p1__35275_SHARP_){
return cljs.core.reduce.call(null,(function (p__35278,listEntry){
var vec__35279 = p__35278;
var moreComments = cljs.core.nth.call(null,vec__35279,(0),null);
var paths = cljs.core.nth.call(null,vec__35279,(1),null);
var kind = cljs.core.get.call(null,listEntry,"kind");
var commentData = cljs.core.get.call(null,listEntry,"data");
var childs = clojure.string.join.call(null,",",cljs.core.get.call(null,commentData,"children"));
var parentId = cljs.core.keyword.call(null,((function (kind,commentData,childs,vec__35279,moreComments,paths){
return (function (pid){
return clojure.string.join.call(null,"",pid);
});})(kind,commentData,childs,vec__35279,moreComments,paths))
.call(null,((function (kind,commentData,childs,vec__35279,moreComments,paths){
return (function (pid){
return cljs.core.drop.call(null,(3),pid);
});})(kind,commentData,childs,vec__35279,moreComments,paths))
.call(null,cljs.core.get.call(null,commentData,"parent_id"))));
var commentId = cljs.core.keyword.call(null,cljs.core.get.call(null,commentData,"id"));
if(cljs.core._EQ_.call(null,kind,"more")){
cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,cljs.core.partial.call(null,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"thread-id","thread-id",895608538),cljs.core.first.call(null,threadIds),new cljs.core.Keyword(null,"request-fun","request-fun",310571999),((function (kind,commentData,childs,parentId,commentId,vec__35279,moreComments,paths){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/"),cljs.core.str("morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,threadIds))),cljs.core.str("&children="),cljs.core.str(childs),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs$active_threads$moreCommentsJSONHandler,parentId.call(null,paths))], null));
});})(kind,commentData,childs,parentId,commentId,vec__35279,moreComments,paths))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null)], null)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moreComments,paths], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream_of_redditness_cljs.util.deep_merge.call(null,moreComments,cljs.core.reduce.call(null,((function (kind,commentData,childs,parentId,commentId,vec__35279,moreComments,paths){
return (function (commentTree,pathEl){
return new cljs.core.PersistentArrayMap.fromArray([pathEl,commentTree], true, false);
});})(kind,commentData,childs,parentId,commentId,vec__35279,moreComments,paths))
,new cljs.core.PersistentArrayMap.fromArray([commentId,stream_of_redditness_cljs.util.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY], null),stream_of_redditness_cljs.active_threads.redditCommentData.call(null,listEntry))], true, false),cljs.core.reverse.call(null,parentId.call(null,paths)))),cljs.core.assoc.call(null,paths,commentId,cljs.core.concat.call(null,parentId.call(null,paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commentId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,threadIds))),threadIds], true, false)], null),p1__35275_SHARP_);
}).call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))));
}),cljs.core.filter.call(null,(function (jqueryArray){
return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))),"data");
}),cljs.core.get.call(null,response,"jquery")))))));
});
stream_of_redditness_cljs.active_threads.processCommentTree = (function stream_of_redditness_cljs$active_threads$processCommentTree(pathTo,commentTree){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),stream_of_redditness_cljs.util.deep_merge.call(null,stream_of_redditness_cljs.active_threads.redditCommentData.call(null,c),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),stream_of_redditness_cljs$active_threads$processCommentTree.call(null,cljs.core.concat.call(null,pathTo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"replies"))], null))], null);
}),(function (p__35287){
var vec__35288 = p__35287;
var t1 = cljs.core.nth.call(null,vec__35288,(0),null);
var more = cljs.core.nth.call(null,vec__35288,(1),null);
((function (vec__35288,t1,more){
return (function (p1__35284_SHARP_){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,cljs.core.partial.call(null,cljs.core.concat,p1__35284_SHARP_));
});})(vec__35288,t1,more))
.call(null,cljs.core.map.call(null,((function (vec__35288,t1,more){
return (function (moreData){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"thread-id","thread-id",895608538),cljs.core.first.call(null,pathTo),new cljs.core.Keyword(null,"request-fun","request-fun",310571999),((function (vec__35288,t1,more){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,pathTo))),cljs.core.str("&children="),cljs.core.str(((function (vec__35288,t1,more){
return (function (p1__35283_SHARP_){
return clojure.string.join.call(null,",",p1__35283_SHARP_);
});})(vec__35288,t1,more))
.call(null,cljs.core.get.call(null,cljs.core.get.call(null,moreData,"data"),"children"))),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.active_threads.moreCommentsJSONHandler,pathTo)], null));
});})(vec__35288,t1,more))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null);
});})(vec__35288,t1,more))
,more));

return t1;
}).call(null,stream_of_redditness_cljs.active_threads.partition2.call(null,(function (p1__35282_SHARP_){
return cljs.core._EQ_.call(null,"t1",cljs.core.get.call(null,p1__35282_SHARP_,"kind"));
}),(function (p1__35281_SHARP_){
return cljs.core.get.call(null,p1__35281_SHARP_,"children");
}).call(null,(function (p1__35280_SHARP_){
return cljs.core.get.call(null,p1__35280_SHARP_,"data");
}).call(null,commentTree))))));
});
stream_of_redditness_cljs.active_threads.newCommentsJSONHandler = (function stream_of_redditness_cljs$active_threads$newCommentsJSONHandler(threadId,response){
return stream_of_redditness_cljs.active_threads.write_and_send_active_thread.call(null,threadId,stream_of_redditness_cljs.util.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"receivedData","receivedData",-1935382841),true,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.js__GT_clj.call(null,response),(0)),"data"),"children"),(0)),"data"),"subreddit"),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.js__GT_clj.call(null,response),(0)),"data"),"children"),(0)),"data"),"title")], null),(function (comments){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),comments], null);
}).call(null,stream_of_redditness_cljs.active_threads.processCommentTree.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threadId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),(function (p1__35289_SHARP_){
return cljs.core.nth.call(null,p1__35289_SHARP_,(1));
}).call(null,cljs.core.js__GT_clj.call(null,response))))));
});
stream_of_redditness_cljs.active_threads.new_comments_poller = (function stream_of_redditness_cljs$active_threads$new_comments_poller(thread_id){
ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/comments/"),cljs.core.str(cljs.core.name.call(null,thread_id)),cljs.core.str(".json?sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.active_threads.newCommentsJSONHandler,thread_id)], null));

return window.setTimeout((function (){
return stream_of_redditness_cljs$active_threads$new_comments_poller.call(null,thread_id);
}),(31500));
});
stream_of_redditness_cljs.active_threads.set_active_threads = (function stream_of_redditness_cljs$active_threads$set_active_threads(thread_ids,colors){
return (function (grouped_threads){
var inactive_threads = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,grouped_threads,true));
var active_threads = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,grouped_threads,false));
var seq__35305_35315 = cljs.core.seq.call(null,cljs.core.keys.call(null,inactive_threads));
var chunk__35306_35316 = null;
var count__35307_35317 = (0);
var i__35308_35318 = (0);
while(true){
if((i__35308_35318 < count__35307_35317)){
var thread_id_35319 = cljs.core._nth.call(null,chunk__35306_35316,i__35308_35318);
stream_of_redditness_cljs.util.get_in_BANG_.call(null,stream_of_redditness_cljs.globals.opentok_sessions_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id_35319,new cljs.core.Keyword(null,"sesssion","sesssion",1935819232)], null)).disconnect();

var G__35320 = seq__35305_35315;
var G__35321 = chunk__35306_35316;
var G__35322 = count__35307_35317;
var G__35323 = (i__35308_35318 + (1));
seq__35305_35315 = G__35320;
chunk__35306_35316 = G__35321;
count__35307_35317 = G__35322;
i__35308_35318 = G__35323;
continue;
} else {
var temp__4126__auto___35324 = cljs.core.seq.call(null,seq__35305_35315);
if(temp__4126__auto___35324){
var seq__35305_35325__$1 = temp__4126__auto___35324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35305_35325__$1)){
var c__18901__auto___35326 = cljs.core.chunk_first.call(null,seq__35305_35325__$1);
var G__35327 = cljs.core.chunk_rest.call(null,seq__35305_35325__$1);
var G__35328 = c__18901__auto___35326;
var G__35329 = cljs.core.count.call(null,c__18901__auto___35326);
var G__35330 = (0);
seq__35305_35315 = G__35327;
chunk__35306_35316 = G__35328;
count__35307_35317 = G__35329;
i__35308_35318 = G__35330;
continue;
} else {
var thread_id_35331 = cljs.core.first.call(null,seq__35305_35325__$1);
stream_of_redditness_cljs.util.get_in_BANG_.call(null,stream_of_redditness_cljs.globals.opentok_sessions_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id_35331,new cljs.core.Keyword(null,"sesssion","sesssion",1935819232)], null)).disconnect();

var G__35332 = cljs.core.next.call(null,seq__35305_35325__$1);
var G__35333 = null;
var G__35334 = (0);
var G__35335 = (0);
seq__35305_35315 = G__35332;
chunk__35306_35316 = G__35333;
count__35307_35317 = G__35334;
i__35308_35318 = G__35335;
continue;
}
} else {
}
}
break;
}

var seq__35309_35336 = cljs.core.seq.call(null,cljs.core.keys.call(null,active_threads));
var chunk__35310_35337 = null;
var count__35311_35338 = (0);
var i__35312_35339 = (0);
while(true){
if((i__35312_35339 < count__35311_35338)){
var thread_id_35340 = cljs.core._nth.call(null,chunk__35310_35337,i__35312_35339);
if(cljs.core.not.call(null,stream_of_redditness_cljs.util.get_in_BANG_.call(null,stream_of_redditness_cljs.globals.opentok_sessions_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id_35340,new cljs.core.Keyword(null,"sesssion","sesssion",1935819232)], null)))){
stream_of_redditness_cljs.globals.socket.emit("joinThread",thread_id_35340);
} else {
}

var G__35341 = seq__35309_35336;
var G__35342 = chunk__35310_35337;
var G__35343 = count__35311_35338;
var G__35344 = (i__35312_35339 + (1));
seq__35309_35336 = G__35341;
chunk__35310_35337 = G__35342;
count__35311_35338 = G__35343;
i__35312_35339 = G__35344;
continue;
} else {
var temp__4126__auto___35345 = cljs.core.seq.call(null,seq__35309_35336);
if(temp__4126__auto___35345){
var seq__35309_35346__$1 = temp__4126__auto___35345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35309_35346__$1)){
var c__18901__auto___35347 = cljs.core.chunk_first.call(null,seq__35309_35346__$1);
var G__35348 = cljs.core.chunk_rest.call(null,seq__35309_35346__$1);
var G__35349 = c__18901__auto___35347;
var G__35350 = cljs.core.count.call(null,c__18901__auto___35347);
var G__35351 = (0);
seq__35309_35336 = G__35348;
chunk__35310_35337 = G__35349;
count__35311_35338 = G__35350;
i__35312_35339 = G__35351;
continue;
} else {
var thread_id_35352 = cljs.core.first.call(null,seq__35309_35346__$1);
if(cljs.core.not.call(null,stream_of_redditness_cljs.util.get_in_BANG_.call(null,stream_of_redditness_cljs.globals.opentok_sessions_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_id_35352,new cljs.core.Keyword(null,"sesssion","sesssion",1935819232)], null)))){
stream_of_redditness_cljs.globals.socket.emit("joinThread",thread_id_35352);
} else {
}

var G__35353 = cljs.core.next.call(null,seq__35309_35346__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__35309_35336 = G__35353;
chunk__35310_35337 = G__35354;
count__35311_35338 = G__35355;
i__35312_35339 = G__35356;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,((function (inactive_threads,active_threads){
return (function (p1__35293_SHARP_){
return stream_of_redditness_cljs.util.deep_remove_keys.call(null,p1__35293_SHARP_,cljs.core.keys.call(null,inactive_threads));
});})(inactive_threads,active_threads))
);

cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,cljs.core.partial.call(null,cljs.core.concat,cljs.core.map.call(null,((function (inactive_threads,active_threads){
return (function (p1__35294_SHARP_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"thread-id","thread-id",895608538),p1__35294_SHARP_,new cljs.core.Keyword(null,"request-fun","request-fun",310571999),((function (inactive_threads,active_threads){
return (function (){
return stream_of_redditness_cljs.active_threads.new_comments_poller.call(null,p1__35294_SHARP_);
});})(inactive_threads,active_threads))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new","new",-2085437848)], null);
});})(inactive_threads,active_threads))
,cljs.core.keys.call(null,active_threads))));

return stream_of_redditness_cljs.active_threads.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734)], null),active_threads);
}).call(null,cljs.core.group_by.call(null,(function (p__35313){
var vec__35314 = p__35313;
var thread_id = cljs.core.nth.call(null,vec__35314,(0),null);
var _ = cljs.core.nth.call(null,vec__35314,(1),null);
return cljs.core._EQ_.call(null,null,cljs.core.set.call(null,thread_ids).call(null,thread_id));
}),stream_of_redditness_cljs.util.deep_merge.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__35291_SHARP_,p2__35292_SHARP_){
return new cljs.core.PersistentArrayMap.fromArray([p1__35291_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),p2__35292_SHARP_], null)], true, false);
}),thread_ids,colors)),(function (p1__35290_SHARP_){
return stream_of_redditness_cljs.util.deep_merge.call(null,p1__35290_SHARP_,stream_of_redditness_cljs.active_threads.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734)], null)));
}).call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,(function (thread_id){
return new cljs.core.PersistentArrayMap.fromArray([thread_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"receivedData","receivedData",-1935382841),false,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),thread_id], null)], true, false);
}),thread_ids))))));
});
stream_of_redditness_cljs.active_threads.makeNextRequest = (function stream_of_redditness_cljs$active_threads$makeNextRequest(){
return (function (requests){
if(cljs.core.truth_(cljs.core.first.call(null,requests))){
new cljs.core.Keyword(null,"request-fun","request-fun",310571999).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,requests)).call(null);
} else {
}

return cljs.core.reset_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,cljs.core.rest.call(null,requests));
}).call(null,(function (p__35361){
var vec__35362 = p__35361;
var news = cljs.core.nth.call(null,vec__35362,(0),null);
var others = cljs.core.nth.call(null,vec__35362,(1),null);
return cljs.core.concat.call(null,cljs.core.vals.call(null,cljs.core.reduce.call(null,((function (vec__35362,news,others){
return (function (dict,threadDict){
return cljs.core.assoc.call(null,dict,new cljs.core.Keyword(null,"thread-id","thread-id",895608538).cljs$core$IFn$_invoke$arity$1(threadDict),threadDict);
});})(vec__35362,news,others))
,cljs.core.PersistentArrayMap.EMPTY,news)),others);
}).call(null,stream_of_redditness_cljs.active_threads.partition2.call(null,(function (p1__35358_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__35358_SHARP_));
}),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.filter.call(null,(function (p1__35357_SHARP_){
return new cljs.core.Keyword(null,"thread-id","thread-id",895608538).cljs$core$IFn$_invoke$arity$1(p1__35357_SHARP_).call(null,stream_of_redditness_cljs.active_threads.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734)], null)));
}),cljs.core.deref.call(null,stream_of_redditness_cljs.globals.request_queue_atom))))));
});
window.setInterval(stream_of_redditness_cljs.active_threads.makeNextRequest,(2200));

//# sourceMappingURL=active_threads.js.map?rel=1433054943269