(function(t){function e(e){for(var a,s,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/VueJS_VueMaterial/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e8d":function(t,e,n){"use strict";var a=n("f875"),i=n.n(a);i.a},"3dfd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Home")},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-content",{directives:[{name:"show",rawName:"v-show",value:"/"==this.$route.path,expression:"this.$route.path == '/'"}],attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("h1",[t._v("Pressione o botão abaixo para Entrar")]),a("md-button",{staticClass:"md-raised md-secondary",staticStyle:{width:"30vw",height:"6vh","background-color":"#2c3e50",color:"#FFFFFF","font-size":"1.3em","font-weight":"bold"},on:{click:function(e){return t.abrirFilmes()}}},[t._v("INICIAR")])],1),a("router-view",{directives:[{name:"show",rawName:"v-show",value:"/"!=this.$route.path,expression:"this.$route.path != '/'"}]})],1)},s=[],o={methods:{abrirFilmes:function(){this.$router.push("/filmes")}}},l=o,u=(n("8b71"),n("2877")),c=Object(u["a"])(l,r,s,!1,null,null,null),d=c.exports,m={components:{Home:d}},f=m,p=Object(u["a"])(f,a,i,!1,null,null,null);e["a"]=p.exports},"4a9c":function(t,e,n){"use strict";var a=n("6687"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e),function(t){n("cadf"),n("551c"),n("f751"),n("097d");var e=n("2b0e"),a=n("3dfd"),i=n("d028"),r=n("ccd0"),s=n("8c4f"),o=n("9c30");n("51de"),n("e094");e["default"].use(s["a"]),e["default"].use(o["MdButton"]),e["default"].use(o["MdContent"]),e["default"].use(o["MdToolbar"]),e["default"].use(o["MdIcon"]),e["default"].use(o["MdApp"]),e["default"].use(o["MdList"]),e["default"].use(o["MdDrawer"]),e["default"].use(o["MdAvatar"]),e["default"].use(o["MdCard"]),e["default"].use(o["MdProgress"]),e["default"].config.productionTip=!1;var l=new s["a"]({mode:"history",base:t,routes:[{path:"/",component:a["a"]},{path:"/filmes",component:i["a"]},{name:"details",path:"/details",component:r["a"],props:{}},{path:"*",redirect:"/"}]});new e["default"]({router:l,render:function(t){return t(a["a"])}}).$mount("#app")}.call(this,"/")},6687:function(t,e,n){},"8b71":function(t,e,n){"use strict";var a=n("e3a2"),i=n.n(a);i.a},"9de7":function(t,e,n){},ccd0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container md-layout-column"},[n("md-toolbar",{staticClass:"md-primary",staticStyle:{"background-color":"#000000"}},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.voltar()}}},[n("md-icon",[t._v("arrow_back")])],1),n("span",{staticClass:"md-title"},[t._v(t._s(t.filme.title))])],1),n("md-card",[n("md-card-media",[n("img",{attrs:{id:"media",src:t.filme.image,alt:"Logo"}})]),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.filme.title))]),n("div",{staticClass:"md-subhead"},[t._v(t._s(t.filme.opening_crawl))])])],1)],1)},i=[],r={name:"Details",data:function(){return this.$route.params.filme?{filme:this.$route.params.filme}:{filme:!1}},methods:{voltar:function(){this.$router.go(-1)}},mounted:function(){this.filme||this.$router.push("/")}},s=r,o=(n("4a9c"),n("2877")),l=Object(o["a"])(s,a,i,!1,null,null,null);e["a"]=l.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d028:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ListaFilmes")},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-toolbar",{staticClass:"md-primary",staticStyle:{"background-color":"#000000"}},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showNavigation=!0}}},[n("md-icon",[t._v("menu")])],1),n("span",{staticClass:"md-title"},[t._v("Filmes")])],1),n("md-drawer",{attrs:{"md-active":t.showNavigation},on:{"update:mdActive":function(e){t.showNavigation=e},"update:md-active":function(e){t.showNavigation=e}}},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("span",{staticClass:"md-title"},[t._v("Menu")])]),n("md-list",[n("md-list-item",{on:{click:function(e){return t.abrirInicio()}}},[n("md-icon",[t._v("home")]),n("span",{staticClass:"md-list-item-text"},[t._v("Tela Inicial")])],1)],1)],1),n("ListaAPI")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"sp"}},[n("md-progress-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"md-tranparent",attrs:{"md-diameter":90,"md-stroke":10,"md-mode":"indeterminate"}})],1),n("md-list",t._l(t.filmes,(function(e){return n("md-list-item",{key:e.episode_id,on:{click:function(n){return t.abrirDetails(e)}}},[n("md-avatar",[n("img",{attrs:{src:t.image,alt:"Logo"}})]),n("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.title))])],1)})),1)],1)},l=[],u=n("bc3a"),c=n.n(u),d=c.a.create({baseURL:"https://swapi.dev/api/"}),m={listar:function(){return d.get("films/")}},f={name:"ListaAPI",data:function(){return{Film:{title:"",opening_crawl:"",image:""},loading:!0,filmes:[],image:"https://www.desktopbackground.org/p/2014/03/24/736572_star-wars-logo-wallpapers-wallpapers-cave_1600x900_h.png"}},methods:{abrirDetails:function(t){this.Film={title:t.title,opening_crawl:t.opening_crawl,image:this.image},this.$router.push({name:"details",params:{filme:this.Film}})}},mounted:function(){var t=this;m.listar().then((function(e){t.loading=!1,t.filmes=e.data.results})).catch((function(e){t.loading=!1,alert(e),t.$router.push("/")}))}},p=f,h=(n("e18d"),n("2877")),v=Object(h["a"])(p,o,l,!1,null,null,null),g=v.exports,b={name:"ListaFilmes",components:{ListaAPI:g},data:function(){return{showNavigation:!1}},methods:{abrirInicio:function(){this.showNavigation=!1,this.$router.push("/")}}},w=b,_=(n("1e8d"),Object(h["a"])(w,r,s,!1,null,null,null)),y=_.exports,x={components:{ListaFilmes:y}},$=x,C=Object(h["a"])($,a,i,!1,null,null,null);e["a"]=C.exports},e18d:function(t,e,n){"use strict";var a=n("9de7"),i=n.n(a);i.a},e3a2:function(t,e,n){},f875:function(t,e,n){}});
//# sourceMappingURL=app.3b8f9af9.js.map