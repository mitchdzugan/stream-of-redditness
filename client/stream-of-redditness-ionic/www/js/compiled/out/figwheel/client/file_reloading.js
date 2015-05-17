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
return cljs.core.reduce.call(null,(function (p1__27861_SHARP_,p2__27862_SHARP_){
var and__18104__auto__ = p1__27861_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__27862_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27863){
var map__27864 = p__27863;
var map__27864__$1 = ((cljs.core.seq_QMARK_.call(null,map__27864))?cljs.core.apply.call(null,cljs.core.hash_map,map__27864):map__27864);
var file = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27865){
var map__27866 = p__27865;
var map__27866__$1 = ((cljs.core.seq_QMARK_.call(null,map__27866))?cljs.core.apply.call(null,cljs.core.hash_map,map__27866):map__27866);
var namespace = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e27867){if((e27867 instanceof Error)){
var e = e27867;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27867;

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
var G__27869 = arguments.length;
switch (G__27869) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27871,callback){
var map__27873 = p__27871;
var map__27873__$1 = ((cljs.core.seq_QMARK_.call(null,map__27873))?cljs.core.apply.call(null,cljs.core.hash_map,map__27873):map__27873);
var file_msg = map__27873__$1;
var request_url = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27873,map__27873__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27873,map__27873__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27874){
var map__27876 = p__27874;
var map__27876__$1 = ((cljs.core.seq_QMARK_.call(null,map__27876))?cljs.core.apply.call(null,cljs.core.hash_map,map__27876):map__27876);
var file_msg = map__27876__$1;
var meta_data = cljs.core.get.call(null,map__27876__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__27876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27877,callback){
var map__27879 = p__27877;
var map__27879__$1 = ((cljs.core.seq_QMARK_.call(null,map__27879))?cljs.core.apply.call(null,cljs.core.hash_map,map__27879):map__27879);
var file_msg = map__27879__$1;
var namespace = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__23247__auto___27966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___27966,out){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___27966,out){
return (function (state_27948){
var state_val_27949 = (state_27948[(1)]);
if((state_val_27949 === (7))){
var inst_27932 = (state_27948[(7)]);
var inst_27938 = (state_27948[(2)]);
var inst_27939 = cljs.core.async.put_BANG_.call(null,out,inst_27938);
var inst_27928 = inst_27932;
var state_27948__$1 = (function (){var statearr_27950 = state_27948;
(statearr_27950[(8)] = inst_27939);

(statearr_27950[(9)] = inst_27928);

return statearr_27950;
})();
var statearr_27951_27967 = state_27948__$1;
(statearr_27951_27967[(2)] = null);

(statearr_27951_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27949 === (6))){
var inst_27944 = (state_27948[(2)]);
var state_27948__$1 = state_27948;
var statearr_27952_27968 = state_27948__$1;
(statearr_27952_27968[(2)] = inst_27944);

(statearr_27952_27968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27949 === (5))){
var inst_27942 = cljs.core.async.close_BANG_.call(null,out);
var state_27948__$1 = state_27948;
var statearr_27953_27969 = state_27948__$1;
(statearr_27953_27969[(2)] = inst_27942);

(statearr_27953_27969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27949 === (4))){
var inst_27931 = (state_27948[(10)]);
var inst_27936 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27931);
var state_27948__$1 = state_27948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27948__$1,(7),inst_27936);
} else {
if((state_val_27949 === (3))){
var inst_27946 = (state_27948[(2)]);
var state_27948__$1 = state_27948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27948__$1,inst_27946);
} else {
if((state_val_27949 === (2))){
var inst_27928 = (state_27948[(9)]);
var inst_27931 = (state_27948[(10)]);
var inst_27931__$1 = cljs.core.nth.call(null,inst_27928,(0),null);
var inst_27932 = cljs.core.nthnext.call(null,inst_27928,(1));
var inst_27933 = (inst_27931__$1 == null);
var inst_27934 = cljs.core.not.call(null,inst_27933);
var state_27948__$1 = (function (){var statearr_27954 = state_27948;
(statearr_27954[(7)] = inst_27932);

(statearr_27954[(10)] = inst_27931__$1);

return statearr_27954;
})();
if(inst_27934){
var statearr_27955_27970 = state_27948__$1;
(statearr_27955_27970[(1)] = (4));

} else {
var statearr_27956_27971 = state_27948__$1;
(statearr_27956_27971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27949 === (1))){
var inst_27926 = cljs.core.nth.call(null,files,(0),null);
var inst_27927 = cljs.core.nthnext.call(null,files,(1));
var inst_27928 = files;
var state_27948__$1 = (function (){var statearr_27957 = state_27948;
(statearr_27957[(9)] = inst_27928);

(statearr_27957[(11)] = inst_27927);

(statearr_27957[(12)] = inst_27926);

return statearr_27957;
})();
var statearr_27958_27972 = state_27948__$1;
(statearr_27958_27972[(2)] = null);

(statearr_27958_27972[(1)] = (2));


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
});})(c__23247__auto___27966,out))
;
return ((function (switch__23185__auto__,c__23247__auto___27966,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto____0 = (function (){
var statearr_27962 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27962[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto__);

(statearr_27962[(1)] = (1));

return statearr_27962;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto____1 = (function (state_27948){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_27948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e27963){if((e27963 instanceof Object)){
var ex__23189__auto__ = e27963;
var statearr_27964_27973 = state_27948;
(statearr_27964_27973[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27974 = state_27948;
state_27948 = G__27974;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto__ = function(state_27948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto____1.call(this,state_27948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___27966,out))
})();
var state__23249__auto__ = (function (){var statearr_27965 = f__23248__auto__.call(null);
(statearr_27965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___27966);

return statearr_27965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___27966,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27975,p__27976){
var map__27979 = p__27975;
var map__27979__$1 = ((cljs.core.seq_QMARK_.call(null,map__27979))?cljs.core.apply.call(null,cljs.core.hash_map,map__27979):map__27979);
var opts = map__27979__$1;
var url_rewriter = cljs.core.get.call(null,map__27979__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27980 = p__27976;
var map__27980__$1 = ((cljs.core.seq_QMARK_.call(null,map__27980))?cljs.core.apply.call(null,cljs.core.hash_map,map__27980):map__27980);
var file_msg = map__27980__$1;
var file = cljs.core.get.call(null,map__27980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27981){
var map__27984 = p__27981;
var map__27984__$1 = ((cljs.core.seq_QMARK_.call(null,map__27984))?cljs.core.apply.call(null,cljs.core.hash_map,map__27984):map__27984);
var file = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e27985){var e = e27985;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27990,p__27991){
var map__28192 = p__27990;
var map__28192__$1 = ((cljs.core.seq_QMARK_.call(null,map__28192))?cljs.core.apply.call(null,cljs.core.hash_map,map__28192):map__28192);
var opts = map__28192__$1;
var load_unchanged_files = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__28193 = p__27991;
var map__28193__$1 = ((cljs.core.seq_QMARK_.call(null,map__28193))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var msg = map__28193__$1;
var files = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (7))){
var inst_28206 = (state_28317[(7)]);
var inst_28207 = (state_28317[(8)]);
var inst_28205 = (state_28317[(9)]);
var inst_28204 = (state_28317[(10)]);
var inst_28212 = cljs.core._nth.call(null,inst_28205,inst_28207);
var inst_28213 = figwheel.client.file_reloading.eval_body.call(null,inst_28212);
var inst_28214 = (inst_28207 + (1));
var tmp28319 = inst_28206;
var tmp28320 = inst_28205;
var tmp28321 = inst_28204;
var inst_28204__$1 = tmp28321;
var inst_28205__$1 = tmp28320;
var inst_28206__$1 = tmp28319;
var inst_28207__$1 = inst_28214;
var state_28317__$1 = (function (){var statearr_28322 = state_28317;
(statearr_28322[(7)] = inst_28206__$1);

(statearr_28322[(11)] = inst_28213);

(statearr_28322[(8)] = inst_28207__$1);

(statearr_28322[(9)] = inst_28205__$1);

(statearr_28322[(10)] = inst_28204__$1);

return statearr_28322;
})();
var statearr_28323_28392 = state_28317__$1;
(statearr_28323_28392[(2)] = null);

(statearr_28323_28392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (20))){
var inst_28253 = (state_28317[(12)]);
var inst_28256 = (state_28317[(13)]);
var inst_28254 = (state_28317[(14)]);
var inst_28250 = (state_28317[(15)]);
var inst_28249 = (state_28317[(16)]);
var inst_28259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28261 = (function (){var files_not_loaded = inst_28256;
var res = inst_28254;
var res_SINGLEQUOTE_ = inst_28253;
var files_SINGLEQUOTE_ = inst_28250;
var all_files = inst_28249;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28253,inst_28256,inst_28254,inst_28250,inst_28249,inst_28259,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (p__28260){
var map__28324 = p__28260;
var map__28324__$1 = ((cljs.core.seq_QMARK_.call(null,map__28324))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);
var file = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28253,inst_28256,inst_28254,inst_28250,inst_28249,inst_28259,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28262 = cljs.core.map.call(null,inst_28261,inst_28254);
var inst_28263 = cljs.core.pr_str.call(null,inst_28262);
var inst_28264 = figwheel.client.utils.log.call(null,inst_28263);
var inst_28265 = (function (){var files_not_loaded = inst_28256;
var res = inst_28254;
var res_SINGLEQUOTE_ = inst_28253;
var files_SINGLEQUOTE_ = inst_28250;
var all_files = inst_28249;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28253,inst_28256,inst_28254,inst_28250,inst_28249,inst_28259,inst_28261,inst_28262,inst_28263,inst_28264,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28253,inst_28256,inst_28254,inst_28250,inst_28249,inst_28259,inst_28261,inst_28262,inst_28263,inst_28264,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28266 = setTimeout(inst_28265,(10));
var state_28317__$1 = (function (){var statearr_28325 = state_28317;
(statearr_28325[(17)] = inst_28259);

(statearr_28325[(18)] = inst_28264);

return statearr_28325;
})();
var statearr_28326_28393 = state_28317__$1;
(statearr_28326_28393[(2)] = inst_28266);

(statearr_28326_28393[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (27))){
var inst_28276 = (state_28317[(19)]);
var state_28317__$1 = state_28317;
var statearr_28327_28394 = state_28317__$1;
(statearr_28327_28394[(2)] = inst_28276);

(statearr_28327_28394[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (1))){
var inst_28196 = (state_28317[(20)]);
var inst_28194 = before_jsload.call(null,files);
var inst_28195 = (function (){return ((function (inst_28196,inst_28194,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (p1__27986_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27986_SHARP_);
});
;})(inst_28196,inst_28194,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28196__$1 = cljs.core.filter.call(null,inst_28195,files);
var inst_28197 = cljs.core.not_empty.call(null,inst_28196__$1);
var state_28317__$1 = (function (){var statearr_28328 = state_28317;
(statearr_28328[(20)] = inst_28196__$1);

(statearr_28328[(21)] = inst_28194);

return statearr_28328;
})();
if(cljs.core.truth_(inst_28197)){
var statearr_28329_28395 = state_28317__$1;
(statearr_28329_28395[(1)] = (2));

} else {
var statearr_28330_28396 = state_28317__$1;
(statearr_28330_28396[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (24))){
var state_28317__$1 = state_28317;
var statearr_28331_28397 = state_28317__$1;
(statearr_28331_28397[(2)] = null);

(statearr_28331_28397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (4))){
var inst_28241 = (state_28317[(2)]);
var inst_28242 = (function (){return ((function (inst_28241,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (p1__27987_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27987_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27987_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_28241,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28243 = cljs.core.filter.call(null,inst_28242,files);
var state_28317__$1 = (function (){var statearr_28332 = state_28317;
(statearr_28332[(22)] = inst_28241);

(statearr_28332[(23)] = inst_28243);

return statearr_28332;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28333_28398 = state_28317__$1;
(statearr_28333_28398[(1)] = (16));

} else {
var statearr_28334_28399 = state_28317__$1;
(statearr_28334_28399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (15))){
var inst_28231 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28335_28400 = state_28317__$1;
(statearr_28335_28400[(2)] = inst_28231);

(statearr_28335_28400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (21))){
var state_28317__$1 = state_28317;
var statearr_28336_28401 = state_28317__$1;
(statearr_28336_28401[(2)] = null);

(statearr_28336_28401[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (31))){
var inst_28284 = (state_28317[(24)]);
var inst_28294 = (state_28317[(2)]);
var inst_28295 = cljs.core.not_empty.call(null,inst_28284);
var state_28317__$1 = (function (){var statearr_28337 = state_28317;
(statearr_28337[(25)] = inst_28294);

return statearr_28337;
})();
if(cljs.core.truth_(inst_28295)){
var statearr_28338_28402 = state_28317__$1;
(statearr_28338_28402[(1)] = (32));

} else {
var statearr_28339_28403 = state_28317__$1;
(statearr_28339_28403[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (32))){
var inst_28284 = (state_28317[(24)]);
var inst_28297 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28284);
var inst_28298 = cljs.core.pr_str.call(null,inst_28297);
var inst_28299 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28298)].join('');
var inst_28300 = figwheel.client.utils.log.call(null,inst_28299);
var state_28317__$1 = state_28317;
var statearr_28340_28404 = state_28317__$1;
(statearr_28340_28404[(2)] = inst_28300);

(statearr_28340_28404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (33))){
var state_28317__$1 = state_28317;
var statearr_28341_28405 = state_28317__$1;
(statearr_28341_28405[(2)] = null);

(statearr_28341_28405[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (13))){
var inst_28217 = (state_28317[(26)]);
var inst_28221 = cljs.core.chunk_first.call(null,inst_28217);
var inst_28222 = cljs.core.chunk_rest.call(null,inst_28217);
var inst_28223 = cljs.core.count.call(null,inst_28221);
var inst_28204 = inst_28222;
var inst_28205 = inst_28221;
var inst_28206 = inst_28223;
var inst_28207 = (0);
var state_28317__$1 = (function (){var statearr_28342 = state_28317;
(statearr_28342[(7)] = inst_28206);

(statearr_28342[(8)] = inst_28207);

(statearr_28342[(9)] = inst_28205);

(statearr_28342[(10)] = inst_28204);

return statearr_28342;
})();
var statearr_28343_28406 = state_28317__$1;
(statearr_28343_28406[(2)] = null);

(statearr_28343_28406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (22))){
var inst_28256 = (state_28317[(13)]);
var inst_28269 = (state_28317[(2)]);
var inst_28270 = cljs.core.not_empty.call(null,inst_28256);
var state_28317__$1 = (function (){var statearr_28344 = state_28317;
(statearr_28344[(27)] = inst_28269);

return statearr_28344;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28345_28407 = state_28317__$1;
(statearr_28345_28407[(1)] = (23));

} else {
var statearr_28346_28408 = state_28317__$1;
(statearr_28346_28408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (36))){
var state_28317__$1 = state_28317;
var statearr_28347_28409 = state_28317__$1;
(statearr_28347_28409[(2)] = null);

(statearr_28347_28409[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (29))){
var inst_28285 = (state_28317[(28)]);
var inst_28288 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28285);
var inst_28289 = cljs.core.pr_str.call(null,inst_28288);
var inst_28290 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28289)].join('');
var inst_28291 = figwheel.client.utils.log.call(null,inst_28290);
var state_28317__$1 = state_28317;
var statearr_28348_28410 = state_28317__$1;
(statearr_28348_28410[(2)] = inst_28291);

(statearr_28348_28410[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var inst_28238 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28349_28411 = state_28317__$1;
(statearr_28349_28411[(2)] = inst_28238);

(statearr_28349_28411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (28))){
var inst_28285 = (state_28317[(28)]);
var inst_28282 = (state_28317[(2)]);
var inst_28283 = cljs.core.get.call(null,inst_28282,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28284 = cljs.core.get.call(null,inst_28282,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28285__$1 = cljs.core.get.call(null,inst_28282,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28286 = cljs.core.not_empty.call(null,inst_28285__$1);
var state_28317__$1 = (function (){var statearr_28350 = state_28317;
(statearr_28350[(28)] = inst_28285__$1);

(statearr_28350[(24)] = inst_28284);

(statearr_28350[(29)] = inst_28283);

return statearr_28350;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28351_28412 = state_28317__$1;
(statearr_28351_28412[(1)] = (29));

} else {
var statearr_28352_28413 = state_28317__$1;
(statearr_28352_28413[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (25))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (34))){
var inst_28283 = (state_28317[(29)]);
var inst_28303 = (state_28317[(2)]);
var inst_28304 = cljs.core.not_empty.call(null,inst_28283);
var state_28317__$1 = (function (){var statearr_28353 = state_28317;
(statearr_28353[(30)] = inst_28303);

return statearr_28353;
})();
if(cljs.core.truth_(inst_28304)){
var statearr_28354_28414 = state_28317__$1;
(statearr_28354_28414[(1)] = (35));

} else {
var statearr_28355_28415 = state_28317__$1;
(statearr_28355_28415[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (17))){
var inst_28243 = (state_28317[(23)]);
var state_28317__$1 = state_28317;
var statearr_28356_28416 = state_28317__$1;
(statearr_28356_28416[(2)] = inst_28243);

(statearr_28356_28416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (3))){
var state_28317__$1 = state_28317;
var statearr_28357_28417 = state_28317__$1;
(statearr_28357_28417[(2)] = null);

(statearr_28357_28417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (12))){
var inst_28234 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28358_28418 = state_28317__$1;
(statearr_28358_28418[(2)] = inst_28234);

(statearr_28358_28418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (2))){
var inst_28196 = (state_28317[(20)]);
var inst_28203 = cljs.core.seq.call(null,inst_28196);
var inst_28204 = inst_28203;
var inst_28205 = null;
var inst_28206 = (0);
var inst_28207 = (0);
var state_28317__$1 = (function (){var statearr_28359 = state_28317;
(statearr_28359[(7)] = inst_28206);

(statearr_28359[(8)] = inst_28207);

(statearr_28359[(9)] = inst_28205);

(statearr_28359[(10)] = inst_28204);

return statearr_28359;
})();
var statearr_28360_28419 = state_28317__$1;
(statearr_28360_28419[(2)] = null);

(statearr_28360_28419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (23))){
var inst_28276 = (state_28317[(19)]);
var inst_28253 = (state_28317[(12)]);
var inst_28256 = (state_28317[(13)]);
var inst_28254 = (state_28317[(14)]);
var inst_28250 = (state_28317[(15)]);
var inst_28249 = (state_28317[(16)]);
var inst_28272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28275 = (function (){var files_not_loaded = inst_28256;
var res = inst_28254;
var res_SINGLEQUOTE_ = inst_28253;
var files_SINGLEQUOTE_ = inst_28250;
var all_files = inst_28249;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28276,inst_28253,inst_28256,inst_28254,inst_28250,inst_28249,inst_28272,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (p__28274){
var map__28361 = p__28274;
var map__28361__$1 = ((cljs.core.seq_QMARK_.call(null,map__28361))?cljs.core.apply.call(null,cljs.core.hash_map,map__28361):map__28361);
var meta_data = cljs.core.get.call(null,map__28361__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28276,inst_28253,inst_28256,inst_28254,inst_28250,inst_28249,inst_28272,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28276__$1 = cljs.core.group_by.call(null,inst_28275,inst_28256);
var inst_28277 = cljs.core.seq_QMARK_.call(null,inst_28276__$1);
var state_28317__$1 = (function (){var statearr_28362 = state_28317;
(statearr_28362[(19)] = inst_28276__$1);

(statearr_28362[(31)] = inst_28272);

return statearr_28362;
})();
if(inst_28277){
var statearr_28363_28420 = state_28317__$1;
(statearr_28363_28420[(1)] = (26));

} else {
var statearr_28364_28421 = state_28317__$1;
(statearr_28364_28421[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (35))){
var inst_28283 = (state_28317[(29)]);
var inst_28306 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28283);
var inst_28307 = cljs.core.pr_str.call(null,inst_28306);
var inst_28308 = [cljs.core.str("not required: "),cljs.core.str(inst_28307)].join('');
var inst_28309 = figwheel.client.utils.log.call(null,inst_28308);
var state_28317__$1 = state_28317;
var statearr_28365_28422 = state_28317__$1;
(statearr_28365_28422[(2)] = inst_28309);

(statearr_28365_28422[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (19))){
var inst_28253 = (state_28317[(12)]);
var inst_28254 = (state_28317[(14)]);
var inst_28250 = (state_28317[(15)]);
var inst_28249 = (state_28317[(16)]);
var inst_28253__$1 = (state_28317[(2)]);
var inst_28254__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28253__$1);
var inst_28255 = (function (){var res = inst_28254__$1;
var res_SINGLEQUOTE_ = inst_28253__$1;
var files_SINGLEQUOTE_ = inst_28250;
var all_files = inst_28249;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28253,inst_28254,inst_28250,inst_28249,inst_28253__$1,inst_28254__$1,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (p1__27989_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27989_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28253,inst_28254,inst_28250,inst_28249,inst_28253__$1,inst_28254__$1,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28256 = cljs.core.filter.call(null,inst_28255,inst_28253__$1);
var inst_28257 = cljs.core.not_empty.call(null,inst_28254__$1);
var state_28317__$1 = (function (){var statearr_28366 = state_28317;
(statearr_28366[(12)] = inst_28253__$1);

(statearr_28366[(13)] = inst_28256);

(statearr_28366[(14)] = inst_28254__$1);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28257)){
var statearr_28367_28423 = state_28317__$1;
(statearr_28367_28423[(1)] = (20));

} else {
var statearr_28368_28424 = state_28317__$1;
(statearr_28368_28424[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (11))){
var state_28317__$1 = state_28317;
var statearr_28369_28425 = state_28317__$1;
(statearr_28369_28425[(2)] = null);

(statearr_28369_28425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (9))){
var inst_28236 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28370_28426 = state_28317__$1;
(statearr_28370_28426[(2)] = inst_28236);

(statearr_28370_28426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (5))){
var inst_28206 = (state_28317[(7)]);
var inst_28207 = (state_28317[(8)]);
var inst_28209 = (inst_28207 < inst_28206);
var inst_28210 = inst_28209;
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28210)){
var statearr_28371_28427 = state_28317__$1;
(statearr_28371_28427[(1)] = (7));

} else {
var statearr_28372_28428 = state_28317__$1;
(statearr_28372_28428[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (14))){
var inst_28217 = (state_28317[(26)]);
var inst_28226 = cljs.core.first.call(null,inst_28217);
var inst_28227 = figwheel.client.file_reloading.eval_body.call(null,inst_28226);
var inst_28228 = cljs.core.next.call(null,inst_28217);
var inst_28204 = inst_28228;
var inst_28205 = null;
var inst_28206 = (0);
var inst_28207 = (0);
var state_28317__$1 = (function (){var statearr_28373 = state_28317;
(statearr_28373[(7)] = inst_28206);

(statearr_28373[(8)] = inst_28207);

(statearr_28373[(9)] = inst_28205);

(statearr_28373[(32)] = inst_28227);

(statearr_28373[(10)] = inst_28204);

return statearr_28373;
})();
var statearr_28374_28429 = state_28317__$1;
(statearr_28374_28429[(2)] = null);

(statearr_28374_28429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (26))){
var inst_28276 = (state_28317[(19)]);
var inst_28279 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28276);
var state_28317__$1 = state_28317;
var statearr_28375_28430 = state_28317__$1;
(statearr_28375_28430[(2)] = inst_28279);

(statearr_28375_28430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (16))){
var inst_28243 = (state_28317[(23)]);
var inst_28245 = (function (){var all_files = inst_28243;
return ((function (all_files,inst_28243,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function (p1__27988_SHARP_){
return cljs.core.update_in.call(null,p1__27988_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28243,state_val_28318,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var inst_28246 = cljs.core.map.call(null,inst_28245,inst_28243);
var state_28317__$1 = state_28317;
var statearr_28376_28431 = state_28317__$1;
(statearr_28376_28431[(2)] = inst_28246);

(statearr_28376_28431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (30))){
var state_28317__$1 = state_28317;
var statearr_28377_28432 = state_28317__$1;
(statearr_28377_28432[(2)] = null);

(statearr_28377_28432[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (10))){
var inst_28217 = (state_28317[(26)]);
var inst_28219 = cljs.core.chunked_seq_QMARK_.call(null,inst_28217);
var state_28317__$1 = state_28317;
if(inst_28219){
var statearr_28378_28433 = state_28317__$1;
(statearr_28378_28433[(1)] = (13));

} else {
var statearr_28379_28434 = state_28317__$1;
(statearr_28379_28434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (18))){
var inst_28250 = (state_28317[(15)]);
var inst_28249 = (state_28317[(16)]);
var inst_28249__$1 = (state_28317[(2)]);
var inst_28250__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28249__$1);
var inst_28251 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28250__$1);
var state_28317__$1 = (function (){var statearr_28380 = state_28317;
(statearr_28380[(15)] = inst_28250__$1);

(statearr_28380[(16)] = inst_28249__$1);

return statearr_28380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(19),inst_28251);
} else {
if((state_val_28318 === (37))){
var inst_28312 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28381_28435 = state_28317__$1;
(statearr_28381_28435[(2)] = inst_28312);

(statearr_28381_28435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (8))){
var inst_28217 = (state_28317[(26)]);
var inst_28204 = (state_28317[(10)]);
var inst_28217__$1 = cljs.core.seq.call(null,inst_28204);
var state_28317__$1 = (function (){var statearr_28382 = state_28317;
(statearr_28382[(26)] = inst_28217__$1);

return statearr_28382;
})();
if(inst_28217__$1){
var statearr_28383_28436 = state_28317__$1;
(statearr_28383_28436[(1)] = (10));

} else {
var statearr_28384_28437 = state_28317__$1;
(statearr_28384_28437[(1)] = (11));

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
});})(c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
;
return ((function (switch__23185__auto__,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto____0 = (function (){
var statearr_28388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28388[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto__);

(statearr_28388[(1)] = (1));

return statearr_28388;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto____1 = (function (state_28317){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28389){if((e28389 instanceof Object)){
var ex__23189__auto__ = e28389;
var statearr_28390_28438 = state_28317;
(statearr_28390_28438[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28439 = state_28317;
state_28317 = G__28439;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
})();
var state__23249__auto__ = (function (){var statearr_28391 = f__23248__auto__.call(null);
(statearr_28391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_28391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__,map__28192,map__28192__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28193,map__28193__$1,msg,files))
);

return c__23247__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28442,link){
var map__28444 = p__28442;
var map__28444__$1 = ((cljs.core.seq_QMARK_.call(null,map__28444))?cljs.core.apply.call(null,cljs.core.hash_map,map__28444):map__28444);
var file = cljs.core.get.call(null,map__28444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__28444,map__28444__$1,file){
return (function (p1__28440_SHARP_,p2__28441_SHARP_){
if(cljs.core._EQ_.call(null,p1__28440_SHARP_,p2__28441_SHARP_)){
return p1__28440_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__28444,map__28444__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28448){
var map__28449 = p__28448;
var map__28449__$1 = ((cljs.core.seq_QMARK_.call(null,map__28449))?cljs.core.apply.call(null,cljs.core.hash_map,map__28449):map__28449);
var current_url_length = cljs.core.get.call(null,map__28449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__28449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28445_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28445_SHARP_);
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
var G__28451 = arguments.length;
switch (G__28451) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28453){
var map__28455 = p__28453;
var map__28455__$1 = ((cljs.core.seq_QMARK_.call(null,map__28455))?cljs.core.apply.call(null,cljs.core.hash_map,map__28455):map__28455);
var f_data = map__28455__$1;
var request_url = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28456,files_msg){
var map__28478 = p__28456;
var map__28478__$1 = ((cljs.core.seq_QMARK_.call(null,map__28478))?cljs.core.apply.call(null,cljs.core.hash_map,map__28478):map__28478);
var opts = map__28478__$1;
var on_cssload = cljs.core.get.call(null,map__28478__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28479_28499 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28480_28500 = null;
var count__28481_28501 = (0);
var i__28482_28502 = (0);
while(true){
if((i__28482_28502 < count__28481_28501)){
var f_28503 = cljs.core._nth.call(null,chunk__28480_28500,i__28482_28502);
figwheel.client.file_reloading.reload_css_file.call(null,f_28503);

var G__28504 = seq__28479_28499;
var G__28505 = chunk__28480_28500;
var G__28506 = count__28481_28501;
var G__28507 = (i__28482_28502 + (1));
seq__28479_28499 = G__28504;
chunk__28480_28500 = G__28505;
count__28481_28501 = G__28506;
i__28482_28502 = G__28507;
continue;
} else {
var temp__4126__auto___28508 = cljs.core.seq.call(null,seq__28479_28499);
if(temp__4126__auto___28508){
var seq__28479_28509__$1 = temp__4126__auto___28508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28479_28509__$1)){
var c__18901__auto___28510 = cljs.core.chunk_first.call(null,seq__28479_28509__$1);
var G__28511 = cljs.core.chunk_rest.call(null,seq__28479_28509__$1);
var G__28512 = c__18901__auto___28510;
var G__28513 = cljs.core.count.call(null,c__18901__auto___28510);
var G__28514 = (0);
seq__28479_28499 = G__28511;
chunk__28480_28500 = G__28512;
count__28481_28501 = G__28513;
i__28482_28502 = G__28514;
continue;
} else {
var f_28515 = cljs.core.first.call(null,seq__28479_28509__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28515);

var G__28516 = cljs.core.next.call(null,seq__28479_28509__$1);
var G__28517 = null;
var G__28518 = (0);
var G__28519 = (0);
seq__28479_28499 = G__28516;
chunk__28480_28500 = G__28517;
count__28481_28501 = G__28518;
i__28482_28502 = G__28519;
continue;
}
} else {
}
}
break;
}

var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__,map__28478,map__28478__$1,opts,on_cssload){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__,map__28478,map__28478__$1,opts,on_cssload){
return (function (state_28489){
var state_val_28490 = (state_28489[(1)]);
if((state_val_28490 === (2))){
var inst_28485 = (state_28489[(2)]);
var inst_28486 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28487 = on_cssload.call(null,inst_28486);
var state_28489__$1 = (function (){var statearr_28491 = state_28489;
(statearr_28491[(7)] = inst_28485);

return statearr_28491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28489__$1,inst_28487);
} else {
if((state_val_28490 === (1))){
var inst_28483 = cljs.core.async.timeout.call(null,(100));
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28489__$1,(2),inst_28483);
} else {
return null;
}
}
});})(c__23247__auto__,map__28478,map__28478__$1,opts,on_cssload))
;
return ((function (switch__23185__auto__,c__23247__auto__,map__28478,map__28478__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null,null];
(statearr_28495[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto____1 = (function (state_28489){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_28489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e28496){if((e28496 instanceof Object)){
var ex__23189__auto__ = e28496;
var statearr_28497_28520 = state_28489;
(statearr_28497_28520[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28521 = state_28489;
state_28489 = G__28521;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto__ = function(state_28489){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto____1.call(this,state_28489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__,map__28478,map__28478__$1,opts,on_cssload))
})();
var state__23249__auto__ = (function (){var statearr_28498 = f__23248__auto__.call(null);
(statearr_28498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_28498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__,map__28478,map__28478__$1,opts,on_cssload))
);

return c__23247__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1431821093306