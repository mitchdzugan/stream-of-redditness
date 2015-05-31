// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28343__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28344__i = 0, G__28344__a = new Array(arguments.length -  0);
while (G__28344__i < G__28344__a.length) {G__28344__a[G__28344__i] = arguments[G__28344__i + 0]; ++G__28344__i;}
  args = new cljs.core.IndexedSeq(G__28344__a,0);
} 
return G__28343__delegate.call(this,args);};
G__28343.cljs$lang$maxFixedArity = 0;
G__28343.cljs$lang$applyTo = (function (arglist__28345){
var args = cljs.core.seq(arglist__28345);
return G__28343__delegate(args);
});
G__28343.cljs$core$IFn$_invoke$arity$variadic = G__28343__delegate;
return G__28343;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28346){
var map__28348 = p__28346;
var map__28348__$1 = ((cljs.core.seq_QMARK_.call(null,map__28348))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var class$ = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18116__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18104__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18104__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18104__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23229__auto___28477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___28477,ch){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___28477,ch){
return (function (state_28451){
var state_val_28452 = (state_28451[(1)]);
if((state_val_28452 === (7))){
var inst_28447 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28453_28478 = state_28451__$1;
(statearr_28453_28478[(2)] = inst_28447);

(statearr_28453_28478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (1))){
var state_28451__$1 = state_28451;
var statearr_28454_28479 = state_28451__$1;
(statearr_28454_28479[(2)] = null);

(statearr_28454_28479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (4))){
var inst_28415 = (state_28451[(7)]);
var inst_28415__$1 = (state_28451[(2)]);
var state_28451__$1 = (function (){var statearr_28455 = state_28451;
(statearr_28455[(7)] = inst_28415__$1);

return statearr_28455;
})();
if(cljs.core.truth_(inst_28415__$1)){
var statearr_28456_28480 = state_28451__$1;
(statearr_28456_28480[(1)] = (5));

} else {
var statearr_28457_28481 = state_28451__$1;
(statearr_28457_28481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (13))){
var state_28451__$1 = state_28451;
var statearr_28458_28482 = state_28451__$1;
(statearr_28458_28482[(2)] = null);

(statearr_28458_28482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (6))){
var state_28451__$1 = state_28451;
var statearr_28459_28483 = state_28451__$1;
(statearr_28459_28483[(2)] = null);

(statearr_28459_28483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (3))){
var inst_28449 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28451__$1,inst_28449);
} else {
if((state_val_28452 === (12))){
var inst_28422 = (state_28451[(8)]);
var inst_28435 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28422);
var inst_28436 = cljs.core.first.call(null,inst_28435);
var inst_28437 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28436);
var inst_28438 = console.warn("Figwheel: Not loading code with warnings - ",inst_28437);
var state_28451__$1 = state_28451;
var statearr_28460_28484 = state_28451__$1;
(statearr_28460_28484[(2)] = inst_28438);

(statearr_28460_28484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (2))){
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28451__$1,(4),ch);
} else {
if((state_val_28452 === (11))){
var inst_28431 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28461_28485 = state_28451__$1;
(statearr_28461_28485[(2)] = inst_28431);

(statearr_28461_28485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (9))){
var inst_28421 = (state_28451[(9)]);
var inst_28433 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28421,opts);
var state_28451__$1 = state_28451;
if(cljs.core.truth_(inst_28433)){
var statearr_28462_28486 = state_28451__$1;
(statearr_28462_28486[(1)] = (12));

} else {
var statearr_28463_28487 = state_28451__$1;
(statearr_28463_28487[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (5))){
var inst_28415 = (state_28451[(7)]);
var inst_28421 = (state_28451[(9)]);
var inst_28417 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28418 = (new cljs.core.PersistentArrayMap(null,2,inst_28417,null));
var inst_28419 = (new cljs.core.PersistentHashSet(null,inst_28418,null));
var inst_28420 = figwheel.client.focus_msgs.call(null,inst_28419,inst_28415);
var inst_28421__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28420);
var inst_28422 = cljs.core.first.call(null,inst_28420);
var inst_28423 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28421__$1,opts);
var state_28451__$1 = (function (){var statearr_28464 = state_28451;
(statearr_28464[(8)] = inst_28422);

(statearr_28464[(9)] = inst_28421__$1);

return statearr_28464;
})();
if(cljs.core.truth_(inst_28423)){
var statearr_28465_28488 = state_28451__$1;
(statearr_28465_28488[(1)] = (8));

} else {
var statearr_28466_28489 = state_28451__$1;
(statearr_28466_28489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (14))){
var inst_28441 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28467_28490 = state_28451__$1;
(statearr_28467_28490[(2)] = inst_28441);

(statearr_28467_28490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (10))){
var inst_28443 = (state_28451[(2)]);
var state_28451__$1 = (function (){var statearr_28468 = state_28451;
(statearr_28468[(10)] = inst_28443);

return statearr_28468;
})();
var statearr_28469_28491 = state_28451__$1;
(statearr_28469_28491[(2)] = null);

(statearr_28469_28491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (8))){
var inst_28422 = (state_28451[(8)]);
var inst_28425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28426 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28422);
var inst_28427 = cljs.core.async.timeout.call(null,(1000));
var inst_28428 = [inst_28426,inst_28427];
var inst_28429 = (new cljs.core.PersistentVector(null,2,(5),inst_28425,inst_28428,null));
var state_28451__$1 = state_28451;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28451__$1,(11),inst_28429);
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
});})(c__23229__auto___28477,ch))
;
return ((function (switch__23214__auto__,c__23229__auto___28477,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23215__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23215__auto____0 = (function (){
var statearr_28473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28473[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23215__auto__);

(statearr_28473[(1)] = (1));

return statearr_28473;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23215__auto____1 = (function (state_28451){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_28451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e28474){if((e28474 instanceof Object)){
var ex__23218__auto__ = e28474;
var statearr_28475_28492 = state_28451;
(statearr_28475_28492[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28493 = state_28451;
state_28451 = G__28493;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23215__auto__ = function(state_28451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23215__auto____1.call(this,state_28451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23215__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23215__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___28477,ch))
})();
var state__23231__auto__ = (function (){var statearr_28476 = f__23230__auto__.call(null);
(statearr_28476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___28477);

return statearr_28476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___28477,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28494_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28494_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28501 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28501){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28499 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28500 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28499,_STAR_print_newline_STAR_28500,base_path_28501){
return (function() { 
var G__28502__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28503__i = 0, G__28503__a = new Array(arguments.length -  0);
while (G__28503__i < G__28503__a.length) {G__28503__a[G__28503__i] = arguments[G__28503__i + 0]; ++G__28503__i;}
  args = new cljs.core.IndexedSeq(G__28503__a,0);
} 
return G__28502__delegate.call(this,args);};
G__28502.cljs$lang$maxFixedArity = 0;
G__28502.cljs$lang$applyTo = (function (arglist__28504){
var args = cljs.core.seq(arglist__28504);
return G__28502__delegate(args);
});
G__28502.cljs$core$IFn$_invoke$arity$variadic = G__28502__delegate;
return G__28502;
})()
;})(_STAR_print_fn_STAR_28499,_STAR_print_newline_STAR_28500,base_path_28501))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28500;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28499;
}}catch (e28498){if((e28498 instanceof Error)){
var e = e28498;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28501], null));
} else {
var e = e28498;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28501))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28505){
var map__28510 = p__28505;
var map__28510__$1 = ((cljs.core.seq_QMARK_.call(null,map__28510))?cljs.core.apply.call(null,cljs.core.hash_map,map__28510):map__28510);
var opts = map__28510__$1;
var build_id = cljs.core.get.call(null,map__28510__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28510,map__28510__$1,opts,build_id){
return (function (p__28511){
var vec__28512 = p__28511;
var map__28513 = cljs.core.nth.call(null,vec__28512,(0),null);
var map__28513__$1 = ((cljs.core.seq_QMARK_.call(null,map__28513))?cljs.core.apply.call(null,cljs.core.hash_map,map__28513):map__28513);
var msg = map__28513__$1;
var msg_name = cljs.core.get.call(null,map__28513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28512,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28512,map__28513,map__28513__$1,msg,msg_name,_,map__28510,map__28510__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28512,map__28513,map__28513__$1,msg,msg_name,_,map__28510,map__28510__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28510,map__28510__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28517){
var vec__28518 = p__28517;
var map__28519 = cljs.core.nth.call(null,vec__28518,(0),null);
var map__28519__$1 = ((cljs.core.seq_QMARK_.call(null,map__28519))?cljs.core.apply.call(null,cljs.core.hash_map,map__28519):map__28519);
var msg = map__28519__$1;
var msg_name = cljs.core.get.call(null,map__28519__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28518,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28520){
var map__28528 = p__28520;
var map__28528__$1 = ((cljs.core.seq_QMARK_.call(null,map__28528))?cljs.core.apply.call(null,cljs.core.hash_map,map__28528):map__28528);
var on_compile_fail = cljs.core.get.call(null,map__28528__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28528__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28528,map__28528__$1,on_compile_fail,on_compile_warning){
return (function (p__28529){
var vec__28530 = p__28529;
var map__28531 = cljs.core.nth.call(null,vec__28530,(0),null);
var map__28531__$1 = ((cljs.core.seq_QMARK_.call(null,map__28531))?cljs.core.apply.call(null,cljs.core.hash_map,map__28531):map__28531);
var msg = map__28531__$1;
var msg_name = cljs.core.get.call(null,map__28531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28530,(1));
var pred__28532 = cljs.core._EQ_;
var expr__28533 = msg_name;
if(cljs.core.truth_(pred__28532.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28533))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28532.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28533))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28528,map__28528__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__,msg_hist,msg_names,msg){
return (function (state_28734){
var state_val_28735 = (state_28734[(1)]);
if((state_val_28735 === (7))){
var inst_28668 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28736_28777 = state_28734__$1;
(statearr_28736_28777[(2)] = inst_28668);

(statearr_28736_28777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (20))){
var inst_28696 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28696)){
var statearr_28737_28778 = state_28734__$1;
(statearr_28737_28778[(1)] = (22));

} else {
var statearr_28738_28779 = state_28734__$1;
(statearr_28738_28779[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (27))){
var inst_28708 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28709 = figwheel.client.heads_up.display_warning.call(null,inst_28708);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(30),inst_28709);
} else {
if((state_val_28735 === (1))){
var inst_28656 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28656)){
var statearr_28739_28780 = state_28734__$1;
(statearr_28739_28780[(1)] = (2));

} else {
var statearr_28740_28781 = state_28734__$1;
(statearr_28740_28781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (24))){
var inst_28724 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28741_28782 = state_28734__$1;
(statearr_28741_28782[(2)] = inst_28724);

(statearr_28741_28782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (4))){
var inst_28732 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28734__$1,inst_28732);
} else {
if((state_val_28735 === (15))){
var inst_28684 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28685 = figwheel.client.format_messages.call(null,inst_28684);
var inst_28686 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28687 = figwheel.client.heads_up.display_error.call(null,inst_28685,inst_28686);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(18),inst_28687);
} else {
if((state_val_28735 === (21))){
var inst_28726 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28742_28783 = state_28734__$1;
(statearr_28742_28783[(2)] = inst_28726);

(statearr_28742_28783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (31))){
var inst_28715 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(34),inst_28715);
} else {
if((state_val_28735 === (32))){
var state_28734__$1 = state_28734;
var statearr_28743_28784 = state_28734__$1;
(statearr_28743_28784[(2)] = null);

(statearr_28743_28784[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (33))){
var inst_28720 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28744_28785 = state_28734__$1;
(statearr_28744_28785[(2)] = inst_28720);

(statearr_28744_28785[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (13))){
var inst_28674 = (state_28734[(2)]);
var inst_28675 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28676 = figwheel.client.format_messages.call(null,inst_28675);
var inst_28677 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28678 = figwheel.client.heads_up.display_error.call(null,inst_28676,inst_28677);
var state_28734__$1 = (function (){var statearr_28745 = state_28734;
(statearr_28745[(7)] = inst_28674);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(14),inst_28678);
} else {
if((state_val_28735 === (22))){
var inst_28698 = figwheel.client.heads_up.clear.call(null);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(25),inst_28698);
} else {
if((state_val_28735 === (29))){
var inst_28722 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28746_28786 = state_28734__$1;
(statearr_28746_28786[(2)] = inst_28722);

(statearr_28746_28786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (6))){
var inst_28664 = figwheel.client.heads_up.clear.call(null);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(9),inst_28664);
} else {
if((state_val_28735 === (28))){
var inst_28713 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28713)){
var statearr_28747_28787 = state_28734__$1;
(statearr_28747_28787[(1)] = (31));

} else {
var statearr_28748_28788 = state_28734__$1;
(statearr_28748_28788[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (25))){
var inst_28700 = (state_28734[(2)]);
var inst_28701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28702 = figwheel.client.heads_up.display_warning.call(null,inst_28701);
var state_28734__$1 = (function (){var statearr_28749 = state_28734;
(statearr_28749[(8)] = inst_28700);

return statearr_28749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(26),inst_28702);
} else {
if((state_val_28735 === (34))){
var inst_28717 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28750_28789 = state_28734__$1;
(statearr_28750_28789[(2)] = inst_28717);

(statearr_28750_28789[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (17))){
var inst_28728 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28751_28790 = state_28734__$1;
(statearr_28751_28790[(2)] = inst_28728);

(statearr_28751_28790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (3))){
var inst_28670 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28670)){
var statearr_28752_28791 = state_28734__$1;
(statearr_28752_28791[(1)] = (10));

} else {
var statearr_28753_28792 = state_28734__$1;
(statearr_28753_28792[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (12))){
var inst_28730 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28754_28793 = state_28734__$1;
(statearr_28754_28793[(2)] = inst_28730);

(statearr_28754_28793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (2))){
var inst_28658 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28658)){
var statearr_28755_28794 = state_28734__$1;
(statearr_28755_28794[(1)] = (5));

} else {
var statearr_28756_28795 = state_28734__$1;
(statearr_28756_28795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (23))){
var inst_28706 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28706)){
var statearr_28757_28796 = state_28734__$1;
(statearr_28757_28796[(1)] = (27));

} else {
var statearr_28758_28797 = state_28734__$1;
(statearr_28758_28797[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (19))){
var inst_28693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28694 = figwheel.client.heads_up.append_message.call(null,inst_28693);
var state_28734__$1 = state_28734;
var statearr_28759_28798 = state_28734__$1;
(statearr_28759_28798[(2)] = inst_28694);

(statearr_28759_28798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (11))){
var inst_28682 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28682)){
var statearr_28760_28799 = state_28734__$1;
(statearr_28760_28799[(1)] = (15));

} else {
var statearr_28761_28800 = state_28734__$1;
(statearr_28761_28800[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (9))){
var inst_28666 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28762_28801 = state_28734__$1;
(statearr_28762_28801[(2)] = inst_28666);

(statearr_28762_28801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (5))){
var inst_28660 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(8),inst_28660);
} else {
if((state_val_28735 === (14))){
var inst_28680 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28763_28802 = state_28734__$1;
(statearr_28763_28802[(2)] = inst_28680);

(statearr_28763_28802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (26))){
var inst_28704 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28764_28803 = state_28734__$1;
(statearr_28764_28803[(2)] = inst_28704);

(statearr_28764_28803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (16))){
var inst_28691 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28691)){
var statearr_28765_28804 = state_28734__$1;
(statearr_28765_28804[(1)] = (19));

} else {
var statearr_28766_28805 = state_28734__$1;
(statearr_28766_28805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (30))){
var inst_28711 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28767_28806 = state_28734__$1;
(statearr_28767_28806[(2)] = inst_28711);

(statearr_28767_28806[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (10))){
var inst_28672 = figwheel.client.heads_up.clear.call(null);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(13),inst_28672);
} else {
if((state_val_28735 === (18))){
var inst_28689 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28768_28807 = state_28734__$1;
(statearr_28768_28807[(2)] = inst_28689);

(statearr_28768_28807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (8))){
var inst_28662 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28769_28808 = state_28734__$1;
(statearr_28769_28808[(2)] = inst_28662);

(statearr_28769_28808[(1)] = (7));


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
});})(c__23229__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23214__auto__,c__23229__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto____0 = (function (){
var statearr_28773 = [null,null,null,null,null,null,null,null,null];
(statearr_28773[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto__);

(statearr_28773[(1)] = (1));

return statearr_28773;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto____1 = (function (state_28734){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_28734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e28774){if((e28774 instanceof Object)){
var ex__23218__auto__ = e28774;
var statearr_28775_28809 = state_28734;
(statearr_28775_28809[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28810 = state_28734;
state_28734 = G__28810;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto__ = function(state_28734){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto____1.call(this,state_28734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__,msg_hist,msg_names,msg))
})();
var state__23231__auto__ = (function (){var statearr_28776 = f__23230__auto__.call(null);
(statearr_28776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_28776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__,msg_hist,msg_names,msg))
);

return c__23229__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23229__auto___28873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto___28873,ch){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto___28873,ch){
return (function (state_28856){
var state_val_28857 = (state_28856[(1)]);
if((state_val_28857 === (8))){
var inst_28848 = (state_28856[(2)]);
var state_28856__$1 = (function (){var statearr_28858 = state_28856;
(statearr_28858[(7)] = inst_28848);

return statearr_28858;
})();
var statearr_28859_28874 = state_28856__$1;
(statearr_28859_28874[(2)] = null);

(statearr_28859_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (7))){
var inst_28852 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28860_28875 = state_28856__$1;
(statearr_28860_28875[(2)] = inst_28852);

(statearr_28860_28875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (6))){
var state_28856__$1 = state_28856;
var statearr_28861_28876 = state_28856__$1;
(statearr_28861_28876[(2)] = null);

(statearr_28861_28876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (5))){
var inst_28844 = (state_28856[(8)]);
var inst_28846 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28844);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28856__$1,(8),inst_28846);
} else {
if((state_val_28857 === (4))){
var inst_28844 = (state_28856[(8)]);
var inst_28844__$1 = (state_28856[(2)]);
var state_28856__$1 = (function (){var statearr_28862 = state_28856;
(statearr_28862[(8)] = inst_28844__$1);

return statearr_28862;
})();
if(cljs.core.truth_(inst_28844__$1)){
var statearr_28863_28877 = state_28856__$1;
(statearr_28863_28877[(1)] = (5));

} else {
var statearr_28864_28878 = state_28856__$1;
(statearr_28864_28878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (3))){
var inst_28854 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28856__$1,inst_28854);
} else {
if((state_val_28857 === (2))){
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28856__$1,(4),ch);
} else {
if((state_val_28857 === (1))){
var state_28856__$1 = state_28856;
var statearr_28865_28879 = state_28856__$1;
(statearr_28865_28879[(2)] = null);

(statearr_28865_28879[(1)] = (2));


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
});})(c__23229__auto___28873,ch))
;
return ((function (switch__23214__auto__,c__23229__auto___28873,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23215__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23215__auto____0 = (function (){
var statearr_28869 = [null,null,null,null,null,null,null,null,null];
(statearr_28869[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23215__auto__);

(statearr_28869[(1)] = (1));

return statearr_28869;
});
var figwheel$client$heads_up_plugin_$_state_machine__23215__auto____1 = (function (state_28856){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_28856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e28870){if((e28870 instanceof Object)){
var ex__23218__auto__ = e28870;
var statearr_28871_28880 = state_28856;
(statearr_28871_28880[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28881 = state_28856;
state_28856 = G__28881;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23215__auto__ = function(state_28856){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23215__auto____1.call(this,state_28856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23215__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23215__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto___28873,ch))
})();
var state__23231__auto__ = (function (){var statearr_28872 = f__23230__auto__.call(null);
(statearr_28872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto___28873);

return statearr_28872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto___28873,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_28902){
var state_val_28903 = (state_28902[(1)]);
if((state_val_28903 === (2))){
var inst_28899 = (state_28902[(2)]);
var inst_28900 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28902__$1 = (function (){var statearr_28904 = state_28902;
(statearr_28904[(7)] = inst_28899);

return statearr_28904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28902__$1,inst_28900);
} else {
if((state_val_28903 === (1))){
var inst_28897 = cljs.core.async.timeout.call(null,(3000));
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28902__$1,(2),inst_28897);
} else {
return null;
}
}
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23215__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23215__auto____0 = (function (){
var statearr_28908 = [null,null,null,null,null,null,null,null];
(statearr_28908[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23215__auto__);

(statearr_28908[(1)] = (1));

return statearr_28908;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23215__auto____1 = (function (state_28902){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_28902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e28909){if((e28909 instanceof Object)){
var ex__23218__auto__ = e28909;
var statearr_28910_28912 = state_28902;
(statearr_28910_28912[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28913 = state_28902;
state_28902 = G__28913;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23215__auto__ = function(state_28902){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23215__auto____1.call(this,state_28902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23215__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23215__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_28911 = f__23230__auto__.call(null);
(statearr_28911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_28911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18104__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18104__auto__)){
return ("CustomEvent" in window);
} else {
return and__18104__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28917 = {"detail":url};
return obj28917;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28918){
var map__28924 = p__28918;
var map__28924__$1 = ((cljs.core.seq_QMARK_.call(null,map__28924))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);
var ed = map__28924__$1;
var cause = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28925_28929 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28926_28930 = null;
var count__28927_28931 = (0);
var i__28928_28932 = (0);
while(true){
if((i__28928_28932 < count__28927_28931)){
var msg_28933 = cljs.core._nth.call(null,chunk__28926_28930,i__28928_28932);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28933);

var G__28934 = seq__28925_28929;
var G__28935 = chunk__28926_28930;
var G__28936 = count__28927_28931;
var G__28937 = (i__28928_28932 + (1));
seq__28925_28929 = G__28934;
chunk__28926_28930 = G__28935;
count__28927_28931 = G__28936;
i__28928_28932 = G__28937;
continue;
} else {
var temp__4126__auto___28938 = cljs.core.seq.call(null,seq__28925_28929);
if(temp__4126__auto___28938){
var seq__28925_28939__$1 = temp__4126__auto___28938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28925_28939__$1)){
var c__18901__auto___28940 = cljs.core.chunk_first.call(null,seq__28925_28939__$1);
var G__28941 = cljs.core.chunk_rest.call(null,seq__28925_28939__$1);
var G__28942 = c__18901__auto___28940;
var G__28943 = cljs.core.count.call(null,c__18901__auto___28940);
var G__28944 = (0);
seq__28925_28929 = G__28941;
chunk__28926_28930 = G__28942;
count__28927_28931 = G__28943;
i__28928_28932 = G__28944;
continue;
} else {
var msg_28945 = cljs.core.first.call(null,seq__28925_28939__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28945);

var G__28946 = cljs.core.next.call(null,seq__28925_28939__$1);
var G__28947 = null;
var G__28948 = (0);
var G__28949 = (0);
seq__28925_28929 = G__28946;
chunk__28926_28930 = G__28947;
count__28927_28931 = G__28948;
i__28928_28932 = G__28949;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28950){
var map__28952 = p__28950;
var map__28952__$1 = ((cljs.core.seq_QMARK_.call(null,map__28952))?cljs.core.apply.call(null,cljs.core.hash_map,map__28952):map__28952);
var w = map__28952__$1;
var message = cljs.core.get.call(null,map__28952__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18104__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18104__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18104__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28959 = cljs.core.seq.call(null,plugins);
var chunk__28960 = null;
var count__28961 = (0);
var i__28962 = (0);
while(true){
if((i__28962 < count__28961)){
var vec__28963 = cljs.core._nth.call(null,chunk__28960,i__28962);
var k = cljs.core.nth.call(null,vec__28963,(0),null);
var plugin = cljs.core.nth.call(null,vec__28963,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28965 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28959,chunk__28960,count__28961,i__28962,pl_28965,vec__28963,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28965.call(null,msg_hist);
});})(seq__28959,chunk__28960,count__28961,i__28962,pl_28965,vec__28963,k,plugin))
);
} else {
}

var G__28966 = seq__28959;
var G__28967 = chunk__28960;
var G__28968 = count__28961;
var G__28969 = (i__28962 + (1));
seq__28959 = G__28966;
chunk__28960 = G__28967;
count__28961 = G__28968;
i__28962 = G__28969;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28959);
if(temp__4126__auto__){
var seq__28959__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28959__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__28959__$1);
var G__28970 = cljs.core.chunk_rest.call(null,seq__28959__$1);
var G__28971 = c__18901__auto__;
var G__28972 = cljs.core.count.call(null,c__18901__auto__);
var G__28973 = (0);
seq__28959 = G__28970;
chunk__28960 = G__28971;
count__28961 = G__28972;
i__28962 = G__28973;
continue;
} else {
var vec__28964 = cljs.core.first.call(null,seq__28959__$1);
var k = cljs.core.nth.call(null,vec__28964,(0),null);
var plugin = cljs.core.nth.call(null,vec__28964,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28974 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28959,chunk__28960,count__28961,i__28962,pl_28974,vec__28964,k,plugin,seq__28959__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28974.call(null,msg_hist);
});})(seq__28959,chunk__28960,count__28961,i__28962,pl_28974,vec__28964,k,plugin,seq__28959__$1,temp__4126__auto__))
);
} else {
}

var G__28975 = cljs.core.next.call(null,seq__28959__$1);
var G__28976 = null;
var G__28977 = (0);
var G__28978 = (0);
seq__28959 = G__28975;
chunk__28960 = G__28976;
count__28961 = G__28977;
i__28962 = G__28978;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28980 = arguments.length;
switch (G__28980) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19156__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19156__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28983){
var map__28984 = p__28983;
var map__28984__$1 = ((cljs.core.seq_QMARK_.call(null,map__28984))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);
var opts = map__28984__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28982){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28982));
});

//# sourceMappingURL=client.js.map?rel=1432432039165