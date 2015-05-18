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
var G__26989__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26990__i = 0, G__26990__a = new Array(arguments.length -  0);
while (G__26990__i < G__26990__a.length) {G__26990__a[G__26990__i] = arguments[G__26990__i + 0]; ++G__26990__i;}
  args = new cljs.core.IndexedSeq(G__26990__a,0);
} 
return G__26989__delegate.call(this,args);};
G__26989.cljs$lang$maxFixedArity = 0;
G__26989.cljs$lang$applyTo = (function (arglist__26991){
var args = cljs.core.seq(arglist__26991);
return G__26989__delegate(args);
});
G__26989.cljs$core$IFn$_invoke$arity$variadic = G__26989__delegate;
return G__26989;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26992){
var map__26994 = p__26992;
var map__26994__$1 = ((cljs.core.seq_QMARK_.call(null,map__26994))?cljs.core.apply.call(null,cljs.core.hash_map,map__26994):map__26994);
var class$ = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__23400__auto___27123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___27123,ch){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___27123,ch){
return (function (state_27097){
var state_val_27098 = (state_27097[(1)]);
if((state_val_27098 === (7))){
var inst_27093 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27099_27124 = state_27097__$1;
(statearr_27099_27124[(2)] = inst_27093);

(statearr_27099_27124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (1))){
var state_27097__$1 = state_27097;
var statearr_27100_27125 = state_27097__$1;
(statearr_27100_27125[(2)] = null);

(statearr_27100_27125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (4))){
var inst_27061 = (state_27097[(7)]);
var inst_27061__$1 = (state_27097[(2)]);
var state_27097__$1 = (function (){var statearr_27101 = state_27097;
(statearr_27101[(7)] = inst_27061__$1);

return statearr_27101;
})();
if(cljs.core.truth_(inst_27061__$1)){
var statearr_27102_27126 = state_27097__$1;
(statearr_27102_27126[(1)] = (5));

} else {
var statearr_27103_27127 = state_27097__$1;
(statearr_27103_27127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (13))){
var state_27097__$1 = state_27097;
var statearr_27104_27128 = state_27097__$1;
(statearr_27104_27128[(2)] = null);

(statearr_27104_27128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (6))){
var state_27097__$1 = state_27097;
var statearr_27105_27129 = state_27097__$1;
(statearr_27105_27129[(2)] = null);

(statearr_27105_27129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (3))){
var inst_27095 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27097__$1,inst_27095);
} else {
if((state_val_27098 === (12))){
var inst_27068 = (state_27097[(8)]);
var inst_27081 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27068);
var inst_27082 = cljs.core.first.call(null,inst_27081);
var inst_27083 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27082);
var inst_27084 = console.warn("Figwheel: Not loading code with warnings - ",inst_27083);
var state_27097__$1 = state_27097;
var statearr_27106_27130 = state_27097__$1;
(statearr_27106_27130[(2)] = inst_27084);

(statearr_27106_27130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (2))){
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27097__$1,(4),ch);
} else {
if((state_val_27098 === (11))){
var inst_27077 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27107_27131 = state_27097__$1;
(statearr_27107_27131[(2)] = inst_27077);

(statearr_27107_27131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (9))){
var inst_27067 = (state_27097[(9)]);
var inst_27079 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27067,opts);
var state_27097__$1 = state_27097;
if(cljs.core.truth_(inst_27079)){
var statearr_27108_27132 = state_27097__$1;
(statearr_27108_27132[(1)] = (12));

} else {
var statearr_27109_27133 = state_27097__$1;
(statearr_27109_27133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (5))){
var inst_27061 = (state_27097[(7)]);
var inst_27067 = (state_27097[(9)]);
var inst_27063 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27064 = (new cljs.core.PersistentArrayMap(null,2,inst_27063,null));
var inst_27065 = (new cljs.core.PersistentHashSet(null,inst_27064,null));
var inst_27066 = figwheel.client.focus_msgs.call(null,inst_27065,inst_27061);
var inst_27067__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27066);
var inst_27068 = cljs.core.first.call(null,inst_27066);
var inst_27069 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27067__$1,opts);
var state_27097__$1 = (function (){var statearr_27110 = state_27097;
(statearr_27110[(8)] = inst_27068);

(statearr_27110[(9)] = inst_27067__$1);

return statearr_27110;
})();
if(cljs.core.truth_(inst_27069)){
var statearr_27111_27134 = state_27097__$1;
(statearr_27111_27134[(1)] = (8));

} else {
var statearr_27112_27135 = state_27097__$1;
(statearr_27112_27135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (14))){
var inst_27087 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27113_27136 = state_27097__$1;
(statearr_27113_27136[(2)] = inst_27087);

(statearr_27113_27136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (10))){
var inst_27089 = (state_27097[(2)]);
var state_27097__$1 = (function (){var statearr_27114 = state_27097;
(statearr_27114[(10)] = inst_27089);

return statearr_27114;
})();
var statearr_27115_27137 = state_27097__$1;
(statearr_27115_27137[(2)] = null);

(statearr_27115_27137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (8))){
var inst_27068 = (state_27097[(8)]);
var inst_27071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27072 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27068);
var inst_27073 = cljs.core.async.timeout.call(null,(1000));
var inst_27074 = [inst_27072,inst_27073];
var inst_27075 = (new cljs.core.PersistentVector(null,2,(5),inst_27071,inst_27074,null));
var state_27097__$1 = state_27097;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27097__$1,(11),inst_27075);
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
});})(c__23400__auto___27123,ch))
;
return ((function (switch__23338__auto__,c__23400__auto___27123,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23339__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23339__auto____0 = (function (){
var statearr_27119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27119[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23339__auto__);

(statearr_27119[(1)] = (1));

return statearr_27119;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23339__auto____1 = (function (state_27097){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_27097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e27120){if((e27120 instanceof Object)){
var ex__23342__auto__ = e27120;
var statearr_27121_27138 = state_27097;
(statearr_27121_27138[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27139 = state_27097;
state_27097 = G__27139;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23339__auto__ = function(state_27097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23339__auto____1.call(this,state_27097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23339__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23339__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___27123,ch))
})();
var state__23402__auto__ = (function (){var statearr_27122 = f__23401__auto__.call(null);
(statearr_27122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___27123);

return statearr_27122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___27123,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27140_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27140_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27147 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27147){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_27145 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27146 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27145,_STAR_print_newline_STAR_27146,base_path_27147){
return (function() { 
var G__27148__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27149__i = 0, G__27149__a = new Array(arguments.length -  0);
while (G__27149__i < G__27149__a.length) {G__27149__a[G__27149__i] = arguments[G__27149__i + 0]; ++G__27149__i;}
  args = new cljs.core.IndexedSeq(G__27149__a,0);
} 
return G__27148__delegate.call(this,args);};
G__27148.cljs$lang$maxFixedArity = 0;
G__27148.cljs$lang$applyTo = (function (arglist__27150){
var args = cljs.core.seq(arglist__27150);
return G__27148__delegate(args);
});
G__27148.cljs$core$IFn$_invoke$arity$variadic = G__27148__delegate;
return G__27148;
})()
;})(_STAR_print_fn_STAR_27145,_STAR_print_newline_STAR_27146,base_path_27147))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27146;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27145;
}}catch (e27144){if((e27144 instanceof Error)){
var e = e27144;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27147], null));
} else {
var e = e27144;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27147))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27151){
var map__27156 = p__27151;
var map__27156__$1 = ((cljs.core.seq_QMARK_.call(null,map__27156))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);
var opts = map__27156__$1;
var build_id = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27156,map__27156__$1,opts,build_id){
return (function (p__27157){
var vec__27158 = p__27157;
var map__27159 = cljs.core.nth.call(null,vec__27158,(0),null);
var map__27159__$1 = ((cljs.core.seq_QMARK_.call(null,map__27159))?cljs.core.apply.call(null,cljs.core.hash_map,map__27159):map__27159);
var msg = map__27159__$1;
var msg_name = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27158,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__27158,map__27159,map__27159__$1,msg,msg_name,_,map__27156,map__27156__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27158,map__27159,map__27159__$1,msg,msg_name,_,map__27156,map__27156__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27156,map__27156__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27163){
var vec__27164 = p__27163;
var map__27165 = cljs.core.nth.call(null,vec__27164,(0),null);
var map__27165__$1 = ((cljs.core.seq_QMARK_.call(null,map__27165))?cljs.core.apply.call(null,cljs.core.hash_map,map__27165):map__27165);
var msg = map__27165__$1;
var msg_name = cljs.core.get.call(null,map__27165__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27164,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27166){
var map__27174 = p__27166;
var map__27174__$1 = ((cljs.core.seq_QMARK_.call(null,map__27174))?cljs.core.apply.call(null,cljs.core.hash_map,map__27174):map__27174);
var on_compile_fail = cljs.core.get.call(null,map__27174__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__27174__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__27174,map__27174__$1,on_compile_fail,on_compile_warning){
return (function (p__27175){
var vec__27176 = p__27175;
var map__27177 = cljs.core.nth.call(null,vec__27176,(0),null);
var map__27177__$1 = ((cljs.core.seq_QMARK_.call(null,map__27177))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177):map__27177);
var msg = map__27177__$1;
var msg_name = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27176,(1));
var pred__27178 = cljs.core._EQ_;
var expr__27179 = msg_name;
if(cljs.core.truth_(pred__27178.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27179))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27178.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27179))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27174,map__27174__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__,msg_hist,msg_names,msg){
return (function (state_27380){
var state_val_27381 = (state_27380[(1)]);
if((state_val_27381 === (7))){
var inst_27314 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27382_27423 = state_27380__$1;
(statearr_27382_27423[(2)] = inst_27314);

(statearr_27382_27423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (20))){
var inst_27342 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27342)){
var statearr_27383_27424 = state_27380__$1;
(statearr_27383_27424[(1)] = (22));

} else {
var statearr_27384_27425 = state_27380__$1;
(statearr_27384_27425[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (27))){
var inst_27354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27355 = figwheel.client.heads_up.display_warning.call(null,inst_27354);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(30),inst_27355);
} else {
if((state_val_27381 === (1))){
var inst_27302 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27302)){
var statearr_27385_27426 = state_27380__$1;
(statearr_27385_27426[(1)] = (2));

} else {
var statearr_27386_27427 = state_27380__$1;
(statearr_27386_27427[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (24))){
var inst_27370 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27387_27428 = state_27380__$1;
(statearr_27387_27428[(2)] = inst_27370);

(statearr_27387_27428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (4))){
var inst_27378 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27380__$1,inst_27378);
} else {
if((state_val_27381 === (15))){
var inst_27330 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27331 = figwheel.client.format_messages.call(null,inst_27330);
var inst_27332 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27333 = figwheel.client.heads_up.display_error.call(null,inst_27331,inst_27332);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(18),inst_27333);
} else {
if((state_val_27381 === (21))){
var inst_27372 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27388_27429 = state_27380__$1;
(statearr_27388_27429[(2)] = inst_27372);

(statearr_27388_27429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (31))){
var inst_27361 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(34),inst_27361);
} else {
if((state_val_27381 === (32))){
var state_27380__$1 = state_27380;
var statearr_27389_27430 = state_27380__$1;
(statearr_27389_27430[(2)] = null);

(statearr_27389_27430[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (33))){
var inst_27366 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27390_27431 = state_27380__$1;
(statearr_27390_27431[(2)] = inst_27366);

(statearr_27390_27431[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (13))){
var inst_27320 = (state_27380[(2)]);
var inst_27321 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27322 = figwheel.client.format_messages.call(null,inst_27321);
var inst_27323 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27324 = figwheel.client.heads_up.display_error.call(null,inst_27322,inst_27323);
var state_27380__$1 = (function (){var statearr_27391 = state_27380;
(statearr_27391[(7)] = inst_27320);

return statearr_27391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(14),inst_27324);
} else {
if((state_val_27381 === (22))){
var inst_27344 = figwheel.client.heads_up.clear.call(null);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(25),inst_27344);
} else {
if((state_val_27381 === (29))){
var inst_27368 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27392_27432 = state_27380__$1;
(statearr_27392_27432[(2)] = inst_27368);

(statearr_27392_27432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (6))){
var inst_27310 = figwheel.client.heads_up.clear.call(null);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(9),inst_27310);
} else {
if((state_val_27381 === (28))){
var inst_27359 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27359)){
var statearr_27393_27433 = state_27380__$1;
(statearr_27393_27433[(1)] = (31));

} else {
var statearr_27394_27434 = state_27380__$1;
(statearr_27394_27434[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (25))){
var inst_27346 = (state_27380[(2)]);
var inst_27347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27348 = figwheel.client.heads_up.display_warning.call(null,inst_27347);
var state_27380__$1 = (function (){var statearr_27395 = state_27380;
(statearr_27395[(8)] = inst_27346);

return statearr_27395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(26),inst_27348);
} else {
if((state_val_27381 === (34))){
var inst_27363 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27396_27435 = state_27380__$1;
(statearr_27396_27435[(2)] = inst_27363);

(statearr_27396_27435[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (17))){
var inst_27374 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27397_27436 = state_27380__$1;
(statearr_27397_27436[(2)] = inst_27374);

(statearr_27397_27436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (3))){
var inst_27316 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27316)){
var statearr_27398_27437 = state_27380__$1;
(statearr_27398_27437[(1)] = (10));

} else {
var statearr_27399_27438 = state_27380__$1;
(statearr_27399_27438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (12))){
var inst_27376 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27400_27439 = state_27380__$1;
(statearr_27400_27439[(2)] = inst_27376);

(statearr_27400_27439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (2))){
var inst_27304 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27304)){
var statearr_27401_27440 = state_27380__$1;
(statearr_27401_27440[(1)] = (5));

} else {
var statearr_27402_27441 = state_27380__$1;
(statearr_27402_27441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (23))){
var inst_27352 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27352)){
var statearr_27403_27442 = state_27380__$1;
(statearr_27403_27442[(1)] = (27));

} else {
var statearr_27404_27443 = state_27380__$1;
(statearr_27404_27443[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (19))){
var inst_27339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27340 = figwheel.client.heads_up.append_message.call(null,inst_27339);
var state_27380__$1 = state_27380;
var statearr_27405_27444 = state_27380__$1;
(statearr_27405_27444[(2)] = inst_27340);

(statearr_27405_27444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (11))){
var inst_27328 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27328)){
var statearr_27406_27445 = state_27380__$1;
(statearr_27406_27445[(1)] = (15));

} else {
var statearr_27407_27446 = state_27380__$1;
(statearr_27407_27446[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (9))){
var inst_27312 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27408_27447 = state_27380__$1;
(statearr_27408_27447[(2)] = inst_27312);

(statearr_27408_27447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (5))){
var inst_27306 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(8),inst_27306);
} else {
if((state_val_27381 === (14))){
var inst_27326 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27409_27448 = state_27380__$1;
(statearr_27409_27448[(2)] = inst_27326);

(statearr_27409_27448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (26))){
var inst_27350 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27410_27449 = state_27380__$1;
(statearr_27410_27449[(2)] = inst_27350);

(statearr_27410_27449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (16))){
var inst_27337 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27337)){
var statearr_27411_27450 = state_27380__$1;
(statearr_27411_27450[(1)] = (19));

} else {
var statearr_27412_27451 = state_27380__$1;
(statearr_27412_27451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (30))){
var inst_27357 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27413_27452 = state_27380__$1;
(statearr_27413_27452[(2)] = inst_27357);

(statearr_27413_27452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (10))){
var inst_27318 = figwheel.client.heads_up.clear.call(null);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(13),inst_27318);
} else {
if((state_val_27381 === (18))){
var inst_27335 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27414_27453 = state_27380__$1;
(statearr_27414_27453[(2)] = inst_27335);

(statearr_27414_27453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (8))){
var inst_27308 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27415_27454 = state_27380__$1;
(statearr_27415_27454[(2)] = inst_27308);

(statearr_27415_27454[(1)] = (7));


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
});})(c__23400__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23338__auto__,c__23400__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto____0 = (function (){
var statearr_27419 = [null,null,null,null,null,null,null,null,null];
(statearr_27419[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto__);

(statearr_27419[(1)] = (1));

return statearr_27419;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto____1 = (function (state_27380){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_27380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e27420){if((e27420 instanceof Object)){
var ex__23342__auto__ = e27420;
var statearr_27421_27455 = state_27380;
(statearr_27421_27455[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27456 = state_27380;
state_27380 = G__27456;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto__ = function(state_27380){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto____1.call(this,state_27380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__,msg_hist,msg_names,msg))
})();
var state__23402__auto__ = (function (){var statearr_27422 = f__23401__auto__.call(null);
(statearr_27422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_27422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__,msg_hist,msg_names,msg))
);

return c__23400__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23400__auto___27519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto___27519,ch){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto___27519,ch){
return (function (state_27502){
var state_val_27503 = (state_27502[(1)]);
if((state_val_27503 === (8))){
var inst_27494 = (state_27502[(2)]);
var state_27502__$1 = (function (){var statearr_27504 = state_27502;
(statearr_27504[(7)] = inst_27494);

return statearr_27504;
})();
var statearr_27505_27520 = state_27502__$1;
(statearr_27505_27520[(2)] = null);

(statearr_27505_27520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27503 === (7))){
var inst_27498 = (state_27502[(2)]);
var state_27502__$1 = state_27502;
var statearr_27506_27521 = state_27502__$1;
(statearr_27506_27521[(2)] = inst_27498);

(statearr_27506_27521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27503 === (6))){
var state_27502__$1 = state_27502;
var statearr_27507_27522 = state_27502__$1;
(statearr_27507_27522[(2)] = null);

(statearr_27507_27522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27503 === (5))){
var inst_27490 = (state_27502[(8)]);
var inst_27492 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27490);
var state_27502__$1 = state_27502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27502__$1,(8),inst_27492);
} else {
if((state_val_27503 === (4))){
var inst_27490 = (state_27502[(8)]);
var inst_27490__$1 = (state_27502[(2)]);
var state_27502__$1 = (function (){var statearr_27508 = state_27502;
(statearr_27508[(8)] = inst_27490__$1);

return statearr_27508;
})();
if(cljs.core.truth_(inst_27490__$1)){
var statearr_27509_27523 = state_27502__$1;
(statearr_27509_27523[(1)] = (5));

} else {
var statearr_27510_27524 = state_27502__$1;
(statearr_27510_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27503 === (3))){
var inst_27500 = (state_27502[(2)]);
var state_27502__$1 = state_27502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27502__$1,inst_27500);
} else {
if((state_val_27503 === (2))){
var state_27502__$1 = state_27502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27502__$1,(4),ch);
} else {
if((state_val_27503 === (1))){
var state_27502__$1 = state_27502;
var statearr_27511_27525 = state_27502__$1;
(statearr_27511_27525[(2)] = null);

(statearr_27511_27525[(1)] = (2));


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
});})(c__23400__auto___27519,ch))
;
return ((function (switch__23338__auto__,c__23400__auto___27519,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23339__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23339__auto____0 = (function (){
var statearr_27515 = [null,null,null,null,null,null,null,null,null];
(statearr_27515[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23339__auto__);

(statearr_27515[(1)] = (1));

return statearr_27515;
});
var figwheel$client$heads_up_plugin_$_state_machine__23339__auto____1 = (function (state_27502){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_27502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e27516){if((e27516 instanceof Object)){
var ex__23342__auto__ = e27516;
var statearr_27517_27526 = state_27502;
(statearr_27517_27526[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27527 = state_27502;
state_27502 = G__27527;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23339__auto__ = function(state_27502){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23339__auto____1.call(this,state_27502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23339__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23339__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto___27519,ch))
})();
var state__23402__auto__ = (function (){var statearr_27518 = f__23401__auto__.call(null);
(statearr_27518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto___27519);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto___27519,ch))
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
var c__23400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23400__auto__){
return (function (){
var f__23401__auto__ = (function (){var switch__23338__auto__ = ((function (c__23400__auto__){
return (function (state_27548){
var state_val_27549 = (state_27548[(1)]);
if((state_val_27549 === (2))){
var inst_27545 = (state_27548[(2)]);
var inst_27546 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27548__$1 = (function (){var statearr_27550 = state_27548;
(statearr_27550[(7)] = inst_27545);

return statearr_27550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27548__$1,inst_27546);
} else {
if((state_val_27549 === (1))){
var inst_27543 = cljs.core.async.timeout.call(null,(3000));
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(2),inst_27543);
} else {
return null;
}
}
});})(c__23400__auto__))
;
return ((function (switch__23338__auto__,c__23400__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23339__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23339__auto____0 = (function (){
var statearr_27554 = [null,null,null,null,null,null,null,null];
(statearr_27554[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23339__auto__);

(statearr_27554[(1)] = (1));

return statearr_27554;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23339__auto____1 = (function (state_27548){
while(true){
var ret_value__23340__auto__ = (function (){try{while(true){
var result__23341__auto__ = switch__23338__auto__.call(null,state_27548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23341__auto__;
}
break;
}
}catch (e27555){if((e27555 instanceof Object)){
var ex__23342__auto__ = e27555;
var statearr_27556_27558 = state_27548;
(statearr_27556_27558[(5)] = ex__23342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27559 = state_27548;
state_27548 = G__27559;
continue;
} else {
return ret_value__23340__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23339__auto__ = function(state_27548){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23339__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23339__auto____1.call(this,state_27548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23339__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23339__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23339__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23339__auto__;
})()
;})(switch__23338__auto__,c__23400__auto__))
})();
var state__23402__auto__ = (function (){var statearr_27557 = f__23401__auto__.call(null);
(statearr_27557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23400__auto__);

return statearr_27557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23402__auto__);
});})(c__23400__auto__))
);

return c__23400__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27563 = {"detail":url};
return obj27563;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27564){
var map__27570 = p__27564;
var map__27570__$1 = ((cljs.core.seq_QMARK_.call(null,map__27570))?cljs.core.apply.call(null,cljs.core.hash_map,map__27570):map__27570);
var ed = map__27570__$1;
var cause = cljs.core.get.call(null,map__27570__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__27570__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__27570__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27571_27575 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27572_27576 = null;
var count__27573_27577 = (0);
var i__27574_27578 = (0);
while(true){
if((i__27574_27578 < count__27573_27577)){
var msg_27579 = cljs.core._nth.call(null,chunk__27572_27576,i__27574_27578);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27579);

var G__27580 = seq__27571_27575;
var G__27581 = chunk__27572_27576;
var G__27582 = count__27573_27577;
var G__27583 = (i__27574_27578 + (1));
seq__27571_27575 = G__27580;
chunk__27572_27576 = G__27581;
count__27573_27577 = G__27582;
i__27574_27578 = G__27583;
continue;
} else {
var temp__4126__auto___27584 = cljs.core.seq.call(null,seq__27571_27575);
if(temp__4126__auto___27584){
var seq__27571_27585__$1 = temp__4126__auto___27584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27571_27585__$1)){
var c__18901__auto___27586 = cljs.core.chunk_first.call(null,seq__27571_27585__$1);
var G__27587 = cljs.core.chunk_rest.call(null,seq__27571_27585__$1);
var G__27588 = c__18901__auto___27586;
var G__27589 = cljs.core.count.call(null,c__18901__auto___27586);
var G__27590 = (0);
seq__27571_27575 = G__27587;
chunk__27572_27576 = G__27588;
count__27573_27577 = G__27589;
i__27574_27578 = G__27590;
continue;
} else {
var msg_27591 = cljs.core.first.call(null,seq__27571_27585__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27591);

var G__27592 = cljs.core.next.call(null,seq__27571_27585__$1);
var G__27593 = null;
var G__27594 = (0);
var G__27595 = (0);
seq__27571_27575 = G__27592;
chunk__27572_27576 = G__27593;
count__27573_27577 = G__27594;
i__27574_27578 = G__27595;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27596){
var map__27598 = p__27596;
var map__27598__$1 = ((cljs.core.seq_QMARK_.call(null,map__27598))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);
var w = map__27598__$1;
var message = cljs.core.get.call(null,map__27598__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27605 = cljs.core.seq.call(null,plugins);
var chunk__27606 = null;
var count__27607 = (0);
var i__27608 = (0);
while(true){
if((i__27608 < count__27607)){
var vec__27609 = cljs.core._nth.call(null,chunk__27606,i__27608);
var k = cljs.core.nth.call(null,vec__27609,(0),null);
var plugin = cljs.core.nth.call(null,vec__27609,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27611 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27605,chunk__27606,count__27607,i__27608,pl_27611,vec__27609,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27611.call(null,msg_hist);
});})(seq__27605,chunk__27606,count__27607,i__27608,pl_27611,vec__27609,k,plugin))
);
} else {
}

var G__27612 = seq__27605;
var G__27613 = chunk__27606;
var G__27614 = count__27607;
var G__27615 = (i__27608 + (1));
seq__27605 = G__27612;
chunk__27606 = G__27613;
count__27607 = G__27614;
i__27608 = G__27615;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27605);
if(temp__4126__auto__){
var seq__27605__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27605__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__27605__$1);
var G__27616 = cljs.core.chunk_rest.call(null,seq__27605__$1);
var G__27617 = c__18901__auto__;
var G__27618 = cljs.core.count.call(null,c__18901__auto__);
var G__27619 = (0);
seq__27605 = G__27616;
chunk__27606 = G__27617;
count__27607 = G__27618;
i__27608 = G__27619;
continue;
} else {
var vec__27610 = cljs.core.first.call(null,seq__27605__$1);
var k = cljs.core.nth.call(null,vec__27610,(0),null);
var plugin = cljs.core.nth.call(null,vec__27610,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27620 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27605,chunk__27606,count__27607,i__27608,pl_27620,vec__27610,k,plugin,seq__27605__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27620.call(null,msg_hist);
});})(seq__27605,chunk__27606,count__27607,i__27608,pl_27620,vec__27610,k,plugin,seq__27605__$1,temp__4126__auto__))
);
} else {
}

var G__27621 = cljs.core.next.call(null,seq__27605__$1);
var G__27622 = null;
var G__27623 = (0);
var G__27624 = (0);
seq__27605 = G__27621;
chunk__27606 = G__27622;
count__27607 = G__27623;
i__27608 = G__27624;
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
var G__27626 = arguments.length;
switch (G__27626) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27629){
var map__27630 = p__27629;
var map__27630__$1 = ((cljs.core.seq_QMARK_.call(null,map__27630))?cljs.core.apply.call(null,cljs.core.hash_map,map__27630):map__27630);
var opts = map__27630__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27628){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27628));
});

//# sourceMappingURL=client.js.map?rel=1431907796608