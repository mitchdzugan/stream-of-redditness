// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19156__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19156__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28997_29005 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28998_29006 = null;
var count__28999_29007 = (0);
var i__29000_29008 = (0);
while(true){
if((i__29000_29008 < count__28999_29007)){
var k_29009 = cljs.core._nth.call(null,chunk__28998_29006,i__29000_29008);
e.setAttribute(cljs.core.name.call(null,k_29009),cljs.core.get.call(null,attrs,k_29009));

var G__29010 = seq__28997_29005;
var G__29011 = chunk__28998_29006;
var G__29012 = count__28999_29007;
var G__29013 = (i__29000_29008 + (1));
seq__28997_29005 = G__29010;
chunk__28998_29006 = G__29011;
count__28999_29007 = G__29012;
i__29000_29008 = G__29013;
continue;
} else {
var temp__4126__auto___29014 = cljs.core.seq.call(null,seq__28997_29005);
if(temp__4126__auto___29014){
var seq__28997_29015__$1 = temp__4126__auto___29014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28997_29015__$1)){
var c__18901__auto___29016 = cljs.core.chunk_first.call(null,seq__28997_29015__$1);
var G__29017 = cljs.core.chunk_rest.call(null,seq__28997_29015__$1);
var G__29018 = c__18901__auto___29016;
var G__29019 = cljs.core.count.call(null,c__18901__auto___29016);
var G__29020 = (0);
seq__28997_29005 = G__29017;
chunk__28998_29006 = G__29018;
count__28999_29007 = G__29019;
i__29000_29008 = G__29020;
continue;
} else {
var k_29021 = cljs.core.first.call(null,seq__28997_29015__$1);
e.setAttribute(cljs.core.name.call(null,k_29021),cljs.core.get.call(null,attrs,k_29021));

var G__29022 = cljs.core.next.call(null,seq__28997_29015__$1);
var G__29023 = null;
var G__29024 = (0);
var G__29025 = (0);
seq__28997_29005 = G__29022;
chunk__28998_29006 = G__29023;
count__28999_29007 = G__29024;
i__29000_29008 = G__29025;
continue;
}
} else {
}
}
break;
}

