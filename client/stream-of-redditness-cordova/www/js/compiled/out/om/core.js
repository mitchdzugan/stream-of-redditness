// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljsjs.react');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj21618 = {};
return obj21618;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.display_name[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.display_name["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj21620 = {};
return obj21620;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.init_state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.init_state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj21622 = {};
return obj21622;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.should_update[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.should_update["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj21624 = {};
return obj21624;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.will_mount[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.will_mount["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj21626 = {};
return obj21626;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.did_mount[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.did_mount["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj21628 = {};
return obj21628;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.will_unmount[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.will_unmount["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj21630 = {};
return obj21630;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.will_update[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.will_update["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj21632 = {};
return obj21632;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.did_update[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.did_update["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj21634 = {};
return obj21634;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.will_receive_props[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.will_receive_props["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj21636 = {};
return obj21636;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.render[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.render["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj21638 = {};
return obj21638;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.render_props[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.render_props["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj21640 = {};
return obj21640;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core.render_state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core.render_state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj21642 = {};
return obj21642;
})();


om.core.IOmSwap = (function (){var obj21644 = {};
return obj21644;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj21646 = {};
return obj21646;
})();

om.core._get_state = (function om$core$_get_state(){
var G__21648 = arguments.length;
switch (G__21648) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj21651 = {};
return obj21651;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__21653 = arguments.length;
switch (G__21653) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_render_state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_render_state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_render_state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_render_state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj21656 = {};
return obj21656;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__21658 = arguments.length;
switch (G__21658) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj21661 = {};
return obj21661;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_queue[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_queue["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj21663 = {};
return obj21663;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__18104__auto__ = x;
if(and__18104__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__18104__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__18752__auto__ = (((x == null))?null:x);
return (function (){var or__18116__auto__ = (om.core._value[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._value["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj21665 = {};
return obj21665;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__18104__auto__ = cursor;
if(and__18104__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__18104__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__18752__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18116__auto__ = (om.core._path[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._path["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__18104__auto__ = cursor;
if(and__18104__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__18104__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__18752__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18116__auto__ = (om.core._state[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._state["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj21667 = {};
return obj21667;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__21669 = arguments.length;
switch (G__21669) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__18104__auto__ = value;
if(and__18104__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__18104__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__18752__auto__ = (((value == null))?null:value);
return (function (){var or__18116__auto__ = (om.core._to_cursor[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._to_cursor["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__18104__auto__ = value;
if(and__18104__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__18104__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__18752__auto__ = (((value == null))?null:value);
return (function (){var or__18116__auto__ = (om.core._to_cursor[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._to_cursor["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj21672 = {};
return obj21672;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__18104__auto__ = cursor;
if(and__18104__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__18104__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__18752__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18116__auto__ = (om.core._derive[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._derive["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj21674 = {};
return obj21674;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__18104__auto__ = cursor;
if(and__18104__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__18752__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18116__auto__ = (om.core._transact_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj21676 = {};
return obj21676;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__18104__auto__ = x;
if(and__18104__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__18752__auto__ = (((x == null))?null:x);
return (function (){var or__18116__auto__ = (om.core._listen_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__18104__auto__ = x;
if(and__18104__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__18752__auto__ = (((x == null))?null:x);
return (function (){var or__18116__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__18104__auto__ = x;
if(and__18104__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__18752__auto__ = (((x == null))?null:x);
return (function (){var or__18116__auto__ = (om.core._notify_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj21678 = {};
return obj21678;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_property[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_property["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj21680 = {};
return obj21680;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__18104__auto__ = cursor;
if(and__18104__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__18104__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__18752__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18116__auto__ = (om.core._root_key[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._root_key["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj21682 = {};
return obj21682;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._adapt[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._adapt["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj21684 = {};
return obj21684;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (om.core._get_deps[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (om.core._get_deps["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__21686 = state;
if(G__21686){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21686.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__21686.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__21686);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__21686);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__21688 = x;
if(G__21688){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21688.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21688.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21688);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21688);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__21690 = arguments.length;
switch (G__21690) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__21691 = (x.props["__om_cursor"]);
var G__21691__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__21691,korks__$1):G__21691);
return G__21691__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__21694 = arguments.length;
switch (G__21694) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__21697 = arguments.length;
switch (G__21697) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__21700 = state;
(G__21700["__om_prev_state"] = (state["__om_state"]));

(G__21700["__om_state"] = pending_state);

(G__21700["__om_pending_state"] = null);

return G__21700;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__21702 = arguments.length;
switch (G__21702) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__18116__auto__ = props;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__18116__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21705 = c;
if(G__21705){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21705.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21705.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21705);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21705);
}
})()){
var state_21726 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__18116__auto__ = (state_21726["__om_prev_state"]);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return (state_21726["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21706 = c;
if(G__21706){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21706.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21706.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21706);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21706);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__21707 = cljs.core.seq.call(null,refs);
var chunk__21708 = null;
var count__21709 = (0);
var i__21710 = (0);
while(true){
if((i__21710 < count__21709)){
var ref = cljs.core._nth.call(null,chunk__21708,i__21710);
om.core.unobserve.call(null,this$,ref);

var G__21727 = seq__21707;
var G__21728 = chunk__21708;
var G__21729 = count__21709;
var G__21730 = (i__21710 + (1));
seq__21707 = G__21727;
chunk__21708 = G__21728;
count__21709 = G__21729;
i__21710 = G__21730;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__21707);
if(temp__4126__auto____$1){
var seq__21707__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21707__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__21707__$1);
var G__21731 = cljs.core.chunk_rest.call(null,seq__21707__$1);
var G__21732 = c__18901__auto__;
var G__21733 = cljs.core.count.call(null,c__18901__auto__);
var G__21734 = (0);
seq__21707 = G__21731;
chunk__21708 = G__21732;
count__21709 = G__21733;
i__21710 = G__21734;
continue;
} else {
var ref = cljs.core.first.call(null,seq__21707__$1);
om.core.unobserve.call(null,this$,ref);

var G__21735 = cljs.core.next.call(null,seq__21707__$1);
var G__21736 = null;
var G__21737 = (0);
var G__21738 = (0);
seq__21707 = G__21735;
chunk__21708 = G__21736;
count__21709 = G__21737;
i__21710 = G__21738;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21711 = c;
if(G__21711){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21711.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__21711.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__21711);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__21711);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__21712 = c;
if(G__21712){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21712.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__21712.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__21712);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__21712);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__18104__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__18104__auto__)){
var and__18104__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__18104__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__18104__auto____$1;
}
} else {
return and__18104__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__18104__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__18104__auto__){
return cljs.core.some.call(null,((function (and__18104__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__21704_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__21704_SHARP_);
});})(and__18104__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__18104__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_21713 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_21714 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_21715 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_21716 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_21717 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__21718 = c;
if(G__21718){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21718.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21718.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21718);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21718);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__21719 = c;
if(G__21719){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21719.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21719.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21719);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21719);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__21720 = c;
if(G__21720){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21720.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21720.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21720);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21720);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21717;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21716;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21715;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21714;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_21713;
}}),(function (next_props,next_state){
var this$ = this;
var c_21739 = om.core.children.call(null,this$);
if((function (){var G__21721 = c_21739;
if(G__21721){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21721.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21721.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21721);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21721);
}
})()){
var state_21740 = this$.state;
om.core.will_update.call(null,c_21739,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__18116__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__21722 = c;
if(G__21722){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21722.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21722.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21722);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21722);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__18116__auto__ = id;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21723 = c;
if(G__21723){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21723.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__21723.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__21723);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__21723);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21724 = c;
if(G__21724){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21724.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__21724.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__21724);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__21724);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_21741 = om.core.children.call(null,this$);
if((function (){var G__21725 = c_21741;
if(G__21725){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21725.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21725.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21725);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21725);
}
})()){
om.core.will_mount.call(null,c_21741);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x21743 = obj;
x21743.om$core$IGetState$ = true;

x21743.om$core$IGetState$_get_state$arity$1 = ((function (x21743){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__18116__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return (state["__om_state"]);
}
});})(x21743))
;

x21743.om$core$IGetState$_get_state$arity$2 = ((function (x21743){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x21743))
;

x21743.om$core$IGetRenderState$ = true;

x21743.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21743){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x21743))
;

x21743.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21743){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x21743))
;

x21743.om$core$ISetState$ = true;

x21743.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21743){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__18104__auto__ = !((app_state == null));
if(and__18104__auto__){
return render;
} else {
return and__18104__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x21743))
;

x21743.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21743){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__18104__auto__ = !((app_state == null));
if(and__18104__auto__){
return render;
} else {
return and__18104__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x21743))
;

return x21743;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__18116__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__18116__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__21744 = c;
if(G__21744){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21744.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21744.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21744);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21744);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_21753 = om.core.children.call(null,this$);
if((function (){var G__21745 = c_21753;
if(G__21745){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21745.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21745.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21745);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21745);
}
})()){
om.core.will_mount.call(null,c_21753);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21746 = c;
if(G__21746){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21746.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21746.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21746);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21746);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__21747 = cljs.core.seq.call(null,refs);
var chunk__21748 = null;
var count__21749 = (0);
var i__21750 = (0);
while(true){
if((i__21750 < count__21749)){
var ref = cljs.core._nth.call(null,chunk__21748,i__21750);
om.core.unobserve.call(null,this$,ref);

var G__21754 = seq__21747;
var G__21755 = chunk__21748;
var G__21756 = count__21749;
var G__21757 = (i__21750 + (1));
seq__21747 = G__21754;
chunk__21748 = G__21755;
count__21749 = G__21756;
i__21750 = G__21757;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__21747);
if(temp__4126__auto____$1){
var seq__21747__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21747__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__21747__$1);
var G__21758 = cljs.core.chunk_rest.call(null,seq__21747__$1);
var G__21759 = c__18901__auto__;
var G__21760 = cljs.core.count.call(null,c__18901__auto__);
var G__21761 = (0);
seq__21747 = G__21758;
chunk__21748 = G__21759;
count__21749 = G__21760;
i__21750 = G__21761;
continue;
} else {
var ref = cljs.core.first.call(null,seq__21747__$1);
om.core.unobserve.call(null,this$,ref);

var G__21762 = cljs.core.next.call(null,seq__21747__$1);
var G__21763 = null;
var G__21764 = (0);
var G__21765 = (0);
seq__21747 = G__21762;
chunk__21748 = G__21763;
count__21749 = G__21764;
i__21750 = G__21765;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_21766 = this$.props;
var c_21767 = om.core.children.call(null,this$);
if((function (){var G__21751 = c_21767;
if(G__21751){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21751.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21751.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21751);
}
})()){
var state_21768 = this$.state;
om.core.will_update.call(null,c_21767,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__21752 = c;
if(G__21752){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21752.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21752.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21752);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21752);
}
})()){
var state_21769 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__18116__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x21771 = cljs.core.clj__GT_js.call(null,methods$);
x21771.om$core$IGetState$ = true;

x21771.om$core$IGetState$_get_state$arity$1 = ((function (x21771){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__18116__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x21771))
;

x21771.om$core$IGetState$_get_state$arity$2 = ((function (x21771){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x21771))
;

x21771.om$core$IGetRenderState$ = true;

x21771.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21771){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x21771))
;

x21771.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21771){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x21771))
;

x21771.om$core$ISetState$ = true;

x21771.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21771){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__18104__auto__ = !((gstate == null));
if(and__18104__auto__){
return render;
} else {
return and__18104__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x21771))
;

x21771.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21771){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x21771))
;

return x21771;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__21773 = x;
if(G__21773){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21773.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21773.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21773);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21773);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__21775){
var vec__21776 = p__21775;
var k = cljs.core.nth.call(null,vec__21776,(0),null);
var v = cljs.core.nth.call(null,vec__21776,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__21777 = null;
var G__21777__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21777__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21777 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21777__2.call(this,self__,k);
case 3:
return G__21777__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21777.cljs$core$IFn$_invoke$arity$2 = G__21777__2;
G__21777.cljs$core$IFn$_invoke$arity$3 = G__21777__3;
return G__21777;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args21774){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21774)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__21779 = null;
var G__21779__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21779__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21779 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21779__2.call(this,self__,k);
case 3:
return G__21779__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21779.cljs$core$IFn$_invoke$arity$2 = G__21779__2;
G__21779.cljs$core$IFn$_invoke$arity$3 = G__21779__3;
return G__21779;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args21778){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21778)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x21781 = cljs.core.clone.call(null,val);
x21781.cljs$core$IEquiv$ = true;

x21781.cljs$core$IEquiv$_equiv$arity$2 = ((function (x21781){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x21781))
;

x21781.om$core$ITransact$ = true;

x21781.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21781){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x21781))
;

x21781.om$core$ICursor$ = true;

x21781.om$core$ICursor$_path$arity$1 = ((function (x21781){
return (function (_){
var ___$1 = this;
return path;
});})(x21781))
;

x21781.om$core$ICursor$_state$arity$1 = ((function (x21781){
return (function (_){
var ___$1 = this;
return state;
});})(x21781))
;

x21781.cljs$core$IDeref$ = true;

x21781.cljs$core$IDeref$_deref$arity$1 = ((function (x21781){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x21781))
;

return x21781;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__21783 = arguments.length;
switch (G__21783) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if((function (){var G__21784 = val;
if(G__21784){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21784.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__21784.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__21784);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__21784);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__21785 = val;
if(G__21785){
var bit__18790__auto__ = (G__21785.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__18790__auto__) || (G__21785.cljs$core$ICloneable$)){
return true;
} else {
if((!G__21785.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__21785);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__21785);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__21788 = atom;
if(G__21788){
var bit__18790__auto__ = (G__21788.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18790__auto__) || (G__21788.cljs$core$IDeref$)){
return true;
} else {
if((!G__21788.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__21788);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__21788);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x21790 = cljs.core.clone.call(null,x);
x21790.om$core$ITransact$ = true;

x21790.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21790){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x21790))
;

x21790.om$core$ICursorDerive$ = true;

x21790.om$core$ICursorDerive$_derive$arity$4 = ((function (x21790){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21790))
;

x21790.om$core$IAdapt$ = true;

x21790.om$core$IAdapt$_adapt$arity$2 = ((function (x21790){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x21790))
;

x21790.cljs$core$ICloneable$ = true;

x21790.cljs$core$ICloneable$_clone$arity$1 = ((function (x21790){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x21790))
;

return x21790;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__21797 = cursor;
if(G__21797){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21797.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__21797.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__21797);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__21797);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x21798 = cljs.core.clone.call(null,cursor);
x21798.om$core$ITransact$ = true;

x21798.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21798,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x21798,path,storage))
;

x21798.om$core$IOmRef$ = true;

x21798.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x21798,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x21798,path,storage))
;

x21798.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x21798,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x21798,path,storage))
;

x21798.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x21798,path,storage){
return (function (_){
var ___$1 = this;
var seq__21799 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__21800 = null;
var count__21801 = (0);
var i__21802 = (0);
while(true){
if((i__21802 < count__21801)){
var c = cljs.core._nth.call(null,chunk__21800,i__21802);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__21803 = seq__21799;
var G__21804 = chunk__21800;
var G__21805 = count__21801;
var G__21806 = (i__21802 + (1));
seq__21799 = G__21803;
chunk__21800 = G__21804;
count__21801 = G__21805;
i__21802 = G__21806;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21799);
if(temp__4126__auto__){
var seq__21799__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21799__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__21799__$1);
var G__21807 = cljs.core.chunk_rest.call(null,seq__21799__$1);
var G__21808 = c__18901__auto__;
var G__21809 = cljs.core.count.call(null,c__18901__auto__);
var G__21810 = (0);
seq__21799 = G__21807;
chunk__21800 = G__21808;
count__21801 = G__21809;
i__21802 = G__21810;
continue;
} else {
var c = cljs.core.first.call(null,seq__21799__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__21811 = cljs.core.next.call(null,seq__21799__$1);
var G__21812 = null;
var G__21813 = (0);
var G__21814 = (0);
seq__21799 = G__21811;
chunk__21800 = G__21812;
count__21801 = G__21813;
i__21802 = G__21814;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21798,path,storage))
;

x21798.om$core$IOmRef$_get_deps$arity$1 = ((function (x21798,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x21798,path,storage))
;

x21798.om$core$ICursorDerive$ = true;

x21798.om$core$ICursorDerive$_derive$arity$4 = ((function (x21798,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21798,path,storage))
;

return x21798;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__18116__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__18116__auto__ = state.om$render$T;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__21816 = arguments.length;
switch (G__21816) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__21817_21822 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__21818_21823 = null;
var count__21819_21824 = (0);
var i__21820_21825 = (0);
while(true){
if((i__21820_21825 < count__21819_21824)){
var f_21826 = cljs.core._nth.call(null,chunk__21818_21823,i__21820_21825);
f_21826.call(null);

var G__21827 = seq__21817_21822;
var G__21828 = chunk__21818_21823;
var G__21829 = count__21819_21824;
var G__21830 = (i__21820_21825 + (1));
seq__21817_21822 = G__21827;
chunk__21818_21823 = G__21828;
count__21819_21824 = G__21829;
i__21820_21825 = G__21830;
continue;
} else {
var temp__4126__auto___21831 = cljs.core.seq.call(null,seq__21817_21822);
if(temp__4126__auto___21831){
var seq__21817_21832__$1 = temp__4126__auto___21831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21817_21832__$1)){
var c__18901__auto___21833 = cljs.core.chunk_first.call(null,seq__21817_21832__$1);
var G__21834 = cljs.core.chunk_rest.call(null,seq__21817_21832__$1);
var G__21835 = c__18901__auto___21833;
var G__21836 = cljs.core.count.call(null,c__18901__auto___21833);
var G__21837 = (0);
seq__21817_21822 = G__21834;
chunk__21818_21823 = G__21835;
count__21819_21824 = G__21836;
i__21820_21825 = G__21837;
continue;
} else {
var f_21838 = cljs.core.first.call(null,seq__21817_21832__$1);
f_21838.call(null);

var G__21839 = cljs.core.next.call(null,seq__21817_21832__$1);
var G__21840 = null;
var G__21841 = (0);
var G__21842 = (0);
seq__21817_21822 = G__21839;
chunk__21818_21823 = G__21840;
count__21819_21824 = G__21841;
i__21820_21825 = G__21842;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__18116__auto__ = (function (){var G__21849 = x;
if(G__21849){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21849.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21849.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21849);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21849);
}
})();
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (function (){var G__21851 = x;
if(G__21851){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto____$1 = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto____$1)){
return or__18116__auto____$1;
} else {
return G__21851.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21851.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21851);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21851);
}
})();
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
var G__21852 = x;
if(G__21852){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto____$2 = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto____$2)){
return or__18116__auto____$2;
} else {
return G__21852.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21852.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21852);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21852);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__21854 = arguments.length;
switch (G__21854) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__18116__auto__ = descriptor;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__18116__auto____$1)){
return or__18116__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__21857 = arguments.length;
switch (G__21857) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__21860 = arguments.length;
switch (G__21860) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__21861 = m;
var map__21861__$1 = ((cljs.core.seq_QMARK_.call(null,map__21861))?cljs.core.apply.call(null,cljs.core.hash_map,map__21861):map__21861);
var opts = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__18116__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__21861,map__21861__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__21861,map__21861__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__21861,map__21861__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__21861,map__21861__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__18116__auto__ = rkey;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__21864 = arguments.length;
switch (G__21864) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__21867 = arguments.length;
switch (G__21867) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__21877 = state;
if(G__21877){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__21877.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__21877.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__21877);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__21877);
}
})()){
} else {
var properties_21885 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_21886 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_21887 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x21878_21888 = state;
x21878_21888.om$core$IRenderQueue$ = true;

x21878_21888.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_21887);
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_21887),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_21887,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_21887,cljs.core.empty);
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$INotify$ = true;

x21878_21888.om$core$INotify$_listen_BANG_$arity$3 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_21886,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_21886,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$INotify$_notify_BANG_$arity$3 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__21879_21889 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_21886));
var chunk__21880_21890 = null;
var count__21881_21891 = (0);
var i__21882_21892 = (0);
while(true){
if((i__21882_21892 < count__21881_21891)){
var vec__21883_21893 = cljs.core._nth.call(null,chunk__21880_21890,i__21882_21892);
var __21894 = cljs.core.nth.call(null,vec__21883_21893,(0),null);
var f_21895 = cljs.core.nth.call(null,vec__21883_21893,(1),null);
f_21895.call(null,tx_data,root_cursor);

var G__21896 = seq__21879_21889;
var G__21897 = chunk__21880_21890;
var G__21898 = count__21881_21891;
var G__21899 = (i__21882_21892 + (1));
seq__21879_21889 = G__21896;
chunk__21880_21890 = G__21897;
count__21881_21891 = G__21898;
i__21882_21892 = G__21899;
continue;
} else {
var temp__4126__auto___21900 = cljs.core.seq.call(null,seq__21879_21889);
if(temp__4126__auto___21900){
var seq__21879_21901__$1 = temp__4126__auto___21900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21879_21901__$1)){
var c__18901__auto___21902 = cljs.core.chunk_first.call(null,seq__21879_21901__$1);
var G__21903 = cljs.core.chunk_rest.call(null,seq__21879_21901__$1);
var G__21904 = c__18901__auto___21902;
var G__21905 = cljs.core.count.call(null,c__18901__auto___21902);
var G__21906 = (0);
seq__21879_21889 = G__21903;
chunk__21880_21890 = G__21904;
count__21881_21891 = G__21905;
i__21882_21892 = G__21906;
continue;
} else {
var vec__21884_21907 = cljs.core.first.call(null,seq__21879_21901__$1);
var __21908 = cljs.core.nth.call(null,vec__21884_21907,(0),null);
var f_21909 = cljs.core.nth.call(null,vec__21884_21907,(1),null);
f_21909.call(null,tx_data,root_cursor);

var G__21910 = cljs.core.next.call(null,seq__21879_21901__$1);
var G__21911 = null;
var G__21912 = (0);
var G__21913 = (0);
seq__21879_21889 = G__21910;
chunk__21880_21890 = G__21911;
count__21881_21891 = G__21912;
i__21882_21892 = G__21913;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$IRootProperties$ = true;

x21878_21888.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21885,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21885,cljs.core.dissoc,id,k);
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21885,cljs.core.dissoc,id);
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

x21878_21888.om$core$IRootProperties$_get_property$arity$3 = ((function (x21878_21888,properties_21885,listeners_21886,render_queue_21887){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_21885),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x21878_21888,properties_21885,listeners_21886,render_queue_21887))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x21915 = cljs.core.clone.call(null,cursor);
x21915.om$core$IRootKey$ = true;

x21915.om$core$IRootKey$_root_key$arity$1 = ((function (x21915){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x21915))
;

x21915.om$core$IAdapt$ = true;

x21915.om$core$IAdapt$_adapt$arity$2 = ((function (x21915){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x21915))
;

x21915.cljs$core$ICloneable$ = true;

x21915.cljs$core$ICloneable$_clone$arity$1 = ((function (x21915){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x21915))
;

return x21915;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__21916){
var map__21979 = p__21916;
var map__21979__$1 = ((cljs.core.seq_QMARK_.call(null,map__21979))?cljs.core.apply.call(null,cljs.core.hash_map,map__21979):map__21979);
var options = map__21979__$1;
var raf = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__21979__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__22041 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__22041,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__22041,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__21980 = value;
if(G__21980){
var bit__18790__auto__ = (G__21980.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__18790__auto__) || (G__21980.cljs$core$IAtom$)){
return true;
} else {
if((!G__21980.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__21980);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__21980);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__18116__auto__ = adapt;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_22042 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_22011 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_22012 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_22013 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_22014 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22014;

om.core._STAR_state_STAR_ = _STAR_state_STAR_22013;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22012;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22011;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_22042);
} else {
}
}

var queue_22043 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_22043)){
} else {
var seq__22015_22044 = cljs.core.seq.call(null,queue_22043);
var chunk__22016_22045 = null;
var count__22017_22046 = (0);
var i__22018_22047 = (0);
while(true){
if((i__22018_22047 < count__22017_22046)){
var c_22048 = cljs.core._nth.call(null,chunk__22016_22045,i__22018_22047);
if(cljs.core.truth_(c_22048.isMounted())){
var temp__4126__auto___22049 = (c_22048.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___22049)){
var next_props_22050 = temp__4126__auto___22049;
(c_22048.props["__om_cursor"] = next_props_22050);

(c_22048.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__18116__auto__ = !((function (){var G__22020 = om.core.children.call(null,c_22048);
if(G__22020){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__22020.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__22020.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22020);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22020);
}
})());
if(or__18116__auto__){
return or__18116__auto__;
} else {
return c_22048.shouldComponentUpdate(c_22048.props,c_22048.state);
}
})())){
c_22048.forceUpdate();
} else {
}
} else {
}

var G__22051 = seq__22015_22044;
var G__22052 = chunk__22016_22045;
var G__22053 = count__22017_22046;
var G__22054 = (i__22018_22047 + (1));
seq__22015_22044 = G__22051;
chunk__22016_22045 = G__22052;
count__22017_22046 = G__22053;
i__22018_22047 = G__22054;
continue;
} else {
var temp__4126__auto___22055 = cljs.core.seq.call(null,seq__22015_22044);
if(temp__4126__auto___22055){
var seq__22015_22056__$1 = temp__4126__auto___22055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22015_22056__$1)){
var c__18901__auto___22057 = cljs.core.chunk_first.call(null,seq__22015_22056__$1);
var G__22058 = cljs.core.chunk_rest.call(null,seq__22015_22056__$1);
var G__22059 = c__18901__auto___22057;
var G__22060 = cljs.core.count.call(null,c__18901__auto___22057);
var G__22061 = (0);
seq__22015_22044 = G__22058;
chunk__22016_22045 = G__22059;
count__22017_22046 = G__22060;
i__22018_22047 = G__22061;
continue;
} else {
var c_22062 = cljs.core.first.call(null,seq__22015_22056__$1);
if(cljs.core.truth_(c_22062.isMounted())){
var temp__4126__auto___22063__$1 = (c_22062.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___22063__$1)){
var next_props_22064 = temp__4126__auto___22063__$1;
(c_22062.props["__om_cursor"] = next_props_22064);

(c_22062.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__18116__auto__ = !((function (){var G__22022 = om.core.children.call(null,c_22062);
if(G__22022){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__22022.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__22022.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22022);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22022);
}
})());
if(or__18116__auto__){
return or__18116__auto__;
} else {
return c_22062.shouldComponentUpdate(c_22062.props,c_22062.state);
}
})())){
c_22062.forceUpdate();
} else {
}
} else {
}

var G__22065 = cljs.core.next.call(null,seq__22015_22056__$1);
var G__22066 = null;
var G__22067 = (0);
var G__22068 = (0);
seq__22015_22044 = G__22065;
chunk__22016_22045 = G__22066;
count__22017_22046 = G__22067;
i__22018_22047 = G__22068;
continue;
}
} else {
}
}
break;
}
}

var _refs_22069 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_22069)){
} else {
var seq__22023_22070 = cljs.core.seq.call(null,_refs_22069);
var chunk__22024_22071 = null;
var count__22025_22072 = (0);
var i__22026_22073 = (0);
while(true){
if((i__22026_22073 < count__22025_22072)){
var vec__22027_22074 = cljs.core._nth.call(null,chunk__22024_22071,i__22026_22073);
var path_22075__$1 = cljs.core.nth.call(null,vec__22027_22074,(0),null);
var cs_22076 = cljs.core.nth.call(null,vec__22027_22074,(1),null);
var cs_22077__$1 = cljs.core.deref.call(null,cs_22076);
var seq__22028_22078 = cljs.core.seq.call(null,cs_22077__$1);
var chunk__22029_22079 = null;
var count__22030_22080 = (0);
var i__22031_22081 = (0);
while(true){
if((i__22031_22081 < count__22030_22080)){
var vec__22032_22082 = cljs.core._nth.call(null,chunk__22029_22079,i__22031_22081);
var id_22083 = cljs.core.nth.call(null,vec__22032_22082,(0),null);
var c_22084 = cljs.core.nth.call(null,vec__22032_22082,(1),null);
if(cljs.core.truth_(c_22084.shouldComponentUpdate(c_22084.props,c_22084.state))){
c_22084.forceUpdate();
} else {
}

var G__22085 = seq__22028_22078;
var G__22086 = chunk__22029_22079;
var G__22087 = count__22030_22080;
var G__22088 = (i__22031_22081 + (1));
seq__22028_22078 = G__22085;
chunk__22029_22079 = G__22086;
count__22030_22080 = G__22087;
i__22031_22081 = G__22088;
continue;
} else {
var temp__4126__auto___22089 = cljs.core.seq.call(null,seq__22028_22078);
if(temp__4126__auto___22089){
var seq__22028_22090__$1 = temp__4126__auto___22089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22028_22090__$1)){
var c__18901__auto___22091 = cljs.core.chunk_first.call(null,seq__22028_22090__$1);
var G__22092 = cljs.core.chunk_rest.call(null,seq__22028_22090__$1);
var G__22093 = c__18901__auto___22091;
var G__22094 = cljs.core.count.call(null,c__18901__auto___22091);
var G__22095 = (0);
seq__22028_22078 = G__22092;
chunk__22029_22079 = G__22093;
count__22030_22080 = G__22094;
i__22031_22081 = G__22095;
continue;
} else {
var vec__22033_22096 = cljs.core.first.call(null,seq__22028_22090__$1);
var id_22097 = cljs.core.nth.call(null,vec__22033_22096,(0),null);
var c_22098 = cljs.core.nth.call(null,vec__22033_22096,(1),null);
if(cljs.core.truth_(c_22098.shouldComponentUpdate(c_22098.props,c_22098.state))){
c_22098.forceUpdate();
} else {
}

var G__22099 = cljs.core.next.call(null,seq__22028_22090__$1);
var G__22100 = null;
var G__22101 = (0);
var G__22102 = (0);
seq__22028_22078 = G__22099;
chunk__22029_22079 = G__22100;
count__22030_22080 = G__22101;
i__22031_22081 = G__22102;
continue;
}
} else {
}
}
break;
}

var G__22103 = seq__22023_22070;
var G__22104 = chunk__22024_22071;
var G__22105 = count__22025_22072;
var G__22106 = (i__22026_22073 + (1));
seq__22023_22070 = G__22103;
chunk__22024_22071 = G__22104;
count__22025_22072 = G__22105;
i__22026_22073 = G__22106;
continue;
} else {
var temp__4126__auto___22107 = cljs.core.seq.call(null,seq__22023_22070);
if(temp__4126__auto___22107){
var seq__22023_22108__$1 = temp__4126__auto___22107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22023_22108__$1)){
var c__18901__auto___22109 = cljs.core.chunk_first.call(null,seq__22023_22108__$1);
var G__22110 = cljs.core.chunk_rest.call(null,seq__22023_22108__$1);
var G__22111 = c__18901__auto___22109;
var G__22112 = cljs.core.count.call(null,c__18901__auto___22109);
var G__22113 = (0);
seq__22023_22070 = G__22110;
chunk__22024_22071 = G__22111;
count__22025_22072 = G__22112;
i__22026_22073 = G__22113;
continue;
} else {
var vec__22034_22114 = cljs.core.first.call(null,seq__22023_22108__$1);
var path_22115__$1 = cljs.core.nth.call(null,vec__22034_22114,(0),null);
var cs_22116 = cljs.core.nth.call(null,vec__22034_22114,(1),null);
var cs_22117__$1 = cljs.core.deref.call(null,cs_22116);
var seq__22035_22118 = cljs.core.seq.call(null,cs_22117__$1);
var chunk__22036_22119 = null;
var count__22037_22120 = (0);
var i__22038_22121 = (0);
while(true){
if((i__22038_22121 < count__22037_22120)){
var vec__22039_22122 = cljs.core._nth.call(null,chunk__22036_22119,i__22038_22121);
var id_22123 = cljs.core.nth.call(null,vec__22039_22122,(0),null);
var c_22124 = cljs.core.nth.call(null,vec__22039_22122,(1),null);
if(cljs.core.truth_(c_22124.shouldComponentUpdate(c_22124.props,c_22124.state))){
c_22124.forceUpdate();
} else {
}

var G__22125 = seq__22035_22118;
var G__22126 = chunk__22036_22119;
var G__22127 = count__22037_22120;
var G__22128 = (i__22038_22121 + (1));
seq__22035_22118 = G__22125;
chunk__22036_22119 = G__22126;
count__22037_22120 = G__22127;
i__22038_22121 = G__22128;
continue;
} else {
var temp__4126__auto___22129__$1 = cljs.core.seq.call(null,seq__22035_22118);
if(temp__4126__auto___22129__$1){
var seq__22035_22130__$1 = temp__4126__auto___22129__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22035_22130__$1)){
var c__18901__auto___22131 = cljs.core.chunk_first.call(null,seq__22035_22130__$1);
var G__22132 = cljs.core.chunk_rest.call(null,seq__22035_22130__$1);
var G__22133 = c__18901__auto___22131;
var G__22134 = cljs.core.count.call(null,c__18901__auto___22131);
var G__22135 = (0);
seq__22035_22118 = G__22132;
chunk__22036_22119 = G__22133;
count__22037_22120 = G__22134;
i__22038_22121 = G__22135;
continue;
} else {
var vec__22040_22136 = cljs.core.first.call(null,seq__22035_22130__$1);
var id_22137 = cljs.core.nth.call(null,vec__22040_22136,(0),null);
var c_22138 = cljs.core.nth.call(null,vec__22040_22136,(1),null);
if(cljs.core.truth_(c_22138.shouldComponentUpdate(c_22138.props,c_22138.state))){
c_22138.forceUpdate();
} else {
}

var G__22139 = cljs.core.next.call(null,seq__22035_22130__$1);
var G__22140 = null;
var G__22141 = (0);
var G__22142 = (0);
seq__22035_22118 = G__22139;
chunk__22036_22119 = G__22140;
count__22037_22120 = G__22141;
i__22038_22121 = G__22142;
continue;
}
} else {
}
}
break;
}

var G__22143 = cljs.core.next.call(null,seq__22023_22108__$1);
var G__22144 = null;
var G__22145 = (0);
var G__22146 = (0);
seq__22023_22070 = G__22143;
chunk__22024_22071 = G__22144;
count__22025_22072 = G__22145;
i__22026_22073 = G__22146;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21979,map__21979__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__22148 = x;
if(G__22148){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__22148.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__22148.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__22148);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__22148);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__22150 = arguments.length;
switch (G__22150) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__22153 = arguments.length;
switch (G__22153) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__22156 = cursor;
if(G__22156){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__22156.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__22156.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__22156);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__22156);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__22158 = arguments.length;
switch (G__22158) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__22161 = arguments.length;
switch (G__22161) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__22164 = arguments.length;
switch (G__22164) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__22167 = arguments.length;
switch (G__22167) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__22170 = arguments.length;
switch (G__22170) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__22173 = arguments.length;
switch (G__22173) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1431876833299