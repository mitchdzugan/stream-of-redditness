// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.views');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('stream_of_redditness_cljs.globals');
goog.require('stream_of_redditness_cljs.util');
goog.require('stream_of_redditness_cljs.auth');
goog.require('clojure.string');
goog.require('om.core');
stream_of_redditness_cljs.views.deep_merge_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.deep_merge_in_BANG_,stream_of_redditness_cljs.globals.active_threads_atom);
stream_of_redditness_cljs.views.write_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.write_in_BANG_,stream_of_redditness_cljs.globals.active_threads_atom);
stream_of_redditness_cljs.views.get_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.get_in_BANG_,stream_of_redditness_cljs.globals.active_threads_atom);
stream_of_redditness_cljs.views.authButtonView = (function stream_of_redditness_cljs$views$authButtonView(){
return om.core.root.call(null,(function (data,owner){
var storedAuths = stream_of_redditness_cljs.auth.users.call(null);
if(((0) < cljs.core.count.call(null,storedAuths))){
if(typeof stream_of_redditness_cljs.views.t35400 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.views.t35400 = (function (storedAuths,owner,data,authButtonView,meta35401){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButtonView = authButtonView;
this.meta35401 = meta35401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.views.t35400.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.views.t35400.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (this__22051__auto__){
var self__ = this;
var this__22051__auto____$1 = this;
return React.DOM.div(null,React.DOM.span({"className": "myspan"},"Logged in as: "),React.DOM.button({"onClick": stream_of_redditness_cljs.auth.onAuthSwitchClick, "className": "button button-light"},React.DOM.a(null,stream_of_redditness_cljs.auth.active_user.call(null))));
});})(storedAuths))
;

stream_of_redditness_cljs.views.t35400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_35402){
var self__ = this;
var _35402__$1 = this;
return self__.meta35401;
});})(storedAuths))
;

stream_of_redditness_cljs.views.t35400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_35402,meta35401__$1){
var self__ = this;
var _35402__$1 = this;
return (new stream_of_redditness_cljs.views.t35400(self__.storedAuths,self__.owner,self__.data,self__.authButtonView,meta35401__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.views.t35400.cljs$lang$type = true;

stream_of_redditness_cljs.views.t35400.cljs$lang$ctorStr = "stream-of-redditness-cljs.views/t35400";

stream_of_redditness_cljs.views.t35400.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.views/t35400");
});})(storedAuths))
;

stream_of_redditness_cljs.views.__GT_t35400 = ((function (storedAuths){
return (function stream_of_redditness_cljs$views$authButtonView_$___GT_t35400(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta35401){
return (new stream_of_redditness_cljs.views.t35400(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta35401));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.views.t35400(storedAuths,owner,data,stream_of_redditness_cljs$views$authButtonView,null));
} else {
if(typeof stream_of_redditness_cljs.views.t35403 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.views.t35403 = (function (storedAuths,owner,data,authButtonView,meta35404){
this.storedAuths = storedAuths;
this.owner = owner;
this.data = data;
this.authButtonView = authButtonView;
this.meta35404 = meta35404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.views.t35403.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.views.t35403.prototype.om$core$IRender$render$arity$1 = ((function (storedAuths){
return (function (this__22051__auto__){
var self__ = this;
var this__22051__auto____$1 = this;
return React.DOM.button({"onClick": stream_of_redditness_cljs.auth.onAuthNewClick, "className": "button button-light"},"Authorize An Account");
});})(storedAuths))
;

stream_of_redditness_cljs.views.t35403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (storedAuths){
return (function (_35405){
var self__ = this;
var _35405__$1 = this;
return self__.meta35404;
});})(storedAuths))
;

stream_of_redditness_cljs.views.t35403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (storedAuths){
return (function (_35405,meta35404__$1){
var self__ = this;
var _35405__$1 = this;
return (new stream_of_redditness_cljs.views.t35403(self__.storedAuths,self__.owner,self__.data,self__.authButtonView,meta35404__$1));
});})(storedAuths))
;

stream_of_redditness_cljs.views.t35403.cljs$lang$type = true;

stream_of_redditness_cljs.views.t35403.cljs$lang$ctorStr = "stream-of-redditness-cljs.views/t35403";

stream_of_redditness_cljs.views.t35403.cljs$lang$ctorPrWriter = ((function (storedAuths){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.views/t35403");
});})(storedAuths))
;

stream_of_redditness_cljs.views.__GT_t35403 = ((function (storedAuths){
return (function stream_of_redditness_cljs$views$authButtonView_$___GT_t35403(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta35404){
return (new stream_of_redditness_cljs.views.t35403(storedAuths__$1,owner__$1,data__$1,authButtonView__$1,meta35404));
});})(storedAuths))
;

}

