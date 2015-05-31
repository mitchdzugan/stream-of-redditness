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
if(typeof cljs.core.async.t29967 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29967 = (function (f,fn_handler,meta29968){
this.f = f;
this.fn_handler = fn_handler;
this.meta29968 = meta29968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29969){
var self__ = this;
var _29969__$1 = this;
return self__.meta29968;
});

cljs.core.async.t29967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29969,meta29968__$1){
var self__ = this;
var _29969__$1 = this;
return (new cljs.core.async.t29967(self__.f,self__.fn_handler,meta29968__$1));
});

cljs.core.async.t29967.cljs$lang$type = true;

cljs.core.async.t29967.cljs$lang$ctorStr = "cljs.core.async/t29967";

cljs.core.async.t29967.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29967");
});

cljs.core.async.__GT_t29967 = (function cljs$core$async$fn_handler_$___GT_t29967(f__$1,fn_handler__$1,meta29968){
return (new cljs.core.async.t29967(f__$1,fn_handler__$1,meta29968));
});

}

return (new cljs.core.async.t29967(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29971 = buff;
if(G__29971){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__29971.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29971.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29971);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29971);
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
var G__29973 = arguments.length;
switch (G__29973) {
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
var G__29976 = arguments.length;
switch (G__29976) {
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
var val_29978 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29978);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29978,ret){
return (function (){
return fn1.call(null,val_29978);
});})(val_29978,ret))
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
var G__29980 = arguments.length;
switch (G__29980) {
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
var n__19001__auto___29982 = n;
var x_29983 = (0);
while(true){
if((x_29983 < n__19001__auto___29982)){
(a[x_29983] = (0));

var G__29984 = (x_29983 + (1));
x_29983 = G__29984;
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

var G__29985 = (i + (1));
i = G__29985;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29989 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29989 = (function (flag,alt_flag,meta29990){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29990 = meta29990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29989.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29991){
var self__ = this;
var _29991__$1 = this;
return self__.meta29990;
});})(flag))
;

cljs.core.async.t29989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29991,meta29990__$1){
var self__ = this;
var _29991__$1 = this;
return (new cljs.core.async.t29989(self__.flag,self__.alt_flag,meta29990__$1));
});})(flag))
;

cljs.core.async.t29989.cljs$lang$type = true;

cljs.core.async.t29989.cljs$lang$ctorStr = "cljs.core.async/t29989";

cljs.core.async.t29989.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29989");
});})(flag))
;

cljs.core.async.__GT_t29989 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29989(flag__$1,alt_flag__$1,meta29990){
return (new cljs.core.async.t29989(flag__$1,alt_flag__$1,meta29990));
});})(flag))
;

}

return (new cljs.core.async.t29989(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29995 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29995 = (function (cb,flag,alt_handler,meta29996){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29996 = meta29996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29997){
var self__ = this;
var _29997__$1 = this;
return self__.meta29996;
});

cljs.core.async.t29995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29997,meta29996__$1){
var self__ = this;
var _29997__$1 = this;
return (new cljs.core.async.t29995(self__.cb,self__.flag,self__.alt_handler,meta29996__$1));
});

cljs.core.async.t29995.cljs$lang$type = true;

cljs.core.async.t29995.cljs$lang$ctorStr = "cljs.core.async/t29995";

cljs.core.async.t29995.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29995");
});

cljs.core.async.__GT_t29995 = (function cljs$core$async$alt_handler_$___GT_t29995(cb__$1,flag__$1,alt_handler__$1,meta29996){
return (new cljs.core.async.t29995(cb__$1,flag__$1,alt_handler__$1,meta29996));
});

}

