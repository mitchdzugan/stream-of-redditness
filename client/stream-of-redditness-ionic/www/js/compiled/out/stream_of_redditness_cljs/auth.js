// Compiled by ClojureScript 0.0-3211 {}
goog.provide('stream_of_redditness_cljs.auth');
goog.require('cljs.core');
goog.require('stream_of_redditness_cljs.popup');
goog.require('stream_of_redditness_cljs.util');
goog.require('stream_of_redditness_cljs.globals');
stream_of_redditness_cljs.auth.deep_merge_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.deep_merge_in_BANG_,stream_of_redditness_cljs.globals.auth_atom);
stream_of_redditness_cljs.auth.write_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.write_in_BANG_,stream_of_redditness_cljs.globals.auth_atom);
stream_of_redditness_cljs.auth.get_in_BANG_ = cljs.core.partial.call(null,stream_of_redditness_cljs.util.get_in_BANG_,stream_of_redditness_cljs.globals.auth_atom);
stream_of_redditness_cljs.auth.parseObjForce = (function stream_of_redditness_cljs$auth$parseObjForce(jsonString){
var parsed = (function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(jsonString));
}catch (e33718){if((e33718 instanceof Error)){
var e = e33718;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e33718;

}
}})();
if(cljs.core.map_QMARK_.call(null,parsed)){
return parsed;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
stream_of_redditness_cljs.auth.localStorage = window.localStorage;
stream_of_redditness_cljs.auth.storageString = "StreamOfRedditnessStorage";
stream_of_redditness_cljs.auth.readStorage = (function stream_of_redditness_cljs$auth$readStorage(){
return stream_of_redditness_cljs.auth.parseObjForce.call(null,stream_of_redditness_cljs.auth.localStorage.getItem(stream_of_redditness_cljs.auth.storageString));
});
stream_of_redditness_cljs.auth.zipReadStorage = (function stream_of_redditness_cljs$auth$zipReadStorage(zip){
return cljs.core.reduce.call(null,(function (p1__33719_SHARP_,p2__33720_SHARP_){
return cljs.core.get.call(null,p1__33719_SHARP_,cljs.core.name.call(null,p2__33720_SHARP_));
}),stream_of_redditness_cljs.auth.readStorage.call(null),zip);
});
stream_of_redditness_cljs.auth.writeStorage = (function stream_of_redditness_cljs$auth$writeStorage(hashmap){
return stream_of_redditness_cljs.auth.localStorage.setItem(stream_of_redditness_cljs.auth.storageString,JSON.stringify(cljs.core.clj__GT_js.call(null,stream_of_redditness_cljs.util.deep_merge.call(null,stream_of_redditness_cljs.auth.readStorage.call(null),cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,hashmap))))));
});
stream_of_redditness_cljs.auth.zipWriteStorage = (function stream_of_redditness_cljs$auth$zipWriteStorage(zip,hashmap){
return stream_of_redditness_cljs.auth.writeStorage.call(null,cljs.core.reduce.call(null,(function (p1__33722_SHARP_,p2__33721_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p2__33721_SHARP_],[p1__33722_SHARP_]);
}),hashmap,cljs.core.reverse.call(null,zip)));
});
stream_of_redditness_cljs.globals.socket.on("authVal",(function (msg){
if(cljs.core.truth_(stream_of_redditness_cljs.auth.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"awaiting-req-url","awaiting-req-url",-1754069691)], null)))){
return stream_of_redditness_cljs.auth.deep_merge_in_BANG_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req-url","req-url",-311831395),msg,new cljs.core.Keyword(null,"awaiting-req-url","awaiting-req-url",-1754069691),false], null));
} else {
return null;
}
}));
stream_of_redditness_cljs.globals.socket.on("authData",(function (msg){
var msg__$1 = cljs.core.js__GT_clj.call(null,msg);
cljs.core.println.call(null,msg__$1);

stream_of_redditness_cljs.auth.zipWriteStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),msg__$1);

return stream_of_redditness_cljs.auth.zipWriteStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null),cljs.core.first.call(null,cljs.core.first.call(null,msg__$1)));
}));
stream_of_redditness_cljs.auth.onAuthNewClick = (function stream_of_redditness_cljs$auth$onAuthNewClick(event){
if(cljs.core.truth_(stream_of_redditness_cljs.auth.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-sent","request-sent",1803373085)], null)))){
stream_of_redditness_cljs.auth.deep_merge_in_BANG_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"awaiting-req-url","awaiting-req-url",-1754069691),true,new cljs.core.Keyword(null,"request-sent","request-sent",1803373085),false], null));

