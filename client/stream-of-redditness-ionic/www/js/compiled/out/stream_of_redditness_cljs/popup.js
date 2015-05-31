// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.popup');
goog.require('cljs.core');
goog.require('stream_of_redditness_cljs.globals');
goog.require('stream_of_redditness_cljs.util');
stream_of_redditness_cljs.popup.deep_merge_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.deep_merge_in_BANG_,stream_of_redditness_cljs.globals.popup_atom);
stream_of_redditness_cljs.popup.write_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.write_in_BANG_,stream_of_redditness_cljs.globals.popup_atom);
stream_of_redditness_cljs.popup.get_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.get_in_BANG_,stream_of_redditness_cljs.globals.popup_atom);
stream_of_redditness_cljs.popup.close_active_popup = (function stream_of_redditness_cljs$popup$close_active_popup(){
return stream_of_redditness_cljs.popup.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-popup","active-popup",-2117949434)], null)).close();
});
document.addEventListener("click",(function (){
if(cljs.core.truth_((function (){var and__18104__auto__ = stream_of_redditness_cljs.popup.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-click-not-in-popup","last-click-not-in-popup",385217060)], null));
if(cljs.core.truth_(and__18104__auto__)){
return stream_of_redditness_cljs.popup.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-popup","active-popup",-2117949434)], null));
} else {
return and__18104__auto__;
}
})())){
stream_of_redditness_cljs.popup.close_active_popup.call(null);
} else {
}

return stream_of_redditness_cljs.popup.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-click-not-in-popup","last-click-not-in-popup",385217060)], null),true);
}));
stream_of_redditness_cljs.popup.registerPopupShower = (function stream_of_redditness_cljs$popup$registerPopupShower(popupShower){
return stream_of_redditness_cljs.popup.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup-shower","popup-shower",915164759)], null),popupShower);
});
goog.exportSymbol('stream_of_redditness_cljs.popup.registerPopupShower', stream_of_redditness_cljs.popup.registerPopupShower);
stream_of_redditness_cljs.popup.showPopup = (function stream_of_redditness_cljs$popup$showPopup(popupDetails){
var popup = stream_of_redditness_cljs.popup.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup-shower","popup-shower",915164759)], null)).call(null,popupDetails);
document.getElementsByClassName("popup").item((0)).addEventListener("click",((function (popup){
return (function (){
return stream_of_redditness_cljs.popup.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-click-not-in-popup","last-click-not-in-popup",385217060)], null),false);
});})(popup))
);

stream_of_redditness_cljs.popup.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-popup","active-popup",-2117949434)], null),popup);

return popup.then(((function (popup){
return (function (res){
return stream_of_redditness_cljs.popup.write_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-popup","active-popup",-2117949434)], null),null);
});})(popup))
);
});
goog.exportSymbol('stream_of_redditness_cljs.popup.showPopup', stream_of_redditness_cljs.popup.showPopup);

//# sourceMappingURL=popup.js.map?rel=1433049497462