var seq__29001_29026 = cljs.core.seq.call(null,children);
var chunk__29002_29027 = null;
var count__29003_29028 = (0);
var i__29004_29029 = (0);
while(true){
if((i__29004_29029 < count__29003_29028)){
var ch_29030 = cljs.core._nth.call(null,chunk__29002_29027,i__29004_29029);
e.appendChild(ch_29030);

var G__29031 = seq__29001_29026;
var G__29032 = chunk__29002_29027;
var G__29033 = count__29003_29028;
var G__29034 = (i__29004_29029 + (1));
seq__29001_29026 = G__29031;
chunk__29002_29027 = G__29032;
count__29003_29028 = G__29033;
i__29004_29029 = G__29034;
continue;
} else {
var temp__4126__auto___29035 = cljs.core.seq.call(null,seq__29001_29026);
if(temp__4126__auto___29035){
var seq__29001_29036__$1 = temp__4126__auto___29035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29001_29036__$1)){
var c__18901__auto___29037 = cljs.core.chunk_first.call(null,seq__29001_29036__$1);
var G__29038 = cljs.core.chunk_rest.call(null,seq__29001_29036__$1);
var G__29039 = c__18901__auto___29037;
var G__29040 = cljs.core.count.call(null,c__18901__auto___29037);
var G__29041 = (0);
seq__29001_29026 = G__29038;
chunk__29002_29027 = G__29039;
count__29003_29028 = G__29040;
i__29004_29029 = G__29041;
continue;
} else {
var ch_29042 = cljs.core.first.call(null,seq__29001_29036__$1);
e.appendChild(ch_29042);

var G__29043 = cljs.core.next.call(null,seq__29001_29036__$1);
var G__29044 = null;
var G__29045 = (0);
var G__29046 = (0);
seq__29001_29026 = G__29043;
chunk__29002_29027 = G__29044;
count__29003_29028 = G__29045;
i__29004_29029 = G__29046;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28994){
var G__28995 = cljs.core.first.call(null,seq28994);
var seq28994__$1 = cljs.core.next.call(null,seq28994);
var G__28996 = cljs.core.first.call(null,seq28994__$1);
var seq28994__$2 = cljs.core.next.call(null,seq28994__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28995,G__28996,seq28994__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29047 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29047.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29047.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29047.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29047);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29048,st_map){
var map__29052 = p__29048;
var map__29052__$1 = ((cljs.core.seq_QMARK_.call(null,map__29052))?cljs.core.apply.call(null,cljs.core.hash_map,map__29052):map__29052);
var container_el = cljs.core.get.call(null,map__29052__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29052,map__29052__$1,container_el){
return (function (p__29053){
var vec__29054 = p__29053;
var k = cljs.core.nth.call(null,vec__29054,(0),null);
var v = cljs.core.nth.call(null,vec__29054,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29052,map__29052__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29055,dom_str){
var map__29057 = p__29055;
var map__29057__$1 = ((cljs.core.seq_QMARK_.call(null,map__29057))?cljs.core.apply.call(null,cljs.core.hash_map,map__29057):map__29057);
var c = map__29057__$1;
var content_area_el = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29058){
var map__29060 = p__29058;
var map__29060__$1 = ((cljs.core.seq_QMARK_.call(null,map__29060))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var content_area_el = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (2))){
var inst_29087 = (state_29102[(7)]);
var inst_29096 = (state_29102[(2)]);
var inst_29097 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29098 = ["auto"];
var inst_29099 = cljs.core.PersistentHashMap.fromArrays(inst_29097,inst_29098);
var inst_29100 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29087,inst_29099);
var state_29102__$1 = (function (){var statearr_29104 = state_29102;
(statearr_29104[(8)] = inst_29096);

return statearr_29104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
if((state_val_29103 === (1))){
var inst_29087 = (state_29102[(7)]);
var inst_29087__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29088 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29089 = ["10px","10px","100%","68px","1.0"];
var inst_29090 = cljs.core.PersistentHashMap.fromArrays(inst_29088,inst_29089);
var inst_29091 = cljs.core.merge.call(null,inst_29090,style);
var inst_29092 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29087__$1,inst_29091);
var inst_29093 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29087__$1,msg);
var inst_29094 = cljs.core.async.timeout.call(null,(300));
var state_29102__$1 = (function (){var statearr_29105 = state_29102;
(statearr_29105[(7)] = inst_29087__$1);

(statearr_29105[(9)] = inst_29093);

(statearr_29105[(10)] = inst_29092);

return statearr_29105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(2),inst_29094);
} else {
return null;
}
}
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto____0 = (function (){
var statearr_29109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29109[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto__);

(statearr_29109[(1)] = (1));

return statearr_29109;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto____1 = (function (state_29102){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e29110){if((e29110 instanceof Object)){
var ex__23218__auto__ = e29110;
var statearr_29111_29113 = state_29102;
(statearr_29111_29113[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29114 = state_29102;
state_29102 = G__29114;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_29112 = f__23230__auto__.call(null);
(statearr_29112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29116 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29116,(0),null);
var ln = cljs.core.nth.call(null,vec__29116,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29119 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29119,(0),null);
var file_line = cljs.core.nth.call(null,vec__29119,(1),null);
var file_column = cljs.core.nth.call(null,vec__29119,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29119,file_name,file_line,file_column){
return (function (p1__29117_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29117_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29119,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18116__auto__ = file_line;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var and__18104__auto__ = cause;
if(cljs.core.truth_(and__18104__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18104__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29121 = figwheel.client.heads_up.ensure_container.call(null);
var map__29121__$1 = ((cljs.core.seq_QMARK_.call(null,map__29121))?cljs.core.apply.call(null,cljs.core.hash_map,map__29121):map__29121);
var content_area_el = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_29168){
var state_val_29169 = (state_29168[(1)]);
if((state_val_29169 === (3))){
var inst_29151 = (state_29168[(7)]);
var inst_29165 = (state_29168[(2)]);
var inst_29166 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29151,"");
var state_29168__$1 = (function (){var statearr_29170 = state_29168;
(statearr_29170[(8)] = inst_29165);

return statearr_29170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29168__$1,inst_29166);
} else {
if((state_val_29169 === (2))){
var inst_29151 = (state_29168[(7)]);
var inst_29158 = (state_29168[(2)]);
var inst_29159 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29160 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29161 = cljs.core.PersistentHashMap.fromArrays(inst_29159,inst_29160);
var inst_29162 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29151,inst_29161);
var inst_29163 = cljs.core.async.timeout.call(null,(200));
var state_29168__$1 = (function (){var statearr_29171 = state_29168;
(statearr_29171[(9)] = inst_29158);

(statearr_29171[(10)] = inst_29162);

return statearr_29171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29168__$1,(3),inst_29163);
} else {
if((state_val_29169 === (1))){
var inst_29151 = (state_29168[(7)]);
var inst_29151__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29152 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29153 = ["0.0"];
var inst_29154 = cljs.core.PersistentHashMap.fromArrays(inst_29152,inst_29153);
var inst_29155 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29151__$1,inst_29154);
var inst_29156 = cljs.core.async.timeout.call(null,(300));
var state_29168__$1 = (function (){var statearr_29172 = state_29168;
(statearr_29172[(11)] = inst_29155);

(statearr_29172[(7)] = inst_29151__$1);

return statearr_29172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29168__$1,(2),inst_29156);
} else {
return null;
}
}
}
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23215__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23215__auto____0 = (function (){
var statearr_29176 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29176[(0)] = figwheel$client$heads_up$clear_$_state_machine__23215__auto__);

(statearr_29176[(1)] = (1));

return statearr_29176;
});
var figwheel$client$heads_up$clear_$_state_machine__23215__auto____1 = (function (state_29168){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_29168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e29177){if((e29177 instanceof Object)){
var ex__23218__auto__ = e29177;
var statearr_29178_29180 = state_29168;
(statearr_29178_29180[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29181 = state_29168;
state_29168 = G__29181;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23215__auto__ = function(state_29168){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23215__auto____1.call(this,state_29168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23215__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23215__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_29179 = f__23230__auto__.call(null);
(statearr_29179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_29179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23229__auto__){
return (function (){
var f__23230__auto__ = (function (){var switch__23214__auto__ = ((function (c__23229__auto__){
return (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (4))){
var inst_29211 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else {
if((state_val_29214 === (3))){
var inst_29208 = (state_29213[(2)]);
var inst_29209 = figwheel.client.heads_up.clear.call(null);
var state_29213__$1 = (function (){var statearr_29215 = state_29213;
(statearr_29215[(7)] = inst_29208);

return statearr_29215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(4),inst_29209);
} else {
if((state_val_29214 === (2))){
var inst_29205 = (state_29213[(2)]);
var inst_29206 = cljs.core.async.timeout.call(null,(400));
var state_29213__$1 = (function (){var statearr_29216 = state_29213;
(statearr_29216[(8)] = inst_29205);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(3),inst_29206);
} else {
if((state_val_29214 === (1))){
var inst_29203 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(2),inst_29203);
} else {
return null;
}
}
}
}
});})(c__23229__auto__))
;
return ((function (switch__23214__auto__,c__23229__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto____0 = (function (){
var statearr_29220 = [null,null,null,null,null,null,null,null,null];
(statearr_29220[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto__);

(statearr_29220[(1)] = (1));

return statearr_29220;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto____1 = (function (state_29213){
while(true){
var ret_value__23216__auto__ = (function (){try{while(true){
var result__23217__auto__ = switch__23214__auto__.call(null,state_29213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23217__auto__;
}
break;
}
}catch (e29221){if((e29221 instanceof Object)){
var ex__23218__auto__ = e29221;
var statearr_29222_29224 = state_29213;
(statearr_29222_29224[(5)] = ex__23218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29225 = state_29213;
state_29213 = G__29225;
continue;
} else {
return ret_value__23216__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23215__auto__;
})()
;})(switch__23214__auto__,c__23229__auto__))
})();
var state__23231__auto__ = (function (){var statearr_29223 = f__23230__auto__.call(null);
(statearr_29223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23229__auto__);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23231__auto__);
});})(c__23229__auto__))
);

return c__23229__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1432432039888