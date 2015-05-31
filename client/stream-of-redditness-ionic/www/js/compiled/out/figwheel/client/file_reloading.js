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
return cljs.core.reduce.call(null,(function (p1__29301_SHARP_,p2__29302_SHARP_){
var and__18104__auto__ = p1__29301_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__29302_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29303){
var map__29304 = p__29303;
var map__29304__$1 = ((cljs.core.seq_QMARK_.call(null,map__29304))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
var file = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29305){
var map__29306 = p__29305;
var map__29306__$1 = ((cljs.core.seq_QMARK_.call(null,map__29306))?cljs.core.apply.call(null,cljs.core.hash_map,map__29306):map__29306);
var namespace = cljs.core.get.call(null,map__29306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e29307){if((e29307 instanceof Error)){
var e = e29307;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29307;

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
var G__29309 = arguments.length;
switch (G__29309) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29311,callback){
var map__29313 = p__29311;
var map__29313__$1 = ((cljs.core.seq_QMARK_.call(null,map__29313))?cljs.core.apply.call(null,cljs.core.hash_map,map__29313):map__29313);
var file_msg = map__29313__$1;
var request_url = cljs.core.get.call(null,map__29313__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29313,map__29313__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29313,map__29313__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29314){
var map__29316 = p__29314;
var map__29316__$1 = ((cljs.core.seq_QMARK_.call(null,map__29316))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
var file_msg = map__29316__$1;
var meta_data = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29317,callback){
var map__29319 = p__29317;
var map__29319__$1 = ((cljs.core.seq_QMARK_.call(null,map__29319))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
var file_msg = map__29319__$1;
var namespace = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__23229__auto___29406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___29406,out){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___29406,out){
return (function (state_29388){
var state_val_29389 = (state_29388[(1)]);
if((state_val_29389 === (7))){
var inst_29372 = (state_29388[(7)]);
var inst_29378 = (state_29388[(2)]);
var inst_29379 = cljs.core.async.put_BANG_.call(null,out,inst_29378);
var inst_29368 = inst_29372;
var state_29388__$1 = (function (){var statearr_29390 = state_29388;
(statearr_29390[(8)] = inst_29379);

(statearr_29390[(9)] = inst_29368);

return statearr_29390;
})();
var statearr_29391_29407 = state_29388__$1;
(statearr_29391_29407[(2)] = null);

(statearr_29391_29407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (6))){
var inst_29384 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29392_29408 = state_29388__$1;
(statearr_29392_29408[(2)] = inst_29384);

(statearr_29392_29408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (5))){
var inst_29382 = cljs.core.async.close_BANG_.call(null,out);
var state_29388__$1 = state_29388;
var statearr_29393_29409 = state_29388__$1;
(statearr_29393_29409[(2)] = inst_29382);

(statearr_29393_29409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (4))){
var inst_29371 = (state_29388[(10)]);
var inst_29376 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29371);
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29388__$1,(7),inst_29376);
} else {
if((state_val_29389 === (3))){
var inst_29386 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29388__$1,inst_29386);
} else {
if((state_val_29389 === (2))){
var inst_29371 = (state_29388[(10)]);
var inst_29368 = (state_29388[(9)]);
var inst_29371__$1 = cljs.core.nth.call(null,inst_29368,(0),null);
var inst_29372 = cljs.core.nthnext.call(null,inst_29368,(1));
var inst_29373 = (inst_29371__$1 == null);
var inst_29374 = cljs.core.not.call(null,inst_29373);
var state_29388__$1 = (function (){var statearr_29394 = state_29388;
(statearr_29394[(7)] = inst_29372);

(statearr_29394[(10)] = inst_29371__$1);

return statearr_29394;
})();
if(inst_29374){
var statearr_29395_29410 = state_29388__$1;
(statearr_29395_29410[(1)] = (4));

} else {
var statearr_29396_29411 = state_29388__$1;
(statearr_29396_29411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (1))){
var inst_29366 = cljs.core.nth.call(null,files,(0),null);
var inst_29367 = cljs.core.nthnext.call(null,files,(1));
var inst_29368 = files;
var state_29388__$1 = (function (){var statearr_29397 = state_29388;
(statearr_29397[(11)] = inst_29366);

(statearr_29397[(9)] = inst_29368);

(statearr_29397[(12)] = inst_29367);

return statearr_29397;
})();
var statearr_29398_29412 = state_29388__$1;
(statearr_29398_29412[(2)] = null);

(statearr_29398_29412[(1)] = (2));


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
});})(c__23229__auto___29406,out))
;
return ((function (switch__23214__auto__,c__23229__auto___29406,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto____0 = (function (){
var statearr_29402 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29402[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto__);

(statearr_29402[(1)] = (1));

return statearr_29402;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto____1 = (function (state_29388){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_29388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e29403){if((e29403 instanceof Object)){
var ex__23218__auto__ = e29403;
var statearr_29404_29413 = state_29388;
(statearr_29404_29413[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29414 = state_29388;
state_29388 = G__29414;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto__ = function(state_29388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto____1.call(this,state_29388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___29406,out))
})();
var state__23231__auto__ = (function (){var statearr_29405 = f__23230__auto__.call(null);
(statearr_29405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___29406);

return statearr_29405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___29406,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29415,p__29416){
var map__29419 = p__29415;
var map__29419__$1 = ((cljs.core.seq_QMARK_.call(null,map__29419))?cljs.core.apply.call(null,cljs.core.hash_map,map__29419):map__29419);
var opts = map__29419__$1;
var url_rewriter = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29420 = p__29416;
var map__29420__$1 = ((cljs.core.seq_QMARK_.call(null,map__29420))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var file_msg = map__29420__$1;
var file = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29421){
var map__29424 = p__29421;
var map__29424__$1 = ((cljs.core.seq_QMARK_.call(null,map__29424))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);
var file = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e29425){var e = e29425;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29430,p__29431){
var map__29632 = p__29430;
var map__29632__$1 = ((cljs.core.seq_QMARK_.call(null,map__29632))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);
var opts = map__29632__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29633 = p__29431;
var map__29633__$1 = ((cljs.core.seq_QMARK_.call(null,map__29633))?cljs.core.apply.call(null,cljs.core.hash_map,map__29633):map__29633);
var msg = map__29633__$1;
var files = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (state_29757){
var state_val_29758 = (state_29757[(1)]);
if((state_val_29758 === (7))){
var inst_29646 = (state_29757[(7)]);
var inst_29644 = (state_29757[(8)]);
var inst_29645 = (state_29757[(9)]);
var inst_29647 = (state_29757[(10)]);
var inst_29652 = cljs.core._nth.call(null,inst_29645,inst_29647);
var inst_29653 = figwheel.client.file_reloading.eval_body.call(null,inst_29652);
var inst_29654 = (inst_29647 + (1));
var tmp29759 = inst_29646;
var tmp29760 = inst_29644;
var tmp29761 = inst_29645;
var inst_29644__$1 = tmp29760;
var inst_29645__$1 = tmp29761;
var inst_29646__$1 = tmp29759;
var inst_29647__$1 = inst_29654;
var state_29757__$1 = (function (){var statearr_29762 = state_29757;
(statearr_29762[(11)] = inst_29653);

(statearr_29762[(7)] = inst_29646__$1);

(statearr_29762[(8)] = inst_29644__$1);

(statearr_29762[(9)] = inst_29645__$1);

(statearr_29762[(10)] = inst_29647__$1);

return statearr_29762;
})();
var statearr_29763_29832 = state_29757__$1;
(statearr_29763_29832[(2)] = null);

(statearr_29763_29832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (20))){
var inst_29694 = (state_29757[(12)]);
var inst_29693 = (state_29757[(13)]);
var inst_29696 = (state_29757[(14)]);
var inst_29690 = (state_29757[(15)]);
var inst_29689 = (state_29757[(16)]);
var inst_29699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29701 = (function (){var files_not_loaded = inst_29696;
var res = inst_29694;
var res_SINGLEQUOTE_ = inst_29693;
var files_SINGLEQUOTE_ = inst_29690;
var all_files = inst_29689;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29693,inst_29696,inst_29690,inst_29689,inst_29699,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (p__29700){
var map__29764 = p__29700;
var map__29764__$1 = ((cljs.core.seq_QMARK_.call(null,map__29764))?cljs.core.apply.call(null,cljs.core.hash_map,map__29764):map__29764);
var file = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29693,inst_29696,inst_29690,inst_29689,inst_29699,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29702 = cljs.core.map.call(null,inst_29701,inst_29694);
var inst_29703 = cljs.core.pr_str.call(null,inst_29702);
var inst_29704 = figwheel.client.utils.log.call(null,inst_29703);
var inst_29705 = (function (){var files_not_loaded = inst_29696;
var res = inst_29694;
var res_SINGLEQUOTE_ = inst_29693;
var files_SINGLEQUOTE_ = inst_29690;
var all_files = inst_29689;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29693,inst_29696,inst_29690,inst_29689,inst_29699,inst_29701,inst_29702,inst_29703,inst_29704,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29693,inst_29696,inst_29690,inst_29689,inst_29699,inst_29701,inst_29702,inst_29703,inst_29704,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29706 = setTimeout(inst_29705,(10));
var state_29757__$1 = (function (){var statearr_29765 = state_29757;
(statearr_29765[(17)] = inst_29704);

(statearr_29765[(18)] = inst_29699);

return statearr_29765;
})();
var statearr_29766_29833 = state_29757__$1;
(statearr_29766_29833[(2)] = inst_29706);

(statearr_29766_29833[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (27))){
var inst_29716 = (state_29757[(19)]);
var state_29757__$1 = state_29757;
var statearr_29767_29834 = state_29757__$1;
(statearr_29767_29834[(2)] = inst_29716);

(statearr_29767_29834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (1))){
var inst_29636 = (state_29757[(20)]);
var inst_29634 = before_jsload.call(null,files);
var inst_29635 = (function (){return ((function (inst_29636,inst_29634,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (p1__29426_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29426_SHARP_);
});
;})(inst_29636,inst_29634,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29636__$1 = cljs.core.filter.call(null,inst_29635,files);
var inst_29637 = cljs.core.not_empty.call(null,inst_29636__$1);
var state_29757__$1 = (function (){var statearr_29768 = state_29757;
(statearr_29768[(20)] = inst_29636__$1);

(statearr_29768[(21)] = inst_29634);

return statearr_29768;
})();
if(cljs.core.truth_(inst_29637)){
var statearr_29769_29835 = state_29757__$1;
(statearr_29769_29835[(1)] = (2));

} else {
var statearr_29770_29836 = state_29757__$1;
(statearr_29770_29836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (24))){
var state_29757__$1 = state_29757;
var statearr_29771_29837 = state_29757__$1;
(statearr_29771_29837[(2)] = null);

(statearr_29771_29837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (4))){
var inst_29681 = (state_29757[(2)]);
var inst_29682 = (function (){return ((function (inst_29681,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (p1__29427_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29427_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29427_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_29681,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29683 = cljs.core.filter.call(null,inst_29682,files);
var state_29757__$1 = (function (){var statearr_29772 = state_29757;
(statearr_29772[(22)] = inst_29683);

(statearr_29772[(23)] = inst_29681);

return statearr_29772;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29773_29838 = state_29757__$1;
(statearr_29773_29838[(1)] = (16));

} else {
var statearr_29774_29839 = state_29757__$1;
(statearr_29774_29839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (15))){
var inst_29671 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29775_29840 = state_29757__$1;
(statearr_29775_29840[(2)] = inst_29671);

(statearr_29775_29840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (21))){
var state_29757__$1 = state_29757;
var statearr_29776_29841 = state_29757__$1;
(statearr_29776_29841[(2)] = null);

(statearr_29776_29841[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (31))){
var inst_29724 = (state_29757[(24)]);
var inst_29734 = (state_29757[(2)]);
var inst_29735 = cljs.core.not_empty.call(null,inst_29724);
var state_29757__$1 = (function (){var statearr_29777 = state_29757;
(statearr_29777[(25)] = inst_29734);

return statearr_29777;
})();
if(cljs.core.truth_(inst_29735)){
var statearr_29778_29842 = state_29757__$1;
(statearr_29778_29842[(1)] = (32));

} else {
var statearr_29779_29843 = state_29757__$1;
(statearr_29779_29843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (32))){
var inst_29724 = (state_29757[(24)]);
var inst_29737 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29724);
var inst_29738 = cljs.core.pr_str.call(null,inst_29737);
var inst_29739 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29738)].join('');
var inst_29740 = figwheel.client.utils.log.call(null,inst_29739);
var state_29757__$1 = state_29757;
var statearr_29780_29844 = state_29757__$1;
(statearr_29780_29844[(2)] = inst_29740);

(statearr_29780_29844[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (33))){
var state_29757__$1 = state_29757;
var statearr_29781_29845 = state_29757__$1;
(statearr_29781_29845[(2)] = null);

(statearr_29781_29845[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (13))){
var inst_29657 = (state_29757[(26)]);
var inst_29661 = cljs.core.chunk_first.call(null,inst_29657);
var inst_29662 = cljs.core.chunk_rest.call(null,inst_29657);
var inst_29663 = cljs.core.count.call(null,inst_29661);
var inst_29644 = inst_29662;
var inst_29645 = inst_29661;
var inst_29646 = inst_29663;
var inst_29647 = (0);
var state_29757__$1 = (function (){var statearr_29782 = state_29757;
(statearr_29782[(7)] = inst_29646);

(statearr_29782[(8)] = inst_29644);

(statearr_29782[(9)] = inst_29645);

(statearr_29782[(10)] = inst_29647);

return statearr_29782;
})();
var statearr_29783_29846 = state_29757__$1;
(statearr_29783_29846[(2)] = null);

(statearr_29783_29846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (22))){
var inst_29696 = (state_29757[(14)]);
var inst_29709 = (state_29757[(2)]);
var inst_29710 = cljs.core.not_empty.call(null,inst_29696);
var state_29757__$1 = (function (){var statearr_29784 = state_29757;
(statearr_29784[(27)] = inst_29709);

return statearr_29784;
})();
if(cljs.core.truth_(inst_29710)){
var statearr_29785_29847 = state_29757__$1;
(statearr_29785_29847[(1)] = (23));

} else {
var statearr_29786_29848 = state_29757__$1;
(statearr_29786_29848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (36))){
var state_29757__$1 = state_29757;
var statearr_29787_29849 = state_29757__$1;
(statearr_29787_29849[(2)] = null);

(statearr_29787_29849[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (29))){
var inst_29725 = (state_29757[(28)]);
var inst_29728 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29725);
var inst_29729 = cljs.core.pr_str.call(null,inst_29728);
var inst_29730 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29729)].join('');
var inst_29731 = figwheel.client.utils.log.call(null,inst_29730);
var state_29757__$1 = state_29757;
var statearr_29788_29850 = state_29757__$1;
(statearr_29788_29850[(2)] = inst_29731);

(statearr_29788_29850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (6))){
var inst_29678 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29789_29851 = state_29757__$1;
(statearr_29789_29851[(2)] = inst_29678);

(statearr_29789_29851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (28))){
var inst_29725 = (state_29757[(28)]);
var inst_29722 = (state_29757[(2)]);
var inst_29723 = cljs.core.get.call(null,inst_29722,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29724 = cljs.core.get.call(null,inst_29722,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29725__$1 = cljs.core.get.call(null,inst_29722,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29726 = cljs.core.not_empty.call(null,inst_29725__$1);
var state_29757__$1 = (function (){var statearr_29790 = state_29757;
(statearr_29790[(28)] = inst_29725__$1);

(statearr_29790[(29)] = inst_29723);

(statearr_29790[(24)] = inst_29724);

return statearr_29790;
})();
if(cljs.core.truth_(inst_29726)){
var statearr_29791_29852 = state_29757__$1;
(statearr_29791_29852[(1)] = (29));

} else {
var statearr_29792_29853 = state_29757__$1;
(statearr_29792_29853[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (25))){
var inst_29755 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29757__$1,inst_29755);
} else {
if((state_val_29758 === (34))){
var inst_29723 = (state_29757[(29)]);
var inst_29743 = (state_29757[(2)]);
var inst_29744 = cljs.core.not_empty.call(null,inst_29723);
var state_29757__$1 = (function (){var statearr_29793 = state_29757;
(statearr_29793[(30)] = inst_29743);

return statearr_29793;
})();
if(cljs.core.truth_(inst_29744)){
var statearr_29794_29854 = state_29757__$1;
(statearr_29794_29854[(1)] = (35));

} else {
var statearr_29795_29855 = state_29757__$1;
(statearr_29795_29855[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (17))){
var inst_29683 = (state_29757[(22)]);
var state_29757__$1 = state_29757;
var statearr_29796_29856 = state_29757__$1;
(statearr_29796_29856[(2)] = inst_29683);

(statearr_29796_29856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (3))){
var state_29757__$1 = state_29757;
var statearr_29797_29857 = state_29757__$1;
(statearr_29797_29857[(2)] = null);

(statearr_29797_29857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (12))){
var inst_29674 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29798_29858 = state_29757__$1;
(statearr_29798_29858[(2)] = inst_29674);

(statearr_29798_29858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (2))){
var inst_29636 = (state_29757[(20)]);
var inst_29643 = cljs.core.seq.call(null,inst_29636);
var inst_29644 = inst_29643;
var inst_29645 = null;
var inst_29646 = (0);
var inst_29647 = (0);
var state_29757__$1 = (function (){var statearr_29799 = state_29757;
(statearr_29799[(7)] = inst_29646);

(statearr_29799[(8)] = inst_29644);

(statearr_29799[(9)] = inst_29645);

(statearr_29799[(10)] = inst_29647);

return statearr_29799;
})();
var statearr_29800_29859 = state_29757__$1;
(statearr_29800_29859[(2)] = null);

(statearr_29800_29859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (23))){
var inst_29694 = (state_29757[(12)]);
var inst_29716 = (state_29757[(19)]);
var inst_29693 = (state_29757[(13)]);
var inst_29696 = (state_29757[(14)]);
var inst_29690 = (state_29757[(15)]);
var inst_29689 = (state_29757[(16)]);
var inst_29712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29715 = (function (){var files_not_loaded = inst_29696;
var res = inst_29694;
var res_SINGLEQUOTE_ = inst_29693;
var files_SINGLEQUOTE_ = inst_29690;
var all_files = inst_29689;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29716,inst_29693,inst_29696,inst_29690,inst_29689,inst_29712,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (p__29714){
var map__29801 = p__29714;
var map__29801__$1 = ((cljs.core.seq_QMARK_.call(null,map__29801))?cljs.core.apply.call(null,cljs.core.hash_map,map__29801):map__29801);
var meta_data = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29716,inst_29693,inst_29696,inst_29690,inst_29689,inst_29712,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29716__$1 = cljs.core.group_by.call(null,inst_29715,inst_29696);
var inst_29717 = cljs.core.seq_QMARK_.call(null,inst_29716__$1);
var state_29757__$1 = (function (){var statearr_29802 = state_29757;
(statearr_29802[(19)] = inst_29716__$1);

(statearr_29802[(31)] = inst_29712);

return statearr_29802;
})();
if(inst_29717){
var statearr_29803_29860 = state_29757__$1;
(statearr_29803_29860[(1)] = (26));

} else {
var statearr_29804_29861 = state_29757__$1;
(statearr_29804_29861[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (35))){
var inst_29723 = (state_29757[(29)]);
var inst_29746 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29723);
var inst_29747 = cljs.core.pr_str.call(null,inst_29746);
var inst_29748 = [cljs.core.str("not required: "),cljs.core.str(inst_29747)].join('');
var inst_29749 = figwheel.client.utils.log.call(null,inst_29748);
var state_29757__$1 = state_29757;
var statearr_29805_29862 = state_29757__$1;
(statearr_29805_29862[(2)] = inst_29749);

(statearr_29805_29862[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (19))){
var inst_29694 = (state_29757[(12)]);
var inst_29693 = (state_29757[(13)]);
var inst_29690 = (state_29757[(15)]);
var inst_29689 = (state_29757[(16)]);
var inst_29693__$1 = (state_29757[(2)]);
var inst_29694__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29693__$1);
var inst_29695 = (function (){var res = inst_29694__$1;
var res_SINGLEQUOTE_ = inst_29693__$1;
var files_SINGLEQUOTE_ = inst_29690;
var all_files = inst_29689;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29693,inst_29690,inst_29689,inst_29693__$1,inst_29694__$1,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (p1__29429_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29429_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29694,inst_29693,inst_29690,inst_29689,inst_29693__$1,inst_29694__$1,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29696 = cljs.core.filter.call(null,inst_29695,inst_29693__$1);
var inst_29697 = cljs.core.not_empty.call(null,inst_29694__$1);
var state_29757__$1 = (function (){var statearr_29806 = state_29757;
(statearr_29806[(12)] = inst_29694__$1);

(statearr_29806[(13)] = inst_29693__$1);

(statearr_29806[(14)] = inst_29696);

return statearr_29806;
})();
if(cljs.core.truth_(inst_29697)){
var statearr_29807_29863 = state_29757__$1;
(statearr_29807_29863[(1)] = (20));

} else {
var statearr_29808_29864 = state_29757__$1;
(statearr_29808_29864[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (11))){
var state_29757__$1 = state_29757;
var statearr_29809_29865 = state_29757__$1;
(statearr_29809_29865[(2)] = null);

(statearr_29809_29865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (9))){
var inst_29676 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29810_29866 = state_29757__$1;
(statearr_29810_29866[(2)] = inst_29676);

(statearr_29810_29866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (5))){
var inst_29646 = (state_29757[(7)]);
var inst_29647 = (state_29757[(10)]);
var inst_29649 = (inst_29647 < inst_29646);
var inst_29650 = inst_29649;
var state_29757__$1 = state_29757;
if(cljs.core.truth_(inst_29650)){
var statearr_29811_29867 = state_29757__$1;
(statearr_29811_29867[(1)] = (7));

} else {
var statearr_29812_29868 = state_29757__$1;
(statearr_29812_29868[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (14))){
var inst_29657 = (state_29757[(26)]);
var inst_29666 = cljs.core.first.call(null,inst_29657);
var inst_29667 = figwheel.client.file_reloading.eval_body.call(null,inst_29666);
var inst_29668 = cljs.core.next.call(null,inst_29657);
var inst_29644 = inst_29668;
var inst_29645 = null;
var inst_29646 = (0);
var inst_29647 = (0);
var state_29757__$1 = (function (){var statearr_29813 = state_29757;
(statearr_29813[(7)] = inst_29646);

(statearr_29813[(8)] = inst_29644);

(statearr_29813[(32)] = inst_29667);

(statearr_29813[(9)] = inst_29645);

(statearr_29813[(10)] = inst_29647);

return statearr_29813;
})();
var statearr_29814_29869 = state_29757__$1;
(statearr_29814_29869[(2)] = null);

(statearr_29814_29869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (26))){
var inst_29716 = (state_29757[(19)]);
var inst_29719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29716);
var state_29757__$1 = state_29757;
var statearr_29815_29870 = state_29757__$1;
(statearr_29815_29870[(2)] = inst_29719);

(statearr_29815_29870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (16))){
var inst_29683 = (state_29757[(22)]);
var inst_29685 = (function (){var all_files = inst_29683;
return ((function (all_files,inst_29683,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function (p1__29428_SHARP_){
return cljs.core.update_in.call(null,p1__29428_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29683,state_val_29758,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var inst_29686 = cljs.core.map.call(null,inst_29685,inst_29683);
var state_29757__$1 = state_29757;
var statearr_29816_29871 = state_29757__$1;
(statearr_29816_29871[(2)] = inst_29686);

(statearr_29816_29871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (30))){
var state_29757__$1 = state_29757;
var statearr_29817_29872 = state_29757__$1;
(statearr_29817_29872[(2)] = null);

(statearr_29817_29872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (10))){
var inst_29657 = (state_29757[(26)]);
var inst_29659 = cljs.core.chunked_seq_QMARK_.call(null,inst_29657);
var state_29757__$1 = state_29757;
if(inst_29659){
var statearr_29818_29873 = state_29757__$1;
(statearr_29818_29873[(1)] = (13));

} else {
var statearr_29819_29874 = state_29757__$1;
(statearr_29819_29874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (18))){
var inst_29690 = (state_29757[(15)]);
var inst_29689 = (state_29757[(16)]);
var inst_29689__$1 = (state_29757[(2)]);
var inst_29690__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29689__$1);
var inst_29691 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29690__$1);
var state_29757__$1 = (function (){var statearr_29820 = state_29757;
(statearr_29820[(15)] = inst_29690__$1);

(statearr_29820[(16)] = inst_29689__$1);

return statearr_29820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29757__$1,(19),inst_29691);
} else {
if((state_val_29758 === (37))){
var inst_29752 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29821_29875 = state_29757__$1;
(statearr_29821_29875[(2)] = inst_29752);

(statearr_29821_29875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (8))){
var inst_29657 = (state_29757[(26)]);
var inst_29644 = (state_29757[(8)]);
var inst_29657__$1 = cljs.core.seq.call(null,inst_29644);
var state_29757__$1 = (function (){var statearr_29822 = state_29757;
(statearr_29822[(26)] = inst_29657__$1);

return statearr_29822;
})();
if(inst_29657__$1){
var statearr_29823_29876 = state_29757__$1;
(statearr_29823_29876[(1)] = (10));

} else {
var statearr_29824_29877 = state_29757__$1;
(statearr_29824_29877[(1)] = (11));

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
});})(c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
;
return ((function (switch__23214__auto__,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto____0 = (function (){
var statearr_29828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29828[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto__);

(statearr_29828[(1)] = (1));

return statearr_29828;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto____1 = (function (state_29757){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_29757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e29829){if((e29829 instanceof Object)){
var ex__23218__auto__ = e29829;
var statearr_29830_29878 = state_29757;
(statearr_29830_29878[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29879 = state_29757;
state_29757 = G__29879;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto__ = function(state_29757){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto____1.call(this,state_29757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
})();
var state__23231__auto__ = (function (){var statearr_29831 = f__23230__auto__.call(null);
(statearr_29831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__,map__29632,map__29632__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29633,map__29633__$1,msg,files))
);

return c__23229__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29882,link){
var map__29884 = p__29882;
var map__29884__$1 = ((cljs.core.seq_QMARK_.call(null,map__29884))?cljs.core.apply.call(null,cljs.core.hash_map,map__29884):map__29884);
var file = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29884,map__29884__$1,file){
return (function (p1__29880_SHARP_,p2__29881_SHARP_){
if(cljs.core._EQ_.call(null,p1__29880_SHARP_,p2__29881_SHARP_)){
return p1__29880_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29884,map__29884__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29888){
var map__29889 = p__29888;
var map__29889__$1 = ((cljs.core.seq_QMARK_.call(null,map__29889))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);
var current_url_length = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29885_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29885_SHARP_);
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
var G__29891 = arguments.length;
switch (G__29891) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29893){
var map__29895 = p__29893;
var map__29895__$1 = ((cljs.core.seq_QMARK_.call(null,map__29895))?cljs.core.apply.call(null,cljs.core.hash_map,map__29895):map__29895);
var f_data = map__29895__$1;
var request_url = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29896,files_msg){
var map__29918 = p__29896;
var map__29918__$1 = ((cljs.core.seq_QMARK_.call(null,map__29918))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var opts = map__29918__$1;
var on_cssload = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29919_29939 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29920_29940 = null;
var count__29921_29941 = (0);
var i__29922_29942 = (0);
while(true){
if((i__29922_29942 < count__29921_29941)){
var f_29943 = cljs.core._nth.call(null,chunk__29920_29940,i__29922_29942);
figwheel.client.file_reloading.reload_css_file.call(null,f_29943);

var G__29944 = seq__29919_29939;
var G__29945 = chunk__29920_29940;
var G__29946 = count__29921_29941;
var G__29947 = (i__29922_29942 + (1));
seq__29919_29939 = G__29944;
chunk__29920_29940 = G__29945;
count__29921_29941 = G__29946;
i__29922_29942 = G__29947;
continue;
} else {
var temp__4126__auto___29948 = cljs.core.seq.call(null,seq__29919_29939);
if(temp__4126__auto___29948){
var seq__29919_29949__$1 = temp__4126__auto___29948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29919_29949__$1)){
var c__18901__auto___29950 = cljs.core.chunk_first.call(null,seq__29919_29949__$1);
var G__29951 = cljs.core.chunk_rest.call(null,seq__29919_29949__$1);
var G__29952 = c__18901__auto___29950;
var G__29953 = cljs.core.count.call(null,c__18901__auto___29950);
var G__29954 = (0);
seq__29919_29939 = G__29951;
chunk__29920_29940 = G__29952;
count__29921_29941 = G__29953;
i__29922_29942 = G__29954;
continue;
} else {
var f_29955 = cljs.core.first.call(null,seq__29919_29949__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29955);

var G__29956 = cljs.core.next.call(null,seq__29919_29949__$1);
var G__29957 = null;
var G__29958 = (0);
var G__29959 = (0);
seq__29919_29939 = G__29956;
chunk__29920_29940 = G__29957;
count__29921_29941 = G__29958;
i__29922_29942 = G__29959;
continue;
}
} else {
}
}
break;
}

var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__,map__29918,map__29918__$1,opts,on_cssload){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__,map__29918,map__29918__$1,opts,on_cssload){
return (function (state_29929){
var state_val_29930 = (state_29929[(1)]);
if((state_val_29930 === (2))){
var inst_29925 = (state_29929[(2)]);
var inst_29926 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29927 = on_cssload.call(null,inst_29926);
var state_29929__$1 = (function (){var statearr_29931 = state_29929;
(statearr_29931[(7)] = inst_29925);

return statearr_29931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29929__$1,inst_29927);
} else {
if((state_val_29930 === (1))){
var inst_29923 = cljs.core.async.timeout.call(null,(100));
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(2),inst_29923);
} else {
return null;
}
}
});})(c__23229__auto__,map__29918,map__29918__$1,opts,on_cssload))
;
return ((function (switch__23214__auto__,c__23229__auto__,map__29918,map__29918__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto____0 = (function (){
var statearr_29935 = [null,null,null,null,null,null,null,null];
(statearr_29935[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto__);

(statearr_29935[(1)] = (1));

return statearr_29935;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto____1 = (function (state_29929){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_29929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e29936){if((e29936 instanceof Object)){
var ex__23218__auto__ = e29936;
var statearr_29937_29960 = state_29929;
(statearr_29937_29960[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29961 = state_29929;
state_29929 = G__29961;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto__ = function(state_29929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto____1.call(this,state_29929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__,map__29918,map__29918__$1,opts,on_cssload))
})();
var state__23231__auto__ = (function (){var statearr_29938 = f__23230__auto__.call(null);
(statearr_29938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_29938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__,map__29918,map__29918__$1,opts,on_cssload))
);

return c__23229__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1432432040194