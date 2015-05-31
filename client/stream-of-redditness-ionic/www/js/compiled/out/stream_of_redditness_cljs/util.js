// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.util');
goog.require('cljs.core');
stream_of_redditness_cljs.util.deep_map = (function stream_of_redditness_cljs$util$deep_map(m,f){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26396){
var vec__26397 = p__26396;
var k = cljs.core.nth.call(null,vec__26397,(0),null);
var v = cljs.core.nth.call(null,vec__26397,(1),null);
return f.call(null,((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,stream_of_redditness_cljs$util$deep_map.call(null,v,f)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)
));
}),m));
});
stream_of_redditness_cljs.util.deep_filter = (function stream_of_redditness_cljs$util$deep_filter(m,f){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26400){
var vec__26401 = p__26400;
var k = cljs.core.nth.call(null,vec__26401,(0),null);
var v = cljs.core.nth.call(null,vec__26401,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,stream_of_redditness_cljs$util$deep_filter.call(null,v,f)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}),cljs.core.filter.call(null,f,m)));
});
stream_of_redditness_cljs.util.deep_keys_to_keywords = (function stream_of_redditness_cljs$util$deep_keys_to_keywords(m){
return stream_of_redditness_cljs.util.deep_map.call(null,m,(function (p__26404){
var vec__26405 = p__26404;
var k = cljs.core.nth.call(null,vec__26405,(0),null);
var v = cljs.core.nth.call(null,vec__26405,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}));
});
stream_of_redditness_cljs.util.deep_remove_keys = (function stream_of_redditness_cljs$util$deep_remove_keys(m,ks){
return stream_of_redditness_cljs.util.deep_filter.call(null,m,(function (p1__26406_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ks,cljs.core.first.call(null,p1__26406_SHARP_)));
}));
});
stream_of_redditness_cljs.util.deep_merge = (function stream_of_redditness_cljs$util$deep_merge(m1,m2){
return cljs.core.merge_with.call(null,(function (x,y){
if(cljs.core.map_QMARK_.call(null,y)){
return stream_of_redditness_cljs$util$deep_merge.call(null,x,y);
} else {
return y;

}
}),m1,m2);
});
/**
 * Obtain the minimal changes from map1 to map2.
 * The following two expressions are always equal
 * (deep-merge m1 (map-diff m1 m2))
 * (deep-merge m1 m2)
 */
stream_of_redditness_cljs.util.map_diff = (function stream_of_redditness_cljs$util$map_diff(m1,m2){
return cljs.core.reduce.call(null,stream_of_redditness_cljs.util.deep_merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26409){
var vec__26410 = p__26409;
var k = cljs.core.nth.call(null,vec__26410,(0),null);
var v = cljs.core.nth.call(null,vec__26410,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,m1,k))){
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var nv = stream_of_redditness_cljs$util$map_diff.call(null,k.call(null,m1),v);
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,nv)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,nv], true, false);
}
} else {
if(cljs.core.seq_QMARK_.call(null,v)){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,v))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);
}
} else {
if(cljs.core._EQ_.call(null,v,k.call(null,m1))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap.fromArray([k,v], true, false);

}
}
}
}
}),m2));
});
/**
 * Obtain the size in bytes of the JSON
 * representation of the map.
 */
stream_of_redditness_cljs.util.map_size_bytes = (function stream_of_redditness_cljs$util$map_size_bytes(m){
return cljs.core.count.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,m)));
});
/**
 * Segments a map into chunks where each
 * chunk's json representation's size is less
 * than the size provided.
 * The following two expressions are always equal
 * m
 * (reduce deep-merge (chunkify-map m s)
 */
stream_of_redditness_cljs.util.chunkify_map = (function stream_of_redditness_cljs$util$chunkify_map(){
var G__26414 = arguments.length;
switch (G__26414) {
case 2:
return stream_of_redditness_cljs.util.chunkify_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return stream_of_redditness_cljs.util.chunkify_map.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

stream_of_redditness_cljs.util.chunkify_map.cljs$core$IFn$_invoke$arity$2 = (function (m,s){
return stream_of_redditness_cljs.util.chunkify_map.call(null,m,s,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

stream_of_redditness_cljs.util.chunkify_map.cljs$core$IFn$_invoke$arity$5 = (function (m,s,msi,cmi,kli){
var vec__26415 = cljs.core.reduce.call(null,(function (p__26416,p__26417){
var vec__26418 = p__26416;
var ms = cljs.core.nth.call(null,vec__26418,(0),null);
var cm = cljs.core.nth.call(null,vec__26418,(1),null);
var kl = cljs.core.nth.call(null,vec__26418,(2),null);
var vec__26419 = p__26417;
var k = cljs.core.nth.call(null,vec__26419,(0),null);
var v = cljs.core.nth.call(null,vec__26419,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
var vec__26420 = stream_of_redditness_cljs.util.chunkify_map.call(null,v,s,ms,cm,cljs.core.conj.call(null,kl,k));
var nms = cljs.core.nth.call(null,vec__26420,(0),null);
var ncm = cljs.core.nth.call(null,vec__26420,(1),null);
var _ = cljs.core.nth.call(null,vec__26420,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nms,ncm,kl], null);
} else {
if(cljs.core.seq_QMARK_.call(null,v)){
return cljs.core.List.EMPTY;
} else {
var jvm = cljs.core.reduce.call(null,((function (vec__26418,ms,cm,kl,vec__26419,k,v){
return (function (p1__26412_SHARP_,p2__26411_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__26411_SHARP_],[p1__26412_SHARP_]);
});})(vec__26418,ms,cm,kl,vec__26419,k,v))
,new cljs.core.PersistentArrayMap.fromArray([k,v], true, false),cljs.core.reverse.call(null,kl));
var nm = stream_of_redditness_cljs.util.deep_merge.call(null,cm,jvm);
if((s < stream_of_redditness_cljs.util.map_size_bytes.call(null,nm))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ms,cm),jvm,kl], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,nm,kl], null);
}

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msi,cmi,kli], null),m);
var rest_messages = cljs.core.nth.call(null,vec__26415,(0),null);
var last_message = cljs.core.nth.call(null,vec__26415,(1),null);
var _ = cljs.core.nth.call(null,vec__26415,(2),null);
return cljs.core.conj.call(null,rest_messages,last_message);
});

stream_of_redditness_cljs.util.chunkify_map.cljs$lang$maxFixedArity = 5;
stream_of_redditness_cljs.util.deep_merge_in_BANG_ = (function stream_of_redditness_cljs$util$deep_merge_in_BANG_(a,z,v){
return cljs.core.swap_BANG_.call(null,a,(function (s){
return cljs.core.update_in.call(null,s,z,(function (p1__26422_SHARP_){
return stream_of_redditness_cljs.util.deep_merge.call(null,p1__26422_SHARP_,v);
}));
}));
});
stream_of_redditness_cljs.util.write_in_BANG_ = (function stream_of_redditness_cljs$util$write_in_BANG_(a,z,v){
return cljs.core.swap_BANG_.call(null,a,(function (p1__26423_SHARP_){
return cljs.core.assoc_in.call(null,p1__26423_SHARP_,z,v);
}));
});
stream_of_redditness_cljs.util.get_in_BANG_ = (function stream_of_redditness_cljs$util$get_in_BANG_(a,z){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),z);
});

//# sourceMappingURL=util.js.map?rel=1432981509579