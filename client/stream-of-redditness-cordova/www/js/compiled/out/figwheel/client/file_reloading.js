// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27872_SHARP_,p2__27873_SHARP_){
var and__18104__auto__ = p1__27872_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__27873_SHARP_;
} else {
return and__18104__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18116__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18116__auto__){
return or__18116__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18116__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18116__auto__){
return or__18116__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18116__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27874){
var map__27875 = p__27874;
var map__27875__$1 = ((cljs.core.seq_QMARK_.call(null,map__27875))?cljs.core.apply.call(null,cljs.core.hash_map,map__27875):map__27875);
var file = cljs.core.get.call(null,map__27875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27876){
var map__27877 = p__27876;
var map__27877__$1 = ((cljs.core.seq_QMARK_.call(null,map__27877))?cljs.core.apply.call(null,cljs.core.hash_map,map__27877):map__27877);
var namespace = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27878){if((e27878 instanceof Error)){
var e = e27878;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27878;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__27880 = arguments.length;
switch (G__27880) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27882,callback){
var map__27884 = p__27882;
var map__27884__$1 = ((cljs.core.seq_QMARK_.call(null,map__27884))?cljs.core.apply.call(null,cljs.core.hash_map,map__27884):map__27884);
var file_msg = map__27884__$1;
var request_url = cljs.core.get.call(null,map__27884__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27884,map__27884__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27884,map__27884__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27885){
var map__27887 = p__27885;
var map__27887__$1 = ((cljs.core.seq_QMARK_.call(null,map__27887))?cljs.core.apply.call(null,cljs.core.hash_map,map__27887):map__27887);
var file_msg = map__27887__$1;
var meta_data = cljs.core.get.call(null,map__27887__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__27887__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18116__auto__ = meta_data;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18104__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18104__auto__){
var or__18116__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto____$1)){
return or__18116__auto____$1;
} else {
var and__18104__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18104__auto____$1){
var or__18116__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18116__auto____$2){
return or__18116__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18104__auto____$1;
}
}
}
} else {
return and__18104__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27888,callback){
var map__27890 = p__27888;
var map__27890__$1 = ((cljs.core.seq_QMARK_.call(null,map__27890))?cljs.core.apply.call(null,cljs.core.hash_map,map__27890):map__27890);
var file_msg = map__27890__$1;
var namespace = cljs.core.get.call(null,map__27890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__27890__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23258__auto___27977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___27977,out){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___27977,out){
return (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (7))){
var inst_27943 = (state_27959[(7)]);
var inst_27949 = (state_27959[(2)]);
var inst_27950 = cljs.core.async.put_BANG_.call(null,out,inst_27949);
var inst_27939 = inst_27943;
var state_27959__$1 = (function (){var statearr_27961 = state_27959;
(statearr_27961[(8)] = inst_27939);

(statearr_27961[(9)] = inst_27950);

return statearr_27961;
})();
var statearr_27962_27978 = state_27959__$1;
(statearr_27962_27978[(2)] = null);

(statearr_27962_27978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (6))){
var inst_27955 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27963_27979 = state_27959__$1;
(statearr_27963_27979[(2)] = inst_27955);

(statearr_27963_27979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (5))){
var inst_27953 = cljs.core.async.close_BANG_.call(null,out);
var state_27959__$1 = state_27959;
var statearr_27964_27980 = state_27959__$1;
(statearr_27964_27980[(2)] = inst_27953);

(statearr_27964_27980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (4))){
var inst_27942 = (state_27959[(10)]);
var inst_27947 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27942);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(7),inst_27947);
} else {
if((state_val_27960 === (3))){
var inst_27957 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else {
if((state_val_27960 === (2))){
var inst_27939 = (state_27959[(8)]);
var inst_27942 = (state_27959[(10)]);
var inst_27942__$1 = cljs.core.nth.call(null,inst_27939,(0),null);
var inst_27943 = cljs.core.nthnext.call(null,inst_27939,(1));
var inst_27944 = (inst_27942__$1 == null);
var inst_27945 = cljs.core.not.call(null,inst_27944);
var state_27959__$1 = (function (){var statearr_27965 = state_27959;
(statearr_27965[(7)] = inst_27943);

(statearr_27965[(10)] = inst_27942__$1);

return statearr_27965;
})();
if(inst_27945){
var statearr_27966_27981 = state_27959__$1;
(statearr_27966_27981[(1)] = (4));

} else {
var statearr_27967_27982 = state_27959__$1;
(statearr_27967_27982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (1))){
var inst_27937 = cljs.core.nth.call(null,files,(0),null);
var inst_27938 = cljs.core.nthnext.call(null,files,(1));
var inst_27939 = files;
var state_27959__$1 = (function (){var statearr_27968 = state_27959;
(statearr_27968[(8)] = inst_27939);

(statearr_27968[(11)] = inst_27937);

(statearr_27968[(12)] = inst_27938);

return statearr_27968;
})();
var statearr_27969_27983 = state_27959__$1;
(statearr_27969_27983[(2)] = null);

(statearr_27969_27983[(1)] = (2));


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
});})(c__23258__auto___27977,out))
;
return ((function (switch__23196__auto__,c__23258__auto___27977,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto____0 = (function (){
var statearr_27973 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27973[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto__);

(statearr_27973[(1)] = (1));

return statearr_27973;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto____1 = (function (state_27959){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_27959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e27974){if((e27974 instanceof Object)){
var ex__23200__auto__ = e27974;
var statearr_27975_27984 = state_27959;
(statearr_27975_27984[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27985 = state_27959;
state_27959 = G__27985;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___27977,out))
})();
var state__23260__auto__ = (function (){var statearr_27976 = f__23259__auto__.call(null);
(statearr_27976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___27977);

return statearr_27976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___27977,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27986,p__27987){
var map__27990 = p__27986;
var map__27990__$1 = ((cljs.core.seq_QMARK_.call(null,map__27990))?cljs.core.apply.call(null,cljs.core.hash_map,map__27990):map__27990);
var opts = map__27990__$1;
var url_rewriter = cljs.core.get.call(null,map__27990__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27991 = p__27987;
var map__27991__$1 = ((cljs.core.seq_QMARK_.call(null,map__27991))?cljs.core.apply.call(null,cljs.core.hash_map,map__27991):map__27991);
var file_msg = map__27991__$1;
var file = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27992){
var map__27995 = p__27992;
var map__27995__$1 = ((cljs.core.seq_QMARK_.call(null,map__27995))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var file = cljs.core.get.call(null,map__27995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__27995__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18104__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18104__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18104__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e27996){var e = e27996;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28001,p__28002){
var map__28203 = p__28001;
var map__28203__$1 = ((cljs.core.seq_QMARK_.call(null,map__28203))?cljs.core.apply.call(null,cljs.core.hash_map,map__28203):map__28203);
var opts = map__28203__$1;
var load_unchanged_files = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__28204 = p__28002;
var map__28204__$1 = ((cljs.core.seq_QMARK_.call(null,map__28204))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);
var msg = map__28204__$1;
var files = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (state_28328){
var state_val_28329 = (state_28328[(1)]);
if((state_val_28329 === (7))){
var inst_28218 = (state_28328[(7)]);
var inst_28217 = (state_28328[(8)]);
var inst_28216 = (state_28328[(9)]);
var inst_28215 = (state_28328[(10)]);
var inst_28223 = cljs.core._nth.call(null,inst_28216,inst_28218);
var inst_28224 = figwheel.client.file_reloading.eval_body.call(null,inst_28223);
var inst_28225 = (inst_28218 + (1));
var tmp28330 = inst_28217;
var tmp28331 = inst_28216;
var tmp28332 = inst_28215;
var inst_28215__$1 = tmp28332;
var inst_28216__$1 = tmp28331;
var inst_28217__$1 = tmp28330;
var inst_28218__$1 = inst_28225;
var state_28328__$1 = (function (){var statearr_28333 = state_28328;
(statearr_28333[(11)] = inst_28224);

(statearr_28333[(7)] = inst_28218__$1);

(statearr_28333[(8)] = inst_28217__$1);

(statearr_28333[(9)] = inst_28216__$1);

(statearr_28333[(10)] = inst_28215__$1);

return statearr_28333;
})();
var statearr_28334_28403 = state_28328__$1;
(statearr_28334_28403[(2)] = null);

(statearr_28334_28403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (20))){
var inst_28261 = (state_28328[(12)]);
var inst_28260 = (state_28328[(13)]);
var inst_28267 = (state_28328[(14)]);
var inst_28265 = (state_28328[(15)]);
var inst_28264 = (state_28328[(16)]);
var inst_28270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28272 = (function (){var files_not_loaded = inst_28267;
var res = inst_28265;
var res_SINGLEQUOTE_ = inst_28264;
var files_SINGLEQUOTE_ = inst_28261;
var all_files = inst_28260;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28267,inst_28265,inst_28264,inst_28270,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (p__28271){
var map__28335 = p__28271;
var map__28335__$1 = ((cljs.core.seq_QMARK_.call(null,map__28335))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335):map__28335);
var file = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28267,inst_28265,inst_28264,inst_28270,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28273 = cljs.core.map.call(null,inst_28272,inst_28265);
var inst_28274 = cljs.core.pr_str.call(null,inst_28273);
var inst_28275 = figwheel.client.utils.log.call(null,inst_28274);
var inst_28276 = (function (){var files_not_loaded = inst_28267;
var res = inst_28265;
var res_SINGLEQUOTE_ = inst_28264;
var files_SINGLEQUOTE_ = inst_28261;
var all_files = inst_28260;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28267,inst_28265,inst_28264,inst_28270,inst_28272,inst_28273,inst_28274,inst_28275,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28267,inst_28265,inst_28264,inst_28270,inst_28272,inst_28273,inst_28274,inst_28275,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28277 = setTimeout(inst_28276,(10));
var state_28328__$1 = (function (){var statearr_28336 = state_28328;
(statearr_28336[(17)] = inst_28275);

(statearr_28336[(18)] = inst_28270);

return statearr_28336;
})();
var statearr_28337_28404 = state_28328__$1;
(statearr_28337_28404[(2)] = inst_28277);

(statearr_28337_28404[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (27))){
var inst_28287 = (state_28328[(19)]);
var state_28328__$1 = state_28328;
var statearr_28338_28405 = state_28328__$1;
(statearr_28338_28405[(2)] = inst_28287);

(statearr_28338_28405[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (1))){
var inst_28207 = (state_28328[(20)]);
var inst_28205 = before_jsload.call(null,files);
var inst_28206 = (function (){return ((function (inst_28207,inst_28205,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (p1__27997_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27997_SHARP_);
});
;})(inst_28207,inst_28205,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28207__$1 = cljs.core.filter.call(null,inst_28206,files);
var inst_28208 = cljs.core.not_empty.call(null,inst_28207__$1);
var state_28328__$1 = (function (){var statearr_28339 = state_28328;
(statearr_28339[(20)] = inst_28207__$1);

(statearr_28339[(21)] = inst_28205);

return statearr_28339;
})();
if(cljs.core.truth_(inst_28208)){
var statearr_28340_28406 = state_28328__$1;
(statearr_28340_28406[(1)] = (2));

} else {
var statearr_28341_28407 = state_28328__$1;
(statearr_28341_28407[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (24))){
var state_28328__$1 = state_28328;
var statearr_28342_28408 = state_28328__$1;
(statearr_28342_28408[(2)] = null);

(statearr_28342_28408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (4))){
var inst_28252 = (state_28328[(2)]);
var inst_28253 = (function (){return ((function (inst_28252,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (p1__27998_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27998_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27998_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_28252,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28254 = cljs.core.filter.call(null,inst_28253,files);
var state_28328__$1 = (function (){var statearr_28343 = state_28328;
(statearr_28343[(22)] = inst_28254);

(statearr_28343[(23)] = inst_28252);

return statearr_28343;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28344_28409 = state_28328__$1;
(statearr_28344_28409[(1)] = (16));

} else {
var statearr_28345_28410 = state_28328__$1;
(statearr_28345_28410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (15))){
var inst_28242 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28346_28411 = state_28328__$1;
(statearr_28346_28411[(2)] = inst_28242);

(statearr_28346_28411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (21))){
var state_28328__$1 = state_28328;
var statearr_28347_28412 = state_28328__$1;
(statearr_28347_28412[(2)] = null);

(statearr_28347_28412[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (31))){
var inst_28295 = (state_28328[(24)]);
var inst_28305 = (state_28328[(2)]);
var inst_28306 = cljs.core.not_empty.call(null,inst_28295);
var state_28328__$1 = (function (){var statearr_28348 = state_28328;
(statearr_28348[(25)] = inst_28305);

return statearr_28348;
})();
if(cljs.core.truth_(inst_28306)){
var statearr_28349_28413 = state_28328__$1;
(statearr_28349_28413[(1)] = (32));

} else {
var statearr_28350_28414 = state_28328__$1;
(statearr_28350_28414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (32))){
var inst_28295 = (state_28328[(24)]);
var inst_28308 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28295);
var inst_28309 = cljs.core.pr_str.call(null,inst_28308);
var inst_28310 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28309)].join('');
var inst_28311 = figwheel.client.utils.log.call(null,inst_28310);
var state_28328__$1 = state_28328;
var statearr_28351_28415 = state_28328__$1;
(statearr_28351_28415[(2)] = inst_28311);

(statearr_28351_28415[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (33))){
var state_28328__$1 = state_28328;
var statearr_28352_28416 = state_28328__$1;
(statearr_28352_28416[(2)] = null);

(statearr_28352_28416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (13))){
var inst_28228 = (state_28328[(26)]);
var inst_28232 = cljs.core.chunk_first.call(null,inst_28228);
var inst_28233 = cljs.core.chunk_rest.call(null,inst_28228);
var inst_28234 = cljs.core.count.call(null,inst_28232);
var inst_28215 = inst_28233;
var inst_28216 = inst_28232;
var inst_28217 = inst_28234;
var inst_28218 = (0);
var state_28328__$1 = (function (){var statearr_28353 = state_28328;
(statearr_28353[(7)] = inst_28218);

(statearr_28353[(8)] = inst_28217);

(statearr_28353[(9)] = inst_28216);

(statearr_28353[(10)] = inst_28215);

return statearr_28353;
})();
var statearr_28354_28417 = state_28328__$1;
(statearr_28354_28417[(2)] = null);

(statearr_28354_28417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (22))){
var inst_28267 = (state_28328[(14)]);
var inst_28280 = (state_28328[(2)]);
var inst_28281 = cljs.core.not_empty.call(null,inst_28267);
var state_28328__$1 = (function (){var statearr_28355 = state_28328;
(statearr_28355[(27)] = inst_28280);

return statearr_28355;
})();
if(cljs.core.truth_(inst_28281)){
var statearr_28356_28418 = state_28328__$1;
(statearr_28356_28418[(1)] = (23));

} else {
var statearr_28357_28419 = state_28328__$1;
(statearr_28357_28419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (36))){
var state_28328__$1 = state_28328;
var statearr_28358_28420 = state_28328__$1;
(statearr_28358_28420[(2)] = null);

(statearr_28358_28420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (29))){
var inst_28296 = (state_28328[(28)]);
var inst_28299 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28296);
var inst_28300 = cljs.core.pr_str.call(null,inst_28299);
var inst_28301 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28300)].join('');
var inst_28302 = figwheel.client.utils.log.call(null,inst_28301);
var state_28328__$1 = state_28328;
var statearr_28359_28421 = state_28328__$1;
(statearr_28359_28421[(2)] = inst_28302);

(statearr_28359_28421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (6))){
var inst_28249 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28360_28422 = state_28328__$1;
(statearr_28360_28422[(2)] = inst_28249);

(statearr_28360_28422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (28))){
var inst_28296 = (state_28328[(28)]);
var inst_28293 = (state_28328[(2)]);
var inst_28294 = cljs.core.get.call(null,inst_28293,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28295 = cljs.core.get.call(null,inst_28293,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28296__$1 = cljs.core.get.call(null,inst_28293,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28297 = cljs.core.not_empty.call(null,inst_28296__$1);
var state_28328__$1 = (function (){var statearr_28361 = state_28328;
(statearr_28361[(28)] = inst_28296__$1);

(statearr_28361[(29)] = inst_28294);

(statearr_28361[(24)] = inst_28295);

return statearr_28361;
})();
if(cljs.core.truth_(inst_28297)){
var statearr_28362_28423 = state_28328__$1;
(statearr_28362_28423[(1)] = (29));

} else {
var statearr_28363_28424 = state_28328__$1;
(statearr_28363_28424[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (25))){
var inst_28326 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28328__$1,inst_28326);
} else {
if((state_val_28329 === (34))){
var inst_28294 = (state_28328[(29)]);
var inst_28314 = (state_28328[(2)]);
var inst_28315 = cljs.core.not_empty.call(null,inst_28294);
var state_28328__$1 = (function (){var statearr_28364 = state_28328;
(statearr_28364[(30)] = inst_28314);

return statearr_28364;
})();
if(cljs.core.truth_(inst_28315)){
var statearr_28365_28425 = state_28328__$1;
(statearr_28365_28425[(1)] = (35));

} else {
var statearr_28366_28426 = state_28328__$1;
(statearr_28366_28426[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (17))){
var inst_28254 = (state_28328[(22)]);
var state_28328__$1 = state_28328;
var statearr_28367_28427 = state_28328__$1;
(statearr_28367_28427[(2)] = inst_28254);

(statearr_28367_28427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (3))){
var state_28328__$1 = state_28328;
var statearr_28368_28428 = state_28328__$1;
(statearr_28368_28428[(2)] = null);

(statearr_28368_28428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (12))){
var inst_28245 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28369_28429 = state_28328__$1;
(statearr_28369_28429[(2)] = inst_28245);

(statearr_28369_28429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (2))){
var inst_28207 = (state_28328[(20)]);
var inst_28214 = cljs.core.seq.call(null,inst_28207);
var inst_28215 = inst_28214;
var inst_28216 = null;
var inst_28217 = (0);
var inst_28218 = (0);
var state_28328__$1 = (function (){var statearr_28370 = state_28328;
(statearr_28370[(7)] = inst_28218);

(statearr_28370[(8)] = inst_28217);

(statearr_28370[(9)] = inst_28216);

(statearr_28370[(10)] = inst_28215);

return statearr_28370;
})();
var statearr_28371_28430 = state_28328__$1;
(statearr_28371_28430[(2)] = null);

(statearr_28371_28430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (23))){
var inst_28261 = (state_28328[(12)]);
var inst_28260 = (state_28328[(13)]);
var inst_28267 = (state_28328[(14)]);
var inst_28287 = (state_28328[(19)]);
var inst_28265 = (state_28328[(15)]);
var inst_28264 = (state_28328[(16)]);
var inst_28283 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28286 = (function (){var files_not_loaded = inst_28267;
var res = inst_28265;
var res_SINGLEQUOTE_ = inst_28264;
var files_SINGLEQUOTE_ = inst_28261;
var all_files = inst_28260;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28267,inst_28287,inst_28265,inst_28264,inst_28283,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (p__28285){
var map__28372 = p__28285;
var map__28372__$1 = ((cljs.core.seq_QMARK_.call(null,map__28372))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);
var meta_data = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28267,inst_28287,inst_28265,inst_28264,inst_28283,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28287__$1 = cljs.core.group_by.call(null,inst_28286,inst_28267);
var inst_28288 = cljs.core.seq_QMARK_.call(null,inst_28287__$1);
var state_28328__$1 = (function (){var statearr_28373 = state_28328;
(statearr_28373[(19)] = inst_28287__$1);

(statearr_28373[(31)] = inst_28283);

return statearr_28373;
})();
if(inst_28288){
var statearr_28374_28431 = state_28328__$1;
(statearr_28374_28431[(1)] = (26));

} else {
var statearr_28375_28432 = state_28328__$1;
(statearr_28375_28432[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (35))){
var inst_28294 = (state_28328[(29)]);
var inst_28317 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28294);
var inst_28318 = cljs.core.pr_str.call(null,inst_28317);
var inst_28319 = [cljs.core.str("not required: "),cljs.core.str(inst_28318)].join('');
var inst_28320 = figwheel.client.utils.log.call(null,inst_28319);
var state_28328__$1 = state_28328;
var statearr_28376_28433 = state_28328__$1;
(statearr_28376_28433[(2)] = inst_28320);

(statearr_28376_28433[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (19))){
var inst_28261 = (state_28328[(12)]);
var inst_28260 = (state_28328[(13)]);
var inst_28265 = (state_28328[(15)]);
var inst_28264 = (state_28328[(16)]);
var inst_28264__$1 = (state_28328[(2)]);
var inst_28265__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28264__$1);
var inst_28266 = (function (){var res = inst_28265__$1;
var res_SINGLEQUOTE_ = inst_28264__$1;
var files_SINGLEQUOTE_ = inst_28261;
var all_files = inst_28260;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28265,inst_28264,inst_28264__$1,inst_28265__$1,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (p1__28000_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28000_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28261,inst_28260,inst_28265,inst_28264,inst_28264__$1,inst_28265__$1,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28267 = cljs.core.filter.call(null,inst_28266,inst_28264__$1);
var inst_28268 = cljs.core.not_empty.call(null,inst_28265__$1);
var state_28328__$1 = (function (){var statearr_28377 = state_28328;
(statearr_28377[(14)] = inst_28267);

(statearr_28377[(15)] = inst_28265__$1);

(statearr_28377[(16)] = inst_28264__$1);

return statearr_28377;
})();
if(cljs.core.truth_(inst_28268)){
var statearr_28378_28434 = state_28328__$1;
(statearr_28378_28434[(1)] = (20));

} else {
var statearr_28379_28435 = state_28328__$1;
(statearr_28379_28435[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (11))){
var state_28328__$1 = state_28328;
var statearr_28380_28436 = state_28328__$1;
(statearr_28380_28436[(2)] = null);

(statearr_28380_28436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (9))){
var inst_28247 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28381_28437 = state_28328__$1;
(statearr_28381_28437[(2)] = inst_28247);

(statearr_28381_28437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (5))){
var inst_28218 = (state_28328[(7)]);
var inst_28217 = (state_28328[(8)]);
var inst_28220 = (inst_28218 < inst_28217);
var inst_28221 = inst_28220;
var state_28328__$1 = state_28328;
if(cljs.core.truth_(inst_28221)){
var statearr_28382_28438 = state_28328__$1;
(statearr_28382_28438[(1)] = (7));

} else {
var statearr_28383_28439 = state_28328__$1;
(statearr_28383_28439[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (14))){
var inst_28228 = (state_28328[(26)]);
var inst_28237 = cljs.core.first.call(null,inst_28228);
var inst_28238 = figwheel.client.file_reloading.eval_body.call(null,inst_28237);
var inst_28239 = cljs.core.next.call(null,inst_28228);
var inst_28215 = inst_28239;
var inst_28216 = null;
var inst_28217 = (0);
var inst_28218 = (0);
var state_28328__$1 = (function (){var statearr_28384 = state_28328;
(statearr_28384[(32)] = inst_28238);

(statearr_28384[(7)] = inst_28218);

(statearr_28384[(8)] = inst_28217);

(statearr_28384[(9)] = inst_28216);

(statearr_28384[(10)] = inst_28215);

return statearr_28384;
})();
var statearr_28385_28440 = state_28328__$1;
(statearr_28385_28440[(2)] = null);

(statearr_28385_28440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (26))){
var inst_28287 = (state_28328[(19)]);
var inst_28290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28287);
var state_28328__$1 = state_28328;
var statearr_28386_28441 = state_28328__$1;
(statearr_28386_28441[(2)] = inst_28290);

(statearr_28386_28441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (16))){
var inst_28254 = (state_28328[(22)]);
var inst_28256 = (function (){var all_files = inst_28254;
return ((function (all_files,inst_28254,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function (p1__27999_SHARP_){
return cljs.core.update_in.call(null,p1__27999_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28254,state_val_28329,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var inst_28257 = cljs.core.map.call(null,inst_28256,inst_28254);
var state_28328__$1 = state_28328;
var statearr_28387_28442 = state_28328__$1;
(statearr_28387_28442[(2)] = inst_28257);

(statearr_28387_28442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (30))){
var state_28328__$1 = state_28328;
var statearr_28388_28443 = state_28328__$1;
(statearr_28388_28443[(2)] = null);

(statearr_28388_28443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (10))){
var inst_28228 = (state_28328[(26)]);
var inst_28230 = cljs.core.chunked_seq_QMARK_.call(null,inst_28228);
var state_28328__$1 = state_28328;
if(inst_28230){
var statearr_28389_28444 = state_28328__$1;
(statearr_28389_28444[(1)] = (13));

} else {
var statearr_28390_28445 = state_28328__$1;
(statearr_28390_28445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (18))){
var inst_28261 = (state_28328[(12)]);
var inst_28260 = (state_28328[(13)]);
var inst_28260__$1 = (state_28328[(2)]);
var inst_28261__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28260__$1);
var inst_28262 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28261__$1);
var state_28328__$1 = (function (){var statearr_28391 = state_28328;
(statearr_28391[(12)] = inst_28261__$1);

(statearr_28391[(13)] = inst_28260__$1);

return statearr_28391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28328__$1,(19),inst_28262);
} else {
if((state_val_28329 === (37))){
var inst_28323 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28392_28446 = state_28328__$1;
(statearr_28392_28446[(2)] = inst_28323);

(statearr_28392_28446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (8))){
var inst_28228 = (state_28328[(26)]);
var inst_28215 = (state_28328[(10)]);
var inst_28228__$1 = cljs.core.seq.call(null,inst_28215);
var state_28328__$1 = (function (){var statearr_28393 = state_28328;
(statearr_28393[(26)] = inst_28228__$1);

return statearr_28393;
})();
if(inst_28228__$1){
var statearr_28394_28447 = state_28328__$1;
(statearr_28394_28447[(1)] = (10));

} else {
var statearr_28395_28448 = state_28328__$1;
(statearr_28395_28448[(1)] = (11));

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
});})(c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
;
return ((function (switch__23196__auto__,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto____0 = (function (){
var statearr_28399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28399[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto__);

(statearr_28399[(1)] = (1));

return statearr_28399;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto____1 = (function (state_28328){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28400){if((e28400 instanceof Object)){
var ex__23200__auto__ = e28400;
var statearr_28401_28449 = state_28328;
(statearr_28401_28449[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28450 = state_28328;
state_28328 = G__28450;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto__ = function(state_28328){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto____1.call(this,state_28328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
})();
var state__23260__auto__ = (function (){var statearr_28402 = f__23259__auto__.call(null);
(statearr_28402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_28402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__,map__28203,map__28203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28204,map__28204__$1,msg,files))
);

return c__23258__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28453,link){
var map__28455 = p__28453;
var map__28455__$1 = ((cljs.core.seq_QMARK_.call(null,map__28455))?cljs.core.apply.call(null,cljs.core.hash_map,map__28455):map__28455);
var file = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__28455,map__28455__$1,file){
return (function (p1__28451_SHARP_,p2__28452_SHARP_){
if(cljs.core._EQ_.call(null,p1__28451_SHARP_,p2__28452_SHARP_)){
return p1__28451_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__28455,map__28455__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28459){
var map__28460 = p__28459;
var map__28460__$1 = ((cljs.core.seq_QMARK_.call(null,map__28460))?cljs.core.apply.call(null,cljs.core.hash_map,map__28460):map__28460);
var current_url_length = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28456_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28456_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__28462 = arguments.length;
switch (G__28462) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28464){
var map__28466 = p__28464;
var map__28466__$1 = ((cljs.core.seq_QMARK_.call(null,map__28466))?cljs.core.apply.call(null,cljs.core.hash_map,map__28466):map__28466);
var f_data = map__28466__$1;
var request_url = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18116__auto__ = request_url;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28467,files_msg){
var map__28489 = p__28467;
var map__28489__$1 = ((cljs.core.seq_QMARK_.call(null,map__28489))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);
var opts = map__28489__$1;
var on_cssload = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28490_28510 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28491_28511 = null;
var count__28492_28512 = (0);
var i__28493_28513 = (0);
while(true){
if((i__28493_28513 < count__28492_28512)){
var f_28514 = cljs.core._nth.call(null,chunk__28491_28511,i__28493_28513);
figwheel.client.file_reloading.reload_css_file.call(null,f_28514);

var G__28515 = seq__28490_28510;
var G__28516 = chunk__28491_28511;
var G__28517 = count__28492_28512;
var G__28518 = (i__28493_28513 + (1));
seq__28490_28510 = G__28515;
chunk__28491_28511 = G__28516;
count__28492_28512 = G__28517;
i__28493_28513 = G__28518;
continue;
} else {
var temp__4126__auto___28519 = cljs.core.seq.call(null,seq__28490_28510);
if(temp__4126__auto___28519){
var seq__28490_28520__$1 = temp__4126__auto___28519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28490_28520__$1)){
var c__18901__auto___28521 = cljs.core.chunk_first.call(null,seq__28490_28520__$1);
var G__28522 = cljs.core.chunk_rest.call(null,seq__28490_28520__$1);
var G__28523 = c__18901__auto___28521;
var G__28524 = cljs.core.count.call(null,c__18901__auto___28521);
var G__28525 = (0);
seq__28490_28510 = G__28522;
chunk__28491_28511 = G__28523;
count__28492_28512 = G__28524;
i__28493_28513 = G__28525;
continue;
} else {
var f_28526 = cljs.core.first.call(null,seq__28490_28520__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28526);

var G__28527 = cljs.core.next.call(null,seq__28490_28520__$1);
var G__28528 = null;
var G__28529 = (0);
var G__28530 = (0);
seq__28490_28510 = G__28527;
chunk__28491_28511 = G__28528;
count__28492_28512 = G__28529;
i__28493_28513 = G__28530;
continue;
}
} else {
}
}
break;
}

var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__,map__28489,map__28489__$1,opts,on_cssload){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__,map__28489,map__28489__$1,opts,on_cssload){
return (function (state_28500){
var state_val_28501 = (state_28500[(1)]);
if((state_val_28501 === (2))){
var inst_28496 = (state_28500[(2)]);
var inst_28497 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28498 = on_cssload.call(null,inst_28497);
var state_28500__$1 = (function (){var statearr_28502 = state_28500;
(statearr_28502[(7)] = inst_28496);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28500__$1,inst_28498);
} else {
if((state_val_28501 === (1))){
var inst_28494 = cljs.core.async.timeout.call(null,(100));
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28500__$1,(2),inst_28494);
} else {
return null;
}
}
});})(c__23258__auto__,map__28489,map__28489__$1,opts,on_cssload))
;
return ((function (switch__23196__auto__,c__23258__auto__,map__28489,map__28489__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto____0 = (function (){
var statearr_28506 = [null,null,null,null,null,null,null,null];
(statearr_28506[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto__);

(statearr_28506[(1)] = (1));

return statearr_28506;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto____1 = (function (state_28500){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_28500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e28507){if((e28507 instanceof Object)){
var ex__23200__auto__ = e28507;
var statearr_28508_28531 = state_28500;
(statearr_28508_28531[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28532 = state_28500;
state_28500 = G__28532;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto__ = function(state_28500){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto____1.call(this,state_28500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__,map__28489,map__28489__$1,opts,on_cssload))
})();
var state__23260__auto__ = (function (){var statearr_28509 = f__23259__auto__.call(null);
(statearr_28509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_28509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__,map__28489,map__28489__$1,opts,on_cssload))
);

return c__23258__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1431876837914