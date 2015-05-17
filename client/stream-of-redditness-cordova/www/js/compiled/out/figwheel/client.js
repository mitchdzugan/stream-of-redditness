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
var G__26833__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26834__i = 0, G__26834__a = new Array(arguments.length -  0);
while (G__26834__i < G__26834__a.length) {G__26834__a[G__26834__i] = arguments[G__26834__i + 0]; ++G__26834__i;}
  args = new cljs.core.IndexedSeq(G__26834__a,0);
} 
return G__26833__delegate.call(this,args);};
G__26833.cljs$lang$maxFixedArity = 0;
G__26833.cljs$lang$applyTo = (function (arglist__26835){
var args = cljs.core.seq(arglist__26835);
return G__26833__delegate(args);
});
G__26833.cljs$core$IFn$_invoke$arity$variadic = G__26833__delegate;
return G__26833;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26836){
var map__26838 = p__26836;
var map__26838__$1 = ((cljs.core.seq_QMARK_.call(null,map__26838))?cljs.core.apply.call(null,cljs.core.hash_map,map__26838):map__26838);
var class$ = cljs.core.get.call(null,map__26838__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26838__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__23258__auto___26967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___26967,ch){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___26967,ch){
return (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (7))){
var inst_26937 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26943_26968 = state_26941__$1;
(statearr_26943_26968[(2)] = inst_26937);

(statearr_26943_26968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (1))){
var state_26941__$1 = state_26941;
var statearr_26944_26969 = state_26941__$1;
(statearr_26944_26969[(2)] = null);

(statearr_26944_26969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (4))){
var inst_26905 = (state_26941[(7)]);
var inst_26905__$1 = (state_26941[(2)]);
var state_26941__$1 = (function (){var statearr_26945 = state_26941;
(statearr_26945[(7)] = inst_26905__$1);

return statearr_26945;
})();
if(cljs.core.truth_(inst_26905__$1)){
var statearr_26946_26970 = state_26941__$1;
(statearr_26946_26970[(1)] = (5));

} else {
var statearr_26947_26971 = state_26941__$1;
(statearr_26947_26971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (13))){
var state_26941__$1 = state_26941;
var statearr_26948_26972 = state_26941__$1;
(statearr_26948_26972[(2)] = null);

(statearr_26948_26972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (6))){
var state_26941__$1 = state_26941;
var statearr_26949_26973 = state_26941__$1;
(statearr_26949_26973[(2)] = null);

(statearr_26949_26973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (3))){
var inst_26939 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else {
if((state_val_26942 === (12))){
var inst_26912 = (state_26941[(8)]);
var inst_26925 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26912);
var inst_26926 = cljs.core.first.call(null,inst_26925);
var inst_26927 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26926);
var inst_26928 = console.warn("Figwheel: Not loading code with warnings - ",inst_26927);
var state_26941__$1 = state_26941;
var statearr_26950_26974 = state_26941__$1;
(statearr_26950_26974[(2)] = inst_26928);

(statearr_26950_26974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (2))){
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26941__$1,(4),ch);
} else {
if((state_val_26942 === (11))){
var inst_26921 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26951_26975 = state_26941__$1;
(statearr_26951_26975[(2)] = inst_26921);

(statearr_26951_26975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (9))){
var inst_26911 = (state_26941[(9)]);
var inst_26923 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26911,opts);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26923)){
var statearr_26952_26976 = state_26941__$1;
(statearr_26952_26976[(1)] = (12));

} else {
var statearr_26953_26977 = state_26941__$1;
(statearr_26953_26977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (5))){
var inst_26911 = (state_26941[(9)]);
var inst_26905 = (state_26941[(7)]);
var inst_26907 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26908 = (new cljs.core.PersistentArrayMap(null,2,inst_26907,null));
var inst_26909 = (new cljs.core.PersistentHashSet(null,inst_26908,null));
var inst_26910 = figwheel.client.focus_msgs.call(null,inst_26909,inst_26905);
var inst_26911__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26910);
var inst_26912 = cljs.core.first.call(null,inst_26910);
var inst_26913 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26911__$1,opts);
var state_26941__$1 = (function (){var statearr_26954 = state_26941;
(statearr_26954[(8)] = inst_26912);

(statearr_26954[(9)] = inst_26911__$1);

return statearr_26954;
})();
if(cljs.core.truth_(inst_26913)){
var statearr_26955_26978 = state_26941__$1;
(statearr_26955_26978[(1)] = (8));

} else {
var statearr_26956_26979 = state_26941__$1;
(statearr_26956_26979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (14))){
var inst_26931 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26957_26980 = state_26941__$1;
(statearr_26957_26980[(2)] = inst_26931);

(statearr_26957_26980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (10))){
var inst_26933 = (state_26941[(2)]);
var state_26941__$1 = (function (){var statearr_26958 = state_26941;
(statearr_26958[(10)] = inst_26933);

return statearr_26958;
})();
var statearr_26959_26981 = state_26941__$1;
(statearr_26959_26981[(2)] = null);

(statearr_26959_26981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (8))){
var inst_26912 = (state_26941[(8)]);
var inst_26915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26916 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26912);
var inst_26917 = cljs.core.async.timeout.call(null,(1000));
var inst_26918 = [inst_26916,inst_26917];
var inst_26919 = (new cljs.core.PersistentVector(null,2,(5),inst_26915,inst_26918,null));
var state_26941__$1 = state_26941;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26941__$1,(11),inst_26919);
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
});})(c__23258__auto___26967,ch))
;
return ((function (switch__23196__auto__,c__23258__auto___26967,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23197__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23197__auto____0 = (function (){
var statearr_26963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26963[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23197__auto__);

(statearr_26963[(1)] = (1));

return statearr_26963;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23197__auto____1 = (function (state_26941){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_26941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e26964){if((e26964 instanceof Object)){
var ex__23200__auto__ = e26964;
var statearr_26965_26982 = state_26941;
(statearr_26965_26982[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26941;
state_26941 = G__26983;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23197__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23197__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23197__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23197__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___26967,ch))
})();
var state__23260__auto__ = (function (){var statearr_26966 = f__23259__auto__.call(null);
(statearr_26966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___26967);

return statearr_26966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___26967,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26984_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26984_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26991 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26991){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26989 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26990 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26989,_STAR_print_newline_STAR_26990,base_path_26991){
return (function() { 
var G__26992__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26993__i = 0, G__26993__a = new Array(arguments.length -  0);
while (G__26993__i < G__26993__a.length) {G__26993__a[G__26993__i] = arguments[G__26993__i + 0]; ++G__26993__i;}
  args = new cljs.core.IndexedSeq(G__26993__a,0);
} 
return G__26992__delegate.call(this,args);};
G__26992.cljs$lang$maxFixedArity = 0;
G__26992.cljs$lang$applyTo = (function (arglist__26994){
var args = cljs.core.seq(arglist__26994);
return G__26992__delegate(args);
});
G__26992.cljs$core$IFn$_invoke$arity$variadic = G__26992__delegate;
return G__26992;
})()
;})(_STAR_print_fn_STAR_26989,_STAR_print_newline_STAR_26990,base_path_26991))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26990;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26989;
}}catch (e26988){if((e26988 instanceof Error)){
var e = e26988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26991], null));
} else {
var e = e26988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26991))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26995){
var map__27000 = p__26995;
var map__27000__$1 = ((cljs.core.seq_QMARK_.call(null,map__27000))?cljs.core.apply.call(null,cljs.core.hash_map,map__27000):map__27000);
var opts = map__27000__$1;
var build_id = cljs.core.get.call(null,map__27000__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27000,map__27000__$1,opts,build_id){
return (function (p__27001){
var vec__27002 = p__27001;
var map__27003 = cljs.core.nth.call(null,vec__27002,(0),null);
var map__27003__$1 = ((cljs.core.seq_QMARK_.call(null,map__27003))?cljs.core.apply.call(null,cljs.core.hash_map,map__27003):map__27003);
var msg = map__27003__$1;
var msg_name = cljs.core.get.call(null,map__27003__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27002,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__27002,map__27003,map__27003__$1,msg,msg_name,_,map__27000,map__27000__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27002,map__27003,map__27003__$1,msg,msg_name,_,map__27000,map__27000__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27000,map__27000__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27007){
var vec__27008 = p__27007;
var map__27009 = cljs.core.nth.call(null,vec__27008,(0),null);
var map__27009__$1 = ((cljs.core.seq_QMARK_.call(null,map__27009))?cljs.core.apply.call(null,cljs.core.hash_map,map__27009):map__27009);
var msg = map__27009__$1;
var msg_name = cljs.core.get.call(null,map__27009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27008,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27010){
var map__27018 = p__27010;
var map__27018__$1 = ((cljs.core.seq_QMARK_.call(null,map__27018))?cljs.core.apply.call(null,cljs.core.hash_map,map__27018):map__27018);
var on_compile_fail = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__27018,map__27018__$1,on_compile_fail,on_compile_warning){
return (function (p__27019){
var vec__27020 = p__27019;
var map__27021 = cljs.core.nth.call(null,vec__27020,(0),null);
var map__27021__$1 = ((cljs.core.seq_QMARK_.call(null,map__27021))?cljs.core.apply.call(null,cljs.core.hash_map,map__27021):map__27021);
var msg = map__27021__$1;
var msg_name = cljs.core.get.call(null,map__27021__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27020,(1));
var pred__27022 = cljs.core._EQ_;
var expr__27023 = msg_name;
if(cljs.core.truth_(pred__27022.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27023))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27022.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27023))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27018,map__27018__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__,msg_hist,msg_names,msg){
return (function (state_27224){
var state_val_27225 = (state_27224[(1)]);
if((state_val_27225 === (7))){
var inst_27158 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27226_27267 = state_27224__$1;
(statearr_27226_27267[(2)] = inst_27158);

(statearr_27226_27267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (20))){
var inst_27186 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27186)){
var statearr_27227_27268 = state_27224__$1;
(statearr_27227_27268[(1)] = (22));

} else {
var statearr_27228_27269 = state_27224__$1;
(statearr_27228_27269[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (27))){
var inst_27198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27199 = figwheel.client.heads_up.display_warning.call(null,inst_27198);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(30),inst_27199);
} else {
if((state_val_27225 === (1))){
var inst_27146 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27146)){
var statearr_27229_27270 = state_27224__$1;
(statearr_27229_27270[(1)] = (2));

} else {
var statearr_27230_27271 = state_27224__$1;
(statearr_27230_27271[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (24))){
var inst_27214 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27231_27272 = state_27224__$1;
(statearr_27231_27272[(2)] = inst_27214);

(statearr_27231_27272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (4))){
var inst_27222 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else {
if((state_val_27225 === (15))){
var inst_27174 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27175 = figwheel.client.format_messages.call(null,inst_27174);
var inst_27176 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27177 = figwheel.client.heads_up.display_error.call(null,inst_27175,inst_27176);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(18),inst_27177);
} else {
if((state_val_27225 === (21))){
var inst_27216 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27232_27273 = state_27224__$1;
(statearr_27232_27273[(2)] = inst_27216);

(statearr_27232_27273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (31))){
var inst_27205 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(34),inst_27205);
} else {
if((state_val_27225 === (32))){
var state_27224__$1 = state_27224;
var statearr_27233_27274 = state_27224__$1;
(statearr_27233_27274[(2)] = null);

(statearr_27233_27274[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (33))){
var inst_27210 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27234_27275 = state_27224__$1;
(statearr_27234_27275[(2)] = inst_27210);

(statearr_27234_27275[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (13))){
var inst_27164 = (state_27224[(2)]);
var inst_27165 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27166 = figwheel.client.format_messages.call(null,inst_27165);
var inst_27167 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27168 = figwheel.client.heads_up.display_error.call(null,inst_27166,inst_27167);
var state_27224__$1 = (function (){var statearr_27235 = state_27224;
(statearr_27235[(7)] = inst_27164);

return statearr_27235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(14),inst_27168);
} else {
if((state_val_27225 === (22))){
var inst_27188 = figwheel.client.heads_up.clear.call(null);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(25),inst_27188);
} else {
if((state_val_27225 === (29))){
var inst_27212 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27236_27276 = state_27224__$1;
(statearr_27236_27276[(2)] = inst_27212);

(statearr_27236_27276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (6))){
var inst_27154 = figwheel.client.heads_up.clear.call(null);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(9),inst_27154);
} else {
if((state_val_27225 === (28))){
var inst_27203 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27203)){
var statearr_27237_27277 = state_27224__$1;
(statearr_27237_27277[(1)] = (31));

} else {
var statearr_27238_27278 = state_27224__$1;
(statearr_27238_27278[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (25))){
var inst_27190 = (state_27224[(2)]);
var inst_27191 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27192 = figwheel.client.heads_up.display_warning.call(null,inst_27191);
var state_27224__$1 = (function (){var statearr_27239 = state_27224;
(statearr_27239[(8)] = inst_27190);

return statearr_27239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(26),inst_27192);
} else {
if((state_val_27225 === (34))){
var inst_27207 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27240_27279 = state_27224__$1;
(statearr_27240_27279[(2)] = inst_27207);

(statearr_27240_27279[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (17))){
var inst_27218 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27241_27280 = state_27224__$1;
(statearr_27241_27280[(2)] = inst_27218);

(statearr_27241_27280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (3))){
var inst_27160 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27160)){
var statearr_27242_27281 = state_27224__$1;
(statearr_27242_27281[(1)] = (10));

} else {
var statearr_27243_27282 = state_27224__$1;
(statearr_27243_27282[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (12))){
var inst_27220 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27244_27283 = state_27224__$1;
(statearr_27244_27283[(2)] = inst_27220);

(statearr_27244_27283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (2))){
var inst_27148 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27148)){
var statearr_27245_27284 = state_27224__$1;
(statearr_27245_27284[(1)] = (5));

} else {
var statearr_27246_27285 = state_27224__$1;
(statearr_27246_27285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (23))){
var inst_27196 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27196)){
var statearr_27247_27286 = state_27224__$1;
(statearr_27247_27286[(1)] = (27));

} else {
var statearr_27248_27287 = state_27224__$1;
(statearr_27248_27287[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (19))){
var inst_27183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27184 = figwheel.client.heads_up.append_message.call(null,inst_27183);
var state_27224__$1 = state_27224;
var statearr_27249_27288 = state_27224__$1;
(statearr_27249_27288[(2)] = inst_27184);

(statearr_27249_27288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (11))){
var inst_27172 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27172)){
var statearr_27250_27289 = state_27224__$1;
(statearr_27250_27289[(1)] = (15));

} else {
var statearr_27251_27290 = state_27224__$1;
(statearr_27251_27290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (9))){
var inst_27156 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27252_27291 = state_27224__$1;
(statearr_27252_27291[(2)] = inst_27156);

(statearr_27252_27291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (5))){
var inst_27150 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(8),inst_27150);
} else {
if((state_val_27225 === (14))){
var inst_27170 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27253_27292 = state_27224__$1;
(statearr_27253_27292[(2)] = inst_27170);

(statearr_27253_27292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (26))){
var inst_27194 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27254_27293 = state_27224__$1;
(statearr_27254_27293[(2)] = inst_27194);

(statearr_27254_27293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (16))){
var inst_27181 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27181)){
var statearr_27255_27294 = state_27224__$1;
(statearr_27255_27294[(1)] = (19));

} else {
var statearr_27256_27295 = state_27224__$1;
(statearr_27256_27295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (30))){
var inst_27201 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27257_27296 = state_27224__$1;
(statearr_27257_27296[(2)] = inst_27201);

(statearr_27257_27296[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (10))){
var inst_27162 = figwheel.client.heads_up.clear.call(null);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(13),inst_27162);
} else {
if((state_val_27225 === (18))){
var inst_27179 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27258_27297 = state_27224__$1;
(statearr_27258_27297[(2)] = inst_27179);

(statearr_27258_27297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (8))){
var inst_27152 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27259_27298 = state_27224__$1;
(statearr_27259_27298[(2)] = inst_27152);

(statearr_27259_27298[(1)] = (7));


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
});})(c__23258__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23196__auto__,c__23258__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto____0 = (function (){
var statearr_27263 = [null,null,null,null,null,null,null,null,null];
(statearr_27263[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto__);

(statearr_27263[(1)] = (1));

return statearr_27263;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto____1 = (function (state_27224){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e27264){if((e27264 instanceof Object)){
var ex__23200__auto__ = e27264;
var statearr_27265_27299 = state_27224;
(statearr_27265_27299[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27300 = state_27224;
state_27224 = G__27300;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__,msg_hist,msg_names,msg))
})();
var state__23260__auto__ = (function (){var statearr_27266 = f__23259__auto__.call(null);
(statearr_27266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_27266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__,msg_hist,msg_names,msg))
);

return c__23258__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23258__auto___27363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto___27363,ch){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto___27363,ch){
return (function (state_27346){
var state_val_27347 = (state_27346[(1)]);
if((state_val_27347 === (8))){
var inst_27338 = (state_27346[(2)]);
var state_27346__$1 = (function (){var statearr_27348 = state_27346;
(statearr_27348[(7)] = inst_27338);

return statearr_27348;
})();
var statearr_27349_27364 = state_27346__$1;
(statearr_27349_27364[(2)] = null);

(statearr_27349_27364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (7))){
var inst_27342 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
var statearr_27350_27365 = state_27346__$1;
(statearr_27350_27365[(2)] = inst_27342);

(statearr_27350_27365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (6))){
var state_27346__$1 = state_27346;
var statearr_27351_27366 = state_27346__$1;
(statearr_27351_27366[(2)] = null);

(statearr_27351_27366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (5))){
var inst_27334 = (state_27346[(8)]);
var inst_27336 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27334);
var state_27346__$1 = state_27346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27346__$1,(8),inst_27336);
} else {
if((state_val_27347 === (4))){
var inst_27334 = (state_27346[(8)]);
var inst_27334__$1 = (state_27346[(2)]);
var state_27346__$1 = (function (){var statearr_27352 = state_27346;
(statearr_27352[(8)] = inst_27334__$1);

return statearr_27352;
})();
if(cljs.core.truth_(inst_27334__$1)){
var statearr_27353_27367 = state_27346__$1;
(statearr_27353_27367[(1)] = (5));

} else {
var statearr_27354_27368 = state_27346__$1;
(statearr_27354_27368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (3))){
var inst_27344 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27346__$1,inst_27344);
} else {
if((state_val_27347 === (2))){
var state_27346__$1 = state_27346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27346__$1,(4),ch);
} else {
if((state_val_27347 === (1))){
var state_27346__$1 = state_27346;
var statearr_27355_27369 = state_27346__$1;
(statearr_27355_27369[(2)] = null);

(statearr_27355_27369[(1)] = (2));


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
});})(c__23258__auto___27363,ch))
;
return ((function (switch__23196__auto__,c__23258__auto___27363,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23197__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23197__auto____0 = (function (){
var statearr_27359 = [null,null,null,null,null,null,null,null,null];
(statearr_27359[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23197__auto__);

(statearr_27359[(1)] = (1));

return statearr_27359;
});
var figwheel$client$heads_up_plugin_$_state_machine__23197__auto____1 = (function (state_27346){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_27346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e27360){if((e27360 instanceof Object)){
var ex__23200__auto__ = e27360;
var statearr_27361_27370 = state_27346;
(statearr_27361_27370[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27371 = state_27346;
state_27346 = G__27371;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23197__auto__ = function(state_27346){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23197__auto____1.call(this,state_27346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23197__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23197__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto___27363,ch))
})();
var state__23260__auto__ = (function (){var statearr_27362 = f__23259__auto__.call(null);
(statearr_27362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto___27363);

return statearr_27362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto___27363,ch))
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
var c__23258__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23258__auto__){
return (function (){
var f__23259__auto__ = (function (){var switch__23196__auto__ = ((function (c__23258__auto__){
return (function (state_27392){
var state_val_27393 = (state_27392[(1)]);
if((state_val_27393 === (2))){
var inst_27389 = (state_27392[(2)]);
var inst_27390 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27392__$1 = (function (){var statearr_27394 = state_27392;
(statearr_27394[(7)] = inst_27389);

return statearr_27394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27392__$1,inst_27390);
} else {
if((state_val_27393 === (1))){
var inst_27387 = cljs.core.async.timeout.call(null,(3000));
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(2),inst_27387);
} else {
return null;
}
}
});})(c__23258__auto__))
;
return ((function (switch__23196__auto__,c__23258__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23197__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23197__auto____0 = (function (){
var statearr_27398 = [null,null,null,null,null,null,null,null];
(statearr_27398[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23197__auto__);

(statearr_27398[(1)] = (1));

return statearr_27398;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23197__auto____1 = (function (state_27392){
while(true){
var ret_value__23198__auto__ = (function (){try{while(true){
var result__23199__auto__ = switch__23196__auto__.call(null,state_27392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23199__auto__;
}
break;
}
}catch (e27399){if((e27399 instanceof Object)){
var ex__23200__auto__ = e27399;
var statearr_27400_27402 = state_27392;
(statearr_27400_27402[(5)] = ex__23200__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27403 = state_27392;
state_27392 = G__27403;
continue;
} else {
return ret_value__23198__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23197__auto__ = function(state_27392){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23197__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23197__auto____1.call(this,state_27392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23197__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23197__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23197__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23197__auto__;
})()
;})(switch__23196__auto__,c__23258__auto__))
})();
var state__23260__auto__ = (function (){var statearr_27401 = f__23259__auto__.call(null);
(statearr_27401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23258__auto__);

return statearr_27401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23260__auto__);
});})(c__23258__auto__))
);

return c__23258__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27407 = {"detail":url};
return obj27407;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27408){
var map__27414 = p__27408;
var map__27414__$1 = ((cljs.core.seq_QMARK_.call(null,map__27414))?cljs.core.apply.call(null,cljs.core.hash_map,map__27414):map__27414);
var ed = map__27414__$1;
var cause = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27415_27419 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27416_27420 = null;
var count__27417_27421 = (0);
var i__27418_27422 = (0);
while(true){
if((i__27418_27422 < count__27417_27421)){
var msg_27423 = cljs.core._nth.call(null,chunk__27416_27420,i__27418_27422);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27423);

var G__27424 = seq__27415_27419;
var G__27425 = chunk__27416_27420;
var G__27426 = count__27417_27421;
var G__27427 = (i__27418_27422 + (1));
seq__27415_27419 = G__27424;
chunk__27416_27420 = G__27425;
count__27417_27421 = G__27426;
i__27418_27422 = G__27427;
continue;
} else {
var temp__4126__auto___27428 = cljs.core.seq.call(null,seq__27415_27419);
if(temp__4126__auto___27428){
var seq__27415_27429__$1 = temp__4126__auto___27428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27415_27429__$1)){
var c__18901__auto___27430 = cljs.core.chunk_first.call(null,seq__27415_27429__$1);
var G__27431 = cljs.core.chunk_rest.call(null,seq__27415_27429__$1);
var G__27432 = c__18901__auto___27430;
var G__27433 = cljs.core.count.call(null,c__18901__auto___27430);
var G__27434 = (0);
seq__27415_27419 = G__27431;
chunk__27416_27420 = G__27432;
count__27417_27421 = G__27433;
i__27418_27422 = G__27434;
continue;
} else {
var msg_27435 = cljs.core.first.call(null,seq__27415_27429__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27435);

var G__27436 = cljs.core.next.call(null,seq__27415_27429__$1);
var G__27437 = null;
var G__27438 = (0);
var G__27439 = (0);
seq__27415_27419 = G__27436;
chunk__27416_27420 = G__27437;
count__27417_27421 = G__27438;
i__27418_27422 = G__27439;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27440){
var map__27442 = p__27440;
var map__27442__$1 = ((cljs.core.seq_QMARK_.call(null,map__27442))?cljs.core.apply.call(null,cljs.core.hash_map,map__27442):map__27442);
var w = map__27442__$1;
var message = cljs.core.get.call(null,map__27442__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27449 = cljs.core.seq.call(null,plugins);
var chunk__27450 = null;
var count__27451 = (0);
var i__27452 = (0);
while(true){
if((i__27452 < count__27451)){
var vec__27453 = cljs.core._nth.call(null,chunk__27450,i__27452);
var k = cljs.core.nth.call(null,vec__27453,(0),null);
var plugin = cljs.core.nth.call(null,vec__27453,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27455 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27449,chunk__27450,count__27451,i__27452,pl_27455,vec__27453,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27455.call(null,msg_hist);
});})(seq__27449,chunk__27450,count__27451,i__27452,pl_27455,vec__27453,k,plugin))
);
} else {
}

var G__27456 = seq__27449;
var G__27457 = chunk__27450;
var G__27458 = count__27451;
var G__27459 = (i__27452 + (1));
seq__27449 = G__27456;
chunk__27450 = G__27457;
count__27451 = G__27458;
i__27452 = G__27459;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27449);
if(temp__4126__auto__){
var seq__27449__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27449__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__27449__$1);
var G__27460 = cljs.core.chunk_rest.call(null,seq__27449__$1);
var G__27461 = c__18901__auto__;
var G__27462 = cljs.core.count.call(null,c__18901__auto__);
var G__27463 = (0);
seq__27449 = G__27460;
chunk__27450 = G__27461;
count__27451 = G__27462;
i__27452 = G__27463;
continue;
} else {
var vec__27454 = cljs.core.first.call(null,seq__27449__$1);
var k = cljs.core.nth.call(null,vec__27454,(0),null);
var plugin = cljs.core.nth.call(null,vec__27454,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27464 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27449,chunk__27450,count__27451,i__27452,pl_27464,vec__27454,k,plugin,seq__27449__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27464.call(null,msg_hist);
});})(seq__27449,chunk__27450,count__27451,i__27452,pl_27464,vec__27454,k,plugin,seq__27449__$1,temp__4126__auto__))
);
} else {
}

var G__27465 = cljs.core.next.call(null,seq__27449__$1);
var G__27466 = null;
var G__27467 = (0);
var G__27468 = (0);
seq__27449 = G__27465;
chunk__27450 = G__27466;
count__27451 = G__27467;
i__27452 = G__27468;
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
var G__27470 = arguments.length;
switch (G__27470) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27473){
var map__27474 = p__27473;
var map__27474__$1 = ((cljs.core.seq_QMARK_.call(null,map__27474))?cljs.core.apply.call(null,cljs.core.hash_map,map__27474):map__27474);
var opts = map__27474__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27472){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27472));
});

//# sourceMappingURL=client.js.map?rel=1431876836554