stream_of_redditness_cljs.globals.socket.emit("requestAuth");

return stream_of_redditness_cljs.auth.deep_merge_in_BANG_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval-id","interval-id",79285360),window.setInterval((function (){
if(cljs.core.not.call(null,stream_of_redditness_cljs.auth.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"awaiting-req-url","awaiting-req-url",-1754069691)], null)))){
window.clearInterval(stream_of_redditness_cljs.auth.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval-id","interval-id",79285360)], null)));

window.open(stream_of_redditness_cljs.auth.get_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"req-url","req-url",-311831395)], null)),"_blank");

return stream_of_redditness_cljs.auth.deep_merge_in_BANG_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-sent","request-sent",1803373085),true], null));
} else {
return null;
}
}),(1000))], null));
} else {
return null;
}
});
stream_of_redditness_cljs.auth.switchActiveUser = (function stream_of_redditness_cljs$auth$switchActiveUser(username){
stream_of_redditness_cljs.auth.zipWriteStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null),username);

return stream_of_redditness_cljs.popup.close_active_popup.call(null);
});
stream_of_redditness_cljs.auth.onAuthSwitchClick = (function stream_of_redditness_cljs$auth$onAuthSwitchClick(event){
cljs.core.println.call(null,"AYYYYYYYYYY LMAO");

return stream_of_redditness_cljs.popup.showPopup.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),[cljs.core.str("<div class=\"list\">"),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,(function (username){
return [cljs.core.str("<label class=\"item item-radio\">\n                                    <input type=\"radio\" name=\"group\" \n                                           onClick=\"stream_of_redditness_cljs\n                                                         .auth\n                                                         .switchActiveUser('"),cljs.core.str(username),cljs.core.str("')\""),cljs.core.str(((cljs.core._EQ_.call(null,username,stream_of_redditness_cljs.auth.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null))))?" checked=\"checked\">":">")),cljs.core.str("<div class=\"item-content\">"),cljs.core.str(username),cljs.core.str("</div>\n                                    <i class=\"radio-icon ion-checkmark\"></i>\n                                  </label>")].join('');
}),cljs.core.keys.call(null,stream_of_redditness_cljs.auth.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null)))))),cljs.core.str("</div>")].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Select an account to use",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add new account",new cljs.core.Keyword(null,"onTap","onTap",1867620869),stream_of_redditness_cljs.auth.onAuthNewClick], null)], null)], null)));
});
stream_of_redditness_cljs.auth.users = (function stream_of_redditness_cljs$auth$users(){
return stream_of_redditness_cljs.auth.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null));
});
stream_of_redditness_cljs.auth.active_user = (function stream_of_redditness_cljs$auth$active_user(){
return stream_of_redditness_cljs.auth.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null));
});
stream_of_redditness_cljs.auth.active_access_token = (function stream_of_redditness_cljs$auth$active_access_token(){
return stream_of_redditness_cljs.auth.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),stream_of_redditness_cljs.auth.zipReadStorage.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-user","active-user",-625701621)], null)),new cljs.core.Keyword(null,"access_token","access_token",1591156073)], null));
});

//# sourceMappingURL=auth.js.map?rel=1433049550107