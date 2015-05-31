// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.poll_reddit');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('stream_of_redditness_cljs.util');
goog.require('stream_of_redditness_cljs.globals');
stream_of_redditness_cljs.poll_reddit.redditCommentData = (function stream_of_redditness_cljs$poll_reddit$redditCommentData(c){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flair-css","flair-css",-588591035),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"likes","likes",792554542),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"flair-text","flair-text",1091346291),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"gilded","gilded",-1876029513),new cljs.core.Keyword(null,"body","body",-2049205669)],[cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"author_flair_css_class"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"created_utc"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"likes"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"author"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"author_flair_text"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"score"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"saved"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"gilded"),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"body")]);
});
stream_of_redditness_cljs.poll_reddit.partition2 = (function stream_of_redditness_cljs$poll_reddit$partition2(f,l){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,f,l),cljs.core.filter.call(null,(function (p1__26166_SHARP_){
return cljs.core.not.call(null,f.call(null,p1__26166_SHARP_));
}),l)], null);
});
stream_of_redditness_cljs.poll_reddit.moreCommentsJSONHandler = (function stream_of_redditness_cljs$poll_reddit$moreCommentsJSONHandler(threadIds,response){
return cljs.core.doall.call(null,stream_of_redditness_cljs.poll_reddit.write_and_send_active_thread.call(null,cljs.core.first.call(null,threadIds),cljs.core.first.call(null,threadIds).call(null,cljs.core.reduce.call(null,stream_of_redditness_cljs.util.deep_merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (jqueryArray){
return cljs.core.first.call(null,(function (p1__26167_SHARP_){
return cljs.core.reduce.call(null,(function (p__26170,listEntry){
var vec__26171 = p__26170;
var moreComments = cljs.core.nth.call(null,vec__26171,(0),null);
var paths = cljs.core.nth.call(null,vec__26171,(1),null);
var kind = cljs.core.get.call(null,listEntry,"kind");
var commentData = cljs.core.get.call(null,listEntry,"data");
var childs = clojure.string.join.call(null,",",cljs.core.get.call(null,commentData,"children"));
var parentId = cljs.core.keyword.call(null,((function (kind,commentData,childs,vec__26171,moreComments,paths){
return (function (pid){
return clojure.string.join.call(null,"",pid);
});})(kind,commentData,childs,vec__26171,moreComments,paths))
.call(null,((function (kind,commentData,childs,vec__26171,moreComments,paths){
return (function (pid){
return cljs.core.drop.call(null,(3),pid);
});})(kind,commentData,childs,vec__26171,moreComments,paths))
.call(null,cljs.core.get.call(null,commentData,"parent_id"))));
var commentId = cljs.core.keyword.call(null,cljs.core.get.call(null,commentData,"id"));
if(cljs.core._EQ_.call(null,kind,"more")){
cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,cljs.core.partial.call(null,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"thread-id","thread-id",895608538),cljs.core.first.call(null,threadIds),new cljs.core.Keyword(null,"request-fun","request-fun",310571999),((function (kind,commentData,childs,parentId,commentId,vec__26171,moreComments,paths){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/"),cljs.core.str("morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,threadIds))),cljs.core.str("&children="),cljs.core.str(childs),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs$poll_reddit$moreCommentsJSONHandler,parentId.call(null,paths))], null));
});})(kind,commentData,childs,parentId,commentId,vec__26171,moreComments,paths))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null)], null)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moreComments,paths], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream_of_redditness_cljs.util.deep_merge.call(null,moreComments,cljs.core.reduce.call(null,((function (kind,commentData,childs,parentId,commentId,vec__26171,moreComments,paths){
return (function (commentTree,pathEl){
return new cljs.core.PersistentArrayMap.fromArray([pathEl,commentTree], true, false);
});})(kind,commentData,childs,parentId,commentId,vec__26171,moreComments,paths))
,new cljs.core.PersistentArrayMap.fromArray([commentId,stream_of_redditness_cljs.util.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentArrayMap.EMPTY], null),stream_of_redditness_cljs.poll_reddit.redditCommentData.call(null,listEntry))], true, false),cljs.core.reverse.call(null,parentId.call(null,paths)))),cljs.core.assoc.call(null,paths,commentId,cljs.core.concat.call(null,parentId.call(null,paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commentId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,threadIds))),threadIds], true, false)], null),p1__26167_SHARP_);
}).call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))));
}),cljs.core.filter.call(null,(function (jqueryArray){
return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,jqueryArray,(3)))),"data");
}),cljs.core.get.call(null,response,"jquery")))))));
});
stream_of_redditness_cljs.poll_reddit.processCommentTree = (function stream_of_redditness_cljs$poll_reddit$processCommentTree(pathTo,commentTree){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),stream_of_redditness_cljs.util.deep_merge.call(null,stream_of_redditness_cljs.poll_reddit.redditCommentData.call(null,c),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),stream_of_redditness_cljs$poll_reddit$processCommentTree.call(null,cljs.core.concat.call(null,pathTo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"id")),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)),cljs.core.get.call(null,cljs.core.get.call(null,c,"data"),"replies"))], null))], null);
}),(function (p__26179){
var vec__26180 = p__26179;
var t1 = cljs.core.nth.call(null,vec__26180,(0),null);
var more = cljs.core.nth.call(null,vec__26180,(1),null);
((function (vec__26180,t1,more){
return (function (p1__26176_SHARP_){
return cljs.core.swap_BANG_.call(null,stream_of_redditness_cljs.globals.request_queue_atom,cljs.core.partial.call(null,cljs.core.concat,p1__26176_SHARP_));
});})(vec__26180,t1,more))
.call(null,cljs.core.map.call(null,((function (vec__26180,t1,more){
return (function (moreData){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"threadId","threadId",-440699805),cljs.core.first.call(null,pathTo),new cljs.core.Keyword(null,"requestFun","requestFun",1837053695),((function (vec__26180,t1,more){
return (function (){
return ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/api/morechildren?link_id=t3_"),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,pathTo))),cljs.core.str("&children="),cljs.core.str(((function (vec__26180,t1,more){
return (function (p1__26175_SHARP_){
return clojure.string.join.call(null,",",p1__26175_SHARP_);
});})(vec__26180,t1,more))
.call(null,cljs.core.get.call(null,cljs.core.get.call(null,moreData,"data"),"children"))),cljs.core.str("&sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.poll_reddit.moreCommentsJSONHandler,pathTo)], null));
});})(vec__26180,t1,more))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"more","more",-2058821800)], null);
});})(vec__26180,t1,more))
,more));