return (new stream_of_redditness_cljs.views.t35403(storedAuths,owner,data,stream_of_redditness_cljs$views$authButtonView,null));
}
}),stream_of_redditness_cljs.globals.auth_atom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("AuthButton")], null));
});
goog.exportSymbol('stream_of_redditness_cljs.views.authButtonView', stream_of_redditness_cljs.views.authButtonView);
stream_of_redditness_cljs.views.onMouse = (function stream_of_redditness_cljs$views$onMouse(id){
return (function (e){
stream_of_redditness_cljs.views.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069)], null),id);

return e.stopPropagation();
});
});
stream_of_redditness_cljs.views.myPost = (function stream_of_redditness_cljs$views$myPost(uri,params){
return stream_of_redditness_cljs.globals.socket.emit("post",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),[cljs.core.str("bearer "),cljs.core.str(stream_of_redditness_cljs.auth.active_access_token.call(null))].join('')], null)], null)));
});
stream_of_redditness_cljs.views.render_comment = (function stream_of_redditness_cljs$views$render_comment(color,cpath,base_comment){
var buttonAtts = (function (onc){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"col button button-small button-clear commentButtonSet",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onc,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),whiteOrBlack(color),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color,new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"7px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null));
});
return cljs.core.apply.call(null,om.dom.div,{"onClick": stream_of_redditness_cljs.views.onMouse.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_comment)), "className": "item"},new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"0px"], null)], null)),[cljs.core.str(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(base_comment)),cljs.core.str(" * ["),cljs.core.str(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(base_comment)),cljs.core.str("] @ "),cljs.core.str(moment.unix(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(base_comment)).fromNow())].join('')),React.DOM.div({"className": "row commentbox"},React.DOM.div({"id": "updownvotecontainer", "className": "col col-center voting"},React.DOM.i({"className": "icon ion-arrow-up-b"}),React.DOM.br(null),React.DOM.i({"className": "icon ion-arrow-down-b"}),React.DOM.br(null)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": marked(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(base_comment))}, "className": "col col-center commentcontent"})),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_comment),stream_of_redditness_cljs.views.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069)], null))))?React.DOM.div({"style": {"marginBottom": "10px;"}, "className": "row"},React.DOM.div(buttonAtts.call(null,((function (buttonAtts){
return (function (p1__35406_SHARP_){
return p1__35406_SHARP_.call(null);
});})(buttonAtts))
),"reply"),React.DOM.div(buttonAtts.call(null,((function (buttonAtts){
return (function (e){
return stream_of_redditness_cljs.views.myPost.call(null,"https://oauth.reddit.com/api/save",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("t1_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_comment))].join('')], null));
});})(buttonAtts))
),"save"),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(base_comment),stream_of_redditness_cljs.auth.active_user.call(null)))?React.DOM.div(buttonAtts.call(null,((function (buttonAtts){
return (function (p1__35407_SHARP_){
return p1__35407_SHARP_.call(null);
});})(buttonAtts))
),"edit"):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(base_comment),stream_of_redditness_cljs.auth.active_user.call(null)))?React.DOM.div(buttonAtts.call(null,((function (buttonAtts){
return (function (p1__35408_SHARP_){
return p1__35408_SHARP_.call(null);
});})(buttonAtts))
),"delete"):null)):null),cljs.core.apply.call(null,om.dom.div,{"className": "list"},cljs.core.map.call(null,cljs.core.partial.call(null,stream_of_redditness_cljs$views$render_comment,color,cljs.core.concat.call(null,cpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_comment)], null))),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.vals.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(base_comment))))))], null));
});
stream_of_redditness_cljs.views.render_base_comment = (function stream_of_redditness_cljs$views$render_base_comment(base_comment){
return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(base_comment),new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"15px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"15px"], null)], null)),stream_of_redditness_cljs.views.render_comment.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(base_comment),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threadOwnerId","threadOwnerId",-960194299).cljs$core$IFn$_invoke$arity$1(base_comment),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_comment)], null),base_comment));
});
stream_of_redditness_cljs.views.render_threads = (function stream_of_redditness_cljs$views$render_threads(threads){
return cljs.core.map.call(null,stream_of_redditness_cljs.views.render_base_comment,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.vals.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,stream_of_redditness_cljs.util.deep_merge,cljs.core.map.call(null,(function (p1__35409_SHARP_){
return cljs.core.reduce.call(null,(function (t,k){
return stream_of_redditness_cljs.util.deep_merge.call(null,t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentArrayMap.fromArray([k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1__35409_SHARP_),new cljs.core.Keyword(null,"thread-owner-id","thread-owner-id",1202064350),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35409_SHARP_)], null)], true, false)], null));
}),p1__35409_SHARP_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(p1__35409_SHARP_)));
}),cljs.core.vals.call(null,threads))))))));
});
stream_of_redditness_cljs.views.stream_view = (function stream_of_redditness_cljs$views$stream_view(){
return om.core.root.call(null,(function (active_threads,owner){
if(typeof stream_of_redditness_cljs.views.t35417 !== 'undefined'){
} else {

/**
* @constructor
*/
stream_of_redditness_cljs.views.t35417 = (function (owner,active_threads,stream_view,meta35418){
this.owner = owner;
this.active_threads = active_threads;
this.stream_view = stream_view;
this.meta35418 = meta35418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stream_of_redditness_cljs.views.t35417.prototype.om$core$IRender$ = true;

stream_of_redditness_cljs.views.t35417.prototype.om$core$IRender$render$arity$1 = (function (this__22051__auto__){
var self__ = this;
var this__22051__auto____$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"style": {"padding": "0px", "paddingBottom": "28px"}, "className": "row", "id": "threadsReplyBox"},cljs.core.map.call(null,((function (this__22051__auto____$1){
return (function (p__35420){
var vec__35421 = p__35420;
var id = cljs.core.nth.call(null,vec__35421,(0),null);
var data = cljs.core.nth.call(null,vec__35421,(1),null);
return React.DOM.div({"style": {"padding": "8px", "paddingBottom": "0px", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data)}, "className": "col"},React.DOM.div({"style": {"backgroundColor": "#fff"}, "className": "item"},React.DOM.span(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)),React.DOM.p(null,[cljs.core.str("/r/"),cljs.core.str(new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(data))].join(''))),React.DOM.div({"style": {"color": whiteOrBlack(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data)), "marginTop": "9px"}, "className": "button button-block button-clear button-small"},"Add Reply"));
});})(this__22051__auto____$1))
,cljs.core.filter.call(null,((function (this__22051__auto____$1){
return (function (p__35422){
var vec__35423 = p__35422;
var id = cljs.core.nth.call(null,vec__35423,(0),null);
var data = cljs.core.nth.call(null,vec__35423,(1),null);
return new cljs.core.Keyword(null,"receivedData","receivedData",-1935382841).cljs$core$IFn$_invoke$arity$1(data);
});})(this__22051__auto____$1))
,new cljs.core.Keyword(null,"threads","threads",-1717798734).cljs$core$IFn$_invoke$arity$1(self__.active_threads)))),cljs.core.apply.call(null,om.dom.div,{"className": "list item-text-wrap"},stream_of_redditness_cljs.views.render_threads.call(null,new cljs.core.Keyword(null,"threads","threads",-1717798734).cljs$core$IFn$_invoke$arity$1(self__.active_threads))));
});

stream_of_redditness_cljs.views.t35417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35419){
var self__ = this;
var _35419__$1 = this;
return self__.meta35418;
});

stream_of_redditness_cljs.views.t35417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35419,meta35418__$1){
var self__ = this;
var _35419__$1 = this;
return (new stream_of_redditness_cljs.views.t35417(self__.owner,self__.active_threads,self__.stream_view,meta35418__$1));
});

stream_of_redditness_cljs.views.t35417.cljs$lang$type = true;

stream_of_redditness_cljs.views.t35417.cljs$lang$ctorStr = "stream-of-redditness-cljs.views/t35417";

stream_of_redditness_cljs.views.t35417.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"stream-of-redditness-cljs.views/t35417");
});

stream_of_redditness_cljs.views.__GT_t35417 = (function stream_of_redditness_cljs$views$stream_view_$___GT_t35417(owner__$1,active_threads__$1,stream_view__$1,meta35418){
return (new stream_of_redditness_cljs.views.t35417(owner__$1,active_threads__$1,stream_view__$1,meta35418));
});

}

return (new stream_of_redditness_cljs.views.t35417(owner,active_threads,stream_of_redditness_cljs$views$stream_view,null));
}),stream_of_redditness_cljs.globals.active_threads_atom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("StreamContainer")], null));
});

//# sourceMappingURL=views.js.map?rel=1433054982712