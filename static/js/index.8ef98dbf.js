webpackJsonp([1],Array(21).concat([function(e,t,n){function o(e){r||n(141)}var r=!1,s=n(0)(n(64),n(176),o,"data-v-6b90ba36",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/common/navbar.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},,,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(34),s=o(r),u=n(83),i=o(u),l=n(149),a=o(l),c={checkAuth:function(){return i.default.resolve(!0)},getDestructResult:function(e,t){var n={},o={};return e=Array.isArray(e)?e:[e],e=e.map(function(e){return e.indexOf(":")>-1&&(o[e.split(":")[0]]=e.split(":")[1]),e.split(":")[0]}),(0,s.default)(t).forEach(function(r){e.indexOf(r)>-1&&(n[o[r]||r]=t[r])}),n},getQueryJoin:function(e){return a.default.stringify(e)},getTrimedResult:function(e){var t=this;return"string"==typeof e?e.trim():"[object Object]"===Object.prototype.toString.call(e)?((0,s.default)(e).forEach(function(n){e[n]=t.getTrimedResult(e[n])}),e):"[object Array]"===Object.prototype.toString.call(e)?e.map(function(e){return t.getTrimedResult(e)}):e}};t.default=c},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";e.exports={addSuffix:function(e,t){return e+t}}},function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),s=o(r),u=n(37),i=o(u),l=n(151),a=o(l),c=n(152),d=o(c),f=n(153),p=o(f),v=n(154),m=o(v),_=n(155),h=o(_),b=n(156),x=o(b),M=n(157),k=o(M),y=n(158),g=o(y),j=n(160),C=o(j),w=n(162),$=o(w),O=n(164),P=o(O),E=n(150),R=o(E),S=new s.default({base:e,routes:[{path:"/",redirect:"/m1"},{path:"/m1",component:a.default},{path:"/m2",component:d.default,children:[{path:"",component:p.default},{name:"namem21",path:"m21/:userid",component:p.default},{path:"m22",component:m.default,beforeEnter:function(e,t,n){console.log("m23 独享的beforeEnter钩子"),n()}},{path:"m23",component:h.default,alias:"aliasm23"},{path:"m24",meta:{requiresAuth:!0},component:x.default},{path:"m25",components:{default:k.default,aaa:{template:"<div>aaa</div>"}}}]},{path:"/m3",component:g.default},{path:"/m4",component:C.default},{path:"/m5",component:$.default},{path:"/m6",component:P.default},{path:"*",component:R.default}]});S.beforeEach(function(e,t,n){e.meta.requiresAuth?i.default.checkAuth().then(function(){n()}):n()}),S.afterEach(function(e){console.log("全局 afterEach",e)}),t.default=S}).call(t,"/")},function(e,t,n){function o(e){r||n(142)}var r=!1,s=n(0)(n(65),n(177),o,"data-v-72ccad49",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/layout.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] layout.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(34),s=o(r),u=n(36),i=o(u),l=n(35),a=o(l),c=n(59),d=o(c),f=n(58),p=o(f),v=n(57),m=o(v),_=n(56),h=o(_);i.default.config.silent=!1,i.default.config.devtools=!0,i.default.config.errorHandler=function(e,t){console.log(e,t)},(0,s.default)(h.default).forEach(function(e){i.default.filter(e,h.default[e])}),i.default.use(a.default),i.default.use(d.default),new i.default({el:"#root",router:m.default,data:{bus:new i.default},render:function(e){return e(p.default)}})},function(e,t,n){"use strict";e.exports={name:"LoadingBar",props:{id:String,customClass:String,progress:{type:Number,default:0},onProgressDone:{type:Function,required:!0}},data:function(){return{show:!0}},render:function(e){console.warn("h= ",e),console.warn("this= ",this);var t=this.id,n=this.customClass,o=this.progress,r=this.onProgressDone;return this.clickBtn(),e("div",{attrs:{id:t},class:n},["progress = ",o,e("button",{class:"pure-button",on:{click:r.bind(this,123)}},["点击我"])])},watch:{},methods:{clickBtn:function(){console.log("child click")}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),s=o(r),u=n(39),i=o(u),l=n(36),a=o(l),c=n(37),d=o(c),f=function(){function e(){(0,s.default)(this,e),this.ENV=n.i({API:"http://online.com"}),this.API=this.ENV.API}return(0,i.default)(e,[{key:"httpGet",value:function(e,t){return console.log("http get method"),e=""+this.API+e,t&&!t.preventTrim&&(t.body=d.default.getTrimedResult(t.body),delete t.preventTrim),a.default.http.get(e,t)}},{key:"httpPost",value:function(e,t){return console.log("http post method"),e=""+this.API+e,t&&!t.preventTrim&&(t.body=d.default.getTrimedResult(t.body),delete t.preventTrim),a.default.http.post(e,data,t)}},{key:"httpJsonp",value:function(e,t){return console.log("http jsonp method"),e=""+this.API+e,t&&!t.preventTrim&&(t.body=d.default.getTrimedResult(t.body),delete t.preventTrim),a.default.http.jsonp(e,t)}}]),e}();t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),s=o(r),u=n(39),i=o(u),l=n(87),a=o(l),c=n(86),d=o(c),f=n(62),p=o(f),v=function(e){function t(){return(0,s.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"insertDb",value:function(){console.log("m1 insertDb"),this.httpGet("/url",{})}}]),t}(p.default);t.default=new v},function(e,t,n){"use strict"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"LayoutVue",data:function(){return{title:"Welcome to VUE's World"}},methods:{},mounted:function(){console.log("当前环境注入的变量",n.i({API:"http://online.com"})),this.$root.$data.bus.$on("updateChannel",function(e){console.log("Root监听到总线事件",e)})}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),s=o(r),u=n(63),i=o(u);t.default={name:"M1Vue",components:{Navbar:s.default},data:function(){return{title:"Vue 过滤器",list:[{id:"001",name:"gexufei"},{id:"002",name:"lushijie"}],obj:{a:"aaa",b:"bbb"},clickNum:0}},methods:{testClick:function(e,t){console.log(e,t),this.clickNum++},modelClick:function(){console.log(i.default),i.default.insertDb()}},filters:{uppercase:function(e){return e&&e.toUpperCase()}},computed:{clickNumFace:function(){return"Total="+this.clickNum}},mounted:function(){this.$nextTick(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"M2Vue",components:{Navbar:r.default},data:function(){return{title:"VueRouter 路由"}},watch:{$route:function(e,t){console.log("from--\x3e",t),console.log("to--\x3e",e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M21Vue",data:function(){return{title:"模板获取路由参数"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M22Vue",data:function(){return{title:"编程式导航"}},methods:{jump:function(){this.$router.push({name:"namem21",params:{userid:233},query:{name:"gexufei"}})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M23Vue",data:function(){return{title:"路由别名"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M22Vue",data:function(){return{title:"组件内路由钩子"}},methods:{},beforeRouteEnter:function(e,t,n){n()},beforeRouteUpdate:function(e,t,n){n()},beforeRouteLeave:function(e,t,n){n()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M25Vue",data:function(){return{title:"命名视图"}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),s=o(r),u=n(159),i=o(u);t.default={name:"M3Vue",components:{M31:i.default,Navbar:s.default},data:function(){return{title:"Vue 内容分发"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M31Vue",data:function(){return{title:"This is M31 page!"}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(161),s=o(r),u=n(21),i=o(u);t.default={name:"M4Vue",components:{M42:s.default,Navbar:i.default},data:function(){return{title:"Vue 事件"}},methods:{btn1Click:function(e,t){console.log("普通点击事件",e,t)},btn2Click:function(e){this.$root.bus.$emit("updateChannel",e)},handleEmitM42Btn1:function(e){console.log("父级使用 v-on 监听孩子的 emit 事件",e)}},mounted:function(){this.$refs.refm42.$on("emitM42Btn2",function(e){console.log("父级使用 $refs.X.$on 监听孩子的 emit 事件",e)}),this.$root.$data.bus.$on("updateChannel",function(e){console.log("M4监听到总线事件",e)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"M42Vue",data:function(){return{title:"This is M42 page!"}},methods:{btn1Click:function(e){this.$emit("emitM42Btn1",e)},btn2Click:function(e){this.$emit("emitM42Btn2",e)}},mounted:function(){this.$on("emitM42Btn1",function(e){console.log("自己监听到 emit 事件",e)}),this.$on("emitM42Btn2",function(e){console.log("自己监听到 emit 事件",e)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(163),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"M5Vue",components:{Menu:r.default},data:function(){return{name:"lushijie"}},methods:{handleUpdate:function(e,t){console.log(e,t)}},mounted:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MenuVue",props:{propMenu:String},components:{},methods:{clickBtn:function(e){this.$emit("update",this.propMenu,e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(61),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"M6Vue",components:{LoadingBar:r.default},data:function(){return{name:"lushijie",progress:90}},methods:{handleProgressDone:function(e,t){console.log("handleProgressDone",e,t)}},mounted:function(){}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,n){var o=n(0)(null,n(175),null,null,null);o.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/common/notfound.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] notfound.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){function o(e){r||n(133)}var r=!1,s=n(0)(n(66),n(167),o,"data-v-309c2646",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m1/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(144)}var r=!1,s=n(0)(n(67),n(179),o,"data-v-74fe4df2",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m2/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(135)}var r=!1,s=n(0)(n(68),n(169),o,"data-v-479d75e1",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m2/m21.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m21.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(136)}var r=!1,s=n(0)(n(69),n(170),o,"data-v-47ab8d62",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m2/m22.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m22.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(137)}var r=!1,s=n(0)(n(70),n(171),o,"data-v-47b9a4e3",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m2/m23.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m23.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(138)}var r=!1,s=n(0)(n(71),n(172),o,"data-v-47c7bc64",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m2/m24.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m24.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(139)}var r=!1,s=n(0)(n(72),n(173),o,"data-v-47d5d3e5",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m2/m25.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m25.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(140)}var r=!1,s=n(0)(n(73),n(174),o,"data-v-5a658bc8",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m3/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(134)}var r=!1,s=n(0)(n(74),n(168),o,"data-v-44d284fe",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m3/m31.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m31.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(132)}var r=!1,s=n(0)(n(75),n(166),o,"data-v-216b82ee",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m4/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(143)}var r=!1,s=n(0)(n(76),n(178),o,"data-v-739e1ca2",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m4/m42.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] m42.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(146)}var r=!1,s=n(0)(n(77),n(181),o,"data-v-f7a21d6c",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m5/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(145)}var r=!1,s=n(0)(n(78),n(180),o,null,null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m5/menu.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){function o(e){r||n(131)}var r=!1,s=n(0)(n(79),n(165),o,"data-v-1913a40b",null);s.options.__file="/Users/lushijie/github/vue-biolerplate/src/components/m6/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[e._v("\n  M6\n  "),n("LoadingBar",{attrs:{id:"loading-bar1",customClass:"loading-bar",progress:e.progress,onProgressDone:e.handleProgressDone}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("Navbar"),e._v(" "),n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("button",{staticClass:"pure-button",on:{click:function(t){t.preventDefault(),e.btn1Click(11,t)}}},[e._v("普通点击事件")]),e._v(" "),n("button",{staticClass:"pure-button",on:{click:e.btn2Click}},[e._v("事件总线")]),e._v(" "),n("M42",{ref:"refm42",on:{emitM42Btn1:e.handleEmitM42Btn1}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("Navbar"),e._v(" "),n("h3",{staticClass:"title"},[e._v(e._s(e._f("uppercase")(e.title)))]),e._v(" "),n("div",[n("p",[e._v(e._s(e._f("addSuffix")(e.title,"-suffix")))]),e._v(" "),n("p",[e._v(e._s(e.clickNumFace))]),e._v(" "),n("p",{staticClass:"pure-button",on:{click:function(t){t.preventDefault(),e.testClick(123,t)}}},[e._v("@click 点击我")]),e._v(" "),n("p",{staticClass:"pure-button",on:{click:function(t){t.preventDefault(),e.modelClick(t)}}},[e._v("点击我")]),e._v(" "),n("ul",{attrs:{id:"example-1"}},e._l(e.list,function(t,o){return n("li",[e._v("\n        "+e._s(o)+" -- "+e._s(t.id)+" -- "+e._s(t.name)+"\n      ")])})),e._v(" "),n("ul",{attrs:{id:"example-2"}},e._l(e.obj,function(t,o){return n("li",[e._v("\n        "+e._s(o)+" -- "+e._s(t)+"\n      ")])}))])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"pp",staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),e._t("cpu",[n("p",[e._v("默认的酷睿")])]),e._v(" "),e._t("default",[n("div",[e._v("默认的slot")])])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",[e._v("$route.params.userid = "+e._s(e.$route.params.userid))]),e._v(" "),n("div",[e._v("$route.query.name = "+e._s(e.$route.query.name))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",[n("button",{on:{click:e.jump}},[e._v("跳转到 /m2/m21")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("router-link",{attrs:{to:"/m2/aliasm23"}},[e._v("/m2/aliasm23")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div")])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"pp",staticClass:"block"},[n("Navbar"),e._v(" "),n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",[n("M31",[n("p",{slot:"cpu"},[e._v("自定义的英特尔")]),e._v(" "),n("p",[e._v("自定义的匿名slot实例1")]),e._v(" "),n("p",[e._v("自定义的匿名slot实例2")])]),e._v(" "),n("M31")],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v("404")])])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"clearfix"},[n("li",[n("router-link",{attrs:{to:"/m1"}},[n("i",{staticClass:"fa fa-superpowers",attrs:{"aria-hidden":"true"}}),e._v("初识vue")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m2"}},[n("i",{staticClass:"fa fa-superpowers",attrs:{"aria-hidden":"true"}}),e._v("路由切换")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m3"}},[n("i",{staticClass:"fa fa-superpowers",attrs:{"aria-hidden":"true"}}),e._v("内容分发")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m4"}},[n("i",{staticClass:"fa fa-superpowers",attrs:{"aria-hidden":"true"}}),e._v("事件")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m5"}},[n("i",{staticClass:"fa fa-superpowers",attrs:{"aria-hidden":"true"}}),e._v("slot 子组件")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m6"}},[n("i",{staticClass:"fa fa-superpowers",attrs:{"aria-hidden":"true"}}),e._v("render 函数")])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block",attrs:{id:"app"}},[n("h3",{staticClass:"title txt-center bold"},[e._v(e._s(e.title))]),e._v(" "),n("router-view",{staticClass:"view"})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",[n("button",{staticClass:"pure-button",on:{click:e.btn1Click}},[e._v("父级 v-on 监听 $emit")]),e._v(" "),n("button",{staticClass:"pure-button",on:{click:e.btn2Click}},[e._v("父级 $refs 监听 $emit")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("Navbar"),e._v(" "),n("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",[n("ul",[n("li",[n("router-link",{attrs:{to:"/m2/m21/12312"}},[e._v("/m2/m21/666 -> 动态路由")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m2/m22"}},[e._v("/m2/m22 -> 编程式导航")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m2/m23"}},[e._v("/m2/m23 -> 路由别名")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m2/m24"}},[e._v("/m2/m24 -> 组件内路由钩子")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/m2/m25"}},[e._v("/m2/m25 -> 命名视图")])],1)])]),e._v(" "),n("router-view"),e._v(" "),n("router-view",{staticClass:"view two",attrs:{name:"aaa"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container app-body"},[e._v("\n  Menu-"+e._s(e.propMenu)+"\n  "),e._t("header"),e._v(" "),n("div",{staticClass:"pure-button",on:{click:e.clickBtn}},[e._v("点击我")]),e._v(" "),e._t("footer")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[e._v("\n  M5\n  "),n("Menu",{attrs:{propMenu:e.name},on:{update:e.handleUpdate}},[n("div",{slot:"header"},[e._v("header")]),e._v(" "),n("div",{slot:"footer"},[e._v("footer")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},,function(e,t){}]),[60]);