return t1;
}).call(null,stream_of_redditness_cljs.poll_reddit.partition2.call(null,(function (p1__26174_SHARP_){
return cljs.core._EQ_.call(null,"t1",cljs.core.get.call(null,p1__26174_SHARP_,"kind"));
}),(function (p1__26173_SHARP_){
return cljs.core.get.call(null,p1__26173_SHARP_,"children");
}).call(null,(function (p1__26172_SHARP_){
return cljs.core.get.call(null,p1__26172_SHARP_,"data");
}).call(null,commentTree))))));
});
stream_of_redditness_cljs.poll_reddit.newCommentsJSONHandler = (function stream_of_redditness_cljs$poll_reddit$newCommentsJSONHandler(threadId,response){
return stream_of_redditness_cljs.poll_reddit.write_and_send_active_thread.call(null,threadId,stream_of_redditness_cljs.util.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"receivedData","receivedData",-1935382841),true,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.js__GT_clj.call(null,response),(0)),"data"),"children"),(0)),"data"),"subreddit"),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,cljs.core.js__GT_clj.call(null,response),(0)),"data"),"children"),(0)),"data"),"title")], null),(function (comments){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),comments], null);
}).call(null,stream_of_redditness_cljs.poll_reddit.processCommentTree.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threadId,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),(function (p1__26181_SHARP_){
return cljs.core.nth.call(null,p1__26181_SHARP_,(1));
}).call(null,cljs.core.js__GT_clj.call(null,response))))));
});
stream_of_redditness_cljs.poll_reddit.new_comments_poller = (function stream_of_redditness_cljs$poll_reddit$new_comments_poller(thread_id){
ajax.core.GET.call(null,[cljs.core.str("https://api.reddit.com/comments/"),cljs.core.str(cljs.core.name.call(null,thread_id)),cljs.core.str(".json?sort=new")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,stream_of_redditness_cljs.poll_reddit.newCommentsJSONHandler,thread_id)], null));

return window.setTimeout((function (){
return stream_of_redditness_cljs$poll_reddit$new_comments_poller.call(null,thread_id);
}),(31500));
});

//# sourceMappingURL=poll_reddit.js.map?rel=1433039033611