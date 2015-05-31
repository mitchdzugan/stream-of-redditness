// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 * with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var req = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__21433 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__21438 = null;
var count__21439 = (0);
var i__21440 = (0);
while(true){
if((i__21440 < count__21439)){
var h_name = cljs.core._nth.call(null,chunk__21438,i__21440);
var seq__21441_21445 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__21442_21446 = null;
var count__21443_21447 = (0);
var i__21444_21448 = (0);
while(true){
if((i__21444_21448 < count__21443_21447)){
var h_val_21449 = cljs.core._nth.call(null,chunk__21442_21446,i__21444_21448);
xhr.headers.set(h_name,h_val_21449);

var G__21450 = seq__21441_21445;
var G__21451 = chunk__21442_21446;
var G__21452 = count__21443_21447;
var G__21453 = (i__21444_21448 + (1));
seq__21441_21445 = G__21450;
chunk__21442_21446 = G__21451;
count__21443_21447 = G__21452;
i__21444_21448 = G__21453;
continue;
} else {
var temp__4126__auto___21454 = cljs.core.seq.call(null,seq__21441_21445);
if(temp__4126__auto___21454){
var seq__21441_21455__$1 = temp__4126__auto___21454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21441_21455__$1)){
var c__18902__auto___21456 = cljs.core.chunk_first.call(null,seq__21441_21455__$1);
var G__21457 = cljs.core.chunk_rest.call(null,seq__21441_21455__$1);
var G__21458 = c__18902__auto___21456;
var G__21459 = cljs.core.count.call(null,c__18902__auto___21456);
var G__21460 = (0);
seq__21441_21445 = G__21457;
chunk__21442_21446 = G__21458;
count__21443_21447 = G__21459;
i__21444_21448 = G__21460;
continue;
} else {
var h_val_21461 = cljs.core.first.call(null,seq__21441_21455__$1);
xhr.headers.set(h_name,h_val_21461);

var G__21462 = cljs.core.next.call(null,seq__21441_21455__$1);
var G__21463 = null;
var G__21464 = (0);
var G__21465 = (0);
seq__21441_21445 = G__21462;
chunk__21442_21446 = G__21463;
count__21443_21447 = G__21464;
i__21444_21448 = G__21465;
continue;
}
} else {
}
}
break;
}

var G__21466 = seq__21433;
var G__21467 = chunk__21438;
var G__21468 = count__21439;
var G__21469 = (i__21440 + (1));
seq__21433 = G__21466;
chunk__21438 = G__21467;
count__21439 = G__21468;
i__21440 = G__21469;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21433);
if(temp__4126__auto__){
var seq__21433__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21433__$1)){
var c__18902__auto__ = cljs.core.chunk_first.call(null,seq__21433__$1);
var G__21470 = cljs.core.chunk_rest.call(null,seq__21433__$1);
var G__21471 = c__18902__auto__;
var G__21472 = cljs.core.count.call(null,c__18902__auto__);
var G__21473 = (0);
seq__21433 = G__21470;
chunk__21438 = G__21471;
count__21439 = G__21472;
i__21440 = G__21473;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__21433__$1);
var seq__21434_21474 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__21435_21475 = null;
var count__21436_21476 = (0);
var i__21437_21477 = (0);
while(true){
if((i__21437_21477 < count__21436_21476)){
var h_val_21478 = cljs.core._nth.call(null,chunk__21435_21475,i__21437_21477);
xhr.headers.set(h_name,h_val_21478);

var G__21479 = seq__21434_21474;
var G__21480 = chunk__21435_21475;
var G__21481 = count__21436_21476;
var G__21482 = (i__21437_21477 + (1));
seq__21434_21474 = G__21479;
chunk__21435_21475 = G__21480;
count__21436_21476 = G__21481;
i__21437_21477 = G__21482;
continue;
} else {
var temp__4126__auto___21483__$1 = cljs.core.seq.call(null,seq__21434_21474);
if(temp__4126__auto___21483__$1){
var seq__21434_21484__$1 = temp__4126__auto___21483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21434_21484__$1)){
var c__18902__auto___21485 = cljs.core.chunk_first.call(null,seq__21434_21484__$1);
var G__21486 = cljs.core.chunk_rest.call(null,seq__21434_21484__$1);
var G__21487 = c__18902__auto___21485;
var G__21488 = cljs.core.count.call(null,c__18902__auto___21485);
var G__21489 = (0);
seq__21434_21474 = G__21486;
chunk__21435_21475 = G__21487;
count__21436_21476 = G__21488;
i__21437_21477 = G__21489;
continue;
} else {
var h_val_21490 = cljs.core.first.call(null,seq__21434_21484__$1);
xhr.headers.set(h_name,h_val_21490);

var G__21491 = cljs.core.next.call(null,seq__21434_21484__$1);
var G__21492 = null;
var G__21493 = (0);
var G__21494 = (0);
seq__21434_21474 = G__21491;
chunk__21435_21475 = G__21492;
count__21436_21476 = G__21493;
i__21437_21477 = G__21494;
continue;
}
} else {
}
}
break;
}

