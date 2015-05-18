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
return cljs.core.reduce.call(null,(function (p1__28061_SHARP_,p2__28062_SHARP_){
var and__18104__auto__ = p1__28061_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__28062_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28063){
var map__28064 = p__28063;
var map__28064__$1 = ((cljs.core.seq_QMARK_.call(null,map__28064))?cljs.core.apply.call(null,cljs.core.hash_map,map__28064):map__28064);
var file = cljs.core.get.call(null,map__28064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28065){
var map__28066 = p__28065;
var map__28066__$1 = ((cljs.core.seq_QMARK_.call(null,map__28066))?cljs.core.apply.call(null,cljs.core.hash_map,map__28066):map__28066);
var namespace = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e28067){if((e28067 instanceof Error)){
var e = e28067;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28067;

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
var G__28069 = arguments.length;
switch (G__28069) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28071,callback){
var map__28073 = p__28071;
var map__28073__$1 = ((cljs.core.seq_QMARK_.call(null,map__28073))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var file_msg = map__28073__$1;
var request_url = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28073,map__28073__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28073,map__28073__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28074){
var map__28076 = p__28074;
var map__28076__$1 = ((cljs.core.seq_QMARK_.call(null,map__28076))?cljs.core.apply.call(null,cljs.core.hash_map,map__28076):map__28076);
var file_msg = map__28076__$1;
var meta_data = cljs.core.get.call(null,map__28076__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__28076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28077,callback){
var map__28079 = p__28077;
var map__28079__$1 = ((cljs.core.seq_QMARK_.call(null,map__28079))?cljs.core.apply.call(null,cljs.core.hash_map,map__28079):map__28079);
var file_msg = map__28079__$1;
var namespace = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__23400__auto___28166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___28166,out){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___28166,out){
return (function (state_28148){
var state_val_28149 = (state_28148[(1)]);
if((state_val_28149 === (7))){
var inst_28132 = (state_28148[(7)]);
var inst_28138 = (state_28148[(2)]);
var inst_28139 = cljs.core.async.put_BANG_.call(null,out,inst_28138);
var inst_28128 = inst_28132;
var state_28148__$1 = (function (){var statearr_28150 = state_28148;
(statearr_28150[(8)] = inst_28139);

(statearr_28150[(9)] = inst_28128);

return statearr_28150;
})();
var statearr_28151_28167 = state_28148__$1;
(statearr_28151_28167[(2)] = null);

(statearr_28151_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28149 === (6))){
var inst_28144 = (state_28148[(2)]);
var state_28148__$1 = state_28148;
var statearr_28152_28168 = state_28148__$1;
(statearr_28152_28168[(2)] = inst_28144);

(statearr_28152_28168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28149 === (5))){
var inst_28142 = cljs.core.async.close_BANG_.call(null,out);
var state_28148__$1 = state_28148;
var statearr_28153_28169 = state_28148__$1;
(statearr_28153_28169[(2)] = inst_28142);

(statearr_28153_28169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28149 === (4))){
var inst_28131 = (state_28148[(10)]);
var inst_28136 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28131);
var state_28148__$1 = state_28148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28148__$1,(7),inst_28136);
} else {
if((state_val_28149 === (3))){
var inst_28146 = (state_28148[(2)]);
var state_28148__$1 = state_28148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28148__$1,inst_28146);
} else {
if((state_val_28149 === (2))){
var inst_28131 = (state_28148[(10)]);
var inst_28128 = (state_28148[(9)]);
var inst_28131__$1 = cljs.core.nth.call(null,inst_28128,(0),null);
var inst_28132 = cljs.core.nthnext.call(null,inst_28128,(1));
var inst_28133 = (inst_28131__$1 == null);
var inst_28134 = cljs.core.not.call(null,inst_28133);
var state_28148__$1 = (function (){var statearr_28154 = state_28148;
(statearr_28154[(7)] = inst_28132);

(statearr_28154[(10)] = inst_28131__$1);

return statearr_28154;
})();
if(inst_28134){
var statearr_28155_28170 = state_28148__$1;
(statearr_28155_28170[(1)] = (4));

} else {
var statearr_28156_28171 = state_28148__$1;
(statearr_28156_28171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28149 === (1))){
var inst_28126 = cljs.core.nth.call(null,files,(0),null);
var inst_28127 = cljs.core.nthnext.call(null,files,(1));
var inst_28128 = files;
var state_28148__$1 = (function (){var statearr_28157 = state_28148;
(statearr_28157[(11)] = inst_28126);

(statearr_28157[(9)] = inst_28128);

(statearr_28157[(12)] = inst_28127);

return statearr_28157;
})();
var statearr_28158_28172 = state_28148__$1;
(statearr_28158_28172[(2)] = null);

(statearr_28158_28172[(1)] = (2));


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
});})(c__23400__auto___28166,out))
;
return ((function (switch__23338__auto__,c__23400__auto___28166,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto____0 = (function (){
var statearr_28162 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28162[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto__);

(statearr_28162[(1)] = (1));

return statearr_28162;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto____1 = (function (state_28148){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_28148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e28163){if((e28163 instanceof Object)){
var ex__23342__auto__ = e28163;
var statearr_28164_28173 = state_28148;
(statearr_28164_28173[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28174 = state_28148;
state_28148 = G__28174;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto__ = function(state_28148){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto____1.call(this,state_28148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___28166,out))
})();
var state__23402__auto__ = (function (){var statearr_28165 = f__23401__auto__.call(null);
(statearr_28165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___28166);

return statearr_28165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___28166,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28175,p__28176){
var map__28179 = p__28175;
var map__28179__$1 = ((cljs.core.seq_QMARK_.call(null,map__28179))?cljs.core.apply.call(null,cljs.core.hash_map,map__28179):map__28179);
var opts = map__28179__$1;
var url_rewriter = cljs.core.get.call(null,map__28179__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28180 = p__28176;
var map__28180__$1 = ((cljs.core.seq_QMARK_.call(null,map__28180))?cljs.core.apply.call(null,cljs.core.hash_map,map__28180):map__28180);
var file_msg = map__28180__$1;
var file = cljs.core.get.call(null,map__28180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28181){
var map__28184 = p__28181;
var map__28184__$1 = ((cljs.core.seq_QMARK_.call(null,map__28184))?cljs.core.apply.call(null,cljs.core.hash_map,map__28184):map__28184);
var file = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e28185){var e = e28185;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28190,p__28191){
var map__28392 = p__28190;
var map__28392__$1 = ((cljs.core.seq_QMARK_.call(null,map__28392))?cljs.core.apply.call(null,cljs.core.hash_map,map__28392):map__28392);
var opts = map__28392__$1;
var load_unchanged_files = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__28393 = p__28191;
var map__28393__$1 = ((cljs.core.seq_QMARK_.call(null,map__28393))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);
var msg = map__28393__$1;
var files = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (state_28517){
var state_val_28518 = (state_28517[(1)]);
if((state_val_28518 === (7))){
var inst_28404 = (state_28517[(7)]);
var inst_28407 = (state_28517[(8)]);
var inst_28406 = (state_28517[(9)]);
var inst_28405 = (state_28517[(10)]);
var inst_28412 = cljs.core._nth.call(null,inst_28405,inst_28407);
var inst_28413 = figwheel.client.file_reloading.eval_body.call(null,inst_28412);
var inst_28414 = (inst_28407 + (1));
var tmp28519 = inst_28404;
var tmp28520 = inst_28406;
var tmp28521 = inst_28405;
var inst_28404__$1 = tmp28519;
var inst_28405__$1 = tmp28521;
var inst_28406__$1 = tmp28520;
var inst_28407__$1 = inst_28414;
var state_28517__$1 = (function (){var statearr_28522 = state_28517;
(statearr_28522[(7)] = inst_28404__$1);

(statearr_28522[(8)] = inst_28407__$1);

(statearr_28522[(9)] = inst_28406__$1);

(statearr_28522[(11)] = inst_28413);

(statearr_28522[(10)] = inst_28405__$1);

return statearr_28522;
})();
var statearr_28523_28592 = state_28517__$1;
(statearr_28523_28592[(2)] = null);

(statearr_28523_28592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (20))){
var inst_28450 = (state_28517[(12)]);
var inst_28454 = (state_28517[(13)]);
var inst_28456 = (state_28517[(14)]);
var inst_28453 = (state_28517[(15)]);
var inst_28449 = (state_28517[(16)]);
var inst_28459 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28461 = (function (){var files_not_loaded = inst_28456;
var res = inst_28454;
var res_SINGLEQUOTE_ = inst_28453;
var files_SINGLEQUOTE_ = inst_28450;
var all_files = inst_28449;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28456,inst_28453,inst_28449,inst_28459,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (p__28460){
var map__28524 = p__28460;
var map__28524__$1 = ((cljs.core.seq_QMARK_.call(null,map__28524))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);
var file = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28456,inst_28453,inst_28449,inst_28459,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28462 = cljs.core.map.call(null,inst_28461,inst_28454);
var inst_28463 = cljs.core.pr_str.call(null,inst_28462);
var inst_28464 = figwheel.client.utils.log.call(null,inst_28463);
var inst_28465 = (function (){var files_not_loaded = inst_28456;
var res = inst_28454;
var res_SINGLEQUOTE_ = inst_28453;
var files_SINGLEQUOTE_ = inst_28450;
var all_files = inst_28449;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28456,inst_28453,inst_28449,inst_28459,inst_28461,inst_28462,inst_28463,inst_28464,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28456,inst_28453,inst_28449,inst_28459,inst_28461,inst_28462,inst_28463,inst_28464,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28466 = setTimeout(inst_28465,(10));
var state_28517__$1 = (function (){var statearr_28525 = state_28517;
(statearr_28525[(17)] = inst_28464);

(statearr_28525[(18)] = inst_28459);

return statearr_28525;
})();
var statearr_28526_28593 = state_28517__$1;
(statearr_28526_28593[(2)] = inst_28466);

(statearr_28526_28593[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (27))){
var inst_28476 = (state_28517[(19)]);
var state_28517__$1 = state_28517;
var statearr_28527_28594 = state_28517__$1;
(statearr_28527_28594[(2)] = inst_28476);

(statearr_28527_28594[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (1))){
var inst_28396 = (state_28517[(20)]);
var inst_28394 = before_jsload.call(null,files);
var inst_28395 = (function (){return ((function (inst_28396,inst_28394,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (p1__28186_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28186_SHARP_);
});
;})(inst_28396,inst_28394,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28396__$1 = cljs.core.filter.call(null,inst_28395,files);
var inst_28397 = cljs.core.not_empty.call(null,inst_28396__$1);
var state_28517__$1 = (function (){var statearr_28528 = state_28517;
(statearr_28528[(20)] = inst_28396__$1);

(statearr_28528[(21)] = inst_28394);

return statearr_28528;
})();
if(cljs.core.truth_(inst_28397)){
var statearr_28529_28595 = state_28517__$1;
(statearr_28529_28595[(1)] = (2));

} else {
var statearr_28530_28596 = state_28517__$1;
(statearr_28530_28596[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (24))){
var state_28517__$1 = state_28517;
var statearr_28531_28597 = state_28517__$1;
(statearr_28531_28597[(2)] = null);

(statearr_28531_28597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (4))){
var inst_28441 = (state_28517[(2)]);
var inst_28442 = (function (){return ((function (inst_28441,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (p1__28187_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28187_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28187_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_28441,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28443 = cljs.core.filter.call(null,inst_28442,files);
var state_28517__$1 = (function (){var statearr_28532 = state_28517;
(statearr_28532[(22)] = inst_28443);

(statearr_28532[(23)] = inst_28441);

return statearr_28532;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28533_28598 = state_28517__$1;
(statearr_28533_28598[(1)] = (16));

} else {
var statearr_28534_28599 = state_28517__$1;
(statearr_28534_28599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (15))){
var inst_28431 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28535_28600 = state_28517__$1;
(statearr_28535_28600[(2)] = inst_28431);

(statearr_28535_28600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (21))){
var state_28517__$1 = state_28517;
var statearr_28536_28601 = state_28517__$1;
(statearr_28536_28601[(2)] = null);

(statearr_28536_28601[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (31))){
var inst_28484 = (state_28517[(24)]);
var inst_28494 = (state_28517[(2)]);
var inst_28495 = cljs.core.not_empty.call(null,inst_28484);
var state_28517__$1 = (function (){var statearr_28537 = state_28517;
(statearr_28537[(25)] = inst_28494);

return statearr_28537;
})();
if(cljs.core.truth_(inst_28495)){
var statearr_28538_28602 = state_28517__$1;
(statearr_28538_28602[(1)] = (32));

} else {
var statearr_28539_28603 = state_28517__$1;
(statearr_28539_28603[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (32))){
var inst_28484 = (state_28517[(24)]);
var inst_28497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28484);
var inst_28498 = cljs.core.pr_str.call(null,inst_28497);
var inst_28499 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28498)].join('');
var inst_28500 = figwheel.client.utils.log.call(null,inst_28499);
var state_28517__$1 = state_28517;
var statearr_28540_28604 = state_28517__$1;
(statearr_28540_28604[(2)] = inst_28500);

(statearr_28540_28604[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (33))){
var state_28517__$1 = state_28517;
var statearr_28541_28605 = state_28517__$1;
(statearr_28541_28605[(2)] = null);

(statearr_28541_28605[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (13))){
var inst_28417 = (state_28517[(26)]);
var inst_28421 = cljs.core.chunk_first.call(null,inst_28417);
var inst_28422 = cljs.core.chunk_rest.call(null,inst_28417);
var inst_28423 = cljs.core.count.call(null,inst_28421);
var inst_28404 = inst_28422;
var inst_28405 = inst_28421;
var inst_28406 = inst_28423;
var inst_28407 = (0);
var state_28517__$1 = (function (){var statearr_28542 = state_28517;
(statearr_28542[(7)] = inst_28404);

(statearr_28542[(8)] = inst_28407);

(statearr_28542[(9)] = inst_28406);

(statearr_28542[(10)] = inst_28405);

return statearr_28542;
})();
var statearr_28543_28606 = state_28517__$1;
(statearr_28543_28606[(2)] = null);

(statearr_28543_28606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (22))){
var inst_28456 = (state_28517[(14)]);
var inst_28469 = (state_28517[(2)]);
var inst_28470 = cljs.core.not_empty.call(null,inst_28456);
var state_28517__$1 = (function (){var statearr_28544 = state_28517;
(statearr_28544[(27)] = inst_28469);

return statearr_28544;
})();
if(cljs.core.truth_(inst_28470)){
var statearr_28545_28607 = state_28517__$1;
(statearr_28545_28607[(1)] = (23));

} else {
var statearr_28546_28608 = state_28517__$1;
(statearr_28546_28608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (36))){
var state_28517__$1 = state_28517;
var statearr_28547_28609 = state_28517__$1;
(statearr_28547_28609[(2)] = null);

(statearr_28547_28609[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (29))){
var inst_28485 = (state_28517[(28)]);
var inst_28488 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28485);
var inst_28489 = cljs.core.pr_str.call(null,inst_28488);
var inst_28490 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28489)].join('');
var inst_28491 = figwheel.client.utils.log.call(null,inst_28490);
var state_28517__$1 = state_28517;
var statearr_28548_28610 = state_28517__$1;
(statearr_28548_28610[(2)] = inst_28491);

(statearr_28548_28610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (6))){
var inst_28438 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28549_28611 = state_28517__$1;
(statearr_28549_28611[(2)] = inst_28438);

(statearr_28549_28611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (28))){
var inst_28485 = (state_28517[(28)]);
var inst_28482 = (state_28517[(2)]);
var inst_28483 = cljs.core.get.call(null,inst_28482,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28484 = cljs.core.get.call(null,inst_28482,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28485__$1 = cljs.core.get.call(null,inst_28482,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28486 = cljs.core.not_empty.call(null,inst_28485__$1);
var state_28517__$1 = (function (){var statearr_28550 = state_28517;
(statearr_28550[(24)] = inst_28484);

(statearr_28550[(28)] = inst_28485__$1);

(statearr_28550[(29)] = inst_28483);

return statearr_28550;
})();
if(cljs.core.truth_(inst_28486)){
var statearr_28551_28612 = state_28517__$1;
(statearr_28551_28612[(1)] = (29));

} else {
var statearr_28552_28613 = state_28517__$1;
(statearr_28552_28613[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (25))){
var inst_28515 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28517__$1,inst_28515);
} else {
if((state_val_28518 === (34))){
var inst_28483 = (state_28517[(29)]);
var inst_28503 = (state_28517[(2)]);
var inst_28504 = cljs.core.not_empty.call(null,inst_28483);
var state_28517__$1 = (function (){var statearr_28553 = state_28517;
(statearr_28553[(30)] = inst_28503);

return statearr_28553;
})();
if(cljs.core.truth_(inst_28504)){
var statearr_28554_28614 = state_28517__$1;
(statearr_28554_28614[(1)] = (35));

} else {
var statearr_28555_28615 = state_28517__$1;
(statearr_28555_28615[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (17))){
var inst_28443 = (state_28517[(22)]);
var state_28517__$1 = state_28517;
var statearr_28556_28616 = state_28517__$1;
(statearr_28556_28616[(2)] = inst_28443);

(statearr_28556_28616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (3))){
var state_28517__$1 = state_28517;
var statearr_28557_28617 = state_28517__$1;
(statearr_28557_28617[(2)] = null);

(statearr_28557_28617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (12))){
var inst_28434 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28558_28618 = state_28517__$1;
(statearr_28558_28618[(2)] = inst_28434);

(statearr_28558_28618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (2))){
var inst_28396 = (state_28517[(20)]);
var inst_28403 = cljs.core.seq.call(null,inst_28396);
var inst_28404 = inst_28403;
var inst_28405 = null;
var inst_28406 = (0);
var inst_28407 = (0);
var state_28517__$1 = (function (){var statearr_28559 = state_28517;
(statearr_28559[(7)] = inst_28404);

(statearr_28559[(8)] = inst_28407);

(statearr_28559[(9)] = inst_28406);

(statearr_28559[(10)] = inst_28405);

return statearr_28559;
})();
var statearr_28560_28619 = state_28517__$1;
(statearr_28560_28619[(2)] = null);

(statearr_28560_28619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (23))){
var inst_28450 = (state_28517[(12)]);
var inst_28454 = (state_28517[(13)]);
var inst_28476 = (state_28517[(19)]);
var inst_28456 = (state_28517[(14)]);
var inst_28453 = (state_28517[(15)]);
var inst_28449 = (state_28517[(16)]);
var inst_28472 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28475 = (function (){var files_not_loaded = inst_28456;
var res = inst_28454;
var res_SINGLEQUOTE_ = inst_28453;
var files_SINGLEQUOTE_ = inst_28450;
var all_files = inst_28449;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28476,inst_28456,inst_28453,inst_28449,inst_28472,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (p__28474){
var map__28561 = p__28474;
var map__28561__$1 = ((cljs.core.seq_QMARK_.call(null,map__28561))?cljs.core.apply.call(null,cljs.core.hash_map,map__28561):map__28561);
var meta_data = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28476,inst_28456,inst_28453,inst_28449,inst_28472,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28476__$1 = cljs.core.group_by.call(null,inst_28475,inst_28456);
var inst_28477 = cljs.core.seq_QMARK_.call(null,inst_28476__$1);
var state_28517__$1 = (function (){var statearr_28562 = state_28517;
(statearr_28562[(31)] = inst_28472);

(statearr_28562[(19)] = inst_28476__$1);

return statearr_28562;
})();
if(inst_28477){
var statearr_28563_28620 = state_28517__$1;
(statearr_28563_28620[(1)] = (26));

} else {
var statearr_28564_28621 = state_28517__$1;
(statearr_28564_28621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (35))){
var inst_28483 = (state_28517[(29)]);
var inst_28506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28483);
var inst_28507 = cljs.core.pr_str.call(null,inst_28506);
var inst_28508 = [cljs.core.str("not required: "),cljs.core.str(inst_28507)].join('');
var inst_28509 = figwheel.client.utils.log.call(null,inst_28508);
var state_28517__$1 = state_28517;
var statearr_28565_28622 = state_28517__$1;
(statearr_28565_28622[(2)] = inst_28509);

(statearr_28565_28622[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (19))){
var inst_28450 = (state_28517[(12)]);
var inst_28454 = (state_28517[(13)]);
var inst_28453 = (state_28517[(15)]);
var inst_28449 = (state_28517[(16)]);
var inst_28453__$1 = (state_28517[(2)]);
var inst_28454__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28453__$1);
var inst_28455 = (function (){var res = inst_28454__$1;
var res_SINGLEQUOTE_ = inst_28453__$1;
var files_SINGLEQUOTE_ = inst_28450;
var all_files = inst_28449;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28453,inst_28449,inst_28453__$1,inst_28454__$1,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (p1__28189_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28189_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28450,inst_28454,inst_28453,inst_28449,inst_28453__$1,inst_28454__$1,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28456 = cljs.core.filter.call(null,inst_28455,inst_28453__$1);
var inst_28457 = cljs.core.not_empty.call(null,inst_28454__$1);
var state_28517__$1 = (function (){var statearr_28566 = state_28517;
(statearr_28566[(13)] = inst_28454__$1);

(statearr_28566[(14)] = inst_28456);

(statearr_28566[(15)] = inst_28453__$1);

return statearr_28566;
})();
if(cljs.core.truth_(inst_28457)){
var statearr_28567_28623 = state_28517__$1;
(statearr_28567_28623[(1)] = (20));

} else {
var statearr_28568_28624 = state_28517__$1;
(statearr_28568_28624[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (11))){
var state_28517__$1 = state_28517;
var statearr_28569_28625 = state_28517__$1;
(statearr_28569_28625[(2)] = null);

(statearr_28569_28625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (9))){
var inst_28436 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28570_28626 = state_28517__$1;
(statearr_28570_28626[(2)] = inst_28436);

(statearr_28570_28626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (5))){
var inst_28407 = (state_28517[(8)]);
var inst_28406 = (state_28517[(9)]);
var inst_28409 = (inst_28407 < inst_28406);
var inst_28410 = inst_28409;
var state_28517__$1 = state_28517;
if(cljs.core.truth_(inst_28410)){
var statearr_28571_28627 = state_28517__$1;
(statearr_28571_28627[(1)] = (7));

} else {
var statearr_28572_28628 = state_28517__$1;
(statearr_28572_28628[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (14))){
var inst_28417 = (state_28517[(26)]);
var inst_28426 = cljs.core.first.call(null,inst_28417);
var inst_28427 = figwheel.client.file_reloading.eval_body.call(null,inst_28426);
var inst_28428 = cljs.core.next.call(null,inst_28417);
var inst_28404 = inst_28428;
var inst_28405 = null;
var inst_28406 = (0);
var inst_28407 = (0);
var state_28517__$1 = (function (){var statearr_28573 = state_28517;
(statearr_28573[(7)] = inst_28404);

(statearr_28573[(8)] = inst_28407);

(statearr_28573[(32)] = inst_28427);

(statearr_28573[(9)] = inst_28406);

(statearr_28573[(10)] = inst_28405);

return statearr_28573;
})();
var statearr_28574_28629 = state_28517__$1;
(statearr_28574_28629[(2)] = null);

(statearr_28574_28629[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (26))){
var inst_28476 = (state_28517[(19)]);
var inst_28479 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28476);
var state_28517__$1 = state_28517;
var statearr_28575_28630 = state_28517__$1;
(statearr_28575_28630[(2)] = inst_28479);

(statearr_28575_28630[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (16))){
var inst_28443 = (state_28517[(22)]);
var inst_28445 = (function (){var all_files = inst_28443;
return ((function (all_files,inst_28443,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function (p1__28188_SHARP_){
return cljs.core.update_in.call(null,p1__28188_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28443,state_val_28518,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var inst_28446 = cljs.core.map.call(null,inst_28445,inst_28443);
var state_28517__$1 = state_28517;
var statearr_28576_28631 = state_28517__$1;
(statearr_28576_28631[(2)] = inst_28446);

(statearr_28576_28631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (30))){
var state_28517__$1 = state_28517;
var statearr_28577_28632 = state_28517__$1;
(statearr_28577_28632[(2)] = null);

(statearr_28577_28632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (10))){
var inst_28417 = (state_28517[(26)]);
var inst_28419 = cljs.core.chunked_seq_QMARK_.call(null,inst_28417);
var state_28517__$1 = state_28517;
if(inst_28419){
var statearr_28578_28633 = state_28517__$1;
(statearr_28578_28633[(1)] = (13));

} else {
var statearr_28579_28634 = state_28517__$1;
(statearr_28579_28634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (18))){
var inst_28450 = (state_28517[(12)]);
var inst_28449 = (state_28517[(16)]);
var inst_28449__$1 = (state_28517[(2)]);
var inst_28450__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28449__$1);
var inst_28451 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28450__$1);
var state_28517__$1 = (function (){var statearr_28580 = state_28517;
(statearr_28580[(12)] = inst_28450__$1);

(statearr_28580[(16)] = inst_28449__$1);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28517__$1,(19),inst_28451);
} else {
if((state_val_28518 === (37))){
var inst_28512 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28581_28635 = state_28517__$1;
(statearr_28581_28635[(2)] = inst_28512);

(statearr_28581_28635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (8))){
var inst_28417 = (state_28517[(26)]);
var inst_28404 = (state_28517[(7)]);
var inst_28417__$1 = cljs.core.seq.call(null,inst_28404);
var state_28517__$1 = (function (){var statearr_28582 = state_28517;
(statearr_28582[(26)] = inst_28417__$1);

return statearr_28582;
})();
if(inst_28417__$1){
var statearr_28583_28636 = state_28517__$1;
(statearr_28583_28636[(1)] = (10));

} else {
var statearr_28584_28637 = state_28517__$1;
(statearr_28584_28637[(1)] = (11));

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
});})(c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
;
return ((function (switch__23338__auto__,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto____0 = (function (){
var statearr_28588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28588[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto__);

(statearr_28588[(1)] = (1));

return statearr_28588;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto____1 = (function (state_28517){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_28517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e28589){if((e28589 instanceof Object)){
var ex__23342__auto__ = e28589;
var statearr_28590_28638 = state_28517;
(statearr_28590_28638[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28639 = state_28517;
state_28517 = G__28639;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto__ = function(state_28517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto____1.call(this,state_28517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
})();
var state__23402__auto__ = (function (){var statearr_28591 = f__23401__auto__.call(null);
(statearr_28591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_28591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__,map__28392,map__28392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28393,map__28393__$1,msg,files))
);

return c__23400__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28642,link){
var map__28644 = p__28642;
var map__28644__$1 = ((cljs.core.seq_QMARK_.call(null,map__28644))?cljs.core.apply.call(null,cljs.core.hash_map,map__28644):map__28644);
var file = cljs.core.get.call(null,map__28644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__28644,map__28644__$1,file){
return (function (p1__28640_SHARP_,p2__28641_SHARP_){
if(cljs.core._EQ_.call(null,p1__28640_SHARP_,p2__28641_SHARP_)){
return p1__28640_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__28644,map__28644__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28648){
var map__28649 = p__28648;
var map__28649__$1 = ((cljs.core.seq_QMARK_.call(null,map__28649))?cljs.core.apply.call(null,cljs.core.hash_map,map__28649):map__28649);
var current_url_length = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28645_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28645_SHARP_);
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
var G__28651 = arguments.length;
switch (G__28651) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28653){
var map__28655 = p__28653;
var map__28655__$1 = ((cljs.core.seq_QMARK_.call(null,map__28655))?cljs.core.apply.call(null,cljs.core.hash_map,map__28655):map__28655);
var f_data = map__28655__$1;
var request_url = cljs.core.get.call(null,map__28655__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__28655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28656,files_msg){
var map__28678 = p__28656;
var map__28678__$1 = ((cljs.core.seq_QMARK_.call(null,map__28678))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);
var opts = map__28678__$1;
var on_cssload = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28679_28699 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28680_28700 = null;
var count__28681_28701 = (0);
var i__28682_28702 = (0);
while(true){
if((i__28682_28702 < count__28681_28701)){
var f_28703 = cljs.core._nth.call(null,chunk__28680_28700,i__28682_28702);
figwheel.client.file_reloading.reload_css_file.call(null,f_28703);

var G__28704 = seq__28679_28699;
var G__28705 = chunk__28680_28700;
var G__28706 = count__28681_28701;
var G__28707 = (i__28682_28702 + (1));
seq__28679_28699 = G__28704;
chunk__28680_28700 = G__28705;
count__28681_28701 = G__28706;
i__28682_28702 = G__28707;
continue;
} else {
var temp__4126__auto___28708 = cljs.core.seq.call(null,seq__28679_28699);
if(temp__4126__auto___28708){
var seq__28679_28709__$1 = temp__4126__auto___28708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28679_28709__$1)){
var c__18901__auto___28710 = cljs.core.chunk_first.call(null,seq__28679_28709__$1);
var G__28711 = cljs.core.chunk_rest.call(null,seq__28679_28709__$1);
var G__28712 = c__18901__auto___28710;
var G__28713 = cljs.core.count.call(null,c__18901__auto___28710);
var G__28714 = (0);
seq__28679_28699 = G__28711;
chunk__28680_28700 = G__28712;
count__28681_28701 = G__28713;
i__28682_28702 = G__28714;
continue;
} else {
var f_28715 = cljs.core.first.call(null,seq__28679_28709__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28715);

var G__28716 = cljs.core.next.call(null,seq__28679_28709__$1);
var G__28717 = null;
var G__28718 = (0);
var G__28719 = (0);
seq__28679_28699 = G__28716;
chunk__28680_28700 = G__28717;
count__28681_28701 = G__28718;
i__28682_28702 = G__28719;
continue;
}
} else {
}
}
break;
}

var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__,map__28678,map__28678__$1,opts,on_cssload){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__,map__28678,map__28678__$1,opts,on_cssload){
return (function (state_28689){
var state_val_28690 = (state_28689[(1)]);
if((state_val_28690 === (2))){
var inst_28685 = (state_28689[(2)]);
var inst_28686 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28687 = on_cssload.call(null,inst_28686);
var state_28689__$1 = (function (){var statearr_28691 = state_28689;
(statearr_28691[(7)] = inst_28685);

return statearr_28691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28689__$1,inst_28687);
} else {
if((state_val_28690 === (1))){
var inst_28683 = cljs.core.async.timeout.call(null,(100));
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28689__$1,(2),inst_28683);
} else {
return null;
}
}
});})(c__23400__auto__,map__28678,map__28678__$1,opts,on_cssload))
;
return ((function (switch__23338__auto__,c__23400__auto__,map__28678,map__28678__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto____0 = (function (){
var statearr_28695 = [null,null,null,null,null,null,null,null];
(statearr_28695[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto__);

(statearr_28695[(1)] = (1));

return statearr_28695;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto____1 = (function (state_28689){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_28689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e28696){if((e28696 instanceof Object)){
var ex__23342__auto__ = e28696;
var statearr_28697_28720 = state_28689;
(statearr_28697_28720[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28721 = state_28689;
state_28689 = G__28721;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto__ = function(state_28689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto____1.call(this,state_28689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__,map__28678,map__28678__$1,opts,on_cssload))
})();
var state__23402__auto__ = (function (){var statearr_28698 = f__23401__auto__.call(null);
(statearr_28698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_28698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__,map__28678,map__28678__$1,opts,on_cssload))
);

return c__23400__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1431907797872