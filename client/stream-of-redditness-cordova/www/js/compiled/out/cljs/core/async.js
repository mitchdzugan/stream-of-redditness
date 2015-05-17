// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28583 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28583 = (function (f,fn_handler,meta28584){
this.f = f;
this.fn_handler = fn_handler;
this.meta28584 = meta28584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28583.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28585){
var self__ = this;
var _28585__$1 = this;
return self__.meta28584;
});

cljs.core.async.t28583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28585,meta28584__$1){
var self__ = this;
var _28585__$1 = this;
return (new cljs.core.async.t28583(self__.f,self__.fn_handler,meta28584__$1));
});

cljs.core.async.t28583.cljs$lang$type = true;

cljs.core.async.t28583.cljs$lang$ctorStr = "cljs.core.async/t28583";

cljs.core.async.t28583.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28583");
});

cljs.core.async.__GT_t28583 = (function cljs$core$async$fn_handler_$___GT_t28583(f__$1,fn_handler__$1,meta28584){
return (new cljs.core.async.t28583(f__$1,fn_handler__$1,meta28584));
});

}

return (new cljs.core.async.t28583(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28587 = buff;
if(G__28587){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__28587.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28587.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28587);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28587);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28589 = arguments.length;
switch (G__28589) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28592 = arguments.length;
switch (G__28592) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28594 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28594);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28594,ret){
return (function (){
return fn1.call(null,val_28594);
});})(val_28594,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28596 = arguments.length;
switch (G__28596) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19001__auto___28598 = n;
var x_28599 = (0);
while(true){
if((x_28599 < n__19001__auto___28598)){
(a[x_28599] = (0));

var G__28600 = (x_28599 + (1));
x_28599 = G__28600;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28601 = (i + (1));
i = G__28601;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28605 = (function (flag,alt_flag,meta28606){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28606 = meta28606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28607){
var self__ = this;
var _28607__$1 = this;
return self__.meta28606;
});})(flag))
;

cljs.core.async.t28605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28607,meta28606__$1){
var self__ = this;
var _28607__$1 = this;
return (new cljs.core.async.t28605(self__.flag,self__.alt_flag,meta28606__$1));
});})(flag))
;

cljs.core.async.t28605.cljs$lang$type = true;

cljs.core.async.t28605.cljs$lang$ctorStr = "cljs.core.async/t28605";

cljs.core.async.t28605.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28605");
});})(flag))
;

cljs.core.async.__GT_t28605 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28605(flag__$1,alt_flag__$1,meta28606){
return (new cljs.core.async.t28605(flag__$1,alt_flag__$1,meta28606));
});})(flag))
;

}

return (new cljs.core.async.t28605(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28611 = (function (cb,flag,alt_handler,meta28612){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28612 = meta28612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28611.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28613){
var self__ = this;
var _28613__$1 = this;
return self__.meta28612;
});

cljs.core.async.t28611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28613,meta28612__$1){
var self__ = this;
var _28613__$1 = this;
return (new cljs.core.async.t28611(self__.cb,self__.flag,self__.alt_handler,meta28612__$1));
});

cljs.core.async.t28611.cljs$lang$type = true;

cljs.core.async.t28611.cljs$lang$ctorStr = "cljs.core.async/t28611";

cljs.core.async.t28611.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28611");
});

cljs.core.async.__GT_t28611 = (function cljs$core$async$alt_handler_$___GT_t28611(cb__$1,flag__$1,alt_handler__$1,meta28612){
return (new cljs.core.async.t28611(cb__$1,flag__$1,alt_handler__$1,meta28612));
});

}

