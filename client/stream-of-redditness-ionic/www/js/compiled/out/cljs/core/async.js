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
if(typeof cljs.core.async.t28772 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28772 = (function (f,fn_handler,meta28773){
this.f = f;
this.fn_handler = fn_handler;
this.meta28773 = meta28773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28774){
var self__ = this;
var _28774__$1 = this;
return self__.meta28773;
});

cljs.core.async.t28772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28774,meta28773__$1){
var self__ = this;
var _28774__$1 = this;
return (new cljs.core.async.t28772(self__.f,self__.fn_handler,meta28773__$1));
});

cljs.core.async.t28772.cljs$lang$type = true;

cljs.core.async.t28772.cljs$lang$ctorStr = "cljs.core.async/t28772";

cljs.core.async.t28772.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28772");
});

cljs.core.async.__GT_t28772 = (function cljs$core$async$fn_handler_$___GT_t28772(f__$1,fn_handler__$1,meta28773){
return (new cljs.core.async.t28772(f__$1,fn_handler__$1,meta28773));
});

}

return (new cljs.core.async.t28772(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28776 = buff;
if(G__28776){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__28776.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28776);
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
var G__28778 = arguments.length;
switch (G__28778) {
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
var G__28781 = arguments.length;
switch (G__28781) {
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
var val_28783 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28783);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28783,ret){
return (function (){
return fn1.call(null,val_28783);
});})(val_28783,ret))
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
var G__28785 = arguments.length;
switch (G__28785) {
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
var n__19001__auto___28787 = n;
var x_28788 = (0);
while(true){
if((x_28788 < n__19001__auto___28787)){
(a[x_28788] = (0));

var G__28789 = (x_28788 + (1));
x_28788 = G__28789;
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

var G__28790 = (i + (1));
i = G__28790;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28794 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28794 = (function (flag,alt_flag,meta28795){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28795 = meta28795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28796){
var self__ = this;
var _28796__$1 = this;
return self__.meta28795;
});})(flag))
;

cljs.core.async.t28794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28796,meta28795__$1){
var self__ = this;
var _28796__$1 = this;
return (new cljs.core.async.t28794(self__.flag,self__.alt_flag,meta28795__$1));
});})(flag))
;

cljs.core.async.t28794.cljs$lang$type = true;

cljs.core.async.t28794.cljs$lang$ctorStr = "cljs.core.async/t28794";

cljs.core.async.t28794.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28794");
});})(flag))
;

cljs.core.async.__GT_t28794 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28794(flag__$1,alt_flag__$1,meta28795){
return (new cljs.core.async.t28794(flag__$1,alt_flag__$1,meta28795));
});})(flag))
;

}

return (new cljs.core.async.t28794(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28800 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28800 = (function (cb,flag,alt_handler,meta28801){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28801 = meta28801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28802){
var self__ = this;
var _28802__$1 = this;
return self__.meta28801;
});

cljs.core.async.t28800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28802,meta28801__$1){
var self__ = this;
var _28802__$1 = this;
return (new cljs.core.async.t28800(self__.cb,self__.flag,self__.alt_handler,meta28801__$1));
});

cljs.core.async.t28800.cljs$lang$type = true;

cljs.core.async.t28800.cljs$lang$ctorStr = "cljs.core.async/t28800";

cljs.core.async.t28800.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28800");
});

cljs.core.async.__GT_t28800 = (function cljs$core$async$alt_handler_$___GT_t28800(cb__$1,flag__$1,alt_handler__$1,meta28801){
return (new cljs.core.async.t28800(cb__$1,flag__$1,alt_handler__$1,meta28801));
});

}

