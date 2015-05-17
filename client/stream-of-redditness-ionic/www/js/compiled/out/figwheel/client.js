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
var G__26822__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26823__i = 0, G__26823__a = new Array(arguments.length -  0);
while (G__26823__i < G__26823__a.length) {G__26823__a[G__26823__i] = arguments[G__26823__i + 0]; ++G__26823__i;}
  args = new cljs.core.IndexedSeq(G__26823__a,0);
} 
return G__26822__delegate.call(this,args);};
G__26822.cljs$lang$maxFixedArity = 0;
G__26822.cljs$lang$applyTo = (function (arglist__26824){
var args = cljs.core.seq(arglist__26824);
return G__26822__delegate(args);
});
G__26822.cljs$core$IFn$_invoke$arity$variadic = G__26822__delegate;
return G__26822;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26825){
var map__26827 = p__26825;
var map__26827__$1 = ((cljs.core.seq_QMARK_.call(null,map__26827))?cljs.core.apply.call(null,cljs.core.hash_map,map__26827):map__26827);
var class$ = cljs.core.get.call(null,map__26827__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__23247__auto___26956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___26956,ch){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___26956,ch){
return (function (state_26930){
var state_val_26931 = (state_26930[(1)]);
if((state_val_26931 === (7))){
var inst_26926 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
var statearr_26932_26957 = state_26930__$1;
(statearr_26932_26957[(2)] = inst_26926);

(statearr_26932_26957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (1))){
var state_26930__$1 = state_26930;
var statearr_26933_26958 = state_26930__$1;
(statearr_26933_26958[(2)] = null);

(statearr_26933_26958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (4))){
var inst_26894 = (state_26930[(7)]);
var inst_26894__$1 = (state_26930[(2)]);
var state_26930__$1 = (function (){var statearr_26934 = state_26930;
(statearr_26934[(7)] = inst_26894__$1);

return statearr_26934;
})();
if(cljs.core.truth_(inst_26894__$1)){
var statearr_26935_26959 = state_26930__$1;
(statearr_26935_26959[(1)] = (5));

} else {
var statearr_26936_26960 = state_26930__$1;
(statearr_26936_26960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (13))){
var state_26930__$1 = state_26930;
var statearr_26937_26961 = state_26930__$1;
(statearr_26937_26961[(2)] = null);

(statearr_26937_26961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (6))){
var state_26930__$1 = state_26930;
var statearr_26938_26962 = state_26930__$1;
(statearr_26938_26962[(2)] = null);

(statearr_26938_26962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (3))){
var inst_26928 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26930__$1,inst_26928);
} else {
if((state_val_26931 === (12))){
var inst_26901 = (state_26930[(8)]);
var inst_26914 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26901);
var inst_26915 = cljs.core.first.call(null,inst_26914);
var inst_26916 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26915);
var inst_26917 = console.warn("Figwheel: Not loading code with warnings - ",inst_26916);
var state_26930__$1 = state_26930;
var statearr_26939_26963 = state_26930__$1;
(statearr_26939_26963[(2)] = inst_26917);

(statearr_26939_26963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (2))){
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26930__$1,(4),ch);
} else {
if((state_val_26931 === (11))){
var inst_26910 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
var statearr_26940_26964 = state_26930__$1;
(statearr_26940_26964[(2)] = inst_26910);

(statearr_26940_26964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (9))){
var inst_26900 = (state_26930[(9)]);
var inst_26912 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26900,opts);
var state_26930__$1 = state_26930;
if(cljs.core.truth_(inst_26912)){
var statearr_26941_26965 = state_26930__$1;
(statearr_26941_26965[(1)] = (12));

} else {
var statearr_26942_26966 = state_26930__$1;
(statearr_26942_26966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (5))){
var inst_26894 = (state_26930[(7)]);
var inst_26900 = (state_26930[(9)]);
var inst_26896 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26897 = (new cljs.core.PersistentArrayMap(null,2,inst_26896,null));
var inst_26898 = (new cljs.core.PersistentHashSet(null,inst_26897,null));
var inst_26899 = figwheel.client.focus_msgs.call(null,inst_26898,inst_26894);
var inst_26900__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26899);
var inst_26901 = cljs.core.first.call(null,inst_26899);
var inst_26902 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26900__$1,opts);
var state_26930__$1 = (function (){var statearr_26943 = state_26930;
(statearr_26943[(8)] = inst_26901);

(statearr_26943[(9)] = inst_26900__$1);

return statearr_26943;
})();
if(cljs.core.truth_(inst_26902)){
var statearr_26944_26967 = state_26930__$1;
(statearr_26944_26967[(1)] = (8));

} else {
var statearr_26945_26968 = state_26930__$1;
(statearr_26945_26968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (14))){
var inst_26920 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
var statearr_26946_26969 = state_26930__$1;
(statearr_26946_26969[(2)] = inst_26920);

(statearr_26946_26969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (10))){
var inst_26922 = (state_26930[(2)]);
var state_26930__$1 = (function (){var statearr_26947 = state_26930;
(statearr_26947[(10)] = inst_26922);

return statearr_26947;
})();
var statearr_26948_26970 = state_26930__$1;
(statearr_26948_26970[(2)] = null);

(statearr_26948_26970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (8))){
var inst_26901 = (state_26930[(8)]);
var inst_26904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26905 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26901);
var inst_26906 = cljs.core.async.timeout.call(null,(1000));
var inst_26907 = [inst_26905,inst_26906];
var inst_26908 = (new cljs.core.PersistentVector(null,2,(5),inst_26904,inst_26907,null));
var state_26930__$1 = state_26930;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26930__$1,(11),inst_26908);
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
});})(c__23247__auto___26956,ch))
;
return ((function (switch__23185__auto__,c__23247__auto___26956,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23186__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23186__auto____0 = (function (){
var statearr_26952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26952[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23186__auto__);

(statearr_26952[(1)] = (1));

return statearr_26952;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23186__auto____1 = (function (state_26930){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_26930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e26953){if((e26953 instanceof Object)){
var ex__23189__auto__ = e26953;
var statearr_26954_26971 = state_26930;
(statearr_26954_26971[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26972 = state_26930;
state_26930 = G__26972;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23186__auto__ = function(state_26930){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23186__auto____1.call(this,state_26930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23186__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23186__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___26956,ch))
})();
var state__23249__auto__ = (function (){var statearr_26955 = f__23248__auto__.call(null);
(statearr_26955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___26956);

return statearr_26955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___26956,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26973_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26973_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26980 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26980){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26978 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26979 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26978,_STAR_print_newline_STAR_26979,base_path_26980){
return (function() { 
var G__26981__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26982__i = 0, G__26982__a = new Array(arguments.length -  0);
while (G__26982__i < G__26982__a.length) {G__26982__a[G__26982__i] = arguments[G__26982__i + 0]; ++G__26982__i;}
  args = new cljs.core.IndexedSeq(G__26982__a,0);
} 
return G__26981__delegate.call(this,args);};
G__26981.cljs$lang$maxFixedArity = 0;
G__26981.cljs$lang$applyTo = (function (arglist__26983){
var args = cljs.core.seq(arglist__26983);
return G__26981__delegate(args);
});
G__26981.cljs$core$IFn$_invoke$arity$variadic = G__26981__delegate;
return G__26981;
})()
;})(_STAR_print_fn_STAR_26978,_STAR_print_newline_STAR_26979,base_path_26980))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26979;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26978;
}}catch (e26977){if((e26977 instanceof Error)){
var e = e26977;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26980], null));
} else {
var e = e26977;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26980))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26984){
var map__26989 = p__26984;
var map__26989__$1 = ((cljs.core.seq_QMARK_.call(null,map__26989))?cljs.core.apply.call(null,cljs.core.hash_map,map__26989):map__26989);
var opts = map__26989__$1;
var build_id = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26989,map__26989__$1,opts,build_id){
return (function (p__26990){
var vec__26991 = p__26990;
var map__26992 = cljs.core.nth.call(null,vec__26991,(0),null);
var map__26992__$1 = ((cljs.core.seq_QMARK_.call(null,map__26992))?cljs.core.apply.call(null,cljs.core.hash_map,map__26992):map__26992);
var msg = map__26992__$1;
var msg_name = cljs.core.get.call(null,map__26992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26991,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26991,map__26992,map__26992__$1,msg,msg_name,_,map__26989,map__26989__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26991,map__26992,map__26992__$1,msg,msg_name,_,map__26989,map__26989__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26989,map__26989__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26996){
var vec__26997 = p__26996;
var map__26998 = cljs.core.nth.call(null,vec__26997,(0),null);
var map__26998__$1 = ((cljs.core.seq_QMARK_.call(null,map__26998))?cljs.core.apply.call(null,cljs.core.hash_map,map__26998):map__26998);
var msg = map__26998__$1;
var msg_name = cljs.core.get.call(null,map__26998__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26997,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26999){
var map__27007 = p__26999;
var map__27007__$1 = ((cljs.core.seq_QMARK_.call(null,map__27007))?cljs.core.apply.call(null,cljs.core.hash_map,map__27007):map__27007);
var on_compile_fail = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__27007,map__27007__$1,on_compile_fail,on_compile_warning){
return (function (p__27008){
var vec__27009 = p__27008;
var map__27010 = cljs.core.nth.call(null,vec__27009,(0),null);
var map__27010__$1 = ((cljs.core.seq_QMARK_.call(null,map__27010))?cljs.core.apply.call(null,cljs.core.hash_map,map__27010):map__27010);
var msg = map__27010__$1;
var msg_name = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27009,(1));
var pred__27011 = cljs.core._EQ_;
var expr__27012 = msg_name;
if(cljs.core.truth_(pred__27011.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27012))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27011.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27012))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27007,map__27007__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__,msg_hist,msg_names,msg){
return (function (state_27213){
var state_val_27214 = (state_27213[(1)]);
if((state_val_27214 === (7))){
var inst_27147 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27215_27256 = state_27213__$1;
(statearr_27215_27256[(2)] = inst_27147);

(statearr_27215_27256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (20))){
var inst_27175 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27175)){
var statearr_27216_27257 = state_27213__$1;
(statearr_27216_27257[(1)] = (22));

} else {
var statearr_27217_27258 = state_27213__$1;
(statearr_27217_27258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (27))){
var inst_27187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27188 = figwheel.client.heads_up.display_warning.call(null,inst_27187);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(30),inst_27188);
} else {
if((state_val_27214 === (1))){
var inst_27135 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27135)){
var statearr_27218_27259 = state_27213__$1;
(statearr_27218_27259[(1)] = (2));

} else {
var statearr_27219_27260 = state_27213__$1;
(statearr_27219_27260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (24))){
var inst_27203 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27220_27261 = state_27213__$1;
(statearr_27220_27261[(2)] = inst_27203);

(statearr_27220_27261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (4))){
var inst_27211 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27213__$1,inst_27211);
} else {
if((state_val_27214 === (15))){
var inst_27163 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27164 = figwheel.client.format_messages.call(null,inst_27163);
var inst_27165 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27166 = figwheel.client.heads_up.display_error.call(null,inst_27164,inst_27165);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(18),inst_27166);
} else {
if((state_val_27214 === (21))){
var inst_27205 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27221_27262 = state_27213__$1;
(statearr_27221_27262[(2)] = inst_27205);

(statearr_27221_27262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (31))){
var inst_27194 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(34),inst_27194);
} else {
if((state_val_27214 === (32))){
var state_27213__$1 = state_27213;
var statearr_27222_27263 = state_27213__$1;
(statearr_27222_27263[(2)] = null);

(statearr_27222_27263[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (33))){
var inst_27199 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27223_27264 = state_27213__$1;
(statearr_27223_27264[(2)] = inst_27199);

(statearr_27223_27264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (13))){
var inst_27153 = (state_27213[(2)]);
var inst_27154 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27155 = figwheel.client.format_messages.call(null,inst_27154);
var inst_27156 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27157 = figwheel.client.heads_up.display_error.call(null,inst_27155,inst_27156);
var state_27213__$1 = (function (){var statearr_27224 = state_27213;
(statearr_27224[(7)] = inst_27153);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(14),inst_27157);
} else {
if((state_val_27214 === (22))){
var inst_27177 = figwheel.client.heads_up.clear.call(null);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(25),inst_27177);
} else {
if((state_val_27214 === (29))){
var inst_27201 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27225_27265 = state_27213__$1;
(statearr_27225_27265[(2)] = inst_27201);

(statearr_27225_27265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (6))){
var inst_27143 = figwheel.client.heads_up.clear.call(null);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(9),inst_27143);
} else {
if((state_val_27214 === (28))){
var inst_27192 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27192)){
var statearr_27226_27266 = state_27213__$1;
(statearr_27226_27266[(1)] = (31));

} else {
var statearr_27227_27267 = state_27213__$1;
(statearr_27227_27267[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (25))){
var inst_27179 = (state_27213[(2)]);
var inst_27180 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27181 = figwheel.client.heads_up.display_warning.call(null,inst_27180);
var state_27213__$1 = (function (){var statearr_27228 = state_27213;
(statearr_27228[(8)] = inst_27179);

return statearr_27228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(26),inst_27181);
} else {
if((state_val_27214 === (34))){
var inst_27196 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27229_27268 = state_27213__$1;
(statearr_27229_27268[(2)] = inst_27196);

(statearr_27229_27268[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (17))){
var inst_27207 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27230_27269 = state_27213__$1;
(statearr_27230_27269[(2)] = inst_27207);

(statearr_27230_27269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (3))){
var inst_27149 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27149)){
var statearr_27231_27270 = state_27213__$1;
(statearr_27231_27270[(1)] = (10));

} else {
var statearr_27232_27271 = state_27213__$1;
(statearr_27232_27271[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (12))){
var inst_27209 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27233_27272 = state_27213__$1;
(statearr_27233_27272[(2)] = inst_27209);

(statearr_27233_27272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (2))){
var inst_27137 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27137)){
var statearr_27234_27273 = state_27213__$1;
(statearr_27234_27273[(1)] = (5));

} else {
var statearr_27235_27274 = state_27213__$1;
(statearr_27235_27274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (23))){
var inst_27185 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27185)){
var statearr_27236_27275 = state_27213__$1;
(statearr_27236_27275[(1)] = (27));

} else {
var statearr_27237_27276 = state_27213__$1;
(statearr_27237_27276[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (19))){
var inst_27172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27173 = figwheel.client.heads_up.append_message.call(null,inst_27172);
var state_27213__$1 = state_27213;
var statearr_27238_27277 = state_27213__$1;
(statearr_27238_27277[(2)] = inst_27173);

(statearr_27238_27277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (11))){
var inst_27161 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27161)){
var statearr_27239_27278 = state_27213__$1;
(statearr_27239_27278[(1)] = (15));

} else {
var statearr_27240_27279 = state_27213__$1;
(statearr_27240_27279[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (9))){
var inst_27145 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27241_27280 = state_27213__$1;
(statearr_27241_27280[(2)] = inst_27145);

(statearr_27241_27280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (5))){
var inst_27139 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(8),inst_27139);
} else {
if((state_val_27214 === (14))){
var inst_27159 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27242_27281 = state_27213__$1;
(statearr_27242_27281[(2)] = inst_27159);

(statearr_27242_27281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (26))){
var inst_27183 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27243_27282 = state_27213__$1;
(statearr_27243_27282[(2)] = inst_27183);

(statearr_27243_27282[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (16))){
var inst_27170 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27170)){
var statearr_27244_27283 = state_27213__$1;
(statearr_27244_27283[(1)] = (19));

} else {
var statearr_27245_27284 = state_27213__$1;
(statearr_27245_27284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (30))){
var inst_27190 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27246_27285 = state_27213__$1;
(statearr_27246_27285[(2)] = inst_27190);

(statearr_27246_27285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (10))){
var inst_27151 = figwheel.client.heads_up.clear.call(null);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(13),inst_27151);
} else {
if((state_val_27214 === (18))){
var inst_27168 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27247_27286 = state_27213__$1;
(statearr_27247_27286[(2)] = inst_27168);

(statearr_27247_27286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (8))){
var inst_27141 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27248_27287 = state_27213__$1;
(statearr_27248_27287[(2)] = inst_27141);

(statearr_27248_27287[(1)] = (7));


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
});})(c__23247__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23185__auto__,c__23247__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto____0 = (function (){
var statearr_27252 = [null,null,null,null,null,null,null,null,null];
(statearr_27252[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto__);

(statearr_27252[(1)] = (1));

return statearr_27252;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto____1 = (function (state_27213){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_27213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e27253){if((e27253 instanceof Object)){
var ex__23189__auto__ = e27253;
var statearr_27254_27288 = state_27213;
(statearr_27254_27288[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27289 = state_27213;
state_27213 = G__27289;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto__ = function(state_27213){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto____1.call(this,state_27213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__,msg_hist,msg_names,msg))
})();
var state__23249__auto__ = (function (){var statearr_27255 = f__23248__auto__.call(null);
(statearr_27255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_27255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__,msg_hist,msg_names,msg))
);

return c__23247__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23247__auto___27352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto___27352,ch){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto___27352,ch){
return (function (state_27335){
var state_val_27336 = (state_27335[(1)]);
if((state_val_27336 === (8))){
var inst_27327 = (state_27335[(2)]);
var state_27335__$1 = (function (){var statearr_27337 = state_27335;
(statearr_27337[(7)] = inst_27327);

return statearr_27337;
})();
var statearr_27338_27353 = state_27335__$1;
(statearr_27338_27353[(2)] = null);

(statearr_27338_27353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (7))){
var inst_27331 = (state_27335[(2)]);
var state_27335__$1 = state_27335;
var statearr_27339_27354 = state_27335__$1;
(statearr_27339_27354[(2)] = inst_27331);

(statearr_27339_27354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (6))){
var state_27335__$1 = state_27335;
var statearr_27340_27355 = state_27335__$1;
(statearr_27340_27355[(2)] = null);

(statearr_27340_27355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (5))){
var inst_27323 = (state_27335[(8)]);
var inst_27325 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27323);
var state_27335__$1 = state_27335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27335__$1,(8),inst_27325);
} else {
if((state_val_27336 === (4))){
var inst_27323 = (state_27335[(8)]);
var inst_27323__$1 = (state_27335[(2)]);
var state_27335__$1 = (function (){var statearr_27341 = state_27335;
(statearr_27341[(8)] = inst_27323__$1);

return statearr_27341;
})();
if(cljs.core.truth_(inst_27323__$1)){
var statearr_27342_27356 = state_27335__$1;
(statearr_27342_27356[(1)] = (5));

} else {
var statearr_27343_27357 = state_27335__$1;
(statearr_27343_27357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (3))){
var inst_27333 = (state_27335[(2)]);
var state_27335__$1 = state_27335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27335__$1,inst_27333);
} else {
if((state_val_27336 === (2))){
var state_27335__$1 = state_27335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27335__$1,(4),ch);
} else {
if((state_val_27336 === (1))){
var state_27335__$1 = state_27335;
var statearr_27344_27358 = state_27335__$1;
(statearr_27344_27358[(2)] = null);

(statearr_27344_27358[(1)] = (2));


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
});})(c__23247__auto___27352,ch))
;
return ((function (switch__23185__auto__,c__23247__auto___27352,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23186__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23186__auto____0 = (function (){
var statearr_27348 = [null,null,null,null,null,null,null,null,null];
(statearr_27348[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23186__auto__);

(statearr_27348[(1)] = (1));

return statearr_27348;
});
var figwheel$client$heads_up_plugin_$_state_machine__23186__auto____1 = (function (state_27335){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_27335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e27349){if((e27349 instanceof Object)){
var ex__23189__auto__ = e27349;
var statearr_27350_27359 = state_27335;
(statearr_27350_27359[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27360 = state_27335;
state_27335 = G__27360;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23186__auto__ = function(state_27335){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23186__auto____1.call(this,state_27335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23186__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23186__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto___27352,ch))
})();
var state__23249__auto__ = (function (){var statearr_27351 = f__23248__auto__.call(null);
(statearr_27351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto___27352);

return statearr_27351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto___27352,ch))
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
var c__23247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23247__auto__){
return (function (){
var f__23248__auto__ = (function (){var switch__23185__auto__ = ((function (c__23247__auto__){
return (function (state_27381){
var state_val_27382 = (state_27381[(1)]);
if((state_val_27382 === (2))){
var inst_27378 = (state_27381[(2)]);
var inst_27379 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27381__$1 = (function (){var statearr_27383 = state_27381;
(statearr_27383[(7)] = inst_27378);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27381__$1,inst_27379);
} else {
if((state_val_27382 === (1))){
var inst_27376 = cljs.core.async.timeout.call(null,(3000));
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(2),inst_27376);
} else {
return null;
}
}
});})(c__23247__auto__))
;
return ((function (switch__23185__auto__,c__23247__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23186__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23186__auto____0 = (function (){
var statearr_27387 = [null,null,null,null,null,null,null,null];
(statearr_27387[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23186__auto__);

(statearr_27387[(1)] = (1));

return statearr_27387;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23186__auto____1 = (function (state_27381){
while(true){
var ret_value__23187__auto__ = (function (){try{while(true){
var result__23188__auto__ = switch__23185__auto__.call(null,state_27381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23188__auto__;
}
break;
}
}catch (e27388){if((e27388 instanceof Object)){
var ex__23189__auto__ = e27388;
var statearr_27389_27391 = state_27381;
(statearr_27389_27391[(5)] = ex__23189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27392 = state_27381;
state_27381 = G__27392;
continue;
} else {
return ret_value__23187__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23186__auto__ = function(state_27381){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23186__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23186__auto____1.call(this,state_27381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23186__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23186__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23186__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23186__auto__;
})()
;})(switch__23185__auto__,c__23247__auto__))
})();
var state__23249__auto__ = (function (){var statearr_27390 = f__23248__auto__.call(null);
(statearr_27390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23247__auto__);

return statearr_27390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23249__auto__);
});})(c__23247__auto__))
);

return c__23247__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27396 = {"detail":url};
return obj27396;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27397){
var map__27403 = p__27397;
var map__27403__$1 = ((cljs.core.seq_QMARK_.call(null,map__27403))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);
var ed = map__27403__$1;
var cause = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27404_27408 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27405_27409 = null;
var count__27406_27410 = (0);
var i__27407_27411 = (0);
while(true){
if((i__27407_27411 < count__27406_27410)){
var msg_27412 = cljs.core._nth.call(null,chunk__27405_27409,i__27407_27411);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27412);

var G__27413 = seq__27404_27408;
var G__27414 = chunk__27405_27409;
var G__27415 = count__27406_27410;
var G__27416 = (i__27407_27411 + (1));
seq__27404_27408 = G__27413;
chunk__27405_27409 = G__27414;
count__27406_27410 = G__27415;
i__27407_27411 = G__27416;
continue;
} else {
var temp__4126__auto___27417 = cljs.core.seq.call(null,seq__27404_27408);
if(temp__4126__auto___27417){
var seq__27404_27418__$1 = temp__4126__auto___27417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27404_27418__$1)){
var c__18901__auto___27419 = cljs.core.chunk_first.call(null,seq__27404_27418__$1);
var G__27420 = cljs.core.chunk_rest.call(null,seq__27404_27418__$1);
var G__27421 = c__18901__auto___27419;
var G__27422 = cljs.core.count.call(null,c__18901__auto___27419);
var G__27423 = (0);
seq__27404_27408 = G__27420;
chunk__27405_27409 = G__27421;
count__27406_27410 = G__27422;
i__27407_27411 = G__27423;
continue;
} else {
var msg_27424 = cljs.core.first.call(null,seq__27404_27418__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27424);

var G__27425 = cljs.core.next.call(null,seq__27404_27418__$1);
var G__27426 = null;
var G__27427 = (0);
var G__27428 = (0);
seq__27404_27408 = G__27425;
chunk__27405_27409 = G__27426;
count__27406_27410 = G__27427;
i__27407_27411 = G__27428;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27429){
var map__27431 = p__27429;
var map__27431__$1 = ((cljs.core.seq_QMARK_.call(null,map__27431))?cljs.core.apply.call(null,cljs.core.hash_map,map__27431):map__27431);
var w = map__27431__$1;
var message = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27438 = cljs.core.seq.call(null,plugins);
var chunk__27439 = null;
var count__27440 = (0);
var i__27441 = (0);
while(true){
if((i__27441 < count__27440)){
var vec__27442 = cljs.core._nth.call(null,chunk__27439,i__27441);
var k = cljs.core.nth.call(null,vec__27442,(0),null);
var plugin = cljs.core.nth.call(null,vec__27442,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27438,chunk__27439,count__27440,i__27441,pl_27444,vec__27442,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27444.call(null,msg_hist);
});})(seq__27438,chunk__27439,count__27440,i__27441,pl_27444,vec__27442,k,plugin))
);
} else {
}

var G__27445 = seq__27438;
var G__27446 = chunk__27439;
var G__27447 = count__27440;
var G__27448 = (i__27441 + (1));
seq__27438 = G__27445;
chunk__27439 = G__27446;
count__27440 = G__27447;
i__27441 = G__27448;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27438);
if(temp__4126__auto__){
var seq__27438__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27438__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__27438__$1);
var G__27449 = cljs.core.chunk_rest.call(null,seq__27438__$1);
var G__27450 = c__18901__auto__;
var G__27451 = cljs.core.count.call(null,c__18901__auto__);
var G__27452 = (0);
seq__27438 = G__27449;
chunk__27439 = G__27450;
count__27440 = G__27451;
i__27441 = G__27452;
continue;
} else {
var vec__27443 = cljs.core.first.call(null,seq__27438__$1);
var k = cljs.core.nth.call(null,vec__27443,(0),null);
var plugin = cljs.core.nth.call(null,vec__27443,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27453 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27438,chunk__27439,count__27440,i__27441,pl_27453,vec__27443,k,plugin,seq__27438__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27453.call(null,msg_hist);
});})(seq__27438,chunk__27439,count__27440,i__27441,pl_27453,vec__27443,k,plugin,seq__27438__$1,temp__4126__auto__))
);
} else {
}

var G__27454 = cljs.core.next.call(null,seq__27438__$1);
var G__27455 = null;
var G__27456 = (0);
var G__27457 = (0);
seq__27438 = G__27454;
chunk__27439 = G__27455;
count__27440 = G__27456;
i__27441 = G__27457;
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
var G__27459 = arguments.length;
switch (G__27459) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27462){
var map__27463 = p__27462;
var map__27463__$1 = ((cljs.core.seq_QMARK_.call(null,map__27463))?cljs.core.apply.call(null,cljs.core.hash_map,map__27463):map__27463);
var opts = map__27463__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27461){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27461));
});

//# sourceMappingURL=client.js.map?rel=1431821092334