var G__21495 = cljs.core.next.call(null,seq__21433__$1);
var G__21496 = null;
var G__21497 = (0);
var G__21498 = (0);
seq__21433 = G__21495;
chunk__21438 = G__21496;
count__21439 = G__21497;
i__21440 = G__21498;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__21499){
var map__21502 = p__21499;
var map__21502__$1 = ((cljs.core.seq_QMARK_.call(null,map__21502))?cljs.core.apply.call(null,cljs.core.hash_map,map__21502):map__21502);
var request = map__21502__$1;
var default_headers = cljs.core.get.call(null,map__21502__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21502__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__18116__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__21503 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__21503,default_headers);

G__21503.setTimeoutInterval(timeout);

G__21503.setWithCredentials(send_credentials);

return G__21503;
});
cljs_http.core.error_kw = (function (){var kebabize = (function (s){
return clojure.string.replace.call(null,clojure.string.lower_case.call(null,s),/_/,"-");
});
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,((function (kebabize){
return (function (p__21504){
var vec__21505 = p__21504;
var code_name = cljs.core.nth.call(null,vec__21505,(0),null);
var n = cljs.core.nth.call(null,vec__21505,(1),null);
if(cljs.core.integer_QMARK_.call(null,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.keyword.call(null,kebabize.call(null,code_name))], null);
} else {
return null;
}
});})(kebabize))
,cljs.core.js__GT_clj.call(null,goog.net.ErrorCode)));
})();
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__21506){
var map__21532 = p__21506;
var map__21532__$1 = ((cljs.core.seq_QMARK_.call(null,map__21532))?cljs.core.apply.call(null,cljs.core.hash_map,map__21532):map__21532);
var request = map__21532__$1;
var cancel = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__18116__auto__ = request_method;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__21090__auto___21557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21090__auto___21557,channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__21091__auto__ = (function (){var switch__21069__auto__ = ((function (c__21090__auto___21557,channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_21543){
var state_val_21544 = (state_21543[(1)]);
if((state_val_21544 === (5))){
var inst_21541 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21543__$1,inst_21541);
} else {
if((state_val_21544 === (4))){
var state_21543__$1 = state_21543;
var statearr_21545_21558 = state_21543__$1;
(statearr_21545_21558[(2)] = null);

(statearr_21545_21558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (3))){
var inst_21538 = xhr__$1.abort();
var state_21543__$1 = state_21543;
var statearr_21546_21559 = state_21543__$1;
(statearr_21546_21559[(2)] = inst_21538);

(statearr_21546_21559[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (2))){
var inst_21534 = (state_21543[(2)]);
var inst_21535 = xhr__$1.isComplete();
var inst_21536 = cljs.core.not.call(null,inst_21535);
var state_21543__$1 = (function (){var statearr_21547 = state_21543;
(statearr_21547[(7)] = inst_21534);

return statearr_21547;
})();
if(inst_21536){
var statearr_21548_21560 = state_21543__$1;
(statearr_21548_21560[(1)] = (3));

} else {
var statearr_21549_21561 = state_21543__$1;
(statearr_21549_21561[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (1))){
var state_21543__$1 = state_21543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21543__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__21090__auto___21557,channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__21069__auto__,c__21090__auto___21557,channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var cljs_http$core$xhr_$_state_machine__21070__auto__ = null;
var cljs_http$core$xhr_$_state_machine__21070__auto____0 = (function (){
var statearr_21553 = [null,null,null,null,null,null,null,null];
(statearr_21553[(0)] = cljs_http$core$xhr_$_state_machine__21070__auto__);

(statearr_21553[(1)] = (1));

return statearr_21553;
});
var cljs_http$core$xhr_$_state_machine__21070__auto____1 = (function (state_21543){
while(true){
var ret_value__21071__auto__ = (function (){try{while(true){
var result__21072__auto__ = switch__21069__auto__.call(null,state_21543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21072__auto__;
}
break;
}
}catch (e21554){if((e21554 instanceof Object)){
var ex__21073__auto__ = e21554;
var statearr_21555_21562 = state_21543;
(statearr_21555_21562[(5)] = ex__21073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21563 = state_21543;
state_21543 = G__21563;
continue;
} else {
return ret_value__21071__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__21070__auto__ = function(state_21543){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__21070__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__21070__auto____1.call(this,state_21543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__21070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__21070__auto____0;
cljs_http$core$xhr_$_state_machine__21070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__21070__auto____1;
return cljs_http$core$xhr_$_state_machine__21070__auto__;
})()
;})(switch__21069__auto__,c__21090__auto___21557,channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__21092__auto__ = (function (){var statearr_21556 = f__21091__auto__.call(null);
(statearr_21556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21090__auto___21557);

return statearr_21556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21092__auto__);
});})(c__21090__auto___21557,channel,request_url,method,headers__$1,xhr__$1,map__21532,map__21532__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__21564){
var map__21580 = p__21564;
var map__21580__$1 = ((cljs.core.seq_QMARK_.call(null,map__21580))?cljs.core.apply.call(null,cljs.core.hash_map,map__21580):map__21580);
var request = map__21580__$1;
var cancel = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var callback_name = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var timeout = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_21595 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_21595], null));

if(cljs.core.truth_(cancel)){
var c__21090__auto___21596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21090__auto___21596,req_21595,channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout){
return (function (){
var f__21091__auto__ = (function (){var switch__21069__auto__ = ((function (c__21090__auto___21596,req_21595,channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout){
return (function (state_21585){
var state_val_21586 = (state_21585[(1)]);
if((state_val_21586 === (2))){
var inst_21582 = (state_21585[(2)]);
var inst_21583 = jsonp__$1.cancel(req_21595);
var state_21585__$1 = (function (){var statearr_21587 = state_21585;
(statearr_21587[(7)] = inst_21582);

return statearr_21587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21585__$1,inst_21583);
} else {
if((state_val_21586 === (1))){
var state_21585__$1 = state_21585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21585__$1,(2),cancel);
} else {
return null;
}
}
});})(c__21090__auto___21596,req_21595,channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__21069__auto__,c__21090__auto___21596,req_21595,channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout){
return (function() {
var cljs_http$core$jsonp_$_state_machine__21070__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__21070__auto____0 = (function (){
var statearr_21591 = [null,null,null,null,null,null,null,null];
(statearr_21591[(0)] = cljs_http$core$jsonp_$_state_machine__21070__auto__);

(statearr_21591[(1)] = (1));

return statearr_21591;
});
var cljs_http$core$jsonp_$_state_machine__21070__auto____1 = (function (state_21585){
while(true){
var ret_value__21071__auto__ = (function (){try{while(true){
var result__21072__auto__ = switch__21069__auto__.call(null,state_21585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21072__auto__;
}
break;
}
}catch (e21592){if((e21592 instanceof Object)){
var ex__21073__auto__ = e21592;
var statearr_21593_21597 = state_21585;
(statearr_21593_21597[(5)] = ex__21073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21598 = state_21585;
state_21585 = G__21598;
continue;
} else {
return ret_value__21071__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__21070__auto__ = function(state_21585){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__21070__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__21070__auto____1.call(this,state_21585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__21070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__21070__auto____0;
cljs_http$core$jsonp_$_state_machine__21070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__21070__auto____1;
return cljs_http$core$jsonp_$_state_machine__21070__auto__;
})()
;})(switch__21069__auto__,c__21090__auto___21596,req_21595,channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout))
})();
var state__21092__auto__ = (function (){var statearr_21594 = f__21091__auto__.call(null);
(statearr_21594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21090__auto___21596);

return statearr_21594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21092__auto__);
});})(c__21090__auto___21596,req_21595,channel,jsonp__$1,map__21580,map__21580__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__21599){
var map__21601 = p__21599;
var map__21601__$1 = ((cljs.core.seq_QMARK_.call(null,map__21601))?cljs.core.apply.call(null,cljs.core.hash_map,map__21601):map__21601);
var request__$1 = map__21601__$1;
var request_method = cljs.core.get.call(null,map__21601__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1432649245257