(function(e){function t(t){for(var o,r,i=t[0],u=t[1],l=t[2],c=0,h=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"be485c31"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"934d8319"}[e]+".css",a=u.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===a))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){l=h[i],c=l.getAttribute("data-href");if(c===o||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var h=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",h.name="ChunkLoadError",h.type=o,h.request=r,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/textbook/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{click:e.clickAreaAneCloseSidebar}},[n("Header",{staticClass:"main-header-book"}),n("div",{staticClass:"wrapper-sidebar-main-content"},[n("LeftSidebar",{staticClass:"wrapper-sidebar-main-content__left-sidebar"}),n("router-view",{staticClass:"wrapper-sidebar-main-content__main-content"})],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{staticClass:"btn-open-sidebar burger-icon",attrs:{src:n("9a62"),alt:""},on:{click:e.btnClickOpenSidebar}}),o("div",{staticClass:"header-slogan"},[e._v("Freamwork drive learning")]),o("router-link",{staticClass:"link-logo",attrs:{to:"/"}},[o("img",{staticClass:"img_logo",attrs:{src:n("db95"),alt:""}})])],1)},i=[],u={components:{},data:function(){return{}},methods:{btnClickOpenSidebar:function(){var e=document.querySelector(".wrapper-sidebar-main-content__left-sidebar");e.classList.add("show-block")}}},l=u,c=n("2877"),h=Object(c["a"])(l,s,i,!1,null,null,null),d=h.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-left-sidebar"},[o("div",{staticClass:"wrapper-computer-sidebar"},[o("div",{staticClass:"wrapper-btn-close-sidebar",on:{click:e.btnCloseSidebar}},[o("img",{staticClass:"btn-close-sidebar",attrs:{src:n("e707"),alt:""}})]),o("button",{ref:"btnCloseCategory",staticClass:"button-close-category",on:{click:e.closeAllcategory}},[e._v("Закрыть все уроки")]),o("div",{staticClass:"wrapper-search-close"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"main-left-sidebar__search",attrs:{type:"text",placeholder:"Поиск"},domProps:{value:e.searchValue},on:{input:[function(t){t.target.composing||(e.searchValue=t.target.value)},function(t){e.searchValue=t.target.value}]}}),e.searchValue?o("div",{staticClass:"btnCleanSearch",on:{click:function(t){return t.stopPropagation(),e.btnCleanSearch(t)}}},[e._v("X")]):e._e()]),o("ul",{staticClass:"search-list-links"},[e.searchValue?o("li",{staticClass:"search-list-links__text-search"},[e._v("Нашло в поиске")]):e._e(),e._l(e.getValueInputSearchFilterArrayAndPostResult,(function(t,n){return o("li",{key:n},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)}))],2),e.hideMessageNotItemInSearch?o("div",{staticClass:"nothing-found"},[e._v("Ничего не найдено")]):e._e(),o("ul",{on:{click:e.showBtnCloseAllCategory}},[o("li",{staticClass:"category-theory-js"},[o("p",{staticClass:"category-theory-js__title",on:{click:function(t){e.taggleShowAndHideTheoryJs=!e.taggleShowAndHideTheoryJs}}},[e._v("Теория ES6")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.taggleShowAndHideTheoryJs,expression:"taggleShowAndHideTheoryJs"}],staticClass:"list-links-theory"},e._l(e.sortArrayA_ZnameTheoryJs,(function(t,n){return o("li",{key:n,staticClass:"list-links-theory__list-link-theory"},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)})),0)]),o("li",{staticClass:"category-theory-vue"},[o("p",{staticClass:"category-theory-vue__title",on:{click:function(t){e.taggleShowAndHideTheoryVue=!e.taggleShowAndHideTheoryVue}}},[e._v("Теория Vue")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.taggleShowAndHideTheoryVue,expression:"taggleShowAndHideTheoryVue"}],staticClass:"list-links-theory-vue"},e._l(e.sortArrayA_ZnameTheoryVue,(function(t,n){return o("li",{key:n,staticClass:"list-links-projects__list-link-theory-vue"},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)})),0)]),o("li",{staticClass:"category-mini-projects"},[o("p",{staticClass:"category-mini-projects__title",on:{click:function(t){e.taggleShowAndHideMiniProjects=!e.taggleShowAndHideMiniProjects}}},[e._v("Мини-проекты")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.taggleShowAndHideMiniProjects,expression:"taggleShowAndHideMiniProjects"}],staticClass:"list-links-projects"},e._l(e.sortArrayA_ZnameMiniProjects,(function(t,n){return o("li",{key:n,staticClass:"list-links-projects__list-link-theory"},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)})),0)])]),o("br"),o("br"),o("router-link",{attrs:{to:"/all-links"}},[e._v("Основные ссылки видео-курсов")]),o("br"),o("br"),o("a",{attrs:{href:"http://spacemath.xyz/",target:"_blank"}},[e._v("Матика учебник основы")]),e._v(" "),o("br"),o("br"),o("a",{attrs:{href:"https://ru.bem.info/methodology/",target:"_blank"}},[e._v("БЭМ справочник")]),e._v(" "),o("br"),o("br"),o("a",{attrs:{href:"https://miragejs.com/"}},[e._v("Mirage js")]),e._v(" "),o("br"),o("br"),o("router-link",{staticClass:"btn-home-page",attrs:{to:"/"}},[e._v("Home PAGE")])],1)])},m=[],b=(n("99af"),n("4de4"),n("caad"),n("d81d"),n("2532"),{data:function(){return{newArrayBeforeFilterInSearch:[],searchValue:"",hideMessageNotItemInSearch:!1,taggleShowAndHideTheoryJs:!1,taggleShowAndHideMiniProjects:!1,taggleShowAndHideTheoryVue:!1}},methods:{btnCloseSidebar:function(){var e=document.querySelector(".wrapper-sidebar-main-content__left-sidebar");e.classList.add("hide-block")},btnCleanSearch:function(){this.searchValue=""},showBtnCloseAllCategory:function(){!1!==this.taggleShowAndHideTheoryVue&&!1!==this.taggleShowAndHideTheoryJs&&!1!==this.taggleShowAndHideMiniProjects||(this.$refs.btnCloseCategory.style.display="none"),!0!==this.taggleShowAndHideTheoryVue&&!0!==this.taggleShowAndHideTheoryJs&&!0!==this.taggleShowAndHideMiniProjects||(this.$refs.btnCloseCategory.style.display="block")},closeAllcategory:function(){this.taggleShowAndHideTheoryVue=!1,this.taggleShowAndHideTheoryJs=!1,this.taggleShowAndHideMiniProjects=!1,this.$refs.btnCloseCategory.style.display="none"}},computed:{sortArrayA_ZnameTheoryJs:function(){var e=this.$store.state.theoryJs.arrayNameTheoryJs.map((function(e){e.toLowerCase();var t=e[0].toUpperCase()+e.substring(1);return t}));return e.sort()},sortArrayA_ZnameTheoryVue:function(){var e=this.$store.state.theoryVue.arrayNameTheoryVue.map((function(e){e.toLowerCase();var t=e[0].toUpperCase()+e.substring(1);return t}));return e.sort()},sortArrayA_ZnameMiniProjects:function(){var e=this.$store.state.MiniProjects.arrayNameMiniProjects.map((function(e){e.toLowerCase();var t=e[0].toUpperCase()+e.substring(1);return t}));return e.sort()},getValueInputSearchFilterArrayAndPostResult:function(){var e=this,t=this.$store.state.theoryJs.arrayNameTheoryJs.concat(this.$store.state.theoryVue.arrayNameTheoryVue,this.$store.state.MiniProjects.arrayNameMiniProjects);if(this.newArrayBeforeFilterInSearch=t.filter((function(t){return t.toLowerCase().includes(e.searchValue.toLowerCase())})),""===this.searchValue&&(this.hideMessageNotItemInSearch=!1),""!==this.searchValue)return 0===this.newArrayBeforeFilterInSearch.length?this.hideMessageNotItemInSearch=!0:this.hideMessageNotItemInSearch=!1,t.filter((function(t){return t.toLowerCase().includes(e.searchValue.toLowerCase())}))}}}),w=b,f=Object(c["a"])(w,p,m,!1,null,null,null),g=f.exports,y={name:"App",components:{Header:d,LeftSidebar:g},data:function(){return{}},methods:{clickAreaAneCloseSidebar:function(e){var t=document.querySelector(".wrapper-sidebar-main-content__left-sidebar"),n=document.querySelector(".btn-open-sidebar");document.documentElement.clientWidth<768&&(e.target.closest(".wrapper-sidebar-main-content__left-sidebar")||t.classList.add("hide-block")),e.target===n&&t.classList.remove("hide-block")}}},v=y,C=Object(c["a"])(v,r,a,!1,null,null,null),_=C.exports,k=n("8c4f"),S=(n("4160"),n("d3b7"),n("159b"),[{path:"/template-item",component:function(){return n.e("about").then(n.bind(null,"6083"))}},{path:"/console",component:function(){return n.e("about").then(n.bind(null,"c6b3"))}},{path:"/variable",component:function(){return n.e("about").then(n.bind(null,"5ca7"))}},{path:"/data-types",component:function(){return n.e("about").then(n.bind(null,"f575"))}},{path:"/if-else",component:function(){return n.e("about").then(n.bind(null,"2fbc"))}},{path:"/switch",component:function(){return n.e("about").then(n.bind(null,"8e0d"))}},{path:"/while",component:function(){return n.e("about").then(n.bind(null,"2e32"))}},{path:"/do-while",component:function(){return n.e("about").then(n.bind(null,"9074"))}},{path:"/for",component:function(){return n.e("about").then(n.bind(null,"0d1e"))}},{path:"/api",component:function(){return n.e("about").then(n.bind(null,"5842"))}},{path:"/destructuring",component:function(){return n.e("about").then(n.bind(null,"6491"))}},{path:"/arrow-function",component:function(){return n.e("about").then(n.bind(null,"9b97"))}},{path:"/json",component:function(){return n.e("about").then(n.bind(null,"5b1e"))}},{path:"/HTMLElement-hidden",component:function(){return n.e("about").then(n.bind(null,"6338"))}},{path:"/date",component:function(){return n.e("about").then(n.bind(null,"7f6b"))}},{path:"/try-catch",component:function(){return n.e("about").then(n.bind(null,"12f7"))}},{path:"/cookies",component:function(){return n.e("about").then(n.bind(null,"5669"))}},{path:"/local-storage",component:function(){return n.e("about").then(n.bind(null,"101d"))}},{path:"/networking-rest-api",component:function(){return n.e("about").then(n.bind(null,"6180"))}},{path:"/fetch",component:function(){return n.e("about").then(n.bind(null,"b4f5"))}}]),A=S,V=[{path:"/counttwo",name:"CountTwo2",component:function(){return n.e("about").then(n.bind(null,"1a55"))}}],j=V,P=[{path:"/fetcha",component:function(){return n.e("about").then(n.bind(null,"ece2"))}}],T=P,M=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/all-links",name:"Основные ссылки",component:function(){return n.e("about").then(n.bind(null,"7006"))}}];A.forEach((function(e,t){M.push(A[t])})),j.forEach((function(e,t){M.push(j[t])})),T.forEach((function(e,t){M.push(T[t])})),M.push({path:"*",name:"error-404",components:{default:function(){return n.e("about").then(n.bind(null,"b2ec"))}}});var H=M;o["a"].use(k["a"]);var L=new k["a"]({mode:"history",routes:H}),N=L,I=n("2f62"),E={arrayNameTheoryJs:["template-item","Console","Variable","Data types","If Else","Switch","While","Do While","For","API","Destructuring","Arrow function","JSON","HTMLElement-hidden","Date","Try Catch","Cookies","Local Storage","Networking REST API","Fetch"]},x={arrayNameTheoryVue:["Count","CountTwo"]},J={arrayNameMiniProjects:["test122","test2111 3","33333","fetcha"]},U={arrayUrlsVideoContent:[{url:"https://www.youtube.com/user/megamichey85",nameContent:"JS основные функции полезные"},{url:"https://www.youtube.com/watch?v=eEF6Szpda9g&feature=emb_logo",nameContent:"Vue+ VUEX 43min"},{url:"https://www.youtube.com/playlist?list=PLcvhF2Wqh7DPD5sRK3lw4bjBsKdgY2bPi",nameContent:"Основы js IT kamasutra"},{url:"https://www.youtube.com/watch?v=Hn4tRC6NSzI&feature=share",nameContent:"как начать быстро прогать от минина"},{url:"https://www.youtube.com/watch?v=35va4OY7Y1c&feature=emb_logo",nameContent:"select на js от минина"},{url:"https://www.youtube.com/watch?v=0JirPtDAZvw&feature=emb_logo",nameContent:"разбор vue и реакт проектов"},{url:"https://www.youtube.com/watch?v=Pm2aASoksJU&feature=emb_logo",nameContent:"VUE CRM Minin курс"},{url:"https://www.youtube.com/watch?v=lm9olMCRCIc&feature=share",nameContent:"NUXT+SRR Minin"},{url:"https://www.youtube.com/watch?v=cz4rMkmj4kQ&feature=share",nameContent:"SPA НА ЧИСТОМ JS"},{url:"https://arutyunov.me/blog/vue/26-sovetov-dlya-vue-razrabotchikov/",nameContent:"Полезные советы кто начинает с VUE"},{url:"https://www.youtube.com/watch?v=0gjH9CXHPkk&feature=emb_logo",nameContent:"Vue уроки"},{url:"https://www.youtube.com/watch?v=p059z-0JTFg&feature=emb_logo",nameContent:"Vue 2021 MININ"},{url:"https://www.youtube.com/watch?v=gV6eobXisYU&feature=emb_logo",nameContent:"Собес на фронта"},{url:"https://www.youtube.com/watch?v=c3yDiVRJ0n0&feature=emb_logo",nameContent:"Лаврик VUE"},{url:"https://www.youtube.com/watch?v=f_oFy0vl7x0&feature=share",nameContent:"Лаврик Vue 3"},{url:"https://www.youtube.com/watch?v=mqsXRxWvR3o&feature=share",nameContent:"Vue практика"},{url:"https://www.youtube.com/watch?v=ZqgiuPt5QZo&feature=emb_logo",nameContent:"Vue практика"},{url:"https://www.youtube.com/watch?v=rncY1tlWShM&feature=share",nameContent:"Vue теория анг"},{url:"https://www.youtube.com/watch?v=PGnNVW5n-3g&feature=share",nameContent:"web dev youtob kanal"},{url:"https://www.youtube.com/playlist?list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD",nameContent:"ES6 ТЕОРИЯ"},{url:"https://www.youtube.com/playlist?list=PLNkWIWHIRwMH7ahn9uvvc5PG3o1tLscgB",nameContent:"Vue теория"},{url:"https://www.youtube.com/playlist?list=PLNkWIWHIRwMHKLotIS_d-wyj00pg0AnUg",nameContent:"web dev js"},{url:"https://www.youtube.com/watch?v=rSyFM2FANtk&feature=share",nameContent:"vue refs"},{url:"https://www.youtube.com/watch?v=C0mf4nyRKx8&feature=share",nameContent:"vue slot"},{url:"https://www.youtube.com/watch?v=oLZuCGuAnsM&feature=share",nameContent:"чек лист для джуна фронта"},{url:"",nameContent:"Udemi Vue+Vuex курс смотреть"},{url:"",nameContent:"Minin CRM"},{url:"",nameContent:"точка.dev youtob"},{url:"",nameContent:"Лаврик"},{url:"",nameContent:"lern tugether progr youtobe"},{url:"",nameContent:"go frontend youtobe"},{url:"https://metanit.com/web/vuejs/8.2.php",nameContent:"Vue практика"},{url:"http://falbar.ru/article/kak-ispolzovat-routing-v-vue-dlya-sozdaniya-xoroshego-polzovatelskogo-interfejsa",nameContent:"вью статья"},{url:"",nameContent:"Димыч камасутра айти"},{url:"https://webdevkin.ru/posts/frontend/adminka-vue-8-vuex-practice",nameContent:"вью практика"},{url:"https://webdevkin.ru/posts/frontend/adminka-vue-8-vuex-practice",nameContent:"вью практика"}],arrayUrlsVideoOne:[{url:"https://learn.javascript.ru/",nameContent:"Lern js"},{url:"https://www.youtube.com/channel/UCwUKug4Tn0BmGrZIgcE-_LA",nameContent:"JAVA И SКРИПТЫ"},{url:"https://www.youtube.com/watch?v=3PDq09nqCTs&list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD",nameContent:"webDev -ES6 КУРС МИНИ"},{url:"https://www.youtube.com/playlist?list=PLNkWIWHIRwMH7ahn9uvvc5PG3o1tLscgB",nameContent:"webDev - Vue мини курс"},{url:"https://www.youtube.com/watch?v=5lBf-Fm4io4",nameContent:"Go Frontend канал - VUEX + VUE"},{url:"https://tocode.ru/",nameContent:"TO CODE vue курс"}],arrayUrlsVideoTwo:[{url:"https://webdevkin.ru/posts/frontend/adminka-vue-8-vuex-practice",nameContent:"вью практика"}],arrayUrlsVideoThree:[{url:"https://webdevkin.ru/posts/frontend/adminka-vue-8-vuex-practice",nameContent:"вью практика"}]};o["a"].use(I["a"]);var O=new I["a"].Store({state:{theoryJs:E,theoryVue:x,MiniProjects:J,urlsVideo:U},mutations:{},actions:{},getters:{}});n("b107");o["a"].config.productionTip=!1,new o["a"]({router:N,store:O,render:function(e){return e(_)}}).$mount("#app")},"9a62":function(e,t,n){e.exports=n.p+"img/icon-burger.862338ee.svg"},b107:function(e,t,n){},db95:function(e,t,n){e.exports=n.p+"img/main_logo.72892002.png"},e707:function(e,t,n){e.exports=n.p+"img/closed.39f068c8.svg"}});
//# sourceMappingURL=app.726b5f62.js.map