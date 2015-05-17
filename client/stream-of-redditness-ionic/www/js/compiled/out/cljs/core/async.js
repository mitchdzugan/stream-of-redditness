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
if(typeof cljs.core.async.t28572 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28572 = (function (f,fn_handler,meta28573){
this.f = f;
this.fn_handler = fn_handler;
this.meta28573 = meta28573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28574){
var self__ = this;
var _28574__$1 = this;
return self__.meta28573;
});

cljs.core.async.t28572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28574,meta28573__$1){
var self__ = this;
var _28574__$1 = this;
return (new cljs.core.async.t28572(self__.f,self__.fn_handler,meta28573__$1));
});

cljs.core.async.t28572.cljs$lang$type = true;

cljs.core.async.t28572.cljs$lang$ctorStr = "cljs.core.async/t28572";

cljs.core.async.t28572.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28572");
});

cljs.core.async.__GT_t28572 = (function cljs$core$async$fn_handler_$___GT_t28572(f__$1,fn_handler__$1,meta28573){
return (new cljs.core.async.t28572(f__$1,fn_handler__$1,meta28573));
});

}

return (new cljs.core.async.t28572(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28576 = buff;
if(G__28576){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__28576.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28576.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28576);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28576);
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
var G__28578 = arguments.length;
switch (G__28578) {
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
var G__28581 = arguments.length;
switch (G__28581) {
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
var val_28583 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28583);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28583,ret){
return (function (){
return fn1.call(null,val_28583);
});})(val_28583,ret))
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
var G__28585 = arguments.length;
switch (G__28585) {
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
var n__19001__auto___28587 = n;
var x_28588 = (0);
while(true){
if((x_28588 < n__19001__auto___28587)){
(a[x_28588] = (0));

var G__28589 = (x_28588 + (1));
x_28588 = G__28589;
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

var G__28590 = (i + (1));
i = G__28590;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28594 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28594 = (function (flag,alt_flag,meta28595){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28595 = meta28595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28594.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28596){
var self__ = this;
var _28596__$1 = this;
return self__.meta28595;
});})(flag))
;

cljs.core.async.t28594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28596,meta28595__$1){
var self__ = this;
var _28596__$1 = this;
return (new cljs.core.async.t28594(self__.flag,self__.alt_flag,meta28595__$1));
});})(flag))
;

cljs.core.async.t28594.cljs$lang$type = true;

cljs.core.async.t28594.cljs$lang$ctorStr = "cljs.core.async/t28594";

cljs.core.async.t28594.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28594");
});})(flag))
;

cljs.core.async.__GT_t28594 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28594(flag__$1,alt_flag__$1,meta28595){
return (new cljs.core.async.t28594(flag__$1,alt_flag__$1,meta28595));
});})(flag))
;

}

return (new cljs.core.async.t28594(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28600 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28600 = (function (cb,flag,alt_handler,meta28601){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28601 = meta28601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28600.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28602){
var self__ = this;
var _28602__$1 = this;
return self__.meta28601;
});

cljs.core.async.t28600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28602,meta28601__$1){
var self__ = this;
var _28602__$1 = this;
return (new cljs.core.async.t28600(self__.cb,self__.flag,self__.alt_handler,meta28601__$1));
});

cljs.core.async.t28600.cljs$lang$type = true;

cljs.core.async.t28600.cljs$lang$ctorStr = "cljs.core.async/t28600";

cljs.core.async.t28600.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28600");
});

cljs.core.async.__GT_t28600 = (function cljs$core$async$alt_handler_$___GT_t28600(cb__$1,flag__$1,alt_handler__$1,meta28601){
return (new cljs.core.async.t28600(cb__$1,flag__$1,alt_handler__$1,meta28601));
});

}