return (new cljs.core.async.t28800(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28803_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28803_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28804_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28804_SHARP_,port], null));
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
var G__28805 = (i + (1));
i = G__28805;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28808){
var map__28809 = p__28808;
var map__28809__$1 = ((cljs.core.seq_QMARK_.call(null,map__28809))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var opts = map__28809__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28806){
var G__28807 = cljs.core.first.call(null,seq28806);
var seq28806__$1 = cljs.core.next.call(null,seq28806);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28807,seq28806__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28811 = arguments.length;
switch (G__28811) {
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
var c__23400__auto___28860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___28860){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___28860){
return (function (state_28835){
var state_val_28836 = (state_28835[(1)]);
if((state_val_28836 === (7))){
var inst_28831 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
var statearr_28837_28861 = state_28835__$1;
(statearr_28837_28861[(2)] = inst_28831);

(statearr_28837_28861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (1))){
var state_28835__$1 = state_28835;
var statearr_28838_28862 = state_28835__$1;
(statearr_28838_28862[(2)] = null);

(statearr_28838_28862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (4))){
var inst_28814 = (state_28835[(7)]);
var inst_28814__$1 = (state_28835[(2)]);
var inst_28815 = (inst_28814__$1 == null);
var state_28835__$1 = (function (){var statearr_28839 = state_28835;
(statearr_28839[(7)] = inst_28814__$1);

return statearr_28839;
})();
if(cljs.core.truth_(inst_28815)){
var statearr_28840_28863 = state_28835__$1;
(statearr_28840_28863[(1)] = (5));

} else {
var statearr_28841_28864 = state_28835__$1;
(statearr_28841_28864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (13))){
var state_28835__$1 = state_28835;
var statearr_28842_28865 = state_28835__$1;
(statearr_28842_28865[(2)] = null);

(statearr_28842_28865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (6))){
var inst_28814 = (state_28835[(7)]);
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28835__$1,(11),to,inst_28814);
} else {
if((state_val_28836 === (3))){
var inst_28833 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28835__$1,inst_28833);
} else {
if((state_val_28836 === (12))){
var state_28835__$1 = state_28835;
var statearr_28843_28866 = state_28835__$1;
(statearr_28843_28866[(2)] = null);

(statearr_28843_28866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (2))){
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28835__$1,(4),from);
} else {
if((state_val_28836 === (11))){
var inst_28824 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
if(cljs.core.truth_(inst_28824)){
var statearr_28844_28867 = state_28835__$1;
(statearr_28844_28867[(1)] = (12));

} else {
var statearr_28845_28868 = state_28835__$1;
(statearr_28845_28868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (9))){
var state_28835__$1 = state_28835;
var statearr_28846_28869 = state_28835__$1;
(statearr_28846_28869[(2)] = null);

(statearr_28846_28869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (5))){
var state_28835__$1 = state_28835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28847_28870 = state_28835__$1;
(statearr_28847_28870[(1)] = (8));

} else {
var statearr_28848_28871 = state_28835__$1;
(statearr_28848_28871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (14))){
var inst_28829 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
var statearr_28849_28872 = state_28835__$1;
(statearr_28849_28872[(2)] = inst_28829);

(statearr_28849_28872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (10))){
var inst_28821 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
var statearr_28850_28873 = state_28835__$1;
(statearr_28850_28873[(2)] = inst_28821);

(statearr_28850_28873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (8))){
var inst_28818 = cljs.core.async.close_BANG_.call(null,to);
var state_28835__$1 = state_28835;
var statearr_28851_28874 = state_28835__$1;
(statearr_28851_28874[(2)] = inst_28818);

(statearr_28851_28874[(1)] = (10));


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
});})(c__23400__auto___28860))
;
return ((function (switch__23338__auto__,c__23400__auto___28860){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_28855 = [null,null,null,null,null,null,null,null];
(statearr_28855[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_28855[(1)] = (1));

return statearr_28855;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_28835){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_28835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e28856){if((e28856 instanceof Object)){
var ex__23342__auto__ = e28856;
var statearr_28857_28875 = state_28835;
(statearr_28857_28875[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28876 = state_28835;
state_28835 = G__28876;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_28835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_28835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___28860))
})();
var state__23402__auto__ = (function (){var statearr_28858 = f__23401__auto__.call(null);
(statearr_28858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___28860);

return statearr_28858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___28860))
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
return (function (p__29060){
var vec__29061 = p__29060;
var v = cljs.core.nth.call(null,vec__29061,(0),null);
var p = cljs.core.nth.call(null,vec__29061,(1),null);
var job = vec__29061;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23400__auto___29243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___29243,res,vec__29061,v,p,job,jobs,results){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___29243,res,vec__29061,v,p,job,jobs,results){
return (function (state_29066){
var state_val_29067 = (state_29066[(1)]);
if((state_val_29067 === (2))){
var inst_29063 = (state_29066[(2)]);
var inst_29064 = cljs.core.async.close_BANG_.call(null,res);
var state_29066__$1 = (function (){var statearr_29068 = state_29066;
(statearr_29068[(7)] = inst_29063);

return statearr_29068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29066__$1,inst_29064);
} else {
if((state_val_29067 === (1))){
var state_29066__$1 = state_29066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29066__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23400__auto___29243,res,vec__29061,v,p,job,jobs,results))
;
return ((function (switch__23338__auto__,c__23400__auto___29243,res,vec__29061,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0 = (function (){
var statearr_29072 = [null,null,null,null,null,null,null,null];
(statearr_29072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__);

(statearr_29072[(1)] = (1));

return statearr_29072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1 = (function (state_29066){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29073){if((e29073 instanceof Object)){
var ex__23342__auto__ = e29073;
var statearr_29074_29244 = state_29066;
(statearr_29074_29244[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29245 = state_29066;
state_29066 = G__29245;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = function(state_29066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1.call(this,state_29066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___29243,res,vec__29061,v,p,job,jobs,results))
})();
var state__23402__auto__ = (function (){var statearr_29075 = f__23401__auto__.call(null);
(statearr_29075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___29243);

return statearr_29075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___29243,res,vec__29061,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29076){
var vec__29077 = p__29076;
var v = cljs.core.nth.call(null,vec__29077,(0),null);
var p = cljs.core.nth.call(null,vec__29077,(1),null);
var job = vec__29077;
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
var n__19001__auto___29246 = n;
var __29247 = (0);
while(true){
if((__29247 < n__19001__auto___29246)){
var G__29078_29248 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29078_29248) {
case "async":
var c__23400__auto___29250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29247,c__23400__auto___29250,G__29078_29248,n__19001__auto___29246,jobs,results,process,async){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (__29247,c__23400__auto___29250,G__29078_29248,n__19001__auto___29246,jobs,results,process,async){
return (function (state_29091){
var state_val_29092 = (state_29091[(1)]);
if((state_val_29092 === (7))){
var inst_29087 = (state_29091[(2)]);
var state_29091__$1 = state_29091;
var statearr_29093_29251 = state_29091__$1;
(statearr_29093_29251[(2)] = inst_29087);

(statearr_29093_29251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (6))){
var state_29091__$1 = state_29091;
var statearr_29094_29252 = state_29091__$1;
(statearr_29094_29252[(2)] = null);

(statearr_29094_29252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (5))){
var state_29091__$1 = state_29091;
var statearr_29095_29253 = state_29091__$1;
(statearr_29095_29253[(2)] = null);

(statearr_29095_29253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (4))){
var inst_29081 = (state_29091[(2)]);
var inst_29082 = async.call(null,inst_29081);
var state_29091__$1 = state_29091;
if(cljs.core.truth_(inst_29082)){
var statearr_29096_29254 = state_29091__$1;
(statearr_29096_29254[(1)] = (5));

} else {
var statearr_29097_29255 = state_29091__$1;
(statearr_29097_29255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (3))){
var inst_29089 = (state_29091[(2)]);
var state_29091__$1 = state_29091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29091__$1,inst_29089);
} else {
if((state_val_29092 === (2))){
var state_29091__$1 = state_29091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29091__$1,(4),jobs);
} else {
if((state_val_29092 === (1))){
var state_29091__$1 = state_29091;
var statearr_29098_29256 = state_29091__$1;
(statearr_29098_29256[(2)] = null);

(statearr_29098_29256[(1)] = (2));


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
});})(__29247,c__23400__auto___29250,G__29078_29248,n__19001__auto___29246,jobs,results,process,async))
;
return ((function (__29247,switch__23338__auto__,c__23400__auto___29250,G__29078_29248,n__19001__auto___29246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0 = (function (){
var statearr_29102 = [null,null,null,null,null,null,null];
(statearr_29102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__);

(statearr_29102[(1)] = (1));

return statearr_29102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1 = (function (state_29091){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29103){if((e29103 instanceof Object)){
var ex__23342__auto__ = e29103;
var statearr_29104_29257 = state_29091;
(statearr_29104_29257[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29258 = state_29091;
state_29091 = G__29258;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = function(state_29091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1.call(this,state_29091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__;
})()
;})(__29247,switch__23338__auto__,c__23400__auto___29250,G__29078_29248,n__19001__auto___29246,jobs,results,process,async))
})();
var state__23402__auto__ = (function (){var statearr_29105 = f__23401__auto__.call(null);
(statearr_29105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___29250);

return statearr_29105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(__29247,c__23400__auto___29250,G__29078_29248,n__19001__auto___29246,jobs,results,process,async))
);


break;
case "compute":
var c__23400__auto___29259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29247,c__23400__auto___29259,G__29078_29248,n__19001__auto___29246,jobs,results,process,async){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (__29247,c__23400__auto___29259,G__29078_29248,n__19001__auto___29246,jobs,results,process,async){
return (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (7))){
var inst_29114 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29120_29260 = state_29118__$1;
(statearr_29120_29260[(2)] = inst_29114);

(statearr_29120_29260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (6))){
var state_29118__$1 = state_29118;
var statearr_29121_29261 = state_29118__$1;
(statearr_29121_29261[(2)] = null);

(statearr_29121_29261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (5))){
var state_29118__$1 = state_29118;
var statearr_29122_29262 = state_29118__$1;
(statearr_29122_29262[(2)] = null);

(statearr_29122_29262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (4))){
var inst_29108 = (state_29118[(2)]);
var inst_29109 = process.call(null,inst_29108);
var state_29118__$1 = state_29118;
if(cljs.core.truth_(inst_29109)){
var statearr_29123_29263 = state_29118__$1;
(statearr_29123_29263[(1)] = (5));

} else {
var statearr_29124_29264 = state_29118__$1;
(statearr_29124_29264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (3))){
var inst_29116 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (2))){
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29118__$1,(4),jobs);
} else {
if((state_val_29119 === (1))){
var state_29118__$1 = state_29118;
var statearr_29125_29265 = state_29118__$1;
(statearr_29125_29265[(2)] = null);

(statearr_29125_29265[(1)] = (2));


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
});})(__29247,c__23400__auto___29259,G__29078_29248,n__19001__auto___29246,jobs,results,process,async))
;
return ((function (__29247,switch__23338__auto__,c__23400__auto___29259,G__29078_29248,n__19001__auto___29246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0 = (function (){
var statearr_29129 = [null,null,null,null,null,null,null];
(statearr_29129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__);

(statearr_29129[(1)] = (1));

return statearr_29129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1 = (function (state_29118){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29130){if((e29130 instanceof Object)){
var ex__23342__auto__ = e29130;
var statearr_29131_29266 = state_29118;
(statearr_29131_29266[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29267 = state_29118;
state_29118 = G__29267;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__;
})()
;})(__29247,switch__23338__auto__,c__23400__auto___29259,G__29078_29248,n__19001__auto___29246,jobs,results,process,async))
})();
var state__23402__auto__ = (function (){var statearr_29132 = f__23401__auto__.call(null);
(statearr_29132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___29259);

return statearr_29132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(__29247,c__23400__auto___29259,G__29078_29248,n__19001__auto___29246,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29268 = (__29247 + (1));
__29247 = G__29268;
continue;
} else {
}
break;
}

var c__23400__auto___29269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___29269,jobs,results,process,async){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___29269,jobs,results,process,async){
return (function (state_29154){
var state_val_29155 = (state_29154[(1)]);
if((state_val_29155 === (9))){
var inst_29147 = (state_29154[(2)]);
var state_29154__$1 = (function (){var statearr_29156 = state_29154;
(statearr_29156[(7)] = inst_29147);

return statearr_29156;
})();
var statearr_29157_29270 = state_29154__$1;
(statearr_29157_29270[(2)] = null);

(statearr_29157_29270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (8))){
var inst_29140 = (state_29154[(8)]);
var inst_29145 = (state_29154[(2)]);
var state_29154__$1 = (function (){var statearr_29158 = state_29154;
(statearr_29158[(9)] = inst_29145);

return statearr_29158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29154__$1,(9),results,inst_29140);
} else {
if((state_val_29155 === (7))){
var inst_29150 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
var statearr_29159_29271 = state_29154__$1;
(statearr_29159_29271[(2)] = inst_29150);

(statearr_29159_29271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (6))){
var inst_29140 = (state_29154[(8)]);
var inst_29135 = (state_29154[(10)]);
var inst_29140__$1 = cljs.core.async.chan.call(null,(1));
var inst_29141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29142 = [inst_29135,inst_29140__$1];
var inst_29143 = (new cljs.core.PersistentVector(null,2,(5),inst_29141,inst_29142,null));
var state_29154__$1 = (function (){var statearr_29160 = state_29154;
(statearr_29160[(8)] = inst_29140__$1);

return statearr_29160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29154__$1,(8),jobs,inst_29143);
} else {
if((state_val_29155 === (5))){
var inst_29138 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29154__$1 = state_29154;
var statearr_29161_29272 = state_29154__$1;
(statearr_29161_29272[(2)] = inst_29138);

(statearr_29161_29272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (4))){
var inst_29135 = (state_29154[(10)]);
var inst_29135__$1 = (state_29154[(2)]);
var inst_29136 = (inst_29135__$1 == null);
var state_29154__$1 = (function (){var statearr_29162 = state_29154;
(statearr_29162[(10)] = inst_29135__$1);

return statearr_29162;
})();
if(cljs.core.truth_(inst_29136)){
var statearr_29163_29273 = state_29154__$1;
(statearr_29163_29273[(1)] = (5));

} else {
var statearr_29164_29274 = state_29154__$1;
(statearr_29164_29274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (3))){
var inst_29152 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29154__$1,inst_29152);
} else {
if((state_val_29155 === (2))){
var state_29154__$1 = state_29154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29154__$1,(4),from);
} else {
if((state_val_29155 === (1))){
var state_29154__$1 = state_29154;
var statearr_29165_29275 = state_29154__$1;
(statearr_29165_29275[(2)] = null);

(statearr_29165_29275[(1)] = (2));


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
});})(c__23400__auto___29269,jobs,results,process,async))
;
return ((function (switch__23338__auto__,c__23400__auto___29269,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0 = (function (){
var statearr_29169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__);

(statearr_29169[(1)] = (1));

return statearr_29169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1 = (function (state_29154){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29170){if((e29170 instanceof Object)){
var ex__23342__auto__ = e29170;
var statearr_29171_29276 = state_29154;
(statearr_29171_29276[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29277 = state_29154;
state_29154 = G__29277;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = function(state_29154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1.call(this,state_29154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___29269,jobs,results,process,async))
})();
var state__23402__auto__ = (function (){var statearr_29172 = f__23401__auto__.call(null);
(statearr_29172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___29269);

return statearr_29172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___29269,jobs,results,process,async))
);


var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__,jobs,results,process,async){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__,jobs,results,process,async){
return (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (7))){
var inst_29206 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29212_29278 = state_29210__$1;
(statearr_29212_29278[(2)] = inst_29206);

(statearr_29212_29278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (20))){
var state_29210__$1 = state_29210;
var statearr_29213_29279 = state_29210__$1;
(statearr_29213_29279[(2)] = null);

(statearr_29213_29279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (1))){
var state_29210__$1 = state_29210;
var statearr_29214_29280 = state_29210__$1;
(statearr_29214_29280[(2)] = null);

(statearr_29214_29280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (4))){
var inst_29175 = (state_29210[(7)]);
var inst_29175__$1 = (state_29210[(2)]);
var inst_29176 = (inst_29175__$1 == null);
var state_29210__$1 = (function (){var statearr_29215 = state_29210;
(statearr_29215[(7)] = inst_29175__$1);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29176)){
var statearr_29216_29281 = state_29210__$1;
(statearr_29216_29281[(1)] = (5));

} else {
var statearr_29217_29282 = state_29210__$1;
(statearr_29217_29282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (15))){
var inst_29188 = (state_29210[(8)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29210__$1,(18),to,inst_29188);
} else {
if((state_val_29211 === (21))){
var inst_29201 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29218_29283 = state_29210__$1;
(statearr_29218_29283[(2)] = inst_29201);

(statearr_29218_29283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (13))){
var inst_29203 = (state_29210[(2)]);
var state_29210__$1 = (function (){var statearr_29219 = state_29210;
(statearr_29219[(9)] = inst_29203);

return statearr_29219;
})();
var statearr_29220_29284 = state_29210__$1;
(statearr_29220_29284[(2)] = null);

(statearr_29220_29284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (6))){
var inst_29175 = (state_29210[(7)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(11),inst_29175);
} else {
if((state_val_29211 === (17))){
var inst_29196 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29196)){
var statearr_29221_29285 = state_29210__$1;
(statearr_29221_29285[(1)] = (19));

} else {
var statearr_29222_29286 = state_29210__$1;
(statearr_29222_29286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (3))){
var inst_29208 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
if((state_val_29211 === (12))){
var inst_29185 = (state_29210[(10)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(14),inst_29185);
} else {
if((state_val_29211 === (2))){
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(4),results);
} else {
if((state_val_29211 === (19))){
var state_29210__$1 = state_29210;
var statearr_29223_29287 = state_29210__$1;
(statearr_29223_29287[(2)] = null);

(statearr_29223_29287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (11))){
var inst_29185 = (state_29210[(2)]);
var state_29210__$1 = (function (){var statearr_29224 = state_29210;
(statearr_29224[(10)] = inst_29185);

return statearr_29224;
})();
var statearr_29225_29288 = state_29210__$1;
(statearr_29225_29288[(2)] = null);

(statearr_29225_29288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (9))){
var state_29210__$1 = state_29210;
var statearr_29226_29289 = state_29210__$1;
(statearr_29226_29289[(2)] = null);

(statearr_29226_29289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (5))){
var state_29210__$1 = state_29210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29227_29290 = state_29210__$1;
(statearr_29227_29290[(1)] = (8));

} else {
var statearr_29228_29291 = state_29210__$1;
(statearr_29228_29291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (14))){
var inst_29188 = (state_29210[(8)]);
var inst_29190 = (state_29210[(11)]);
var inst_29188__$1 = (state_29210[(2)]);
var inst_29189 = (inst_29188__$1 == null);
var inst_29190__$1 = cljs.core.not.call(null,inst_29189);
var state_29210__$1 = (function (){var statearr_29229 = state_29210;
(statearr_29229[(8)] = inst_29188__$1);

(statearr_29229[(11)] = inst_29190__$1);

return statearr_29229;
})();
if(inst_29190__$1){
var statearr_29230_29292 = state_29210__$1;
(statearr_29230_29292[(1)] = (15));

} else {
var statearr_29231_29293 = state_29210__$1;
(statearr_29231_29293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (16))){
var inst_29190 = (state_29210[(11)]);
var state_29210__$1 = state_29210;
var statearr_29232_29294 = state_29210__$1;
(statearr_29232_29294[(2)] = inst_29190);

(statearr_29232_29294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (10))){
var inst_29182 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29233_29295 = state_29210__$1;
(statearr_29233_29295[(2)] = inst_29182);

(statearr_29233_29295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (18))){
var inst_29193 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29234_29296 = state_29210__$1;
(statearr_29234_29296[(2)] = inst_29193);

(statearr_29234_29296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (8))){
var inst_29179 = cljs.core.async.close_BANG_.call(null,to);
var state_29210__$1 = state_29210;
var statearr_29235_29297 = state_29210__$1;
(statearr_29235_29297[(2)] = inst_29179);

(statearr_29235_29297[(1)] = (10));


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
});})(c__23400__auto__,jobs,results,process,async))
;
return ((function (switch__23338__auto__,c__23400__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0 = (function (){
var statearr_29239 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__);

(statearr_29239[(1)] = (1));

return statearr_29239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1 = (function (state_29210){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29240){if((e29240 instanceof Object)){
var ex__23342__auto__ = e29240;
var statearr_29241_29298 = state_29210;
(statearr_29241_29298[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29299 = state_29210;
state_29210 = G__29299;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__,jobs,results,process,async))
})();
var state__23402__auto__ = (function (){var statearr_29242 = f__23401__auto__.call(null);
(statearr_29242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_29242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__,jobs,results,process,async))
);

return c__23400__auto__;
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
var G__29301 = arguments.length;
switch (G__29301) {
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
var G__29304 = arguments.length;
switch (G__29304) {
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
var G__29307 = arguments.length;
switch (G__29307) {
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
var c__23400__auto___29359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___29359,tc,fc){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___29359,tc,fc){
return (function (state_29333){
var state_val_29334 = (state_29333[(1)]);
if((state_val_29334 === (7))){
var inst_29329 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29335_29360 = state_29333__$1;
(statearr_29335_29360[(2)] = inst_29329);

(statearr_29335_29360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (1))){
var state_29333__$1 = state_29333;
var statearr_29336_29361 = state_29333__$1;
(statearr_29336_29361[(2)] = null);

(statearr_29336_29361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (4))){
var inst_29310 = (state_29333[(7)]);
var inst_29310__$1 = (state_29333[(2)]);
var inst_29311 = (inst_29310__$1 == null);
var state_29333__$1 = (function (){var statearr_29337 = state_29333;
(statearr_29337[(7)] = inst_29310__$1);

return statearr_29337;
})();
if(cljs.core.truth_(inst_29311)){
var statearr_29338_29362 = state_29333__$1;
(statearr_29338_29362[(1)] = (5));

} else {
var statearr_29339_29363 = state_29333__$1;
(statearr_29339_29363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (13))){
var state_29333__$1 = state_29333;
var statearr_29340_29364 = state_29333__$1;
(statearr_29340_29364[(2)] = null);

(statearr_29340_29364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (6))){
var inst_29310 = (state_29333[(7)]);
var inst_29316 = p.call(null,inst_29310);
var state_29333__$1 = state_29333;
if(cljs.core.truth_(inst_29316)){
var statearr_29341_29365 = state_29333__$1;
(statearr_29341_29365[(1)] = (9));

} else {
var statearr_29342_29366 = state_29333__$1;
(statearr_29342_29366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (3))){
var inst_29331 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29333__$1,inst_29331);
} else {
if((state_val_29334 === (12))){
var state_29333__$1 = state_29333;
var statearr_29343_29367 = state_29333__$1;
(statearr_29343_29367[(2)] = null);

(statearr_29343_29367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (2))){
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29333__$1,(4),ch);
} else {
if((state_val_29334 === (11))){
var inst_29310 = (state_29333[(7)]);
var inst_29320 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29333__$1,(8),inst_29320,inst_29310);
} else {
if((state_val_29334 === (9))){
var state_29333__$1 = state_29333;
var statearr_29344_29368 = state_29333__$1;
(statearr_29344_29368[(2)] = tc);

(statearr_29344_29368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (5))){
var inst_29313 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29314 = cljs.core.async.close_BANG_.call(null,fc);
var state_29333__$1 = (function (){var statearr_29345 = state_29333;
(statearr_29345[(8)] = inst_29313);

return statearr_29345;
})();
var statearr_29346_29369 = state_29333__$1;
(statearr_29346_29369[(2)] = inst_29314);

(statearr_29346_29369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (14))){
var inst_29327 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29347_29370 = state_29333__$1;
(statearr_29347_29370[(2)] = inst_29327);

(statearr_29347_29370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (10))){
var state_29333__$1 = state_29333;
var statearr_29348_29371 = state_29333__$1;
(statearr_29348_29371[(2)] = fc);

(statearr_29348_29371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (8))){
var inst_29322 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
if(cljs.core.truth_(inst_29322)){
var statearr_29349_29372 = state_29333__$1;
(statearr_29349_29372[(1)] = (12));

} else {
var statearr_29350_29373 = state_29333__$1;
(statearr_29350_29373[(1)] = (13));

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
});})(c__23400__auto___29359,tc,fc))
;
return ((function (switch__23338__auto__,c__23400__auto___29359,tc,fc){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_29354 = [null,null,null,null,null,null,null,null,null];
(statearr_29354[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_29354[(1)] = (1));

return statearr_29354;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_29333){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29355){if((e29355 instanceof Object)){
var ex__23342__auto__ = e29355;
var statearr_29356_29374 = state_29333;
(statearr_29356_29374[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29375 = state_29333;
state_29333 = G__29375;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_29333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_29333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___29359,tc,fc))
})();
var state__23402__auto__ = (function (){var statearr_29357 = f__23401__auto__.call(null);
(statearr_29357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___29359);

return statearr_29357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___29359,tc,fc))
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
var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__){
return (function (state_29422){
var state_val_29423 = (state_29422[(1)]);
if((state_val_29423 === (7))){
var inst_29418 = (state_29422[(2)]);
var state_29422__$1 = state_29422;
var statearr_29424_29440 = state_29422__$1;
(statearr_29424_29440[(2)] = inst_29418);

(statearr_29424_29440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (6))){
var inst_29408 = (state_29422[(7)]);
var inst_29411 = (state_29422[(8)]);
var inst_29415 = f.call(null,inst_29408,inst_29411);
var inst_29408__$1 = inst_29415;
var state_29422__$1 = (function (){var statearr_29425 = state_29422;
(statearr_29425[(7)] = inst_29408__$1);

return statearr_29425;
})();
var statearr_29426_29441 = state_29422__$1;
(statearr_29426_29441[(2)] = null);

(statearr_29426_29441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (5))){
var inst_29408 = (state_29422[(7)]);
var state_29422__$1 = state_29422;
var statearr_29427_29442 = state_29422__$1;
(statearr_29427_29442[(2)] = inst_29408);

(statearr_29427_29442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (4))){
var inst_29411 = (state_29422[(8)]);
var inst_29411__$1 = (state_29422[(2)]);
var inst_29412 = (inst_29411__$1 == null);
var state_29422__$1 = (function (){var statearr_29428 = state_29422;
(statearr_29428[(8)] = inst_29411__$1);

return statearr_29428;
})();
if(cljs.core.truth_(inst_29412)){
var statearr_29429_29443 = state_29422__$1;
(statearr_29429_29443[(1)] = (5));

} else {
var statearr_29430_29444 = state_29422__$1;
(statearr_29430_29444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (3))){
var inst_29420 = (state_29422[(2)]);
var state_29422__$1 = state_29422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29422__$1,inst_29420);
} else {
if((state_val_29423 === (2))){
var state_29422__$1 = state_29422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29422__$1,(4),ch);
} else {
if((state_val_29423 === (1))){
var inst_29408 = init;
var state_29422__$1 = (function (){var statearr_29431 = state_29422;
(statearr_29431[(7)] = inst_29408);

return statearr_29431;
})();
var statearr_29432_29445 = state_29422__$1;
(statearr_29432_29445[(2)] = null);

(statearr_29432_29445[(1)] = (2));


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
});})(c__23400__auto__))
;
return ((function (switch__23338__auto__,c__23400__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23339__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23339__auto____0 = (function (){
var statearr_29436 = [null,null,null,null,null,null,null,null,null];
(statearr_29436[(0)] = cljs$core$async$reduce_$_state_machine__23339__auto__);

(statearr_29436[(1)] = (1));

return statearr_29436;
});
var cljs$core$async$reduce_$_state_machine__23339__auto____1 = (function (state_29422){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29437){if((e29437 instanceof Object)){
var ex__23342__auto__ = e29437;
var statearr_29438_29446 = state_29422;
(statearr_29438_29446[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29447 = state_29422;
state_29422 = G__29447;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23339__auto__ = function(state_29422){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23339__auto____1.call(this,state_29422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23339__auto____0;
cljs$core$async$reduce_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23339__auto____1;
return cljs$core$async$reduce_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__))
})();
var state__23402__auto__ = (function (){var statearr_29439 = f__23401__auto__.call(null);
(statearr_29439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_29439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__))
);

return c__23400__auto__;
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
var G__29449 = arguments.length;
switch (G__29449) {
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
var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__){
return (function (state_29474){
var state_val_29475 = (state_29474[(1)]);
if((state_val_29475 === (7))){
var inst_29456 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29476_29500 = state_29474__$1;
(statearr_29476_29500[(2)] = inst_29456);

(statearr_29476_29500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (1))){
var inst_29450 = cljs.core.seq.call(null,coll);
var inst_29451 = inst_29450;
var state_29474__$1 = (function (){var statearr_29477 = state_29474;
(statearr_29477[(7)] = inst_29451);

return statearr_29477;
})();
var statearr_29478_29501 = state_29474__$1;
(statearr_29478_29501[(2)] = null);

(statearr_29478_29501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (4))){
var inst_29451 = (state_29474[(7)]);
var inst_29454 = cljs.core.first.call(null,inst_29451);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29474__$1,(7),ch,inst_29454);
} else {
if((state_val_29475 === (13))){
var inst_29468 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29479_29502 = state_29474__$1;
(statearr_29479_29502[(2)] = inst_29468);

(statearr_29479_29502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (6))){
var inst_29459 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
if(cljs.core.truth_(inst_29459)){
var statearr_29480_29503 = state_29474__$1;
(statearr_29480_29503[(1)] = (8));

} else {
var statearr_29481_29504 = state_29474__$1;
(statearr_29481_29504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (3))){
var inst_29472 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29474__$1,inst_29472);
} else {
if((state_val_29475 === (12))){
var state_29474__$1 = state_29474;
var statearr_29482_29505 = state_29474__$1;
(statearr_29482_29505[(2)] = null);

(statearr_29482_29505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (2))){
var inst_29451 = (state_29474[(7)]);
var state_29474__$1 = state_29474;
if(cljs.core.truth_(inst_29451)){
var statearr_29483_29506 = state_29474__$1;
(statearr_29483_29506[(1)] = (4));

} else {
var statearr_29484_29507 = state_29474__$1;
(statearr_29484_29507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (11))){
var inst_29465 = cljs.core.async.close_BANG_.call(null,ch);
var state_29474__$1 = state_29474;
var statearr_29485_29508 = state_29474__$1;
(statearr_29485_29508[(2)] = inst_29465);

(statearr_29485_29508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (9))){
var state_29474__$1 = state_29474;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29486_29509 = state_29474__$1;
(statearr_29486_29509[(1)] = (11));

} else {
var statearr_29487_29510 = state_29474__$1;
(statearr_29487_29510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (5))){
var inst_29451 = (state_29474[(7)]);
var state_29474__$1 = state_29474;
var statearr_29488_29511 = state_29474__$1;
(statearr_29488_29511[(2)] = inst_29451);

(statearr_29488_29511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (10))){
var inst_29470 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29489_29512 = state_29474__$1;
(statearr_29489_29512[(2)] = inst_29470);

(statearr_29489_29512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (8))){
var inst_29451 = (state_29474[(7)]);
var inst_29461 = cljs.core.next.call(null,inst_29451);
var inst_29451__$1 = inst_29461;
var state_29474__$1 = (function (){var statearr_29490 = state_29474;
(statearr_29490[(7)] = inst_29451__$1);

return statearr_29490;
})();
var statearr_29491_29513 = state_29474__$1;
(statearr_29491_29513[(2)] = null);

(statearr_29491_29513[(1)] = (2));


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
});})(c__23400__auto__))
;
return ((function (switch__23338__auto__,c__23400__auto__){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_29495 = [null,null,null,null,null,null,null,null];
(statearr_29495[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_29495[(1)] = (1));

return statearr_29495;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_29474){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29496){if((e29496 instanceof Object)){
var ex__23342__auto__ = e29496;
var statearr_29497_29514 = state_29474;
(statearr_29497_29514[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_29474;
state_29474 = G__29515;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_29474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_29474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__))
})();
var state__23402__auto__ = (function (){var statearr_29498 = f__23401__auto__.call(null);
(statearr_29498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__))
);

return c__23400__auto__;
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

cljs.core.async.Mux = (function (){var obj29517 = {};
return obj29517;
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


cljs.core.async.Mult = (function (){var obj29519 = {};
return obj29519;
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
if(typeof cljs.core.async.t29741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29741 = (function (cs,ch,mult,meta29742){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29742 = meta29742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29741.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29741.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29741.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29741.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29741.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29743){
var self__ = this;
var _29743__$1 = this;
return self__.meta29742;
});})(cs))
;

cljs.core.async.t29741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29743,meta29742__$1){
var self__ = this;
var _29743__$1 = this;
return (new cljs.core.async.t29741(self__.cs,self__.ch,self__.mult,meta29742__$1));
});})(cs))
;

cljs.core.async.t29741.cljs$lang$type = true;

cljs.core.async.t29741.cljs$lang$ctorStr = "cljs.core.async/t29741";

cljs.core.async.t29741.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29741");
});})(cs))
;

cljs.core.async.__GT_t29741 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29741(cs__$1,ch__$1,mult__$1,meta29742){
return (new cljs.core.async.t29741(cs__$1,ch__$1,mult__$1,meta29742));
});})(cs))
;

}

return (new cljs.core.async.t29741(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23400__auto___29962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___29962,cs,m,dchan,dctr,done){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___29962,cs,m,dchan,dctr,done){
return (function (state_29874){
var state_val_29875 = (state_29874[(1)]);
if((state_val_29875 === (7))){
var inst_29870 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29876_29963 = state_29874__$1;
(statearr_29876_29963[(2)] = inst_29870);

(statearr_29876_29963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (20))){
var inst_29775 = (state_29874[(7)]);
var inst_29785 = cljs.core.first.call(null,inst_29775);
var inst_29786 = cljs.core.nth.call(null,inst_29785,(0),null);
var inst_29787 = cljs.core.nth.call(null,inst_29785,(1),null);
var state_29874__$1 = (function (){var statearr_29877 = state_29874;
(statearr_29877[(8)] = inst_29786);

return statearr_29877;
})();
if(cljs.core.truth_(inst_29787)){
var statearr_29878_29964 = state_29874__$1;
(statearr_29878_29964[(1)] = (22));

} else {
var statearr_29879_29965 = state_29874__$1;
(statearr_29879_29965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (27))){
var inst_29746 = (state_29874[(9)]);
var inst_29822 = (state_29874[(10)]);
var inst_29815 = (state_29874[(11)]);
var inst_29817 = (state_29874[(12)]);
var inst_29822__$1 = cljs.core._nth.call(null,inst_29815,inst_29817);
var inst_29823 = cljs.core.async.put_BANG_.call(null,inst_29822__$1,inst_29746,done);
var state_29874__$1 = (function (){var statearr_29880 = state_29874;
(statearr_29880[(10)] = inst_29822__$1);

return statearr_29880;
})();
if(cljs.core.truth_(inst_29823)){
var statearr_29881_29966 = state_29874__$1;
(statearr_29881_29966[(1)] = (30));

} else {
var statearr_29882_29967 = state_29874__$1;
(statearr_29882_29967[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (1))){
var state_29874__$1 = state_29874;
var statearr_29883_29968 = state_29874__$1;
(statearr_29883_29968[(2)] = null);

(statearr_29883_29968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (24))){
var inst_29775 = (state_29874[(7)]);
var inst_29792 = (state_29874[(2)]);
var inst_29793 = cljs.core.next.call(null,inst_29775);
var inst_29755 = inst_29793;
var inst_29756 = null;
var inst_29757 = (0);
var inst_29758 = (0);
var state_29874__$1 = (function (){var statearr_29884 = state_29874;
(statearr_29884[(13)] = inst_29755);

(statearr_29884[(14)] = inst_29757);

(statearr_29884[(15)] = inst_29792);

(statearr_29884[(16)] = inst_29758);

(statearr_29884[(17)] = inst_29756);

return statearr_29884;
})();
var statearr_29885_29969 = state_29874__$1;
(statearr_29885_29969[(2)] = null);

(statearr_29885_29969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (39))){
var state_29874__$1 = state_29874;
var statearr_29889_29970 = state_29874__$1;
(statearr_29889_29970[(2)] = null);

(statearr_29889_29970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (4))){
var inst_29746 = (state_29874[(9)]);
var inst_29746__$1 = (state_29874[(2)]);
var inst_29747 = (inst_29746__$1 == null);
var state_29874__$1 = (function (){var statearr_29890 = state_29874;
(statearr_29890[(9)] = inst_29746__$1);

return statearr_29890;
})();
if(cljs.core.truth_(inst_29747)){
var statearr_29891_29971 = state_29874__$1;
(statearr_29891_29971[(1)] = (5));

} else {
var statearr_29892_29972 = state_29874__$1;
(statearr_29892_29972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (15))){
var inst_29755 = (state_29874[(13)]);
var inst_29757 = (state_29874[(14)]);
var inst_29758 = (state_29874[(16)]);
var inst_29756 = (state_29874[(17)]);
var inst_29771 = (state_29874[(2)]);
var inst_29772 = (inst_29758 + (1));
var tmp29886 = inst_29755;
var tmp29887 = inst_29757;
var tmp29888 = inst_29756;
var inst_29755__$1 = tmp29886;
var inst_29756__$1 = tmp29888;
var inst_29757__$1 = tmp29887;
var inst_29758__$1 = inst_29772;
var state_29874__$1 = (function (){var statearr_29893 = state_29874;
(statearr_29893[(18)] = inst_29771);

(statearr_29893[(13)] = inst_29755__$1);

(statearr_29893[(14)] = inst_29757__$1);

(statearr_29893[(16)] = inst_29758__$1);

(statearr_29893[(17)] = inst_29756__$1);

return statearr_29893;
})();
var statearr_29894_29973 = state_29874__$1;
(statearr_29894_29973[(2)] = null);

(statearr_29894_29973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (21))){
var inst_29796 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29898_29974 = state_29874__$1;
(statearr_29898_29974[(2)] = inst_29796);

(statearr_29898_29974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (31))){
var inst_29822 = (state_29874[(10)]);
var inst_29826 = done.call(null,null);
var inst_29827 = cljs.core.async.untap_STAR_.call(null,m,inst_29822);
var state_29874__$1 = (function (){var statearr_29899 = state_29874;
(statearr_29899[(19)] = inst_29826);

return statearr_29899;
})();
var statearr_29900_29975 = state_29874__$1;
(statearr_29900_29975[(2)] = inst_29827);

(statearr_29900_29975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (32))){
var inst_29816 = (state_29874[(20)]);
var inst_29815 = (state_29874[(11)]);
var inst_29814 = (state_29874[(21)]);
var inst_29817 = (state_29874[(12)]);
var inst_29829 = (state_29874[(2)]);
var inst_29830 = (inst_29817 + (1));
var tmp29895 = inst_29816;
var tmp29896 = inst_29815;
var tmp29897 = inst_29814;
var inst_29814__$1 = tmp29897;
var inst_29815__$1 = tmp29896;
var inst_29816__$1 = tmp29895;
var inst_29817__$1 = inst_29830;
var state_29874__$1 = (function (){var statearr_29901 = state_29874;
(statearr_29901[(20)] = inst_29816__$1);

(statearr_29901[(22)] = inst_29829);

(statearr_29901[(11)] = inst_29815__$1);

(statearr_29901[(21)] = inst_29814__$1);

(statearr_29901[(12)] = inst_29817__$1);

return statearr_29901;
})();
var statearr_29902_29976 = state_29874__$1;
(statearr_29902_29976[(2)] = null);

(statearr_29902_29976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (40))){
var inst_29842 = (state_29874[(23)]);
var inst_29846 = done.call(null,null);
var inst_29847 = cljs.core.async.untap_STAR_.call(null,m,inst_29842);
var state_29874__$1 = (function (){var statearr_29903 = state_29874;
(statearr_29903[(24)] = inst_29846);

return statearr_29903;
})();
var statearr_29904_29977 = state_29874__$1;
(statearr_29904_29977[(2)] = inst_29847);

(statearr_29904_29977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (33))){
var inst_29833 = (state_29874[(25)]);
var inst_29835 = cljs.core.chunked_seq_QMARK_.call(null,inst_29833);
var state_29874__$1 = state_29874;
if(inst_29835){
var statearr_29905_29978 = state_29874__$1;
(statearr_29905_29978[(1)] = (36));

} else {
var statearr_29906_29979 = state_29874__$1;
(statearr_29906_29979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (13))){
var inst_29765 = (state_29874[(26)]);
var inst_29768 = cljs.core.async.close_BANG_.call(null,inst_29765);
var state_29874__$1 = state_29874;
var statearr_29907_29980 = state_29874__$1;
(statearr_29907_29980[(2)] = inst_29768);

(statearr_29907_29980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (22))){
var inst_29786 = (state_29874[(8)]);
var inst_29789 = cljs.core.async.close_BANG_.call(null,inst_29786);
var state_29874__$1 = state_29874;
var statearr_29908_29981 = state_29874__$1;
(statearr_29908_29981[(2)] = inst_29789);

(statearr_29908_29981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (36))){
var inst_29833 = (state_29874[(25)]);
var inst_29837 = cljs.core.chunk_first.call(null,inst_29833);
var inst_29838 = cljs.core.chunk_rest.call(null,inst_29833);
var inst_29839 = cljs.core.count.call(null,inst_29837);
var inst_29814 = inst_29838;
var inst_29815 = inst_29837;
var inst_29816 = inst_29839;
var inst_29817 = (0);
var state_29874__$1 = (function (){var statearr_29909 = state_29874;
(statearr_29909[(20)] = inst_29816);

(statearr_29909[(11)] = inst_29815);

(statearr_29909[(21)] = inst_29814);

(statearr_29909[(12)] = inst_29817);

return statearr_29909;
})();
var statearr_29910_29982 = state_29874__$1;
(statearr_29910_29982[(2)] = null);

(statearr_29910_29982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (41))){
var inst_29833 = (state_29874[(25)]);
var inst_29849 = (state_29874[(2)]);
var inst_29850 = cljs.core.next.call(null,inst_29833);
var inst_29814 = inst_29850;
var inst_29815 = null;
var inst_29816 = (0);
var inst_29817 = (0);
var state_29874__$1 = (function (){var statearr_29911 = state_29874;
(statearr_29911[(20)] = inst_29816);

(statearr_29911[(11)] = inst_29815);

(statearr_29911[(27)] = inst_29849);

(statearr_29911[(21)] = inst_29814);

(statearr_29911[(12)] = inst_29817);

return statearr_29911;
})();
var statearr_29912_29983 = state_29874__$1;
(statearr_29912_29983[(2)] = null);

(statearr_29912_29983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (43))){
var state_29874__$1 = state_29874;
var statearr_29913_29984 = state_29874__$1;
(statearr_29913_29984[(2)] = null);

(statearr_29913_29984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (29))){
var inst_29858 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29914_29985 = state_29874__$1;
(statearr_29914_29985[(2)] = inst_29858);

(statearr_29914_29985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (44))){
var inst_29867 = (state_29874[(2)]);
var state_29874__$1 = (function (){var statearr_29915 = state_29874;
(statearr_29915[(28)] = inst_29867);

return statearr_29915;
})();
var statearr_29916_29986 = state_29874__$1;
(statearr_29916_29986[(2)] = null);

(statearr_29916_29986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (6))){
var inst_29806 = (state_29874[(29)]);
var inst_29805 = cljs.core.deref.call(null,cs);
var inst_29806__$1 = cljs.core.keys.call(null,inst_29805);
var inst_29807 = cljs.core.count.call(null,inst_29806__$1);
var inst_29808 = cljs.core.reset_BANG_.call(null,dctr,inst_29807);
var inst_29813 = cljs.core.seq.call(null,inst_29806__$1);
var inst_29814 = inst_29813;
var inst_29815 = null;
var inst_29816 = (0);
var inst_29817 = (0);
var state_29874__$1 = (function (){var statearr_29917 = state_29874;
(statearr_29917[(30)] = inst_29808);

(statearr_29917[(20)] = inst_29816);

(statearr_29917[(29)] = inst_29806__$1);

(statearr_29917[(11)] = inst_29815);

(statearr_29917[(21)] = inst_29814);

(statearr_29917[(12)] = inst_29817);

return statearr_29917;
})();
var statearr_29918_29987 = state_29874__$1;
(statearr_29918_29987[(2)] = null);

(statearr_29918_29987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (28))){
var inst_29833 = (state_29874[(25)]);
var inst_29814 = (state_29874[(21)]);
var inst_29833__$1 = cljs.core.seq.call(null,inst_29814);
var state_29874__$1 = (function (){var statearr_29919 = state_29874;
(statearr_29919[(25)] = inst_29833__$1);

return statearr_29919;
})();
if(inst_29833__$1){
var statearr_29920_29988 = state_29874__$1;
(statearr_29920_29988[(1)] = (33));

} else {
var statearr_29921_29989 = state_29874__$1;
(statearr_29921_29989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (25))){
var inst_29816 = (state_29874[(20)]);
var inst_29817 = (state_29874[(12)]);
var inst_29819 = (inst_29817 < inst_29816);
var inst_29820 = inst_29819;
var state_29874__$1 = state_29874;
if(cljs.core.truth_(inst_29820)){
var statearr_29922_29990 = state_29874__$1;
(statearr_29922_29990[(1)] = (27));

} else {
var statearr_29923_29991 = state_29874__$1;
(statearr_29923_29991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (34))){
var state_29874__$1 = state_29874;
var statearr_29924_29992 = state_29874__$1;
(statearr_29924_29992[(2)] = null);

(statearr_29924_29992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (17))){
var state_29874__$1 = state_29874;
var statearr_29925_29993 = state_29874__$1;
(statearr_29925_29993[(2)] = null);

(statearr_29925_29993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (3))){
var inst_29872 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29874__$1,inst_29872);
} else {
if((state_val_29875 === (12))){
var inst_29801 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29926_29994 = state_29874__$1;
(statearr_29926_29994[(2)] = inst_29801);

(statearr_29926_29994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (2))){
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29874__$1,(4),ch);
} else {
if((state_val_29875 === (23))){
var state_29874__$1 = state_29874;
var statearr_29927_29995 = state_29874__$1;
(statearr_29927_29995[(2)] = null);

(statearr_29927_29995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (35))){
var inst_29856 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29928_29996 = state_29874__$1;
(statearr_29928_29996[(2)] = inst_29856);

(statearr_29928_29996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (19))){
var inst_29775 = (state_29874[(7)]);
var inst_29779 = cljs.core.chunk_first.call(null,inst_29775);
var inst_29780 = cljs.core.chunk_rest.call(null,inst_29775);
var inst_29781 = cljs.core.count.call(null,inst_29779);
var inst_29755 = inst_29780;
var inst_29756 = inst_29779;
var inst_29757 = inst_29781;
var inst_29758 = (0);
var state_29874__$1 = (function (){var statearr_29929 = state_29874;
(statearr_29929[(13)] = inst_29755);

(statearr_29929[(14)] = inst_29757);

(statearr_29929[(16)] = inst_29758);

(statearr_29929[(17)] = inst_29756);

return statearr_29929;
})();
var statearr_29930_29997 = state_29874__$1;
(statearr_29930_29997[(2)] = null);

(statearr_29930_29997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (11))){
var inst_29755 = (state_29874[(13)]);
var inst_29775 = (state_29874[(7)]);
var inst_29775__$1 = cljs.core.seq.call(null,inst_29755);
var state_29874__$1 = (function (){var statearr_29931 = state_29874;
(statearr_29931[(7)] = inst_29775__$1);

return statearr_29931;
})();
if(inst_29775__$1){
var statearr_29932_29998 = state_29874__$1;
(statearr_29932_29998[(1)] = (16));

} else {
var statearr_29933_29999 = state_29874__$1;
(statearr_29933_29999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (9))){
var inst_29803 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29934_30000 = state_29874__$1;
(statearr_29934_30000[(2)] = inst_29803);

(statearr_29934_30000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (5))){
var inst_29753 = cljs.core.deref.call(null,cs);
var inst_29754 = cljs.core.seq.call(null,inst_29753);
var inst_29755 = inst_29754;
var inst_29756 = null;
var inst_29757 = (0);
var inst_29758 = (0);
var state_29874__$1 = (function (){var statearr_29935 = state_29874;
(statearr_29935[(13)] = inst_29755);

(statearr_29935[(14)] = inst_29757);

(statearr_29935[(16)] = inst_29758);

(statearr_29935[(17)] = inst_29756);

return statearr_29935;
})();
var statearr_29936_30001 = state_29874__$1;
(statearr_29936_30001[(2)] = null);

(statearr_29936_30001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (14))){
var state_29874__$1 = state_29874;
var statearr_29937_30002 = state_29874__$1;
(statearr_29937_30002[(2)] = null);

(statearr_29937_30002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (45))){
var inst_29864 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29938_30003 = state_29874__$1;
(statearr_29938_30003[(2)] = inst_29864);

(statearr_29938_30003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (26))){
var inst_29806 = (state_29874[(29)]);
var inst_29860 = (state_29874[(2)]);
var inst_29861 = cljs.core.seq.call(null,inst_29806);
var state_29874__$1 = (function (){var statearr_29939 = state_29874;
(statearr_29939[(31)] = inst_29860);

return statearr_29939;
})();
if(inst_29861){
var statearr_29940_30004 = state_29874__$1;
(statearr_29940_30004[(1)] = (42));

} else {
var statearr_29941_30005 = state_29874__$1;
(statearr_29941_30005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (16))){
var inst_29775 = (state_29874[(7)]);
var inst_29777 = cljs.core.chunked_seq_QMARK_.call(null,inst_29775);
var state_29874__$1 = state_29874;
if(inst_29777){
var statearr_29942_30006 = state_29874__$1;
(statearr_29942_30006[(1)] = (19));

} else {
var statearr_29943_30007 = state_29874__$1;
(statearr_29943_30007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (38))){
var inst_29853 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29944_30008 = state_29874__$1;
(statearr_29944_30008[(2)] = inst_29853);

(statearr_29944_30008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (30))){
var state_29874__$1 = state_29874;
var statearr_29945_30009 = state_29874__$1;
(statearr_29945_30009[(2)] = null);

(statearr_29945_30009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (10))){
var inst_29758 = (state_29874[(16)]);
var inst_29756 = (state_29874[(17)]);
var inst_29764 = cljs.core._nth.call(null,inst_29756,inst_29758);
var inst_29765 = cljs.core.nth.call(null,inst_29764,(0),null);
var inst_29766 = cljs.core.nth.call(null,inst_29764,(1),null);
var state_29874__$1 = (function (){var statearr_29946 = state_29874;
(statearr_29946[(26)] = inst_29765);

return statearr_29946;
})();
if(cljs.core.truth_(inst_29766)){
var statearr_29947_30010 = state_29874__$1;
(statearr_29947_30010[(1)] = (13));

} else {
var statearr_29948_30011 = state_29874__$1;
(statearr_29948_30011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (18))){
var inst_29799 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29949_30012 = state_29874__$1;
(statearr_29949_30012[(2)] = inst_29799);

(statearr_29949_30012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (42))){
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29874__$1,(45),dchan);
} else {
if((state_val_29875 === (37))){
var inst_29746 = (state_29874[(9)]);
var inst_29833 = (state_29874[(25)]);
var inst_29842 = (state_29874[(23)]);
var inst_29842__$1 = cljs.core.first.call(null,inst_29833);
var inst_29843 = cljs.core.async.put_BANG_.call(null,inst_29842__$1,inst_29746,done);
var state_29874__$1 = (function (){var statearr_29950 = state_29874;
(statearr_29950[(23)] = inst_29842__$1);

return statearr_29950;
})();
if(cljs.core.truth_(inst_29843)){
var statearr_29951_30013 = state_29874__$1;
(statearr_29951_30013[(1)] = (39));

} else {
var statearr_29952_30014 = state_29874__$1;
(statearr_29952_30014[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (8))){
var inst_29757 = (state_29874[(14)]);
var inst_29758 = (state_29874[(16)]);
var inst_29760 = (inst_29758 < inst_29757);
var inst_29761 = inst_29760;
var state_29874__$1 = state_29874;
if(cljs.core.truth_(inst_29761)){
var statearr_29953_30015 = state_29874__$1;
(statearr_29953_30015[(1)] = (10));

} else {
var statearr_29954_30016 = state_29874__$1;
(statearr_29954_30016[(1)] = (11));

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
});})(c__23400__auto___29962,cs,m,dchan,dctr,done))
;
return ((function (switch__23338__auto__,c__23400__auto___29962,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23339__auto__ = null;
var cljs$core$async$mult_$_state_machine__23339__auto____0 = (function (){
var statearr_29958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29958[(0)] = cljs$core$async$mult_$_state_machine__23339__auto__);

(statearr_29958[(1)] = (1));

return statearr_29958;
});
var cljs$core$async$mult_$_state_machine__23339__auto____1 = (function (state_29874){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_29874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e29959){if((e29959 instanceof Object)){
var ex__23342__auto__ = e29959;
var statearr_29960_30017 = state_29874;
(statearr_29960_30017[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29874;
state_29874 = G__30018;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23339__auto__ = function(state_29874){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23339__auto____1.call(this,state_29874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23339__auto____0;
cljs$core$async$mult_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23339__auto____1;
return cljs$core$async$mult_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___29962,cs,m,dchan,dctr,done))
})();
var state__23402__auto__ = (function (){var statearr_29961 = f__23401__auto__.call(null);
(statearr_29961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___29962);

return statearr_29961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___29962,cs,m,dchan,dctr,done))
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
var G__30020 = arguments.length;
switch (G__30020) {
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

cljs.core.async.Mix = (function (){var obj30023 = {};
return obj30023;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30028){
var map__30029 = p__30028;
var map__30029__$1 = ((cljs.core.seq_QMARK_.call(null,map__30029))?cljs.core.apply.call(null,cljs.core.hash_map,map__30029):map__30029);
var opts = map__30029__$1;
var statearr_30030_30033 = state;
(statearr_30030_30033[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30029,map__30029__$1,opts){
return (function (val){
var statearr_30031_30034 = state;
(statearr_30031_30034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30029,map__30029__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30032_30035 = state;
(statearr_30032_30035[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30024){
var G__30025 = cljs.core.first.call(null,seq30024);
var seq30024__$1 = cljs.core.next.call(null,seq30024);
var G__30026 = cljs.core.first.call(null,seq30024__$1);
var seq30024__$2 = cljs.core.next.call(null,seq30024__$1);
var G__30027 = cljs.core.first.call(null,seq30024__$2);
var seq30024__$3 = cljs.core.next.call(null,seq30024__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30025,G__30026,G__30027,seq30024__$3);
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
if(typeof cljs.core.async.t30155 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30155 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30156){
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
this.meta30156 = meta30156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30155.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30155.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t30155.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30157){
var self__ = this;
var _30157__$1 = this;
return self__.meta30156;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30157,meta30156__$1){
var self__ = this;
var _30157__$1 = this;
return (new cljs.core.async.t30155(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30156__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30155.cljs$lang$type = true;

cljs.core.async.t30155.cljs$lang$ctorStr = "cljs.core.async/t30155";

cljs.core.async.t30155.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30155");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30155 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30155(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30156){
return (new cljs.core.async.t30155(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30156));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30155(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23400__auto___30274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___30274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___30274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30227){
var state_val_30228 = (state_30227[(1)]);
if((state_val_30228 === (7))){
var inst_30171 = (state_30227[(7)]);
var inst_30176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30171);
var state_30227__$1 = state_30227;
var statearr_30229_30275 = state_30227__$1;
(statearr_30229_30275[(2)] = inst_30176);

(statearr_30229_30275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (20))){
var inst_30186 = (state_30227[(8)]);
var state_30227__$1 = state_30227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30227__$1,(23),out,inst_30186);
} else {
if((state_val_30228 === (1))){
var inst_30161 = (state_30227[(9)]);
var inst_30161__$1 = calc_state.call(null);
var inst_30162 = cljs.core.seq_QMARK_.call(null,inst_30161__$1);
var state_30227__$1 = (function (){var statearr_30230 = state_30227;
(statearr_30230[(9)] = inst_30161__$1);

return statearr_30230;
})();
if(inst_30162){
var statearr_30231_30276 = state_30227__$1;
(statearr_30231_30276[(1)] = (2));

} else {
var statearr_30232_30277 = state_30227__$1;
(statearr_30232_30277[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (24))){
var inst_30179 = (state_30227[(10)]);
var inst_30171 = inst_30179;
var state_30227__$1 = (function (){var statearr_30233 = state_30227;
(statearr_30233[(7)] = inst_30171);

return statearr_30233;
})();
var statearr_30234_30278 = state_30227__$1;
(statearr_30234_30278[(2)] = null);

(statearr_30234_30278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (4))){
var inst_30161 = (state_30227[(9)]);
var inst_30167 = (state_30227[(2)]);
var inst_30168 = cljs.core.get.call(null,inst_30167,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30169 = cljs.core.get.call(null,inst_30167,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30170 = cljs.core.get.call(null,inst_30167,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30171 = inst_30161;
var state_30227__$1 = (function (){var statearr_30235 = state_30227;
(statearr_30235[(11)] = inst_30169);

(statearr_30235[(12)] = inst_30170);

(statearr_30235[(13)] = inst_30168);

(statearr_30235[(7)] = inst_30171);

return statearr_30235;
})();
var statearr_30236_30279 = state_30227__$1;
(statearr_30236_30279[(2)] = null);

(statearr_30236_30279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (15))){
var state_30227__$1 = state_30227;
var statearr_30237_30280 = state_30227__$1;
(statearr_30237_30280[(2)] = null);

(statearr_30237_30280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (21))){
var inst_30179 = (state_30227[(10)]);
var inst_30171 = inst_30179;
var state_30227__$1 = (function (){var statearr_30238 = state_30227;
(statearr_30238[(7)] = inst_30171);

return statearr_30238;
})();
var statearr_30239_30281 = state_30227__$1;
(statearr_30239_30281[(2)] = null);

(statearr_30239_30281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (13))){
var inst_30223 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30240_30282 = state_30227__$1;
(statearr_30240_30282[(2)] = inst_30223);

(statearr_30240_30282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (22))){
var inst_30221 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30241_30283 = state_30227__$1;
(statearr_30241_30283[(2)] = inst_30221);

(statearr_30241_30283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (6))){
var inst_30225 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30227__$1,inst_30225);
} else {
if((state_val_30228 === (25))){
var state_30227__$1 = state_30227;
var statearr_30242_30284 = state_30227__$1;
(statearr_30242_30284[(2)] = null);

(statearr_30242_30284[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (17))){
var inst_30201 = (state_30227[(14)]);
var state_30227__$1 = state_30227;
var statearr_30243_30285 = state_30227__$1;
(statearr_30243_30285[(2)] = inst_30201);

(statearr_30243_30285[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (3))){
var inst_30161 = (state_30227[(9)]);
var state_30227__$1 = state_30227;
var statearr_30244_30286 = state_30227__$1;
(statearr_30244_30286[(2)] = inst_30161);

(statearr_30244_30286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (12))){
var inst_30201 = (state_30227[(14)]);
var inst_30187 = (state_30227[(15)]);
var inst_30182 = (state_30227[(16)]);
var inst_30201__$1 = inst_30182.call(null,inst_30187);
var state_30227__$1 = (function (){var statearr_30245 = state_30227;
(statearr_30245[(14)] = inst_30201__$1);

return statearr_30245;
})();
if(cljs.core.truth_(inst_30201__$1)){
var statearr_30246_30287 = state_30227__$1;
(statearr_30246_30287[(1)] = (17));

} else {
var statearr_30247_30288 = state_30227__$1;
(statearr_30247_30288[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (2))){
var inst_30161 = (state_30227[(9)]);
var inst_30164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30161);
var state_30227__$1 = state_30227;
var statearr_30248_30289 = state_30227__$1;
(statearr_30248_30289[(2)] = inst_30164);

(statearr_30248_30289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (23))){
var inst_30212 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
if(cljs.core.truth_(inst_30212)){
var statearr_30249_30290 = state_30227__$1;
(statearr_30249_30290[(1)] = (24));

} else {
var statearr_30250_30291 = state_30227__$1;
(statearr_30250_30291[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (19))){
var inst_30209 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
if(cljs.core.truth_(inst_30209)){
var statearr_30251_30292 = state_30227__$1;
(statearr_30251_30292[(1)] = (20));

} else {
var statearr_30252_30293 = state_30227__$1;
(statearr_30252_30293[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (11))){
var inst_30186 = (state_30227[(8)]);
var inst_30192 = (inst_30186 == null);
var state_30227__$1 = state_30227;
if(cljs.core.truth_(inst_30192)){
var statearr_30253_30294 = state_30227__$1;
(statearr_30253_30294[(1)] = (14));

} else {
var statearr_30254_30295 = state_30227__$1;
(statearr_30254_30295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (9))){
var inst_30179 = (state_30227[(10)]);
var inst_30179__$1 = (state_30227[(2)]);
var inst_30180 = cljs.core.get.call(null,inst_30179__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30181 = cljs.core.get.call(null,inst_30179__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30182 = cljs.core.get.call(null,inst_30179__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30227__$1 = (function (){var statearr_30255 = state_30227;
(statearr_30255[(16)] = inst_30182);

(statearr_30255[(17)] = inst_30181);

(statearr_30255[(10)] = inst_30179__$1);

return statearr_30255;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30227__$1,(10),inst_30180);
} else {
if((state_val_30228 === (5))){
var inst_30171 = (state_30227[(7)]);
var inst_30174 = cljs.core.seq_QMARK_.call(null,inst_30171);
var state_30227__$1 = state_30227;
if(inst_30174){
var statearr_30256_30296 = state_30227__$1;
(statearr_30256_30296[(1)] = (7));

} else {
var statearr_30257_30297 = state_30227__$1;
(statearr_30257_30297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (14))){
var inst_30187 = (state_30227[(15)]);
var inst_30194 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30187);
var state_30227__$1 = state_30227;
var statearr_30258_30298 = state_30227__$1;
(statearr_30258_30298[(2)] = inst_30194);

(statearr_30258_30298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (26))){
var inst_30217 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30259_30299 = state_30227__$1;
(statearr_30259_30299[(2)] = inst_30217);

(statearr_30259_30299[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (16))){
var inst_30197 = (state_30227[(2)]);
var inst_30198 = calc_state.call(null);
var inst_30171 = inst_30198;
var state_30227__$1 = (function (){var statearr_30260 = state_30227;
(statearr_30260[(18)] = inst_30197);

(statearr_30260[(7)] = inst_30171);

return statearr_30260;
})();
var statearr_30261_30300 = state_30227__$1;
(statearr_30261_30300[(2)] = null);

(statearr_30261_30300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (10))){
var inst_30186 = (state_30227[(8)]);
var inst_30187 = (state_30227[(15)]);
var inst_30185 = (state_30227[(2)]);
var inst_30186__$1 = cljs.core.nth.call(null,inst_30185,(0),null);
var inst_30187__$1 = cljs.core.nth.call(null,inst_30185,(1),null);
var inst_30188 = (inst_30186__$1 == null);
var inst_30189 = cljs.core._EQ_.call(null,inst_30187__$1,change);
var inst_30190 = (inst_30188) || (inst_30189);
var state_30227__$1 = (function (){var statearr_30262 = state_30227;
(statearr_30262[(8)] = inst_30186__$1);

(statearr_30262[(15)] = inst_30187__$1);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30190)){
var statearr_30263_30301 = state_30227__$1;
(statearr_30263_30301[(1)] = (11));

} else {
var statearr_30264_30302 = state_30227__$1;
(statearr_30264_30302[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (18))){
var inst_30187 = (state_30227[(15)]);
var inst_30182 = (state_30227[(16)]);
var inst_30181 = (state_30227[(17)]);
var inst_30204 = cljs.core.empty_QMARK_.call(null,inst_30182);
var inst_30205 = inst_30181.call(null,inst_30187);
var inst_30206 = cljs.core.not.call(null,inst_30205);
var inst_30207 = (inst_30204) && (inst_30206);
var state_30227__$1 = state_30227;
var statearr_30265_30303 = state_30227__$1;
(statearr_30265_30303[(2)] = inst_30207);

(statearr_30265_30303[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (8))){
var inst_30171 = (state_30227[(7)]);
var state_30227__$1 = state_30227;
var statearr_30266_30304 = state_30227__$1;
(statearr_30266_30304[(2)] = inst_30171);

(statearr_30266_30304[(1)] = (9));


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
});})(c__23400__auto___30274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23338__auto__,c__23400__auto___30274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23339__auto__ = null;
var cljs$core$async$mix_$_state_machine__23339__auto____0 = (function (){
var statearr_30270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30270[(0)] = cljs$core$async$mix_$_state_machine__23339__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var cljs$core$async$mix_$_state_machine__23339__auto____1 = (function (state_30227){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30271){if((e30271 instanceof Object)){
var ex__23342__auto__ = e30271;
var statearr_30272_30305 = state_30227;
(statearr_30272_30305[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30306 = state_30227;
state_30227 = G__30306;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23339__auto__ = function(state_30227){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23339__auto____1.call(this,state_30227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23339__auto____0;
cljs$core$async$mix_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23339__auto____1;
return cljs$core$async$mix_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___30274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23402__auto__ = (function (){var statearr_30273 = f__23401__auto__.call(null);
(statearr_30273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___30274);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___30274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30308 = {};
return obj30308;
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
var G__30310 = arguments.length;
switch (G__30310) {
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
var G__30314 = arguments.length;
switch (G__30314) {
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
return (function (p1__30312_SHARP_){
if(cljs.core.truth_(p1__30312_SHARP_.call(null,topic))){
return p1__30312_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30312_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30315 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta30316){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta30316 = meta30316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30315.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30315.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30315.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30315.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30315.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30315.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30317){
var self__ = this;
var _30317__$1 = this;
return self__.meta30316;
});})(mults,ensure_mult))
;

cljs.core.async.t30315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30317,meta30316__$1){
var self__ = this;
var _30317__$1 = this;
return (new cljs.core.async.t30315(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta30316__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30315.cljs$lang$type = true;

cljs.core.async.t30315.cljs$lang$ctorStr = "cljs.core.async/t30315";

cljs.core.async.t30315.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30315");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30315 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30315(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30316){
return (new cljs.core.async.t30315(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30316));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30315(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23400__auto___30438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___30438,mults,ensure_mult,p){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___30438,mults,ensure_mult,p){
return (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (7))){
var inst_30385 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30391_30439 = state_30389__$1;
(statearr_30391_30439[(2)] = inst_30385);

(statearr_30391_30439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (20))){
var state_30389__$1 = state_30389;
var statearr_30392_30440 = state_30389__$1;
(statearr_30392_30440[(2)] = null);

(statearr_30392_30440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (1))){
var state_30389__$1 = state_30389;
var statearr_30393_30441 = state_30389__$1;
(statearr_30393_30441[(2)] = null);

(statearr_30393_30441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (24))){
var inst_30368 = (state_30389[(7)]);
var inst_30377 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30368);
var state_30389__$1 = state_30389;
var statearr_30394_30442 = state_30389__$1;
(statearr_30394_30442[(2)] = inst_30377);

(statearr_30394_30442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (4))){
var inst_30320 = (state_30389[(8)]);
var inst_30320__$1 = (state_30389[(2)]);
var inst_30321 = (inst_30320__$1 == null);
var state_30389__$1 = (function (){var statearr_30395 = state_30389;
(statearr_30395[(8)] = inst_30320__$1);

return statearr_30395;
})();
if(cljs.core.truth_(inst_30321)){
var statearr_30396_30443 = state_30389__$1;
(statearr_30396_30443[(1)] = (5));

} else {
var statearr_30397_30444 = state_30389__$1;
(statearr_30397_30444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (15))){
var inst_30362 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30398_30445 = state_30389__$1;
(statearr_30398_30445[(2)] = inst_30362);

(statearr_30398_30445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (21))){
var inst_30382 = (state_30389[(2)]);
var state_30389__$1 = (function (){var statearr_30399 = state_30389;
(statearr_30399[(9)] = inst_30382);

return statearr_30399;
})();
var statearr_30400_30446 = state_30389__$1;
(statearr_30400_30446[(2)] = null);

(statearr_30400_30446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (13))){
var inst_30344 = (state_30389[(10)]);
var inst_30346 = cljs.core.chunked_seq_QMARK_.call(null,inst_30344);
var state_30389__$1 = state_30389;
if(inst_30346){
var statearr_30401_30447 = state_30389__$1;
(statearr_30401_30447[(1)] = (16));

} else {
var statearr_30402_30448 = state_30389__$1;
(statearr_30402_30448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (22))){
var inst_30374 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
if(cljs.core.truth_(inst_30374)){
var statearr_30403_30449 = state_30389__$1;
(statearr_30403_30449[(1)] = (23));

} else {
var statearr_30404_30450 = state_30389__$1;
(statearr_30404_30450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (6))){
var inst_30368 = (state_30389[(7)]);
var inst_30370 = (state_30389[(11)]);
var inst_30320 = (state_30389[(8)]);
var inst_30368__$1 = topic_fn.call(null,inst_30320);
var inst_30369 = cljs.core.deref.call(null,mults);
var inst_30370__$1 = cljs.core.get.call(null,inst_30369,inst_30368__$1);
var state_30389__$1 = (function (){var statearr_30405 = state_30389;
(statearr_30405[(7)] = inst_30368__$1);

(statearr_30405[(11)] = inst_30370__$1);

return statearr_30405;
})();
if(cljs.core.truth_(inst_30370__$1)){
var statearr_30406_30451 = state_30389__$1;
(statearr_30406_30451[(1)] = (19));

} else {
var statearr_30407_30452 = state_30389__$1;
(statearr_30407_30452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (25))){
var inst_30379 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30408_30453 = state_30389__$1;
(statearr_30408_30453[(2)] = inst_30379);

(statearr_30408_30453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (17))){
var inst_30344 = (state_30389[(10)]);
var inst_30353 = cljs.core.first.call(null,inst_30344);
var inst_30354 = cljs.core.async.muxch_STAR_.call(null,inst_30353);
var inst_30355 = cljs.core.async.close_BANG_.call(null,inst_30354);
var inst_30356 = cljs.core.next.call(null,inst_30344);
var inst_30330 = inst_30356;
var inst_30331 = null;
var inst_30332 = (0);
var inst_30333 = (0);
var state_30389__$1 = (function (){var statearr_30409 = state_30389;
(statearr_30409[(12)] = inst_30330);

(statearr_30409[(13)] = inst_30333);

(statearr_30409[(14)] = inst_30355);

(statearr_30409[(15)] = inst_30332);

(statearr_30409[(16)] = inst_30331);

return statearr_30409;
})();
var statearr_30410_30454 = state_30389__$1;
(statearr_30410_30454[(2)] = null);

(statearr_30410_30454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (3))){
var inst_30387 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30389__$1,inst_30387);
} else {
if((state_val_30390 === (12))){
var inst_30364 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30411_30455 = state_30389__$1;
(statearr_30411_30455[(2)] = inst_30364);

(statearr_30411_30455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (2))){
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30389__$1,(4),ch);
} else {
if((state_val_30390 === (23))){
var state_30389__$1 = state_30389;
var statearr_30412_30456 = state_30389__$1;
(statearr_30412_30456[(2)] = null);

(statearr_30412_30456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (19))){
var inst_30370 = (state_30389[(11)]);
var inst_30320 = (state_30389[(8)]);
var inst_30372 = cljs.core.async.muxch_STAR_.call(null,inst_30370);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30389__$1,(22),inst_30372,inst_30320);
} else {
if((state_val_30390 === (11))){
var inst_30344 = (state_30389[(10)]);
var inst_30330 = (state_30389[(12)]);
var inst_30344__$1 = cljs.core.seq.call(null,inst_30330);
var state_30389__$1 = (function (){var statearr_30413 = state_30389;
(statearr_30413[(10)] = inst_30344__$1);

return statearr_30413;
})();
if(inst_30344__$1){
var statearr_30414_30457 = state_30389__$1;
(statearr_30414_30457[(1)] = (13));

} else {
var statearr_30415_30458 = state_30389__$1;
(statearr_30415_30458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (9))){
var inst_30366 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30416_30459 = state_30389__$1;
(statearr_30416_30459[(2)] = inst_30366);

(statearr_30416_30459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (5))){
var inst_30327 = cljs.core.deref.call(null,mults);
var inst_30328 = cljs.core.vals.call(null,inst_30327);
var inst_30329 = cljs.core.seq.call(null,inst_30328);
var inst_30330 = inst_30329;
var inst_30331 = null;
var inst_30332 = (0);
var inst_30333 = (0);
var state_30389__$1 = (function (){var statearr_30417 = state_30389;
(statearr_30417[(12)] = inst_30330);

(statearr_30417[(13)] = inst_30333);

(statearr_30417[(15)] = inst_30332);

(statearr_30417[(16)] = inst_30331);

return statearr_30417;
})();
var statearr_30418_30460 = state_30389__$1;
(statearr_30418_30460[(2)] = null);

(statearr_30418_30460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (14))){
var state_30389__$1 = state_30389;
var statearr_30422_30461 = state_30389__$1;
(statearr_30422_30461[(2)] = null);

(statearr_30422_30461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (16))){
var inst_30344 = (state_30389[(10)]);
var inst_30348 = cljs.core.chunk_first.call(null,inst_30344);
var inst_30349 = cljs.core.chunk_rest.call(null,inst_30344);
var inst_30350 = cljs.core.count.call(null,inst_30348);
var inst_30330 = inst_30349;
var inst_30331 = inst_30348;
var inst_30332 = inst_30350;
var inst_30333 = (0);
var state_30389__$1 = (function (){var statearr_30423 = state_30389;
(statearr_30423[(12)] = inst_30330);

(statearr_30423[(13)] = inst_30333);

(statearr_30423[(15)] = inst_30332);

(statearr_30423[(16)] = inst_30331);

return statearr_30423;
})();
var statearr_30424_30462 = state_30389__$1;
(statearr_30424_30462[(2)] = null);

(statearr_30424_30462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (10))){
var inst_30330 = (state_30389[(12)]);
var inst_30333 = (state_30389[(13)]);
var inst_30332 = (state_30389[(15)]);
var inst_30331 = (state_30389[(16)]);
var inst_30338 = cljs.core._nth.call(null,inst_30331,inst_30333);
var inst_30339 = cljs.core.async.muxch_STAR_.call(null,inst_30338);
var inst_30340 = cljs.core.async.close_BANG_.call(null,inst_30339);
var inst_30341 = (inst_30333 + (1));
var tmp30419 = inst_30330;
var tmp30420 = inst_30332;
var tmp30421 = inst_30331;
var inst_30330__$1 = tmp30419;
var inst_30331__$1 = tmp30421;
var inst_30332__$1 = tmp30420;
var inst_30333__$1 = inst_30341;
var state_30389__$1 = (function (){var statearr_30425 = state_30389;
(statearr_30425[(12)] = inst_30330__$1);

(statearr_30425[(13)] = inst_30333__$1);

(statearr_30425[(17)] = inst_30340);

(statearr_30425[(15)] = inst_30332__$1);

(statearr_30425[(16)] = inst_30331__$1);

return statearr_30425;
})();
var statearr_30426_30463 = state_30389__$1;
(statearr_30426_30463[(2)] = null);

(statearr_30426_30463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (18))){
var inst_30359 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30427_30464 = state_30389__$1;
(statearr_30427_30464[(2)] = inst_30359);

(statearr_30427_30464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (8))){
var inst_30333 = (state_30389[(13)]);
var inst_30332 = (state_30389[(15)]);
var inst_30335 = (inst_30333 < inst_30332);
var inst_30336 = inst_30335;
var state_30389__$1 = state_30389;
if(cljs.core.truth_(inst_30336)){
var statearr_30428_30465 = state_30389__$1;
(statearr_30428_30465[(1)] = (10));

} else {
var statearr_30429_30466 = state_30389__$1;
(statearr_30429_30466[(1)] = (11));

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
});})(c__23400__auto___30438,mults,ensure_mult,p))
;
return ((function (switch__23338__auto__,c__23400__auto___30438,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_30433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30433[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_30433[(1)] = (1));

return statearr_30433;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_30389){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30434){if((e30434 instanceof Object)){
var ex__23342__auto__ = e30434;
var statearr_30435_30467 = state_30389;
(statearr_30435_30467[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30468 = state_30389;
state_30389 = G__30468;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___30438,mults,ensure_mult,p))
})();
var state__23402__auto__ = (function (){var statearr_30436 = f__23401__auto__.call(null);
(statearr_30436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___30438);

return statearr_30436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___30438,mults,ensure_mult,p))
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
var G__30470 = arguments.length;
switch (G__30470) {
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
var G__30473 = arguments.length;
switch (G__30473) {
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
var G__30476 = arguments.length;
switch (G__30476) {
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
var c__23400__auto___30546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___30546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___30546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30515){
var state_val_30516 = (state_30515[(1)]);
if((state_val_30516 === (7))){
var state_30515__$1 = state_30515;
var statearr_30517_30547 = state_30515__$1;
(statearr_30517_30547[(2)] = null);

(statearr_30517_30547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (1))){
var state_30515__$1 = state_30515;
var statearr_30518_30548 = state_30515__$1;
(statearr_30518_30548[(2)] = null);

(statearr_30518_30548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (4))){
var inst_30479 = (state_30515[(7)]);
var inst_30481 = (inst_30479 < cnt);
var state_30515__$1 = state_30515;
if(cljs.core.truth_(inst_30481)){
var statearr_30519_30549 = state_30515__$1;
(statearr_30519_30549[(1)] = (6));

} else {
var statearr_30520_30550 = state_30515__$1;
(statearr_30520_30550[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (15))){
var inst_30511 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
var statearr_30521_30551 = state_30515__$1;
(statearr_30521_30551[(2)] = inst_30511);

(statearr_30521_30551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (13))){
var inst_30504 = cljs.core.async.close_BANG_.call(null,out);
var state_30515__$1 = state_30515;
var statearr_30522_30552 = state_30515__$1;
(statearr_30522_30552[(2)] = inst_30504);

(statearr_30522_30552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (6))){
var state_30515__$1 = state_30515;
var statearr_30523_30553 = state_30515__$1;
(statearr_30523_30553[(2)] = null);

(statearr_30523_30553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (3))){
var inst_30513 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30515__$1,inst_30513);
} else {
if((state_val_30516 === (12))){
var inst_30501 = (state_30515[(8)]);
var inst_30501__$1 = (state_30515[(2)]);
var inst_30502 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30501__$1);
var state_30515__$1 = (function (){var statearr_30524 = state_30515;
(statearr_30524[(8)] = inst_30501__$1);

return statearr_30524;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30525_30554 = state_30515__$1;
(statearr_30525_30554[(1)] = (13));

} else {
var statearr_30526_30555 = state_30515__$1;
(statearr_30526_30555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (2))){
var inst_30478 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30479 = (0);
var state_30515__$1 = (function (){var statearr_30527 = state_30515;
(statearr_30527[(7)] = inst_30479);

(statearr_30527[(9)] = inst_30478);

return statearr_30527;
})();
var statearr_30528_30556 = state_30515__$1;
(statearr_30528_30556[(2)] = null);

(statearr_30528_30556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (11))){
var inst_30479 = (state_30515[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30515,(10),Object,null,(9));
var inst_30488 = chs__$1.call(null,inst_30479);
var inst_30489 = done.call(null,inst_30479);
var inst_30490 = cljs.core.async.take_BANG_.call(null,inst_30488,inst_30489);
var state_30515__$1 = state_30515;
var statearr_30529_30557 = state_30515__$1;
(statearr_30529_30557[(2)] = inst_30490);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (9))){
var inst_30479 = (state_30515[(7)]);
var inst_30492 = (state_30515[(2)]);
var inst_30493 = (inst_30479 + (1));
var inst_30479__$1 = inst_30493;
var state_30515__$1 = (function (){var statearr_30530 = state_30515;
(statearr_30530[(7)] = inst_30479__$1);

(statearr_30530[(10)] = inst_30492);

return statearr_30530;
})();
var statearr_30531_30558 = state_30515__$1;
(statearr_30531_30558[(2)] = null);

(statearr_30531_30558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (5))){
var inst_30499 = (state_30515[(2)]);
var state_30515__$1 = (function (){var statearr_30532 = state_30515;
(statearr_30532[(11)] = inst_30499);

return statearr_30532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30515__$1,(12),dchan);
} else {
if((state_val_30516 === (14))){
var inst_30501 = (state_30515[(8)]);
var inst_30506 = cljs.core.apply.call(null,f,inst_30501);
var state_30515__$1 = state_30515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30515__$1,(16),out,inst_30506);
} else {
if((state_val_30516 === (16))){
var inst_30508 = (state_30515[(2)]);
var state_30515__$1 = (function (){var statearr_30533 = state_30515;
(statearr_30533[(12)] = inst_30508);

return statearr_30533;
})();
var statearr_30534_30559 = state_30515__$1;
(statearr_30534_30559[(2)] = null);

(statearr_30534_30559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (10))){
var inst_30483 = (state_30515[(2)]);
var inst_30484 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30515__$1 = (function (){var statearr_30535 = state_30515;
(statearr_30535[(13)] = inst_30483);

return statearr_30535;
})();
var statearr_30536_30560 = state_30515__$1;
(statearr_30536_30560[(2)] = inst_30484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (8))){
var inst_30497 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
var statearr_30537_30561 = state_30515__$1;
(statearr_30537_30561[(2)] = inst_30497);

(statearr_30537_30561[(1)] = (5));


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
});})(c__23400__auto___30546,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23338__auto__,c__23400__auto___30546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_30541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30541[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_30541[(1)] = (1));

return statearr_30541;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_30515){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30542){if((e30542 instanceof Object)){
var ex__23342__auto__ = e30542;
var statearr_30543_30562 = state_30515;
(statearr_30543_30562[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30563 = state_30515;
state_30515 = G__30563;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_30515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_30515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___30546,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23402__auto__ = (function (){var statearr_30544 = f__23401__auto__.call(null);
(statearr_30544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___30546);

return statearr_30544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___30546,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30566 = arguments.length;
switch (G__30566) {
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
var c__23400__auto___30621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___30621,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___30621,out){
return (function (state_30596){
var state_val_30597 = (state_30596[(1)]);
if((state_val_30597 === (7))){
var inst_30575 = (state_30596[(7)]);
var inst_30576 = (state_30596[(8)]);
var inst_30575__$1 = (state_30596[(2)]);
var inst_30576__$1 = cljs.core.nth.call(null,inst_30575__$1,(0),null);
var inst_30577 = cljs.core.nth.call(null,inst_30575__$1,(1),null);
var inst_30578 = (inst_30576__$1 == null);
var state_30596__$1 = (function (){var statearr_30598 = state_30596;
(statearr_30598[(9)] = inst_30577);

(statearr_30598[(7)] = inst_30575__$1);

(statearr_30598[(8)] = inst_30576__$1);

return statearr_30598;
})();
if(cljs.core.truth_(inst_30578)){
var statearr_30599_30622 = state_30596__$1;
(statearr_30599_30622[(1)] = (8));

} else {
var statearr_30600_30623 = state_30596__$1;
(statearr_30600_30623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (1))){
var inst_30567 = cljs.core.vec.call(null,chs);
var inst_30568 = inst_30567;
var state_30596__$1 = (function (){var statearr_30601 = state_30596;
(statearr_30601[(10)] = inst_30568);

return statearr_30601;
})();
var statearr_30602_30624 = state_30596__$1;
(statearr_30602_30624[(2)] = null);

(statearr_30602_30624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (4))){
var inst_30568 = (state_30596[(10)]);
var state_30596__$1 = state_30596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30596__$1,(7),inst_30568);
} else {
if((state_val_30597 === (6))){
var inst_30592 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30603_30625 = state_30596__$1;
(statearr_30603_30625[(2)] = inst_30592);

(statearr_30603_30625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (3))){
var inst_30594 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30596__$1,inst_30594);
} else {
if((state_val_30597 === (2))){
var inst_30568 = (state_30596[(10)]);
var inst_30570 = cljs.core.count.call(null,inst_30568);
var inst_30571 = (inst_30570 > (0));
var state_30596__$1 = state_30596;
if(cljs.core.truth_(inst_30571)){
var statearr_30605_30626 = state_30596__$1;
(statearr_30605_30626[(1)] = (4));

} else {
var statearr_30606_30627 = state_30596__$1;
(statearr_30606_30627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (11))){
var inst_30568 = (state_30596[(10)]);
var inst_30585 = (state_30596[(2)]);
var tmp30604 = inst_30568;
var inst_30568__$1 = tmp30604;
var state_30596__$1 = (function (){var statearr_30607 = state_30596;
(statearr_30607[(11)] = inst_30585);

(statearr_30607[(10)] = inst_30568__$1);

return statearr_30607;
})();
var statearr_30608_30628 = state_30596__$1;
(statearr_30608_30628[(2)] = null);

(statearr_30608_30628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (9))){
var inst_30576 = (state_30596[(8)]);
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30596__$1,(11),out,inst_30576);
} else {
if((state_val_30597 === (5))){
var inst_30590 = cljs.core.async.close_BANG_.call(null,out);
var state_30596__$1 = state_30596;
var statearr_30609_30629 = state_30596__$1;
(statearr_30609_30629[(2)] = inst_30590);

(statearr_30609_30629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (10))){
var inst_30588 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30610_30630 = state_30596__$1;
(statearr_30610_30630[(2)] = inst_30588);

(statearr_30610_30630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (8))){
var inst_30577 = (state_30596[(9)]);
var inst_30575 = (state_30596[(7)]);
var inst_30576 = (state_30596[(8)]);
var inst_30568 = (state_30596[(10)]);
var inst_30580 = (function (){var c = inst_30577;
var v = inst_30576;
var vec__30573 = inst_30575;
var cs = inst_30568;
return ((function (c,v,vec__30573,cs,inst_30577,inst_30575,inst_30576,inst_30568,state_val_30597,c__23400__auto___30621,out){
return (function (p1__30564_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30564_SHARP_);
});
;})(c,v,vec__30573,cs,inst_30577,inst_30575,inst_30576,inst_30568,state_val_30597,c__23400__auto___30621,out))
})();
var inst_30581 = cljs.core.filterv.call(null,inst_30580,inst_30568);
var inst_30568__$1 = inst_30581;
var state_30596__$1 = (function (){var statearr_30611 = state_30596;
(statearr_30611[(10)] = inst_30568__$1);

return statearr_30611;
})();
var statearr_30612_30631 = state_30596__$1;
(statearr_30612_30631[(2)] = null);

(statearr_30612_30631[(1)] = (2));


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
});})(c__23400__auto___30621,out))
;
return ((function (switch__23338__auto__,c__23400__auto___30621,out){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_30596){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__23342__auto__ = e30617;
var statearr_30618_30632 = state_30596;
(statearr_30618_30632[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30633 = state_30596;
state_30596 = G__30633;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_30596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_30596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___30621,out))
})();
var state__23402__auto__ = (function (){var statearr_30619 = f__23401__auto__.call(null);
(statearr_30619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___30621);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___30621,out))
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
var G__30635 = arguments.length;
switch (G__30635) {
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
var c__23400__auto___30683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___30683,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___30683,out){
return (function (state_30659){
var state_val_30660 = (state_30659[(1)]);
if((state_val_30660 === (7))){
var inst_30641 = (state_30659[(7)]);
var inst_30641__$1 = (state_30659[(2)]);
var inst_30642 = (inst_30641__$1 == null);
var inst_30643 = cljs.core.not.call(null,inst_30642);
var state_30659__$1 = (function (){var statearr_30661 = state_30659;
(statearr_30661[(7)] = inst_30641__$1);

return statearr_30661;
})();
if(inst_30643){
var statearr_30662_30684 = state_30659__$1;
(statearr_30662_30684[(1)] = (8));

} else {
var statearr_30663_30685 = state_30659__$1;
(statearr_30663_30685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (1))){
var inst_30636 = (0);
var state_30659__$1 = (function (){var statearr_30664 = state_30659;
(statearr_30664[(8)] = inst_30636);

return statearr_30664;
})();
var statearr_30665_30686 = state_30659__$1;
(statearr_30665_30686[(2)] = null);

(statearr_30665_30686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (4))){
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30659__$1,(7),ch);
} else {
if((state_val_30660 === (6))){
var inst_30654 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
var statearr_30666_30687 = state_30659__$1;
(statearr_30666_30687[(2)] = inst_30654);

(statearr_30666_30687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (3))){
var inst_30656 = (state_30659[(2)]);
var inst_30657 = cljs.core.async.close_BANG_.call(null,out);
var state_30659__$1 = (function (){var statearr_30667 = state_30659;
(statearr_30667[(9)] = inst_30656);

return statearr_30667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30659__$1,inst_30657);
} else {
if((state_val_30660 === (2))){
var inst_30636 = (state_30659[(8)]);
var inst_30638 = (inst_30636 < n);
var state_30659__$1 = state_30659;
if(cljs.core.truth_(inst_30638)){
var statearr_30668_30688 = state_30659__$1;
(statearr_30668_30688[(1)] = (4));

} else {
var statearr_30669_30689 = state_30659__$1;
(statearr_30669_30689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (11))){
var inst_30636 = (state_30659[(8)]);
var inst_30646 = (state_30659[(2)]);
var inst_30647 = (inst_30636 + (1));
var inst_30636__$1 = inst_30647;
var state_30659__$1 = (function (){var statearr_30670 = state_30659;
(statearr_30670[(8)] = inst_30636__$1);

(statearr_30670[(10)] = inst_30646);

return statearr_30670;
})();
var statearr_30671_30690 = state_30659__$1;
(statearr_30671_30690[(2)] = null);

(statearr_30671_30690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (9))){
var state_30659__$1 = state_30659;
var statearr_30672_30691 = state_30659__$1;
(statearr_30672_30691[(2)] = null);

(statearr_30672_30691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (5))){
var state_30659__$1 = state_30659;
var statearr_30673_30692 = state_30659__$1;
(statearr_30673_30692[(2)] = null);

(statearr_30673_30692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (10))){
var inst_30651 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
var statearr_30674_30693 = state_30659__$1;
(statearr_30674_30693[(2)] = inst_30651);

(statearr_30674_30693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (8))){
var inst_30641 = (state_30659[(7)]);
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30659__$1,(11),out,inst_30641);
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
});})(c__23400__auto___30683,out))
;
return ((function (switch__23338__auto__,c__23400__auto___30683,out){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_30678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30678[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_30678[(1)] = (1));

return statearr_30678;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_30659){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30679){if((e30679 instanceof Object)){
var ex__23342__auto__ = e30679;
var statearr_30680_30694 = state_30659;
(statearr_30680_30694[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30695 = state_30659;
state_30659 = G__30695;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_30659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_30659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___30683,out))
})();
var state__23402__auto__ = (function (){var statearr_30681 = f__23401__auto__.call(null);
(statearr_30681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___30683);

return statearr_30681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___30683,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30703 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30703 = (function (ch,f,map_LT_,meta30704){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30704 = meta30704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30706 = (function (fn1,_,meta30704,map_LT_,f,ch,meta30707){
this.fn1 = fn1;
this._ = _;
this.meta30704 = meta30704;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30707 = meta30707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30696_SHARP_){
return f1.call(null,(((p1__30696_SHARP_ == null))?null:self__.f.call(null,p1__30696_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30708){
var self__ = this;
var _30708__$1 = this;
return self__.meta30707;
});})(___$1))
;

cljs.core.async.t30706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30708,meta30707__$1){
var self__ = this;
var _30708__$1 = this;
return (new cljs.core.async.t30706(self__.fn1,self__._,self__.meta30704,self__.map_LT_,self__.f,self__.ch,meta30707__$1));
});})(___$1))
;

cljs.core.async.t30706.cljs$lang$type = true;

cljs.core.async.t30706.cljs$lang$ctorStr = "cljs.core.async/t30706";

cljs.core.async.t30706.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30706");
});})(___$1))
;

cljs.core.async.__GT_t30706 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30706(fn1__$1,___$2,meta30704__$1,map_LT___$1,f__$1,ch__$1,meta30707){
return (new cljs.core.async.t30706(fn1__$1,___$2,meta30704__$1,map_LT___$1,f__$1,ch__$1,meta30707));
});})(___$1))
;

}

return (new cljs.core.async.t30706(fn1,___$1,self__.meta30704,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30705){
var self__ = this;
var _30705__$1 = this;
return self__.meta30704;
});

cljs.core.async.t30703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30705,meta30704__$1){
var self__ = this;
var _30705__$1 = this;
return (new cljs.core.async.t30703(self__.ch,self__.f,self__.map_LT_,meta30704__$1));
});

cljs.core.async.t30703.cljs$lang$type = true;

cljs.core.async.t30703.cljs$lang$ctorStr = "cljs.core.async/t30703";

cljs.core.async.t30703.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30703");
});

cljs.core.async.__GT_t30703 = (function cljs$core$async$map_LT__$___GT_t30703(ch__$1,f__$1,map_LT___$1,meta30704){
return (new cljs.core.async.t30703(ch__$1,f__$1,map_LT___$1,meta30704));
});

}

return (new cljs.core.async.t30703(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30712 = (function (ch,f,map_GT_,meta30713){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30713 = meta30713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30712.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30714){
var self__ = this;
var _30714__$1 = this;
return self__.meta30713;
});

cljs.core.async.t30712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30714,meta30713__$1){
var self__ = this;
var _30714__$1 = this;
return (new cljs.core.async.t30712(self__.ch,self__.f,self__.map_GT_,meta30713__$1));
});

cljs.core.async.t30712.cljs$lang$type = true;

cljs.core.async.t30712.cljs$lang$ctorStr = "cljs.core.async/t30712";

cljs.core.async.t30712.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30712");
});

cljs.core.async.__GT_t30712 = (function cljs$core$async$map_GT__$___GT_t30712(ch__$1,f__$1,map_GT___$1,meta30713){
return (new cljs.core.async.t30712(ch__$1,f__$1,map_GT___$1,meta30713));
});

}

return (new cljs.core.async.t30712(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30718 = (function (ch,p,filter_GT_,meta30719){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30719 = meta30719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30718.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30720){
var self__ = this;
var _30720__$1 = this;
return self__.meta30719;
});

cljs.core.async.t30718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30720,meta30719__$1){
var self__ = this;
var _30720__$1 = this;
return (new cljs.core.async.t30718(self__.ch,self__.p,self__.filter_GT_,meta30719__$1));
});

cljs.core.async.t30718.cljs$lang$type = true;

cljs.core.async.t30718.cljs$lang$ctorStr = "cljs.core.async/t30718";

cljs.core.async.t30718.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30718");
});

cljs.core.async.__GT_t30718 = (function cljs$core$async$filter_GT__$___GT_t30718(ch__$1,p__$1,filter_GT___$1,meta30719){
return (new cljs.core.async.t30718(ch__$1,p__$1,filter_GT___$1,meta30719));
});

}

return (new cljs.core.async.t30718(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30722 = arguments.length;
switch (G__30722) {
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
var c__23400__auto___30765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___30765,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___30765,out){
return (function (state_30743){
var state_val_30744 = (state_30743[(1)]);
if((state_val_30744 === (7))){
var inst_30739 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30745_30766 = state_30743__$1;
(statearr_30745_30766[(2)] = inst_30739);

(statearr_30745_30766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (1))){
var state_30743__$1 = state_30743;
var statearr_30746_30767 = state_30743__$1;
(statearr_30746_30767[(2)] = null);

(statearr_30746_30767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (4))){
var inst_30725 = (state_30743[(7)]);
var inst_30725__$1 = (state_30743[(2)]);
var inst_30726 = (inst_30725__$1 == null);
var state_30743__$1 = (function (){var statearr_30747 = state_30743;
(statearr_30747[(7)] = inst_30725__$1);

return statearr_30747;
})();
if(cljs.core.truth_(inst_30726)){
var statearr_30748_30768 = state_30743__$1;
(statearr_30748_30768[(1)] = (5));

} else {
var statearr_30749_30769 = state_30743__$1;
(statearr_30749_30769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (6))){
var inst_30725 = (state_30743[(7)]);
var inst_30730 = p.call(null,inst_30725);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30730)){
var statearr_30750_30770 = state_30743__$1;
(statearr_30750_30770[(1)] = (8));

} else {
var statearr_30751_30771 = state_30743__$1;
(statearr_30751_30771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (3))){
var inst_30741 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30743__$1,inst_30741);
} else {
if((state_val_30744 === (2))){
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30743__$1,(4),ch);
} else {
if((state_val_30744 === (11))){
var inst_30733 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30752_30772 = state_30743__$1;
(statearr_30752_30772[(2)] = inst_30733);

(statearr_30752_30772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (9))){
var state_30743__$1 = state_30743;
var statearr_30753_30773 = state_30743__$1;
(statearr_30753_30773[(2)] = null);

(statearr_30753_30773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (5))){
var inst_30728 = cljs.core.async.close_BANG_.call(null,out);
var state_30743__$1 = state_30743;
var statearr_30754_30774 = state_30743__$1;
(statearr_30754_30774[(2)] = inst_30728);

(statearr_30754_30774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (10))){
var inst_30736 = (state_30743[(2)]);
var state_30743__$1 = (function (){var statearr_30755 = state_30743;
(statearr_30755[(8)] = inst_30736);

return statearr_30755;
})();
var statearr_30756_30775 = state_30743__$1;
(statearr_30756_30775[(2)] = null);

(statearr_30756_30775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (8))){
var inst_30725 = (state_30743[(7)]);
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30743__$1,(11),out,inst_30725);
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
});})(c__23400__auto___30765,out))
;
return ((function (switch__23338__auto__,c__23400__auto___30765,out){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_30760 = [null,null,null,null,null,null,null,null,null];
(statearr_30760[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_30760[(1)] = (1));

return statearr_30760;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_30743){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30761){if((e30761 instanceof Object)){
var ex__23342__auto__ = e30761;
var statearr_30762_30776 = state_30743;
(statearr_30762_30776[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30777 = state_30743;
state_30743 = G__30777;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_30743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_30743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___30765,out))
})();
var state__23402__auto__ = (function (){var statearr_30763 = f__23401__auto__.call(null);
(statearr_30763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___30765);

return statearr_30763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___30765,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30779 = arguments.length;
switch (G__30779) {
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
var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__){
return (function (state_30946){
var state_val_30947 = (state_30946[(1)]);
if((state_val_30947 === (7))){
var inst_30942 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30948_30989 = state_30946__$1;
(statearr_30948_30989[(2)] = inst_30942);

(statearr_30948_30989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (20))){
var inst_30912 = (state_30946[(7)]);
var inst_30923 = (state_30946[(2)]);
var inst_30924 = cljs.core.next.call(null,inst_30912);
var inst_30898 = inst_30924;
var inst_30899 = null;
var inst_30900 = (0);
var inst_30901 = (0);
var state_30946__$1 = (function (){var statearr_30949 = state_30946;
(statearr_30949[(8)] = inst_30900);

(statearr_30949[(9)] = inst_30898);

(statearr_30949[(10)] = inst_30899);

(statearr_30949[(11)] = inst_30901);

(statearr_30949[(12)] = inst_30923);

return statearr_30949;
})();
var statearr_30950_30990 = state_30946__$1;
(statearr_30950_30990[(2)] = null);

(statearr_30950_30990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (1))){
var state_30946__$1 = state_30946;
var statearr_30951_30991 = state_30946__$1;
(statearr_30951_30991[(2)] = null);

(statearr_30951_30991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (4))){
var inst_30887 = (state_30946[(13)]);
var inst_30887__$1 = (state_30946[(2)]);
var inst_30888 = (inst_30887__$1 == null);
var state_30946__$1 = (function (){var statearr_30952 = state_30946;
(statearr_30952[(13)] = inst_30887__$1);

return statearr_30952;
})();
if(cljs.core.truth_(inst_30888)){
var statearr_30953_30992 = state_30946__$1;
(statearr_30953_30992[(1)] = (5));

} else {
var statearr_30954_30993 = state_30946__$1;
(statearr_30954_30993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (15))){
var state_30946__$1 = state_30946;
var statearr_30958_30994 = state_30946__$1;
(statearr_30958_30994[(2)] = null);

(statearr_30958_30994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (21))){
var state_30946__$1 = state_30946;
var statearr_30959_30995 = state_30946__$1;
(statearr_30959_30995[(2)] = null);

(statearr_30959_30995[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (13))){
var inst_30900 = (state_30946[(8)]);
var inst_30898 = (state_30946[(9)]);
var inst_30899 = (state_30946[(10)]);
var inst_30901 = (state_30946[(11)]);
var inst_30908 = (state_30946[(2)]);
var inst_30909 = (inst_30901 + (1));
var tmp30955 = inst_30900;
var tmp30956 = inst_30898;
var tmp30957 = inst_30899;
var inst_30898__$1 = tmp30956;
var inst_30899__$1 = tmp30957;
var inst_30900__$1 = tmp30955;
var inst_30901__$1 = inst_30909;
var state_30946__$1 = (function (){var statearr_30960 = state_30946;
(statearr_30960[(8)] = inst_30900__$1);

(statearr_30960[(14)] = inst_30908);

(statearr_30960[(9)] = inst_30898__$1);

(statearr_30960[(10)] = inst_30899__$1);

(statearr_30960[(11)] = inst_30901__$1);

return statearr_30960;
})();
var statearr_30961_30996 = state_30946__$1;
(statearr_30961_30996[(2)] = null);

(statearr_30961_30996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (22))){
var state_30946__$1 = state_30946;
var statearr_30962_30997 = state_30946__$1;
(statearr_30962_30997[(2)] = null);

(statearr_30962_30997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (6))){
var inst_30887 = (state_30946[(13)]);
var inst_30896 = f.call(null,inst_30887);
var inst_30897 = cljs.core.seq.call(null,inst_30896);
var inst_30898 = inst_30897;
var inst_30899 = null;
var inst_30900 = (0);
var inst_30901 = (0);
var state_30946__$1 = (function (){var statearr_30963 = state_30946;
(statearr_30963[(8)] = inst_30900);

(statearr_30963[(9)] = inst_30898);

(statearr_30963[(10)] = inst_30899);

(statearr_30963[(11)] = inst_30901);

return statearr_30963;
})();
var statearr_30964_30998 = state_30946__$1;
(statearr_30964_30998[(2)] = null);

(statearr_30964_30998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (17))){
var inst_30912 = (state_30946[(7)]);
var inst_30916 = cljs.core.chunk_first.call(null,inst_30912);
var inst_30917 = cljs.core.chunk_rest.call(null,inst_30912);
var inst_30918 = cljs.core.count.call(null,inst_30916);
var inst_30898 = inst_30917;
var inst_30899 = inst_30916;
var inst_30900 = inst_30918;
var inst_30901 = (0);
var state_30946__$1 = (function (){var statearr_30965 = state_30946;
(statearr_30965[(8)] = inst_30900);

(statearr_30965[(9)] = inst_30898);

(statearr_30965[(10)] = inst_30899);

(statearr_30965[(11)] = inst_30901);

return statearr_30965;
})();
var statearr_30966_30999 = state_30946__$1;
(statearr_30966_30999[(2)] = null);

(statearr_30966_30999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (3))){
var inst_30944 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30946__$1,inst_30944);
} else {
if((state_val_30947 === (12))){
var inst_30932 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30967_31000 = state_30946__$1;
(statearr_30967_31000[(2)] = inst_30932);

(statearr_30967_31000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (2))){
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30946__$1,(4),in$);
} else {
if((state_val_30947 === (23))){
var inst_30940 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30968_31001 = state_30946__$1;
(statearr_30968_31001[(2)] = inst_30940);

(statearr_30968_31001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (19))){
var inst_30927 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30969_31002 = state_30946__$1;
(statearr_30969_31002[(2)] = inst_30927);

(statearr_30969_31002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (11))){
var inst_30898 = (state_30946[(9)]);
var inst_30912 = (state_30946[(7)]);
var inst_30912__$1 = cljs.core.seq.call(null,inst_30898);
var state_30946__$1 = (function (){var statearr_30970 = state_30946;
(statearr_30970[(7)] = inst_30912__$1);

return statearr_30970;
})();
if(inst_30912__$1){
var statearr_30971_31003 = state_30946__$1;
(statearr_30971_31003[(1)] = (14));

} else {
var statearr_30972_31004 = state_30946__$1;
(statearr_30972_31004[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (9))){
var inst_30934 = (state_30946[(2)]);
var inst_30935 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30946__$1 = (function (){var statearr_30973 = state_30946;
(statearr_30973[(15)] = inst_30934);

return statearr_30973;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_30974_31005 = state_30946__$1;
(statearr_30974_31005[(1)] = (21));

} else {
var statearr_30975_31006 = state_30946__$1;
(statearr_30975_31006[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (5))){
var inst_30890 = cljs.core.async.close_BANG_.call(null,out);
var state_30946__$1 = state_30946;
var statearr_30976_31007 = state_30946__$1;
(statearr_30976_31007[(2)] = inst_30890);

(statearr_30976_31007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (14))){
var inst_30912 = (state_30946[(7)]);
var inst_30914 = cljs.core.chunked_seq_QMARK_.call(null,inst_30912);
var state_30946__$1 = state_30946;
if(inst_30914){
var statearr_30977_31008 = state_30946__$1;
(statearr_30977_31008[(1)] = (17));

} else {
var statearr_30978_31009 = state_30946__$1;
(statearr_30978_31009[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (16))){
var inst_30930 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30979_31010 = state_30946__$1;
(statearr_30979_31010[(2)] = inst_30930);

(statearr_30979_31010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (10))){
var inst_30899 = (state_30946[(10)]);
var inst_30901 = (state_30946[(11)]);
var inst_30906 = cljs.core._nth.call(null,inst_30899,inst_30901);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30946__$1,(13),out,inst_30906);
} else {
if((state_val_30947 === (18))){
var inst_30912 = (state_30946[(7)]);
var inst_30921 = cljs.core.first.call(null,inst_30912);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30946__$1,(20),out,inst_30921);
} else {
if((state_val_30947 === (8))){
var inst_30900 = (state_30946[(8)]);
var inst_30901 = (state_30946[(11)]);
var inst_30903 = (inst_30901 < inst_30900);
var inst_30904 = inst_30903;
var state_30946__$1 = state_30946;
if(cljs.core.truth_(inst_30904)){
var statearr_30980_31011 = state_30946__$1;
(statearr_30980_31011[(1)] = (10));

} else {
var statearr_30981_31012 = state_30946__$1;
(statearr_30981_31012[(1)] = (11));

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
});})(c__23400__auto__))
;
return ((function (switch__23338__auto__,c__23400__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23339__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23339__auto____0 = (function (){
var statearr_30985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30985[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23339__auto__);

(statearr_30985[(1)] = (1));

return statearr_30985;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23339__auto____1 = (function (state_30946){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_30946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e30986){if((e30986 instanceof Object)){
var ex__23342__auto__ = e30986;
var statearr_30987_31013 = state_30946;
(statearr_30987_31013[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31014 = state_30946;
state_30946 = G__31014;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23339__auto__ = function(state_30946){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23339__auto____1.call(this,state_30946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23339__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23339__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__))
})();
var state__23402__auto__ = (function (){var statearr_30988 = f__23401__auto__.call(null);
(statearr_30988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_30988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__))
);

return c__23400__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__31016 = arguments.length;
switch (G__31016) {
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
var G__31019 = arguments.length;
switch (G__31019) {
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
var G__31022 = arguments.length;
switch (G__31022) {
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
var c__23400__auto___31072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___31072,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___31072,out){
return (function (state_31046){
var state_val_31047 = (state_31046[(1)]);
if((state_val_31047 === (7))){
var inst_31041 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
var statearr_31048_31073 = state_31046__$1;
(statearr_31048_31073[(2)] = inst_31041);

(statearr_31048_31073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (1))){
var inst_31023 = null;
var state_31046__$1 = (function (){var statearr_31049 = state_31046;
(statearr_31049[(7)] = inst_31023);

return statearr_31049;
})();
var statearr_31050_31074 = state_31046__$1;
(statearr_31050_31074[(2)] = null);

(statearr_31050_31074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (4))){
var inst_31026 = (state_31046[(8)]);
var inst_31026__$1 = (state_31046[(2)]);
var inst_31027 = (inst_31026__$1 == null);
var inst_31028 = cljs.core.not.call(null,inst_31027);
var state_31046__$1 = (function (){var statearr_31051 = state_31046;
(statearr_31051[(8)] = inst_31026__$1);

return statearr_31051;
})();
if(inst_31028){
var statearr_31052_31075 = state_31046__$1;
(statearr_31052_31075[(1)] = (5));

} else {
var statearr_31053_31076 = state_31046__$1;
(statearr_31053_31076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (6))){
var state_31046__$1 = state_31046;
var statearr_31054_31077 = state_31046__$1;
(statearr_31054_31077[(2)] = null);

(statearr_31054_31077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (3))){
var inst_31043 = (state_31046[(2)]);
var inst_31044 = cljs.core.async.close_BANG_.call(null,out);
var state_31046__$1 = (function (){var statearr_31055 = state_31046;
(statearr_31055[(9)] = inst_31043);

return statearr_31055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31046__$1,inst_31044);
} else {
if((state_val_31047 === (2))){
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31046__$1,(4),ch);
} else {
if((state_val_31047 === (11))){
var inst_31026 = (state_31046[(8)]);
var inst_31035 = (state_31046[(2)]);
var inst_31023 = inst_31026;
var state_31046__$1 = (function (){var statearr_31056 = state_31046;
(statearr_31056[(7)] = inst_31023);

(statearr_31056[(10)] = inst_31035);

return statearr_31056;
})();
var statearr_31057_31078 = state_31046__$1;
(statearr_31057_31078[(2)] = null);

(statearr_31057_31078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (9))){
var inst_31026 = (state_31046[(8)]);
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31046__$1,(11),out,inst_31026);
} else {
if((state_val_31047 === (5))){
var inst_31023 = (state_31046[(7)]);
var inst_31026 = (state_31046[(8)]);
var inst_31030 = cljs.core._EQ_.call(null,inst_31026,inst_31023);
var state_31046__$1 = state_31046;
if(inst_31030){
var statearr_31059_31079 = state_31046__$1;
(statearr_31059_31079[(1)] = (8));

} else {
var statearr_31060_31080 = state_31046__$1;
(statearr_31060_31080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (10))){
var inst_31038 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
var statearr_31061_31081 = state_31046__$1;
(statearr_31061_31081[(2)] = inst_31038);

(statearr_31061_31081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31047 === (8))){
var inst_31023 = (state_31046[(7)]);
var tmp31058 = inst_31023;
var inst_31023__$1 = tmp31058;
var state_31046__$1 = (function (){var statearr_31062 = state_31046;
(statearr_31062[(7)] = inst_31023__$1);

return statearr_31062;
})();
var statearr_31063_31082 = state_31046__$1;
(statearr_31063_31082[(2)] = null);

(statearr_31063_31082[(1)] = (2));


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
});})(c__23400__auto___31072,out))
;
return ((function (switch__23338__auto__,c__23400__auto___31072,out){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_31067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31067[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_31067[(1)] = (1));

return statearr_31067;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_31046){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_31046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e31068){if((e31068 instanceof Object)){
var ex__23342__auto__ = e31068;
var statearr_31069_31083 = state_31046;
(statearr_31069_31083[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31084 = state_31046;
state_31046 = G__31084;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_31046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_31046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___31072,out))
})();
var state__23402__auto__ = (function (){var statearr_31070 = f__23401__auto__.call(null);
(statearr_31070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___31072);

return statearr_31070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___31072,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__31086 = arguments.length;
switch (G__31086) {
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
var c__23400__auto___31155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___31155,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___31155,out){
return (function (state_31124){
var state_val_31125 = (state_31124[(1)]);
if((state_val_31125 === (7))){
var inst_31120 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31126_31156 = state_31124__$1;
(statearr_31126_31156[(2)] = inst_31120);

(statearr_31126_31156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (1))){
var inst_31087 = (new Array(n));
var inst_31088 = inst_31087;
var inst_31089 = (0);
var state_31124__$1 = (function (){var statearr_31127 = state_31124;
(statearr_31127[(7)] = inst_31089);

(statearr_31127[(8)] = inst_31088);

return statearr_31127;
})();
var statearr_31128_31157 = state_31124__$1;
(statearr_31128_31157[(2)] = null);

(statearr_31128_31157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (4))){
var inst_31092 = (state_31124[(9)]);
var inst_31092__$1 = (state_31124[(2)]);
var inst_31093 = (inst_31092__$1 == null);
var inst_31094 = cljs.core.not.call(null,inst_31093);
var state_31124__$1 = (function (){var statearr_31129 = state_31124;
(statearr_31129[(9)] = inst_31092__$1);

return statearr_31129;
})();
if(inst_31094){
var statearr_31130_31158 = state_31124__$1;
(statearr_31130_31158[(1)] = (5));

} else {
var statearr_31131_31159 = state_31124__$1;
(statearr_31131_31159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (15))){
var inst_31114 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31132_31160 = state_31124__$1;
(statearr_31132_31160[(2)] = inst_31114);

(statearr_31132_31160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (13))){
var state_31124__$1 = state_31124;
var statearr_31133_31161 = state_31124__$1;
(statearr_31133_31161[(2)] = null);

(statearr_31133_31161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (6))){
var inst_31089 = (state_31124[(7)]);
var inst_31110 = (inst_31089 > (0));
var state_31124__$1 = state_31124;
if(cljs.core.truth_(inst_31110)){
var statearr_31134_31162 = state_31124__$1;
(statearr_31134_31162[(1)] = (12));

} else {
var statearr_31135_31163 = state_31124__$1;
(statearr_31135_31163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (3))){
var inst_31122 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31124__$1,inst_31122);
} else {
if((state_val_31125 === (12))){
var inst_31088 = (state_31124[(8)]);
var inst_31112 = cljs.core.vec.call(null,inst_31088);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31124__$1,(15),out,inst_31112);
} else {
if((state_val_31125 === (2))){
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31124__$1,(4),ch);
} else {
if((state_val_31125 === (11))){
var inst_31104 = (state_31124[(2)]);
var inst_31105 = (new Array(n));
var inst_31088 = inst_31105;
var inst_31089 = (0);
var state_31124__$1 = (function (){var statearr_31136 = state_31124;
(statearr_31136[(10)] = inst_31104);

(statearr_31136[(7)] = inst_31089);

(statearr_31136[(8)] = inst_31088);

return statearr_31136;
})();
var statearr_31137_31164 = state_31124__$1;
(statearr_31137_31164[(2)] = null);

(statearr_31137_31164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (9))){
var inst_31088 = (state_31124[(8)]);
var inst_31102 = cljs.core.vec.call(null,inst_31088);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31124__$1,(11),out,inst_31102);
} else {
if((state_val_31125 === (5))){
var inst_31092 = (state_31124[(9)]);
var inst_31097 = (state_31124[(11)]);
var inst_31089 = (state_31124[(7)]);
var inst_31088 = (state_31124[(8)]);
var inst_31096 = (inst_31088[inst_31089] = inst_31092);
var inst_31097__$1 = (inst_31089 + (1));
var inst_31098 = (inst_31097__$1 < n);
var state_31124__$1 = (function (){var statearr_31138 = state_31124;
(statearr_31138[(11)] = inst_31097__$1);

(statearr_31138[(12)] = inst_31096);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31098)){
var statearr_31139_31165 = state_31124__$1;
(statearr_31139_31165[(1)] = (8));

} else {
var statearr_31140_31166 = state_31124__$1;
(statearr_31140_31166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (14))){
var inst_31117 = (state_31124[(2)]);
var inst_31118 = cljs.core.async.close_BANG_.call(null,out);
var state_31124__$1 = (function (){var statearr_31142 = state_31124;
(statearr_31142[(13)] = inst_31117);

return statearr_31142;
})();
var statearr_31143_31167 = state_31124__$1;
(statearr_31143_31167[(2)] = inst_31118);

(statearr_31143_31167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (10))){
var inst_31108 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31144_31168 = state_31124__$1;
(statearr_31144_31168[(2)] = inst_31108);

(statearr_31144_31168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (8))){
var inst_31097 = (state_31124[(11)]);
var inst_31088 = (state_31124[(8)]);
var tmp31141 = inst_31088;
var inst_31088__$1 = tmp31141;
var inst_31089 = inst_31097;
var state_31124__$1 = (function (){var statearr_31145 = state_31124;
(statearr_31145[(7)] = inst_31089);

(statearr_31145[(8)] = inst_31088__$1);

return statearr_31145;
})();
var statearr_31146_31169 = state_31124__$1;
(statearr_31146_31169[(2)] = null);

(statearr_31146_31169[(1)] = (2));


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
});})(c__23400__auto___31155,out))
;
return ((function (switch__23338__auto__,c__23400__auto___31155,out){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_31150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31150[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_31150[(1)] = (1));

return statearr_31150;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_31124){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_31124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e31151){if((e31151 instanceof Object)){
var ex__23342__auto__ = e31151;
var statearr_31152_31170 = state_31124;
(statearr_31152_31170[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31171 = state_31124;
state_31124 = G__31171;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___31155,out))
})();
var state__23402__auto__ = (function (){var statearr_31153 = f__23401__auto__.call(null);
(statearr_31153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___31155);

return statearr_31153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___31155,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31173 = arguments.length;
switch (G__31173) {
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
var c__23400__auto___31246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___31246,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___31246,out){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31217_31247 = state_31215__$1;
(statearr_31217_31247[(2)] = inst_31211);

(statearr_31217_31247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var inst_31174 = [];
var inst_31175 = inst_31174;
var inst_31176 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31215__$1 = (function (){var statearr_31218 = state_31215;
(statearr_31218[(7)] = inst_31176);

(statearr_31218[(8)] = inst_31175);

return statearr_31218;
})();
var statearr_31219_31248 = state_31215__$1;
(statearr_31219_31248[(2)] = null);

(statearr_31219_31248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31179 = (state_31215[(9)]);
var inst_31179__$1 = (state_31215[(2)]);
var inst_31180 = (inst_31179__$1 == null);
var inst_31181 = cljs.core.not.call(null,inst_31180);
var state_31215__$1 = (function (){var statearr_31220 = state_31215;
(statearr_31220[(9)] = inst_31179__$1);

return statearr_31220;
})();
if(inst_31181){
var statearr_31221_31249 = state_31215__$1;
(statearr_31221_31249[(1)] = (5));

} else {
var statearr_31222_31250 = state_31215__$1;
(statearr_31222_31250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31205 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31223_31251 = state_31215__$1;
(statearr_31223_31251[(2)] = inst_31205);

(statearr_31223_31251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var state_31215__$1 = state_31215;
var statearr_31224_31252 = state_31215__$1;
(statearr_31224_31252[(2)] = null);

(statearr_31224_31252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31175 = (state_31215[(8)]);
var inst_31200 = inst_31175.length;
var inst_31201 = (inst_31200 > (0));
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31201)){
var statearr_31225_31253 = state_31215__$1;
(statearr_31225_31253[(1)] = (12));

} else {
var statearr_31226_31254 = state_31215__$1;
(statearr_31226_31254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (12))){
var inst_31175 = (state_31215[(8)]);
var inst_31203 = cljs.core.vec.call(null,inst_31175);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31215__$1,(15),out,inst_31203);
} else {
if((state_val_31216 === (2))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(4),ch);
} else {
if((state_val_31216 === (11))){
var inst_31183 = (state_31215[(10)]);
var inst_31179 = (state_31215[(9)]);
var inst_31193 = (state_31215[(2)]);
var inst_31194 = [];
var inst_31195 = inst_31194.push(inst_31179);
var inst_31175 = inst_31194;
var inst_31176 = inst_31183;
var state_31215__$1 = (function (){var statearr_31227 = state_31215;
(statearr_31227[(11)] = inst_31195);

(statearr_31227[(7)] = inst_31176);

(statearr_31227[(12)] = inst_31193);

(statearr_31227[(8)] = inst_31175);

return statearr_31227;
})();
var statearr_31228_31255 = state_31215__$1;
(statearr_31228_31255[(2)] = null);

(statearr_31228_31255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31175 = (state_31215[(8)]);
var inst_31191 = cljs.core.vec.call(null,inst_31175);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31215__$1,(11),out,inst_31191);
} else {
if((state_val_31216 === (5))){
var inst_31183 = (state_31215[(10)]);
var inst_31179 = (state_31215[(9)]);
var inst_31176 = (state_31215[(7)]);
var inst_31183__$1 = f.call(null,inst_31179);
var inst_31184 = cljs.core._EQ_.call(null,inst_31183__$1,inst_31176);
var inst_31185 = cljs.core.keyword_identical_QMARK_.call(null,inst_31176,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31186 = (inst_31184) || (inst_31185);
var state_31215__$1 = (function (){var statearr_31229 = state_31215;
(statearr_31229[(10)] = inst_31183__$1);

return statearr_31229;
})();
if(cljs.core.truth_(inst_31186)){
var statearr_31230_31256 = state_31215__$1;
(statearr_31230_31256[(1)] = (8));

} else {
var statearr_31231_31257 = state_31215__$1;
(statearr_31231_31257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var inst_31208 = (state_31215[(2)]);
var inst_31209 = cljs.core.async.close_BANG_.call(null,out);
var state_31215__$1 = (function (){var statearr_31233 = state_31215;
(statearr_31233[(13)] = inst_31208);

return statearr_31233;
})();
var statearr_31234_31258 = state_31215__$1;
(statearr_31234_31258[(2)] = inst_31209);

(statearr_31234_31258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31198 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31235_31259 = state_31215__$1;
(statearr_31235_31259[(2)] = inst_31198);

(statearr_31235_31259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31183 = (state_31215[(10)]);
var inst_31179 = (state_31215[(9)]);
var inst_31175 = (state_31215[(8)]);
var inst_31188 = inst_31175.push(inst_31179);
var tmp31232 = inst_31175;
var inst_31175__$1 = tmp31232;
var inst_31176 = inst_31183;
var state_31215__$1 = (function (){var statearr_31236 = state_31215;
(statearr_31236[(14)] = inst_31188);

(statearr_31236[(7)] = inst_31176);

(statearr_31236[(8)] = inst_31175__$1);

return statearr_31236;
})();
var statearr_31237_31260 = state_31215__$1;
(statearr_31237_31260[(2)] = null);

(statearr_31237_31260[(1)] = (2));


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
});})(c__23400__auto___31246,out))
;
return ((function (switch__23338__auto__,c__23400__auto___31246,out){
return (function() {
var cljs$core$async$state_machine__23339__auto__ = null;
var cljs$core$async$state_machine__23339__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = cljs$core$async$state_machine__23339__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var cljs$core$async$state_machine__23339__auto____1 = (function (state_31215){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__23342__auto__ = e31242;
var statearr_31243_31261 = state_31215;
(statearr_31243_31261[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31262 = state_31215;
state_31215 = G__31262;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
cljs$core$async$state_machine__23339__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23339__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23339__auto____0;
cljs$core$async$state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23339__auto____1;
return cljs$core$async$state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___31246,out))
})();
var state__23402__auto__ = (function (){var statearr_31244 = f__23401__auto__.call(null);
(statearr_31244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___31246);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___31246,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1431907798934