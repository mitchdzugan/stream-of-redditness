// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_;
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29288_SHARP_,p2__29287_SHARP_){
return [cljs.core.str(p2__29287_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var G__29294 = arguments.length;
switch (G__29294) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__29295 = cljs.core._EQ_;
var expr__29296 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__29295.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__29296))){
return ((function (pred__29295,expr__29296){
return (function (p1__29289_SHARP_){
return console.warn(p1__29289_SHARP_);
});
;})(pred__29295,expr__29296))
} else {
if(cljs.core.truth_(pred__29295.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__29296))){
return ((function (pred__29295,expr__29296){
return (function (p1__29290_SHARP_){
return console.debug(p1__29290_SHARP_);
});
;})(pred__29295,expr__29296))
} else {
if(cljs.core.truth_(pred__29295.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__29296))){
return ((function (pred__29295,expr__29296){
return (function (p1__29291_SHARP_){
return console.error(p1__29291_SHARP_);
});
;})(pred__29295,expr__29296))
} else {
return ((function (pred__29295,expr__29296){
return (function (p1__29292_SHARP_){
return console.log(p1__29292_SHARP_);
});
;})(pred__29295,expr__29296))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1432432039960