return (new cljs.core.async.t29995(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29998_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29998_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29999_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29999_SHARP_,port], null));
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
var G__30000 = (i + (1));
i = G__30000;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30003){
var map__30004 = p__30003;
var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var opts = map__30004__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30001){
var G__30002 = cljs.core.first.call(null,seq30001);
var seq30001__$1 = cljs.core.next.call(null,seq30001);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30002,seq30001__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__30006 = arguments.length;
switch (G__30006) {
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
var c__23229__auto___30055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___30055){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___30055){
return (function (state_30030){
var state_val_30031 = (state_30030[(1)]);
if((state_val_30031 === (7))){
var inst_30026 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30032_30056 = state_30030__$1;
(statearr_30032_30056[(2)] = inst_30026);

(statearr_30032_30056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (1))){
var state_30030__$1 = state_30030;
var statearr_30033_30057 = state_30030__$1;
(statearr_30033_30057[(2)] = null);

(statearr_30033_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (4))){
var inst_30009 = (state_30030[(7)]);
var inst_30009__$1 = (state_30030[(2)]);
var inst_30010 = (inst_30009__$1 == null);
var state_30030__$1 = (function (){var statearr_30034 = state_30030;
(statearr_30034[(7)] = inst_30009__$1);

return statearr_30034;
})();
if(cljs.core.truth_(inst_30010)){
var statearr_30035_30058 = state_30030__$1;
(statearr_30035_30058[(1)] = (5));

} else {
var statearr_30036_30059 = state_30030__$1;
(statearr_30036_30059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (13))){
var state_30030__$1 = state_30030;
var statearr_30037_30060 = state_30030__$1;
(statearr_30037_30060[(2)] = null);

(statearr_30037_30060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (6))){
var inst_30009 = (state_30030[(7)]);
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30030__$1,(11),to,inst_30009);
} else {
if((state_val_30031 === (3))){
var inst_30028 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30030__$1,inst_30028);
} else {
if((state_val_30031 === (12))){
var state_30030__$1 = state_30030;
var statearr_30038_30061 = state_30030__$1;
(statearr_30038_30061[(2)] = null);

(statearr_30038_30061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (2))){
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30030__$1,(4),from);
} else {
if((state_val_30031 === (11))){
var inst_30019 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
if(cljs.core.truth_(inst_30019)){
var statearr_30039_30062 = state_30030__$1;
(statearr_30039_30062[(1)] = (12));

} else {
var statearr_30040_30063 = state_30030__$1;
(statearr_30040_30063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (9))){
var state_30030__$1 = state_30030;
var statearr_30041_30064 = state_30030__$1;
(statearr_30041_30064[(2)] = null);

(statearr_30041_30064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (5))){
var state_30030__$1 = state_30030;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30042_30065 = state_30030__$1;
(statearr_30042_30065[(1)] = (8));

} else {
var statearr_30043_30066 = state_30030__$1;
(statearr_30043_30066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (14))){
var inst_30024 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30044_30067 = state_30030__$1;
(statearr_30044_30067[(2)] = inst_30024);

(statearr_30044_30067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (10))){
var inst_30016 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30045_30068 = state_30030__$1;
(statearr_30045_30068[(2)] = inst_30016);

(statearr_30045_30068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (8))){
var inst_30013 = cljs.core.async.close_BANG_.call(null,to);
var state_30030__$1 = state_30030;
var statearr_30046_30069 = state_30030__$1;
(statearr_30046_30069[(2)] = inst_30013);

(statearr_30046_30069[(1)] = (10));


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
});})(c__23229__auto___30055))
;
return ((function (switch__23214__auto__,c__23229__auto___30055){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_30050 = [null,null,null,null,null,null,null,null];
(statearr_30050[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_30050[(1)] = (1));

return statearr_30050;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_30030){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30051){if((e30051 instanceof Object)){
var ex__23218__auto__ = e30051;
var statearr_30052_30070 = state_30030;
(statearr_30052_30070[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30071 = state_30030;
state_30030 = G__30071;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_30030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_30030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___30055))
})();
var state__23231__auto__ = (function (){var statearr_30053 = f__23230__auto__.call(null);
(statearr_30053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___30055);

return statearr_30053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___30055))
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
return (function (p__30255){
var vec__30256 = p__30255;
var v = cljs.core.nth.call(null,vec__30256,(0),null);
var p = cljs.core.nth.call(null,vec__30256,(1),null);
var job = vec__30256;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23229__auto___30438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___30438,res,vec__30256,v,p,job,jobs,results){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___30438,res,vec__30256,v,p,job,jobs,results){
return (function (state_30261){
var state_val_30262 = (state_30261[(1)]);
if((state_val_30262 === (2))){
var inst_30258 = (state_30261[(2)]);
var inst_30259 = cljs.core.async.close_BANG_.call(null,res);
var state_30261__$1 = (function (){var statearr_30263 = state_30261;
(statearr_30263[(7)] = inst_30258);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30261__$1,inst_30259);
} else {
if((state_val_30262 === (1))){
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30261__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23229__auto___30438,res,vec__30256,v,p,job,jobs,results))
;
return ((function (switch__23214__auto__,c__23229__auto___30438,res,vec__30256,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0 = (function (){
var statearr_30267 = [null,null,null,null,null,null,null,null];
(statearr_30267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__);

(statearr_30267[(1)] = (1));

return statearr_30267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1 = (function (state_30261){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30268){if((e30268 instanceof Object)){
var ex__23218__auto__ = e30268;
var statearr_30269_30439 = state_30261;
(statearr_30269_30439[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30440 = state_30261;
state_30261 = G__30440;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___30438,res,vec__30256,v,p,job,jobs,results))
})();
var state__23231__auto__ = (function (){var statearr_30270 = f__23230__auto__.call(null);
(statearr_30270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___30438);

return statearr_30270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___30438,res,vec__30256,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30271){
var vec__30272 = p__30271;
var v = cljs.core.nth.call(null,vec__30272,(0),null);
var p = cljs.core.nth.call(null,vec__30272,(1),null);
var job = vec__30272;
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
var n__19001__auto___30441 = n;
var __30442 = (0);
while(true){
if((__30442 < n__19001__auto___30441)){
var G__30273_30443 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30273_30443) {
case "async":
var c__23229__auto___30445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30442,c__23229__auto___30445,G__30273_30443,n__19001__auto___30441,jobs,results,process,async){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (__30442,c__23229__auto___30445,G__30273_30443,n__19001__auto___30441,jobs,results,process,async){
return (function (state_30286){
var state_val_30287 = (state_30286[(1)]);
if((state_val_30287 === (7))){
var inst_30282 = (state_30286[(2)]);
var state_30286__$1 = state_30286;
var statearr_30288_30446 = state_30286__$1;
(statearr_30288_30446[(2)] = inst_30282);

(statearr_30288_30446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (6))){
var state_30286__$1 = state_30286;
var statearr_30289_30447 = state_30286__$1;
(statearr_30289_30447[(2)] = null);

(statearr_30289_30447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (5))){
var state_30286__$1 = state_30286;
var statearr_30290_30448 = state_30286__$1;
(statearr_30290_30448[(2)] = null);

(statearr_30290_30448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (4))){
var inst_30276 = (state_30286[(2)]);
var inst_30277 = async.call(null,inst_30276);
var state_30286__$1 = state_30286;
if(cljs.core.truth_(inst_30277)){
var statearr_30291_30449 = state_30286__$1;
(statearr_30291_30449[(1)] = (5));

} else {
var statearr_30292_30450 = state_30286__$1;
(statearr_30292_30450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (3))){
var inst_30284 = (state_30286[(2)]);
var state_30286__$1 = state_30286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30286__$1,inst_30284);
} else {
if((state_val_30287 === (2))){
var state_30286__$1 = state_30286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30286__$1,(4),jobs);
} else {
if((state_val_30287 === (1))){
var state_30286__$1 = state_30286;
var statearr_30293_30451 = state_30286__$1;
(statearr_30293_30451[(2)] = null);

(statearr_30293_30451[(1)] = (2));


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
});})(__30442,c__23229__auto___30445,G__30273_30443,n__19001__auto___30441,jobs,results,process,async))
;
return ((function (__30442,switch__23214__auto__,c__23229__auto___30445,G__30273_30443,n__19001__auto___30441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0 = (function (){
var statearr_30297 = [null,null,null,null,null,null,null];
(statearr_30297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__);

(statearr_30297[(1)] = (1));

return statearr_30297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1 = (function (state_30286){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30298){if((e30298 instanceof Object)){
var ex__23218__auto__ = e30298;
var statearr_30299_30452 = state_30286;
(statearr_30299_30452[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30453 = state_30286;
state_30286 = G__30453;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = function(state_30286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1.call(this,state_30286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__;
})()
;})(__30442,switch__23214__auto__,c__23229__auto___30445,G__30273_30443,n__19001__auto___30441,jobs,results,process,async))
})();
var state__23231__auto__ = (function (){var statearr_30300 = f__23230__auto__.call(null);
(statearr_30300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___30445);

return statearr_30300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(__30442,c__23229__auto___30445,G__30273_30443,n__19001__auto___30441,jobs,results,process,async))
);


break;
case "compute":
var c__23229__auto___30454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30442,c__23229__auto___30454,G__30273_30443,n__19001__auto___30441,jobs,results,process,async){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (__30442,c__23229__auto___30454,G__30273_30443,n__19001__auto___30441,jobs,results,process,async){
return (function (state_30313){
var state_val_30314 = (state_30313[(1)]);
if((state_val_30314 === (7))){
var inst_30309 = (state_30313[(2)]);
var state_30313__$1 = state_30313;
var statearr_30315_30455 = state_30313__$1;
(statearr_30315_30455[(2)] = inst_30309);

(statearr_30315_30455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (6))){
var state_30313__$1 = state_30313;
var statearr_30316_30456 = state_30313__$1;
(statearr_30316_30456[(2)] = null);

(statearr_30316_30456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (5))){
var state_30313__$1 = state_30313;
var statearr_30317_30457 = state_30313__$1;
(statearr_30317_30457[(2)] = null);

(statearr_30317_30457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (4))){
var inst_30303 = (state_30313[(2)]);
var inst_30304 = process.call(null,inst_30303);
var state_30313__$1 = state_30313;
if(cljs.core.truth_(inst_30304)){
var statearr_30318_30458 = state_30313__$1;
(statearr_30318_30458[(1)] = (5));

} else {
var statearr_30319_30459 = state_30313__$1;
(statearr_30319_30459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (3))){
var inst_30311 = (state_30313[(2)]);
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30313__$1,inst_30311);
} else {
if((state_val_30314 === (2))){
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30313__$1,(4),jobs);
} else {
if((state_val_30314 === (1))){
var state_30313__$1 = state_30313;
var statearr_30320_30460 = state_30313__$1;
(statearr_30320_30460[(2)] = null);

(statearr_30320_30460[(1)] = (2));


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
});})(__30442,c__23229__auto___30454,G__30273_30443,n__19001__auto___30441,jobs,results,process,async))
;
return ((function (__30442,switch__23214__auto__,c__23229__auto___30454,G__30273_30443,n__19001__auto___30441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0 = (function (){
var statearr_30324 = [null,null,null,null,null,null,null];
(statearr_30324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__);

(statearr_30324[(1)] = (1));

return statearr_30324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1 = (function (state_30313){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30325){if((e30325 instanceof Object)){
var ex__23218__auto__ = e30325;
var statearr_30326_30461 = state_30313;
(statearr_30326_30461[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30462 = state_30313;
state_30313 = G__30462;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = function(state_30313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1.call(this,state_30313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__;
})()
;})(__30442,switch__23214__auto__,c__23229__auto___30454,G__30273_30443,n__19001__auto___30441,jobs,results,process,async))
})();
var state__23231__auto__ = (function (){var statearr_30327 = f__23230__auto__.call(null);
(statearr_30327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___30454);

return statearr_30327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(__30442,c__23229__auto___30454,G__30273_30443,n__19001__auto___30441,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30463 = (__30442 + (1));
__30442 = G__30463;
continue;
} else {
}
break;
}

var c__23229__auto___30464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___30464,jobs,results,process,async){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___30464,jobs,results,process,async){
return (function (state_30349){
var state_val_30350 = (state_30349[(1)]);
if((state_val_30350 === (9))){
var inst_30342 = (state_30349[(2)]);
var state_30349__$1 = (function (){var statearr_30351 = state_30349;
(statearr_30351[(7)] = inst_30342);

return statearr_30351;
})();
var statearr_30352_30465 = state_30349__$1;
(statearr_30352_30465[(2)] = null);

(statearr_30352_30465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (8))){
var inst_30335 = (state_30349[(8)]);
var inst_30340 = (state_30349[(2)]);
var state_30349__$1 = (function (){var statearr_30353 = state_30349;
(statearr_30353[(9)] = inst_30340);

return statearr_30353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30349__$1,(9),results,inst_30335);
} else {
if((state_val_30350 === (7))){
var inst_30345 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30354_30466 = state_30349__$1;
(statearr_30354_30466[(2)] = inst_30345);

(statearr_30354_30466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (6))){
var inst_30335 = (state_30349[(8)]);
var inst_30330 = (state_30349[(10)]);
var inst_30335__$1 = cljs.core.async.chan.call(null,(1));
var inst_30336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30337 = [inst_30330,inst_30335__$1];
var inst_30338 = (new cljs.core.PersistentVector(null,2,(5),inst_30336,inst_30337,null));
var state_30349__$1 = (function (){var statearr_30355 = state_30349;
(statearr_30355[(8)] = inst_30335__$1);

return statearr_30355;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30349__$1,(8),jobs,inst_30338);
} else {
if((state_val_30350 === (5))){
var inst_30333 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30349__$1 = state_30349;
var statearr_30356_30467 = state_30349__$1;
(statearr_30356_30467[(2)] = inst_30333);

(statearr_30356_30467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (4))){
var inst_30330 = (state_30349[(10)]);
var inst_30330__$1 = (state_30349[(2)]);
var inst_30331 = (inst_30330__$1 == null);
var state_30349__$1 = (function (){var statearr_30357 = state_30349;
(statearr_30357[(10)] = inst_30330__$1);

return statearr_30357;
})();
if(cljs.core.truth_(inst_30331)){
var statearr_30358_30468 = state_30349__$1;
(statearr_30358_30468[(1)] = (5));

} else {
var statearr_30359_30469 = state_30349__$1;
(statearr_30359_30469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (3))){
var inst_30347 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30349__$1,inst_30347);
} else {
if((state_val_30350 === (2))){
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30349__$1,(4),from);
} else {
if((state_val_30350 === (1))){
var state_30349__$1 = state_30349;
var statearr_30360_30470 = state_30349__$1;
(statearr_30360_30470[(2)] = null);

(statearr_30360_30470[(1)] = (2));


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
});})(c__23229__auto___30464,jobs,results,process,async))
;
return ((function (switch__23214__auto__,c__23229__auto___30464,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0 = (function (){
var statearr_30364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__);

(statearr_30364[(1)] = (1));

return statearr_30364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1 = (function (state_30349){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30365){if((e30365 instanceof Object)){
var ex__23218__auto__ = e30365;
var statearr_30366_30471 = state_30349;
(statearr_30366_30471[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30472 = state_30349;
state_30349 = G__30472;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = function(state_30349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1.call(this,state_30349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___30464,jobs,results,process,async))
})();
var state__23231__auto__ = (function (){var statearr_30367 = f__23230__auto__.call(null);
(statearr_30367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___30464);

return statearr_30367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___30464,jobs,results,process,async))
);


var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__,jobs,results,process,async){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__,jobs,results,process,async){
return (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (7))){
var inst_30401 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30407_30473 = state_30405__$1;
(statearr_30407_30473[(2)] = inst_30401);

(statearr_30407_30473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (20))){
var state_30405__$1 = state_30405;
var statearr_30408_30474 = state_30405__$1;
(statearr_30408_30474[(2)] = null);

(statearr_30408_30474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (1))){
var state_30405__$1 = state_30405;
var statearr_30409_30475 = state_30405__$1;
(statearr_30409_30475[(2)] = null);

(statearr_30409_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (4))){
var inst_30370 = (state_30405[(7)]);
var inst_30370__$1 = (state_30405[(2)]);
var inst_30371 = (inst_30370__$1 == null);
var state_30405__$1 = (function (){var statearr_30410 = state_30405;
(statearr_30410[(7)] = inst_30370__$1);

return statearr_30410;
})();
if(cljs.core.truth_(inst_30371)){
var statearr_30411_30476 = state_30405__$1;
(statearr_30411_30476[(1)] = (5));

} else {
var statearr_30412_30477 = state_30405__$1;
(statearr_30412_30477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (15))){
var inst_30383 = (state_30405[(8)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30405__$1,(18),to,inst_30383);
} else {
if((state_val_30406 === (21))){
var inst_30396 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30413_30478 = state_30405__$1;
(statearr_30413_30478[(2)] = inst_30396);

(statearr_30413_30478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (13))){
var inst_30398 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30414 = state_30405;
(statearr_30414[(9)] = inst_30398);

return statearr_30414;
})();
var statearr_30415_30479 = state_30405__$1;
(statearr_30415_30479[(2)] = null);

(statearr_30415_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (6))){
var inst_30370 = (state_30405[(7)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(11),inst_30370);
} else {
if((state_val_30406 === (17))){
var inst_30391 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
if(cljs.core.truth_(inst_30391)){
var statearr_30416_30480 = state_30405__$1;
(statearr_30416_30480[(1)] = (19));

} else {
var statearr_30417_30481 = state_30405__$1;
(statearr_30417_30481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (3))){
var inst_30403 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (12))){
var inst_30380 = (state_30405[(10)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(14),inst_30380);
} else {
if((state_val_30406 === (2))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(4),results);
} else {
if((state_val_30406 === (19))){
var state_30405__$1 = state_30405;
var statearr_30418_30482 = state_30405__$1;
(statearr_30418_30482[(2)] = null);

(statearr_30418_30482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (11))){
var inst_30380 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30419 = state_30405;
(statearr_30419[(10)] = inst_30380);

return statearr_30419;
})();
var statearr_30420_30483 = state_30405__$1;
(statearr_30420_30483[(2)] = null);

(statearr_30420_30483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (9))){
var state_30405__$1 = state_30405;
var statearr_30421_30484 = state_30405__$1;
(statearr_30421_30484[(2)] = null);

(statearr_30421_30484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var state_30405__$1 = state_30405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30422_30485 = state_30405__$1;
(statearr_30422_30485[(1)] = (8));

} else {
var statearr_30423_30486 = state_30405__$1;
(statearr_30423_30486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (14))){
var inst_30383 = (state_30405[(8)]);
var inst_30385 = (state_30405[(11)]);
var inst_30383__$1 = (state_30405[(2)]);
var inst_30384 = (inst_30383__$1 == null);
var inst_30385__$1 = cljs.core.not.call(null,inst_30384);
var state_30405__$1 = (function (){var statearr_30424 = state_30405;
(statearr_30424[(8)] = inst_30383__$1);

(statearr_30424[(11)] = inst_30385__$1);

return statearr_30424;
})();
if(inst_30385__$1){
var statearr_30425_30487 = state_30405__$1;
(statearr_30425_30487[(1)] = (15));

} else {
var statearr_30426_30488 = state_30405__$1;
(statearr_30426_30488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (16))){
var inst_30385 = (state_30405[(11)]);
var state_30405__$1 = state_30405;
var statearr_30427_30489 = state_30405__$1;
(statearr_30427_30489[(2)] = inst_30385);

(statearr_30427_30489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (10))){
var inst_30377 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30428_30490 = state_30405__$1;
(statearr_30428_30490[(2)] = inst_30377);

(statearr_30428_30490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (18))){
var inst_30388 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30429_30491 = state_30405__$1;
(statearr_30429_30491[(2)] = inst_30388);

(statearr_30429_30491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (8))){
var inst_30374 = cljs.core.async.close_BANG_.call(null,to);
var state_30405__$1 = state_30405;
var statearr_30430_30492 = state_30405__$1;
(statearr_30430_30492[(2)] = inst_30374);

(statearr_30430_30492[(1)] = (10));


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
});})(c__23229__auto__,jobs,results,process,async))
;
return ((function (switch__23214__auto__,c__23229__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0 = (function (){
var statearr_30434 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__);

(statearr_30434[(1)] = (1));

return statearr_30434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1 = (function (state_30405){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30435){if((e30435 instanceof Object)){
var ex__23218__auto__ = e30435;
var statearr_30436_30493 = state_30405;
(statearr_30436_30493[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30494 = state_30405;
state_30405 = G__30494;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__,jobs,results,process,async))
})();
var state__23231__auto__ = (function (){var statearr_30437 = f__23230__auto__.call(null);
(statearr_30437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_30437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__,jobs,results,process,async))
);

return c__23229__auto__;
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
var G__30496 = arguments.length;
switch (G__30496) {
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
var G__30499 = arguments.length;
switch (G__30499) {
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
var G__30502 = arguments.length;
switch (G__30502) {
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
var c__23229__auto___30554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___30554,tc,fc){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___30554,tc,fc){
return (function (state_30528){
var state_val_30529 = (state_30528[(1)]);
if((state_val_30529 === (7))){
var inst_30524 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30530_30555 = state_30528__$1;
(statearr_30530_30555[(2)] = inst_30524);

(statearr_30530_30555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (1))){
var state_30528__$1 = state_30528;
var statearr_30531_30556 = state_30528__$1;
(statearr_30531_30556[(2)] = null);

(statearr_30531_30556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (4))){
var inst_30505 = (state_30528[(7)]);
var inst_30505__$1 = (state_30528[(2)]);
var inst_30506 = (inst_30505__$1 == null);
var state_30528__$1 = (function (){var statearr_30532 = state_30528;
(statearr_30532[(7)] = inst_30505__$1);

return statearr_30532;
})();
if(cljs.core.truth_(inst_30506)){
var statearr_30533_30557 = state_30528__$1;
(statearr_30533_30557[(1)] = (5));

} else {
var statearr_30534_30558 = state_30528__$1;
(statearr_30534_30558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (13))){
var state_30528__$1 = state_30528;
var statearr_30535_30559 = state_30528__$1;
(statearr_30535_30559[(2)] = null);

(statearr_30535_30559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (6))){
var inst_30505 = (state_30528[(7)]);
var inst_30511 = p.call(null,inst_30505);
var state_30528__$1 = state_30528;
if(cljs.core.truth_(inst_30511)){
var statearr_30536_30560 = state_30528__$1;
(statearr_30536_30560[(1)] = (9));

} else {
var statearr_30537_30561 = state_30528__$1;
(statearr_30537_30561[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (3))){
var inst_30526 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30528__$1,inst_30526);
} else {
if((state_val_30529 === (12))){
var state_30528__$1 = state_30528;
var statearr_30538_30562 = state_30528__$1;
(statearr_30538_30562[(2)] = null);

(statearr_30538_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (2))){
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(4),ch);
} else {
if((state_val_30529 === (11))){
var inst_30505 = (state_30528[(7)]);
var inst_30515 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30528__$1,(8),inst_30515,inst_30505);
} else {
if((state_val_30529 === (9))){
var state_30528__$1 = state_30528;
var statearr_30539_30563 = state_30528__$1;
(statearr_30539_30563[(2)] = tc);

(statearr_30539_30563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (5))){
var inst_30508 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30509 = cljs.core.async.close_BANG_.call(null,fc);
var state_30528__$1 = (function (){var statearr_30540 = state_30528;
(statearr_30540[(8)] = inst_30508);

return statearr_30540;
})();
var statearr_30541_30564 = state_30528__$1;
(statearr_30541_30564[(2)] = inst_30509);

(statearr_30541_30564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (14))){
var inst_30522 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30542_30565 = state_30528__$1;
(statearr_30542_30565[(2)] = inst_30522);

(statearr_30542_30565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (10))){
var state_30528__$1 = state_30528;
var statearr_30543_30566 = state_30528__$1;
(statearr_30543_30566[(2)] = fc);

(statearr_30543_30566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (8))){
var inst_30517 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
if(cljs.core.truth_(inst_30517)){
var statearr_30544_30567 = state_30528__$1;
(statearr_30544_30567[(1)] = (12));

} else {
var statearr_30545_30568 = state_30528__$1;
(statearr_30545_30568[(1)] = (13));

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
});})(c__23229__auto___30554,tc,fc))
;
return ((function (switch__23214__auto__,c__23229__auto___30554,tc,fc){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_30549 = [null,null,null,null,null,null,null,null,null];
(statearr_30549[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_30549[(1)] = (1));

return statearr_30549;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_30528){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30550){if((e30550 instanceof Object)){
var ex__23218__auto__ = e30550;
var statearr_30551_30569 = state_30528;
(statearr_30551_30569[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30570 = state_30528;
state_30528 = G__30570;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___30554,tc,fc))
})();
var state__23231__auto__ = (function (){var statearr_30552 = f__23230__auto__.call(null);
(statearr_30552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___30554);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___30554,tc,fc))
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
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_30617){
var state_val_30618 = (state_30617[(1)]);
if((state_val_30618 === (7))){
var inst_30613 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30619_30635 = state_30617__$1;
(statearr_30619_30635[(2)] = inst_30613);

(statearr_30619_30635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (6))){
var inst_30603 = (state_30617[(7)]);
var inst_30606 = (state_30617[(8)]);
var inst_30610 = f.call(null,inst_30603,inst_30606);
var inst_30603__$1 = inst_30610;
var state_30617__$1 = (function (){var statearr_30620 = state_30617;
(statearr_30620[(7)] = inst_30603__$1);

return statearr_30620;
})();
var statearr_30621_30636 = state_30617__$1;
(statearr_30621_30636[(2)] = null);

(statearr_30621_30636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (5))){
var inst_30603 = (state_30617[(7)]);
var state_30617__$1 = state_30617;
var statearr_30622_30637 = state_30617__$1;
(statearr_30622_30637[(2)] = inst_30603);

(statearr_30622_30637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (4))){
var inst_30606 = (state_30617[(8)]);
var inst_30606__$1 = (state_30617[(2)]);
var inst_30607 = (inst_30606__$1 == null);
var state_30617__$1 = (function (){var statearr_30623 = state_30617;
(statearr_30623[(8)] = inst_30606__$1);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30607)){
var statearr_30624_30638 = state_30617__$1;
(statearr_30624_30638[(1)] = (5));

} else {
var statearr_30625_30639 = state_30617__$1;
(statearr_30625_30639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (3))){
var inst_30615 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30617__$1,inst_30615);
} else {
if((state_val_30618 === (2))){
var state_30617__$1 = state_30617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30617__$1,(4),ch);
} else {
if((state_val_30618 === (1))){
var inst_30603 = init;
var state_30617__$1 = (function (){var statearr_30626 = state_30617;
(statearr_30626[(7)] = inst_30603);

return statearr_30626;
})();
var statearr_30627_30640 = state_30617__$1;
(statearr_30627_30640[(2)] = null);

(statearr_30627_30640[(1)] = (2));


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
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23215__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23215__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null,null,null];
(statearr_30631[(0)] = cljs$core$async$reduce_$_state_machine__23215__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var cljs$core$async$reduce_$_state_machine__23215__auto____1 = (function (state_30617){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30632){if((e30632 instanceof Object)){
var ex__23218__auto__ = e30632;
var statearr_30633_30641 = state_30617;
(statearr_30633_30641[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30642 = state_30617;
state_30617 = G__30642;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23215__auto__ = function(state_30617){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23215__auto____1.call(this,state_30617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23215__auto____0;
cljs$core$async$reduce_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23215__auto____1;
return cljs$core$async$reduce_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_30634 = f__23230__auto__.call(null);
(statearr_30634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
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
var G__30644 = arguments.length;
switch (G__30644) {
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
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_30669){
var state_val_30670 = (state_30669[(1)]);
if((state_val_30670 === (7))){
var inst_30651 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
var statearr_30671_30695 = state_30669__$1;
(statearr_30671_30695[(2)] = inst_30651);

(statearr_30671_30695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (1))){
var inst_30645 = cljs.core.seq.call(null,coll);
var inst_30646 = inst_30645;
var state_30669__$1 = (function (){var statearr_30672 = state_30669;
(statearr_30672[(7)] = inst_30646);

return statearr_30672;
})();
var statearr_30673_30696 = state_30669__$1;
(statearr_30673_30696[(2)] = null);

(statearr_30673_30696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (4))){
var inst_30646 = (state_30669[(7)]);
var inst_30649 = cljs.core.first.call(null,inst_30646);
var state_30669__$1 = state_30669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30669__$1,(7),ch,inst_30649);
} else {
if((state_val_30670 === (13))){
var inst_30663 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
var statearr_30674_30697 = state_30669__$1;
(statearr_30674_30697[(2)] = inst_30663);

(statearr_30674_30697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (6))){
var inst_30654 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
if(cljs.core.truth_(inst_30654)){
var statearr_30675_30698 = state_30669__$1;
(statearr_30675_30698[(1)] = (8));

} else {
var statearr_30676_30699 = state_30669__$1;
(statearr_30676_30699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (3))){
var inst_30667 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30669__$1,inst_30667);
} else {
if((state_val_30670 === (12))){
var state_30669__$1 = state_30669;
var statearr_30677_30700 = state_30669__$1;
(statearr_30677_30700[(2)] = null);

(statearr_30677_30700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (2))){
var inst_30646 = (state_30669[(7)]);
var state_30669__$1 = state_30669;
if(cljs.core.truth_(inst_30646)){
var statearr_30678_30701 = state_30669__$1;
(statearr_30678_30701[(1)] = (4));

} else {
var statearr_30679_30702 = state_30669__$1;
(statearr_30679_30702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (11))){
var inst_30660 = cljs.core.async.close_BANG_.call(null,ch);
var state_30669__$1 = state_30669;
var statearr_30680_30703 = state_30669__$1;
(statearr_30680_30703[(2)] = inst_30660);

(statearr_30680_30703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (9))){
var state_30669__$1 = state_30669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30681_30704 = state_30669__$1;
(statearr_30681_30704[(1)] = (11));

} else {
var statearr_30682_30705 = state_30669__$1;
(statearr_30682_30705[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (5))){
var inst_30646 = (state_30669[(7)]);
var state_30669__$1 = state_30669;
var statearr_30683_30706 = state_30669__$1;
(statearr_30683_30706[(2)] = inst_30646);

(statearr_30683_30706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (10))){
var inst_30665 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
var statearr_30684_30707 = state_30669__$1;
(statearr_30684_30707[(2)] = inst_30665);

(statearr_30684_30707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (8))){
var inst_30646 = (state_30669[(7)]);
var inst_30656 = cljs.core.next.call(null,inst_30646);
var inst_30646__$1 = inst_30656;
var state_30669__$1 = (function (){var statearr_30685 = state_30669;
(statearr_30685[(7)] = inst_30646__$1);

return statearr_30685;
})();
var statearr_30686_30708 = state_30669__$1;
(statearr_30686_30708[(2)] = null);

(statearr_30686_30708[(1)] = (2));


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
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_30690 = [null,null,null,null,null,null,null,null];
(statearr_30690[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_30690[(1)] = (1));

return statearr_30690;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_30669){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_30669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e30691){if((e30691 instanceof Object)){
var ex__23218__auto__ = e30691;
var statearr_30692_30709 = state_30669;
(statearr_30692_30709[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30710 = state_30669;
state_30669 = G__30710;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_30669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_30669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_30693 = f__23230__auto__.call(null);
(statearr_30693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_30693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
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

cljs.core.async.Mux = (function (){var obj30712 = {};
return obj30712;
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


cljs.core.async.Mult = (function (){var obj30714 = {};
return obj30714;
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
if(typeof cljs.core.async.t30936 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30936 = (function (cs,ch,mult,meta30937){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30937 = meta30937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30936.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30936.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30936.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30936.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30936.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30938){
var self__ = this;
var _30938__$1 = this;
return self__.meta30937;
});})(cs))
;

cljs.core.async.t30936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30938,meta30937__$1){
var self__ = this;
var _30938__$1 = this;
return (new cljs.core.async.t30936(self__.cs,self__.ch,self__.mult,meta30937__$1));
});})(cs))
;

cljs.core.async.t30936.cljs$lang$type = true;

cljs.core.async.t30936.cljs$lang$ctorStr = "cljs.core.async/t30936";

cljs.core.async.t30936.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30936");
});})(cs))
;

cljs.core.async.__GT_t30936 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30936(cs__$1,ch__$1,mult__$1,meta30937){
return (new cljs.core.async.t30936(cs__$1,ch__$1,mult__$1,meta30937));
});})(cs))
;

}

return (new cljs.core.async.t30936(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23229__auto___31157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31157,cs,m,dchan,dctr,done){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31157,cs,m,dchan,dctr,done){
return (function (state_31069){
var state_val_31070 = (state_31069[(1)]);
if((state_val_31070 === (7))){
var inst_31065 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31071_31158 = state_31069__$1;
(statearr_31071_31158[(2)] = inst_31065);

(statearr_31071_31158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (20))){
var inst_30970 = (state_31069[(7)]);
var inst_30980 = cljs.core.first.call(null,inst_30970);
var inst_30981 = cljs.core.nth.call(null,inst_30980,(0),null);
var inst_30982 = cljs.core.nth.call(null,inst_30980,(1),null);
var state_31069__$1 = (function (){var statearr_31072 = state_31069;
(statearr_31072[(8)] = inst_30981);

return statearr_31072;
})();
if(cljs.core.truth_(inst_30982)){
var statearr_31073_31159 = state_31069__$1;
(statearr_31073_31159[(1)] = (22));

} else {
var statearr_31074_31160 = state_31069__$1;
(statearr_31074_31160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (27))){
var inst_31017 = (state_31069[(9)]);
var inst_31010 = (state_31069[(10)]);
var inst_30941 = (state_31069[(11)]);
var inst_31012 = (state_31069[(12)]);
var inst_31017__$1 = cljs.core._nth.call(null,inst_31010,inst_31012);
var inst_31018 = cljs.core.async.put_BANG_.call(null,inst_31017__$1,inst_30941,done);
var state_31069__$1 = (function (){var statearr_31075 = state_31069;
(statearr_31075[(9)] = inst_31017__$1);

return statearr_31075;
})();
if(cljs.core.truth_(inst_31018)){
var statearr_31076_31161 = state_31069__$1;
(statearr_31076_31161[(1)] = (30));

} else {
var statearr_31077_31162 = state_31069__$1;
(statearr_31077_31162[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (1))){
var state_31069__$1 = state_31069;
var statearr_31078_31163 = state_31069__$1;
(statearr_31078_31163[(2)] = null);

(statearr_31078_31163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (24))){
var inst_30970 = (state_31069[(7)]);
var inst_30987 = (state_31069[(2)]);
var inst_30988 = cljs.core.next.call(null,inst_30970);
var inst_30950 = inst_30988;
var inst_30951 = null;
var inst_30952 = (0);
var inst_30953 = (0);
var state_31069__$1 = (function (){var statearr_31079 = state_31069;
(statearr_31079[(13)] = inst_30950);

(statearr_31079[(14)] = inst_30952);

(statearr_31079[(15)] = inst_30951);

(statearr_31079[(16)] = inst_30987);

(statearr_31079[(17)] = inst_30953);

return statearr_31079;
})();
var statearr_31080_31164 = state_31069__$1;
(statearr_31080_31164[(2)] = null);

(statearr_31080_31164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (39))){
var state_31069__$1 = state_31069;
var statearr_31084_31165 = state_31069__$1;
(statearr_31084_31165[(2)] = null);

(statearr_31084_31165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (4))){
var inst_30941 = (state_31069[(11)]);
var inst_30941__$1 = (state_31069[(2)]);
var inst_30942 = (inst_30941__$1 == null);
var state_31069__$1 = (function (){var statearr_31085 = state_31069;
(statearr_31085[(11)] = inst_30941__$1);

return statearr_31085;
})();
if(cljs.core.truth_(inst_30942)){
var statearr_31086_31166 = state_31069__$1;
(statearr_31086_31166[(1)] = (5));

} else {
var statearr_31087_31167 = state_31069__$1;
(statearr_31087_31167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (15))){
var inst_30950 = (state_31069[(13)]);
var inst_30952 = (state_31069[(14)]);
var inst_30951 = (state_31069[(15)]);
var inst_30953 = (state_31069[(17)]);
var inst_30966 = (state_31069[(2)]);
var inst_30967 = (inst_30953 + (1));
var tmp31081 = inst_30950;
var tmp31082 = inst_30952;
var tmp31083 = inst_30951;
var inst_30950__$1 = tmp31081;
var inst_30951__$1 = tmp31083;
var inst_30952__$1 = tmp31082;
var inst_30953__$1 = inst_30967;
var state_31069__$1 = (function (){var statearr_31088 = state_31069;
(statearr_31088[(13)] = inst_30950__$1);

(statearr_31088[(18)] = inst_30966);

(statearr_31088[(14)] = inst_30952__$1);

(statearr_31088[(15)] = inst_30951__$1);

(statearr_31088[(17)] = inst_30953__$1);

return statearr_31088;
})();
var statearr_31089_31168 = state_31069__$1;
(statearr_31089_31168[(2)] = null);

(statearr_31089_31168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (21))){
var inst_30991 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31093_31169 = state_31069__$1;
(statearr_31093_31169[(2)] = inst_30991);

(statearr_31093_31169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (31))){
var inst_31017 = (state_31069[(9)]);
var inst_31021 = done.call(null,null);
var inst_31022 = cljs.core.async.untap_STAR_.call(null,m,inst_31017);
var state_31069__$1 = (function (){var statearr_31094 = state_31069;
(statearr_31094[(19)] = inst_31021);

return statearr_31094;
})();
var statearr_31095_31170 = state_31069__$1;
(statearr_31095_31170[(2)] = inst_31022);

(statearr_31095_31170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (32))){
var inst_31010 = (state_31069[(10)]);
var inst_31011 = (state_31069[(20)]);
var inst_31012 = (state_31069[(12)]);
var inst_31009 = (state_31069[(21)]);
var inst_31024 = (state_31069[(2)]);
var inst_31025 = (inst_31012 + (1));
var tmp31090 = inst_31010;
var tmp31091 = inst_31011;
var tmp31092 = inst_31009;
var inst_31009__$1 = tmp31092;
var inst_31010__$1 = tmp31090;
var inst_31011__$1 = tmp31091;
var inst_31012__$1 = inst_31025;
var state_31069__$1 = (function (){var statearr_31096 = state_31069;
(statearr_31096[(10)] = inst_31010__$1);

(statearr_31096[(22)] = inst_31024);

(statearr_31096[(20)] = inst_31011__$1);

(statearr_31096[(12)] = inst_31012__$1);

(statearr_31096[(21)] = inst_31009__$1);

return statearr_31096;
})();
var statearr_31097_31171 = state_31069__$1;
(statearr_31097_31171[(2)] = null);

(statearr_31097_31171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (40))){
var inst_31037 = (state_31069[(23)]);
var inst_31041 = done.call(null,null);
var inst_31042 = cljs.core.async.untap_STAR_.call(null,m,inst_31037);
var state_31069__$1 = (function (){var statearr_31098 = state_31069;
(statearr_31098[(24)] = inst_31041);

return statearr_31098;
})();
var statearr_31099_31172 = state_31069__$1;
(statearr_31099_31172[(2)] = inst_31042);

(statearr_31099_31172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (33))){
var inst_31028 = (state_31069[(25)]);
var inst_31030 = cljs.core.chunked_seq_QMARK_.call(null,inst_31028);
var state_31069__$1 = state_31069;
if(inst_31030){
var statearr_31100_31173 = state_31069__$1;
(statearr_31100_31173[(1)] = (36));

} else {
var statearr_31101_31174 = state_31069__$1;
(statearr_31101_31174[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (13))){
var inst_30960 = (state_31069[(26)]);
var inst_30963 = cljs.core.async.close_BANG_.call(null,inst_30960);
var state_31069__$1 = state_31069;
var statearr_31102_31175 = state_31069__$1;
(statearr_31102_31175[(2)] = inst_30963);

(statearr_31102_31175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (22))){
var inst_30981 = (state_31069[(8)]);
var inst_30984 = cljs.core.async.close_BANG_.call(null,inst_30981);
var state_31069__$1 = state_31069;
var statearr_31103_31176 = state_31069__$1;
(statearr_31103_31176[(2)] = inst_30984);

(statearr_31103_31176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (36))){
var inst_31028 = (state_31069[(25)]);
var inst_31032 = cljs.core.chunk_first.call(null,inst_31028);
var inst_31033 = cljs.core.chunk_rest.call(null,inst_31028);
var inst_31034 = cljs.core.count.call(null,inst_31032);
var inst_31009 = inst_31033;
var inst_31010 = inst_31032;
var inst_31011 = inst_31034;
var inst_31012 = (0);
var state_31069__$1 = (function (){var statearr_31104 = state_31069;
(statearr_31104[(10)] = inst_31010);

(statearr_31104[(20)] = inst_31011);

(statearr_31104[(12)] = inst_31012);

(statearr_31104[(21)] = inst_31009);

return statearr_31104;
})();
var statearr_31105_31177 = state_31069__$1;
(statearr_31105_31177[(2)] = null);

(statearr_31105_31177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (41))){
var inst_31028 = (state_31069[(25)]);
var inst_31044 = (state_31069[(2)]);
var inst_31045 = cljs.core.next.call(null,inst_31028);
var inst_31009 = inst_31045;
var inst_31010 = null;
var inst_31011 = (0);
var inst_31012 = (0);
var state_31069__$1 = (function (){var statearr_31106 = state_31069;
(statearr_31106[(27)] = inst_31044);

(statearr_31106[(10)] = inst_31010);

(statearr_31106[(20)] = inst_31011);

(statearr_31106[(12)] = inst_31012);

(statearr_31106[(21)] = inst_31009);

return statearr_31106;
})();
var statearr_31107_31178 = state_31069__$1;
(statearr_31107_31178[(2)] = null);

(statearr_31107_31178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (43))){
var state_31069__$1 = state_31069;
var statearr_31108_31179 = state_31069__$1;
(statearr_31108_31179[(2)] = null);

(statearr_31108_31179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (29))){
var inst_31053 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31109_31180 = state_31069__$1;
(statearr_31109_31180[(2)] = inst_31053);

(statearr_31109_31180[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (44))){
var inst_31062 = (state_31069[(2)]);
var state_31069__$1 = (function (){var statearr_31110 = state_31069;
(statearr_31110[(28)] = inst_31062);

return statearr_31110;
})();
var statearr_31111_31181 = state_31069__$1;
(statearr_31111_31181[(2)] = null);

(statearr_31111_31181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (6))){
var inst_31001 = (state_31069[(29)]);
var inst_31000 = cljs.core.deref.call(null,cs);
var inst_31001__$1 = cljs.core.keys.call(null,inst_31000);
var inst_31002 = cljs.core.count.call(null,inst_31001__$1);
var inst_31003 = cljs.core.reset_BANG_.call(null,dctr,inst_31002);
var inst_31008 = cljs.core.seq.call(null,inst_31001__$1);
var inst_31009 = inst_31008;
var inst_31010 = null;
var inst_31011 = (0);
var inst_31012 = (0);
var state_31069__$1 = (function (){var statearr_31112 = state_31069;
(statearr_31112[(10)] = inst_31010);

(statearr_31112[(20)] = inst_31011);

(statearr_31112[(12)] = inst_31012);

(statearr_31112[(29)] = inst_31001__$1);

(statearr_31112[(30)] = inst_31003);

(statearr_31112[(21)] = inst_31009);

return statearr_31112;
})();
var statearr_31113_31182 = state_31069__$1;
(statearr_31113_31182[(2)] = null);

(statearr_31113_31182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (28))){
var inst_31028 = (state_31069[(25)]);
var inst_31009 = (state_31069[(21)]);
var inst_31028__$1 = cljs.core.seq.call(null,inst_31009);
var state_31069__$1 = (function (){var statearr_31114 = state_31069;
(statearr_31114[(25)] = inst_31028__$1);

return statearr_31114;
})();
if(inst_31028__$1){
var statearr_31115_31183 = state_31069__$1;
(statearr_31115_31183[(1)] = (33));

} else {
var statearr_31116_31184 = state_31069__$1;
(statearr_31116_31184[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (25))){
var inst_31011 = (state_31069[(20)]);
var inst_31012 = (state_31069[(12)]);
var inst_31014 = (inst_31012 < inst_31011);
var inst_31015 = inst_31014;
var state_31069__$1 = state_31069;
if(cljs.core.truth_(inst_31015)){
var statearr_31117_31185 = state_31069__$1;
(statearr_31117_31185[(1)] = (27));

} else {
var statearr_31118_31186 = state_31069__$1;
(statearr_31118_31186[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (34))){
var state_31069__$1 = state_31069;
var statearr_31119_31187 = state_31069__$1;
(statearr_31119_31187[(2)] = null);

(statearr_31119_31187[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (17))){
var state_31069__$1 = state_31069;
var statearr_31120_31188 = state_31069__$1;
(statearr_31120_31188[(2)] = null);

(statearr_31120_31188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (3))){
var inst_31067 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31069__$1,inst_31067);
} else {
if((state_val_31070 === (12))){
var inst_30996 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31121_31189 = state_31069__$1;
(statearr_31121_31189[(2)] = inst_30996);

(statearr_31121_31189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (2))){
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31069__$1,(4),ch);
} else {
if((state_val_31070 === (23))){
var state_31069__$1 = state_31069;
var statearr_31122_31190 = state_31069__$1;
(statearr_31122_31190[(2)] = null);

(statearr_31122_31190[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (35))){
var inst_31051 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31123_31191 = state_31069__$1;
(statearr_31123_31191[(2)] = inst_31051);

(statearr_31123_31191[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (19))){
var inst_30970 = (state_31069[(7)]);
var inst_30974 = cljs.core.chunk_first.call(null,inst_30970);
var inst_30975 = cljs.core.chunk_rest.call(null,inst_30970);
var inst_30976 = cljs.core.count.call(null,inst_30974);
var inst_30950 = inst_30975;
var inst_30951 = inst_30974;
var inst_30952 = inst_30976;
var inst_30953 = (0);
var state_31069__$1 = (function (){var statearr_31124 = state_31069;
(statearr_31124[(13)] = inst_30950);

(statearr_31124[(14)] = inst_30952);

(statearr_31124[(15)] = inst_30951);

(statearr_31124[(17)] = inst_30953);

return statearr_31124;
})();
var statearr_31125_31192 = state_31069__$1;
(statearr_31125_31192[(2)] = null);

(statearr_31125_31192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (11))){
var inst_30950 = (state_31069[(13)]);
var inst_30970 = (state_31069[(7)]);
var inst_30970__$1 = cljs.core.seq.call(null,inst_30950);
var state_31069__$1 = (function (){var statearr_31126 = state_31069;
(statearr_31126[(7)] = inst_30970__$1);

return statearr_31126;
})();
if(inst_30970__$1){
var statearr_31127_31193 = state_31069__$1;
(statearr_31127_31193[(1)] = (16));

} else {
var statearr_31128_31194 = state_31069__$1;
(statearr_31128_31194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (9))){
var inst_30998 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31129_31195 = state_31069__$1;
(statearr_31129_31195[(2)] = inst_30998);

(statearr_31129_31195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (5))){
var inst_30948 = cljs.core.deref.call(null,cs);
var inst_30949 = cljs.core.seq.call(null,inst_30948);
var inst_30950 = inst_30949;
var inst_30951 = null;
var inst_30952 = (0);
var inst_30953 = (0);
var state_31069__$1 = (function (){var statearr_31130 = state_31069;
(statearr_31130[(13)] = inst_30950);

(statearr_31130[(14)] = inst_30952);

(statearr_31130[(15)] = inst_30951);

(statearr_31130[(17)] = inst_30953);

return statearr_31130;
})();
var statearr_31131_31196 = state_31069__$1;
(statearr_31131_31196[(2)] = null);

(statearr_31131_31196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (14))){
var state_31069__$1 = state_31069;
var statearr_31132_31197 = state_31069__$1;
(statearr_31132_31197[(2)] = null);

(statearr_31132_31197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (45))){
var inst_31059 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31133_31198 = state_31069__$1;
(statearr_31133_31198[(2)] = inst_31059);

(statearr_31133_31198[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (26))){
var inst_31001 = (state_31069[(29)]);
var inst_31055 = (state_31069[(2)]);
var inst_31056 = cljs.core.seq.call(null,inst_31001);
var state_31069__$1 = (function (){var statearr_31134 = state_31069;
(statearr_31134[(31)] = inst_31055);

return statearr_31134;
})();
if(inst_31056){
var statearr_31135_31199 = state_31069__$1;
(statearr_31135_31199[(1)] = (42));

} else {
var statearr_31136_31200 = state_31069__$1;
(statearr_31136_31200[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (16))){
var inst_30970 = (state_31069[(7)]);
var inst_30972 = cljs.core.chunked_seq_QMARK_.call(null,inst_30970);
var state_31069__$1 = state_31069;
if(inst_30972){
var statearr_31137_31201 = state_31069__$1;
(statearr_31137_31201[(1)] = (19));

} else {
var statearr_31138_31202 = state_31069__$1;
(statearr_31138_31202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (38))){
var inst_31048 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31139_31203 = state_31069__$1;
(statearr_31139_31203[(2)] = inst_31048);

(statearr_31139_31203[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (30))){
var state_31069__$1 = state_31069;
var statearr_31140_31204 = state_31069__$1;
(statearr_31140_31204[(2)] = null);

(statearr_31140_31204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (10))){
var inst_30951 = (state_31069[(15)]);
var inst_30953 = (state_31069[(17)]);
var inst_30959 = cljs.core._nth.call(null,inst_30951,inst_30953);
var inst_30960 = cljs.core.nth.call(null,inst_30959,(0),null);
var inst_30961 = cljs.core.nth.call(null,inst_30959,(1),null);
var state_31069__$1 = (function (){var statearr_31141 = state_31069;
(statearr_31141[(26)] = inst_30960);

return statearr_31141;
})();
if(cljs.core.truth_(inst_30961)){
var statearr_31142_31205 = state_31069__$1;
(statearr_31142_31205[(1)] = (13));

} else {
var statearr_31143_31206 = state_31069__$1;
(statearr_31143_31206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (18))){
var inst_30994 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31144_31207 = state_31069__$1;
(statearr_31144_31207[(2)] = inst_30994);

(statearr_31144_31207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (42))){
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31069__$1,(45),dchan);
} else {
if((state_val_31070 === (37))){
var inst_30941 = (state_31069[(11)]);
var inst_31028 = (state_31069[(25)]);
var inst_31037 = (state_31069[(23)]);
var inst_31037__$1 = cljs.core.first.call(null,inst_31028);
var inst_31038 = cljs.core.async.put_BANG_.call(null,inst_31037__$1,inst_30941,done);
var state_31069__$1 = (function (){var statearr_31145 = state_31069;
(statearr_31145[(23)] = inst_31037__$1);

return statearr_31145;
})();
if(cljs.core.truth_(inst_31038)){
var statearr_31146_31208 = state_31069__$1;
(statearr_31146_31208[(1)] = (39));

} else {
var statearr_31147_31209 = state_31069__$1;
(statearr_31147_31209[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (8))){
var inst_30952 = (state_31069[(14)]);
var inst_30953 = (state_31069[(17)]);
var inst_30955 = (inst_30953 < inst_30952);
var inst_30956 = inst_30955;
var state_31069__$1 = state_31069;
if(cljs.core.truth_(inst_30956)){
var statearr_31148_31210 = state_31069__$1;
(statearr_31148_31210[(1)] = (10));

} else {
var statearr_31149_31211 = state_31069__$1;
(statearr_31149_31211[(1)] = (11));

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
});})(c__23229__auto___31157,cs,m,dchan,dctr,done))
;
return ((function (switch__23214__auto__,c__23229__auto___31157,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23215__auto__ = null;
var cljs$core$async$mult_$_state_machine__23215__auto____0 = (function (){
var statearr_31153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31153[(0)] = cljs$core$async$mult_$_state_machine__23215__auto__);

(statearr_31153[(1)] = (1));

return statearr_31153;
});
var cljs$core$async$mult_$_state_machine__23215__auto____1 = (function (state_31069){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31154){if((e31154 instanceof Object)){
var ex__23218__auto__ = e31154;
var statearr_31155_31212 = state_31069;
(statearr_31155_31212[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31213 = state_31069;
state_31069 = G__31213;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23215__auto__ = function(state_31069){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23215__auto____1.call(this,state_31069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23215__auto____0;
cljs$core$async$mult_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23215__auto____1;
return cljs$core$async$mult_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31157,cs,m,dchan,dctr,done))
})();
var state__23231__auto__ = (function (){var statearr_31156 = f__23230__auto__.call(null);
(statearr_31156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31157);

return statearr_31156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31157,cs,m,dchan,dctr,done))
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
var G__31215 = arguments.length;
switch (G__31215) {
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

cljs.core.async.Mix = (function (){var obj31218 = {};
return obj31218;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31223){
var map__31224 = p__31223;
var map__31224__$1 = ((cljs.core.seq_QMARK_.call(null,map__31224))?cljs.core.apply.call(null,cljs.core.hash_map,map__31224):map__31224);
var opts = map__31224__$1;
var statearr_31225_31228 = state;
(statearr_31225_31228[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31224,map__31224__$1,opts){
return (function (val){
var statearr_31226_31229 = state;
(statearr_31226_31229[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31224,map__31224__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31227_31230 = state;
(statearr_31227_31230[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31219){
var G__31220 = cljs.core.first.call(null,seq31219);
var seq31219__$1 = cljs.core.next.call(null,seq31219);
var G__31221 = cljs.core.first.call(null,seq31219__$1);
var seq31219__$2 = cljs.core.next.call(null,seq31219__$1);
var G__31222 = cljs.core.first.call(null,seq31219__$2);
var seq31219__$3 = cljs.core.next.call(null,seq31219__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31220,G__31221,G__31222,seq31219__$3);
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
if(typeof cljs.core.async.t31350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31350 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31351){
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
this.meta31351 = meta31351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31350.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31350.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31350.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31352){
var self__ = this;
var _31352__$1 = this;
return self__.meta31351;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31352,meta31351__$1){
var self__ = this;
var _31352__$1 = this;
return (new cljs.core.async.t31350(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31351__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31350.cljs$lang$type = true;

cljs.core.async.t31350.cljs$lang$ctorStr = "cljs.core.async/t31350";

cljs.core.async.t31350.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31350");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31350 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31350(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31351){
return (new cljs.core.async.t31350(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31351));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31350(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23229__auto___31469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31422){
var state_val_31423 = (state_31422[(1)]);
if((state_val_31423 === (7))){
var inst_31366 = (state_31422[(7)]);
var inst_31371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31366);
var state_31422__$1 = state_31422;
var statearr_31424_31470 = state_31422__$1;
(statearr_31424_31470[(2)] = inst_31371);

(statearr_31424_31470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (20))){
var inst_31381 = (state_31422[(8)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31422__$1,(23),out,inst_31381);
} else {
if((state_val_31423 === (1))){
var inst_31356 = (state_31422[(9)]);
var inst_31356__$1 = calc_state.call(null);
var inst_31357 = cljs.core.seq_QMARK_.call(null,inst_31356__$1);
var state_31422__$1 = (function (){var statearr_31425 = state_31422;
(statearr_31425[(9)] = inst_31356__$1);

return statearr_31425;
})();
if(inst_31357){
var statearr_31426_31471 = state_31422__$1;
(statearr_31426_31471[(1)] = (2));

} else {
var statearr_31427_31472 = state_31422__$1;
(statearr_31427_31472[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (24))){
var inst_31374 = (state_31422[(10)]);
var inst_31366 = inst_31374;
var state_31422__$1 = (function (){var statearr_31428 = state_31422;
(statearr_31428[(7)] = inst_31366);

return statearr_31428;
})();
var statearr_31429_31473 = state_31422__$1;
(statearr_31429_31473[(2)] = null);

(statearr_31429_31473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (4))){
var inst_31356 = (state_31422[(9)]);
var inst_31362 = (state_31422[(2)]);
var inst_31363 = cljs.core.get.call(null,inst_31362,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31364 = cljs.core.get.call(null,inst_31362,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31365 = cljs.core.get.call(null,inst_31362,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31366 = inst_31356;
var state_31422__$1 = (function (){var statearr_31430 = state_31422;
(statearr_31430[(11)] = inst_31365);

(statearr_31430[(12)] = inst_31364);

(statearr_31430[(7)] = inst_31366);

(statearr_31430[(13)] = inst_31363);

return statearr_31430;
})();
var statearr_31431_31474 = state_31422__$1;
(statearr_31431_31474[(2)] = null);

(statearr_31431_31474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (15))){
var state_31422__$1 = state_31422;
var statearr_31432_31475 = state_31422__$1;
(statearr_31432_31475[(2)] = null);

(statearr_31432_31475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (21))){
var inst_31374 = (state_31422[(10)]);
var inst_31366 = inst_31374;
var state_31422__$1 = (function (){var statearr_31433 = state_31422;
(statearr_31433[(7)] = inst_31366);

return statearr_31433;
})();
var statearr_31434_31476 = state_31422__$1;
(statearr_31434_31476[(2)] = null);

(statearr_31434_31476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (13))){
var inst_31418 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31435_31477 = state_31422__$1;
(statearr_31435_31477[(2)] = inst_31418);

(statearr_31435_31477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (22))){
var inst_31416 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31436_31478 = state_31422__$1;
(statearr_31436_31478[(2)] = inst_31416);

(statearr_31436_31478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (6))){
var inst_31420 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31422__$1,inst_31420);
} else {
if((state_val_31423 === (25))){
var state_31422__$1 = state_31422;
var statearr_31437_31479 = state_31422__$1;
(statearr_31437_31479[(2)] = null);

(statearr_31437_31479[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (17))){
var inst_31396 = (state_31422[(14)]);
var state_31422__$1 = state_31422;
var statearr_31438_31480 = state_31422__$1;
(statearr_31438_31480[(2)] = inst_31396);

(statearr_31438_31480[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (3))){
var inst_31356 = (state_31422[(9)]);
var state_31422__$1 = state_31422;
var statearr_31439_31481 = state_31422__$1;
(statearr_31439_31481[(2)] = inst_31356);

(statearr_31439_31481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (12))){
var inst_31396 = (state_31422[(14)]);
var inst_31382 = (state_31422[(15)]);
var inst_31377 = (state_31422[(16)]);
var inst_31396__$1 = inst_31377.call(null,inst_31382);
var state_31422__$1 = (function (){var statearr_31440 = state_31422;
(statearr_31440[(14)] = inst_31396__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31396__$1)){
var statearr_31441_31482 = state_31422__$1;
(statearr_31441_31482[(1)] = (17));

} else {
var statearr_31442_31483 = state_31422__$1;
(statearr_31442_31483[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (2))){
var inst_31356 = (state_31422[(9)]);
var inst_31359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31356);
var state_31422__$1 = state_31422;
var statearr_31443_31484 = state_31422__$1;
(statearr_31443_31484[(2)] = inst_31359);

(statearr_31443_31484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (23))){
var inst_31407 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31407)){
var statearr_31444_31485 = state_31422__$1;
(statearr_31444_31485[(1)] = (24));

} else {
var statearr_31445_31486 = state_31422__$1;
(statearr_31445_31486[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (19))){
var inst_31404 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31404)){
var statearr_31446_31487 = state_31422__$1;
(statearr_31446_31487[(1)] = (20));

} else {
var statearr_31447_31488 = state_31422__$1;
(statearr_31447_31488[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (11))){
var inst_31381 = (state_31422[(8)]);
var inst_31387 = (inst_31381 == null);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31387)){
var statearr_31448_31489 = state_31422__$1;
(statearr_31448_31489[(1)] = (14));

} else {
var statearr_31449_31490 = state_31422__$1;
(statearr_31449_31490[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (9))){
var inst_31374 = (state_31422[(10)]);
var inst_31374__$1 = (state_31422[(2)]);
var inst_31375 = cljs.core.get.call(null,inst_31374__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31376 = cljs.core.get.call(null,inst_31374__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31377 = cljs.core.get.call(null,inst_31374__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31422__$1 = (function (){var statearr_31450 = state_31422;
(statearr_31450[(17)] = inst_31376);

(statearr_31450[(16)] = inst_31377);

(statearr_31450[(10)] = inst_31374__$1);

return statearr_31450;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31422__$1,(10),inst_31375);
} else {
if((state_val_31423 === (5))){
var inst_31366 = (state_31422[(7)]);
var inst_31369 = cljs.core.seq_QMARK_.call(null,inst_31366);
var state_31422__$1 = state_31422;
if(inst_31369){
var statearr_31451_31491 = state_31422__$1;
(statearr_31451_31491[(1)] = (7));

} else {
var statearr_31452_31492 = state_31422__$1;
(statearr_31452_31492[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (14))){
var inst_31382 = (state_31422[(15)]);
var inst_31389 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31382);
var state_31422__$1 = state_31422;
var statearr_31453_31493 = state_31422__$1;
(statearr_31453_31493[(2)] = inst_31389);

(statearr_31453_31493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (26))){
var inst_31412 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31454_31494 = state_31422__$1;
(statearr_31454_31494[(2)] = inst_31412);

(statearr_31454_31494[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (16))){
var inst_31392 = (state_31422[(2)]);
var inst_31393 = calc_state.call(null);
var inst_31366 = inst_31393;
var state_31422__$1 = (function (){var statearr_31455 = state_31422;
(statearr_31455[(18)] = inst_31392);

(statearr_31455[(7)] = inst_31366);

return statearr_31455;
})();
var statearr_31456_31495 = state_31422__$1;
(statearr_31456_31495[(2)] = null);

(statearr_31456_31495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (10))){
var inst_31381 = (state_31422[(8)]);
var inst_31382 = (state_31422[(15)]);
var inst_31380 = (state_31422[(2)]);
var inst_31381__$1 = cljs.core.nth.call(null,inst_31380,(0),null);
var inst_31382__$1 = cljs.core.nth.call(null,inst_31380,(1),null);
var inst_31383 = (inst_31381__$1 == null);
var inst_31384 = cljs.core._EQ_.call(null,inst_31382__$1,change);
var inst_31385 = (inst_31383) || (inst_31384);
var state_31422__$1 = (function (){var statearr_31457 = state_31422;
(statearr_31457[(8)] = inst_31381__$1);

(statearr_31457[(15)] = inst_31382__$1);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31385)){
var statearr_31458_31496 = state_31422__$1;
(statearr_31458_31496[(1)] = (11));

} else {
var statearr_31459_31497 = state_31422__$1;
(statearr_31459_31497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (18))){
var inst_31382 = (state_31422[(15)]);
var inst_31376 = (state_31422[(17)]);
var inst_31377 = (state_31422[(16)]);
var inst_31399 = cljs.core.empty_QMARK_.call(null,inst_31377);
var inst_31400 = inst_31376.call(null,inst_31382);
var inst_31401 = cljs.core.not.call(null,inst_31400);
var inst_31402 = (inst_31399) && (inst_31401);
var state_31422__$1 = state_31422;
var statearr_31460_31498 = state_31422__$1;
(statearr_31460_31498[(2)] = inst_31402);

(statearr_31460_31498[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (8))){
var inst_31366 = (state_31422[(7)]);
var state_31422__$1 = state_31422;
var statearr_31461_31499 = state_31422__$1;
(statearr_31461_31499[(2)] = inst_31366);

(statearr_31461_31499[(1)] = (9));


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
});})(c__23229__auto___31469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23214__auto__,c__23229__auto___31469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23215__auto__ = null;
var cljs$core$async$mix_$_state_machine__23215__auto____0 = (function (){
var statearr_31465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31465[(0)] = cljs$core$async$mix_$_state_machine__23215__auto__);

(statearr_31465[(1)] = (1));

return statearr_31465;
});
var cljs$core$async$mix_$_state_machine__23215__auto____1 = (function (state_31422){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31466){if((e31466 instanceof Object)){
var ex__23218__auto__ = e31466;
var statearr_31467_31500 = state_31422;
(statearr_31467_31500[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31501 = state_31422;
state_31422 = G__31501;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23215__auto__ = function(state_31422){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23215__auto____1.call(this,state_31422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23215__auto____0;
cljs$core$async$mix_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23215__auto____1;
return cljs$core$async$mix_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23231__auto__ = (function (){var statearr_31468 = f__23230__auto__.call(null);
(statearr_31468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31469);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj31503 = {};
return obj31503;
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
var G__31505 = arguments.length;
switch (G__31505) {
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
var G__31509 = arguments.length;
switch (G__31509) {
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
return (function (p1__31507_SHARP_){
if(cljs.core.truth_(p1__31507_SHARP_.call(null,topic))){
return p1__31507_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31507_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31510 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta31511){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta31511 = meta31511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31510.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31510.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31510.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31510.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31512){
var self__ = this;
var _31512__$1 = this;
return self__.meta31511;
});})(mults,ensure_mult))
;

cljs.core.async.t31510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31512,meta31511__$1){
var self__ = this;
var _31512__$1 = this;
return (new cljs.core.async.t31510(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta31511__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31510.cljs$lang$type = true;

cljs.core.async.t31510.cljs$lang$ctorStr = "cljs.core.async/t31510";

cljs.core.async.t31510.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31510");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31510 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31510(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta31511){
return (new cljs.core.async.t31510(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta31511));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31510(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23229__auto___31633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31633,mults,ensure_mult,p){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31633,mults,ensure_mult,p){
return (function (state_31584){
var state_val_31585 = (state_31584[(1)]);
if((state_val_31585 === (7))){
var inst_31580 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31586_31634 = state_31584__$1;
(statearr_31586_31634[(2)] = inst_31580);

(statearr_31586_31634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (20))){
var state_31584__$1 = state_31584;
var statearr_31587_31635 = state_31584__$1;
(statearr_31587_31635[(2)] = null);

(statearr_31587_31635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (1))){
var state_31584__$1 = state_31584;
var statearr_31588_31636 = state_31584__$1;
(statearr_31588_31636[(2)] = null);

(statearr_31588_31636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (24))){
var inst_31563 = (state_31584[(7)]);
var inst_31572 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31563);
var state_31584__$1 = state_31584;
var statearr_31589_31637 = state_31584__$1;
(statearr_31589_31637[(2)] = inst_31572);

(statearr_31589_31637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (4))){
var inst_31515 = (state_31584[(8)]);
var inst_31515__$1 = (state_31584[(2)]);
var inst_31516 = (inst_31515__$1 == null);
var state_31584__$1 = (function (){var statearr_31590 = state_31584;
(statearr_31590[(8)] = inst_31515__$1);

return statearr_31590;
})();
if(cljs.core.truth_(inst_31516)){
var statearr_31591_31638 = state_31584__$1;
(statearr_31591_31638[(1)] = (5));

} else {
var statearr_31592_31639 = state_31584__$1;
(statearr_31592_31639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (15))){
var inst_31557 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31593_31640 = state_31584__$1;
(statearr_31593_31640[(2)] = inst_31557);

(statearr_31593_31640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (21))){
var inst_31577 = (state_31584[(2)]);
var state_31584__$1 = (function (){var statearr_31594 = state_31584;
(statearr_31594[(9)] = inst_31577);

return statearr_31594;
})();
var statearr_31595_31641 = state_31584__$1;
(statearr_31595_31641[(2)] = null);

(statearr_31595_31641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (13))){
var inst_31539 = (state_31584[(10)]);
var inst_31541 = cljs.core.chunked_seq_QMARK_.call(null,inst_31539);
var state_31584__$1 = state_31584;
if(inst_31541){
var statearr_31596_31642 = state_31584__$1;
(statearr_31596_31642[(1)] = (16));

} else {
var statearr_31597_31643 = state_31584__$1;
(statearr_31597_31643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (22))){
var inst_31569 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
if(cljs.core.truth_(inst_31569)){
var statearr_31598_31644 = state_31584__$1;
(statearr_31598_31644[(1)] = (23));

} else {
var statearr_31599_31645 = state_31584__$1;
(statearr_31599_31645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (6))){
var inst_31563 = (state_31584[(7)]);
var inst_31515 = (state_31584[(8)]);
var inst_31565 = (state_31584[(11)]);
var inst_31563__$1 = topic_fn.call(null,inst_31515);
var inst_31564 = cljs.core.deref.call(null,mults);
var inst_31565__$1 = cljs.core.get.call(null,inst_31564,inst_31563__$1);
var state_31584__$1 = (function (){var statearr_31600 = state_31584;
(statearr_31600[(7)] = inst_31563__$1);

(statearr_31600[(11)] = inst_31565__$1);

return statearr_31600;
})();
if(cljs.core.truth_(inst_31565__$1)){
var statearr_31601_31646 = state_31584__$1;
(statearr_31601_31646[(1)] = (19));

} else {
var statearr_31602_31647 = state_31584__$1;
(statearr_31602_31647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (25))){
var inst_31574 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31603_31648 = state_31584__$1;
(statearr_31603_31648[(2)] = inst_31574);

(statearr_31603_31648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (17))){
var inst_31539 = (state_31584[(10)]);
var inst_31548 = cljs.core.first.call(null,inst_31539);
var inst_31549 = cljs.core.async.muxch_STAR_.call(null,inst_31548);
var inst_31550 = cljs.core.async.close_BANG_.call(null,inst_31549);
var inst_31551 = cljs.core.next.call(null,inst_31539);
var inst_31525 = inst_31551;
var inst_31526 = null;
var inst_31527 = (0);
var inst_31528 = (0);
var state_31584__$1 = (function (){var statearr_31604 = state_31584;
(statearr_31604[(12)] = inst_31525);

(statearr_31604[(13)] = inst_31528);

(statearr_31604[(14)] = inst_31527);

(statearr_31604[(15)] = inst_31550);

(statearr_31604[(16)] = inst_31526);

return statearr_31604;
})();
var statearr_31605_31649 = state_31584__$1;
(statearr_31605_31649[(2)] = null);

(statearr_31605_31649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (3))){
var inst_31582 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31584__$1,inst_31582);
} else {
if((state_val_31585 === (12))){
var inst_31559 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31606_31650 = state_31584__$1;
(statearr_31606_31650[(2)] = inst_31559);

(statearr_31606_31650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (2))){
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31584__$1,(4),ch);
} else {
if((state_val_31585 === (23))){
var state_31584__$1 = state_31584;
var statearr_31607_31651 = state_31584__$1;
(statearr_31607_31651[(2)] = null);

(statearr_31607_31651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (19))){
var inst_31515 = (state_31584[(8)]);
var inst_31565 = (state_31584[(11)]);
var inst_31567 = cljs.core.async.muxch_STAR_.call(null,inst_31565);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31584__$1,(22),inst_31567,inst_31515);
} else {
if((state_val_31585 === (11))){
var inst_31525 = (state_31584[(12)]);
var inst_31539 = (state_31584[(10)]);
var inst_31539__$1 = cljs.core.seq.call(null,inst_31525);
var state_31584__$1 = (function (){var statearr_31608 = state_31584;
(statearr_31608[(10)] = inst_31539__$1);

return statearr_31608;
})();
if(inst_31539__$1){
var statearr_31609_31652 = state_31584__$1;
(statearr_31609_31652[(1)] = (13));

} else {
var statearr_31610_31653 = state_31584__$1;
(statearr_31610_31653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (9))){
var inst_31561 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31611_31654 = state_31584__$1;
(statearr_31611_31654[(2)] = inst_31561);

(statearr_31611_31654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (5))){
var inst_31522 = cljs.core.deref.call(null,mults);
var inst_31523 = cljs.core.vals.call(null,inst_31522);
var inst_31524 = cljs.core.seq.call(null,inst_31523);
var inst_31525 = inst_31524;
var inst_31526 = null;
var inst_31527 = (0);
var inst_31528 = (0);
var state_31584__$1 = (function (){var statearr_31612 = state_31584;
(statearr_31612[(12)] = inst_31525);

(statearr_31612[(13)] = inst_31528);

(statearr_31612[(14)] = inst_31527);

(statearr_31612[(16)] = inst_31526);

return statearr_31612;
})();
var statearr_31613_31655 = state_31584__$1;
(statearr_31613_31655[(2)] = null);

(statearr_31613_31655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (14))){
var state_31584__$1 = state_31584;
var statearr_31617_31656 = state_31584__$1;
(statearr_31617_31656[(2)] = null);

(statearr_31617_31656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (16))){
var inst_31539 = (state_31584[(10)]);
var inst_31543 = cljs.core.chunk_first.call(null,inst_31539);
var inst_31544 = cljs.core.chunk_rest.call(null,inst_31539);
var inst_31545 = cljs.core.count.call(null,inst_31543);
var inst_31525 = inst_31544;
var inst_31526 = inst_31543;
var inst_31527 = inst_31545;
var inst_31528 = (0);
var state_31584__$1 = (function (){var statearr_31618 = state_31584;
(statearr_31618[(12)] = inst_31525);

(statearr_31618[(13)] = inst_31528);

(statearr_31618[(14)] = inst_31527);

(statearr_31618[(16)] = inst_31526);

return statearr_31618;
})();
var statearr_31619_31657 = state_31584__$1;
(statearr_31619_31657[(2)] = null);

(statearr_31619_31657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (10))){
var inst_31525 = (state_31584[(12)]);
var inst_31528 = (state_31584[(13)]);
var inst_31527 = (state_31584[(14)]);
var inst_31526 = (state_31584[(16)]);
var inst_31533 = cljs.core._nth.call(null,inst_31526,inst_31528);
var inst_31534 = cljs.core.async.muxch_STAR_.call(null,inst_31533);
var inst_31535 = cljs.core.async.close_BANG_.call(null,inst_31534);
var inst_31536 = (inst_31528 + (1));
var tmp31614 = inst_31525;
var tmp31615 = inst_31527;
var tmp31616 = inst_31526;
var inst_31525__$1 = tmp31614;
var inst_31526__$1 = tmp31616;
var inst_31527__$1 = tmp31615;
var inst_31528__$1 = inst_31536;
var state_31584__$1 = (function (){var statearr_31620 = state_31584;
(statearr_31620[(12)] = inst_31525__$1);

(statearr_31620[(13)] = inst_31528__$1);

(statearr_31620[(17)] = inst_31535);

(statearr_31620[(14)] = inst_31527__$1);

(statearr_31620[(16)] = inst_31526__$1);

return statearr_31620;
})();
var statearr_31621_31658 = state_31584__$1;
(statearr_31621_31658[(2)] = null);

(statearr_31621_31658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (18))){
var inst_31554 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31622_31659 = state_31584__$1;
(statearr_31622_31659[(2)] = inst_31554);

(statearr_31622_31659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (8))){
var inst_31528 = (state_31584[(13)]);
var inst_31527 = (state_31584[(14)]);
var inst_31530 = (inst_31528 < inst_31527);
var inst_31531 = inst_31530;
var state_31584__$1 = state_31584;
if(cljs.core.truth_(inst_31531)){
var statearr_31623_31660 = state_31584__$1;
(statearr_31623_31660[(1)] = (10));

} else {
var statearr_31624_31661 = state_31584__$1;
(statearr_31624_31661[(1)] = (11));

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
});})(c__23229__auto___31633,mults,ensure_mult,p))
;
return ((function (switch__23214__auto__,c__23229__auto___31633,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_31628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31628[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_31628[(1)] = (1));

return statearr_31628;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_31584){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object)){
var ex__23218__auto__ = e31629;
var statearr_31630_31662 = state_31584;
(statearr_31630_31662[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31663 = state_31584;
state_31584 = G__31663;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_31584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_31584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31633,mults,ensure_mult,p))
})();
var state__23231__auto__ = (function (){var statearr_31631 = f__23230__auto__.call(null);
(statearr_31631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31633);

return statearr_31631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31633,mults,ensure_mult,p))
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
var G__31665 = arguments.length;
switch (G__31665) {
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
var G__31668 = arguments.length;
switch (G__31668) {
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
var G__31671 = arguments.length;
switch (G__31671) {
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
var c__23229__auto___31741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31741,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31741,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31710){
var state_val_31711 = (state_31710[(1)]);
if((state_val_31711 === (7))){
var state_31710__$1 = state_31710;
var statearr_31712_31742 = state_31710__$1;
(statearr_31712_31742[(2)] = null);

(statearr_31712_31742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (1))){
var state_31710__$1 = state_31710;
var statearr_31713_31743 = state_31710__$1;
(statearr_31713_31743[(2)] = null);

(statearr_31713_31743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (4))){
var inst_31674 = (state_31710[(7)]);
var inst_31676 = (inst_31674 < cnt);
var state_31710__$1 = state_31710;
if(cljs.core.truth_(inst_31676)){
var statearr_31714_31744 = state_31710__$1;
(statearr_31714_31744[(1)] = (6));

} else {
var statearr_31715_31745 = state_31710__$1;
(statearr_31715_31745[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (15))){
var inst_31706 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31716_31746 = state_31710__$1;
(statearr_31716_31746[(2)] = inst_31706);

(statearr_31716_31746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (13))){
var inst_31699 = cljs.core.async.close_BANG_.call(null,out);
var state_31710__$1 = state_31710;
var statearr_31717_31747 = state_31710__$1;
(statearr_31717_31747[(2)] = inst_31699);

(statearr_31717_31747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (6))){
var state_31710__$1 = state_31710;
var statearr_31718_31748 = state_31710__$1;
(statearr_31718_31748[(2)] = null);

(statearr_31718_31748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (3))){
var inst_31708 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31710__$1,inst_31708);
} else {
if((state_val_31711 === (12))){
var inst_31696 = (state_31710[(8)]);
var inst_31696__$1 = (state_31710[(2)]);
var inst_31697 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31696__$1);
var state_31710__$1 = (function (){var statearr_31719 = state_31710;
(statearr_31719[(8)] = inst_31696__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31697)){
var statearr_31720_31749 = state_31710__$1;
(statearr_31720_31749[(1)] = (13));

} else {
var statearr_31721_31750 = state_31710__$1;
(statearr_31721_31750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (2))){
var inst_31673 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31674 = (0);
var state_31710__$1 = (function (){var statearr_31722 = state_31710;
(statearr_31722[(7)] = inst_31674);

(statearr_31722[(9)] = inst_31673);

return statearr_31722;
})();
var statearr_31723_31751 = state_31710__$1;
(statearr_31723_31751[(2)] = null);

(statearr_31723_31751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (11))){
var inst_31674 = (state_31710[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31710,(10),Object,null,(9));
var inst_31683 = chs__$1.call(null,inst_31674);
var inst_31684 = done.call(null,inst_31674);
var inst_31685 = cljs.core.async.take_BANG_.call(null,inst_31683,inst_31684);
var state_31710__$1 = state_31710;
var statearr_31724_31752 = state_31710__$1;
(statearr_31724_31752[(2)] = inst_31685);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (9))){
var inst_31674 = (state_31710[(7)]);
var inst_31687 = (state_31710[(2)]);
var inst_31688 = (inst_31674 + (1));
var inst_31674__$1 = inst_31688;
var state_31710__$1 = (function (){var statearr_31725 = state_31710;
(statearr_31725[(7)] = inst_31674__$1);

(statearr_31725[(10)] = inst_31687);

return statearr_31725;
})();
var statearr_31726_31753 = state_31710__$1;
(statearr_31726_31753[(2)] = null);

(statearr_31726_31753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (5))){
var inst_31694 = (state_31710[(2)]);
var state_31710__$1 = (function (){var statearr_31727 = state_31710;
(statearr_31727[(11)] = inst_31694);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31710__$1,(12),dchan);
} else {
if((state_val_31711 === (14))){
var inst_31696 = (state_31710[(8)]);
var inst_31701 = cljs.core.apply.call(null,f,inst_31696);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31710__$1,(16),out,inst_31701);
} else {
if((state_val_31711 === (16))){
var inst_31703 = (state_31710[(2)]);
var state_31710__$1 = (function (){var statearr_31728 = state_31710;
(statearr_31728[(12)] = inst_31703);

return statearr_31728;
})();
var statearr_31729_31754 = state_31710__$1;
(statearr_31729_31754[(2)] = null);

(statearr_31729_31754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (10))){
var inst_31678 = (state_31710[(2)]);
var inst_31679 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31710__$1 = (function (){var statearr_31730 = state_31710;
(statearr_31730[(13)] = inst_31678);

return statearr_31730;
})();
var statearr_31731_31755 = state_31710__$1;
(statearr_31731_31755[(2)] = inst_31679);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (8))){
var inst_31692 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31732_31756 = state_31710__$1;
(statearr_31732_31756[(2)] = inst_31692);

(statearr_31732_31756[(1)] = (5));


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
});})(c__23229__auto___31741,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23214__auto__,c__23229__auto___31741,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_31710){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31737){if((e31737 instanceof Object)){
var ex__23218__auto__ = e31737;
var statearr_31738_31757 = state_31710;
(statearr_31738_31757[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31758 = state_31710;
state_31710 = G__31758;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_31710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_31710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31741,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23231__auto__ = (function (){var statearr_31739 = f__23230__auto__.call(null);
(statearr_31739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31741);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31741,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31761 = arguments.length;
switch (G__31761) {
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
var c__23229__auto___31816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31816,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31816,out){
return (function (state_31791){
var state_val_31792 = (state_31791[(1)]);
if((state_val_31792 === (7))){
var inst_31770 = (state_31791[(7)]);
var inst_31771 = (state_31791[(8)]);
var inst_31770__$1 = (state_31791[(2)]);
var inst_31771__$1 = cljs.core.nth.call(null,inst_31770__$1,(0),null);
var inst_31772 = cljs.core.nth.call(null,inst_31770__$1,(1),null);
var inst_31773 = (inst_31771__$1 == null);
var state_31791__$1 = (function (){var statearr_31793 = state_31791;
(statearr_31793[(7)] = inst_31770__$1);

(statearr_31793[(8)] = inst_31771__$1);

(statearr_31793[(9)] = inst_31772);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31773)){
var statearr_31794_31817 = state_31791__$1;
(statearr_31794_31817[(1)] = (8));

} else {
var statearr_31795_31818 = state_31791__$1;
(statearr_31795_31818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (1))){
var inst_31762 = cljs.core.vec.call(null,chs);
var inst_31763 = inst_31762;
var state_31791__$1 = (function (){var statearr_31796 = state_31791;
(statearr_31796[(10)] = inst_31763);

return statearr_31796;
})();
var statearr_31797_31819 = state_31791__$1;
(statearr_31797_31819[(2)] = null);

(statearr_31797_31819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (4))){
var inst_31763 = (state_31791[(10)]);
var state_31791__$1 = state_31791;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31791__$1,(7),inst_31763);
} else {
if((state_val_31792 === (6))){
var inst_31787 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31798_31820 = state_31791__$1;
(statearr_31798_31820[(2)] = inst_31787);

(statearr_31798_31820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (3))){
var inst_31789 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31791__$1,inst_31789);
} else {
if((state_val_31792 === (2))){
var inst_31763 = (state_31791[(10)]);
var inst_31765 = cljs.core.count.call(null,inst_31763);
var inst_31766 = (inst_31765 > (0));
var state_31791__$1 = state_31791;
if(cljs.core.truth_(inst_31766)){
var statearr_31800_31821 = state_31791__$1;
(statearr_31800_31821[(1)] = (4));

} else {
var statearr_31801_31822 = state_31791__$1;
(statearr_31801_31822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (11))){
var inst_31763 = (state_31791[(10)]);
var inst_31780 = (state_31791[(2)]);
var tmp31799 = inst_31763;
var inst_31763__$1 = tmp31799;
var state_31791__$1 = (function (){var statearr_31802 = state_31791;
(statearr_31802[(11)] = inst_31780);

(statearr_31802[(10)] = inst_31763__$1);

return statearr_31802;
})();
var statearr_31803_31823 = state_31791__$1;
(statearr_31803_31823[(2)] = null);

(statearr_31803_31823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (9))){
var inst_31771 = (state_31791[(8)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31791__$1,(11),out,inst_31771);
} else {
if((state_val_31792 === (5))){
var inst_31785 = cljs.core.async.close_BANG_.call(null,out);
var state_31791__$1 = state_31791;
var statearr_31804_31824 = state_31791__$1;
(statearr_31804_31824[(2)] = inst_31785);

(statearr_31804_31824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (10))){
var inst_31783 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31805_31825 = state_31791__$1;
(statearr_31805_31825[(2)] = inst_31783);

(statearr_31805_31825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (8))){
var inst_31770 = (state_31791[(7)]);
var inst_31771 = (state_31791[(8)]);
var inst_31763 = (state_31791[(10)]);
var inst_31772 = (state_31791[(9)]);
var inst_31775 = (function (){var c = inst_31772;
var v = inst_31771;
var vec__31768 = inst_31770;
var cs = inst_31763;
return ((function (c,v,vec__31768,cs,inst_31770,inst_31771,inst_31763,inst_31772,state_val_31792,c__23229__auto___31816,out){
return (function (p1__31759_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31759_SHARP_);
});
;})(c,v,vec__31768,cs,inst_31770,inst_31771,inst_31763,inst_31772,state_val_31792,c__23229__auto___31816,out))
})();
var inst_31776 = cljs.core.filterv.call(null,inst_31775,inst_31763);
var inst_31763__$1 = inst_31776;
var state_31791__$1 = (function (){var statearr_31806 = state_31791;
(statearr_31806[(10)] = inst_31763__$1);

return statearr_31806;
})();
var statearr_31807_31826 = state_31791__$1;
(statearr_31807_31826[(2)] = null);

(statearr_31807_31826[(1)] = (2));


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
});})(c__23229__auto___31816,out))
;
return ((function (switch__23214__auto__,c__23229__auto___31816,out){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_31811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31811[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_31811[(1)] = (1));

return statearr_31811;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_31791){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31812){if((e31812 instanceof Object)){
var ex__23218__auto__ = e31812;
var statearr_31813_31827 = state_31791;
(statearr_31813_31827[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31828 = state_31791;
state_31791 = G__31828;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_31791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_31791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31816,out))
})();
var state__23231__auto__ = (function (){var statearr_31814 = f__23230__auto__.call(null);
(statearr_31814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31816);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31816,out))
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
var G__31830 = arguments.length;
switch (G__31830) {
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
var c__23229__auto___31878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31878,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31878,out){
return (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (7))){
var inst_31836 = (state_31854[(7)]);
var inst_31836__$1 = (state_31854[(2)]);
var inst_31837 = (inst_31836__$1 == null);
var inst_31838 = cljs.core.not.call(null,inst_31837);
var state_31854__$1 = (function (){var statearr_31856 = state_31854;
(statearr_31856[(7)] = inst_31836__$1);

return statearr_31856;
})();
if(inst_31838){
var statearr_31857_31879 = state_31854__$1;
(statearr_31857_31879[(1)] = (8));

} else {
var statearr_31858_31880 = state_31854__$1;
(statearr_31858_31880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (1))){
var inst_31831 = (0);
var state_31854__$1 = (function (){var statearr_31859 = state_31854;
(statearr_31859[(8)] = inst_31831);

return statearr_31859;
})();
var statearr_31860_31881 = state_31854__$1;
(statearr_31860_31881[(2)] = null);

(statearr_31860_31881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (4))){
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31854__$1,(7),ch);
} else {
if((state_val_31855 === (6))){
var inst_31849 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31861_31882 = state_31854__$1;
(statearr_31861_31882[(2)] = inst_31849);

(statearr_31861_31882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (3))){
var inst_31851 = (state_31854[(2)]);
var inst_31852 = cljs.core.async.close_BANG_.call(null,out);
var state_31854__$1 = (function (){var statearr_31862 = state_31854;
(statearr_31862[(9)] = inst_31851);

return statearr_31862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31854__$1,inst_31852);
} else {
if((state_val_31855 === (2))){
var inst_31831 = (state_31854[(8)]);
var inst_31833 = (inst_31831 < n);
var state_31854__$1 = state_31854;
if(cljs.core.truth_(inst_31833)){
var statearr_31863_31883 = state_31854__$1;
(statearr_31863_31883[(1)] = (4));

} else {
var statearr_31864_31884 = state_31854__$1;
(statearr_31864_31884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (11))){
var inst_31831 = (state_31854[(8)]);
var inst_31841 = (state_31854[(2)]);
var inst_31842 = (inst_31831 + (1));
var inst_31831__$1 = inst_31842;
var state_31854__$1 = (function (){var statearr_31865 = state_31854;
(statearr_31865[(8)] = inst_31831__$1);

(statearr_31865[(10)] = inst_31841);

return statearr_31865;
})();
var statearr_31866_31885 = state_31854__$1;
(statearr_31866_31885[(2)] = null);

(statearr_31866_31885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (9))){
var state_31854__$1 = state_31854;
var statearr_31867_31886 = state_31854__$1;
(statearr_31867_31886[(2)] = null);

(statearr_31867_31886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (5))){
var state_31854__$1 = state_31854;
var statearr_31868_31887 = state_31854__$1;
(statearr_31868_31887[(2)] = null);

(statearr_31868_31887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (10))){
var inst_31846 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31869_31888 = state_31854__$1;
(statearr_31869_31888[(2)] = inst_31846);

(statearr_31869_31888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (8))){
var inst_31836 = (state_31854[(7)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31854__$1,(11),out,inst_31836);
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
});})(c__23229__auto___31878,out))
;
return ((function (switch__23214__auto__,c__23229__auto___31878,out){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_31873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31873[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_31873[(1)] = (1));

return statearr_31873;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_31854){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31874){if((e31874 instanceof Object)){
var ex__23218__auto__ = e31874;
var statearr_31875_31889 = state_31854;
(statearr_31875_31889[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31890 = state_31854;
state_31854 = G__31890;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31878,out))
})();
var state__23231__auto__ = (function (){var statearr_31876 = f__23230__auto__.call(null);
(statearr_31876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31878);

return statearr_31876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31878,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31898 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31898 = (function (ch,f,map_LT_,meta31899){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31899 = meta31899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31901 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31901 = (function (fn1,_,meta31899,map_LT_,f,ch,meta31902){
this.fn1 = fn1;
this._ = _;
this.meta31899 = meta31899;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31902 = meta31902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31901.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31891_SHARP_){
return f1.call(null,(((p1__31891_SHARP_ == null))?null:self__.f.call(null,p1__31891_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31903){
var self__ = this;
var _31903__$1 = this;
return self__.meta31902;
});})(___$1))
;

cljs.core.async.t31901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31903,meta31902__$1){
var self__ = this;
var _31903__$1 = this;
return (new cljs.core.async.t31901(self__.fn1,self__._,self__.meta31899,self__.map_LT_,self__.f,self__.ch,meta31902__$1));
});})(___$1))
;

cljs.core.async.t31901.cljs$lang$type = true;

cljs.core.async.t31901.cljs$lang$ctorStr = "cljs.core.async/t31901";

cljs.core.async.t31901.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31901");
});})(___$1))
;

cljs.core.async.__GT_t31901 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31901(fn1__$1,___$2,meta31899__$1,map_LT___$1,f__$1,ch__$1,meta31902){
return (new cljs.core.async.t31901(fn1__$1,___$2,meta31899__$1,map_LT___$1,f__$1,ch__$1,meta31902));
});})(___$1))
;

}

return (new cljs.core.async.t31901(fn1,___$1,self__.meta31899,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31900){
var self__ = this;
var _31900__$1 = this;
return self__.meta31899;
});

cljs.core.async.t31898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31900,meta31899__$1){
var self__ = this;
var _31900__$1 = this;
return (new cljs.core.async.t31898(self__.ch,self__.f,self__.map_LT_,meta31899__$1));
});

cljs.core.async.t31898.cljs$lang$type = true;

cljs.core.async.t31898.cljs$lang$ctorStr = "cljs.core.async/t31898";

cljs.core.async.t31898.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31898");
});

cljs.core.async.__GT_t31898 = (function cljs$core$async$map_LT__$___GT_t31898(ch__$1,f__$1,map_LT___$1,meta31899){
return (new cljs.core.async.t31898(ch__$1,f__$1,map_LT___$1,meta31899));
});

}

return (new cljs.core.async.t31898(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31907 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31907 = (function (ch,f,map_GT_,meta31908){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31908 = meta31908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31907.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31907.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31907.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31909){
var self__ = this;
var _31909__$1 = this;
return self__.meta31908;
});

cljs.core.async.t31907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31909,meta31908__$1){
var self__ = this;
var _31909__$1 = this;
return (new cljs.core.async.t31907(self__.ch,self__.f,self__.map_GT_,meta31908__$1));
});

cljs.core.async.t31907.cljs$lang$type = true;

cljs.core.async.t31907.cljs$lang$ctorStr = "cljs.core.async/t31907";

cljs.core.async.t31907.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31907");
});

cljs.core.async.__GT_t31907 = (function cljs$core$async$map_GT__$___GT_t31907(ch__$1,f__$1,map_GT___$1,meta31908){
return (new cljs.core.async.t31907(ch__$1,f__$1,map_GT___$1,meta31908));
});

}

return (new cljs.core.async.t31907(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31913 = (function (ch,p,filter_GT_,meta31914){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31914 = meta31914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31915){
var self__ = this;
var _31915__$1 = this;
return self__.meta31914;
});

cljs.core.async.t31913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31915,meta31914__$1){
var self__ = this;
var _31915__$1 = this;
return (new cljs.core.async.t31913(self__.ch,self__.p,self__.filter_GT_,meta31914__$1));
});

cljs.core.async.t31913.cljs$lang$type = true;

cljs.core.async.t31913.cljs$lang$ctorStr = "cljs.core.async/t31913";

cljs.core.async.t31913.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31913");
});

cljs.core.async.__GT_t31913 = (function cljs$core$async$filter_GT__$___GT_t31913(ch__$1,p__$1,filter_GT___$1,meta31914){
return (new cljs.core.async.t31913(ch__$1,p__$1,filter_GT___$1,meta31914));
});

}

return (new cljs.core.async.t31913(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31917 = arguments.length;
switch (G__31917) {
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
var c__23229__auto___31960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___31960,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___31960,out){
return (function (state_31938){
var state_val_31939 = (state_31938[(1)]);
if((state_val_31939 === (7))){
var inst_31934 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
var statearr_31940_31961 = state_31938__$1;
(statearr_31940_31961[(2)] = inst_31934);

(statearr_31940_31961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (1))){
var state_31938__$1 = state_31938;
var statearr_31941_31962 = state_31938__$1;
(statearr_31941_31962[(2)] = null);

(statearr_31941_31962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (4))){
var inst_31920 = (state_31938[(7)]);
var inst_31920__$1 = (state_31938[(2)]);
var inst_31921 = (inst_31920__$1 == null);
var state_31938__$1 = (function (){var statearr_31942 = state_31938;
(statearr_31942[(7)] = inst_31920__$1);

return statearr_31942;
})();
if(cljs.core.truth_(inst_31921)){
var statearr_31943_31963 = state_31938__$1;
(statearr_31943_31963[(1)] = (5));

} else {
var statearr_31944_31964 = state_31938__$1;
(statearr_31944_31964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (6))){
var inst_31920 = (state_31938[(7)]);
var inst_31925 = p.call(null,inst_31920);
var state_31938__$1 = state_31938;
if(cljs.core.truth_(inst_31925)){
var statearr_31945_31965 = state_31938__$1;
(statearr_31945_31965[(1)] = (8));

} else {
var statearr_31946_31966 = state_31938__$1;
(statearr_31946_31966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (3))){
var inst_31936 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31938__$1,inst_31936);
} else {
if((state_val_31939 === (2))){
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31938__$1,(4),ch);
} else {
if((state_val_31939 === (11))){
var inst_31928 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
var statearr_31947_31967 = state_31938__$1;
(statearr_31947_31967[(2)] = inst_31928);

(statearr_31947_31967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (9))){
var state_31938__$1 = state_31938;
var statearr_31948_31968 = state_31938__$1;
(statearr_31948_31968[(2)] = null);

(statearr_31948_31968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (5))){
var inst_31923 = cljs.core.async.close_BANG_.call(null,out);
var state_31938__$1 = state_31938;
var statearr_31949_31969 = state_31938__$1;
(statearr_31949_31969[(2)] = inst_31923);

(statearr_31949_31969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (10))){
var inst_31931 = (state_31938[(2)]);
var state_31938__$1 = (function (){var statearr_31950 = state_31938;
(statearr_31950[(8)] = inst_31931);

return statearr_31950;
})();
var statearr_31951_31970 = state_31938__$1;
(statearr_31951_31970[(2)] = null);

(statearr_31951_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (8))){
var inst_31920 = (state_31938[(7)]);
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31938__$1,(11),out,inst_31920);
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
});})(c__23229__auto___31960,out))
;
return ((function (switch__23214__auto__,c__23229__auto___31960,out){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_31955 = [null,null,null,null,null,null,null,null,null];
(statearr_31955[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_31955[(1)] = (1));

return statearr_31955;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_31938){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_31938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e31956){if((e31956 instanceof Object)){
var ex__23218__auto__ = e31956;
var statearr_31957_31971 = state_31938;
(statearr_31957_31971[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31972 = state_31938;
state_31938 = G__31972;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_31938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_31938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___31960,out))
})();
var state__23231__auto__ = (function (){var statearr_31958 = f__23230__auto__.call(null);
(statearr_31958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___31960);

return statearr_31958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___31960,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__31974 = arguments.length;
switch (G__31974) {
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
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_32141){
var state_val_32142 = (state_32141[(1)]);
if((state_val_32142 === (7))){
var inst_32137 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32143_32184 = state_32141__$1;
(statearr_32143_32184[(2)] = inst_32137);

(statearr_32143_32184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (20))){
var inst_32107 = (state_32141[(7)]);
var inst_32118 = (state_32141[(2)]);
var inst_32119 = cljs.core.next.call(null,inst_32107);
var inst_32093 = inst_32119;
var inst_32094 = null;
var inst_32095 = (0);
var inst_32096 = (0);
var state_32141__$1 = (function (){var statearr_32144 = state_32141;
(statearr_32144[(8)] = inst_32094);

(statearr_32144[(9)] = inst_32096);

(statearr_32144[(10)] = inst_32093);

(statearr_32144[(11)] = inst_32118);

(statearr_32144[(12)] = inst_32095);

return statearr_32144;
})();
var statearr_32145_32185 = state_32141__$1;
(statearr_32145_32185[(2)] = null);

(statearr_32145_32185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (1))){
var state_32141__$1 = state_32141;
var statearr_32146_32186 = state_32141__$1;
(statearr_32146_32186[(2)] = null);

(statearr_32146_32186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (4))){
var inst_32082 = (state_32141[(13)]);
var inst_32082__$1 = (state_32141[(2)]);
var inst_32083 = (inst_32082__$1 == null);
var state_32141__$1 = (function (){var statearr_32147 = state_32141;
(statearr_32147[(13)] = inst_32082__$1);

return statearr_32147;
})();
if(cljs.core.truth_(inst_32083)){
var statearr_32148_32187 = state_32141__$1;
(statearr_32148_32187[(1)] = (5));

} else {
var statearr_32149_32188 = state_32141__$1;
(statearr_32149_32188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (15))){
var state_32141__$1 = state_32141;
var statearr_32153_32189 = state_32141__$1;
(statearr_32153_32189[(2)] = null);

(statearr_32153_32189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (21))){
var state_32141__$1 = state_32141;
var statearr_32154_32190 = state_32141__$1;
(statearr_32154_32190[(2)] = null);

(statearr_32154_32190[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (13))){
var inst_32094 = (state_32141[(8)]);
var inst_32096 = (state_32141[(9)]);
var inst_32093 = (state_32141[(10)]);
var inst_32095 = (state_32141[(12)]);
var inst_32103 = (state_32141[(2)]);
var inst_32104 = (inst_32096 + (1));
var tmp32150 = inst_32094;
var tmp32151 = inst_32093;
var tmp32152 = inst_32095;
var inst_32093__$1 = tmp32151;
var inst_32094__$1 = tmp32150;
var inst_32095__$1 = tmp32152;
var inst_32096__$1 = inst_32104;
var state_32141__$1 = (function (){var statearr_32155 = state_32141;
(statearr_32155[(8)] = inst_32094__$1);

(statearr_32155[(9)] = inst_32096__$1);

(statearr_32155[(14)] = inst_32103);

(statearr_32155[(10)] = inst_32093__$1);

(statearr_32155[(12)] = inst_32095__$1);

return statearr_32155;
})();
var statearr_32156_32191 = state_32141__$1;
(statearr_32156_32191[(2)] = null);

(statearr_32156_32191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (22))){
var state_32141__$1 = state_32141;
var statearr_32157_32192 = state_32141__$1;
(statearr_32157_32192[(2)] = null);

(statearr_32157_32192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (6))){
var inst_32082 = (state_32141[(13)]);
var inst_32091 = f.call(null,inst_32082);
var inst_32092 = cljs.core.seq.call(null,inst_32091);
var inst_32093 = inst_32092;
var inst_32094 = null;
var inst_32095 = (0);
var inst_32096 = (0);
var state_32141__$1 = (function (){var statearr_32158 = state_32141;
(statearr_32158[(8)] = inst_32094);

(statearr_32158[(9)] = inst_32096);

(statearr_32158[(10)] = inst_32093);

(statearr_32158[(12)] = inst_32095);

return statearr_32158;
})();
var statearr_32159_32193 = state_32141__$1;
(statearr_32159_32193[(2)] = null);

(statearr_32159_32193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (17))){
var inst_32107 = (state_32141[(7)]);
var inst_32111 = cljs.core.chunk_first.call(null,inst_32107);
var inst_32112 = cljs.core.chunk_rest.call(null,inst_32107);
var inst_32113 = cljs.core.count.call(null,inst_32111);
var inst_32093 = inst_32112;
var inst_32094 = inst_32111;
var inst_32095 = inst_32113;
var inst_32096 = (0);
var state_32141__$1 = (function (){var statearr_32160 = state_32141;
(statearr_32160[(8)] = inst_32094);

(statearr_32160[(9)] = inst_32096);

(statearr_32160[(10)] = inst_32093);

(statearr_32160[(12)] = inst_32095);

return statearr_32160;
})();
var statearr_32161_32194 = state_32141__$1;
(statearr_32161_32194[(2)] = null);

(statearr_32161_32194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (3))){
var inst_32139 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32141__$1,inst_32139);
} else {
if((state_val_32142 === (12))){
var inst_32127 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32162_32195 = state_32141__$1;
(statearr_32162_32195[(2)] = inst_32127);

(statearr_32162_32195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (2))){
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32141__$1,(4),in$);
} else {
if((state_val_32142 === (23))){
var inst_32135 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32163_32196 = state_32141__$1;
(statearr_32163_32196[(2)] = inst_32135);

(statearr_32163_32196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (19))){
var inst_32122 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32164_32197 = state_32141__$1;
(statearr_32164_32197[(2)] = inst_32122);

(statearr_32164_32197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (11))){
var inst_32107 = (state_32141[(7)]);
var inst_32093 = (state_32141[(10)]);
var inst_32107__$1 = cljs.core.seq.call(null,inst_32093);
var state_32141__$1 = (function (){var statearr_32165 = state_32141;
(statearr_32165[(7)] = inst_32107__$1);

return statearr_32165;
})();
if(inst_32107__$1){
var statearr_32166_32198 = state_32141__$1;
(statearr_32166_32198[(1)] = (14));

} else {
var statearr_32167_32199 = state_32141__$1;
(statearr_32167_32199[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (9))){
var inst_32129 = (state_32141[(2)]);
var inst_32130 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32141__$1 = (function (){var statearr_32168 = state_32141;
(statearr_32168[(15)] = inst_32129);

return statearr_32168;
})();
if(cljs.core.truth_(inst_32130)){
var statearr_32169_32200 = state_32141__$1;
(statearr_32169_32200[(1)] = (21));

} else {
var statearr_32170_32201 = state_32141__$1;
(statearr_32170_32201[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (5))){
var inst_32085 = cljs.core.async.close_BANG_.call(null,out);
var state_32141__$1 = state_32141;
var statearr_32171_32202 = state_32141__$1;
(statearr_32171_32202[(2)] = inst_32085);

(statearr_32171_32202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (14))){
var inst_32107 = (state_32141[(7)]);
var inst_32109 = cljs.core.chunked_seq_QMARK_.call(null,inst_32107);
var state_32141__$1 = state_32141;
if(inst_32109){
var statearr_32172_32203 = state_32141__$1;
(statearr_32172_32203[(1)] = (17));

} else {
var statearr_32173_32204 = state_32141__$1;
(statearr_32173_32204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (16))){
var inst_32125 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32174_32205 = state_32141__$1;
(statearr_32174_32205[(2)] = inst_32125);

(statearr_32174_32205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (10))){
var inst_32094 = (state_32141[(8)]);
var inst_32096 = (state_32141[(9)]);
var inst_32101 = cljs.core._nth.call(null,inst_32094,inst_32096);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32141__$1,(13),out,inst_32101);
} else {
if((state_val_32142 === (18))){
var inst_32107 = (state_32141[(7)]);
var inst_32116 = cljs.core.first.call(null,inst_32107);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32141__$1,(20),out,inst_32116);
} else {
if((state_val_32142 === (8))){
var inst_32096 = (state_32141[(9)]);
var inst_32095 = (state_32141[(12)]);
var inst_32098 = (inst_32096 < inst_32095);
var inst_32099 = inst_32098;
var state_32141__$1 = state_32141;
if(cljs.core.truth_(inst_32099)){
var statearr_32175_32206 = state_32141__$1;
(statearr_32175_32206[(1)] = (10));

} else {
var statearr_32176_32207 = state_32141__$1;
(statearr_32176_32207[(1)] = (11));

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
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23215__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23215__auto____0 = (function (){
var statearr_32180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32180[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23215__auto__);

(statearr_32180[(1)] = (1));

return statearr_32180;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23215__auto____1 = (function (state_32141){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_32141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e32181){if((e32181 instanceof Object)){
var ex__23218__auto__ = e32181;
var statearr_32182_32208 = state_32141;
(statearr_32182_32208[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32209 = state_32141;
state_32141 = G__32209;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23215__auto__ = function(state_32141){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23215__auto____1.call(this,state_32141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23215__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23215__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_32183 = f__23230__auto__.call(null);
(statearr_32183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_32183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__32211 = arguments.length;
switch (G__32211) {
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
var G__32214 = arguments.length;
switch (G__32214) {
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
var G__32217 = arguments.length;
switch (G__32217) {
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
var c__23229__auto___32267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___32267,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___32267,out){
return (function (state_32241){
var state_val_32242 = (state_32241[(1)]);
if((state_val_32242 === (7))){
var inst_32236 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32243_32268 = state_32241__$1;
(statearr_32243_32268[(2)] = inst_32236);

(statearr_32243_32268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (1))){
var inst_32218 = null;
var state_32241__$1 = (function (){var statearr_32244 = state_32241;
(statearr_32244[(7)] = inst_32218);

return statearr_32244;
})();
var statearr_32245_32269 = state_32241__$1;
(statearr_32245_32269[(2)] = null);

(statearr_32245_32269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (4))){
var inst_32221 = (state_32241[(8)]);
var inst_32221__$1 = (state_32241[(2)]);
var inst_32222 = (inst_32221__$1 == null);
var inst_32223 = cljs.core.not.call(null,inst_32222);
var state_32241__$1 = (function (){var statearr_32246 = state_32241;
(statearr_32246[(8)] = inst_32221__$1);

return statearr_32246;
})();
if(inst_32223){
var statearr_32247_32270 = state_32241__$1;
(statearr_32247_32270[(1)] = (5));

} else {
var statearr_32248_32271 = state_32241__$1;
(statearr_32248_32271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (6))){
var state_32241__$1 = state_32241;
var statearr_32249_32272 = state_32241__$1;
(statearr_32249_32272[(2)] = null);

(statearr_32249_32272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (3))){
var inst_32238 = (state_32241[(2)]);
var inst_32239 = cljs.core.async.close_BANG_.call(null,out);
var state_32241__$1 = (function (){var statearr_32250 = state_32241;
(statearr_32250[(9)] = inst_32238);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32241__$1,inst_32239);
} else {
if((state_val_32242 === (2))){
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32241__$1,(4),ch);
} else {
if((state_val_32242 === (11))){
var inst_32221 = (state_32241[(8)]);
var inst_32230 = (state_32241[(2)]);
var inst_32218 = inst_32221;
var state_32241__$1 = (function (){var statearr_32251 = state_32241;
(statearr_32251[(7)] = inst_32218);

(statearr_32251[(10)] = inst_32230);

return statearr_32251;
})();
var statearr_32252_32273 = state_32241__$1;
(statearr_32252_32273[(2)] = null);

(statearr_32252_32273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (9))){
var inst_32221 = (state_32241[(8)]);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32241__$1,(11),out,inst_32221);
} else {
if((state_val_32242 === (5))){
var inst_32221 = (state_32241[(8)]);
var inst_32218 = (state_32241[(7)]);
var inst_32225 = cljs.core._EQ_.call(null,inst_32221,inst_32218);
var state_32241__$1 = state_32241;
if(inst_32225){
var statearr_32254_32274 = state_32241__$1;
(statearr_32254_32274[(1)] = (8));

} else {
var statearr_32255_32275 = state_32241__$1;
(statearr_32255_32275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (10))){
var inst_32233 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32256_32276 = state_32241__$1;
(statearr_32256_32276[(2)] = inst_32233);

(statearr_32256_32276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (8))){
var inst_32218 = (state_32241[(7)]);
var tmp32253 = inst_32218;
var inst_32218__$1 = tmp32253;
var state_32241__$1 = (function (){var statearr_32257 = state_32241;
(statearr_32257[(7)] = inst_32218__$1);

return statearr_32257;
})();
var statearr_32258_32277 = state_32241__$1;
(statearr_32258_32277[(2)] = null);

(statearr_32258_32277[(1)] = (2));


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
});})(c__23229__auto___32267,out))
;
return ((function (switch__23214__auto__,c__23229__auto___32267,out){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_32262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32262[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_32262[(1)] = (1));

return statearr_32262;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_32241){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_32241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e32263){if((e32263 instanceof Object)){
var ex__23218__auto__ = e32263;
var statearr_32264_32278 = state_32241;
(statearr_32264_32278[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32279 = state_32241;
state_32241 = G__32279;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_32241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_32241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___32267,out))
})();
var state__23231__auto__ = (function (){var statearr_32265 = f__23230__auto__.call(null);
(statearr_32265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___32267);

return statearr_32265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___32267,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__32281 = arguments.length;
switch (G__32281) {
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
var c__23229__auto___32350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___32350,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___32350,out){
return (function (state_32319){
var state_val_32320 = (state_32319[(1)]);
if((state_val_32320 === (7))){
var inst_32315 = (state_32319[(2)]);
var state_32319__$1 = state_32319;
var statearr_32321_32351 = state_32319__$1;
(statearr_32321_32351[(2)] = inst_32315);

(statearr_32321_32351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (1))){
var inst_32282 = (new Array(n));
var inst_32283 = inst_32282;
var inst_32284 = (0);
var state_32319__$1 = (function (){var statearr_32322 = state_32319;
(statearr_32322[(7)] = inst_32283);

(statearr_32322[(8)] = inst_32284);

return statearr_32322;
})();
var statearr_32323_32352 = state_32319__$1;
(statearr_32323_32352[(2)] = null);

(statearr_32323_32352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (4))){
var inst_32287 = (state_32319[(9)]);
var inst_32287__$1 = (state_32319[(2)]);
var inst_32288 = (inst_32287__$1 == null);
var inst_32289 = cljs.core.not.call(null,inst_32288);
var state_32319__$1 = (function (){var statearr_32324 = state_32319;
(statearr_32324[(9)] = inst_32287__$1);

return statearr_32324;
})();
if(inst_32289){
var statearr_32325_32353 = state_32319__$1;
(statearr_32325_32353[(1)] = (5));

} else {
var statearr_32326_32354 = state_32319__$1;
(statearr_32326_32354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (15))){
var inst_32309 = (state_32319[(2)]);
var state_32319__$1 = state_32319;
var statearr_32327_32355 = state_32319__$1;
(statearr_32327_32355[(2)] = inst_32309);

(statearr_32327_32355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (13))){
var state_32319__$1 = state_32319;
var statearr_32328_32356 = state_32319__$1;
(statearr_32328_32356[(2)] = null);

(statearr_32328_32356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (6))){
var inst_32284 = (state_32319[(8)]);
var inst_32305 = (inst_32284 > (0));
var state_32319__$1 = state_32319;
if(cljs.core.truth_(inst_32305)){
var statearr_32329_32357 = state_32319__$1;
(statearr_32329_32357[(1)] = (12));

} else {
var statearr_32330_32358 = state_32319__$1;
(statearr_32330_32358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (3))){
var inst_32317 = (state_32319[(2)]);
var state_32319__$1 = state_32319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32319__$1,inst_32317);
} else {
if((state_val_32320 === (12))){
var inst_32283 = (state_32319[(7)]);
var inst_32307 = cljs.core.vec.call(null,inst_32283);
var state_32319__$1 = state_32319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32319__$1,(15),out,inst_32307);
} else {
if((state_val_32320 === (2))){
var state_32319__$1 = state_32319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32319__$1,(4),ch);
} else {
if((state_val_32320 === (11))){
var inst_32299 = (state_32319[(2)]);
var inst_32300 = (new Array(n));
var inst_32283 = inst_32300;
var inst_32284 = (0);
var state_32319__$1 = (function (){var statearr_32331 = state_32319;
(statearr_32331[(10)] = inst_32299);

(statearr_32331[(7)] = inst_32283);

(statearr_32331[(8)] = inst_32284);

return statearr_32331;
})();
var statearr_32332_32359 = state_32319__$1;
(statearr_32332_32359[(2)] = null);

(statearr_32332_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (9))){
var inst_32283 = (state_32319[(7)]);
var inst_32297 = cljs.core.vec.call(null,inst_32283);
var state_32319__$1 = state_32319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32319__$1,(11),out,inst_32297);
} else {
if((state_val_32320 === (5))){
var inst_32283 = (state_32319[(7)]);
var inst_32284 = (state_32319[(8)]);
var inst_32292 = (state_32319[(11)]);
var inst_32287 = (state_32319[(9)]);
var inst_32291 = (inst_32283[inst_32284] = inst_32287);
var inst_32292__$1 = (inst_32284 + (1));
var inst_32293 = (inst_32292__$1 < n);
var state_32319__$1 = (function (){var statearr_32333 = state_32319;
(statearr_32333[(12)] = inst_32291);

(statearr_32333[(11)] = inst_32292__$1);

return statearr_32333;
})();
if(cljs.core.truth_(inst_32293)){
var statearr_32334_32360 = state_32319__$1;
(statearr_32334_32360[(1)] = (8));

} else {
var statearr_32335_32361 = state_32319__$1;
(statearr_32335_32361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (14))){
var inst_32312 = (state_32319[(2)]);
var inst_32313 = cljs.core.async.close_BANG_.call(null,out);
var state_32319__$1 = (function (){var statearr_32337 = state_32319;
(statearr_32337[(13)] = inst_32312);

return statearr_32337;
})();
var statearr_32338_32362 = state_32319__$1;
(statearr_32338_32362[(2)] = inst_32313);

(statearr_32338_32362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (10))){
var inst_32303 = (state_32319[(2)]);
var state_32319__$1 = state_32319;
var statearr_32339_32363 = state_32319__$1;
(statearr_32339_32363[(2)] = inst_32303);

(statearr_32339_32363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32320 === (8))){
var inst_32283 = (state_32319[(7)]);
var inst_32292 = (state_32319[(11)]);
var tmp32336 = inst_32283;
var inst_32283__$1 = tmp32336;
var inst_32284 = inst_32292;
var state_32319__$1 = (function (){var statearr_32340 = state_32319;
(statearr_32340[(7)] = inst_32283__$1);

(statearr_32340[(8)] = inst_32284);

return statearr_32340;
})();
var statearr_32341_32364 = state_32319__$1;
(statearr_32341_32364[(2)] = null);

(statearr_32341_32364[(1)] = (2));


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
});})(c__23229__auto___32350,out))
;
return ((function (switch__23214__auto__,c__23229__auto___32350,out){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_32345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32345[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_32345[(1)] = (1));

return statearr_32345;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_32319){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_32319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e32346){if((e32346 instanceof Object)){
var ex__23218__auto__ = e32346;
var statearr_32347_32365 = state_32319;
(statearr_32347_32365[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32366 = state_32319;
state_32319 = G__32366;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_32319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_32319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___32350,out))
})();
var state__23231__auto__ = (function (){var statearr_32348 = f__23230__auto__.call(null);
(statearr_32348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___32350);

return statearr_32348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___32350,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__32368 = arguments.length;
switch (G__32368) {
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
var c__23229__auto___32441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___32441,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___32441,out){
return (function (state_32410){
var state_val_32411 = (state_32410[(1)]);
if((state_val_32411 === (7))){
var inst_32406 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32412_32442 = state_32410__$1;
(statearr_32412_32442[(2)] = inst_32406);

(statearr_32412_32442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (1))){
var inst_32369 = [];
var inst_32370 = inst_32369;
var inst_32371 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32410__$1 = (function (){var statearr_32413 = state_32410;
(statearr_32413[(7)] = inst_32370);

(statearr_32413[(8)] = inst_32371);

return statearr_32413;
})();
var statearr_32414_32443 = state_32410__$1;
(statearr_32414_32443[(2)] = null);

(statearr_32414_32443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (4))){
var inst_32374 = (state_32410[(9)]);
var inst_32374__$1 = (state_32410[(2)]);
var inst_32375 = (inst_32374__$1 == null);
var inst_32376 = cljs.core.not.call(null,inst_32375);
var state_32410__$1 = (function (){var statearr_32415 = state_32410;
(statearr_32415[(9)] = inst_32374__$1);

return statearr_32415;
})();
if(inst_32376){
var statearr_32416_32444 = state_32410__$1;
(statearr_32416_32444[(1)] = (5));

} else {
var statearr_32417_32445 = state_32410__$1;
(statearr_32417_32445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (15))){
var inst_32400 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32418_32446 = state_32410__$1;
(statearr_32418_32446[(2)] = inst_32400);

(statearr_32418_32446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (13))){
var state_32410__$1 = state_32410;
var statearr_32419_32447 = state_32410__$1;
(statearr_32419_32447[(2)] = null);

(statearr_32419_32447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (6))){
var inst_32370 = (state_32410[(7)]);
var inst_32395 = inst_32370.length;
var inst_32396 = (inst_32395 > (0));
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32396)){
var statearr_32420_32448 = state_32410__$1;
(statearr_32420_32448[(1)] = (12));

} else {
var statearr_32421_32449 = state_32410__$1;
(statearr_32421_32449[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (3))){
var inst_32408 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32410__$1,inst_32408);
} else {
if((state_val_32411 === (12))){
var inst_32370 = (state_32410[(7)]);
var inst_32398 = cljs.core.vec.call(null,inst_32370);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32410__$1,(15),out,inst_32398);
} else {
if((state_val_32411 === (2))){
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(4),ch);
} else {
if((state_val_32411 === (11))){
var inst_32374 = (state_32410[(9)]);
var inst_32378 = (state_32410[(10)]);
var inst_32388 = (state_32410[(2)]);
var inst_32389 = [];
var inst_32390 = inst_32389.push(inst_32374);
var inst_32370 = inst_32389;
var inst_32371 = inst_32378;
var state_32410__$1 = (function (){var statearr_32422 = state_32410;
(statearr_32422[(7)] = inst_32370);

(statearr_32422[(11)] = inst_32388);

(statearr_32422[(12)] = inst_32390);

(statearr_32422[(8)] = inst_32371);

return statearr_32422;
})();
var statearr_32423_32450 = state_32410__$1;
(statearr_32423_32450[(2)] = null);

(statearr_32423_32450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (9))){
var inst_32370 = (state_32410[(7)]);
var inst_32386 = cljs.core.vec.call(null,inst_32370);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32410__$1,(11),out,inst_32386);
} else {
if((state_val_32411 === (5))){
var inst_32374 = (state_32410[(9)]);
var inst_32378 = (state_32410[(10)]);
var inst_32371 = (state_32410[(8)]);
var inst_32378__$1 = f.call(null,inst_32374);
var inst_32379 = cljs.core._EQ_.call(null,inst_32378__$1,inst_32371);
var inst_32380 = cljs.core.keyword_identical_QMARK_.call(null,inst_32371,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32381 = (inst_32379) || (inst_32380);
var state_32410__$1 = (function (){var statearr_32424 = state_32410;
(statearr_32424[(10)] = inst_32378__$1);

return statearr_32424;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32425_32451 = state_32410__$1;
(statearr_32425_32451[(1)] = (8));

} else {
var statearr_32426_32452 = state_32410__$1;
(statearr_32426_32452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (14))){
var inst_32403 = (state_32410[(2)]);
var inst_32404 = cljs.core.async.close_BANG_.call(null,out);
var state_32410__$1 = (function (){var statearr_32428 = state_32410;
(statearr_32428[(13)] = inst_32403);

return statearr_32428;
})();
var statearr_32429_32453 = state_32410__$1;
(statearr_32429_32453[(2)] = inst_32404);

(statearr_32429_32453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (10))){
var inst_32393 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32430_32454 = state_32410__$1;
(statearr_32430_32454[(2)] = inst_32393);

(statearr_32430_32454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (8))){
var inst_32374 = (state_32410[(9)]);
var inst_32370 = (state_32410[(7)]);
var inst_32378 = (state_32410[(10)]);
var inst_32383 = inst_32370.push(inst_32374);
var tmp32427 = inst_32370;
var inst_32370__$1 = tmp32427;
var inst_32371 = inst_32378;
var state_32410__$1 = (function (){var statearr_32431 = state_32410;
(statearr_32431[(7)] = inst_32370__$1);

(statearr_32431[(14)] = inst_32383);

(statearr_32431[(8)] = inst_32371);

return statearr_32431;
})();
var statearr_32432_32455 = state_32410__$1;
(statearr_32432_32455[(2)] = null);

(statearr_32432_32455[(1)] = (2));


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
});})(c__23229__auto___32441,out))
;
return ((function (switch__23214__auto__,c__23229__auto___32441,out){
return (function() {
var cljs$core$async$state_machine__23215__auto__ = null;
var cljs$core$async$state_machine__23215__auto____0 = (function (){
var statearr_32436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32436[(0)] = cljs$core$async$state_machine__23215__auto__);

(statearr_32436[(1)] = (1));

return statearr_32436;
});
var cljs$core$async$state_machine__23215__auto____1 = (function (state_32410){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_32410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object)){
var ex__23218__auto__ = e32437;
var statearr_32438_32456 = state_32410;
(statearr_32438_32456[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32457 = state_32410;
state_32410 = G__32457;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
cljs$core$async$state_machine__23215__auto__ = function(state_32410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23215__auto____1.call(this,state_32410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23215__auto____0;
cljs$core$async$state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23215__auto____1;
return cljs$core$async$state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___32441,out))
})();
var state__23231__auto__ = (function (){var statearr_32439 = f__23230__auto__.call(null);
(statearr_32439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___32441);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___32441,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1432432041216