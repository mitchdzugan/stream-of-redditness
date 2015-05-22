// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__21043_21047 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__21044_21048 = null;
var count__21045_21049 = (0);
var i__21046_21050 = (0);
while(true){
if((i__21046_21050 < count__21045_21049)){
var k_21051 = cljs.core._nth.call(null,chunk__21044_21048,i__21046_21050);
var v_21052 = (b[k_21051]);
(a[k_21051] = v_21052);

var G__21053 = seq__21043_21047;
var G__21054 = chunk__21044_21048;
var G__21055 = count__21045_21049;
var G__21056 = (i__21046_21050 + (1));
seq__21043_21047 = G__21053;
chunk__21044_21048 = G__21054;
count__21045_21049 = G__21055;
i__21046_21050 = G__21056;
continue;
} else {
var temp__4126__auto___21057 = cljs.core.seq.call(null,seq__21043_21047);
if(temp__4126__auto___21057){
var seq__21043_21058__$1 = temp__4126__auto___21057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21043_21058__$1)){
var c__18902__auto___21059 = cljs.core.chunk_first.call(null,seq__21043_21058__$1);
var G__21060 = cljs.core.chunk_rest.call(null,seq__21043_21058__$1);
var G__21061 = c__18902__auto___21059;
var G__21062 = cljs.core.count.call(null,c__18902__auto___21059);
var G__21063 = (0);
seq__21043_21047 = G__21060;
chunk__21044_21048 = G__21061;
count__21045_21049 = G__21062;
i__21046_21050 = G__21063;
continue;
} else {
var k_21064 = cljs.core.first.call(null,seq__21043_21058__$1);
var v_21065 = (b[k_21064]);
(a[k_21064] = v_21065);

var G__21066 = cljs.core.next.call(null,seq__21043_21058__$1);
var G__21067 = null;
var G__21068 = (0);
var G__21069 = (0);
seq__21043_21047 = G__21066;
chunk__21044_21048 = G__21067;
count__21045_21049 = G__21068;
i__21046_21050 = G__21069;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__21071 = arguments.length;
switch (G__21071) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__21073 = (i + (2));
var G__21074 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21073;
ret = G__21074;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21075_21079 = cljs.core.seq.call(null,v);
var chunk__21076_21080 = null;
var count__21077_21081 = (0);
var i__21078_21082 = (0);
while(true){
if((i__21078_21082 < count__21077_21081)){
var x_21083 = cljs.core._nth.call(null,chunk__21076_21080,i__21078_21082);
ret.push(x_21083);

var G__21084 = seq__21075_21079;
var G__21085 = chunk__21076_21080;
var G__21086 = count__21077_21081;
var G__21087 = (i__21078_21082 + (1));
seq__21075_21079 = G__21084;
chunk__21076_21080 = G__21085;
count__21077_21081 = G__21086;
i__21078_21082 = G__21087;
continue;
} else {
var temp__4126__auto___21088 = cljs.core.seq.call(null,seq__21075_21079);
if(temp__4126__auto___21088){
var seq__21075_21089__$1 = temp__4126__auto___21088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21075_21089__$1)){
var c__18902__auto___21090 = cljs.core.chunk_first.call(null,seq__21075_21089__$1);
var G__21091 = cljs.core.chunk_rest.call(null,seq__21075_21089__$1);
var G__21092 = c__18902__auto___21090;
var G__21093 = cljs.core.count.call(null,c__18902__auto___21090);
var G__21094 = (0);
seq__21075_21079 = G__21091;
chunk__21076_21080 = G__21092;
count__21077_21081 = G__21093;
i__21078_21082 = G__21094;
continue;
} else {
var x_21095 = cljs.core.first.call(null,seq__21075_21089__$1);
ret.push(x_21095);

var G__21096 = cljs.core.next.call(null,seq__21075_21089__$1);
var G__21097 = null;
var G__21098 = (0);
var G__21099 = (0);
seq__21075_21079 = G__21096;
chunk__21076_21080 = G__21097;
count__21077_21081 = G__21098;
i__21078_21082 = G__21099;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21100_21104 = cljs.core.seq.call(null,v);
var chunk__21101_21105 = null;
var count__21102_21106 = (0);
var i__21103_21107 = (0);
while(true){
if((i__21103_21107 < count__21102_21106)){
var x_21108 = cljs.core._nth.call(null,chunk__21101_21105,i__21103_21107);
ret.push(x_21108);

var G__21109 = seq__21100_21104;
var G__21110 = chunk__21101_21105;
var G__21111 = count__21102_21106;
var G__21112 = (i__21103_21107 + (1));
seq__21100_21104 = G__21109;
chunk__21101_21105 = G__21110;
count__21102_21106 = G__21111;
i__21103_21107 = G__21112;
continue;
} else {
var temp__4126__auto___21113 = cljs.core.seq.call(null,seq__21100_21104);
if(temp__4126__auto___21113){
var seq__21100_21114__$1 = temp__4126__auto___21113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21100_21114__$1)){
var c__18902__auto___21115 = cljs.core.chunk_first.call(null,seq__21100_21114__$1);
var G__21116 = cljs.core.chunk_rest.call(null,seq__21100_21114__$1);
var G__21117 = c__18902__auto___21115;
var G__21118 = cljs.core.count.call(null,c__18902__auto___21115);
var G__21119 = (0);
seq__21100_21104 = G__21116;
chunk__21101_21105 = G__21117;
count__21102_21106 = G__21118;
i__21103_21107 = G__21119;
continue;
} else {
var x_21120 = cljs.core.first.call(null,seq__21100_21114__$1);
ret.push(x_21120);

var G__21121 = cljs.core.next.call(null,seq__21100_21114__$1);
var G__21122 = null;
var G__21123 = (0);
var G__21124 = (0);
seq__21100_21104 = G__21121;
chunk__21101_21105 = G__21122;
count__21102_21106 = G__21123;
i__21103_21107 = G__21124;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21125_21129 = cljs.core.seq.call(null,v);
var chunk__21126_21130 = null;
var count__21127_21131 = (0);
var i__21128_21132 = (0);
while(true){
if((i__21128_21132 < count__21127_21131)){
var x_21133 = cljs.core._nth.call(null,chunk__21126_21130,i__21128_21132);
ret.push(x_21133);

var G__21134 = seq__21125_21129;
var G__21135 = chunk__21126_21130;
var G__21136 = count__21127_21131;
var G__21137 = (i__21128_21132 + (1));
seq__21125_21129 = G__21134;
chunk__21126_21130 = G__21135;
count__21127_21131 = G__21136;
i__21128_21132 = G__21137;
continue;
} else {
var temp__4126__auto___21138 = cljs.core.seq.call(null,seq__21125_21129);
if(temp__4126__auto___21138){
var seq__21125_21139__$1 = temp__4126__auto___21138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21125_21139__$1)){
var c__18902__auto___21140 = cljs.core.chunk_first.call(null,seq__21125_21139__$1);
var G__21141 = cljs.core.chunk_rest.call(null,seq__21125_21139__$1);
var G__21142 = c__18902__auto___21140;
var G__21143 = cljs.core.count.call(null,c__18902__auto___21140);
var G__21144 = (0);
seq__21125_21129 = G__21141;
chunk__21126_21130 = G__21142;
count__21127_21131 = G__21143;
i__21128_21132 = G__21144;
continue;
} else {
var x_21145 = cljs.core.first.call(null,seq__21125_21139__$1);
ret.push(x_21145);

var G__21146 = cljs.core.next.call(null,seq__21125_21139__$1);
var G__21147 = null;
var G__21148 = (0);
var G__21149 = (0);
seq__21125_21129 = G__21146;
chunk__21126_21130 = G__21147;
count__21127_21131 = G__21148;
i__21128_21132 = G__21149;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__21151 = arguments.length;
switch (G__21151) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21153 = cljs.core.clone.call(null,handlers);
x21153.forEach = ((function (x21153,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21154 = cljs.core.seq.call(null,coll);
var chunk__21155 = null;
var count__21156 = (0);
var i__21157 = (0);
while(true){
if((i__21157 < count__21156)){
var vec__21158 = cljs.core._nth.call(null,chunk__21155,i__21157);
var k = cljs.core.nth.call(null,vec__21158,(0),null);
var v = cljs.core.nth.call(null,vec__21158,(1),null);
f.call(null,v,k);

var G__21161 = seq__21154;
var G__21162 = chunk__21155;
var G__21163 = count__21156;
var G__21164 = (i__21157 + (1));
seq__21154 = G__21161;
chunk__21155 = G__21162;
count__21156 = G__21163;
i__21157 = G__21164;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21154);
if(temp__4126__auto__){
var seq__21154__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21154__$1)){
var c__18902__auto__ = cljs.core.chunk_first.call(null,seq__21154__$1);
var G__21165 = cljs.core.chunk_rest.call(null,seq__21154__$1);
var G__21166 = c__18902__auto__;
var G__21167 = cljs.core.count.call(null,c__18902__auto__);
var G__21168 = (0);
seq__21154 = G__21165;
chunk__21155 = G__21166;
count__21156 = G__21167;
i__21157 = G__21168;
continue;
} else {
var vec__21159 = cljs.core.first.call(null,seq__21154__$1);
var k = cljs.core.nth.call(null,vec__21159,(0),null);
var v = cljs.core.nth.call(null,vec__21159,(1),null);
f.call(null,v,k);

var G__21169 = cljs.core.next.call(null,seq__21154__$1);
var G__21170 = null;
var G__21171 = (0);
var G__21172 = (0);
seq__21154 = G__21169;
chunk__21155 = G__21170;
count__21156 = G__21171;
i__21157 = G__21172;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21153,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21153;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21152 = obj;
G__21152.push(kfn.call(null,k),vfn.call(null,v));

return G__21152;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__21174 = arguments.length;
switch (G__21174) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t21175 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t21175 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta21176){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta21176 = meta21176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21175.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t21175.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t21175.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t21175.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t21175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21177){
var self__ = this;
var _21177__$1 = this;
return self__.meta21176;
});

cognitect.transit.t21175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21177,meta21176__$1){
var self__ = this;
var _21177__$1 = this;
return (new cognitect.transit.t21175(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta21176__$1));
});

cognitect.transit.t21175.cljs$lang$type = true;

cognitect.transit.t21175.cljs$lang$ctorStr = "cognitect.transit/t21175";

cognitect.transit.t21175.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"cognitect.transit/t21175");
});

cognitect.transit.__GT_t21175 = (function cognitect$transit$__GT_t21175(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta21176){
return (new cognitect.transit.t21175(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta21176));
});

}

return (new cognitect.transit.t21175(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1432104251837