return (new cljs.core.async.t28611(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28614_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28614_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28615_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18116__auto__ = wport;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28616 = (i + (1));
i = G__28616;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18116__auto__ = ret;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18104__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18104__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19156__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19156__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28619){
var map__28620 = p__28619;
var map__28620__$1 = ((cljs.core.seq_QMARK_.call(null,map__28620))?cljs.core.apply.call(null,cljs.core.hash_map,map__28620):map__28620);
var opts = map__28620__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28617){
var G__28618 = cljs.core.first.call(null,seq28617);
var seq28617__$1 = cljs.core.next.call(null,seq28617);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28618,seq28617__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28622 = arguments.length;
switch (G__28622) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23258__auto___28671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___28671){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___28671){
return (function (state_28646){
var state_val_28647 = (state_28646[(1)]);
if((state_val_28647 === (7))){
var inst_28642 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28648_28672 = state_28646__$1;
(statearr_28648_28672[(2)] = inst_28642);

(statearr_28648_28672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (1))){
var state_28646__$1 = state_28646;
var statearr_28649_28673 = state_28646__$1;
(statearr_28649_28673[(2)] = null);

(statearr_28649_28673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (4))){
var inst_28625 = (state_28646[(7)]);
var inst_28625__$1 = (state_28646[(2)]);
var inst_28626 = (inst_28625__$1 == null);
var state_28646__$1 = (function (){var statearr_28650 = state_28646;
(statearr_28650[(7)] = inst_28625__$1);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28626)){
var statearr_28651_28674 = state_28646__$1;
(statearr_28651_28674[(1)] = (5));

} else {
var statearr_28652_28675 = state_28646__$1;
(statearr_28652_28675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (13))){
var state_28646__$1 = state_28646;
var statearr_28653_28676 = state_28646__$1;
(statearr_28653_28676[(2)] = null);

(statearr_28653_28676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (6))){
var inst_28625 = (state_28646[(7)]);
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28646__$1,(11),to,inst_28625);
} else {
if((state_val_28647 === (3))){
var inst_28644 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28646__$1,inst_28644);
} else {
if((state_val_28647 === (12))){
var state_28646__$1 = state_28646;
var statearr_28654_28677 = state_28646__$1;
(statearr_28654_28677[(2)] = null);

(statearr_28654_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (2))){
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28646__$1,(4),from);
} else {
if((state_val_28647 === (11))){
var inst_28635 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28635)){
var statearr_28655_28678 = state_28646__$1;
(statearr_28655_28678[(1)] = (12));

} else {
var statearr_28656_28679 = state_28646__$1;
(statearr_28656_28679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (9))){
var state_28646__$1 = state_28646;
var statearr_28657_28680 = state_28646__$1;
(statearr_28657_28680[(2)] = null);

(statearr_28657_28680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (5))){
var state_28646__$1 = state_28646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28658_28681 = state_28646__$1;
(statearr_28658_28681[(1)] = (8));

} else {
var statearr_28659_28682 = state_28646__$1;
(statearr_28659_28682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (14))){
var inst_28640 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28660_28683 = state_28646__$1;
(statearr_28660_28683[(2)] = inst_28640);

(statearr_28660_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (10))){
var inst_28632 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28661_28684 = state_28646__$1;
(statearr_28661_28684[(2)] = inst_28632);

(statearr_28661_28684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (8))){
var inst_28629 = cljs.core.async.close_BANG_.call(null,to);
var state_28646__$1 = state_28646;
var statearr_28662_28685 = state_28646__$1;
(statearr_28662_28685[(2)] = inst_28629);

(statearr_28662_28685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___28671))
;
return ((function (switch__23196__auto__,c__23258__auto___28671){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_28666 = [null,null,null,null,null,null,null,null];
(statearr_28666[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_28666[(1)] = (1));

return statearr_28666;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_28646){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28667){if((e28667 instanceof Object)){
var ex__23200__auto__ = e28667;
var statearr_28668_28686 = state_28646;
(statearr_28668_28686[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28687 = state_28646;
state_28646 = G__28687;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_28646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_28646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___28671))
})();
var state__23260__auto__ = (function (){var statearr_28669 = f__23259__auto__.call(null);
(statearr_28669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___28671);

return statearr_28669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___28671))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28871){
var vec__28872 = p__28871;
var v = cljs.core.nth.call(null,vec__28872,(0),null);
var p = cljs.core.nth.call(null,vec__28872,(1),null);
var job = vec__28872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23258__auto___29054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___29054,res,vec__28872,v,p,job,jobs,results){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___29054,res,vec__28872,v,p,job,jobs,results){
return (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (2))){
var inst_28874 = (state_28877[(2)]);
var inst_28875 = cljs.core.async.close_BANG_.call(null,res);
var state_28877__$1 = (function (){var statearr_28879 = state_28877;
(statearr_28879[(7)] = inst_28874);

return statearr_28879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28877__$1,inst_28875);
} else {
if((state_val_28878 === (1))){
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28877__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23258__auto___29054,res,vec__28872,v,p,job,jobs,results))
;
return ((function (switch__23196__auto__,c__23258__auto___29054,res,vec__28872,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0 = (function (){
var statearr_28883 = [null,null,null,null,null,null,null,null];
(statearr_28883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__);

(statearr_28883[(1)] = (1));

return statearr_28883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1 = (function (state_28877){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28884){if((e28884 instanceof Object)){
var ex__23200__auto__ = e28884;
var statearr_28885_29055 = state_28877;
(statearr_28885_29055[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29056 = state_28877;
state_28877 = G__29056;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___29054,res,vec__28872,v,p,job,jobs,results))
})();
var state__23260__auto__ = (function (){var statearr_28886 = f__23259__auto__.call(null);
(statearr_28886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___29054);

return statearr_28886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___29054,res,vec__28872,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28887){
var vec__28888 = p__28887;
var v = cljs.core.nth.call(null,vec__28888,(0),null);
var p = cljs.core.nth.call(null,vec__28888,(1),null);
var job = vec__28888;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19001__auto___29057 = n;
var __29058 = (0);
while(true){
if((__29058 < n__19001__auto___29057)){
var G__28889_29059 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28889_29059) {
case "async":
var c__23258__auto___29061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29058,c__23258__auto___29061,G__28889_29059,n__19001__auto___29057,jobs,results,process,async){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (__29058,c__23258__auto___29061,G__28889_29059,n__19001__auto___29057,jobs,results,process,async){
return (function (state_28902){
var state_val_28903 = (state_28902[(1)]);
if((state_val_28903 === (7))){
var inst_28898 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28904_29062 = state_28902__$1;
(statearr_28904_29062[(2)] = inst_28898);

(statearr_28904_29062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (6))){
var state_28902__$1 = state_28902;
var statearr_28905_29063 = state_28902__$1;
(statearr_28905_29063[(2)] = null);

(statearr_28905_29063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (5))){
var state_28902__$1 = state_28902;
var statearr_28906_29064 = state_28902__$1;
(statearr_28906_29064[(2)] = null);

(statearr_28906_29064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (4))){
var inst_28892 = (state_28902[(2)]);
var inst_28893 = async.call(null,inst_28892);
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28893)){
var statearr_28907_29065 = state_28902__$1;
(statearr_28907_29065[(1)] = (5));

} else {
var statearr_28908_29066 = state_28902__$1;
(statearr_28908_29066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (3))){
var inst_28900 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28902__$1,inst_28900);
} else {
if((state_val_28903 === (2))){
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28902__$1,(4),jobs);
} else {
if((state_val_28903 === (1))){
var state_28902__$1 = state_28902;
var statearr_28909_29067 = state_28902__$1;
(statearr_28909_29067[(2)] = null);

(statearr_28909_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29058,c__23258__auto___29061,G__28889_29059,n__19001__auto___29057,jobs,results,process,async))
;
return ((function (__29058,switch__23196__auto__,c__23258__auto___29061,G__28889_29059,n__19001__auto___29057,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0 = (function (){
var statearr_28913 = [null,null,null,null,null,null,null];
(statearr_28913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__);

(statearr_28913[(1)] = (1));

return statearr_28913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1 = (function (state_28902){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28914){if((e28914 instanceof Object)){
var ex__23200__auto__ = e28914;
var statearr_28915_29068 = state_28902;
(statearr_28915_29068[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29069 = state_28902;
state_28902 = G__29069;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = function(state_28902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1.call(this,state_28902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__;
})()
;})(__29058,switch__23196__auto__,c__23258__auto___29061,G__28889_29059,n__19001__auto___29057,jobs,results,process,async))
})();
var state__23260__auto__ = (function (){var statearr_28916 = f__23259__auto__.call(null);
(statearr_28916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___29061);

return statearr_28916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(__29058,c__23258__auto___29061,G__28889_29059,n__19001__auto___29057,jobs,results,process,async))
);


break;
case "compute":
var c__23258__auto___29070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29058,c__23258__auto___29070,G__28889_29059,n__19001__auto___29057,jobs,results,process,async){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (__29058,c__23258__auto___29070,G__28889_29059,n__19001__auto___29057,jobs,results,process,async){
return (function (state_28929){
var state_val_28930 = (state_28929[(1)]);
if((state_val_28930 === (7))){
var inst_28925 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28931_29071 = state_28929__$1;
(statearr_28931_29071[(2)] = inst_28925);

(statearr_28931_29071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (6))){
var state_28929__$1 = state_28929;
var statearr_28932_29072 = state_28929__$1;
(statearr_28932_29072[(2)] = null);

(statearr_28932_29072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (5))){
var state_28929__$1 = state_28929;
var statearr_28933_29073 = state_28929__$1;
(statearr_28933_29073[(2)] = null);

(statearr_28933_29073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (4))){
var inst_28919 = (state_28929[(2)]);
var inst_28920 = process.call(null,inst_28919);
var state_28929__$1 = state_28929;
if(cljs.core.truth_(inst_28920)){
var statearr_28934_29074 = state_28929__$1;
(statearr_28934_29074[(1)] = (5));

} else {
var statearr_28935_29075 = state_28929__$1;
(statearr_28935_29075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (3))){
var inst_28927 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28929__$1,inst_28927);
} else {
if((state_val_28930 === (2))){
var state_28929__$1 = state_28929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28929__$1,(4),jobs);
} else {
if((state_val_28930 === (1))){
var state_28929__$1 = state_28929;
var statearr_28936_29076 = state_28929__$1;
(statearr_28936_29076[(2)] = null);

(statearr_28936_29076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29058,c__23258__auto___29070,G__28889_29059,n__19001__auto___29057,jobs,results,process,async))
;
return ((function (__29058,switch__23196__auto__,c__23258__auto___29070,G__28889_29059,n__19001__auto___29057,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0 = (function (){
var statearr_28940 = [null,null,null,null,null,null,null];
(statearr_28940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__);

(statearr_28940[(1)] = (1));

return statearr_28940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1 = (function (state_28929){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28941){if((e28941 instanceof Object)){
var ex__23200__auto__ = e28941;
var statearr_28942_29077 = state_28929;
(statearr_28942_29077[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29078 = state_28929;
state_28929 = G__29078;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = function(state_28929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1.call(this,state_28929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__;
})()
;})(__29058,switch__23196__auto__,c__23258__auto___29070,G__28889_29059,n__19001__auto___29057,jobs,results,process,async))
})();
var state__23260__auto__ = (function (){var statearr_28943 = f__23259__auto__.call(null);
(statearr_28943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___29070);

return statearr_28943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(__29058,c__23258__auto___29070,G__28889_29059,n__19001__auto___29057,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29079 = (__29058 + (1));
__29058 = G__29079;
continue;
} else {
}
break;
}

var c__23258__auto___29080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___29080,jobs,results,process,async){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___29080,jobs,results,process,async){
return (function (state_28965){
var state_val_28966 = (state_28965[(1)]);
if((state_val_28966 === (9))){
var inst_28958 = (state_28965[(2)]);
var state_28965__$1 = (function (){var statearr_28967 = state_28965;
(statearr_28967[(7)] = inst_28958);

return statearr_28967;
})();
var statearr_28968_29081 = state_28965__$1;
(statearr_28968_29081[(2)] = null);

(statearr_28968_29081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (8))){
var inst_28951 = (state_28965[(8)]);
var inst_28956 = (state_28965[(2)]);
var state_28965__$1 = (function (){var statearr_28969 = state_28965;
(statearr_28969[(9)] = inst_28956);

return statearr_28969;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28965__$1,(9),results,inst_28951);
} else {
if((state_val_28966 === (7))){
var inst_28961 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
var statearr_28970_29082 = state_28965__$1;
(statearr_28970_29082[(2)] = inst_28961);

(statearr_28970_29082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (6))){
var inst_28951 = (state_28965[(8)]);
var inst_28946 = (state_28965[(10)]);
var inst_28951__$1 = cljs.core.async.chan.call(null,(1));
var inst_28952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28953 = [inst_28946,inst_28951__$1];
var inst_28954 = (new cljs.core.PersistentVector(null,2,(5),inst_28952,inst_28953,null));
var state_28965__$1 = (function (){var statearr_28971 = state_28965;
(statearr_28971[(8)] = inst_28951__$1);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28965__$1,(8),jobs,inst_28954);
} else {
if((state_val_28966 === (5))){
var inst_28949 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28965__$1 = state_28965;
var statearr_28972_29083 = state_28965__$1;
(statearr_28972_29083[(2)] = inst_28949);

(statearr_28972_29083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (4))){
var inst_28946 = (state_28965[(10)]);
var inst_28946__$1 = (state_28965[(2)]);
var inst_28947 = (inst_28946__$1 == null);
var state_28965__$1 = (function (){var statearr_28973 = state_28965;
(statearr_28973[(10)] = inst_28946__$1);

return statearr_28973;
})();
if(cljs.core.truth_(inst_28947)){
var statearr_28974_29084 = state_28965__$1;
(statearr_28974_29084[(1)] = (5));

} else {
var statearr_28975_29085 = state_28965__$1;
(statearr_28975_29085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (3))){
var inst_28963 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28965__$1,inst_28963);
} else {
if((state_val_28966 === (2))){
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28965__$1,(4),from);
} else {
if((state_val_28966 === (1))){
var state_28965__$1 = state_28965;
var statearr_28976_29086 = state_28965__$1;
(statearr_28976_29086[(2)] = null);

(statearr_28976_29086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___29080,jobs,results,process,async))
;
return ((function (switch__23196__auto__,c__23258__auto___29080,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0 = (function (){
var statearr_28980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__);

(statearr_28980[(1)] = (1));

return statearr_28980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1 = (function (state_28965){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28981){if((e28981 instanceof Object)){
var ex__23200__auto__ = e28981;
var statearr_28982_29087 = state_28965;
(statearr_28982_29087[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29088 = state_28965;
state_28965 = G__29088;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = function(state_28965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1.call(this,state_28965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___29080,jobs,results,process,async))
})();
var state__23260__auto__ = (function (){var statearr_28983 = f__23259__auto__.call(null);
(statearr_28983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___29080);

return statearr_28983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___29080,jobs,results,process,async))
);


var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__,jobs,results,process,async){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__,jobs,results,process,async){
return (function (state_29021){
var state_val_29022 = (state_29021[(1)]);
if((state_val_29022 === (7))){
var inst_29017 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29023_29089 = state_29021__$1;
(statearr_29023_29089[(2)] = inst_29017);

(statearr_29023_29089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (20))){
var state_29021__$1 = state_29021;
var statearr_29024_29090 = state_29021__$1;
(statearr_29024_29090[(2)] = null);

(statearr_29024_29090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (1))){
var state_29021__$1 = state_29021;
var statearr_29025_29091 = state_29021__$1;
(statearr_29025_29091[(2)] = null);

(statearr_29025_29091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (4))){
var inst_28986 = (state_29021[(7)]);
var inst_28986__$1 = (state_29021[(2)]);
var inst_28987 = (inst_28986__$1 == null);
var state_29021__$1 = (function (){var statearr_29026 = state_29021;
(statearr_29026[(7)] = inst_28986__$1);

return statearr_29026;
})();
if(cljs.core.truth_(inst_28987)){
var statearr_29027_29092 = state_29021__$1;
(statearr_29027_29092[(1)] = (5));

} else {
var statearr_29028_29093 = state_29021__$1;
(statearr_29028_29093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (15))){
var inst_28999 = (state_29021[(8)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29021__$1,(18),to,inst_28999);
} else {
if((state_val_29022 === (21))){
var inst_29012 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29029_29094 = state_29021__$1;
(statearr_29029_29094[(2)] = inst_29012);

(statearr_29029_29094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (13))){
var inst_29014 = (state_29021[(2)]);
var state_29021__$1 = (function (){var statearr_29030 = state_29021;
(statearr_29030[(9)] = inst_29014);

return statearr_29030;
})();
var statearr_29031_29095 = state_29021__$1;
(statearr_29031_29095[(2)] = null);

(statearr_29031_29095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (6))){
var inst_28986 = (state_29021[(7)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29021__$1,(11),inst_28986);
} else {
if((state_val_29022 === (17))){
var inst_29007 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
if(cljs.core.truth_(inst_29007)){
var statearr_29032_29096 = state_29021__$1;
(statearr_29032_29096[(1)] = (19));

} else {
var statearr_29033_29097 = state_29021__$1;
(statearr_29033_29097[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (3))){
var inst_29019 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29021__$1,inst_29019);
} else {
if((state_val_29022 === (12))){
var inst_28996 = (state_29021[(10)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29021__$1,(14),inst_28996);
} else {
if((state_val_29022 === (2))){
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29021__$1,(4),results);
} else {
if((state_val_29022 === (19))){
var state_29021__$1 = state_29021;
var statearr_29034_29098 = state_29021__$1;
(statearr_29034_29098[(2)] = null);

(statearr_29034_29098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (11))){
var inst_28996 = (state_29021[(2)]);
var state_29021__$1 = (function (){var statearr_29035 = state_29021;
(statearr_29035[(10)] = inst_28996);

return statearr_29035;
})();
var statearr_29036_29099 = state_29021__$1;
(statearr_29036_29099[(2)] = null);

(statearr_29036_29099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (9))){
var state_29021__$1 = state_29021;
var statearr_29037_29100 = state_29021__$1;
(statearr_29037_29100[(2)] = null);

(statearr_29037_29100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (5))){
var state_29021__$1 = state_29021;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29038_29101 = state_29021__$1;
(statearr_29038_29101[(1)] = (8));

} else {
var statearr_29039_29102 = state_29021__$1;
(statearr_29039_29102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (14))){
var inst_29001 = (state_29021[(11)]);
var inst_28999 = (state_29021[(8)]);
var inst_28999__$1 = (state_29021[(2)]);
var inst_29000 = (inst_28999__$1 == null);
var inst_29001__$1 = cljs.core.not.call(null,inst_29000);
var state_29021__$1 = (function (){var statearr_29040 = state_29021;
(statearr_29040[(11)] = inst_29001__$1);

(statearr_29040[(8)] = inst_28999__$1);

return statearr_29040;
})();
if(inst_29001__$1){
var statearr_29041_29103 = state_29021__$1;
(statearr_29041_29103[(1)] = (15));

} else {
var statearr_29042_29104 = state_29021__$1;
(statearr_29042_29104[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (16))){
var inst_29001 = (state_29021[(11)]);
var state_29021__$1 = state_29021;
var statearr_29043_29105 = state_29021__$1;
(statearr_29043_29105[(2)] = inst_29001);

(statearr_29043_29105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (10))){
var inst_28993 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29044_29106 = state_29021__$1;
(statearr_29044_29106[(2)] = inst_28993);

(statearr_29044_29106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (18))){
var inst_29004 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29045_29107 = state_29021__$1;
(statearr_29045_29107[(2)] = inst_29004);

(statearr_29045_29107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (8))){
var inst_28990 = cljs.core.async.close_BANG_.call(null,to);
var state_29021__$1 = state_29021;
var statearr_29046_29108 = state_29021__$1;
(statearr_29046_29108[(2)] = inst_28990);

(statearr_29046_29108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto__,jobs,results,process,async))
;
return ((function (switch__23196__auto__,c__23258__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0 = (function (){
var statearr_29050 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__);

(statearr_29050[(1)] = (1));

return statearr_29050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1 = (function (state_29021){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_29021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e29051){if((e29051 instanceof Object)){
var ex__23200__auto__ = e29051;
var statearr_29052_29109 = state_29021;
(statearr_29052_29109[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29110 = state_29021;
state_29021 = G__29110;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__ = function(state_29021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1.call(this,state_29021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__,jobs,results,process,async))
})();
var state__23260__auto__ = (function (){var statearr_29053 = f__23259__auto__.call(null);
(statearr_29053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_29053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__,jobs,results,process,async))
);

return c__23258__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__29112 = arguments.length;
switch (G__29112) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__29115 = arguments.length;
switch (G__29115) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__29118 = arguments.length;
switch (G__29118) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23258__auto___29170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___29170,tc,fc){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___29170,tc,fc){
return (function (state_29144){
var state_val_29145 = (state_29144[(1)]);
if((state_val_29145 === (7))){
var inst_29140 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29146_29171 = state_29144__$1;
(statearr_29146_29171[(2)] = inst_29140);

(statearr_29146_29171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (1))){
var state_29144__$1 = state_29144;
var statearr_29147_29172 = state_29144__$1;
(statearr_29147_29172[(2)] = null);

(statearr_29147_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (4))){
var inst_29121 = (state_29144[(7)]);
var inst_29121__$1 = (state_29144[(2)]);
var inst_29122 = (inst_29121__$1 == null);
var state_29144__$1 = (function (){var statearr_29148 = state_29144;
(statearr_29148[(7)] = inst_29121__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29122)){
var statearr_29149_29173 = state_29144__$1;
(statearr_29149_29173[(1)] = (5));

} else {
var statearr_29150_29174 = state_29144__$1;
(statearr_29150_29174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (13))){
var state_29144__$1 = state_29144;
var statearr_29151_29175 = state_29144__$1;
(statearr_29151_29175[(2)] = null);

(statearr_29151_29175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (6))){
var inst_29121 = (state_29144[(7)]);
var inst_29127 = p.call(null,inst_29121);
var state_29144__$1 = state_29144;
if(cljs.core.truth_(inst_29127)){
var statearr_29152_29176 = state_29144__$1;
(statearr_29152_29176[(1)] = (9));

} else {
var statearr_29153_29177 = state_29144__$1;
(statearr_29153_29177[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (3))){
var inst_29142 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29144__$1,inst_29142);
} else {
if((state_val_29145 === (12))){
var state_29144__$1 = state_29144;
var statearr_29154_29178 = state_29144__$1;
(statearr_29154_29178[(2)] = null);

(statearr_29154_29178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (2))){
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29144__$1,(4),ch);
} else {
if((state_val_29145 === (11))){
var inst_29121 = (state_29144[(7)]);
var inst_29131 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29144__$1,(8),inst_29131,inst_29121);
} else {
if((state_val_29145 === (9))){
var state_29144__$1 = state_29144;
var statearr_29155_29179 = state_29144__$1;
(statearr_29155_29179[(2)] = tc);

(statearr_29155_29179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (5))){
var inst_29124 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29125 = cljs.core.async.close_BANG_.call(null,fc);
var state_29144__$1 = (function (){var statearr_29156 = state_29144;
(statearr_29156[(8)] = inst_29124);

return statearr_29156;
})();
var statearr_29157_29180 = state_29144__$1;
(statearr_29157_29180[(2)] = inst_29125);

(statearr_29157_29180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (14))){
var inst_29138 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29158_29181 = state_29144__$1;
(statearr_29158_29181[(2)] = inst_29138);

(statearr_29158_29181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (10))){
var state_29144__$1 = state_29144;
var statearr_29159_29182 = state_29144__$1;
(statearr_29159_29182[(2)] = fc);

(statearr_29159_29182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (8))){
var inst_29133 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
if(cljs.core.truth_(inst_29133)){
var statearr_29160_29183 = state_29144__$1;
(statearr_29160_29183[(1)] = (12));

} else {
var statearr_29161_29184 = state_29144__$1;
(statearr_29161_29184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___29170,tc,fc))
;
return ((function (switch__23196__auto__,c__23258__auto___29170,tc,fc){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_29165 = [null,null,null,null,null,null,null,null,null];
(statearr_29165[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_29165[(1)] = (1));

return statearr_29165;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_29144){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_29144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e29166){if((e29166 instanceof Object)){
var ex__23200__auto__ = e29166;
var statearr_29167_29185 = state_29144;
(statearr_29167_29185[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29186 = state_29144;
state_29144 = G__29186;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_29144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_29144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___29170,tc,fc))
})();
var state__23260__auto__ = (function (){var statearr_29168 = f__23259__auto__.call(null);
(statearr_29168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___29170);

return statearr_29168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___29170,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__){
return (function (state_29233){
var state_val_29234 = (state_29233[(1)]);
if((state_val_29234 === (7))){
var inst_29229 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29235_29251 = state_29233__$1;
(statearr_29235_29251[(2)] = inst_29229);

(statearr_29235_29251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (6))){
var inst_29219 = (state_29233[(7)]);
var inst_29222 = (state_29233[(8)]);
var inst_29226 = f.call(null,inst_29219,inst_29222);
var inst_29219__$1 = inst_29226;
var state_29233__$1 = (function (){var statearr_29236 = state_29233;
(statearr_29236[(7)] = inst_29219__$1);

return statearr_29236;
})();
var statearr_29237_29252 = state_29233__$1;
(statearr_29237_29252[(2)] = null);

(statearr_29237_29252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (5))){
var inst_29219 = (state_29233[(7)]);
var state_29233__$1 = state_29233;
var statearr_29238_29253 = state_29233__$1;
(statearr_29238_29253[(2)] = inst_29219);

(statearr_29238_29253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (4))){
var inst_29222 = (state_29233[(8)]);
var inst_29222__$1 = (state_29233[(2)]);
var inst_29223 = (inst_29222__$1 == null);
var state_29233__$1 = (function (){var statearr_29239 = state_29233;
(statearr_29239[(8)] = inst_29222__$1);

return statearr_29239;
})();
if(cljs.core.truth_(inst_29223)){
var statearr_29240_29254 = state_29233__$1;
(statearr_29240_29254[(1)] = (5));

} else {
var statearr_29241_29255 = state_29233__$1;
(statearr_29241_29255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (3))){
var inst_29231 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29233__$1,inst_29231);
} else {
if((state_val_29234 === (2))){
var state_29233__$1 = state_29233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29233__$1,(4),ch);
} else {
if((state_val_29234 === (1))){
var inst_29219 = init;
var state_29233__$1 = (function (){var statearr_29242 = state_29233;
(statearr_29242[(7)] = inst_29219);

return statearr_29242;
})();
var statearr_29243_29256 = state_29233__$1;
(statearr_29243_29256[(2)] = null);

(statearr_29243_29256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23258__auto__))
;
return ((function (switch__23196__auto__,c__23258__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23197__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23197__auto____0 = (function (){
var statearr_29247 = [null,null,null,null,null,null,null,null,null];
(statearr_29247[(0)] = cljs$core$async$reduce_$_state_machine__23197__auto__);

(statearr_29247[(1)] = (1));

return statearr_29247;
});
var cljs$core$async$reduce_$_state_machine__23197__auto____1 = (function (state_29233){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_29233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e29248){if((e29248 instanceof Object)){
var ex__23200__auto__ = e29248;
var statearr_29249_29257 = state_29233;
(statearr_29249_29257[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29258 = state_29233;
state_29233 = G__29258;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23197__auto__ = function(state_29233){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23197__auto____1.call(this,state_29233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23197__auto____0;
cljs$core$async$reduce_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23197__auto____1;
return cljs$core$async$reduce_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__))
})();
var state__23260__auto__ = (function (){var statearr_29250 = f__23259__auto__.call(null);
(statearr_29250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_29250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__))
);

return c__23258__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__29260 = arguments.length;
switch (G__29260) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__){
return (function (state_29285){
var state_val_29286 = (state_29285[(1)]);
if((state_val_29286 === (7))){
var inst_29267 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29287_29311 = state_29285__$1;
(statearr_29287_29311[(2)] = inst_29267);

(statearr_29287_29311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (1))){
var inst_29261 = cljs.core.seq.call(null,coll);
var inst_29262 = inst_29261;
var state_29285__$1 = (function (){var statearr_29288 = state_29285;
(statearr_29288[(7)] = inst_29262);

return statearr_29288;
})();
var statearr_29289_29312 = state_29285__$1;
(statearr_29289_29312[(2)] = null);

(statearr_29289_29312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (4))){
var inst_29262 = (state_29285[(7)]);
var inst_29265 = cljs.core.first.call(null,inst_29262);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29285__$1,(7),ch,inst_29265);
} else {
if((state_val_29286 === (13))){
var inst_29279 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29290_29313 = state_29285__$1;
(statearr_29290_29313[(2)] = inst_29279);

(statearr_29290_29313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (6))){
var inst_29270 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
if(cljs.core.truth_(inst_29270)){
var statearr_29291_29314 = state_29285__$1;
(statearr_29291_29314[(1)] = (8));

} else {
var statearr_29292_29315 = state_29285__$1;
(statearr_29292_29315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (3))){
var inst_29283 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29285__$1,inst_29283);
} else {
if((state_val_29286 === (12))){
var state_29285__$1 = state_29285;
var statearr_29293_29316 = state_29285__$1;
(statearr_29293_29316[(2)] = null);

(statearr_29293_29316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (2))){
var inst_29262 = (state_29285[(7)]);
var state_29285__$1 = state_29285;
if(cljs.core.truth_(inst_29262)){
var statearr_29294_29317 = state_29285__$1;
(statearr_29294_29317[(1)] = (4));

} else {
var statearr_29295_29318 = state_29285__$1;
(statearr_29295_29318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (11))){
var inst_29276 = cljs.core.async.close_BANG_.call(null,ch);
var state_29285__$1 = state_29285;
var statearr_29296_29319 = state_29285__$1;
(statearr_29296_29319[(2)] = inst_29276);

(statearr_29296_29319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (9))){
var state_29285__$1 = state_29285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29297_29320 = state_29285__$1;
(statearr_29297_29320[(1)] = (11));

} else {
var statearr_29298_29321 = state_29285__$1;
(statearr_29298_29321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (5))){
var inst_29262 = (state_29285[(7)]);
var state_29285__$1 = state_29285;
var statearr_29299_29322 = state_29285__$1;
(statearr_29299_29322[(2)] = inst_29262);

(statearr_29299_29322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (10))){
var inst_29281 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29300_29323 = state_29285__$1;
(statearr_29300_29323[(2)] = inst_29281);

(statearr_29300_29323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (8))){
var inst_29262 = (state_29285[(7)]);
var inst_29272 = cljs.core.next.call(null,inst_29262);
var inst_29262__$1 = inst_29272;
var state_29285__$1 = (function (){var statearr_29301 = state_29285;
(statearr_29301[(7)] = inst_29262__$1);

return statearr_29301;
})();
var statearr_29302_29324 = state_29285__$1;
(statearr_29302_29324[(2)] = null);

(statearr_29302_29324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto__))
;
return ((function (switch__23196__auto__,c__23258__auto__){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_29306 = [null,null,null,null,null,null,null,null];
(statearr_29306[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_29306[(1)] = (1));

return statearr_29306;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_29285){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_29285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e29307){if((e29307 instanceof Object)){
var ex__23200__auto__ = e29307;
var statearr_29308_29325 = state_29285;
(statearr_29308_29325[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29326 = state_29285;
state_29285 = G__29326;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_29285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_29285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__))
})();
var state__23260__auto__ = (function (){var statearr_29309 = f__23259__auto__.call(null);
(statearr_29309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_29309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__))
);

return c__23258__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29328 = {};
return obj29328;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18104__auto__ = _;
if(and__18104__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18752__auto__ = (((_ == null))?null:_);
return (function (){var or__18116__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29330 = {};
return obj29330;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29552 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29552 = (function (cs,ch,mult,meta29553){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29553 = meta29553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29552.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29552.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29554){
var self__ = this;
var _29554__$1 = this;
return self__.meta29553;
});})(cs))
;

cljs.core.async.t29552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29554,meta29553__$1){
var self__ = this;
var _29554__$1 = this;
return (new cljs.core.async.t29552(self__.cs,self__.ch,self__.mult,meta29553__$1));
});})(cs))
;

cljs.core.async.t29552.cljs$lang$type = true;

cljs.core.async.t29552.cljs$lang$ctorStr = "cljs.core.async/t29552";

cljs.core.async.t29552.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29552");
});})(cs))
;

cljs.core.async.__GT_t29552 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29552(cs__$1,ch__$1,mult__$1,meta29553){
return (new cljs.core.async.t29552(cs__$1,ch__$1,mult__$1,meta29553));
});})(cs))
;

}

return (new cljs.core.async.t29552(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23258__auto___29773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___29773,cs,m,dchan,dctr,done){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___29773,cs,m,dchan,dctr,done){
return (function (state_29685){
var state_val_29686 = (state_29685[(1)]);
if((state_val_29686 === (7))){
var inst_29681 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29687_29774 = state_29685__$1;
(statearr_29687_29774[(2)] = inst_29681);

(statearr_29687_29774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (20))){
var inst_29586 = (state_29685[(7)]);
var inst_29596 = cljs.core.first.call(null,inst_29586);
var inst_29597 = cljs.core.nth.call(null,inst_29596,(0),null);
var inst_29598 = cljs.core.nth.call(null,inst_29596,(1),null);
var state_29685__$1 = (function (){var statearr_29688 = state_29685;
(statearr_29688[(8)] = inst_29597);

return statearr_29688;
})();
if(cljs.core.truth_(inst_29598)){
var statearr_29689_29775 = state_29685__$1;
(statearr_29689_29775[(1)] = (22));

} else {
var statearr_29690_29776 = state_29685__$1;
(statearr_29690_29776[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (27))){
var inst_29633 = (state_29685[(9)]);
var inst_29628 = (state_29685[(10)]);
var inst_29557 = (state_29685[(11)]);
var inst_29626 = (state_29685[(12)]);
var inst_29633__$1 = cljs.core._nth.call(null,inst_29626,inst_29628);
var inst_29634 = cljs.core.async.put_BANG_.call(null,inst_29633__$1,inst_29557,done);
var state_29685__$1 = (function (){var statearr_29691 = state_29685;
(statearr_29691[(9)] = inst_29633__$1);

return statearr_29691;
})();
if(cljs.core.truth_(inst_29634)){
var statearr_29692_29777 = state_29685__$1;
(statearr_29692_29777[(1)] = (30));

} else {
var statearr_29693_29778 = state_29685__$1;
(statearr_29693_29778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (1))){
var state_29685__$1 = state_29685;
var statearr_29694_29779 = state_29685__$1;
(statearr_29694_29779[(2)] = null);

(statearr_29694_29779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (24))){
var inst_29586 = (state_29685[(7)]);
var inst_29603 = (state_29685[(2)]);
var inst_29604 = cljs.core.next.call(null,inst_29586);
var inst_29566 = inst_29604;
var inst_29567 = null;
var inst_29568 = (0);
var inst_29569 = (0);
var state_29685__$1 = (function (){var statearr_29695 = state_29685;
(statearr_29695[(13)] = inst_29603);

(statearr_29695[(14)] = inst_29568);

(statearr_29695[(15)] = inst_29567);

(statearr_29695[(16)] = inst_29569);

(statearr_29695[(17)] = inst_29566);

return statearr_29695;
})();
var statearr_29696_29780 = state_29685__$1;
(statearr_29696_29780[(2)] = null);

(statearr_29696_29780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (39))){
var state_29685__$1 = state_29685;
var statearr_29700_29781 = state_29685__$1;
(statearr_29700_29781[(2)] = null);

(statearr_29700_29781[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (4))){
var inst_29557 = (state_29685[(11)]);
var inst_29557__$1 = (state_29685[(2)]);
var inst_29558 = (inst_29557__$1 == null);
var state_29685__$1 = (function (){var statearr_29701 = state_29685;
(statearr_29701[(11)] = inst_29557__$1);

return statearr_29701;
})();
if(cljs.core.truth_(inst_29558)){
var statearr_29702_29782 = state_29685__$1;
(statearr_29702_29782[(1)] = (5));

} else {
var statearr_29703_29783 = state_29685__$1;
(statearr_29703_29783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (15))){
var inst_29568 = (state_29685[(14)]);
var inst_29567 = (state_29685[(15)]);
var inst_29569 = (state_29685[(16)]);
var inst_29566 = (state_29685[(17)]);
var inst_29582 = (state_29685[(2)]);
var inst_29583 = (inst_29569 + (1));
var tmp29697 = inst_29568;
var tmp29698 = inst_29567;
var tmp29699 = inst_29566;
var inst_29566__$1 = tmp29699;
var inst_29567__$1 = tmp29698;
var inst_29568__$1 = tmp29697;
var inst_29569__$1 = inst_29583;
var state_29685__$1 = (function (){var statearr_29704 = state_29685;
(statearr_29704[(14)] = inst_29568__$1);

(statearr_29704[(15)] = inst_29567__$1);

(statearr_29704[(18)] = inst_29582);

(statearr_29704[(16)] = inst_29569__$1);

(statearr_29704[(17)] = inst_29566__$1);

return statearr_29704;
})();
var statearr_29705_29784 = state_29685__$1;
(statearr_29705_29784[(2)] = null);

(statearr_29705_29784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (21))){
var inst_29607 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29709_29785 = state_29685__$1;
(statearr_29709_29785[(2)] = inst_29607);

(statearr_29709_29785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (31))){
var inst_29633 = (state_29685[(9)]);
var inst_29637 = done.call(null,null);
var inst_29638 = cljs.core.async.untap_STAR_.call(null,m,inst_29633);
var state_29685__$1 = (function (){var statearr_29710 = state_29685;
(statearr_29710[(19)] = inst_29637);

return statearr_29710;
})();
var statearr_29711_29786 = state_29685__$1;
(statearr_29711_29786[(2)] = inst_29638);

(statearr_29711_29786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (32))){
var inst_29627 = (state_29685[(20)]);
var inst_29628 = (state_29685[(10)]);
var inst_29625 = (state_29685[(21)]);
var inst_29626 = (state_29685[(12)]);
var inst_29640 = (state_29685[(2)]);
var inst_29641 = (inst_29628 + (1));
var tmp29706 = inst_29627;
var tmp29707 = inst_29625;
var tmp29708 = inst_29626;
var inst_29625__$1 = tmp29707;
var inst_29626__$1 = tmp29708;
var inst_29627__$1 = tmp29706;
var inst_29628__$1 = inst_29641;
var state_29685__$1 = (function (){var statearr_29712 = state_29685;
(statearr_29712[(20)] = inst_29627__$1);

(statearr_29712[(10)] = inst_29628__$1);

(statearr_29712[(21)] = inst_29625__$1);

(statearr_29712[(22)] = inst_29640);

(statearr_29712[(12)] = inst_29626__$1);

return statearr_29712;
})();
var statearr_29713_29787 = state_29685__$1;
(statearr_29713_29787[(2)] = null);

(statearr_29713_29787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (40))){
var inst_29653 = (state_29685[(23)]);
var inst_29657 = done.call(null,null);
var inst_29658 = cljs.core.async.untap_STAR_.call(null,m,inst_29653);
var state_29685__$1 = (function (){var statearr_29714 = state_29685;
(statearr_29714[(24)] = inst_29657);

return statearr_29714;
})();
var statearr_29715_29788 = state_29685__$1;
(statearr_29715_29788[(2)] = inst_29658);

(statearr_29715_29788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (33))){
var inst_29644 = (state_29685[(25)]);
var inst_29646 = cljs.core.chunked_seq_QMARK_.call(null,inst_29644);
var state_29685__$1 = state_29685;
if(inst_29646){
var statearr_29716_29789 = state_29685__$1;
(statearr_29716_29789[(1)] = (36));

} else {
var statearr_29717_29790 = state_29685__$1;
(statearr_29717_29790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (13))){
var inst_29576 = (state_29685[(26)]);
var inst_29579 = cljs.core.async.close_BANG_.call(null,inst_29576);
var state_29685__$1 = state_29685;
var statearr_29718_29791 = state_29685__$1;
(statearr_29718_29791[(2)] = inst_29579);

(statearr_29718_29791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (22))){
var inst_29597 = (state_29685[(8)]);
var inst_29600 = cljs.core.async.close_BANG_.call(null,inst_29597);
var state_29685__$1 = state_29685;
var statearr_29719_29792 = state_29685__$1;
(statearr_29719_29792[(2)] = inst_29600);

(statearr_29719_29792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (36))){
var inst_29644 = (state_29685[(25)]);
var inst_29648 = cljs.core.chunk_first.call(null,inst_29644);
var inst_29649 = cljs.core.chunk_rest.call(null,inst_29644);
var inst_29650 = cljs.core.count.call(null,inst_29648);
var inst_29625 = inst_29649;
var inst_29626 = inst_29648;
var inst_29627 = inst_29650;
var inst_29628 = (0);
var state_29685__$1 = (function (){var statearr_29720 = state_29685;
(statearr_29720[(20)] = inst_29627);

(statearr_29720[(10)] = inst_29628);

(statearr_29720[(21)] = inst_29625);

(statearr_29720[(12)] = inst_29626);

return statearr_29720;
})();
var statearr_29721_29793 = state_29685__$1;
(statearr_29721_29793[(2)] = null);

(statearr_29721_29793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (41))){
var inst_29644 = (state_29685[(25)]);
var inst_29660 = (state_29685[(2)]);
var inst_29661 = cljs.core.next.call(null,inst_29644);
var inst_29625 = inst_29661;
var inst_29626 = null;
var inst_29627 = (0);
var inst_29628 = (0);
var state_29685__$1 = (function (){var statearr_29722 = state_29685;
(statearr_29722[(27)] = inst_29660);

(statearr_29722[(20)] = inst_29627);

(statearr_29722[(10)] = inst_29628);

(statearr_29722[(21)] = inst_29625);

(statearr_29722[(12)] = inst_29626);

return statearr_29722;
})();
var statearr_29723_29794 = state_29685__$1;
(statearr_29723_29794[(2)] = null);

(statearr_29723_29794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (43))){
var state_29685__$1 = state_29685;
var statearr_29724_29795 = state_29685__$1;
(statearr_29724_29795[(2)] = null);

(statearr_29724_29795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (29))){
var inst_29669 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29725_29796 = state_29685__$1;
(statearr_29725_29796[(2)] = inst_29669);

(statearr_29725_29796[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (44))){
var inst_29678 = (state_29685[(2)]);
var state_29685__$1 = (function (){var statearr_29726 = state_29685;
(statearr_29726[(28)] = inst_29678);

return statearr_29726;
})();
var statearr_29727_29797 = state_29685__$1;
(statearr_29727_29797[(2)] = null);

(statearr_29727_29797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (6))){
var inst_29617 = (state_29685[(29)]);
var inst_29616 = cljs.core.deref.call(null,cs);
var inst_29617__$1 = cljs.core.keys.call(null,inst_29616);
var inst_29618 = cljs.core.count.call(null,inst_29617__$1);
var inst_29619 = cljs.core.reset_BANG_.call(null,dctr,inst_29618);
var inst_29624 = cljs.core.seq.call(null,inst_29617__$1);
var inst_29625 = inst_29624;
var inst_29626 = null;
var inst_29627 = (0);
var inst_29628 = (0);
var state_29685__$1 = (function (){var statearr_29728 = state_29685;
(statearr_29728[(29)] = inst_29617__$1);

(statearr_29728[(20)] = inst_29627);

(statearr_29728[(10)] = inst_29628);

(statearr_29728[(21)] = inst_29625);

(statearr_29728[(30)] = inst_29619);

(statearr_29728[(12)] = inst_29626);

return statearr_29728;
})();
var statearr_29729_29798 = state_29685__$1;
(statearr_29729_29798[(2)] = null);

(statearr_29729_29798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (28))){
var inst_29644 = (state_29685[(25)]);
var inst_29625 = (state_29685[(21)]);
var inst_29644__$1 = cljs.core.seq.call(null,inst_29625);
var state_29685__$1 = (function (){var statearr_29730 = state_29685;
(statearr_29730[(25)] = inst_29644__$1);

return statearr_29730;
})();
if(inst_29644__$1){
var statearr_29731_29799 = state_29685__$1;
(statearr_29731_29799[(1)] = (33));

} else {
var statearr_29732_29800 = state_29685__$1;
(statearr_29732_29800[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (25))){
var inst_29627 = (state_29685[(20)]);
var inst_29628 = (state_29685[(10)]);
var inst_29630 = (inst_29628 < inst_29627);
var inst_29631 = inst_29630;
var state_29685__$1 = state_29685;
if(cljs.core.truth_(inst_29631)){
var statearr_29733_29801 = state_29685__$1;
(statearr_29733_29801[(1)] = (27));

} else {
var statearr_29734_29802 = state_29685__$1;
(statearr_29734_29802[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (34))){
var state_29685__$1 = state_29685;
var statearr_29735_29803 = state_29685__$1;
(statearr_29735_29803[(2)] = null);

(statearr_29735_29803[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (17))){
var state_29685__$1 = state_29685;
var statearr_29736_29804 = state_29685__$1;
(statearr_29736_29804[(2)] = null);

(statearr_29736_29804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (3))){
var inst_29683 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29685__$1,inst_29683);
} else {
if((state_val_29686 === (12))){
var inst_29612 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29737_29805 = state_29685__$1;
(statearr_29737_29805[(2)] = inst_29612);

(statearr_29737_29805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (2))){
var state_29685__$1 = state_29685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29685__$1,(4),ch);
} else {
if((state_val_29686 === (23))){
var state_29685__$1 = state_29685;
var statearr_29738_29806 = state_29685__$1;
(statearr_29738_29806[(2)] = null);

(statearr_29738_29806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (35))){
var inst_29667 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29739_29807 = state_29685__$1;
(statearr_29739_29807[(2)] = inst_29667);

(statearr_29739_29807[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (19))){
var inst_29586 = (state_29685[(7)]);
var inst_29590 = cljs.core.chunk_first.call(null,inst_29586);
var inst_29591 = cljs.core.chunk_rest.call(null,inst_29586);
var inst_29592 = cljs.core.count.call(null,inst_29590);
var inst_29566 = inst_29591;
var inst_29567 = inst_29590;
var inst_29568 = inst_29592;
var inst_29569 = (0);
var state_29685__$1 = (function (){var statearr_29740 = state_29685;
(statearr_29740[(14)] = inst_29568);

(statearr_29740[(15)] = inst_29567);

(statearr_29740[(16)] = inst_29569);

(statearr_29740[(17)] = inst_29566);

return statearr_29740;
})();
var statearr_29741_29808 = state_29685__$1;
(statearr_29741_29808[(2)] = null);

(statearr_29741_29808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (11))){
var inst_29586 = (state_29685[(7)]);
var inst_29566 = (state_29685[(17)]);
var inst_29586__$1 = cljs.core.seq.call(null,inst_29566);
var state_29685__$1 = (function (){var statearr_29742 = state_29685;
(statearr_29742[(7)] = inst_29586__$1);

return statearr_29742;
})();
if(inst_29586__$1){
var statearr_29743_29809 = state_29685__$1;
(statearr_29743_29809[(1)] = (16));

} else {
var statearr_29744_29810 = state_29685__$1;
(statearr_29744_29810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (9))){
var inst_29614 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29745_29811 = state_29685__$1;
(statearr_29745_29811[(2)] = inst_29614);

(statearr_29745_29811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (5))){
var inst_29564 = cljs.core.deref.call(null,cs);
var inst_29565 = cljs.core.seq.call(null,inst_29564);
var inst_29566 = inst_29565;
var inst_29567 = null;
var inst_29568 = (0);
var inst_29569 = (0);
var state_29685__$1 = (function (){var statearr_29746 = state_29685;
(statearr_29746[(14)] = inst_29568);

(statearr_29746[(15)] = inst_29567);

(statearr_29746[(16)] = inst_29569);

(statearr_29746[(17)] = inst_29566);

return statearr_29746;
})();
var statearr_29747_29812 = state_29685__$1;
(statearr_29747_29812[(2)] = null);

(statearr_29747_29812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (14))){
var state_29685__$1 = state_29685;
var statearr_29748_29813 = state_29685__$1;
(statearr_29748_29813[(2)] = null);

(statearr_29748_29813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (45))){
var inst_29675 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29749_29814 = state_29685__$1;
(statearr_29749_29814[(2)] = inst_29675);

(statearr_29749_29814[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (26))){
var inst_29617 = (state_29685[(29)]);
var inst_29671 = (state_29685[(2)]);
var inst_29672 = cljs.core.seq.call(null,inst_29617);
var state_29685__$1 = (function (){var statearr_29750 = state_29685;
(statearr_29750[(31)] = inst_29671);

return statearr_29750;
})();
if(inst_29672){
var statearr_29751_29815 = state_29685__$1;
(statearr_29751_29815[(1)] = (42));

} else {
var statearr_29752_29816 = state_29685__$1;
(statearr_29752_29816[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (16))){
var inst_29586 = (state_29685[(7)]);
var inst_29588 = cljs.core.chunked_seq_QMARK_.call(null,inst_29586);
var state_29685__$1 = state_29685;
if(inst_29588){
var statearr_29753_29817 = state_29685__$1;
(statearr_29753_29817[(1)] = (19));

} else {
var statearr_29754_29818 = state_29685__$1;
(statearr_29754_29818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (38))){
var inst_29664 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29755_29819 = state_29685__$1;
(statearr_29755_29819[(2)] = inst_29664);

(statearr_29755_29819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (30))){
var state_29685__$1 = state_29685;
var statearr_29756_29820 = state_29685__$1;
(statearr_29756_29820[(2)] = null);

(statearr_29756_29820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (10))){
var inst_29567 = (state_29685[(15)]);
var inst_29569 = (state_29685[(16)]);
var inst_29575 = cljs.core._nth.call(null,inst_29567,inst_29569);
var inst_29576 = cljs.core.nth.call(null,inst_29575,(0),null);
var inst_29577 = cljs.core.nth.call(null,inst_29575,(1),null);
var state_29685__$1 = (function (){var statearr_29757 = state_29685;
(statearr_29757[(26)] = inst_29576);

return statearr_29757;
})();
if(cljs.core.truth_(inst_29577)){
var statearr_29758_29821 = state_29685__$1;
(statearr_29758_29821[(1)] = (13));

} else {
var statearr_29759_29822 = state_29685__$1;
(statearr_29759_29822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (18))){
var inst_29610 = (state_29685[(2)]);
var state_29685__$1 = state_29685;
var statearr_29760_29823 = state_29685__$1;
(statearr_29760_29823[(2)] = inst_29610);

(statearr_29760_29823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (42))){
var state_29685__$1 = state_29685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29685__$1,(45),dchan);
} else {
if((state_val_29686 === (37))){
var inst_29653 = (state_29685[(23)]);
var inst_29644 = (state_29685[(25)]);
var inst_29557 = (state_29685[(11)]);
var inst_29653__$1 = cljs.core.first.call(null,inst_29644);
var inst_29654 = cljs.core.async.put_BANG_.call(null,inst_29653__$1,inst_29557,done);
var state_29685__$1 = (function (){var statearr_29761 = state_29685;
(statearr_29761[(23)] = inst_29653__$1);

return statearr_29761;
})();
if(cljs.core.truth_(inst_29654)){
var statearr_29762_29824 = state_29685__$1;
(statearr_29762_29824[(1)] = (39));

} else {
var statearr_29763_29825 = state_29685__$1;
(statearr_29763_29825[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29686 === (8))){
var inst_29568 = (state_29685[(14)]);
var inst_29569 = (state_29685[(16)]);
var inst_29571 = (inst_29569 < inst_29568);
var inst_29572 = inst_29571;
var state_29685__$1 = state_29685;
if(cljs.core.truth_(inst_29572)){
var statearr_29764_29826 = state_29685__$1;
(statearr_29764_29826[(1)] = (10));

} else {
var statearr_29765_29827 = state_29685__$1;
(statearr_29765_29827[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___29773,cs,m,dchan,dctr,done))
;
return ((function (switch__23196__auto__,c__23258__auto___29773,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23197__auto__ = null;
var cljs$core$async$mult_$_state_machine__23197__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$mult_$_state_machine__23197__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$mult_$_state_machine__23197__auto____1 = (function (state_29685){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_29685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e29770){if((e29770 instanceof Object)){
var ex__23200__auto__ = e29770;
var statearr_29771_29828 = state_29685;
(statearr_29771_29828[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29829 = state_29685;
state_29685 = G__29829;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23197__auto__ = function(state_29685){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23197__auto____1.call(this,state_29685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23197__auto____0;
cljs$core$async$mult_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23197__auto____1;
return cljs$core$async$mult_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___29773,cs,m,dchan,dctr,done))
})();
var state__23260__auto__ = (function (){var statearr_29772 = f__23259__auto__.call(null);
(statearr_29772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___29773);

return statearr_29772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___29773,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__29831 = arguments.length;
switch (G__29831) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj29834 = {};
return obj29834;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19156__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19156__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29839){
var map__29840 = p__29839;
var map__29840__$1 = ((cljs.core.seq_QMARK_.call(null,map__29840))?cljs.core.apply.call(null,cljs.core.hash_map,map__29840):map__29840);
var opts = map__29840__$1;
var statearr_29841_29844 = state;
(statearr_29841_29844[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29840,map__29840__$1,opts){
return (function (val){
var statearr_29842_29845 = state;
(statearr_29842_29845[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29840,map__29840__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29843_29846 = state;
(statearr_29843_29846[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29835){
var G__29836 = cljs.core.first.call(null,seq29835);
var seq29835__$1 = cljs.core.next.call(null,seq29835);
var G__29837 = cljs.core.first.call(null,seq29835__$1);
var seq29835__$2 = cljs.core.next.call(null,seq29835__$1);
var G__29838 = cljs.core.first.call(null,seq29835__$2);
var seq29835__$3 = cljs.core.next.call(null,seq29835__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29836,G__29837,G__29838,seq29835__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29966 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29967){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29967 = meta29967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29966.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29966.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29968){
var self__ = this;
var _29968__$1 = this;
return self__.meta29967;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29968,meta29967__$1){
var self__ = this;
var _29968__$1 = this;
return (new cljs.core.async.t29966(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29967__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29966.cljs$lang$type = true;

cljs.core.async.t29966.cljs$lang$ctorStr = "cljs.core.async/t29966";

cljs.core.async.t29966.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29966");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29966 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29967){
return (new cljs.core.async.t29966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29967));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29966(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23258__auto___30085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30038){
var state_val_30039 = (state_30038[(1)]);
if((state_val_30039 === (7))){
var inst_29982 = (state_30038[(7)]);
var inst_29987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29982);
var state_30038__$1 = state_30038;
var statearr_30040_30086 = state_30038__$1;
(statearr_30040_30086[(2)] = inst_29987);

(statearr_30040_30086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (20))){
var inst_29997 = (state_30038[(8)]);
var state_30038__$1 = state_30038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30038__$1,(23),out,inst_29997);
} else {
if((state_val_30039 === (1))){
var inst_29972 = (state_30038[(9)]);
var inst_29972__$1 = calc_state.call(null);
var inst_29973 = cljs.core.seq_QMARK_.call(null,inst_29972__$1);
var state_30038__$1 = (function (){var statearr_30041 = state_30038;
(statearr_30041[(9)] = inst_29972__$1);

return statearr_30041;
})();
if(inst_29973){
var statearr_30042_30087 = state_30038__$1;
(statearr_30042_30087[(1)] = (2));

} else {
var statearr_30043_30088 = state_30038__$1;
(statearr_30043_30088[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (24))){
var inst_29990 = (state_30038[(10)]);
var inst_29982 = inst_29990;
var state_30038__$1 = (function (){var statearr_30044 = state_30038;
(statearr_30044[(7)] = inst_29982);

return statearr_30044;
})();
var statearr_30045_30089 = state_30038__$1;
(statearr_30045_30089[(2)] = null);

(statearr_30045_30089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (4))){
var inst_29972 = (state_30038[(9)]);
var inst_29978 = (state_30038[(2)]);
var inst_29979 = cljs.core.get.call(null,inst_29978,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29980 = cljs.core.get.call(null,inst_29978,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29981 = cljs.core.get.call(null,inst_29978,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29982 = inst_29972;
var state_30038__$1 = (function (){var statearr_30046 = state_30038;
(statearr_30046[(7)] = inst_29982);

(statearr_30046[(11)] = inst_29980);

(statearr_30046[(12)] = inst_29981);

(statearr_30046[(13)] = inst_29979);

return statearr_30046;
})();
var statearr_30047_30090 = state_30038__$1;
(statearr_30047_30090[(2)] = null);

(statearr_30047_30090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (15))){
var state_30038__$1 = state_30038;
var statearr_30048_30091 = state_30038__$1;
(statearr_30048_30091[(2)] = null);

(statearr_30048_30091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (21))){
var inst_29990 = (state_30038[(10)]);
var inst_29982 = inst_29990;
var state_30038__$1 = (function (){var statearr_30049 = state_30038;
(statearr_30049[(7)] = inst_29982);

return statearr_30049;
})();
var statearr_30050_30092 = state_30038__$1;
(statearr_30050_30092[(2)] = null);

(statearr_30050_30092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (13))){
var inst_30034 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
var statearr_30051_30093 = state_30038__$1;
(statearr_30051_30093[(2)] = inst_30034);

(statearr_30051_30093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (22))){
var inst_30032 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
var statearr_30052_30094 = state_30038__$1;
(statearr_30052_30094[(2)] = inst_30032);

(statearr_30052_30094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (6))){
var inst_30036 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30038__$1,inst_30036);
} else {
if((state_val_30039 === (25))){
var state_30038__$1 = state_30038;
var statearr_30053_30095 = state_30038__$1;
(statearr_30053_30095[(2)] = null);

(statearr_30053_30095[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (17))){
var inst_30012 = (state_30038[(14)]);
var state_30038__$1 = state_30038;
var statearr_30054_30096 = state_30038__$1;
(statearr_30054_30096[(2)] = inst_30012);

(statearr_30054_30096[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (3))){
var inst_29972 = (state_30038[(9)]);
var state_30038__$1 = state_30038;
var statearr_30055_30097 = state_30038__$1;
(statearr_30055_30097[(2)] = inst_29972);

(statearr_30055_30097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (12))){
var inst_30012 = (state_30038[(14)]);
var inst_29998 = (state_30038[(15)]);
var inst_29993 = (state_30038[(16)]);
var inst_30012__$1 = inst_29993.call(null,inst_29998);
var state_30038__$1 = (function (){var statearr_30056 = state_30038;
(statearr_30056[(14)] = inst_30012__$1);

return statearr_30056;
})();
if(cljs.core.truth_(inst_30012__$1)){
var statearr_30057_30098 = state_30038__$1;
(statearr_30057_30098[(1)] = (17));

} else {
var statearr_30058_30099 = state_30038__$1;
(statearr_30058_30099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (2))){
var inst_29972 = (state_30038[(9)]);
var inst_29975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29972);
var state_30038__$1 = state_30038;
var statearr_30059_30100 = state_30038__$1;
(statearr_30059_30100[(2)] = inst_29975);

(statearr_30059_30100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (23))){
var inst_30023 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
if(cljs.core.truth_(inst_30023)){
var statearr_30060_30101 = state_30038__$1;
(statearr_30060_30101[(1)] = (24));

} else {
var statearr_30061_30102 = state_30038__$1;
(statearr_30061_30102[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (19))){
var inst_30020 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
if(cljs.core.truth_(inst_30020)){
var statearr_30062_30103 = state_30038__$1;
(statearr_30062_30103[(1)] = (20));

} else {
var statearr_30063_30104 = state_30038__$1;
(statearr_30063_30104[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (11))){
var inst_29997 = (state_30038[(8)]);
var inst_30003 = (inst_29997 == null);
var state_30038__$1 = state_30038;
if(cljs.core.truth_(inst_30003)){
var statearr_30064_30105 = state_30038__$1;
(statearr_30064_30105[(1)] = (14));

} else {
var statearr_30065_30106 = state_30038__$1;
(statearr_30065_30106[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (9))){
var inst_29990 = (state_30038[(10)]);
var inst_29990__$1 = (state_30038[(2)]);
var inst_29991 = cljs.core.get.call(null,inst_29990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29992 = cljs.core.get.call(null,inst_29990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29993 = cljs.core.get.call(null,inst_29990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30038__$1 = (function (){var statearr_30066 = state_30038;
(statearr_30066[(17)] = inst_29992);

(statearr_30066[(16)] = inst_29993);

(statearr_30066[(10)] = inst_29990__$1);

return statearr_30066;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30038__$1,(10),inst_29991);
} else {
if((state_val_30039 === (5))){
var inst_29982 = (state_30038[(7)]);
var inst_29985 = cljs.core.seq_QMARK_.call(null,inst_29982);
var state_30038__$1 = state_30038;
if(inst_29985){
var statearr_30067_30107 = state_30038__$1;
(statearr_30067_30107[(1)] = (7));

} else {
var statearr_30068_30108 = state_30038__$1;
(statearr_30068_30108[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (14))){
var inst_29998 = (state_30038[(15)]);
var inst_30005 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29998);
var state_30038__$1 = state_30038;
var statearr_30069_30109 = state_30038__$1;
(statearr_30069_30109[(2)] = inst_30005);

(statearr_30069_30109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (26))){
var inst_30028 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
var statearr_30070_30110 = state_30038__$1;
(statearr_30070_30110[(2)] = inst_30028);

(statearr_30070_30110[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (16))){
var inst_30008 = (state_30038[(2)]);
var inst_30009 = calc_state.call(null);
var inst_29982 = inst_30009;
var state_30038__$1 = (function (){var statearr_30071 = state_30038;
(statearr_30071[(7)] = inst_29982);

(statearr_30071[(18)] = inst_30008);

return statearr_30071;
})();
var statearr_30072_30111 = state_30038__$1;
(statearr_30072_30111[(2)] = null);

(statearr_30072_30111[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (10))){
var inst_29998 = (state_30038[(15)]);
var inst_29997 = (state_30038[(8)]);
var inst_29996 = (state_30038[(2)]);
var inst_29997__$1 = cljs.core.nth.call(null,inst_29996,(0),null);
var inst_29998__$1 = cljs.core.nth.call(null,inst_29996,(1),null);
var inst_29999 = (inst_29997__$1 == null);
var inst_30000 = cljs.core._EQ_.call(null,inst_29998__$1,change);
var inst_30001 = (inst_29999) || (inst_30000);
var state_30038__$1 = (function (){var statearr_30073 = state_30038;
(statearr_30073[(15)] = inst_29998__$1);

(statearr_30073[(8)] = inst_29997__$1);

return statearr_30073;
})();
if(cljs.core.truth_(inst_30001)){
var statearr_30074_30112 = state_30038__$1;
(statearr_30074_30112[(1)] = (11));

} else {
var statearr_30075_30113 = state_30038__$1;
(statearr_30075_30113[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (18))){
var inst_29992 = (state_30038[(17)]);
var inst_29998 = (state_30038[(15)]);
var inst_29993 = (state_30038[(16)]);
var inst_30015 = cljs.core.empty_QMARK_.call(null,inst_29993);
var inst_30016 = inst_29992.call(null,inst_29998);
var inst_30017 = cljs.core.not.call(null,inst_30016);
var inst_30018 = (inst_30015) && (inst_30017);
var state_30038__$1 = state_30038;
var statearr_30076_30114 = state_30038__$1;
(statearr_30076_30114[(2)] = inst_30018);

(statearr_30076_30114[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (8))){
var inst_29982 = (state_30038[(7)]);
var state_30038__$1 = state_30038;
var statearr_30077_30115 = state_30038__$1;
(statearr_30077_30115[(2)] = inst_29982);

(statearr_30077_30115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23196__auto__,c__23258__auto___30085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23197__auto__ = null;
var cljs$core$async$mix_$_state_machine__23197__auto____0 = (function (){
var statearr_30081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30081[(0)] = cljs$core$async$mix_$_state_machine__23197__auto__);

(statearr_30081[(1)] = (1));

return statearr_30081;
});
var cljs$core$async$mix_$_state_machine__23197__auto____1 = (function (state_30038){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30082){if((e30082 instanceof Object)){
var ex__23200__auto__ = e30082;
var statearr_30083_30116 = state_30038;
(statearr_30083_30116[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30117 = state_30038;
state_30038 = G__30117;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23197__auto__ = function(state_30038){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23197__auto____1.call(this,state_30038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23197__auto____0;
cljs$core$async$mix_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23197__auto____1;
return cljs$core$async$mix_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23260__auto__ = (function (){var statearr_30084 = f__23259__auto__.call(null);
(statearr_30084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30085);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj30119 = {};
return obj30119;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30121 = arguments.length;
switch (G__30121) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__30125 = arguments.length;
switch (G__30125) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18116__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18116__auto__,mults){
return (function (p1__30123_SHARP_){
if(cljs.core.truth_(p1__30123_SHARP_.call(null,topic))){
return p1__30123_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30123_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30126 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30126 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta30127){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta30127 = meta30127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30126.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30126.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30126.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30126.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30126.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30126.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30126.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30128){
var self__ = this;
var _30128__$1 = this;
return self__.meta30127;
});})(mults,ensure_mult))
;

cljs.core.async.t30126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30128,meta30127__$1){
var self__ = this;
var _30128__$1 = this;
return (new cljs.core.async.t30126(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta30127__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30126.cljs$lang$type = true;

cljs.core.async.t30126.cljs$lang$ctorStr = "cljs.core.async/t30126";

cljs.core.async.t30126.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30126");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30126 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30126(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30127){
return (new cljs.core.async.t30126(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30127));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30126(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23258__auto___30249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30249,mults,ensure_mult,p){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30249,mults,ensure_mult,p){
return (function (state_30200){
var state_val_30201 = (state_30200[(1)]);
if((state_val_30201 === (7))){
var inst_30196 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30202_30250 = state_30200__$1;
(statearr_30202_30250[(2)] = inst_30196);

(statearr_30202_30250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (20))){
var state_30200__$1 = state_30200;
var statearr_30203_30251 = state_30200__$1;
(statearr_30203_30251[(2)] = null);

(statearr_30203_30251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (1))){
var state_30200__$1 = state_30200;
var statearr_30204_30252 = state_30200__$1;
(statearr_30204_30252[(2)] = null);

(statearr_30204_30252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (24))){
var inst_30179 = (state_30200[(7)]);
var inst_30188 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30179);
var state_30200__$1 = state_30200;
var statearr_30205_30253 = state_30200__$1;
(statearr_30205_30253[(2)] = inst_30188);

(statearr_30205_30253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (4))){
var inst_30131 = (state_30200[(8)]);
var inst_30131__$1 = (state_30200[(2)]);
var inst_30132 = (inst_30131__$1 == null);
var state_30200__$1 = (function (){var statearr_30206 = state_30200;
(statearr_30206[(8)] = inst_30131__$1);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30132)){
var statearr_30207_30254 = state_30200__$1;
(statearr_30207_30254[(1)] = (5));

} else {
var statearr_30208_30255 = state_30200__$1;
(statearr_30208_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (15))){
var inst_30173 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30209_30256 = state_30200__$1;
(statearr_30209_30256[(2)] = inst_30173);

(statearr_30209_30256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (21))){
var inst_30193 = (state_30200[(2)]);
var state_30200__$1 = (function (){var statearr_30210 = state_30200;
(statearr_30210[(9)] = inst_30193);

return statearr_30210;
})();
var statearr_30211_30257 = state_30200__$1;
(statearr_30211_30257[(2)] = null);

(statearr_30211_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (13))){
var inst_30155 = (state_30200[(10)]);
var inst_30157 = cljs.core.chunked_seq_QMARK_.call(null,inst_30155);
var state_30200__$1 = state_30200;
if(inst_30157){
var statearr_30212_30258 = state_30200__$1;
(statearr_30212_30258[(1)] = (16));

} else {
var statearr_30213_30259 = state_30200__$1;
(statearr_30213_30259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (22))){
var inst_30185 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
if(cljs.core.truth_(inst_30185)){
var statearr_30214_30260 = state_30200__$1;
(statearr_30214_30260[(1)] = (23));

} else {
var statearr_30215_30261 = state_30200__$1;
(statearr_30215_30261[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (6))){
var inst_30131 = (state_30200[(8)]);
var inst_30181 = (state_30200[(11)]);
var inst_30179 = (state_30200[(7)]);
var inst_30179__$1 = topic_fn.call(null,inst_30131);
var inst_30180 = cljs.core.deref.call(null,mults);
var inst_30181__$1 = cljs.core.get.call(null,inst_30180,inst_30179__$1);
var state_30200__$1 = (function (){var statearr_30216 = state_30200;
(statearr_30216[(11)] = inst_30181__$1);

(statearr_30216[(7)] = inst_30179__$1);

return statearr_30216;
})();
if(cljs.core.truth_(inst_30181__$1)){
var statearr_30217_30262 = state_30200__$1;
(statearr_30217_30262[(1)] = (19));

} else {
var statearr_30218_30263 = state_30200__$1;
(statearr_30218_30263[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (25))){
var inst_30190 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30219_30264 = state_30200__$1;
(statearr_30219_30264[(2)] = inst_30190);

(statearr_30219_30264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (17))){
var inst_30155 = (state_30200[(10)]);
var inst_30164 = cljs.core.first.call(null,inst_30155);
var inst_30165 = cljs.core.async.muxch_STAR_.call(null,inst_30164);
var inst_30166 = cljs.core.async.close_BANG_.call(null,inst_30165);
var inst_30167 = cljs.core.next.call(null,inst_30155);
var inst_30141 = inst_30167;
var inst_30142 = null;
var inst_30143 = (0);
var inst_30144 = (0);
var state_30200__$1 = (function (){var statearr_30220 = state_30200;
(statearr_30220[(12)] = inst_30142);

(statearr_30220[(13)] = inst_30144);

(statearr_30220[(14)] = inst_30141);

(statearr_30220[(15)] = inst_30143);

(statearr_30220[(16)] = inst_30166);

return statearr_30220;
})();
var statearr_30221_30265 = state_30200__$1;
(statearr_30221_30265[(2)] = null);

(statearr_30221_30265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (3))){
var inst_30198 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30200__$1,inst_30198);
} else {
if((state_val_30201 === (12))){
var inst_30175 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30222_30266 = state_30200__$1;
(statearr_30222_30266[(2)] = inst_30175);

(statearr_30222_30266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (2))){
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30200__$1,(4),ch);
} else {
if((state_val_30201 === (23))){
var state_30200__$1 = state_30200;
var statearr_30223_30267 = state_30200__$1;
(statearr_30223_30267[(2)] = null);

(statearr_30223_30267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (19))){
var inst_30131 = (state_30200[(8)]);
var inst_30181 = (state_30200[(11)]);
var inst_30183 = cljs.core.async.muxch_STAR_.call(null,inst_30181);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30200__$1,(22),inst_30183,inst_30131);
} else {
if((state_val_30201 === (11))){
var inst_30141 = (state_30200[(14)]);
var inst_30155 = (state_30200[(10)]);
var inst_30155__$1 = cljs.core.seq.call(null,inst_30141);
var state_30200__$1 = (function (){var statearr_30224 = state_30200;
(statearr_30224[(10)] = inst_30155__$1);

return statearr_30224;
})();
if(inst_30155__$1){
var statearr_30225_30268 = state_30200__$1;
(statearr_30225_30268[(1)] = (13));

} else {
var statearr_30226_30269 = state_30200__$1;
(statearr_30226_30269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (9))){
var inst_30177 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30227_30270 = state_30200__$1;
(statearr_30227_30270[(2)] = inst_30177);

(statearr_30227_30270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (5))){
var inst_30138 = cljs.core.deref.call(null,mults);
var inst_30139 = cljs.core.vals.call(null,inst_30138);
var inst_30140 = cljs.core.seq.call(null,inst_30139);
var inst_30141 = inst_30140;
var inst_30142 = null;
var inst_30143 = (0);
var inst_30144 = (0);
var state_30200__$1 = (function (){var statearr_30228 = state_30200;
(statearr_30228[(12)] = inst_30142);

(statearr_30228[(13)] = inst_30144);

(statearr_30228[(14)] = inst_30141);

(statearr_30228[(15)] = inst_30143);

return statearr_30228;
})();
var statearr_30229_30271 = state_30200__$1;
(statearr_30229_30271[(2)] = null);

(statearr_30229_30271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (14))){
var state_30200__$1 = state_30200;
var statearr_30233_30272 = state_30200__$1;
(statearr_30233_30272[(2)] = null);

(statearr_30233_30272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (16))){
var inst_30155 = (state_30200[(10)]);
var inst_30159 = cljs.core.chunk_first.call(null,inst_30155);
var inst_30160 = cljs.core.chunk_rest.call(null,inst_30155);
var inst_30161 = cljs.core.count.call(null,inst_30159);
var inst_30141 = inst_30160;
var inst_30142 = inst_30159;
var inst_30143 = inst_30161;
var inst_30144 = (0);
var state_30200__$1 = (function (){var statearr_30234 = state_30200;
(statearr_30234[(12)] = inst_30142);

(statearr_30234[(13)] = inst_30144);

(statearr_30234[(14)] = inst_30141);

(statearr_30234[(15)] = inst_30143);

return statearr_30234;
})();
var statearr_30235_30273 = state_30200__$1;
(statearr_30235_30273[(2)] = null);

(statearr_30235_30273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (10))){
var inst_30142 = (state_30200[(12)]);
var inst_30144 = (state_30200[(13)]);
var inst_30141 = (state_30200[(14)]);
var inst_30143 = (state_30200[(15)]);
var inst_30149 = cljs.core._nth.call(null,inst_30142,inst_30144);
var inst_30150 = cljs.core.async.muxch_STAR_.call(null,inst_30149);
var inst_30151 = cljs.core.async.close_BANG_.call(null,inst_30150);
var inst_30152 = (inst_30144 + (1));
var tmp30230 = inst_30142;
var tmp30231 = inst_30141;
var tmp30232 = inst_30143;
var inst_30141__$1 = tmp30231;
var inst_30142__$1 = tmp30230;
var inst_30143__$1 = tmp30232;
var inst_30144__$1 = inst_30152;
var state_30200__$1 = (function (){var statearr_30236 = state_30200;
(statearr_30236[(12)] = inst_30142__$1);

(statearr_30236[(13)] = inst_30144__$1);

(statearr_30236[(17)] = inst_30151);

(statearr_30236[(14)] = inst_30141__$1);

(statearr_30236[(15)] = inst_30143__$1);

return statearr_30236;
})();
var statearr_30237_30274 = state_30200__$1;
(statearr_30237_30274[(2)] = null);

(statearr_30237_30274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (18))){
var inst_30170 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30238_30275 = state_30200__$1;
(statearr_30238_30275[(2)] = inst_30170);

(statearr_30238_30275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (8))){
var inst_30144 = (state_30200[(13)]);
var inst_30143 = (state_30200[(15)]);
var inst_30146 = (inst_30144 < inst_30143);
var inst_30147 = inst_30146;
var state_30200__$1 = state_30200;
if(cljs.core.truth_(inst_30147)){
var statearr_30239_30276 = state_30200__$1;
(statearr_30239_30276[(1)] = (10));

} else {
var statearr_30240_30277 = state_30200__$1;
(statearr_30240_30277[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30249,mults,ensure_mult,p))
;
return ((function (switch__23196__auto__,c__23258__auto___30249,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30244[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30244[(1)] = (1));

return statearr_30244;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30200){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30245){if((e30245 instanceof Object)){
var ex__23200__auto__ = e30245;
var statearr_30246_30278 = state_30200;
(statearr_30246_30278[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30279 = state_30200;
state_30200 = G__30279;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30249,mults,ensure_mult,p))
})();
var state__23260__auto__ = (function (){var statearr_30247 = f__23259__auto__.call(null);
(statearr_30247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30249);

return statearr_30247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30249,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__30281 = arguments.length;
switch (G__30281) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__30284 = arguments.length;
switch (G__30284) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__30287 = arguments.length;
switch (G__30287) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23258__auto___30357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30326){
var state_val_30327 = (state_30326[(1)]);
if((state_val_30327 === (7))){
var state_30326__$1 = state_30326;
var statearr_30328_30358 = state_30326__$1;
(statearr_30328_30358[(2)] = null);

(statearr_30328_30358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (1))){
var state_30326__$1 = state_30326;
var statearr_30329_30359 = state_30326__$1;
(statearr_30329_30359[(2)] = null);

(statearr_30329_30359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (4))){
var inst_30290 = (state_30326[(7)]);
var inst_30292 = (inst_30290 < cnt);
var state_30326__$1 = state_30326;
if(cljs.core.truth_(inst_30292)){
var statearr_30330_30360 = state_30326__$1;
(statearr_30330_30360[(1)] = (6));

} else {
var statearr_30331_30361 = state_30326__$1;
(statearr_30331_30361[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (15))){
var inst_30322 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30332_30362 = state_30326__$1;
(statearr_30332_30362[(2)] = inst_30322);

(statearr_30332_30362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (13))){
var inst_30315 = cljs.core.async.close_BANG_.call(null,out);
var state_30326__$1 = state_30326;
var statearr_30333_30363 = state_30326__$1;
(statearr_30333_30363[(2)] = inst_30315);

(statearr_30333_30363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (6))){
var state_30326__$1 = state_30326;
var statearr_30334_30364 = state_30326__$1;
(statearr_30334_30364[(2)] = null);

(statearr_30334_30364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (3))){
var inst_30324 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30326__$1,inst_30324);
} else {
if((state_val_30327 === (12))){
var inst_30312 = (state_30326[(8)]);
var inst_30312__$1 = (state_30326[(2)]);
var inst_30313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30312__$1);
var state_30326__$1 = (function (){var statearr_30335 = state_30326;
(statearr_30335[(8)] = inst_30312__$1);

return statearr_30335;
})();
if(cljs.core.truth_(inst_30313)){
var statearr_30336_30365 = state_30326__$1;
(statearr_30336_30365[(1)] = (13));

} else {
var statearr_30337_30366 = state_30326__$1;
(statearr_30337_30366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (2))){
var inst_30289 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30290 = (0);
var state_30326__$1 = (function (){var statearr_30338 = state_30326;
(statearr_30338[(9)] = inst_30289);

(statearr_30338[(7)] = inst_30290);

return statearr_30338;
})();
var statearr_30339_30367 = state_30326__$1;
(statearr_30339_30367[(2)] = null);

(statearr_30339_30367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (11))){
var inst_30290 = (state_30326[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30326,(10),Object,null,(9));
var inst_30299 = chs__$1.call(null,inst_30290);
var inst_30300 = done.call(null,inst_30290);
var inst_30301 = cljs.core.async.take_BANG_.call(null,inst_30299,inst_30300);
var state_30326__$1 = state_30326;
var statearr_30340_30368 = state_30326__$1;
(statearr_30340_30368[(2)] = inst_30301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (9))){
var inst_30290 = (state_30326[(7)]);
var inst_30303 = (state_30326[(2)]);
var inst_30304 = (inst_30290 + (1));
var inst_30290__$1 = inst_30304;
var state_30326__$1 = (function (){var statearr_30341 = state_30326;
(statearr_30341[(10)] = inst_30303);

(statearr_30341[(7)] = inst_30290__$1);

return statearr_30341;
})();
var statearr_30342_30369 = state_30326__$1;
(statearr_30342_30369[(2)] = null);

(statearr_30342_30369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (5))){
var inst_30310 = (state_30326[(2)]);
var state_30326__$1 = (function (){var statearr_30343 = state_30326;
(statearr_30343[(11)] = inst_30310);

return statearr_30343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30326__$1,(12),dchan);
} else {
if((state_val_30327 === (14))){
var inst_30312 = (state_30326[(8)]);
var inst_30317 = cljs.core.apply.call(null,f,inst_30312);
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30326__$1,(16),out,inst_30317);
} else {
if((state_val_30327 === (16))){
var inst_30319 = (state_30326[(2)]);
var state_30326__$1 = (function (){var statearr_30344 = state_30326;
(statearr_30344[(12)] = inst_30319);

return statearr_30344;
})();
var statearr_30345_30370 = state_30326__$1;
(statearr_30345_30370[(2)] = null);

(statearr_30345_30370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (10))){
var inst_30294 = (state_30326[(2)]);
var inst_30295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30326__$1 = (function (){var statearr_30346 = state_30326;
(statearr_30346[(13)] = inst_30294);

return statearr_30346;
})();
var statearr_30347_30371 = state_30326__$1;
(statearr_30347_30371[(2)] = inst_30295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (8))){
var inst_30308 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30348_30372 = state_30326__$1;
(statearr_30348_30372[(2)] = inst_30308);

(statearr_30348_30372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30357,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23196__auto__,c__23258__auto___30357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30352[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30352[(1)] = (1));

return statearr_30352;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30326){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30353){if((e30353 instanceof Object)){
var ex__23200__auto__ = e30353;
var statearr_30354_30373 = state_30326;
(statearr_30354_30373[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30374 = state_30326;
state_30326 = G__30374;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30357,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23260__auto__ = (function (){var statearr_30355 = f__23259__auto__.call(null);
(statearr_30355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30357);

return statearr_30355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30357,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__30377 = arguments.length;
switch (G__30377) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23258__auto___30432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30432,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30432,out){
return (function (state_30407){
var state_val_30408 = (state_30407[(1)]);
if((state_val_30408 === (7))){
var inst_30387 = (state_30407[(7)]);
var inst_30386 = (state_30407[(8)]);
var inst_30386__$1 = (state_30407[(2)]);
var inst_30387__$1 = cljs.core.nth.call(null,inst_30386__$1,(0),null);
var inst_30388 = cljs.core.nth.call(null,inst_30386__$1,(1),null);
var inst_30389 = (inst_30387__$1 == null);
var state_30407__$1 = (function (){var statearr_30409 = state_30407;
(statearr_30409[(7)] = inst_30387__$1);

(statearr_30409[(9)] = inst_30388);

(statearr_30409[(8)] = inst_30386__$1);

return statearr_30409;
})();
if(cljs.core.truth_(inst_30389)){
var statearr_30410_30433 = state_30407__$1;
(statearr_30410_30433[(1)] = (8));

} else {
var statearr_30411_30434 = state_30407__$1;
(statearr_30411_30434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (1))){
var inst_30378 = cljs.core.vec.call(null,chs);
var inst_30379 = inst_30378;
var state_30407__$1 = (function (){var statearr_30412 = state_30407;
(statearr_30412[(10)] = inst_30379);

return statearr_30412;
})();
var statearr_30413_30435 = state_30407__$1;
(statearr_30413_30435[(2)] = null);

(statearr_30413_30435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (4))){
var inst_30379 = (state_30407[(10)]);
var state_30407__$1 = state_30407;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30407__$1,(7),inst_30379);
} else {
if((state_val_30408 === (6))){
var inst_30403 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30414_30436 = state_30407__$1;
(statearr_30414_30436[(2)] = inst_30403);

(statearr_30414_30436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (3))){
var inst_30405 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30407__$1,inst_30405);
} else {
if((state_val_30408 === (2))){
var inst_30379 = (state_30407[(10)]);
var inst_30381 = cljs.core.count.call(null,inst_30379);
var inst_30382 = (inst_30381 > (0));
var state_30407__$1 = state_30407;
if(cljs.core.truth_(inst_30382)){
var statearr_30416_30437 = state_30407__$1;
(statearr_30416_30437[(1)] = (4));

} else {
var statearr_30417_30438 = state_30407__$1;
(statearr_30417_30438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (11))){
var inst_30379 = (state_30407[(10)]);
var inst_30396 = (state_30407[(2)]);
var tmp30415 = inst_30379;
var inst_30379__$1 = tmp30415;
var state_30407__$1 = (function (){var statearr_30418 = state_30407;
(statearr_30418[(10)] = inst_30379__$1);

(statearr_30418[(11)] = inst_30396);

return statearr_30418;
})();
var statearr_30419_30439 = state_30407__$1;
(statearr_30419_30439[(2)] = null);

(statearr_30419_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (9))){
var inst_30387 = (state_30407[(7)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30407__$1,(11),out,inst_30387);
} else {
if((state_val_30408 === (5))){
var inst_30401 = cljs.core.async.close_BANG_.call(null,out);
var state_30407__$1 = state_30407;
var statearr_30420_30440 = state_30407__$1;
(statearr_30420_30440[(2)] = inst_30401);

(statearr_30420_30440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (10))){
var inst_30399 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30421_30441 = state_30407__$1;
(statearr_30421_30441[(2)] = inst_30399);

(statearr_30421_30441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (8))){
var inst_30387 = (state_30407[(7)]);
var inst_30388 = (state_30407[(9)]);
var inst_30379 = (state_30407[(10)]);
var inst_30386 = (state_30407[(8)]);
var inst_30391 = (function (){var c = inst_30388;
var v = inst_30387;
var vec__30384 = inst_30386;
var cs = inst_30379;
return ((function (c,v,vec__30384,cs,inst_30387,inst_30388,inst_30379,inst_30386,state_val_30408,c__23258__auto___30432,out){
return (function (p1__30375_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30375_SHARP_);
});
;})(c,v,vec__30384,cs,inst_30387,inst_30388,inst_30379,inst_30386,state_val_30408,c__23258__auto___30432,out))
})();
var inst_30392 = cljs.core.filterv.call(null,inst_30391,inst_30379);
var inst_30379__$1 = inst_30392;
var state_30407__$1 = (function (){var statearr_30422 = state_30407;
(statearr_30422[(10)] = inst_30379__$1);

return statearr_30422;
})();
var statearr_30423_30442 = state_30407__$1;
(statearr_30423_30442[(2)] = null);

(statearr_30423_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30432,out))
;
return ((function (switch__23196__auto__,c__23258__auto___30432,out){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30427[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30427[(1)] = (1));

return statearr_30427;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30407){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30428){if((e30428 instanceof Object)){
var ex__23200__auto__ = e30428;
var statearr_30429_30443 = state_30407;
(statearr_30429_30443[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30444 = state_30407;
state_30407 = G__30444;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30432,out))
})();
var state__23260__auto__ = (function (){var statearr_30430 = f__23259__auto__.call(null);
(statearr_30430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30432);

return statearr_30430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30432,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__30446 = arguments.length;
switch (G__30446) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23258__auto___30494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30494,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30494,out){
return (function (state_30470){
var state_val_30471 = (state_30470[(1)]);
if((state_val_30471 === (7))){
var inst_30452 = (state_30470[(7)]);
var inst_30452__$1 = (state_30470[(2)]);
var inst_30453 = (inst_30452__$1 == null);
var inst_30454 = cljs.core.not.call(null,inst_30453);
var state_30470__$1 = (function (){var statearr_30472 = state_30470;
(statearr_30472[(7)] = inst_30452__$1);

return statearr_30472;
})();
if(inst_30454){
var statearr_30473_30495 = state_30470__$1;
(statearr_30473_30495[(1)] = (8));

} else {
var statearr_30474_30496 = state_30470__$1;
(statearr_30474_30496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (1))){
var inst_30447 = (0);
var state_30470__$1 = (function (){var statearr_30475 = state_30470;
(statearr_30475[(8)] = inst_30447);

return statearr_30475;
})();
var statearr_30476_30497 = state_30470__$1;
(statearr_30476_30497[(2)] = null);

(statearr_30476_30497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (4))){
var state_30470__$1 = state_30470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30470__$1,(7),ch);
} else {
if((state_val_30471 === (6))){
var inst_30465 = (state_30470[(2)]);
var state_30470__$1 = state_30470;
var statearr_30477_30498 = state_30470__$1;
(statearr_30477_30498[(2)] = inst_30465);

(statearr_30477_30498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (3))){
var inst_30467 = (state_30470[(2)]);
var inst_30468 = cljs.core.async.close_BANG_.call(null,out);
var state_30470__$1 = (function (){var statearr_30478 = state_30470;
(statearr_30478[(9)] = inst_30467);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30470__$1,inst_30468);
} else {
if((state_val_30471 === (2))){
var inst_30447 = (state_30470[(8)]);
var inst_30449 = (inst_30447 < n);
var state_30470__$1 = state_30470;
if(cljs.core.truth_(inst_30449)){
var statearr_30479_30499 = state_30470__$1;
(statearr_30479_30499[(1)] = (4));

} else {
var statearr_30480_30500 = state_30470__$1;
(statearr_30480_30500[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (11))){
var inst_30447 = (state_30470[(8)]);
var inst_30457 = (state_30470[(2)]);
var inst_30458 = (inst_30447 + (1));
var inst_30447__$1 = inst_30458;
var state_30470__$1 = (function (){var statearr_30481 = state_30470;
(statearr_30481[(8)] = inst_30447__$1);

(statearr_30481[(10)] = inst_30457);

return statearr_30481;
})();
var statearr_30482_30501 = state_30470__$1;
(statearr_30482_30501[(2)] = null);

(statearr_30482_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (9))){
var state_30470__$1 = state_30470;
var statearr_30483_30502 = state_30470__$1;
(statearr_30483_30502[(2)] = null);

(statearr_30483_30502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (5))){
var state_30470__$1 = state_30470;
var statearr_30484_30503 = state_30470__$1;
(statearr_30484_30503[(2)] = null);

(statearr_30484_30503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (10))){
var inst_30462 = (state_30470[(2)]);
var state_30470__$1 = state_30470;
var statearr_30485_30504 = state_30470__$1;
(statearr_30485_30504[(2)] = inst_30462);

(statearr_30485_30504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (8))){
var inst_30452 = (state_30470[(7)]);
var state_30470__$1 = state_30470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30470__$1,(11),out,inst_30452);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30494,out))
;
return ((function (switch__23196__auto__,c__23258__auto___30494,out){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30489[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30489[(1)] = (1));

return statearr_30489;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30470){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30490){if((e30490 instanceof Object)){
var ex__23200__auto__ = e30490;
var statearr_30491_30505 = state_30470;
(statearr_30491_30505[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30506 = state_30470;
state_30470 = G__30506;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30494,out))
})();
var state__23260__auto__ = (function (){var statearr_30492 = f__23259__auto__.call(null);
(statearr_30492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30494);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30494,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30514 = (function (ch,f,map_LT_,meta30515){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30515 = meta30515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30517 = (function (fn1,_,meta30515,map_LT_,f,ch,meta30518){
this.fn1 = fn1;
this._ = _;
this.meta30515 = meta30515;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30518 = meta30518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30517.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30507_SHARP_){
return f1.call(null,(((p1__30507_SHARP_ == null))?null:self__.f.call(null,p1__30507_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30519){
var self__ = this;
var _30519__$1 = this;
return self__.meta30518;
});})(___$1))
;

cljs.core.async.t30517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30519,meta30518__$1){
var self__ = this;
var _30519__$1 = this;
return (new cljs.core.async.t30517(self__.fn1,self__._,self__.meta30515,self__.map_LT_,self__.f,self__.ch,meta30518__$1));
});})(___$1))
;

cljs.core.async.t30517.cljs$lang$type = true;

cljs.core.async.t30517.cljs$lang$ctorStr = "cljs.core.async/t30517";

cljs.core.async.t30517.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30517");
});})(___$1))
;

cljs.core.async.__GT_t30517 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30517(fn1__$1,___$2,meta30515__$1,map_LT___$1,f__$1,ch__$1,meta30518){
return (new cljs.core.async.t30517(fn1__$1,___$2,meta30515__$1,map_LT___$1,f__$1,ch__$1,meta30518));
});})(___$1))
;

}

return (new cljs.core.async.t30517(fn1,___$1,self__.meta30515,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18104__auto__ = ret;
if(cljs.core.truth_(and__18104__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18104__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30516){
var self__ = this;
var _30516__$1 = this;
return self__.meta30515;
});

cljs.core.async.t30514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30516,meta30515__$1){
var self__ = this;
var _30516__$1 = this;
return (new cljs.core.async.t30514(self__.ch,self__.f,self__.map_LT_,meta30515__$1));
});

cljs.core.async.t30514.cljs$lang$type = true;

cljs.core.async.t30514.cljs$lang$ctorStr = "cljs.core.async/t30514";

cljs.core.async.t30514.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30514");
});

cljs.core.async.__GT_t30514 = (function cljs$core$async$map_LT__$___GT_t30514(ch__$1,f__$1,map_LT___$1,meta30515){
return (new cljs.core.async.t30514(ch__$1,f__$1,map_LT___$1,meta30515));
});

}

return (new cljs.core.async.t30514(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30523 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30523 = (function (ch,f,map_GT_,meta30524){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30524 = meta30524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30525){
var self__ = this;
var _30525__$1 = this;
return self__.meta30524;
});

cljs.core.async.t30523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30525,meta30524__$1){
var self__ = this;
var _30525__$1 = this;
return (new cljs.core.async.t30523(self__.ch,self__.f,self__.map_GT_,meta30524__$1));
});

cljs.core.async.t30523.cljs$lang$type = true;

cljs.core.async.t30523.cljs$lang$ctorStr = "cljs.core.async/t30523";

cljs.core.async.t30523.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30523");
});

cljs.core.async.__GT_t30523 = (function cljs$core$async$map_GT__$___GT_t30523(ch__$1,f__$1,map_GT___$1,meta30524){
return (new cljs.core.async.t30523(ch__$1,f__$1,map_GT___$1,meta30524));
});

}

return (new cljs.core.async.t30523(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30529 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30529 = (function (ch,p,filter_GT_,meta30530){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30530 = meta30530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30529.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30531){
var self__ = this;
var _30531__$1 = this;
return self__.meta30530;
});

cljs.core.async.t30529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30531,meta30530__$1){
var self__ = this;
var _30531__$1 = this;
return (new cljs.core.async.t30529(self__.ch,self__.p,self__.filter_GT_,meta30530__$1));
});

cljs.core.async.t30529.cljs$lang$type = true;

cljs.core.async.t30529.cljs$lang$ctorStr = "cljs.core.async/t30529";

cljs.core.async.t30529.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30529");
});

cljs.core.async.__GT_t30529 = (function cljs$core$async$filter_GT__$___GT_t30529(ch__$1,p__$1,filter_GT___$1,meta30530){
return (new cljs.core.async.t30529(ch__$1,p__$1,filter_GT___$1,meta30530));
});

}

return (new cljs.core.async.t30529(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__30533 = arguments.length;
switch (G__30533) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23258__auto___30576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30576,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30576,out){
return (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (7))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30556_30577 = state_30554__$1;
(statearr_30556_30577[(2)] = inst_30550);

(statearr_30556_30577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (1))){
var state_30554__$1 = state_30554;
var statearr_30557_30578 = state_30554__$1;
(statearr_30557_30578[(2)] = null);

(statearr_30557_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (4))){
var inst_30536 = (state_30554[(7)]);
var inst_30536__$1 = (state_30554[(2)]);
var inst_30537 = (inst_30536__$1 == null);
var state_30554__$1 = (function (){var statearr_30558 = state_30554;
(statearr_30558[(7)] = inst_30536__$1);

return statearr_30558;
})();
if(cljs.core.truth_(inst_30537)){
var statearr_30559_30579 = state_30554__$1;
(statearr_30559_30579[(1)] = (5));

} else {
var statearr_30560_30580 = state_30554__$1;
(statearr_30560_30580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (6))){
var inst_30536 = (state_30554[(7)]);
var inst_30541 = p.call(null,inst_30536);
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30541)){
var statearr_30561_30581 = state_30554__$1;
(statearr_30561_30581[(1)] = (8));

} else {
var statearr_30562_30582 = state_30554__$1;
(statearr_30562_30582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(4),ch);
} else {
if((state_val_30555 === (11))){
var inst_30544 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30563_30583 = state_30554__$1;
(statearr_30563_30583[(2)] = inst_30544);

(statearr_30563_30583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (9))){
var state_30554__$1 = state_30554;
var statearr_30564_30584 = state_30554__$1;
(statearr_30564_30584[(2)] = null);

(statearr_30564_30584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (5))){
var inst_30539 = cljs.core.async.close_BANG_.call(null,out);
var state_30554__$1 = state_30554;
var statearr_30565_30585 = state_30554__$1;
(statearr_30565_30585[(2)] = inst_30539);

(statearr_30565_30585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (10))){
var inst_30547 = (state_30554[(2)]);
var state_30554__$1 = (function (){var statearr_30566 = state_30554;
(statearr_30566[(8)] = inst_30547);

return statearr_30566;
})();
var statearr_30567_30586 = state_30554__$1;
(statearr_30567_30586[(2)] = null);

(statearr_30567_30586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (8))){
var inst_30536 = (state_30554[(7)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30554__$1,(11),out,inst_30536);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30576,out))
;
return ((function (switch__23196__auto__,c__23258__auto___30576,out){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30571 = [null,null,null,null,null,null,null,null,null];
(statearr_30571[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30571[(1)] = (1));

return statearr_30571;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30554){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30572){if((e30572 instanceof Object)){
var ex__23200__auto__ = e30572;
var statearr_30573_30587 = state_30554;
(statearr_30573_30587[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30588 = state_30554;
state_30554 = G__30588;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30576,out))
})();
var state__23260__auto__ = (function (){var statearr_30574 = f__23259__auto__.call(null);
(statearr_30574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30576);

return statearr_30574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30576,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30590 = arguments.length;
switch (G__30590) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__){
return (function (state_30757){
var state_val_30758 = (state_30757[(1)]);
if((state_val_30758 === (7))){
var inst_30753 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30759_30800 = state_30757__$1;
(statearr_30759_30800[(2)] = inst_30753);

(statearr_30759_30800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (20))){
var inst_30723 = (state_30757[(7)]);
var inst_30734 = (state_30757[(2)]);
var inst_30735 = cljs.core.next.call(null,inst_30723);
var inst_30709 = inst_30735;
var inst_30710 = null;
var inst_30711 = (0);
var inst_30712 = (0);
var state_30757__$1 = (function (){var statearr_30760 = state_30757;
(statearr_30760[(8)] = inst_30709);

(statearr_30760[(9)] = inst_30734);

(statearr_30760[(10)] = inst_30711);

(statearr_30760[(11)] = inst_30712);

(statearr_30760[(12)] = inst_30710);

return statearr_30760;
})();
var statearr_30761_30801 = state_30757__$1;
(statearr_30761_30801[(2)] = null);

(statearr_30761_30801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (1))){
var state_30757__$1 = state_30757;
var statearr_30762_30802 = state_30757__$1;
(statearr_30762_30802[(2)] = null);

(statearr_30762_30802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (4))){
var inst_30698 = (state_30757[(13)]);
var inst_30698__$1 = (state_30757[(2)]);
var inst_30699 = (inst_30698__$1 == null);
var state_30757__$1 = (function (){var statearr_30763 = state_30757;
(statearr_30763[(13)] = inst_30698__$1);

return statearr_30763;
})();
if(cljs.core.truth_(inst_30699)){
var statearr_30764_30803 = state_30757__$1;
(statearr_30764_30803[(1)] = (5));

} else {
var statearr_30765_30804 = state_30757__$1;
(statearr_30765_30804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (15))){
var state_30757__$1 = state_30757;
var statearr_30769_30805 = state_30757__$1;
(statearr_30769_30805[(2)] = null);

(statearr_30769_30805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (21))){
var state_30757__$1 = state_30757;
var statearr_30770_30806 = state_30757__$1;
(statearr_30770_30806[(2)] = null);

(statearr_30770_30806[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (13))){
var inst_30709 = (state_30757[(8)]);
var inst_30711 = (state_30757[(10)]);
var inst_30712 = (state_30757[(11)]);
var inst_30710 = (state_30757[(12)]);
var inst_30719 = (state_30757[(2)]);
var inst_30720 = (inst_30712 + (1));
var tmp30766 = inst_30709;
var tmp30767 = inst_30711;
var tmp30768 = inst_30710;
var inst_30709__$1 = tmp30766;
var inst_30710__$1 = tmp30768;
var inst_30711__$1 = tmp30767;
var inst_30712__$1 = inst_30720;
var state_30757__$1 = (function (){var statearr_30771 = state_30757;
(statearr_30771[(8)] = inst_30709__$1);

(statearr_30771[(10)] = inst_30711__$1);

(statearr_30771[(11)] = inst_30712__$1);

(statearr_30771[(14)] = inst_30719);

(statearr_30771[(12)] = inst_30710__$1);

return statearr_30771;
})();
var statearr_30772_30807 = state_30757__$1;
(statearr_30772_30807[(2)] = null);

(statearr_30772_30807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (22))){
var state_30757__$1 = state_30757;
var statearr_30773_30808 = state_30757__$1;
(statearr_30773_30808[(2)] = null);

(statearr_30773_30808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (6))){
var inst_30698 = (state_30757[(13)]);
var inst_30707 = f.call(null,inst_30698);
var inst_30708 = cljs.core.seq.call(null,inst_30707);
var inst_30709 = inst_30708;
var inst_30710 = null;
var inst_30711 = (0);
var inst_30712 = (0);
var state_30757__$1 = (function (){var statearr_30774 = state_30757;
(statearr_30774[(8)] = inst_30709);

(statearr_30774[(10)] = inst_30711);

(statearr_30774[(11)] = inst_30712);

(statearr_30774[(12)] = inst_30710);

return statearr_30774;
})();
var statearr_30775_30809 = state_30757__$1;
(statearr_30775_30809[(2)] = null);

(statearr_30775_30809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (17))){
var inst_30723 = (state_30757[(7)]);
var inst_30727 = cljs.core.chunk_first.call(null,inst_30723);
var inst_30728 = cljs.core.chunk_rest.call(null,inst_30723);
var inst_30729 = cljs.core.count.call(null,inst_30727);
var inst_30709 = inst_30728;
var inst_30710 = inst_30727;
var inst_30711 = inst_30729;
var inst_30712 = (0);
var state_30757__$1 = (function (){var statearr_30776 = state_30757;
(statearr_30776[(8)] = inst_30709);

(statearr_30776[(10)] = inst_30711);

(statearr_30776[(11)] = inst_30712);

(statearr_30776[(12)] = inst_30710);

return statearr_30776;
})();
var statearr_30777_30810 = state_30757__$1;
(statearr_30777_30810[(2)] = null);

(statearr_30777_30810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (3))){
var inst_30755 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30757__$1,inst_30755);
} else {
if((state_val_30758 === (12))){
var inst_30743 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30778_30811 = state_30757__$1;
(statearr_30778_30811[(2)] = inst_30743);

(statearr_30778_30811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (2))){
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30757__$1,(4),in$);
} else {
if((state_val_30758 === (23))){
var inst_30751 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30779_30812 = state_30757__$1;
(statearr_30779_30812[(2)] = inst_30751);

(statearr_30779_30812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (19))){
var inst_30738 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30780_30813 = state_30757__$1;
(statearr_30780_30813[(2)] = inst_30738);

(statearr_30780_30813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (11))){
var inst_30709 = (state_30757[(8)]);
var inst_30723 = (state_30757[(7)]);
var inst_30723__$1 = cljs.core.seq.call(null,inst_30709);
var state_30757__$1 = (function (){var statearr_30781 = state_30757;
(statearr_30781[(7)] = inst_30723__$1);

return statearr_30781;
})();
if(inst_30723__$1){
var statearr_30782_30814 = state_30757__$1;
(statearr_30782_30814[(1)] = (14));

} else {
var statearr_30783_30815 = state_30757__$1;
(statearr_30783_30815[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (9))){
var inst_30745 = (state_30757[(2)]);
var inst_30746 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30757__$1 = (function (){var statearr_30784 = state_30757;
(statearr_30784[(15)] = inst_30745);

return statearr_30784;
})();
if(cljs.core.truth_(inst_30746)){
var statearr_30785_30816 = state_30757__$1;
(statearr_30785_30816[(1)] = (21));

} else {
var statearr_30786_30817 = state_30757__$1;
(statearr_30786_30817[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (5))){
var inst_30701 = cljs.core.async.close_BANG_.call(null,out);
var state_30757__$1 = state_30757;
var statearr_30787_30818 = state_30757__$1;
(statearr_30787_30818[(2)] = inst_30701);

(statearr_30787_30818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (14))){
var inst_30723 = (state_30757[(7)]);
var inst_30725 = cljs.core.chunked_seq_QMARK_.call(null,inst_30723);
var state_30757__$1 = state_30757;
if(inst_30725){
var statearr_30788_30819 = state_30757__$1;
(statearr_30788_30819[(1)] = (17));

} else {
var statearr_30789_30820 = state_30757__$1;
(statearr_30789_30820[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (16))){
var inst_30741 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30790_30821 = state_30757__$1;
(statearr_30790_30821[(2)] = inst_30741);

(statearr_30790_30821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (10))){
var inst_30712 = (state_30757[(11)]);
var inst_30710 = (state_30757[(12)]);
var inst_30717 = cljs.core._nth.call(null,inst_30710,inst_30712);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30757__$1,(13),out,inst_30717);
} else {
if((state_val_30758 === (18))){
var inst_30723 = (state_30757[(7)]);
var inst_30732 = cljs.core.first.call(null,inst_30723);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30757__$1,(20),out,inst_30732);
} else {
if((state_val_30758 === (8))){
var inst_30711 = (state_30757[(10)]);
var inst_30712 = (state_30757[(11)]);
var inst_30714 = (inst_30712 < inst_30711);
var inst_30715 = inst_30714;
var state_30757__$1 = state_30757;
if(cljs.core.truth_(inst_30715)){
var statearr_30791_30822 = state_30757__$1;
(statearr_30791_30822[(1)] = (10));

} else {
var statearr_30792_30823 = state_30757__$1;
(statearr_30792_30823[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto__))
;
return ((function (switch__23196__auto__,c__23258__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23197__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23197__auto____0 = (function (){
var statearr_30796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30796[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23197__auto__);

(statearr_30796[(1)] = (1));

return statearr_30796;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23197__auto____1 = (function (state_30757){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30797){if((e30797 instanceof Object)){
var ex__23200__auto__ = e30797;
var statearr_30798_30824 = state_30757;
(statearr_30798_30824[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30825 = state_30757;
state_30757 = G__30825;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23197__auto__ = function(state_30757){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23197__auto____1.call(this,state_30757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23197__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23197__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__))
})();
var state__23260__auto__ = (function (){var statearr_30799 = f__23259__auto__.call(null);
(statearr_30799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__))
);

return c__23258__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30827 = arguments.length;
switch (G__30827) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__30830 = arguments.length;
switch (G__30830) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__30833 = arguments.length;
switch (G__30833) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23258__auto___30883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30883,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30883,out){
return (function (state_30857){
var state_val_30858 = (state_30857[(1)]);
if((state_val_30858 === (7))){
var inst_30852 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30859_30884 = state_30857__$1;
(statearr_30859_30884[(2)] = inst_30852);

(statearr_30859_30884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (1))){
var inst_30834 = null;
var state_30857__$1 = (function (){var statearr_30860 = state_30857;
(statearr_30860[(7)] = inst_30834);

return statearr_30860;
})();
var statearr_30861_30885 = state_30857__$1;
(statearr_30861_30885[(2)] = null);

(statearr_30861_30885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (4))){
var inst_30837 = (state_30857[(8)]);
var inst_30837__$1 = (state_30857[(2)]);
var inst_30838 = (inst_30837__$1 == null);
var inst_30839 = cljs.core.not.call(null,inst_30838);
var state_30857__$1 = (function (){var statearr_30862 = state_30857;
(statearr_30862[(8)] = inst_30837__$1);

return statearr_30862;
})();
if(inst_30839){
var statearr_30863_30886 = state_30857__$1;
(statearr_30863_30886[(1)] = (5));

} else {
var statearr_30864_30887 = state_30857__$1;
(statearr_30864_30887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (6))){
var state_30857__$1 = state_30857;
var statearr_30865_30888 = state_30857__$1;
(statearr_30865_30888[(2)] = null);

(statearr_30865_30888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (3))){
var inst_30854 = (state_30857[(2)]);
var inst_30855 = cljs.core.async.close_BANG_.call(null,out);
var state_30857__$1 = (function (){var statearr_30866 = state_30857;
(statearr_30866[(9)] = inst_30854);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30857__$1,inst_30855);
} else {
if((state_val_30858 === (2))){
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30857__$1,(4),ch);
} else {
if((state_val_30858 === (11))){
var inst_30837 = (state_30857[(8)]);
var inst_30846 = (state_30857[(2)]);
var inst_30834 = inst_30837;
var state_30857__$1 = (function (){var statearr_30867 = state_30857;
(statearr_30867[(7)] = inst_30834);

(statearr_30867[(10)] = inst_30846);

return statearr_30867;
})();
var statearr_30868_30889 = state_30857__$1;
(statearr_30868_30889[(2)] = null);

(statearr_30868_30889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (9))){
var inst_30837 = (state_30857[(8)]);
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30857__$1,(11),out,inst_30837);
} else {
if((state_val_30858 === (5))){
var inst_30837 = (state_30857[(8)]);
var inst_30834 = (state_30857[(7)]);
var inst_30841 = cljs.core._EQ_.call(null,inst_30837,inst_30834);
var state_30857__$1 = state_30857;
if(inst_30841){
var statearr_30870_30890 = state_30857__$1;
(statearr_30870_30890[(1)] = (8));

} else {
var statearr_30871_30891 = state_30857__$1;
(statearr_30871_30891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (10))){
var inst_30849 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30872_30892 = state_30857__$1;
(statearr_30872_30892[(2)] = inst_30849);

(statearr_30872_30892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (8))){
var inst_30834 = (state_30857[(7)]);
var tmp30869 = inst_30834;
var inst_30834__$1 = tmp30869;
var state_30857__$1 = (function (){var statearr_30873 = state_30857;
(statearr_30873[(7)] = inst_30834__$1);

return statearr_30873;
})();
var statearr_30874_30893 = state_30857__$1;
(statearr_30874_30893[(2)] = null);

(statearr_30874_30893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30883,out))
;
return ((function (switch__23196__auto__,c__23258__auto___30883,out){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30878[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30878[(1)] = (1));

return statearr_30878;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30857){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30879){if((e30879 instanceof Object)){
var ex__23200__auto__ = e30879;
var statearr_30880_30894 = state_30857;
(statearr_30880_30894[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30895 = state_30857;
state_30857 = G__30895;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30883,out))
})();
var state__23260__auto__ = (function (){var statearr_30881 = f__23259__auto__.call(null);
(statearr_30881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30883);

return statearr_30881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30883,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30897 = arguments.length;
switch (G__30897) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23258__auto___30966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___30966,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___30966,out){
return (function (state_30935){
var state_val_30936 = (state_30935[(1)]);
if((state_val_30936 === (7))){
var inst_30931 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30937_30967 = state_30935__$1;
(statearr_30937_30967[(2)] = inst_30931);

(statearr_30937_30967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (1))){
var inst_30898 = (new Array(n));
var inst_30899 = inst_30898;
var inst_30900 = (0);
var state_30935__$1 = (function (){var statearr_30938 = state_30935;
(statearr_30938[(7)] = inst_30900);

(statearr_30938[(8)] = inst_30899);

return statearr_30938;
})();
var statearr_30939_30968 = state_30935__$1;
(statearr_30939_30968[(2)] = null);

(statearr_30939_30968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (4))){
var inst_30903 = (state_30935[(9)]);
var inst_30903__$1 = (state_30935[(2)]);
var inst_30904 = (inst_30903__$1 == null);
var inst_30905 = cljs.core.not.call(null,inst_30904);
var state_30935__$1 = (function (){var statearr_30940 = state_30935;
(statearr_30940[(9)] = inst_30903__$1);

return statearr_30940;
})();
if(inst_30905){
var statearr_30941_30969 = state_30935__$1;
(statearr_30941_30969[(1)] = (5));

} else {
var statearr_30942_30970 = state_30935__$1;
(statearr_30942_30970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (15))){
var inst_30925 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30943_30971 = state_30935__$1;
(statearr_30943_30971[(2)] = inst_30925);

(statearr_30943_30971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (13))){
var state_30935__$1 = state_30935;
var statearr_30944_30972 = state_30935__$1;
(statearr_30944_30972[(2)] = null);

(statearr_30944_30972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (6))){
var inst_30900 = (state_30935[(7)]);
var inst_30921 = (inst_30900 > (0));
var state_30935__$1 = state_30935;
if(cljs.core.truth_(inst_30921)){
var statearr_30945_30973 = state_30935__$1;
(statearr_30945_30973[(1)] = (12));

} else {
var statearr_30946_30974 = state_30935__$1;
(statearr_30946_30974[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (3))){
var inst_30933 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30935__$1,inst_30933);
} else {
if((state_val_30936 === (12))){
var inst_30899 = (state_30935[(8)]);
var inst_30923 = cljs.core.vec.call(null,inst_30899);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30935__$1,(15),out,inst_30923);
} else {
if((state_val_30936 === (2))){
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30935__$1,(4),ch);
} else {
if((state_val_30936 === (11))){
var inst_30915 = (state_30935[(2)]);
var inst_30916 = (new Array(n));
var inst_30899 = inst_30916;
var inst_30900 = (0);
var state_30935__$1 = (function (){var statearr_30947 = state_30935;
(statearr_30947[(10)] = inst_30915);

(statearr_30947[(7)] = inst_30900);

(statearr_30947[(8)] = inst_30899);

return statearr_30947;
})();
var statearr_30948_30975 = state_30935__$1;
(statearr_30948_30975[(2)] = null);

(statearr_30948_30975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (9))){
var inst_30899 = (state_30935[(8)]);
var inst_30913 = cljs.core.vec.call(null,inst_30899);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30935__$1,(11),out,inst_30913);
} else {
if((state_val_30936 === (5))){
var inst_30900 = (state_30935[(7)]);
var inst_30908 = (state_30935[(11)]);
var inst_30899 = (state_30935[(8)]);
var inst_30903 = (state_30935[(9)]);
var inst_30907 = (inst_30899[inst_30900] = inst_30903);
var inst_30908__$1 = (inst_30900 + (1));
var inst_30909 = (inst_30908__$1 < n);
var state_30935__$1 = (function (){var statearr_30949 = state_30935;
(statearr_30949[(11)] = inst_30908__$1);

(statearr_30949[(12)] = inst_30907);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30909)){
var statearr_30950_30976 = state_30935__$1;
(statearr_30950_30976[(1)] = (8));

} else {
var statearr_30951_30977 = state_30935__$1;
(statearr_30951_30977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (14))){
var inst_30928 = (state_30935[(2)]);
var inst_30929 = cljs.core.async.close_BANG_.call(null,out);
var state_30935__$1 = (function (){var statearr_30953 = state_30935;
(statearr_30953[(13)] = inst_30928);

return statearr_30953;
})();
var statearr_30954_30978 = state_30935__$1;
(statearr_30954_30978[(2)] = inst_30929);

(statearr_30954_30978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (10))){
var inst_30919 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30955_30979 = state_30935__$1;
(statearr_30955_30979[(2)] = inst_30919);

(statearr_30955_30979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (8))){
var inst_30908 = (state_30935[(11)]);
var inst_30899 = (state_30935[(8)]);
var tmp30952 = inst_30899;
var inst_30899__$1 = tmp30952;
var inst_30900 = inst_30908;
var state_30935__$1 = (function (){var statearr_30956 = state_30935;
(statearr_30956[(7)] = inst_30900);

(statearr_30956[(8)] = inst_30899__$1);

return statearr_30956;
})();
var statearr_30957_30980 = state_30935__$1;
(statearr_30957_30980[(2)] = null);

(statearr_30957_30980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___30966,out))
;
return ((function (switch__23196__auto__,c__23258__auto___30966,out){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_30935){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_30935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e30962){if((e30962 instanceof Object)){
var ex__23200__auto__ = e30962;
var statearr_30963_30981 = state_30935;
(statearr_30963_30981[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30982 = state_30935;
state_30935 = G__30982;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_30935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_30935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___30966,out))
})();
var state__23260__auto__ = (function (){var statearr_30964 = f__23259__auto__.call(null);
(statearr_30964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___30966);

return statearr_30964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___30966,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30984 = arguments.length;
switch (G__30984) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23258__auto___31057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___31057,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___31057,out){
return (function (state_31026){
var state_val_31027 = (state_31026[(1)]);
if((state_val_31027 === (7))){
var inst_31022 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31028_31058 = state_31026__$1;
(statearr_31028_31058[(2)] = inst_31022);

(statearr_31028_31058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (1))){
var inst_30985 = [];
var inst_30986 = inst_30985;
var inst_30987 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31026__$1 = (function (){var statearr_31029 = state_31026;
(statearr_31029[(7)] = inst_30986);

(statearr_31029[(8)] = inst_30987);

return statearr_31029;
})();
var statearr_31030_31059 = state_31026__$1;
(statearr_31030_31059[(2)] = null);

(statearr_31030_31059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (4))){
var inst_30990 = (state_31026[(9)]);
var inst_30990__$1 = (state_31026[(2)]);
var inst_30991 = (inst_30990__$1 == null);
var inst_30992 = cljs.core.not.call(null,inst_30991);
var state_31026__$1 = (function (){var statearr_31031 = state_31026;
(statearr_31031[(9)] = inst_30990__$1);

return statearr_31031;
})();
if(inst_30992){
var statearr_31032_31060 = state_31026__$1;
(statearr_31032_31060[(1)] = (5));

} else {
var statearr_31033_31061 = state_31026__$1;
(statearr_31033_31061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (15))){
var inst_31016 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31034_31062 = state_31026__$1;
(statearr_31034_31062[(2)] = inst_31016);

(statearr_31034_31062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (13))){
var state_31026__$1 = state_31026;
var statearr_31035_31063 = state_31026__$1;
(statearr_31035_31063[(2)] = null);

(statearr_31035_31063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (6))){
var inst_30986 = (state_31026[(7)]);
var inst_31011 = inst_30986.length;
var inst_31012 = (inst_31011 > (0));
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_31012)){
var statearr_31036_31064 = state_31026__$1;
(statearr_31036_31064[(1)] = (12));

} else {
var statearr_31037_31065 = state_31026__$1;
(statearr_31037_31065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (3))){
var inst_31024 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31026__$1,inst_31024);
} else {
if((state_val_31027 === (12))){
var inst_30986 = (state_31026[(7)]);
var inst_31014 = cljs.core.vec.call(null,inst_30986);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31026__$1,(15),out,inst_31014);
} else {
if((state_val_31027 === (2))){
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31026__$1,(4),ch);
} else {
if((state_val_31027 === (11))){
var inst_30990 = (state_31026[(9)]);
var inst_30994 = (state_31026[(10)]);
var inst_31004 = (state_31026[(2)]);
var inst_31005 = [];
var inst_31006 = inst_31005.push(inst_30990);
var inst_30986 = inst_31005;
var inst_30987 = inst_30994;
var state_31026__$1 = (function (){var statearr_31038 = state_31026;
(statearr_31038[(11)] = inst_31004);

(statearr_31038[(7)] = inst_30986);

(statearr_31038[(8)] = inst_30987);

(statearr_31038[(12)] = inst_31006);

return statearr_31038;
})();
var statearr_31039_31066 = state_31026__$1;
(statearr_31039_31066[(2)] = null);

(statearr_31039_31066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (9))){
var inst_30986 = (state_31026[(7)]);
var inst_31002 = cljs.core.vec.call(null,inst_30986);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31026__$1,(11),out,inst_31002);
} else {
if((state_val_31027 === (5))){
var inst_30990 = (state_31026[(9)]);
var inst_30994 = (state_31026[(10)]);
var inst_30987 = (state_31026[(8)]);
var inst_30994__$1 = f.call(null,inst_30990);
var inst_30995 = cljs.core._EQ_.call(null,inst_30994__$1,inst_30987);
var inst_30996 = cljs.core.keyword_identical_QMARK_.call(null,inst_30987,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30997 = (inst_30995) || (inst_30996);
var state_31026__$1 = (function (){var statearr_31040 = state_31026;
(statearr_31040[(10)] = inst_30994__$1);

return statearr_31040;
})();
if(cljs.core.truth_(inst_30997)){
var statearr_31041_31067 = state_31026__$1;
(statearr_31041_31067[(1)] = (8));

} else {
var statearr_31042_31068 = state_31026__$1;
(statearr_31042_31068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (14))){
var inst_31019 = (state_31026[(2)]);
var inst_31020 = cljs.core.async.close_BANG_.call(null,out);
var state_31026__$1 = (function (){var statearr_31044 = state_31026;
(statearr_31044[(13)] = inst_31019);

return statearr_31044;
})();
var statearr_31045_31069 = state_31026__$1;
(statearr_31045_31069[(2)] = inst_31020);

(statearr_31045_31069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (10))){
var inst_31009 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31046_31070 = state_31026__$1;
(statearr_31046_31070[(2)] = inst_31009);

(statearr_31046_31070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (8))){
var inst_30990 = (state_31026[(9)]);
var inst_30994 = (state_31026[(10)]);
var inst_30986 = (state_31026[(7)]);
var inst_30999 = inst_30986.push(inst_30990);
var tmp31043 = inst_30986;
var inst_30986__$1 = tmp31043;
var inst_30987 = inst_30994;
var state_31026__$1 = (function (){var statearr_31047 = state_31026;
(statearr_31047[(7)] = inst_30986__$1);

(statearr_31047[(8)] = inst_30987);

(statearr_31047[(14)] = inst_30999);

return statearr_31047;
})();
var statearr_31048_31071 = state_31026__$1;
(statearr_31048_31071[(2)] = null);

(statearr_31048_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23258__auto___31057,out))
;
return ((function (switch__23196__auto__,c__23258__auto___31057,out){
return (function() {
var cljs$core$async$state_machine__23197__auto__ = null;
var cljs$core$async$state_machine__23197__auto____0 = (function (){
var statearr_31052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31052[(0)] = cljs$core$async$state_machine__23197__auto__);

(statearr_31052[(1)] = (1));

return statearr_31052;
});
var cljs$core$async$state_machine__23197__auto____1 = (function (state_31026){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_31026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e31053){if((e31053 instanceof Object)){
var ex__23200__auto__ = e31053;
var statearr_31054_31072 = state_31026;
(statearr_31054_31072[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31073 = state_31026;
state_31026 = G__31073;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
cljs$core$async$state_machine__23197__auto__ = function(state_31026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23197__auto____1.call(this,state_31026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23197__auto____0;
cljs$core$async$state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23197__auto____1;
return cljs$core$async$state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___31057,out))
})();
var state__23260__auto__ = (function (){var statearr_31055 = f__23259__auto__.call(null);
(statearr_31055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___31057);

return statearr_31055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___31057,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1431876839429