return (new cljs.core.async.t28600(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28603_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28604_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28604_SHARP_,port], null));
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
var G__28605 = (i + (1));
i = G__28605;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28608){
var map__28609 = p__28608;
var map__28609__$1 = ((cljs.core.seq_QMARK_.call(null,map__28609))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);
var opts = map__28609__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28606){
var G__28607 = cljs.core.first.call(null,seq28606);
var seq28606__$1 = cljs.core.next.call(null,seq28606);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28607,seq28606__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28611 = arguments.length;
switch (G__28611) {
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
var c__23247__auto___28660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___28660){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___28660){
return (function (state_28635){
var state_val_28636 = (state_28635[(1)]);
if((state_val_28636 === (7))){
var inst_28631 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28637_28661 = state_28635__$1;
(statearr_28637_28661[(2)] = inst_28631);

(statearr_28637_28661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (1))){
var state_28635__$1 = state_28635;
var statearr_28638_28662 = state_28635__$1;
(statearr_28638_28662[(2)] = null);

(statearr_28638_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (4))){
var inst_28614 = (state_28635[(7)]);
var inst_28614__$1 = (state_28635[(2)]);
var inst_28615 = (inst_28614__$1 == null);
var state_28635__$1 = (function (){var statearr_28639 = state_28635;
(statearr_28639[(7)] = inst_28614__$1);

return statearr_28639;
})();
if(cljs.core.truth_(inst_28615)){
var statearr_28640_28663 = state_28635__$1;
(statearr_28640_28663[(1)] = (5));

} else {
var statearr_28641_28664 = state_28635__$1;
(statearr_28641_28664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (13))){
var state_28635__$1 = state_28635;
var statearr_28642_28665 = state_28635__$1;
(statearr_28642_28665[(2)] = null);

(statearr_28642_28665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (6))){
var inst_28614 = (state_28635[(7)]);
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28635__$1,(11),to,inst_28614);
} else {
if((state_val_28636 === (3))){
var inst_28633 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28635__$1,inst_28633);
} else {
if((state_val_28636 === (12))){
var state_28635__$1 = state_28635;
var statearr_28643_28666 = state_28635__$1;
(statearr_28643_28666[(2)] = null);

(statearr_28643_28666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (2))){
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28635__$1,(4),from);
} else {
if((state_val_28636 === (11))){
var inst_28624 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
if(cljs.core.truth_(inst_28624)){
var statearr_28644_28667 = state_28635__$1;
(statearr_28644_28667[(1)] = (12));

} else {
var statearr_28645_28668 = state_28635__$1;
(statearr_28645_28668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (9))){
var state_28635__$1 = state_28635;
var statearr_28646_28669 = state_28635__$1;
(statearr_28646_28669[(2)] = null);

(statearr_28646_28669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (5))){
var state_28635__$1 = state_28635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28647_28670 = state_28635__$1;
(statearr_28647_28670[(1)] = (8));

} else {
var statearr_28648_28671 = state_28635__$1;
(statearr_28648_28671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (14))){
var inst_28629 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28649_28672 = state_28635__$1;
(statearr_28649_28672[(2)] = inst_28629);

(statearr_28649_28672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (10))){
var inst_28621 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28650_28673 = state_28635__$1;
(statearr_28650_28673[(2)] = inst_28621);

(statearr_28650_28673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (8))){
var inst_28618 = cljs.core.async.close_BANG_.call(null,to);
var state_28635__$1 = state_28635;
var statearr_28651_28674 = state_28635__$1;
(statearr_28651_28674[(2)] = inst_28618);

(statearr_28651_28674[(1)] = (10));


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
});})(c__23247__auto___28660))
;
return ((function (switch__23185__auto__,c__23247__auto___28660){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_28655 = [null,null,null,null,null,null,null,null];
(statearr_28655[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_28655[(1)] = (1));

return statearr_28655;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_28635){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28656){if((e28656 instanceof Object)){
var ex__23189__auto__ = e28656;
var statearr_28657_28675 = state_28635;
(statearr_28657_28675[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28635;
state_28635 = G__28676;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_28635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_28635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___28660))
})();
var state__23249__auto__ = (function (){var statearr_28658 = f__23248__auto__.call(null);
(statearr_28658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___28660);

return statearr_28658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___28660))
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
return (function (p__28860){
var vec__28861 = p__28860;
var v = cljs.core.nth.call(null,vec__28861,(0),null);
var p = cljs.core.nth.call(null,vec__28861,(1),null);
var job = vec__28861;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23247__auto___29043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___29043,res,vec__28861,v,p,job,jobs,results){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___29043,res,vec__28861,v,p,job,jobs,results){
return (function (state_28866){
var state_val_28867 = (state_28866[(1)]);
if((state_val_28867 === (2))){
var inst_28863 = (state_28866[(2)]);
var inst_28864 = cljs.core.async.close_BANG_.call(null,res);
var state_28866__$1 = (function (){var statearr_28868 = state_28866;
(statearr_28868[(7)] = inst_28863);

return statearr_28868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28866__$1,inst_28864);
} else {
if((state_val_28867 === (1))){
var state_28866__$1 = state_28866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28866__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23247__auto___29043,res,vec__28861,v,p,job,jobs,results))
;
return ((function (switch__23185__auto__,c__23247__auto___29043,res,vec__28861,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0 = (function (){
var statearr_28872 = [null,null,null,null,null,null,null,null];
(statearr_28872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__);

(statearr_28872[(1)] = (1));

return statearr_28872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1 = (function (state_28866){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28873){if((e28873 instanceof Object)){
var ex__23189__auto__ = e28873;
var statearr_28874_29044 = state_28866;
(statearr_28874_29044[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29045 = state_28866;
state_28866 = G__29045;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = function(state_28866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1.call(this,state_28866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___29043,res,vec__28861,v,p,job,jobs,results))
})();
var state__23249__auto__ = (function (){var statearr_28875 = f__23248__auto__.call(null);
(statearr_28875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___29043);

return statearr_28875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___29043,res,vec__28861,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28876){
var vec__28877 = p__28876;
var v = cljs.core.nth.call(null,vec__28877,(0),null);
var p = cljs.core.nth.call(null,vec__28877,(1),null);
var job = vec__28877;
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
var n__19001__auto___29046 = n;
var __29047 = (0);
while(true){
if((__29047 < n__19001__auto___29046)){
var G__28878_29048 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28878_29048) {
case "async":
var c__23247__auto___29050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29047,c__23247__auto___29050,G__28878_29048,n__19001__auto___29046,jobs,results,process,async){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (__29047,c__23247__auto___29050,G__28878_29048,n__19001__auto___29046,jobs,results,process,async){
return (function (state_28891){
var state_val_28892 = (state_28891[(1)]);
if((state_val_28892 === (7))){
var inst_28887 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28893_29051 = state_28891__$1;
(statearr_28893_29051[(2)] = inst_28887);

(statearr_28893_29051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (6))){
var state_28891__$1 = state_28891;
var statearr_28894_29052 = state_28891__$1;
(statearr_28894_29052[(2)] = null);

(statearr_28894_29052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (5))){
var state_28891__$1 = state_28891;
var statearr_28895_29053 = state_28891__$1;
(statearr_28895_29053[(2)] = null);

(statearr_28895_29053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (4))){
var inst_28881 = (state_28891[(2)]);
var inst_28882 = async.call(null,inst_28881);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28882)){
var statearr_28896_29054 = state_28891__$1;
(statearr_28896_29054[(1)] = (5));

} else {
var statearr_28897_29055 = state_28891__$1;
(statearr_28897_29055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (3))){
var inst_28889 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28891__$1,inst_28889);
} else {
if((state_val_28892 === (2))){
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(4),jobs);
} else {
if((state_val_28892 === (1))){
var state_28891__$1 = state_28891;
var statearr_28898_29056 = state_28891__$1;
(statearr_28898_29056[(2)] = null);

(statearr_28898_29056[(1)] = (2));


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
});})(__29047,c__23247__auto___29050,G__28878_29048,n__19001__auto___29046,jobs,results,process,async))
;
return ((function (__29047,switch__23185__auto__,c__23247__auto___29050,G__28878_29048,n__19001__auto___29046,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null];
(statearr_28902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1 = (function (state_28891){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__23189__auto__ = e28903;
var statearr_28904_29057 = state_28891;
(statearr_28904_29057[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29058 = state_28891;
state_28891 = G__29058;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = function(state_28891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1.call(this,state_28891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__;
})()
;})(__29047,switch__23185__auto__,c__23247__auto___29050,G__28878_29048,n__19001__auto___29046,jobs,results,process,async))
})();
var state__23249__auto__ = (function (){var statearr_28905 = f__23248__auto__.call(null);
(statearr_28905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___29050);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(__29047,c__23247__auto___29050,G__28878_29048,n__19001__auto___29046,jobs,results,process,async))
);


break;
case "compute":
var c__23247__auto___29059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29047,c__23247__auto___29059,G__28878_29048,n__19001__auto___29046,jobs,results,process,async){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (__29047,c__23247__auto___29059,G__28878_29048,n__19001__auto___29046,jobs,results,process,async){
return (function (state_28918){
var state_val_28919 = (state_28918[(1)]);
if((state_val_28919 === (7))){
var inst_28914 = (state_28918[(2)]);
var state_28918__$1 = state_28918;
var statearr_28920_29060 = state_28918__$1;
(statearr_28920_29060[(2)] = inst_28914);

(statearr_28920_29060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (6))){
var state_28918__$1 = state_28918;
var statearr_28921_29061 = state_28918__$1;
(statearr_28921_29061[(2)] = null);

(statearr_28921_29061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (5))){
var state_28918__$1 = state_28918;
var statearr_28922_29062 = state_28918__$1;
(statearr_28922_29062[(2)] = null);

(statearr_28922_29062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (4))){
var inst_28908 = (state_28918[(2)]);
var inst_28909 = process.call(null,inst_28908);
var state_28918__$1 = state_28918;
if(cljs.core.truth_(inst_28909)){
var statearr_28923_29063 = state_28918__$1;
(statearr_28923_29063[(1)] = (5));

} else {
var statearr_28924_29064 = state_28918__$1;
(statearr_28924_29064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (3))){
var inst_28916 = (state_28918[(2)]);
var state_28918__$1 = state_28918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28918__$1,inst_28916);
} else {
if((state_val_28919 === (2))){
var state_28918__$1 = state_28918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28918__$1,(4),jobs);
} else {
if((state_val_28919 === (1))){
var state_28918__$1 = state_28918;
var statearr_28925_29065 = state_28918__$1;
(statearr_28925_29065[(2)] = null);

(statearr_28925_29065[(1)] = (2));


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
});})(__29047,c__23247__auto___29059,G__28878_29048,n__19001__auto___29046,jobs,results,process,async))
;
return ((function (__29047,switch__23185__auto__,c__23247__auto___29059,G__28878_29048,n__19001__auto___29046,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0 = (function (){
var statearr_28929 = [null,null,null,null,null,null,null];
(statearr_28929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__);

(statearr_28929[(1)] = (1));

return statearr_28929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1 = (function (state_28918){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28930){if((e28930 instanceof Object)){
var ex__23189__auto__ = e28930;
var statearr_28931_29066 = state_28918;
(statearr_28931_29066[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29067 = state_28918;
state_28918 = G__29067;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = function(state_28918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1.call(this,state_28918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__;
})()
;})(__29047,switch__23185__auto__,c__23247__auto___29059,G__28878_29048,n__19001__auto___29046,jobs,results,process,async))
})();
var state__23249__auto__ = (function (){var statearr_28932 = f__23248__auto__.call(null);
(statearr_28932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___29059);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(__29047,c__23247__auto___29059,G__28878_29048,n__19001__auto___29046,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29068 = (__29047 + (1));
__29047 = G__29068;
continue;
} else {
}
break;
}

var c__23247__auto___29069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___29069,jobs,results,process,async){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___29069,jobs,results,process,async){
return (function (state_28954){
var state_val_28955 = (state_28954[(1)]);
if((state_val_28955 === (9))){
var inst_28947 = (state_28954[(2)]);
var state_28954__$1 = (function (){var statearr_28956 = state_28954;
(statearr_28956[(7)] = inst_28947);

return statearr_28956;
})();
var statearr_28957_29070 = state_28954__$1;
(statearr_28957_29070[(2)] = null);

(statearr_28957_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (8))){
var inst_28940 = (state_28954[(8)]);
var inst_28945 = (state_28954[(2)]);
var state_28954__$1 = (function (){var statearr_28958 = state_28954;
(statearr_28958[(9)] = inst_28945);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28954__$1,(9),results,inst_28940);
} else {
if((state_val_28955 === (7))){
var inst_28950 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
var statearr_28959_29071 = state_28954__$1;
(statearr_28959_29071[(2)] = inst_28950);

(statearr_28959_29071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (6))){
var inst_28940 = (state_28954[(8)]);
var inst_28935 = (state_28954[(10)]);
var inst_28940__$1 = cljs.core.async.chan.call(null,(1));
var inst_28941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28942 = [inst_28935,inst_28940__$1];
var inst_28943 = (new cljs.core.PersistentVector(null,2,(5),inst_28941,inst_28942,null));
var state_28954__$1 = (function (){var statearr_28960 = state_28954;
(statearr_28960[(8)] = inst_28940__$1);

return statearr_28960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28954__$1,(8),jobs,inst_28943);
} else {
if((state_val_28955 === (5))){
var inst_28938 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28954__$1 = state_28954;
var statearr_28961_29072 = state_28954__$1;
(statearr_28961_29072[(2)] = inst_28938);

(statearr_28961_29072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (4))){
var inst_28935 = (state_28954[(10)]);
var inst_28935__$1 = (state_28954[(2)]);
var inst_28936 = (inst_28935__$1 == null);
var state_28954__$1 = (function (){var statearr_28962 = state_28954;
(statearr_28962[(10)] = inst_28935__$1);

return statearr_28962;
})();
if(cljs.core.truth_(inst_28936)){
var statearr_28963_29073 = state_28954__$1;
(statearr_28963_29073[(1)] = (5));

} else {
var statearr_28964_29074 = state_28954__$1;
(statearr_28964_29074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (3))){
var inst_28952 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28954__$1,inst_28952);
} else {
if((state_val_28955 === (2))){
var state_28954__$1 = state_28954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28954__$1,(4),from);
} else {
if((state_val_28955 === (1))){
var state_28954__$1 = state_28954;
var statearr_28965_29075 = state_28954__$1;
(statearr_28965_29075[(2)] = null);

(statearr_28965_29075[(1)] = (2));


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
});})(c__23247__auto___29069,jobs,results,process,async))
;
return ((function (switch__23185__auto__,c__23247__auto___29069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0 = (function (){
var statearr_28969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__);

(statearr_28969[(1)] = (1));

return statearr_28969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1 = (function (state_28954){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28970){if((e28970 instanceof Object)){
var ex__23189__auto__ = e28970;
var statearr_28971_29076 = state_28954;
(statearr_28971_29076[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29077 = state_28954;
state_28954 = G__29077;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = function(state_28954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1.call(this,state_28954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___29069,jobs,results,process,async))
})();
var state__23249__auto__ = (function (){var statearr_28972 = f__23248__auto__.call(null);
(statearr_28972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___29069);

return statearr_28972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___29069,jobs,results,process,async))
);


var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__,jobs,results,process,async){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__,jobs,results,process,async){
return (function (state_29010){
var state_val_29011 = (state_29010[(1)]);
if((state_val_29011 === (7))){
var inst_29006 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29012_29078 = state_29010__$1;
(statearr_29012_29078[(2)] = inst_29006);

(statearr_29012_29078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (20))){
var state_29010__$1 = state_29010;
var statearr_29013_29079 = state_29010__$1;
(statearr_29013_29079[(2)] = null);

(statearr_29013_29079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (1))){
var state_29010__$1 = state_29010;
var statearr_29014_29080 = state_29010__$1;
(statearr_29014_29080[(2)] = null);

(statearr_29014_29080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (4))){
var inst_28975 = (state_29010[(7)]);
var inst_28975__$1 = (state_29010[(2)]);
var inst_28976 = (inst_28975__$1 == null);
var state_29010__$1 = (function (){var statearr_29015 = state_29010;
(statearr_29015[(7)] = inst_28975__$1);

return statearr_29015;
})();
if(cljs.core.truth_(inst_28976)){
var statearr_29016_29081 = state_29010__$1;
(statearr_29016_29081[(1)] = (5));

} else {
var statearr_29017_29082 = state_29010__$1;
(statearr_29017_29082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (15))){
var inst_28988 = (state_29010[(8)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29010__$1,(18),to,inst_28988);
} else {
if((state_val_29011 === (21))){
var inst_29001 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29018_29083 = state_29010__$1;
(statearr_29018_29083[(2)] = inst_29001);

(statearr_29018_29083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (13))){
var inst_29003 = (state_29010[(2)]);
var state_29010__$1 = (function (){var statearr_29019 = state_29010;
(statearr_29019[(9)] = inst_29003);

return statearr_29019;
})();
var statearr_29020_29084 = state_29010__$1;
(statearr_29020_29084[(2)] = null);

(statearr_29020_29084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (6))){
var inst_28975 = (state_29010[(7)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(11),inst_28975);
} else {
if((state_val_29011 === (17))){
var inst_28996 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
if(cljs.core.truth_(inst_28996)){
var statearr_29021_29085 = state_29010__$1;
(statearr_29021_29085[(1)] = (19));

} else {
var statearr_29022_29086 = state_29010__$1;
(statearr_29022_29086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (3))){
var inst_29008 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29010__$1,inst_29008);
} else {
if((state_val_29011 === (12))){
var inst_28985 = (state_29010[(10)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(14),inst_28985);
} else {
if((state_val_29011 === (2))){
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(4),results);
} else {
if((state_val_29011 === (19))){
var state_29010__$1 = state_29010;
var statearr_29023_29087 = state_29010__$1;
(statearr_29023_29087[(2)] = null);

(statearr_29023_29087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (11))){
var inst_28985 = (state_29010[(2)]);
var state_29010__$1 = (function (){var statearr_29024 = state_29010;
(statearr_29024[(10)] = inst_28985);

return statearr_29024;
})();
var statearr_29025_29088 = state_29010__$1;
(statearr_29025_29088[(2)] = null);

(statearr_29025_29088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (9))){
var state_29010__$1 = state_29010;
var statearr_29026_29089 = state_29010__$1;
(statearr_29026_29089[(2)] = null);

(statearr_29026_29089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (5))){
var state_29010__$1 = state_29010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29027_29090 = state_29010__$1;
(statearr_29027_29090[(1)] = (8));

} else {
var statearr_29028_29091 = state_29010__$1;
(statearr_29028_29091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (14))){
var inst_28988 = (state_29010[(8)]);
var inst_28990 = (state_29010[(11)]);
var inst_28988__$1 = (state_29010[(2)]);
var inst_28989 = (inst_28988__$1 == null);
var inst_28990__$1 = cljs.core.not.call(null,inst_28989);
var state_29010__$1 = (function (){var statearr_29029 = state_29010;
(statearr_29029[(8)] = inst_28988__$1);

(statearr_29029[(11)] = inst_28990__$1);

return statearr_29029;
})();
if(inst_28990__$1){
var statearr_29030_29092 = state_29010__$1;
(statearr_29030_29092[(1)] = (15));

} else {
var statearr_29031_29093 = state_29010__$1;
(statearr_29031_29093[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (16))){
var inst_28990 = (state_29010[(11)]);
var state_29010__$1 = state_29010;
var statearr_29032_29094 = state_29010__$1;
(statearr_29032_29094[(2)] = inst_28990);

(statearr_29032_29094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (10))){
var inst_28982 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29033_29095 = state_29010__$1;
(statearr_29033_29095[(2)] = inst_28982);

(statearr_29033_29095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (18))){
var inst_28993 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29034_29096 = state_29010__$1;
(statearr_29034_29096[(2)] = inst_28993);

(statearr_29034_29096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (8))){
var inst_28979 = cljs.core.async.close_BANG_.call(null,to);
var state_29010__$1 = state_29010;
var statearr_29035_29097 = state_29010__$1;
(statearr_29035_29097[(2)] = inst_28979);

(statearr_29035_29097[(1)] = (10));


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
});})(c__23247__auto__,jobs,results,process,async))
;
return ((function (switch__23185__auto__,c__23247__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0 = (function (){
var statearr_29039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__);

(statearr_29039[(1)] = (1));

return statearr_29039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1 = (function (state_29010){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_29010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e29040){if((e29040 instanceof Object)){
var ex__23189__auto__ = e29040;
var statearr_29041_29098 = state_29010;
(statearr_29041_29098[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29099 = state_29010;
state_29010 = G__29099;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__ = function(state_29010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1.call(this,state_29010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__,jobs,results,process,async))
})();
var state__23249__auto__ = (function (){var statearr_29042 = f__23248__auto__.call(null);
(statearr_29042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_29042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__,jobs,results,process,async))
);

return c__23247__auto__;
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
var G__29101 = arguments.length;
switch (G__29101) {
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
var G__29104 = arguments.length;
switch (G__29104) {
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
var G__29107 = arguments.length;
switch (G__29107) {
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
var c__23247__auto___29159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___29159,tc,fc){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___29159,tc,fc){
return (function (state_29133){
var state_val_29134 = (state_29133[(1)]);
if((state_val_29134 === (7))){
var inst_29129 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29135_29160 = state_29133__$1;
(statearr_29135_29160[(2)] = inst_29129);

(statearr_29135_29160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (1))){
var state_29133__$1 = state_29133;
var statearr_29136_29161 = state_29133__$1;
(statearr_29136_29161[(2)] = null);

(statearr_29136_29161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (4))){
var inst_29110 = (state_29133[(7)]);
var inst_29110__$1 = (state_29133[(2)]);
var inst_29111 = (inst_29110__$1 == null);
var state_29133__$1 = (function (){var statearr_29137 = state_29133;
(statearr_29137[(7)] = inst_29110__$1);

return statearr_29137;
})();
if(cljs.core.truth_(inst_29111)){
var statearr_29138_29162 = state_29133__$1;
(statearr_29138_29162[(1)] = (5));

} else {
var statearr_29139_29163 = state_29133__$1;
(statearr_29139_29163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (13))){
var state_29133__$1 = state_29133;
var statearr_29140_29164 = state_29133__$1;
(statearr_29140_29164[(2)] = null);

(statearr_29140_29164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (6))){
var inst_29110 = (state_29133[(7)]);
var inst_29116 = p.call(null,inst_29110);
var state_29133__$1 = state_29133;
if(cljs.core.truth_(inst_29116)){
var statearr_29141_29165 = state_29133__$1;
(statearr_29141_29165[(1)] = (9));

} else {
var statearr_29142_29166 = state_29133__$1;
(statearr_29142_29166[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (3))){
var inst_29131 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29133__$1,inst_29131);
} else {
if((state_val_29134 === (12))){
var state_29133__$1 = state_29133;
var statearr_29143_29167 = state_29133__$1;
(statearr_29143_29167[(2)] = null);

(statearr_29143_29167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (2))){
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29133__$1,(4),ch);
} else {
if((state_val_29134 === (11))){
var inst_29110 = (state_29133[(7)]);
var inst_29120 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29133__$1,(8),inst_29120,inst_29110);
} else {
if((state_val_29134 === (9))){
var state_29133__$1 = state_29133;
var statearr_29144_29168 = state_29133__$1;
(statearr_29144_29168[(2)] = tc);

(statearr_29144_29168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (5))){
var inst_29113 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29114 = cljs.core.async.close_BANG_.call(null,fc);
var state_29133__$1 = (function (){var statearr_29145 = state_29133;
(statearr_29145[(8)] = inst_29113);

return statearr_29145;
})();
var statearr_29146_29169 = state_29133__$1;
(statearr_29146_29169[(2)] = inst_29114);

(statearr_29146_29169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (14))){
var inst_29127 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29147_29170 = state_29133__$1;
(statearr_29147_29170[(2)] = inst_29127);

(statearr_29147_29170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (10))){
var state_29133__$1 = state_29133;
var statearr_29148_29171 = state_29133__$1;
(statearr_29148_29171[(2)] = fc);

(statearr_29148_29171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (8))){
var inst_29122 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
if(cljs.core.truth_(inst_29122)){
var statearr_29149_29172 = state_29133__$1;
(statearr_29149_29172[(1)] = (12));

} else {
var statearr_29150_29173 = state_29133__$1;
(statearr_29150_29173[(1)] = (13));

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
});})(c__23247__auto___29159,tc,fc))
;
return ((function (switch__23185__auto__,c__23247__auto___29159,tc,fc){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_29154 = [null,null,null,null,null,null,null,null,null];
(statearr_29154[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_29154[(1)] = (1));

return statearr_29154;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_29133){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_29133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e29155){if((e29155 instanceof Object)){
var ex__23189__auto__ = e29155;
var statearr_29156_29174 = state_29133;
(statearr_29156_29174[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29175 = state_29133;
state_29133 = G__29175;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_29133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_29133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___29159,tc,fc))
})();
var state__23249__auto__ = (function (){var statearr_29157 = f__23248__auto__.call(null);
(statearr_29157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___29159);

return statearr_29157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___29159,tc,fc))
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
var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__){
return (function (state_29222){
var state_val_29223 = (state_29222[(1)]);
if((state_val_29223 === (7))){
var inst_29218 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
var statearr_29224_29240 = state_29222__$1;
(statearr_29224_29240[(2)] = inst_29218);

(statearr_29224_29240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (6))){
var inst_29211 = (state_29222[(7)]);
var inst_29208 = (state_29222[(8)]);
var inst_29215 = f.call(null,inst_29208,inst_29211);
var inst_29208__$1 = inst_29215;
var state_29222__$1 = (function (){var statearr_29225 = state_29222;
(statearr_29225[(8)] = inst_29208__$1);

return statearr_29225;
})();
var statearr_29226_29241 = state_29222__$1;
(statearr_29226_29241[(2)] = null);

(statearr_29226_29241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (5))){
var inst_29208 = (state_29222[(8)]);
var state_29222__$1 = state_29222;
var statearr_29227_29242 = state_29222__$1;
(statearr_29227_29242[(2)] = inst_29208);

(statearr_29227_29242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (4))){
var inst_29211 = (state_29222[(7)]);
var inst_29211__$1 = (state_29222[(2)]);
var inst_29212 = (inst_29211__$1 == null);
var state_29222__$1 = (function (){var statearr_29228 = state_29222;
(statearr_29228[(7)] = inst_29211__$1);

return statearr_29228;
})();
if(cljs.core.truth_(inst_29212)){
var statearr_29229_29243 = state_29222__$1;
(statearr_29229_29243[(1)] = (5));

} else {
var statearr_29230_29244 = state_29222__$1;
(statearr_29230_29244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (3))){
var inst_29220 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29222__$1,inst_29220);
} else {
if((state_val_29223 === (2))){
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29222__$1,(4),ch);
} else {
if((state_val_29223 === (1))){
var inst_29208 = init;
var state_29222__$1 = (function (){var statearr_29231 = state_29222;
(statearr_29231[(8)] = inst_29208);

return statearr_29231;
})();
var statearr_29232_29245 = state_29222__$1;
(statearr_29232_29245[(2)] = null);

(statearr_29232_29245[(1)] = (2));


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
});})(c__23247__auto__))
;
return ((function (switch__23185__auto__,c__23247__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23186__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23186__auto____0 = (function (){
var statearr_29236 = [null,null,null,null,null,null,null,null,null];
(statearr_29236[(0)] = cljs$core$async$reduce_$_state_machine__23186__auto__);

(statearr_29236[(1)] = (1));

return statearr_29236;
});
var cljs$core$async$reduce_$_state_machine__23186__auto____1 = (function (state_29222){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_29222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e29237){if((e29237 instanceof Object)){
var ex__23189__auto__ = e29237;
var statearr_29238_29246 = state_29222;
(statearr_29238_29246[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29247 = state_29222;
state_29222 = G__29247;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23186__auto__ = function(state_29222){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23186__auto____1.call(this,state_29222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23186__auto____0;
cljs$core$async$reduce_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23186__auto____1;
return cljs$core$async$reduce_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__))
})();
var state__23249__auto__ = (function (){var statearr_29239 = f__23248__auto__.call(null);
(statearr_29239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__))
);

return c__23247__auto__;
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
var G__29249 = arguments.length;
switch (G__29249) {
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
var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (7))){
var inst_29256 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29276_29300 = state_29274__$1;
(statearr_29276_29300[(2)] = inst_29256);

(statearr_29276_29300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (1))){
var inst_29250 = cljs.core.seq.call(null,coll);
var inst_29251 = inst_29250;
var state_29274__$1 = (function (){var statearr_29277 = state_29274;
(statearr_29277[(7)] = inst_29251);

return statearr_29277;
})();
var statearr_29278_29301 = state_29274__$1;
(statearr_29278_29301[(2)] = null);

(statearr_29278_29301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (4))){
var inst_29251 = (state_29274[(7)]);
var inst_29254 = cljs.core.first.call(null,inst_29251);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29274__$1,(7),ch,inst_29254);
} else {
if((state_val_29275 === (13))){
var inst_29268 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29279_29302 = state_29274__$1;
(statearr_29279_29302[(2)] = inst_29268);

(statearr_29279_29302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (6))){
var inst_29259 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29259)){
var statearr_29280_29303 = state_29274__$1;
(statearr_29280_29303[(1)] = (8));

} else {
var statearr_29281_29304 = state_29274__$1;
(statearr_29281_29304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (12))){
var state_29274__$1 = state_29274;
var statearr_29282_29305 = state_29274__$1;
(statearr_29282_29305[(2)] = null);

(statearr_29282_29305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (2))){
var inst_29251 = (state_29274[(7)]);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29251)){
var statearr_29283_29306 = state_29274__$1;
(statearr_29283_29306[(1)] = (4));

} else {
var statearr_29284_29307 = state_29274__$1;
(statearr_29284_29307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (11))){
var inst_29265 = cljs.core.async.close_BANG_.call(null,ch);
var state_29274__$1 = state_29274;
var statearr_29285_29308 = state_29274__$1;
(statearr_29285_29308[(2)] = inst_29265);

(statearr_29285_29308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (9))){
var state_29274__$1 = state_29274;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29286_29309 = state_29274__$1;
(statearr_29286_29309[(1)] = (11));

} else {
var statearr_29287_29310 = state_29274__$1;
(statearr_29287_29310[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (5))){
var inst_29251 = (state_29274[(7)]);
var state_29274__$1 = state_29274;
var statearr_29288_29311 = state_29274__$1;
(statearr_29288_29311[(2)] = inst_29251);

(statearr_29288_29311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (10))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29289_29312 = state_29274__$1;
(statearr_29289_29312[(2)] = inst_29270);

(statearr_29289_29312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (8))){
var inst_29251 = (state_29274[(7)]);
var inst_29261 = cljs.core.next.call(null,inst_29251);
var inst_29251__$1 = inst_29261;
var state_29274__$1 = (function (){var statearr_29290 = state_29274;
(statearr_29290[(7)] = inst_29251__$1);

return statearr_29290;
})();
var statearr_29291_29313 = state_29274__$1;
(statearr_29291_29313[(2)] = null);

(statearr_29291_29313[(1)] = (2));


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
});})(c__23247__auto__))
;
return ((function (switch__23185__auto__,c__23247__auto__){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_29295 = [null,null,null,null,null,null,null,null];
(statearr_29295[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_29295[(1)] = (1));

return statearr_29295;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_29274){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_29274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e29296){if((e29296 instanceof Object)){
var ex__23189__auto__ = e29296;
var statearr_29297_29314 = state_29274;
(statearr_29297_29314[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29315 = state_29274;
state_29274 = G__29315;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__))
})();
var state__23249__auto__ = (function (){var statearr_29298 = f__23248__auto__.call(null);
(statearr_29298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_29298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__))
);

return c__23247__auto__;
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

cljs.core.async.Mux = (function (){var obj29317 = {};
return obj29317;
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


cljs.core.async.Mult = (function (){var obj29319 = {};
return obj29319;
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
if(typeof cljs.core.async.t29541 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29541 = (function (cs,ch,mult,meta29542){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29542 = meta29542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29541.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29541.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29541.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29541.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29541.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29543){
var self__ = this;
var _29543__$1 = this;
return self__.meta29542;
});})(cs))
;

cljs.core.async.t29541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29543,meta29542__$1){
var self__ = this;
var _29543__$1 = this;
return (new cljs.core.async.t29541(self__.cs,self__.ch,self__.mult,meta29542__$1));
});})(cs))
;

cljs.core.async.t29541.cljs$lang$type = true;

cljs.core.async.t29541.cljs$lang$ctorStr = "cljs.core.async/t29541";

cljs.core.async.t29541.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29541");
});})(cs))
;

cljs.core.async.__GT_t29541 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29541(cs__$1,ch__$1,mult__$1,meta29542){
return (new cljs.core.async.t29541(cs__$1,ch__$1,mult__$1,meta29542));
});})(cs))
;

}

return (new cljs.core.async.t29541(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23247__auto___29762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___29762,cs,m,dchan,dctr,done){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___29762,cs,m,dchan,dctr,done){
return (function (state_29674){
var state_val_29675 = (state_29674[(1)]);
if((state_val_29675 === (7))){
var inst_29670 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29676_29763 = state_29674__$1;
(statearr_29676_29763[(2)] = inst_29670);

(statearr_29676_29763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (20))){
var inst_29575 = (state_29674[(7)]);
var inst_29585 = cljs.core.first.call(null,inst_29575);
var inst_29586 = cljs.core.nth.call(null,inst_29585,(0),null);
var inst_29587 = cljs.core.nth.call(null,inst_29585,(1),null);
var state_29674__$1 = (function (){var statearr_29677 = state_29674;
(statearr_29677[(8)] = inst_29586);

return statearr_29677;
})();
if(cljs.core.truth_(inst_29587)){
var statearr_29678_29764 = state_29674__$1;
(statearr_29678_29764[(1)] = (22));

} else {
var statearr_29679_29765 = state_29674__$1;
(statearr_29679_29765[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (27))){
var inst_29615 = (state_29674[(9)]);
var inst_29617 = (state_29674[(10)]);
var inst_29546 = (state_29674[(11)]);
var inst_29622 = (state_29674[(12)]);
var inst_29622__$1 = cljs.core._nth.call(null,inst_29615,inst_29617);
var inst_29623 = cljs.core.async.put_BANG_.call(null,inst_29622__$1,inst_29546,done);
var state_29674__$1 = (function (){var statearr_29680 = state_29674;
(statearr_29680[(12)] = inst_29622__$1);

return statearr_29680;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29681_29766 = state_29674__$1;
(statearr_29681_29766[(1)] = (30));

} else {
var statearr_29682_29767 = state_29674__$1;
(statearr_29682_29767[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (1))){
var state_29674__$1 = state_29674;
var statearr_29683_29768 = state_29674__$1;
(statearr_29683_29768[(2)] = null);

(statearr_29683_29768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (24))){
var inst_29575 = (state_29674[(7)]);
var inst_29592 = (state_29674[(2)]);
var inst_29593 = cljs.core.next.call(null,inst_29575);
var inst_29555 = inst_29593;
var inst_29556 = null;
var inst_29557 = (0);
var inst_29558 = (0);
var state_29674__$1 = (function (){var statearr_29684 = state_29674;
(statearr_29684[(13)] = inst_29592);

(statearr_29684[(14)] = inst_29558);

(statearr_29684[(15)] = inst_29557);

(statearr_29684[(16)] = inst_29556);

(statearr_29684[(17)] = inst_29555);

return statearr_29684;
})();
var statearr_29685_29769 = state_29674__$1;
(statearr_29685_29769[(2)] = null);

(statearr_29685_29769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (39))){
var state_29674__$1 = state_29674;
var statearr_29689_29770 = state_29674__$1;
(statearr_29689_29770[(2)] = null);

(statearr_29689_29770[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (4))){
var inst_29546 = (state_29674[(11)]);
var inst_29546__$1 = (state_29674[(2)]);
var inst_29547 = (inst_29546__$1 == null);
var state_29674__$1 = (function (){var statearr_29690 = state_29674;
(statearr_29690[(11)] = inst_29546__$1);

return statearr_29690;
})();
if(cljs.core.truth_(inst_29547)){
var statearr_29691_29771 = state_29674__$1;
(statearr_29691_29771[(1)] = (5));

} else {
var statearr_29692_29772 = state_29674__$1;
(statearr_29692_29772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (15))){
var inst_29558 = (state_29674[(14)]);
var inst_29557 = (state_29674[(15)]);
var inst_29556 = (state_29674[(16)]);
var inst_29555 = (state_29674[(17)]);
var inst_29571 = (state_29674[(2)]);
var inst_29572 = (inst_29558 + (1));
var tmp29686 = inst_29557;
var tmp29687 = inst_29556;
var tmp29688 = inst_29555;
var inst_29555__$1 = tmp29688;
var inst_29556__$1 = tmp29687;
var inst_29557__$1 = tmp29686;
var inst_29558__$1 = inst_29572;
var state_29674__$1 = (function (){var statearr_29693 = state_29674;
(statearr_29693[(14)] = inst_29558__$1);

(statearr_29693[(15)] = inst_29557__$1);

(statearr_29693[(16)] = inst_29556__$1);

(statearr_29693[(18)] = inst_29571);

(statearr_29693[(17)] = inst_29555__$1);

return statearr_29693;
})();
var statearr_29694_29773 = state_29674__$1;
(statearr_29694_29773[(2)] = null);

(statearr_29694_29773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (21))){
var inst_29596 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29698_29774 = state_29674__$1;
(statearr_29698_29774[(2)] = inst_29596);

(statearr_29698_29774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (31))){
var inst_29622 = (state_29674[(12)]);
var inst_29626 = done.call(null,null);
var inst_29627 = cljs.core.async.untap_STAR_.call(null,m,inst_29622);
var state_29674__$1 = (function (){var statearr_29699 = state_29674;
(statearr_29699[(19)] = inst_29626);

return statearr_29699;
})();
var statearr_29700_29775 = state_29674__$1;
(statearr_29700_29775[(2)] = inst_29627);

(statearr_29700_29775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (32))){
var inst_29615 = (state_29674[(9)]);
var inst_29614 = (state_29674[(20)]);
var inst_29617 = (state_29674[(10)]);
var inst_29616 = (state_29674[(21)]);
var inst_29629 = (state_29674[(2)]);
var inst_29630 = (inst_29617 + (1));
var tmp29695 = inst_29615;
var tmp29696 = inst_29614;
var tmp29697 = inst_29616;
var inst_29614__$1 = tmp29696;
var inst_29615__$1 = tmp29695;
var inst_29616__$1 = tmp29697;
var inst_29617__$1 = inst_29630;
var state_29674__$1 = (function (){var statearr_29701 = state_29674;
(statearr_29701[(9)] = inst_29615__$1);

(statearr_29701[(20)] = inst_29614__$1);

(statearr_29701[(10)] = inst_29617__$1);

(statearr_29701[(22)] = inst_29629);

(statearr_29701[(21)] = inst_29616__$1);

return statearr_29701;
})();
var statearr_29702_29776 = state_29674__$1;
(statearr_29702_29776[(2)] = null);

(statearr_29702_29776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (40))){
var inst_29642 = (state_29674[(23)]);
var inst_29646 = done.call(null,null);
var inst_29647 = cljs.core.async.untap_STAR_.call(null,m,inst_29642);
var state_29674__$1 = (function (){var statearr_29703 = state_29674;
(statearr_29703[(24)] = inst_29646);

return statearr_29703;
})();
var statearr_29704_29777 = state_29674__$1;
(statearr_29704_29777[(2)] = inst_29647);

(statearr_29704_29777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (33))){
var inst_29633 = (state_29674[(25)]);
var inst_29635 = cljs.core.chunked_seq_QMARK_.call(null,inst_29633);
var state_29674__$1 = state_29674;
if(inst_29635){
var statearr_29705_29778 = state_29674__$1;
(statearr_29705_29778[(1)] = (36));

} else {
var statearr_29706_29779 = state_29674__$1;
(statearr_29706_29779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (13))){
var inst_29565 = (state_29674[(26)]);
var inst_29568 = cljs.core.async.close_BANG_.call(null,inst_29565);
var state_29674__$1 = state_29674;
var statearr_29707_29780 = state_29674__$1;
(statearr_29707_29780[(2)] = inst_29568);

(statearr_29707_29780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (22))){
var inst_29586 = (state_29674[(8)]);
var inst_29589 = cljs.core.async.close_BANG_.call(null,inst_29586);
var state_29674__$1 = state_29674;
var statearr_29708_29781 = state_29674__$1;
(statearr_29708_29781[(2)] = inst_29589);

(statearr_29708_29781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (36))){
var inst_29633 = (state_29674[(25)]);
var inst_29637 = cljs.core.chunk_first.call(null,inst_29633);
var inst_29638 = cljs.core.chunk_rest.call(null,inst_29633);
var inst_29639 = cljs.core.count.call(null,inst_29637);
var inst_29614 = inst_29638;
var inst_29615 = inst_29637;
var inst_29616 = inst_29639;
var inst_29617 = (0);
var state_29674__$1 = (function (){var statearr_29709 = state_29674;
(statearr_29709[(9)] = inst_29615);

(statearr_29709[(20)] = inst_29614);

(statearr_29709[(10)] = inst_29617);

(statearr_29709[(21)] = inst_29616);

return statearr_29709;
})();
var statearr_29710_29782 = state_29674__$1;
(statearr_29710_29782[(2)] = null);

(statearr_29710_29782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (41))){
var inst_29633 = (state_29674[(25)]);
var inst_29649 = (state_29674[(2)]);
var inst_29650 = cljs.core.next.call(null,inst_29633);
var inst_29614 = inst_29650;
var inst_29615 = null;
var inst_29616 = (0);
var inst_29617 = (0);
var state_29674__$1 = (function (){var statearr_29711 = state_29674;
(statearr_29711[(9)] = inst_29615);

(statearr_29711[(27)] = inst_29649);

(statearr_29711[(20)] = inst_29614);

(statearr_29711[(10)] = inst_29617);

(statearr_29711[(21)] = inst_29616);

return statearr_29711;
})();
var statearr_29712_29783 = state_29674__$1;
(statearr_29712_29783[(2)] = null);

(statearr_29712_29783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (43))){
var state_29674__$1 = state_29674;
var statearr_29713_29784 = state_29674__$1;
(statearr_29713_29784[(2)] = null);

(statearr_29713_29784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (29))){
var inst_29658 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29714_29785 = state_29674__$1;
(statearr_29714_29785[(2)] = inst_29658);

(statearr_29714_29785[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (44))){
var inst_29667 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29715 = state_29674;
(statearr_29715[(28)] = inst_29667);

return statearr_29715;
})();
var statearr_29716_29786 = state_29674__$1;
(statearr_29716_29786[(2)] = null);

(statearr_29716_29786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (6))){
var inst_29606 = (state_29674[(29)]);
var inst_29605 = cljs.core.deref.call(null,cs);
var inst_29606__$1 = cljs.core.keys.call(null,inst_29605);
var inst_29607 = cljs.core.count.call(null,inst_29606__$1);
var inst_29608 = cljs.core.reset_BANG_.call(null,dctr,inst_29607);
var inst_29613 = cljs.core.seq.call(null,inst_29606__$1);
var inst_29614 = inst_29613;
var inst_29615 = null;
var inst_29616 = (0);
var inst_29617 = (0);
var state_29674__$1 = (function (){var statearr_29717 = state_29674;
(statearr_29717[(9)] = inst_29615);

(statearr_29717[(20)] = inst_29614);

(statearr_29717[(10)] = inst_29617);

(statearr_29717[(30)] = inst_29608);

(statearr_29717[(21)] = inst_29616);

(statearr_29717[(29)] = inst_29606__$1);

return statearr_29717;
})();
var statearr_29718_29787 = state_29674__$1;
(statearr_29718_29787[(2)] = null);

(statearr_29718_29787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (28))){
var inst_29614 = (state_29674[(20)]);
var inst_29633 = (state_29674[(25)]);
var inst_29633__$1 = cljs.core.seq.call(null,inst_29614);
var state_29674__$1 = (function (){var statearr_29719 = state_29674;
(statearr_29719[(25)] = inst_29633__$1);

return statearr_29719;
})();
if(inst_29633__$1){
var statearr_29720_29788 = state_29674__$1;
(statearr_29720_29788[(1)] = (33));

} else {
var statearr_29721_29789 = state_29674__$1;
(statearr_29721_29789[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (25))){
var inst_29617 = (state_29674[(10)]);
var inst_29616 = (state_29674[(21)]);
var inst_29619 = (inst_29617 < inst_29616);
var inst_29620 = inst_29619;
var state_29674__$1 = state_29674;
if(cljs.core.truth_(inst_29620)){
var statearr_29722_29790 = state_29674__$1;
(statearr_29722_29790[(1)] = (27));

} else {
var statearr_29723_29791 = state_29674__$1;
(statearr_29723_29791[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (34))){
var state_29674__$1 = state_29674;
var statearr_29724_29792 = state_29674__$1;
(statearr_29724_29792[(2)] = null);

(statearr_29724_29792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (17))){
var state_29674__$1 = state_29674;
var statearr_29725_29793 = state_29674__$1;
(statearr_29725_29793[(2)] = null);

(statearr_29725_29793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (3))){
var inst_29672 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29674__$1,inst_29672);
} else {
if((state_val_29675 === (12))){
var inst_29601 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29726_29794 = state_29674__$1;
(statearr_29726_29794[(2)] = inst_29601);

(statearr_29726_29794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (2))){
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(4),ch);
} else {
if((state_val_29675 === (23))){
var state_29674__$1 = state_29674;
var statearr_29727_29795 = state_29674__$1;
(statearr_29727_29795[(2)] = null);

(statearr_29727_29795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (35))){
var inst_29656 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29728_29796 = state_29674__$1;
(statearr_29728_29796[(2)] = inst_29656);

(statearr_29728_29796[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (19))){
var inst_29575 = (state_29674[(7)]);
var inst_29579 = cljs.core.chunk_first.call(null,inst_29575);
var inst_29580 = cljs.core.chunk_rest.call(null,inst_29575);
var inst_29581 = cljs.core.count.call(null,inst_29579);
var inst_29555 = inst_29580;
var inst_29556 = inst_29579;
var inst_29557 = inst_29581;
var inst_29558 = (0);
var state_29674__$1 = (function (){var statearr_29729 = state_29674;
(statearr_29729[(14)] = inst_29558);

(statearr_29729[(15)] = inst_29557);

(statearr_29729[(16)] = inst_29556);

(statearr_29729[(17)] = inst_29555);

return statearr_29729;
})();
var statearr_29730_29797 = state_29674__$1;
(statearr_29730_29797[(2)] = null);

(statearr_29730_29797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (11))){
var inst_29575 = (state_29674[(7)]);
var inst_29555 = (state_29674[(17)]);
var inst_29575__$1 = cljs.core.seq.call(null,inst_29555);
var state_29674__$1 = (function (){var statearr_29731 = state_29674;
(statearr_29731[(7)] = inst_29575__$1);

return statearr_29731;
})();
if(inst_29575__$1){
var statearr_29732_29798 = state_29674__$1;
(statearr_29732_29798[(1)] = (16));

} else {
var statearr_29733_29799 = state_29674__$1;
(statearr_29733_29799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (9))){
var inst_29603 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29734_29800 = state_29674__$1;
(statearr_29734_29800[(2)] = inst_29603);

(statearr_29734_29800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (5))){
var inst_29553 = cljs.core.deref.call(null,cs);
var inst_29554 = cljs.core.seq.call(null,inst_29553);
var inst_29555 = inst_29554;
var inst_29556 = null;
var inst_29557 = (0);
var inst_29558 = (0);
var state_29674__$1 = (function (){var statearr_29735 = state_29674;
(statearr_29735[(14)] = inst_29558);

(statearr_29735[(15)] = inst_29557);

(statearr_29735[(16)] = inst_29556);

(statearr_29735[(17)] = inst_29555);

return statearr_29735;
})();
var statearr_29736_29801 = state_29674__$1;
(statearr_29736_29801[(2)] = null);

(statearr_29736_29801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (14))){
var state_29674__$1 = state_29674;
var statearr_29737_29802 = state_29674__$1;
(statearr_29737_29802[(2)] = null);

(statearr_29737_29802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (45))){
var inst_29664 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29738_29803 = state_29674__$1;
(statearr_29738_29803[(2)] = inst_29664);

(statearr_29738_29803[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (26))){
var inst_29606 = (state_29674[(29)]);
var inst_29660 = (state_29674[(2)]);
var inst_29661 = cljs.core.seq.call(null,inst_29606);
var state_29674__$1 = (function (){var statearr_29739 = state_29674;
(statearr_29739[(31)] = inst_29660);

return statearr_29739;
})();
if(inst_29661){
var statearr_29740_29804 = state_29674__$1;
(statearr_29740_29804[(1)] = (42));

} else {
var statearr_29741_29805 = state_29674__$1;
(statearr_29741_29805[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (16))){
var inst_29575 = (state_29674[(7)]);
var inst_29577 = cljs.core.chunked_seq_QMARK_.call(null,inst_29575);
var state_29674__$1 = state_29674;
if(inst_29577){
var statearr_29742_29806 = state_29674__$1;
(statearr_29742_29806[(1)] = (19));

} else {
var statearr_29743_29807 = state_29674__$1;
(statearr_29743_29807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (38))){
var inst_29653 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29744_29808 = state_29674__$1;
(statearr_29744_29808[(2)] = inst_29653);

(statearr_29744_29808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (30))){
var state_29674__$1 = state_29674;
var statearr_29745_29809 = state_29674__$1;
(statearr_29745_29809[(2)] = null);

(statearr_29745_29809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (10))){
var inst_29558 = (state_29674[(14)]);
var inst_29556 = (state_29674[(16)]);
var inst_29564 = cljs.core._nth.call(null,inst_29556,inst_29558);
var inst_29565 = cljs.core.nth.call(null,inst_29564,(0),null);
var inst_29566 = cljs.core.nth.call(null,inst_29564,(1),null);
var state_29674__$1 = (function (){var statearr_29746 = state_29674;
(statearr_29746[(26)] = inst_29565);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29566)){
var statearr_29747_29810 = state_29674__$1;
(statearr_29747_29810[(1)] = (13));

} else {
var statearr_29748_29811 = state_29674__$1;
(statearr_29748_29811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (18))){
var inst_29599 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29749_29812 = state_29674__$1;
(statearr_29749_29812[(2)] = inst_29599);

(statearr_29749_29812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (42))){
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(45),dchan);
} else {
if((state_val_29675 === (37))){
var inst_29642 = (state_29674[(23)]);
var inst_29546 = (state_29674[(11)]);
var inst_29633 = (state_29674[(25)]);
var inst_29642__$1 = cljs.core.first.call(null,inst_29633);
var inst_29643 = cljs.core.async.put_BANG_.call(null,inst_29642__$1,inst_29546,done);
var state_29674__$1 = (function (){var statearr_29750 = state_29674;
(statearr_29750[(23)] = inst_29642__$1);

return statearr_29750;
})();
if(cljs.core.truth_(inst_29643)){
var statearr_29751_29813 = state_29674__$1;
(statearr_29751_29813[(1)] = (39));

} else {
var statearr_29752_29814 = state_29674__$1;
(statearr_29752_29814[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (8))){
var inst_29558 = (state_29674[(14)]);
var inst_29557 = (state_29674[(15)]);
var inst_29560 = (inst_29558 < inst_29557);
var inst_29561 = inst_29560;
var state_29674__$1 = state_29674;
if(cljs.core.truth_(inst_29561)){
var statearr_29753_29815 = state_29674__$1;
(statearr_29753_29815[(1)] = (10));

} else {
var statearr_29754_29816 = state_29674__$1;
(statearr_29754_29816[(1)] = (11));

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
});})(c__23247__auto___29762,cs,m,dchan,dctr,done))
;
return ((function (switch__23185__auto__,c__23247__auto___29762,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23186__auto__ = null;
var cljs$core$async$mult_$_state_machine__23186__auto____0 = (function (){
var statearr_29758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29758[(0)] = cljs$core$async$mult_$_state_machine__23186__auto__);

(statearr_29758[(1)] = (1));

return statearr_29758;
});
var cljs$core$async$mult_$_state_machine__23186__auto____1 = (function (state_29674){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_29674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e29759){if((e29759 instanceof Object)){
var ex__23189__auto__ = e29759;
var statearr_29760_29817 = state_29674;
(statearr_29760_29817[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29818 = state_29674;
state_29674 = G__29818;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23186__auto__ = function(state_29674){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23186__auto____1.call(this,state_29674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23186__auto____0;
cljs$core$async$mult_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23186__auto____1;
return cljs$core$async$mult_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___29762,cs,m,dchan,dctr,done))
})();
var state__23249__auto__ = (function (){var statearr_29761 = f__23248__auto__.call(null);
(statearr_29761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___29762);

return statearr_29761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___29762,cs,m,dchan,dctr,done))
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
var G__29820 = arguments.length;
switch (G__29820) {
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

cljs.core.async.Mix = (function (){var obj29823 = {};
return obj29823;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29828){
var map__29829 = p__29828;
var map__29829__$1 = ((cljs.core.seq_QMARK_.call(null,map__29829))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);
var opts = map__29829__$1;
var statearr_29830_29833 = state;
(statearr_29830_29833[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29829,map__29829__$1,opts){
return (function (val){
var statearr_29831_29834 = state;
(statearr_29831_29834[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29829,map__29829__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29832_29835 = state;
(statearr_29832_29835[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29824){
var G__29825 = cljs.core.first.call(null,seq29824);
var seq29824__$1 = cljs.core.next.call(null,seq29824);
var G__29826 = cljs.core.first.call(null,seq29824__$1);
var seq29824__$2 = cljs.core.next.call(null,seq29824__$1);
var G__29827 = cljs.core.first.call(null,seq29824__$2);
var seq29824__$3 = cljs.core.next.call(null,seq29824__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29825,G__29826,G__29827,seq29824__$3);
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
if(typeof cljs.core.async.t29955 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29955 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29956){
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
this.meta29956 = meta29956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29955.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29955.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t29955.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29957){
var self__ = this;
var _29957__$1 = this;
return self__.meta29956;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29957,meta29956__$1){
var self__ = this;
var _29957__$1 = this;
return (new cljs.core.async.t29955(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29956__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29955.cljs$lang$type = true;

cljs.core.async.t29955.cljs$lang$ctorStr = "cljs.core.async/t29955";

cljs.core.async.t29955.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29955");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29955 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29955(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29956){
return (new cljs.core.async.t29955(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29956));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29955(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23247__auto___30074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30027){
var state_val_30028 = (state_30027[(1)]);
if((state_val_30028 === (7))){
var inst_29971 = (state_30027[(7)]);
var inst_29976 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29971);
var state_30027__$1 = state_30027;
var statearr_30029_30075 = state_30027__$1;
(statearr_30029_30075[(2)] = inst_29976);

(statearr_30029_30075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (20))){
var inst_29986 = (state_30027[(8)]);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30027__$1,(23),out,inst_29986);
} else {
if((state_val_30028 === (1))){
var inst_29961 = (state_30027[(9)]);
var inst_29961__$1 = calc_state.call(null);
var inst_29962 = cljs.core.seq_QMARK_.call(null,inst_29961__$1);
var state_30027__$1 = (function (){var statearr_30030 = state_30027;
(statearr_30030[(9)] = inst_29961__$1);

return statearr_30030;
})();
if(inst_29962){
var statearr_30031_30076 = state_30027__$1;
(statearr_30031_30076[(1)] = (2));

} else {
var statearr_30032_30077 = state_30027__$1;
(statearr_30032_30077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (24))){
var inst_29979 = (state_30027[(10)]);
var inst_29971 = inst_29979;
var state_30027__$1 = (function (){var statearr_30033 = state_30027;
(statearr_30033[(7)] = inst_29971);

return statearr_30033;
})();
var statearr_30034_30078 = state_30027__$1;
(statearr_30034_30078[(2)] = null);

(statearr_30034_30078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (4))){
var inst_29961 = (state_30027[(9)]);
var inst_29967 = (state_30027[(2)]);
var inst_29968 = cljs.core.get.call(null,inst_29967,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29969 = cljs.core.get.call(null,inst_29967,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29970 = cljs.core.get.call(null,inst_29967,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29971 = inst_29961;
var state_30027__$1 = (function (){var statearr_30035 = state_30027;
(statearr_30035[(11)] = inst_29970);

(statearr_30035[(12)] = inst_29968);

(statearr_30035[(7)] = inst_29971);

(statearr_30035[(13)] = inst_29969);

return statearr_30035;
})();
var statearr_30036_30079 = state_30027__$1;
(statearr_30036_30079[(2)] = null);

(statearr_30036_30079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (15))){
var state_30027__$1 = state_30027;
var statearr_30037_30080 = state_30027__$1;
(statearr_30037_30080[(2)] = null);

(statearr_30037_30080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (21))){
var inst_29979 = (state_30027[(10)]);
var inst_29971 = inst_29979;
var state_30027__$1 = (function (){var statearr_30038 = state_30027;
(statearr_30038[(7)] = inst_29971);

return statearr_30038;
})();
var statearr_30039_30081 = state_30027__$1;
(statearr_30039_30081[(2)] = null);

(statearr_30039_30081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (13))){
var inst_30023 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30040_30082 = state_30027__$1;
(statearr_30040_30082[(2)] = inst_30023);

(statearr_30040_30082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (22))){
var inst_30021 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30041_30083 = state_30027__$1;
(statearr_30041_30083[(2)] = inst_30021);

(statearr_30041_30083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (6))){
var inst_30025 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30027__$1,inst_30025);
} else {
if((state_val_30028 === (25))){
var state_30027__$1 = state_30027;
var statearr_30042_30084 = state_30027__$1;
(statearr_30042_30084[(2)] = null);

(statearr_30042_30084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (17))){
var inst_30001 = (state_30027[(14)]);
var state_30027__$1 = state_30027;
var statearr_30043_30085 = state_30027__$1;
(statearr_30043_30085[(2)] = inst_30001);

(statearr_30043_30085[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (3))){
var inst_29961 = (state_30027[(9)]);
var state_30027__$1 = state_30027;
var statearr_30044_30086 = state_30027__$1;
(statearr_30044_30086[(2)] = inst_29961);

(statearr_30044_30086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (12))){
var inst_29982 = (state_30027[(15)]);
var inst_30001 = (state_30027[(14)]);
var inst_29987 = (state_30027[(16)]);
var inst_30001__$1 = inst_29982.call(null,inst_29987);
var state_30027__$1 = (function (){var statearr_30045 = state_30027;
(statearr_30045[(14)] = inst_30001__$1);

return statearr_30045;
})();
if(cljs.core.truth_(inst_30001__$1)){
var statearr_30046_30087 = state_30027__$1;
(statearr_30046_30087[(1)] = (17));

} else {
var statearr_30047_30088 = state_30027__$1;
(statearr_30047_30088[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (2))){
var inst_29961 = (state_30027[(9)]);
var inst_29964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29961);
var state_30027__$1 = state_30027;
var statearr_30048_30089 = state_30027__$1;
(statearr_30048_30089[(2)] = inst_29964);

(statearr_30048_30089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (23))){
var inst_30012 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
if(cljs.core.truth_(inst_30012)){
var statearr_30049_30090 = state_30027__$1;
(statearr_30049_30090[(1)] = (24));

} else {
var statearr_30050_30091 = state_30027__$1;
(statearr_30050_30091[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (19))){
var inst_30009 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
if(cljs.core.truth_(inst_30009)){
var statearr_30051_30092 = state_30027__$1;
(statearr_30051_30092[(1)] = (20));

} else {
var statearr_30052_30093 = state_30027__$1;
(statearr_30052_30093[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (11))){
var inst_29986 = (state_30027[(8)]);
var inst_29992 = (inst_29986 == null);
var state_30027__$1 = state_30027;
if(cljs.core.truth_(inst_29992)){
var statearr_30053_30094 = state_30027__$1;
(statearr_30053_30094[(1)] = (14));

} else {
var statearr_30054_30095 = state_30027__$1;
(statearr_30054_30095[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (9))){
var inst_29979 = (state_30027[(10)]);
var inst_29979__$1 = (state_30027[(2)]);
var inst_29980 = cljs.core.get.call(null,inst_29979__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29981 = cljs.core.get.call(null,inst_29979__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29982 = cljs.core.get.call(null,inst_29979__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30027__$1 = (function (){var statearr_30055 = state_30027;
(statearr_30055[(15)] = inst_29982);

(statearr_30055[(17)] = inst_29981);

(statearr_30055[(10)] = inst_29979__$1);

return statearr_30055;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30027__$1,(10),inst_29980);
} else {
if((state_val_30028 === (5))){
var inst_29971 = (state_30027[(7)]);
var inst_29974 = cljs.core.seq_QMARK_.call(null,inst_29971);
var state_30027__$1 = state_30027;
if(inst_29974){
var statearr_30056_30096 = state_30027__$1;
(statearr_30056_30096[(1)] = (7));

} else {
var statearr_30057_30097 = state_30027__$1;
(statearr_30057_30097[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (14))){
var inst_29987 = (state_30027[(16)]);
var inst_29994 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29987);
var state_30027__$1 = state_30027;
var statearr_30058_30098 = state_30027__$1;
(statearr_30058_30098[(2)] = inst_29994);

(statearr_30058_30098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (26))){
var inst_30017 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30059_30099 = state_30027__$1;
(statearr_30059_30099[(2)] = inst_30017);

(statearr_30059_30099[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (16))){
var inst_29997 = (state_30027[(2)]);
var inst_29998 = calc_state.call(null);
var inst_29971 = inst_29998;
var state_30027__$1 = (function (){var statearr_30060 = state_30027;
(statearr_30060[(7)] = inst_29971);

(statearr_30060[(18)] = inst_29997);

return statearr_30060;
})();
var statearr_30061_30100 = state_30027__$1;
(statearr_30061_30100[(2)] = null);

(statearr_30061_30100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (10))){
var inst_29986 = (state_30027[(8)]);
var inst_29987 = (state_30027[(16)]);
var inst_29985 = (state_30027[(2)]);
var inst_29986__$1 = cljs.core.nth.call(null,inst_29985,(0),null);
var inst_29987__$1 = cljs.core.nth.call(null,inst_29985,(1),null);
var inst_29988 = (inst_29986__$1 == null);
var inst_29989 = cljs.core._EQ_.call(null,inst_29987__$1,change);
var inst_29990 = (inst_29988) || (inst_29989);
var state_30027__$1 = (function (){var statearr_30062 = state_30027;
(statearr_30062[(8)] = inst_29986__$1);

(statearr_30062[(16)] = inst_29987__$1);

return statearr_30062;
})();
if(cljs.core.truth_(inst_29990)){
var statearr_30063_30101 = state_30027__$1;
(statearr_30063_30101[(1)] = (11));

} else {
var statearr_30064_30102 = state_30027__$1;
(statearr_30064_30102[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (18))){
var inst_29982 = (state_30027[(15)]);
var inst_29981 = (state_30027[(17)]);
var inst_29987 = (state_30027[(16)]);
var inst_30004 = cljs.core.empty_QMARK_.call(null,inst_29982);
var inst_30005 = inst_29981.call(null,inst_29987);
var inst_30006 = cljs.core.not.call(null,inst_30005);
var inst_30007 = (inst_30004) && (inst_30006);
var state_30027__$1 = state_30027;
var statearr_30065_30103 = state_30027__$1;
(statearr_30065_30103[(2)] = inst_30007);

(statearr_30065_30103[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (8))){
var inst_29971 = (state_30027[(7)]);
var state_30027__$1 = state_30027;
var statearr_30066_30104 = state_30027__$1;
(statearr_30066_30104[(2)] = inst_29971);

(statearr_30066_30104[(1)] = (9));


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
});})(c__23247__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23185__auto__,c__23247__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23186__auto__ = null;
var cljs$core$async$mix_$_state_machine__23186__auto____0 = (function (){
var statearr_30070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30070[(0)] = cljs$core$async$mix_$_state_machine__23186__auto__);

(statearr_30070[(1)] = (1));

return statearr_30070;
});
var cljs$core$async$mix_$_state_machine__23186__auto____1 = (function (state_30027){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30071){if((e30071 instanceof Object)){
var ex__23189__auto__ = e30071;
var statearr_30072_30105 = state_30027;
(statearr_30072_30105[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30106 = state_30027;
state_30027 = G__30106;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23186__auto__ = function(state_30027){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23186__auto____1.call(this,state_30027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23186__auto____0;
cljs$core$async$mix_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23186__auto____1;
return cljs$core$async$mix_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23249__auto__ = (function (){var statearr_30073 = f__23248__auto__.call(null);
(statearr_30073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30074);

return statearr_30073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30108 = {};
return obj30108;
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
var G__30110 = arguments.length;
switch (G__30110) {
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
var G__30114 = arguments.length;
switch (G__30114) {
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
return (function (p1__30112_SHARP_){
if(cljs.core.truth_(p1__30112_SHARP_.call(null,topic))){
return p1__30112_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30112_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30115 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta30116){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta30116 = meta30116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30115.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30115.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30117){
var self__ = this;
var _30117__$1 = this;
return self__.meta30116;
});})(mults,ensure_mult))
;

cljs.core.async.t30115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30117,meta30116__$1){
var self__ = this;
var _30117__$1 = this;
return (new cljs.core.async.t30115(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta30116__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30115.cljs$lang$type = true;

cljs.core.async.t30115.cljs$lang$ctorStr = "cljs.core.async/t30115";

cljs.core.async.t30115.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30115");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30115 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30115(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30116){
return (new cljs.core.async.t30115(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30116));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30115(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23247__auto___30238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30238,mults,ensure_mult,p){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30238,mults,ensure_mult,p){
return (function (state_30189){
var state_val_30190 = (state_30189[(1)]);
if((state_val_30190 === (7))){
var inst_30185 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30191_30239 = state_30189__$1;
(statearr_30191_30239[(2)] = inst_30185);

(statearr_30191_30239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (20))){
var state_30189__$1 = state_30189;
var statearr_30192_30240 = state_30189__$1;
(statearr_30192_30240[(2)] = null);

(statearr_30192_30240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (1))){
var state_30189__$1 = state_30189;
var statearr_30193_30241 = state_30189__$1;
(statearr_30193_30241[(2)] = null);

(statearr_30193_30241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (24))){
var inst_30168 = (state_30189[(7)]);
var inst_30177 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30168);
var state_30189__$1 = state_30189;
var statearr_30194_30242 = state_30189__$1;
(statearr_30194_30242[(2)] = inst_30177);

(statearr_30194_30242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (4))){
var inst_30120 = (state_30189[(8)]);
var inst_30120__$1 = (state_30189[(2)]);
var inst_30121 = (inst_30120__$1 == null);
var state_30189__$1 = (function (){var statearr_30195 = state_30189;
(statearr_30195[(8)] = inst_30120__$1);

return statearr_30195;
})();
if(cljs.core.truth_(inst_30121)){
var statearr_30196_30243 = state_30189__$1;
(statearr_30196_30243[(1)] = (5));

} else {
var statearr_30197_30244 = state_30189__$1;
(statearr_30197_30244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (15))){
var inst_30162 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30198_30245 = state_30189__$1;
(statearr_30198_30245[(2)] = inst_30162);

(statearr_30198_30245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (21))){
var inst_30182 = (state_30189[(2)]);
var state_30189__$1 = (function (){var statearr_30199 = state_30189;
(statearr_30199[(9)] = inst_30182);

return statearr_30199;
})();
var statearr_30200_30246 = state_30189__$1;
(statearr_30200_30246[(2)] = null);

(statearr_30200_30246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (13))){
var inst_30144 = (state_30189[(10)]);
var inst_30146 = cljs.core.chunked_seq_QMARK_.call(null,inst_30144);
var state_30189__$1 = state_30189;
if(inst_30146){
var statearr_30201_30247 = state_30189__$1;
(statearr_30201_30247[(1)] = (16));

} else {
var statearr_30202_30248 = state_30189__$1;
(statearr_30202_30248[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (22))){
var inst_30174 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
if(cljs.core.truth_(inst_30174)){
var statearr_30203_30249 = state_30189__$1;
(statearr_30203_30249[(1)] = (23));

} else {
var statearr_30204_30250 = state_30189__$1;
(statearr_30204_30250[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (6))){
var inst_30170 = (state_30189[(11)]);
var inst_30168 = (state_30189[(7)]);
var inst_30120 = (state_30189[(8)]);
var inst_30168__$1 = topic_fn.call(null,inst_30120);
var inst_30169 = cljs.core.deref.call(null,mults);
var inst_30170__$1 = cljs.core.get.call(null,inst_30169,inst_30168__$1);
var state_30189__$1 = (function (){var statearr_30205 = state_30189;
(statearr_30205[(11)] = inst_30170__$1);

(statearr_30205[(7)] = inst_30168__$1);

return statearr_30205;
})();
if(cljs.core.truth_(inst_30170__$1)){
var statearr_30206_30251 = state_30189__$1;
(statearr_30206_30251[(1)] = (19));

} else {
var statearr_30207_30252 = state_30189__$1;
(statearr_30207_30252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (25))){
var inst_30179 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30208_30253 = state_30189__$1;
(statearr_30208_30253[(2)] = inst_30179);

(statearr_30208_30253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (17))){
var inst_30144 = (state_30189[(10)]);
var inst_30153 = cljs.core.first.call(null,inst_30144);
var inst_30154 = cljs.core.async.muxch_STAR_.call(null,inst_30153);
var inst_30155 = cljs.core.async.close_BANG_.call(null,inst_30154);
var inst_30156 = cljs.core.next.call(null,inst_30144);
var inst_30130 = inst_30156;
var inst_30131 = null;
var inst_30132 = (0);
var inst_30133 = (0);
var state_30189__$1 = (function (){var statearr_30209 = state_30189;
(statearr_30209[(12)] = inst_30130);

(statearr_30209[(13)] = inst_30131);

(statearr_30209[(14)] = inst_30133);

(statearr_30209[(15)] = inst_30132);

(statearr_30209[(16)] = inst_30155);

return statearr_30209;
})();
var statearr_30210_30254 = state_30189__$1;
(statearr_30210_30254[(2)] = null);

(statearr_30210_30254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (3))){
var inst_30187 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30189__$1,inst_30187);
} else {
if((state_val_30190 === (12))){
var inst_30164 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30211_30255 = state_30189__$1;
(statearr_30211_30255[(2)] = inst_30164);

(statearr_30211_30255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (2))){
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30189__$1,(4),ch);
} else {
if((state_val_30190 === (23))){
var state_30189__$1 = state_30189;
var statearr_30212_30256 = state_30189__$1;
(statearr_30212_30256[(2)] = null);

(statearr_30212_30256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (19))){
var inst_30170 = (state_30189[(11)]);
var inst_30120 = (state_30189[(8)]);
var inst_30172 = cljs.core.async.muxch_STAR_.call(null,inst_30170);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30189__$1,(22),inst_30172,inst_30120);
} else {
if((state_val_30190 === (11))){
var inst_30130 = (state_30189[(12)]);
var inst_30144 = (state_30189[(10)]);
var inst_30144__$1 = cljs.core.seq.call(null,inst_30130);
var state_30189__$1 = (function (){var statearr_30213 = state_30189;
(statearr_30213[(10)] = inst_30144__$1);

return statearr_30213;
})();
if(inst_30144__$1){
var statearr_30214_30257 = state_30189__$1;
(statearr_30214_30257[(1)] = (13));

} else {
var statearr_30215_30258 = state_30189__$1;
(statearr_30215_30258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (9))){
var inst_30166 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30216_30259 = state_30189__$1;
(statearr_30216_30259[(2)] = inst_30166);

(statearr_30216_30259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (5))){
var inst_30127 = cljs.core.deref.call(null,mults);
var inst_30128 = cljs.core.vals.call(null,inst_30127);
var inst_30129 = cljs.core.seq.call(null,inst_30128);
var inst_30130 = inst_30129;
var inst_30131 = null;
var inst_30132 = (0);
var inst_30133 = (0);
var state_30189__$1 = (function (){var statearr_30217 = state_30189;
(statearr_30217[(12)] = inst_30130);

(statearr_30217[(13)] = inst_30131);

(statearr_30217[(14)] = inst_30133);

(statearr_30217[(15)] = inst_30132);

return statearr_30217;
})();
var statearr_30218_30260 = state_30189__$1;
(statearr_30218_30260[(2)] = null);

(statearr_30218_30260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (14))){
var state_30189__$1 = state_30189;
var statearr_30222_30261 = state_30189__$1;
(statearr_30222_30261[(2)] = null);

(statearr_30222_30261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (16))){
var inst_30144 = (state_30189[(10)]);
var inst_30148 = cljs.core.chunk_first.call(null,inst_30144);
var inst_30149 = cljs.core.chunk_rest.call(null,inst_30144);
var inst_30150 = cljs.core.count.call(null,inst_30148);
var inst_30130 = inst_30149;
var inst_30131 = inst_30148;
var inst_30132 = inst_30150;
var inst_30133 = (0);
var state_30189__$1 = (function (){var statearr_30223 = state_30189;
(statearr_30223[(12)] = inst_30130);

(statearr_30223[(13)] = inst_30131);

(statearr_30223[(14)] = inst_30133);

(statearr_30223[(15)] = inst_30132);

return statearr_30223;
})();
var statearr_30224_30262 = state_30189__$1;
(statearr_30224_30262[(2)] = null);

(statearr_30224_30262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (10))){
var inst_30130 = (state_30189[(12)]);
var inst_30131 = (state_30189[(13)]);
var inst_30133 = (state_30189[(14)]);
var inst_30132 = (state_30189[(15)]);
var inst_30138 = cljs.core._nth.call(null,inst_30131,inst_30133);
var inst_30139 = cljs.core.async.muxch_STAR_.call(null,inst_30138);
var inst_30140 = cljs.core.async.close_BANG_.call(null,inst_30139);
var inst_30141 = (inst_30133 + (1));
var tmp30219 = inst_30130;
var tmp30220 = inst_30131;
var tmp30221 = inst_30132;
var inst_30130__$1 = tmp30219;
var inst_30131__$1 = tmp30220;
var inst_30132__$1 = tmp30221;
var inst_30133__$1 = inst_30141;
var state_30189__$1 = (function (){var statearr_30225 = state_30189;
(statearr_30225[(12)] = inst_30130__$1);

(statearr_30225[(13)] = inst_30131__$1);

(statearr_30225[(14)] = inst_30133__$1);

(statearr_30225[(15)] = inst_30132__$1);

(statearr_30225[(17)] = inst_30140);

return statearr_30225;
})();
var statearr_30226_30263 = state_30189__$1;
(statearr_30226_30263[(2)] = null);

(statearr_30226_30263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (18))){
var inst_30159 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30227_30264 = state_30189__$1;
(statearr_30227_30264[(2)] = inst_30159);

(statearr_30227_30264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (8))){
var inst_30133 = (state_30189[(14)]);
var inst_30132 = (state_30189[(15)]);
var inst_30135 = (inst_30133 < inst_30132);
var inst_30136 = inst_30135;
var state_30189__$1 = state_30189;
if(cljs.core.truth_(inst_30136)){
var statearr_30228_30265 = state_30189__$1;
(statearr_30228_30265[(1)] = (10));

} else {
var statearr_30229_30266 = state_30189__$1;
(statearr_30229_30266[(1)] = (11));

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
});})(c__23247__auto___30238,mults,ensure_mult,p))
;
return ((function (switch__23185__auto__,c__23247__auto___30238,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30233[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30233[(1)] = (1));

return statearr_30233;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30189){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30234){if((e30234 instanceof Object)){
var ex__23189__auto__ = e30234;
var statearr_30235_30267 = state_30189;
(statearr_30235_30267[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30268 = state_30189;
state_30189 = G__30268;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30238,mults,ensure_mult,p))
})();
var state__23249__auto__ = (function (){var statearr_30236 = f__23248__auto__.call(null);
(statearr_30236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30238);

return statearr_30236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30238,mults,ensure_mult,p))
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
var G__30270 = arguments.length;
switch (G__30270) {
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
var G__30273 = arguments.length;
switch (G__30273) {
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
var G__30276 = arguments.length;
switch (G__30276) {
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
var c__23247__auto___30346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30315){
var state_val_30316 = (state_30315[(1)]);
if((state_val_30316 === (7))){
var state_30315__$1 = state_30315;
var statearr_30317_30347 = state_30315__$1;
(statearr_30317_30347[(2)] = null);

(statearr_30317_30347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (1))){
var state_30315__$1 = state_30315;
var statearr_30318_30348 = state_30315__$1;
(statearr_30318_30348[(2)] = null);

(statearr_30318_30348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (4))){
var inst_30279 = (state_30315[(7)]);
var inst_30281 = (inst_30279 < cnt);
var state_30315__$1 = state_30315;
if(cljs.core.truth_(inst_30281)){
var statearr_30319_30349 = state_30315__$1;
(statearr_30319_30349[(1)] = (6));

} else {
var statearr_30320_30350 = state_30315__$1;
(statearr_30320_30350[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (15))){
var inst_30311 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30321_30351 = state_30315__$1;
(statearr_30321_30351[(2)] = inst_30311);

(statearr_30321_30351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (13))){
var inst_30304 = cljs.core.async.close_BANG_.call(null,out);
var state_30315__$1 = state_30315;
var statearr_30322_30352 = state_30315__$1;
(statearr_30322_30352[(2)] = inst_30304);

(statearr_30322_30352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (6))){
var state_30315__$1 = state_30315;
var statearr_30323_30353 = state_30315__$1;
(statearr_30323_30353[(2)] = null);

(statearr_30323_30353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (3))){
var inst_30313 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30315__$1,inst_30313);
} else {
if((state_val_30316 === (12))){
var inst_30301 = (state_30315[(8)]);
var inst_30301__$1 = (state_30315[(2)]);
var inst_30302 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30301__$1);
var state_30315__$1 = (function (){var statearr_30324 = state_30315;
(statearr_30324[(8)] = inst_30301__$1);

return statearr_30324;
})();
if(cljs.core.truth_(inst_30302)){
var statearr_30325_30354 = state_30315__$1;
(statearr_30325_30354[(1)] = (13));

} else {
var statearr_30326_30355 = state_30315__$1;
(statearr_30326_30355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (2))){
var inst_30278 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30279 = (0);
var state_30315__$1 = (function (){var statearr_30327 = state_30315;
(statearr_30327[(9)] = inst_30278);

(statearr_30327[(7)] = inst_30279);

return statearr_30327;
})();
var statearr_30328_30356 = state_30315__$1;
(statearr_30328_30356[(2)] = null);

(statearr_30328_30356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (11))){
var inst_30279 = (state_30315[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30315,(10),Object,null,(9));
var inst_30288 = chs__$1.call(null,inst_30279);
var inst_30289 = done.call(null,inst_30279);
var inst_30290 = cljs.core.async.take_BANG_.call(null,inst_30288,inst_30289);
var state_30315__$1 = state_30315;
var statearr_30329_30357 = state_30315__$1;
(statearr_30329_30357[(2)] = inst_30290);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30315__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (9))){
var inst_30279 = (state_30315[(7)]);
var inst_30292 = (state_30315[(2)]);
var inst_30293 = (inst_30279 + (1));
var inst_30279__$1 = inst_30293;
var state_30315__$1 = (function (){var statearr_30330 = state_30315;
(statearr_30330[(7)] = inst_30279__$1);

(statearr_30330[(10)] = inst_30292);

return statearr_30330;
})();
var statearr_30331_30358 = state_30315__$1;
(statearr_30331_30358[(2)] = null);

(statearr_30331_30358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (5))){
var inst_30299 = (state_30315[(2)]);
var state_30315__$1 = (function (){var statearr_30332 = state_30315;
(statearr_30332[(11)] = inst_30299);

return statearr_30332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30315__$1,(12),dchan);
} else {
if((state_val_30316 === (14))){
var inst_30301 = (state_30315[(8)]);
var inst_30306 = cljs.core.apply.call(null,f,inst_30301);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30315__$1,(16),out,inst_30306);
} else {
if((state_val_30316 === (16))){
var inst_30308 = (state_30315[(2)]);
var state_30315__$1 = (function (){var statearr_30333 = state_30315;
(statearr_30333[(12)] = inst_30308);

return statearr_30333;
})();
var statearr_30334_30359 = state_30315__$1;
(statearr_30334_30359[(2)] = null);

(statearr_30334_30359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (10))){
var inst_30283 = (state_30315[(2)]);
var inst_30284 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30315__$1 = (function (){var statearr_30335 = state_30315;
(statearr_30335[(13)] = inst_30283);

return statearr_30335;
})();
var statearr_30336_30360 = state_30315__$1;
(statearr_30336_30360[(2)] = inst_30284);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30315__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (8))){
var inst_30297 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30337_30361 = state_30315__$1;
(statearr_30337_30361[(2)] = inst_30297);

(statearr_30337_30361[(1)] = (5));


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
});})(c__23247__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23185__auto__,c__23247__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30341[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30315){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__23189__auto__ = e30342;
var statearr_30343_30362 = state_30315;
(statearr_30343_30362[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30363 = state_30315;
state_30315 = G__30363;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23249__auto__ = (function (){var statearr_30344 = f__23248__auto__.call(null);
(statearr_30344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30346);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30366 = arguments.length;
switch (G__30366) {
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
var c__23247__auto___30421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30421,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30421,out){
return (function (state_30396){
var state_val_30397 = (state_30396[(1)]);
if((state_val_30397 === (7))){
var inst_30376 = (state_30396[(7)]);
var inst_30375 = (state_30396[(8)]);
var inst_30375__$1 = (state_30396[(2)]);
var inst_30376__$1 = cljs.core.nth.call(null,inst_30375__$1,(0),null);
var inst_30377 = cljs.core.nth.call(null,inst_30375__$1,(1),null);
var inst_30378 = (inst_30376__$1 == null);
var state_30396__$1 = (function (){var statearr_30398 = state_30396;
(statearr_30398[(9)] = inst_30377);

(statearr_30398[(7)] = inst_30376__$1);

(statearr_30398[(8)] = inst_30375__$1);

return statearr_30398;
})();
if(cljs.core.truth_(inst_30378)){
var statearr_30399_30422 = state_30396__$1;
(statearr_30399_30422[(1)] = (8));

} else {
var statearr_30400_30423 = state_30396__$1;
(statearr_30400_30423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (1))){
var inst_30367 = cljs.core.vec.call(null,chs);
var inst_30368 = inst_30367;
var state_30396__$1 = (function (){var statearr_30401 = state_30396;
(statearr_30401[(10)] = inst_30368);

return statearr_30401;
})();
var statearr_30402_30424 = state_30396__$1;
(statearr_30402_30424[(2)] = null);

(statearr_30402_30424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (4))){
var inst_30368 = (state_30396[(10)]);
var state_30396__$1 = state_30396;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30396__$1,(7),inst_30368);
} else {
if((state_val_30397 === (6))){
var inst_30392 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30403_30425 = state_30396__$1;
(statearr_30403_30425[(2)] = inst_30392);

(statearr_30403_30425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (3))){
var inst_30394 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30396__$1,inst_30394);
} else {
if((state_val_30397 === (2))){
var inst_30368 = (state_30396[(10)]);
var inst_30370 = cljs.core.count.call(null,inst_30368);
var inst_30371 = (inst_30370 > (0));
var state_30396__$1 = state_30396;
if(cljs.core.truth_(inst_30371)){
var statearr_30405_30426 = state_30396__$1;
(statearr_30405_30426[(1)] = (4));

} else {
var statearr_30406_30427 = state_30396__$1;
(statearr_30406_30427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (11))){
var inst_30368 = (state_30396[(10)]);
var inst_30385 = (state_30396[(2)]);
var tmp30404 = inst_30368;
var inst_30368__$1 = tmp30404;
var state_30396__$1 = (function (){var statearr_30407 = state_30396;
(statearr_30407[(10)] = inst_30368__$1);

(statearr_30407[(11)] = inst_30385);

return statearr_30407;
})();
var statearr_30408_30428 = state_30396__$1;
(statearr_30408_30428[(2)] = null);

(statearr_30408_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (9))){
var inst_30376 = (state_30396[(7)]);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30396__$1,(11),out,inst_30376);
} else {
if((state_val_30397 === (5))){
var inst_30390 = cljs.core.async.close_BANG_.call(null,out);
var state_30396__$1 = state_30396;
var statearr_30409_30429 = state_30396__$1;
(statearr_30409_30429[(2)] = inst_30390);

(statearr_30409_30429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (10))){
var inst_30388 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30410_30430 = state_30396__$1;
(statearr_30410_30430[(2)] = inst_30388);

(statearr_30410_30430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (8))){
var inst_30368 = (state_30396[(10)]);
var inst_30377 = (state_30396[(9)]);
var inst_30376 = (state_30396[(7)]);
var inst_30375 = (state_30396[(8)]);
var inst_30380 = (function (){var c = inst_30377;
var v = inst_30376;
var vec__30373 = inst_30375;
var cs = inst_30368;
return ((function (c,v,vec__30373,cs,inst_30368,inst_30377,inst_30376,inst_30375,state_val_30397,c__23247__auto___30421,out){
return (function (p1__30364_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30364_SHARP_);
});
;})(c,v,vec__30373,cs,inst_30368,inst_30377,inst_30376,inst_30375,state_val_30397,c__23247__auto___30421,out))
})();
var inst_30381 = cljs.core.filterv.call(null,inst_30380,inst_30368);
var inst_30368__$1 = inst_30381;
var state_30396__$1 = (function (){var statearr_30411 = state_30396;
(statearr_30411[(10)] = inst_30368__$1);

return statearr_30411;
})();
var statearr_30412_30431 = state_30396__$1;
(statearr_30412_30431[(2)] = null);

(statearr_30412_30431[(1)] = (2));


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
});})(c__23247__auto___30421,out))
;
return ((function (switch__23185__auto__,c__23247__auto___30421,out){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30416 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30416[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30416[(1)] = (1));

return statearr_30416;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30396){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30417){if((e30417 instanceof Object)){
var ex__23189__auto__ = e30417;
var statearr_30418_30432 = state_30396;
(statearr_30418_30432[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30433 = state_30396;
state_30396 = G__30433;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30421,out))
})();
var state__23249__auto__ = (function (){var statearr_30419 = f__23248__auto__.call(null);
(statearr_30419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30421);

return statearr_30419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30421,out))
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
var G__30435 = arguments.length;
switch (G__30435) {
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
var c__23247__auto___30483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30483,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30483,out){
return (function (state_30459){
var state_val_30460 = (state_30459[(1)]);
if((state_val_30460 === (7))){
var inst_30441 = (state_30459[(7)]);
var inst_30441__$1 = (state_30459[(2)]);
var inst_30442 = (inst_30441__$1 == null);
var inst_30443 = cljs.core.not.call(null,inst_30442);
var state_30459__$1 = (function (){var statearr_30461 = state_30459;
(statearr_30461[(7)] = inst_30441__$1);

return statearr_30461;
})();
if(inst_30443){
var statearr_30462_30484 = state_30459__$1;
(statearr_30462_30484[(1)] = (8));

} else {
var statearr_30463_30485 = state_30459__$1;
(statearr_30463_30485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (1))){
var inst_30436 = (0);
var state_30459__$1 = (function (){var statearr_30464 = state_30459;
(statearr_30464[(8)] = inst_30436);

return statearr_30464;
})();
var statearr_30465_30486 = state_30459__$1;
(statearr_30465_30486[(2)] = null);

(statearr_30465_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (4))){
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30459__$1,(7),ch);
} else {
if((state_val_30460 === (6))){
var inst_30454 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30466_30487 = state_30459__$1;
(statearr_30466_30487[(2)] = inst_30454);

(statearr_30466_30487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (3))){
var inst_30456 = (state_30459[(2)]);
var inst_30457 = cljs.core.async.close_BANG_.call(null,out);
var state_30459__$1 = (function (){var statearr_30467 = state_30459;
(statearr_30467[(9)] = inst_30456);

return statearr_30467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30459__$1,inst_30457);
} else {
if((state_val_30460 === (2))){
var inst_30436 = (state_30459[(8)]);
var inst_30438 = (inst_30436 < n);
var state_30459__$1 = state_30459;
if(cljs.core.truth_(inst_30438)){
var statearr_30468_30488 = state_30459__$1;
(statearr_30468_30488[(1)] = (4));

} else {
var statearr_30469_30489 = state_30459__$1;
(statearr_30469_30489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (11))){
var inst_30436 = (state_30459[(8)]);
var inst_30446 = (state_30459[(2)]);
var inst_30447 = (inst_30436 + (1));
var inst_30436__$1 = inst_30447;
var state_30459__$1 = (function (){var statearr_30470 = state_30459;
(statearr_30470[(8)] = inst_30436__$1);

(statearr_30470[(10)] = inst_30446);

return statearr_30470;
})();
var statearr_30471_30490 = state_30459__$1;
(statearr_30471_30490[(2)] = null);

(statearr_30471_30490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (9))){
var state_30459__$1 = state_30459;
var statearr_30472_30491 = state_30459__$1;
(statearr_30472_30491[(2)] = null);

(statearr_30472_30491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (5))){
var state_30459__$1 = state_30459;
var statearr_30473_30492 = state_30459__$1;
(statearr_30473_30492[(2)] = null);

(statearr_30473_30492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (10))){
var inst_30451 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30474_30493 = state_30459__$1;
(statearr_30474_30493[(2)] = inst_30451);

(statearr_30474_30493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (8))){
var inst_30441 = (state_30459[(7)]);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30459__$1,(11),out,inst_30441);
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
});})(c__23247__auto___30483,out))
;
return ((function (switch__23185__auto__,c__23247__auto___30483,out){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30478[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30478[(1)] = (1));

return statearr_30478;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30459){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30479){if((e30479 instanceof Object)){
var ex__23189__auto__ = e30479;
var statearr_30480_30494 = state_30459;
(statearr_30480_30494[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30495 = state_30459;
state_30459 = G__30495;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30483,out))
})();
var state__23249__auto__ = (function (){var statearr_30481 = f__23248__auto__.call(null);
(statearr_30481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30483);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30483,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30503 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30503 = (function (ch,f,map_LT_,meta30504){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30504 = meta30504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30506 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30506 = (function (fn1,_,meta30504,map_LT_,f,ch,meta30507){
this.fn1 = fn1;
this._ = _;
this.meta30504 = meta30504;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30507 = meta30507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30506.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30496_SHARP_){
return f1.call(null,(((p1__30496_SHARP_ == null))?null:self__.f.call(null,p1__30496_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30508){
var self__ = this;
var _30508__$1 = this;
return self__.meta30507;
});})(___$1))
;

cljs.core.async.t30506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30508,meta30507__$1){
var self__ = this;
var _30508__$1 = this;
return (new cljs.core.async.t30506(self__.fn1,self__._,self__.meta30504,self__.map_LT_,self__.f,self__.ch,meta30507__$1));
});})(___$1))
;

cljs.core.async.t30506.cljs$lang$type = true;

cljs.core.async.t30506.cljs$lang$ctorStr = "cljs.core.async/t30506";

cljs.core.async.t30506.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30506");
});})(___$1))
;

cljs.core.async.__GT_t30506 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30506(fn1__$1,___$2,meta30504__$1,map_LT___$1,f__$1,ch__$1,meta30507){
return (new cljs.core.async.t30506(fn1__$1,___$2,meta30504__$1,map_LT___$1,f__$1,ch__$1,meta30507));
});})(___$1))
;

}

return (new cljs.core.async.t30506(fn1,___$1,self__.meta30504,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30505){
var self__ = this;
var _30505__$1 = this;
return self__.meta30504;
});

cljs.core.async.t30503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30505,meta30504__$1){
var self__ = this;
var _30505__$1 = this;
return (new cljs.core.async.t30503(self__.ch,self__.f,self__.map_LT_,meta30504__$1));
});

cljs.core.async.t30503.cljs$lang$type = true;

cljs.core.async.t30503.cljs$lang$ctorStr = "cljs.core.async/t30503";

cljs.core.async.t30503.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30503");
});

cljs.core.async.__GT_t30503 = (function cljs$core$async$map_LT__$___GT_t30503(ch__$1,f__$1,map_LT___$1,meta30504){
return (new cljs.core.async.t30503(ch__$1,f__$1,map_LT___$1,meta30504));
});

}

return (new cljs.core.async.t30503(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30512 = (function (ch,f,map_GT_,meta30513){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30513 = meta30513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30512.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30512.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30512.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30514){
var self__ = this;
var _30514__$1 = this;
return self__.meta30513;
});

cljs.core.async.t30512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30514,meta30513__$1){
var self__ = this;
var _30514__$1 = this;
return (new cljs.core.async.t30512(self__.ch,self__.f,self__.map_GT_,meta30513__$1));
});

cljs.core.async.t30512.cljs$lang$type = true;

cljs.core.async.t30512.cljs$lang$ctorStr = "cljs.core.async/t30512";

cljs.core.async.t30512.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30512");
});

cljs.core.async.__GT_t30512 = (function cljs$core$async$map_GT__$___GT_t30512(ch__$1,f__$1,map_GT___$1,meta30513){
return (new cljs.core.async.t30512(ch__$1,f__$1,map_GT___$1,meta30513));
});

}

return (new cljs.core.async.t30512(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30518 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30518 = (function (ch,p,filter_GT_,meta30519){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30519 = meta30519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30520){
var self__ = this;
var _30520__$1 = this;
return self__.meta30519;
});

cljs.core.async.t30518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30520,meta30519__$1){
var self__ = this;
var _30520__$1 = this;
return (new cljs.core.async.t30518(self__.ch,self__.p,self__.filter_GT_,meta30519__$1));
});

cljs.core.async.t30518.cljs$lang$type = true;

cljs.core.async.t30518.cljs$lang$ctorStr = "cljs.core.async/t30518";

cljs.core.async.t30518.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30518");
});

cljs.core.async.__GT_t30518 = (function cljs$core$async$filter_GT__$___GT_t30518(ch__$1,p__$1,filter_GT___$1,meta30519){
return (new cljs.core.async.t30518(ch__$1,p__$1,filter_GT___$1,meta30519));
});

}

return (new cljs.core.async.t30518(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30522 = arguments.length;
switch (G__30522) {
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
var c__23247__auto___30565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30565,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30565,out){
return (function (state_30543){
var state_val_30544 = (state_30543[(1)]);
if((state_val_30544 === (7))){
var inst_30539 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30545_30566 = state_30543__$1;
(statearr_30545_30566[(2)] = inst_30539);

(statearr_30545_30566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (1))){
var state_30543__$1 = state_30543;
var statearr_30546_30567 = state_30543__$1;
(statearr_30546_30567[(2)] = null);

(statearr_30546_30567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (4))){
var inst_30525 = (state_30543[(7)]);
var inst_30525__$1 = (state_30543[(2)]);
var inst_30526 = (inst_30525__$1 == null);
var state_30543__$1 = (function (){var statearr_30547 = state_30543;
(statearr_30547[(7)] = inst_30525__$1);

return statearr_30547;
})();
if(cljs.core.truth_(inst_30526)){
var statearr_30548_30568 = state_30543__$1;
(statearr_30548_30568[(1)] = (5));

} else {
var statearr_30549_30569 = state_30543__$1;
(statearr_30549_30569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (6))){
var inst_30525 = (state_30543[(7)]);
var inst_30530 = p.call(null,inst_30525);
var state_30543__$1 = state_30543;
if(cljs.core.truth_(inst_30530)){
var statearr_30550_30570 = state_30543__$1;
(statearr_30550_30570[(1)] = (8));

} else {
var statearr_30551_30571 = state_30543__$1;
(statearr_30551_30571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (3))){
var inst_30541 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30543__$1,inst_30541);
} else {
if((state_val_30544 === (2))){
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30543__$1,(4),ch);
} else {
if((state_val_30544 === (11))){
var inst_30533 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30552_30572 = state_30543__$1;
(statearr_30552_30572[(2)] = inst_30533);

(statearr_30552_30572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (9))){
var state_30543__$1 = state_30543;
var statearr_30553_30573 = state_30543__$1;
(statearr_30553_30573[(2)] = null);

(statearr_30553_30573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (5))){
var inst_30528 = cljs.core.async.close_BANG_.call(null,out);
var state_30543__$1 = state_30543;
var statearr_30554_30574 = state_30543__$1;
(statearr_30554_30574[(2)] = inst_30528);

(statearr_30554_30574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (10))){
var inst_30536 = (state_30543[(2)]);
var state_30543__$1 = (function (){var statearr_30555 = state_30543;
(statearr_30555[(8)] = inst_30536);

return statearr_30555;
})();
var statearr_30556_30575 = state_30543__$1;
(statearr_30556_30575[(2)] = null);

(statearr_30556_30575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (8))){
var inst_30525 = (state_30543[(7)]);
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30543__$1,(11),out,inst_30525);
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
});})(c__23247__auto___30565,out))
;
return ((function (switch__23185__auto__,c__23247__auto___30565,out){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30560 = [null,null,null,null,null,null,null,null,null];
(statearr_30560[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30560[(1)] = (1));

return statearr_30560;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30543){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30561){if((e30561 instanceof Object)){
var ex__23189__auto__ = e30561;
var statearr_30562_30576 = state_30543;
(statearr_30562_30576[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30577 = state_30543;
state_30543 = G__30577;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30565,out))
})();
var state__23249__auto__ = (function (){var statearr_30563 = f__23248__auto__.call(null);
(statearr_30563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30565);

return statearr_30563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30565,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30579 = arguments.length;
switch (G__30579) {
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
var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__){
return (function (state_30746){
var state_val_30747 = (state_30746[(1)]);
if((state_val_30747 === (7))){
var inst_30742 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30748_30789 = state_30746__$1;
(statearr_30748_30789[(2)] = inst_30742);

(statearr_30748_30789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (20))){
var inst_30712 = (state_30746[(7)]);
var inst_30723 = (state_30746[(2)]);
var inst_30724 = cljs.core.next.call(null,inst_30712);
var inst_30698 = inst_30724;
var inst_30699 = null;
var inst_30700 = (0);
var inst_30701 = (0);
var state_30746__$1 = (function (){var statearr_30749 = state_30746;
(statearr_30749[(8)] = inst_30698);

(statearr_30749[(9)] = inst_30699);

(statearr_30749[(10)] = inst_30700);

(statearr_30749[(11)] = inst_30723);

(statearr_30749[(12)] = inst_30701);

return statearr_30749;
})();
var statearr_30750_30790 = state_30746__$1;
(statearr_30750_30790[(2)] = null);

(statearr_30750_30790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (1))){
var state_30746__$1 = state_30746;
var statearr_30751_30791 = state_30746__$1;
(statearr_30751_30791[(2)] = null);

(statearr_30751_30791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (4))){
var inst_30687 = (state_30746[(13)]);
var inst_30687__$1 = (state_30746[(2)]);
var inst_30688 = (inst_30687__$1 == null);
var state_30746__$1 = (function (){var statearr_30752 = state_30746;
(statearr_30752[(13)] = inst_30687__$1);

return statearr_30752;
})();
if(cljs.core.truth_(inst_30688)){
var statearr_30753_30792 = state_30746__$1;
(statearr_30753_30792[(1)] = (5));

} else {
var statearr_30754_30793 = state_30746__$1;
(statearr_30754_30793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (15))){
var state_30746__$1 = state_30746;
var statearr_30758_30794 = state_30746__$1;
(statearr_30758_30794[(2)] = null);

(statearr_30758_30794[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (21))){
var state_30746__$1 = state_30746;
var statearr_30759_30795 = state_30746__$1;
(statearr_30759_30795[(2)] = null);

(statearr_30759_30795[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (13))){
var inst_30698 = (state_30746[(8)]);
var inst_30699 = (state_30746[(9)]);
var inst_30700 = (state_30746[(10)]);
var inst_30701 = (state_30746[(12)]);
var inst_30708 = (state_30746[(2)]);
var inst_30709 = (inst_30701 + (1));
var tmp30755 = inst_30698;
var tmp30756 = inst_30699;
var tmp30757 = inst_30700;
var inst_30698__$1 = tmp30755;
var inst_30699__$1 = tmp30756;
var inst_30700__$1 = tmp30757;
var inst_30701__$1 = inst_30709;
var state_30746__$1 = (function (){var statearr_30760 = state_30746;
(statearr_30760[(8)] = inst_30698__$1);

(statearr_30760[(9)] = inst_30699__$1);

(statearr_30760[(10)] = inst_30700__$1);

(statearr_30760[(12)] = inst_30701__$1);

(statearr_30760[(14)] = inst_30708);

return statearr_30760;
})();
var statearr_30761_30796 = state_30746__$1;
(statearr_30761_30796[(2)] = null);

(statearr_30761_30796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (22))){
var state_30746__$1 = state_30746;
var statearr_30762_30797 = state_30746__$1;
(statearr_30762_30797[(2)] = null);

(statearr_30762_30797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (6))){
var inst_30687 = (state_30746[(13)]);
var inst_30696 = f.call(null,inst_30687);
var inst_30697 = cljs.core.seq.call(null,inst_30696);
var inst_30698 = inst_30697;
var inst_30699 = null;
var inst_30700 = (0);
var inst_30701 = (0);
var state_30746__$1 = (function (){var statearr_30763 = state_30746;
(statearr_30763[(8)] = inst_30698);

(statearr_30763[(9)] = inst_30699);

(statearr_30763[(10)] = inst_30700);

(statearr_30763[(12)] = inst_30701);

return statearr_30763;
})();
var statearr_30764_30798 = state_30746__$1;
(statearr_30764_30798[(2)] = null);

(statearr_30764_30798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (17))){
var inst_30712 = (state_30746[(7)]);
var inst_30716 = cljs.core.chunk_first.call(null,inst_30712);
var inst_30717 = cljs.core.chunk_rest.call(null,inst_30712);
var inst_30718 = cljs.core.count.call(null,inst_30716);
var inst_30698 = inst_30717;
var inst_30699 = inst_30716;
var inst_30700 = inst_30718;
var inst_30701 = (0);
var state_30746__$1 = (function (){var statearr_30765 = state_30746;
(statearr_30765[(8)] = inst_30698);

(statearr_30765[(9)] = inst_30699);

(statearr_30765[(10)] = inst_30700);

(statearr_30765[(12)] = inst_30701);

return statearr_30765;
})();
var statearr_30766_30799 = state_30746__$1;
(statearr_30766_30799[(2)] = null);

(statearr_30766_30799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (3))){
var inst_30744 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30746__$1,inst_30744);
} else {
if((state_val_30747 === (12))){
var inst_30732 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30767_30800 = state_30746__$1;
(statearr_30767_30800[(2)] = inst_30732);

(statearr_30767_30800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (2))){
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30746__$1,(4),in$);
} else {
if((state_val_30747 === (23))){
var inst_30740 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30768_30801 = state_30746__$1;
(statearr_30768_30801[(2)] = inst_30740);

(statearr_30768_30801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (19))){
var inst_30727 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30769_30802 = state_30746__$1;
(statearr_30769_30802[(2)] = inst_30727);

(statearr_30769_30802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (11))){
var inst_30698 = (state_30746[(8)]);
var inst_30712 = (state_30746[(7)]);
var inst_30712__$1 = cljs.core.seq.call(null,inst_30698);
var state_30746__$1 = (function (){var statearr_30770 = state_30746;
(statearr_30770[(7)] = inst_30712__$1);

return statearr_30770;
})();
if(inst_30712__$1){
var statearr_30771_30803 = state_30746__$1;
(statearr_30771_30803[(1)] = (14));

} else {
var statearr_30772_30804 = state_30746__$1;
(statearr_30772_30804[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (9))){
var inst_30734 = (state_30746[(2)]);
var inst_30735 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30746__$1 = (function (){var statearr_30773 = state_30746;
(statearr_30773[(15)] = inst_30734);

return statearr_30773;
})();
if(cljs.core.truth_(inst_30735)){
var statearr_30774_30805 = state_30746__$1;
(statearr_30774_30805[(1)] = (21));

} else {
var statearr_30775_30806 = state_30746__$1;
(statearr_30775_30806[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (5))){
var inst_30690 = cljs.core.async.close_BANG_.call(null,out);
var state_30746__$1 = state_30746;
var statearr_30776_30807 = state_30746__$1;
(statearr_30776_30807[(2)] = inst_30690);

(statearr_30776_30807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (14))){
var inst_30712 = (state_30746[(7)]);
var inst_30714 = cljs.core.chunked_seq_QMARK_.call(null,inst_30712);
var state_30746__$1 = state_30746;
if(inst_30714){
var statearr_30777_30808 = state_30746__$1;
(statearr_30777_30808[(1)] = (17));

} else {
var statearr_30778_30809 = state_30746__$1;
(statearr_30778_30809[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (16))){
var inst_30730 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30779_30810 = state_30746__$1;
(statearr_30779_30810[(2)] = inst_30730);

(statearr_30779_30810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (10))){
var inst_30699 = (state_30746[(9)]);
var inst_30701 = (state_30746[(12)]);
var inst_30706 = cljs.core._nth.call(null,inst_30699,inst_30701);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30746__$1,(13),out,inst_30706);
} else {
if((state_val_30747 === (18))){
var inst_30712 = (state_30746[(7)]);
var inst_30721 = cljs.core.first.call(null,inst_30712);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30746__$1,(20),out,inst_30721);
} else {
if((state_val_30747 === (8))){
var inst_30700 = (state_30746[(10)]);
var inst_30701 = (state_30746[(12)]);
var inst_30703 = (inst_30701 < inst_30700);
var inst_30704 = inst_30703;
var state_30746__$1 = state_30746;
if(cljs.core.truth_(inst_30704)){
var statearr_30780_30811 = state_30746__$1;
(statearr_30780_30811[(1)] = (10));

} else {
var statearr_30781_30812 = state_30746__$1;
(statearr_30781_30812[(1)] = (11));

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
});})(c__23247__auto__))
;
return ((function (switch__23185__auto__,c__23247__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23186__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23186__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30785[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23186__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23186__auto____1 = (function (state_30746){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30786){if((e30786 instanceof Object)){
var ex__23189__auto__ = e30786;
var statearr_30787_30813 = state_30746;
(statearr_30787_30813[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30814 = state_30746;
state_30746 = G__30814;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23186__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23186__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23186__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23186__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__))
})();
var state__23249__auto__ = (function (){var statearr_30788 = f__23248__auto__.call(null);
(statearr_30788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__))
);

return c__23247__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30816 = arguments.length;
switch (G__30816) {
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
var G__30819 = arguments.length;
switch (G__30819) {
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
var G__30822 = arguments.length;
switch (G__30822) {
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
var c__23247__auto___30872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30872,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30872,out){
return (function (state_30846){
var state_val_30847 = (state_30846[(1)]);
if((state_val_30847 === (7))){
var inst_30841 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30848_30873 = state_30846__$1;
(statearr_30848_30873[(2)] = inst_30841);

(statearr_30848_30873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (1))){
var inst_30823 = null;
var state_30846__$1 = (function (){var statearr_30849 = state_30846;
(statearr_30849[(7)] = inst_30823);

return statearr_30849;
})();
var statearr_30850_30874 = state_30846__$1;
(statearr_30850_30874[(2)] = null);

(statearr_30850_30874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (4))){
var inst_30826 = (state_30846[(8)]);
var inst_30826__$1 = (state_30846[(2)]);
var inst_30827 = (inst_30826__$1 == null);
var inst_30828 = cljs.core.not.call(null,inst_30827);
var state_30846__$1 = (function (){var statearr_30851 = state_30846;
(statearr_30851[(8)] = inst_30826__$1);

return statearr_30851;
})();
if(inst_30828){
var statearr_30852_30875 = state_30846__$1;
(statearr_30852_30875[(1)] = (5));

} else {
var statearr_30853_30876 = state_30846__$1;
(statearr_30853_30876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (6))){
var state_30846__$1 = state_30846;
var statearr_30854_30877 = state_30846__$1;
(statearr_30854_30877[(2)] = null);

(statearr_30854_30877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (3))){
var inst_30843 = (state_30846[(2)]);
var inst_30844 = cljs.core.async.close_BANG_.call(null,out);
var state_30846__$1 = (function (){var statearr_30855 = state_30846;
(statearr_30855[(9)] = inst_30843);

return statearr_30855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30846__$1,inst_30844);
} else {
if((state_val_30847 === (2))){
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(4),ch);
} else {
if((state_val_30847 === (11))){
var inst_30826 = (state_30846[(8)]);
var inst_30835 = (state_30846[(2)]);
var inst_30823 = inst_30826;
var state_30846__$1 = (function (){var statearr_30856 = state_30846;
(statearr_30856[(10)] = inst_30835);

(statearr_30856[(7)] = inst_30823);

return statearr_30856;
})();
var statearr_30857_30878 = state_30846__$1;
(statearr_30857_30878[(2)] = null);

(statearr_30857_30878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (9))){
var inst_30826 = (state_30846[(8)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30846__$1,(11),out,inst_30826);
} else {
if((state_val_30847 === (5))){
var inst_30826 = (state_30846[(8)]);
var inst_30823 = (state_30846[(7)]);
var inst_30830 = cljs.core._EQ_.call(null,inst_30826,inst_30823);
var state_30846__$1 = state_30846;
if(inst_30830){
var statearr_30859_30879 = state_30846__$1;
(statearr_30859_30879[(1)] = (8));

} else {
var statearr_30860_30880 = state_30846__$1;
(statearr_30860_30880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (10))){
var inst_30838 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30861_30881 = state_30846__$1;
(statearr_30861_30881[(2)] = inst_30838);

(statearr_30861_30881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (8))){
var inst_30823 = (state_30846[(7)]);
var tmp30858 = inst_30823;
var inst_30823__$1 = tmp30858;
var state_30846__$1 = (function (){var statearr_30862 = state_30846;
(statearr_30862[(7)] = inst_30823__$1);

return statearr_30862;
})();
var statearr_30863_30882 = state_30846__$1;
(statearr_30863_30882[(2)] = null);

(statearr_30863_30882[(1)] = (2));


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
});})(c__23247__auto___30872,out))
;
return ((function (switch__23185__auto__,c__23247__auto___30872,out){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30867[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30867[(1)] = (1));

return statearr_30867;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30846){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30868){if((e30868 instanceof Object)){
var ex__23189__auto__ = e30868;
var statearr_30869_30883 = state_30846;
(statearr_30869_30883[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30884 = state_30846;
state_30846 = G__30884;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30872,out))
})();
var state__23249__auto__ = (function (){var statearr_30870 = f__23248__auto__.call(null);
(statearr_30870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30872);

return statearr_30870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30872,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30886 = arguments.length;
switch (G__30886) {
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
var c__23247__auto___30955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___30955,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___30955,out){
return (function (state_30924){
var state_val_30925 = (state_30924[(1)]);
if((state_val_30925 === (7))){
var inst_30920 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30926_30956 = state_30924__$1;
(statearr_30926_30956[(2)] = inst_30920);

(statearr_30926_30956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (1))){
var inst_30887 = (new Array(n));
var inst_30888 = inst_30887;
var inst_30889 = (0);
var state_30924__$1 = (function (){var statearr_30927 = state_30924;
(statearr_30927[(7)] = inst_30889);

(statearr_30927[(8)] = inst_30888);

return statearr_30927;
})();
var statearr_30928_30957 = state_30924__$1;
(statearr_30928_30957[(2)] = null);

(statearr_30928_30957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (4))){
var inst_30892 = (state_30924[(9)]);
var inst_30892__$1 = (state_30924[(2)]);
var inst_30893 = (inst_30892__$1 == null);
var inst_30894 = cljs.core.not.call(null,inst_30893);
var state_30924__$1 = (function (){var statearr_30929 = state_30924;
(statearr_30929[(9)] = inst_30892__$1);

return statearr_30929;
})();
if(inst_30894){
var statearr_30930_30958 = state_30924__$1;
(statearr_30930_30958[(1)] = (5));

} else {
var statearr_30931_30959 = state_30924__$1;
(statearr_30931_30959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (15))){
var inst_30914 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30932_30960 = state_30924__$1;
(statearr_30932_30960[(2)] = inst_30914);

(statearr_30932_30960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (13))){
var state_30924__$1 = state_30924;
var statearr_30933_30961 = state_30924__$1;
(statearr_30933_30961[(2)] = null);

(statearr_30933_30961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (6))){
var inst_30889 = (state_30924[(7)]);
var inst_30910 = (inst_30889 > (0));
var state_30924__$1 = state_30924;
if(cljs.core.truth_(inst_30910)){
var statearr_30934_30962 = state_30924__$1;
(statearr_30934_30962[(1)] = (12));

} else {
var statearr_30935_30963 = state_30924__$1;
(statearr_30935_30963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (3))){
var inst_30922 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30924__$1,inst_30922);
} else {
if((state_val_30925 === (12))){
var inst_30888 = (state_30924[(8)]);
var inst_30912 = cljs.core.vec.call(null,inst_30888);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30924__$1,(15),out,inst_30912);
} else {
if((state_val_30925 === (2))){
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30924__$1,(4),ch);
} else {
if((state_val_30925 === (11))){
var inst_30904 = (state_30924[(2)]);
var inst_30905 = (new Array(n));
var inst_30888 = inst_30905;
var inst_30889 = (0);
var state_30924__$1 = (function (){var statearr_30936 = state_30924;
(statearr_30936[(7)] = inst_30889);

(statearr_30936[(8)] = inst_30888);

(statearr_30936[(10)] = inst_30904);

return statearr_30936;
})();
var statearr_30937_30964 = state_30924__$1;
(statearr_30937_30964[(2)] = null);

(statearr_30937_30964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (9))){
var inst_30888 = (state_30924[(8)]);
var inst_30902 = cljs.core.vec.call(null,inst_30888);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30924__$1,(11),out,inst_30902);
} else {
if((state_val_30925 === (5))){
var inst_30889 = (state_30924[(7)]);
var inst_30897 = (state_30924[(11)]);
var inst_30888 = (state_30924[(8)]);
var inst_30892 = (state_30924[(9)]);
var inst_30896 = (inst_30888[inst_30889] = inst_30892);
var inst_30897__$1 = (inst_30889 + (1));
var inst_30898 = (inst_30897__$1 < n);
var state_30924__$1 = (function (){var statearr_30938 = state_30924;
(statearr_30938[(11)] = inst_30897__$1);

(statearr_30938[(12)] = inst_30896);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30898)){
var statearr_30939_30965 = state_30924__$1;
(statearr_30939_30965[(1)] = (8));

} else {
var statearr_30940_30966 = state_30924__$1;
(statearr_30940_30966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (14))){
var inst_30917 = (state_30924[(2)]);
var inst_30918 = cljs.core.async.close_BANG_.call(null,out);
var state_30924__$1 = (function (){var statearr_30942 = state_30924;
(statearr_30942[(13)] = inst_30917);

return statearr_30942;
})();
var statearr_30943_30967 = state_30924__$1;
(statearr_30943_30967[(2)] = inst_30918);

(statearr_30943_30967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (10))){
var inst_30908 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30944_30968 = state_30924__$1;
(statearr_30944_30968[(2)] = inst_30908);

(statearr_30944_30968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (8))){
var inst_30897 = (state_30924[(11)]);
var inst_30888 = (state_30924[(8)]);
var tmp30941 = inst_30888;
var inst_30888__$1 = tmp30941;
var inst_30889 = inst_30897;
var state_30924__$1 = (function (){var statearr_30945 = state_30924;
(statearr_30945[(7)] = inst_30889);

(statearr_30945[(8)] = inst_30888__$1);

return statearr_30945;
})();
var statearr_30946_30969 = state_30924__$1;
(statearr_30946_30969[(2)] = null);

(statearr_30946_30969[(1)] = (2));


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
});})(c__23247__auto___30955,out))
;
return ((function (switch__23185__auto__,c__23247__auto___30955,out){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_30950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30950[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_30950[(1)] = (1));

return statearr_30950;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_30924){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_30924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e30951){if((e30951 instanceof Object)){
var ex__23189__auto__ = e30951;
var statearr_30952_30970 = state_30924;
(statearr_30952_30970[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30971 = state_30924;
state_30924 = G__30971;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_30924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_30924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___30955,out))
})();
var state__23249__auto__ = (function (){var statearr_30953 = f__23248__auto__.call(null);
(statearr_30953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___30955);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___30955,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30973 = arguments.length;
switch (G__30973) {
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
var c__23247__auto___31046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___31046,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___31046,out){
return (function (state_31015){
var state_val_31016 = (state_31015[(1)]);
if((state_val_31016 === (7))){
var inst_31011 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31017_31047 = state_31015__$1;
(statearr_31017_31047[(2)] = inst_31011);

(statearr_31017_31047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (1))){
var inst_30974 = [];
var inst_30975 = inst_30974;
var inst_30976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31015__$1 = (function (){var statearr_31018 = state_31015;
(statearr_31018[(7)] = inst_30976);

(statearr_31018[(8)] = inst_30975);

return statearr_31018;
})();
var statearr_31019_31048 = state_31015__$1;
(statearr_31019_31048[(2)] = null);

(statearr_31019_31048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (4))){
var inst_30979 = (state_31015[(9)]);
var inst_30979__$1 = (state_31015[(2)]);
var inst_30980 = (inst_30979__$1 == null);
var inst_30981 = cljs.core.not.call(null,inst_30980);
var state_31015__$1 = (function (){var statearr_31020 = state_31015;
(statearr_31020[(9)] = inst_30979__$1);

return statearr_31020;
})();
if(inst_30981){
var statearr_31021_31049 = state_31015__$1;
(statearr_31021_31049[(1)] = (5));

} else {
var statearr_31022_31050 = state_31015__$1;
(statearr_31022_31050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (15))){
var inst_31005 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31023_31051 = state_31015__$1;
(statearr_31023_31051[(2)] = inst_31005);

(statearr_31023_31051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (13))){
var state_31015__$1 = state_31015;
var statearr_31024_31052 = state_31015__$1;
(statearr_31024_31052[(2)] = null);

(statearr_31024_31052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (6))){
var inst_30975 = (state_31015[(8)]);
var inst_31000 = inst_30975.length;
var inst_31001 = (inst_31000 > (0));
var state_31015__$1 = state_31015;
if(cljs.core.truth_(inst_31001)){
var statearr_31025_31053 = state_31015__$1;
(statearr_31025_31053[(1)] = (12));

} else {
var statearr_31026_31054 = state_31015__$1;
(statearr_31026_31054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (3))){
var inst_31013 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31015__$1,inst_31013);
} else {
if((state_val_31016 === (12))){
var inst_30975 = (state_31015[(8)]);
var inst_31003 = cljs.core.vec.call(null,inst_30975);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31015__$1,(15),out,inst_31003);
} else {
if((state_val_31016 === (2))){
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31015__$1,(4),ch);
} else {
if((state_val_31016 === (11))){
var inst_30983 = (state_31015[(10)]);
var inst_30979 = (state_31015[(9)]);
var inst_30993 = (state_31015[(2)]);
var inst_30994 = [];
var inst_30995 = inst_30994.push(inst_30979);
var inst_30975 = inst_30994;
var inst_30976 = inst_30983;
var state_31015__$1 = (function (){var statearr_31027 = state_31015;
(statearr_31027[(7)] = inst_30976);

(statearr_31027[(11)] = inst_30995);

(statearr_31027[(8)] = inst_30975);

(statearr_31027[(12)] = inst_30993);

return statearr_31027;
})();
var statearr_31028_31055 = state_31015__$1;
(statearr_31028_31055[(2)] = null);

(statearr_31028_31055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (9))){
var inst_30975 = (state_31015[(8)]);
var inst_30991 = cljs.core.vec.call(null,inst_30975);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31015__$1,(11),out,inst_30991);
} else {
if((state_val_31016 === (5))){
var inst_30976 = (state_31015[(7)]);
var inst_30983 = (state_31015[(10)]);
var inst_30979 = (state_31015[(9)]);
var inst_30983__$1 = f.call(null,inst_30979);
var inst_30984 = cljs.core._EQ_.call(null,inst_30983__$1,inst_30976);
var inst_30985 = cljs.core.keyword_identical_QMARK_.call(null,inst_30976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30986 = (inst_30984) || (inst_30985);
var state_31015__$1 = (function (){var statearr_31029 = state_31015;
(statearr_31029[(10)] = inst_30983__$1);

return statearr_31029;
})();
if(cljs.core.truth_(inst_30986)){
var statearr_31030_31056 = state_31015__$1;
(statearr_31030_31056[(1)] = (8));

} else {
var statearr_31031_31057 = state_31015__$1;
(statearr_31031_31057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (14))){
var inst_31008 = (state_31015[(2)]);
var inst_31009 = cljs.core.async.close_BANG_.call(null,out);
var state_31015__$1 = (function (){var statearr_31033 = state_31015;
(statearr_31033[(13)] = inst_31008);

return statearr_31033;
})();
var statearr_31034_31058 = state_31015__$1;
(statearr_31034_31058[(2)] = inst_31009);

(statearr_31034_31058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (10))){
var inst_30998 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31035_31059 = state_31015__$1;
(statearr_31035_31059[(2)] = inst_30998);

(statearr_31035_31059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (8))){
var inst_30983 = (state_31015[(10)]);
var inst_30979 = (state_31015[(9)]);
var inst_30975 = (state_31015[(8)]);
var inst_30988 = inst_30975.push(inst_30979);
var tmp31032 = inst_30975;
var inst_30975__$1 = tmp31032;
var inst_30976 = inst_30983;
var state_31015__$1 = (function (){var statearr_31036 = state_31015;
(statearr_31036[(7)] = inst_30976);

(statearr_31036[(8)] = inst_30975__$1);

(statearr_31036[(14)] = inst_30988);

return statearr_31036;
})();
var statearr_31037_31060 = state_31015__$1;
(statearr_31037_31060[(2)] = null);

(statearr_31037_31060[(1)] = (2));


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
});})(c__23247__auto___31046,out))
;
return ((function (switch__23185__auto__,c__23247__auto___31046,out){
return (function() {
var cljs$core$async$state_machine__23186__auto__ = null;
var cljs$core$async$state_machine__23186__auto____0 = (function (){
var statearr_31041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31041[(0)] = cljs$core$async$state_machine__23186__auto__);

(statearr_31041[(1)] = (1));

return statearr_31041;
});
var cljs$core$async$state_machine__23186__auto____1 = (function (state_31015){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_31015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e31042){if((e31042 instanceof Object)){
var ex__23189__auto__ = e31042;
var statearr_31043_31061 = state_31015;
(statearr_31043_31061[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31062 = state_31015;
state_31015 = G__31062;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
cljs$core$async$state_machine__23186__auto__ = function(state_31015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23186__auto____1.call(this,state_31015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23186__auto____0;
cljs$core$async$state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23186__auto____1;
return cljs$core$async$state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___31046,out))
})();
var state__23249__auto__ = (function (){var statearr_31044 = f__23248__auto__.call(null);
(statearr_31044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___31046);

return statearr_31044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___31046,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1431821094552