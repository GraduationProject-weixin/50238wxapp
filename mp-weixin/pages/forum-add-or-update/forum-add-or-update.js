(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{1396:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"35e4":function(e,n,t){"use strict";t.r(n);var r=t("1396"),u=t("62b0");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("853e");var o,i=t("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=c.exports},"62b0":function(e,n,t){"use strict";t.r(n);var r=t("91dd"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"853e":function(e,n,t){"use strict";var r=t("ea0f"),u=t.n(r);u.a},"91dd":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,o){try{var i=e[a](o),c=i.value}catch(f){return void t(f)}i.done?n(c):Promise.resolve(c).then(r,u)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var o=e.apply(n,t);function i(e){a(o,r,u,i,c,"next",e)}function c(e){a(o,r,u,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{forum:{forumContent:"",id:"",forumName:"",forumStateTypes:1},index:0,username:"",user:{}}},onLoad:function(n){var t=this;return o(r.default.mark((function u(){var a,o,i,c;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,o=e.getStorageSync("nowTable"),r.next=4,a.$api.session(o);case 4:if(i=r.sent,a.user=i.data,"yonghu"==o&&(a.username=a.user.yonghuzhanghao),!n.id){r.next=13;break}return a.id=n.id,r.next=11,a.$api.info("forum",a.id);case 11:c=r.sent,a.forum=c.data;case 13:a.styleChange();case 14:case"end":return r.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.forum.username=e.username,!e.id){n.next=6;break}return n.next=4,e.$api.update("forum",e.forum);case 4:n.next=8;break;case 6:return n.next=8,e.$api.save("forum",e.forum);case 8:e.$utils.msgBack("操作成功");case 9:case"end":return n.stop()}}),n)})))()}}};n.default=i}).call(this,t("543d")["default"])},9900:function(e,n,t){"use strict";(function(e){t("9f76");r(t("66fd"));var n=r(t("35e4"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},ea0f:function(e,n,t){}},[["9900","common/runtime","common/vendor"]]]);