(function(e){function t(t){for(var o,r,u=t[0],i=t[1],l=t[2],c=0,h=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5a5f45c5"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"e23e53c6"}[e]+".css",a=i.p+o,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=s[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===a))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){l=h[u],c=l.getAttribute("data-href");if(c===o||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var h=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",h.name="ChunkLoadError",h.type=o,h.request=r,n[1](h)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/textbook/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{click:e.clickAreaAneCloseSidebar}},[n("Header",{staticClass:"main-header-book"}),n("div",{staticClass:"wrapper-sidebar-main-content"},[n("LeftSidebar",{staticClass:"wrapper-sidebar-main-content__left-sidebar"}),n("router-view",{staticClass:"wrapper-sidebar-main-content__main-content"})],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{staticClass:"btn-open-sidebar burger-icon",attrs:{src:n("9a62"),alt:""},on:{click:e.btnClickOpenSidebar}}),o("div",{staticClass:"header-slogan"},[e._v("Freamwork drive learning")]),o("router-link",{staticClass:"link-logo",attrs:{to:"/"}},[o("img",{staticClass:"img_logo",attrs:{src:n("db95"),alt:""}})])],1)},u=[],i={components:{},data:function(){return{}},methods:{btnClickOpenSidebar:function(){var e=document.querySelector(".wrapper-sidebar-main-content__left-sidebar");e.classList.add("show-block")}}},l=i,c=n("2877"),h=Object(c["a"])(l,s,u,!1,null,null,null),p=h.exports,d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-left-sidebar"},[o("div",{staticClass:"wrapper-computer-sidebar"},[o("div",{staticClass:"wrapper-btn-close-sidebar",on:{click:e.btnCloseSidebar}},[o("img",{staticClass:"btn-close-sidebar",attrs:{src:n("e707"),alt:""}})]),o("div",{staticClass:"wrapper-btn-close-and-search"},[o("button",{ref:"btnCloseCategory",staticClass:"button-close-category",on:{click:e.closeAllcategory}},[e._v(" Закрыть все уроки ")]),o("div",{staticClass:"wrapper-search-close"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"main-left-sidebar__search",attrs:{type:"text",placeholder:"Поиск"},domProps:{value:e.searchValue},on:{input:[function(t){t.target.composing||(e.searchValue=t.target.value)},function(t){e.searchValue=t.target.value}]}}),e.searchValue?o("div",{staticClass:"btnCleanSearch",on:{click:function(t){return t.stopPropagation(),e.btnCleanSearch(t)}}},[e._v(" X ")]):e._e()]),o("ul",{staticClass:"search-list-links"},[e.searchValue?o("li",{staticClass:"search-list-links__text-search"},[e._v(" Нашло в поиске ")]):e._e(),e._l(e.getValueInputSearchFilterArrayAndPostResult,(function(t,n){return o("li",{key:n},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)}))],2),e.hideMessageNotItemInSearch?o("div",{staticClass:"nothing-found"},[e._v(" Ничего не найдено ")]):e._e()]),o("ul",{staticClass:"main-list-category",on:{click:e.showBtnCloseAllCategory}},[o("li",{staticClass:"category-theory-js"},[o("p",{staticClass:"category-theory-js__title",on:{click:function(t){e.taggleShowAndHideTheoryJs=!e.taggleShowAndHideTheoryJs}}},[e._v(" Теория ES6 ")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.taggleShowAndHideTheoryJs,expression:"taggleShowAndHideTheoryJs"}],staticClass:"list-links-theory"},e._l(e.sortArrayA_ZnameTheoryJs,(function(t,n){return o("li",{key:n,staticClass:"list-links-theory__list-link-theory"},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)})),0)]),o("li",{staticClass:"category-theory-vue"},[o("p",{staticClass:"category-theory-vue__title",on:{click:function(t){e.taggleShowAndHideTheoryVue=!e.taggleShowAndHideTheoryVue}}},[e._v(" Теория Vue ")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.taggleShowAndHideTheoryVue,expression:"taggleShowAndHideTheoryVue"}],staticClass:"list-links-theory-vue"},e._l(e.sortArrayA_ZnameTheoryVue,(function(t,n){return o("li",{key:n,staticClass:"list-links-projects__list-link-theory-vue"},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)})),0)]),o("li",{staticClass:"category-mini-projects"},[o("p",{staticClass:"category-mini-projects__title",on:{click:function(t){e.taggleShowAndHideMiniProjects=!e.taggleShowAndHideMiniProjects}}},[e._v(" Мини-проекты ")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.taggleShowAndHideMiniProjects,expression:"taggleShowAndHideMiniProjects"}],staticClass:"list-links-projects"},e._l(e.sortArrayA_ZnameMiniProjects,(function(t,n){return o("li",{key:n,staticClass:"list-links-projects__list-link-theory"},[o("router-link",{attrs:{to:{path:t.split(" ").join("-").toLowerCase()}}},[e._v(e._s(t))])],1)})),0)])]),o("br"),o("br"),o("router-link",{attrs:{to:"/all-links"}},[e._v("Основные ссылки видео-курсов")]),o("br"),o("br"),o("router-link",{attrs:{to:"/trash-links-notes"}},[e._v("Мусор-ссылки-заметки")]),o("br"),o("br"),o("a",{attrs:{href:"http://spacemath.xyz/",target:"_blank"}},[e._v("Матика учебник основы")]),o("br"),o("br"),o("a",{attrs:{href:"https://ru.bem.info/methodology/",target:"_blank"}},[e._v("БЭМ справочник")]),o("br"),o("br"),o("a",{attrs:{href:"https://miragejs.com/",target:"_blank"}},[e._v("Mirage js")]),e._v(" "),o("br"),o("br"),o("a",{attrs:{href:"https://cossack-don.github.io/group/#/",target:"_blank"}},[e._v("JOB SPA")]),o("br"),o("br"),o("router-link",{staticClass:"btn-home-page",attrs:{to:"/"}},[e._v("Home PAGE")])],1)])},m=[],b=(n("99af"),n("4de4"),n("caad"),n("d81d"),n("2532"),{data:function(){return{newArrayBeforeFilterInSearch:[],searchValue:"",hideMessageNotItemInSearch:!1,taggleShowAndHideTheoryJs:!1,taggleShowAndHideMiniProjects:!1,taggleShowAndHideTheoryVue:!1}},methods:{btnCloseSidebar:function(){var e=document.querySelector(".wrapper-sidebar-main-content__left-sidebar");e.classList.add("hide-block")},btnCleanSearch:function(){this.searchValue=""},showBtnCloseAllCategory:function(){!1!==this.taggleShowAndHideTheoryVue&&!1!==this.taggleShowAndHideTheoryJs&&!1!==this.taggleShowAndHideMiniProjects||(this.$refs.btnCloseCategory.style.display="none"),!0!==this.taggleShowAndHideTheoryVue&&!0!==this.taggleShowAndHideTheoryJs&&!0!==this.taggleShowAndHideMiniProjects||(this.$refs.btnCloseCategory.style.display="block")},closeAllcategory:function(){this.taggleShowAndHideTheoryVue=!1,this.taggleShowAndHideTheoryJs=!1,this.taggleShowAndHideMiniProjects=!1,this.$refs.btnCloseCategory.style.display="none"}},computed:{sortArrayA_ZnameTheoryJs:function(){var e=this.$store.state.theoryJs.arrayNameTheoryJs.map((function(e){e.toLowerCase();var t=e[0].toUpperCase()+e.substring(1);return t}));return e.sort()},sortArrayA_ZnameTheoryVue:function(){var e=this.$store.state.theoryVue.arrayNameTheoryVue.map((function(e){e.toLowerCase();var t=e[0].toUpperCase()+e.substring(1);return t}));return e.sort()},sortArrayA_ZnameMiniProjects:function(){var e=this.$store.state.MiniProjects.arrayNameMiniProjects.map((function(e){e.toLowerCase();var t=e[0].toUpperCase()+e.substring(1);return t}));return e.sort()},getValueInputSearchFilterArrayAndPostResult:function(){var e=this,t=this.$store.state.theoryJs.arrayNameTheoryJs.concat(this.$store.state.theoryVue.arrayNameTheoryVue,this.$store.state.MiniProjects.arrayNameMiniProjects);if(this.newArrayBeforeFilterInSearch=t.filter((function(t){return t.toLowerCase().includes(e.searchValue.toLowerCase())})),""===this.searchValue&&(this.hideMessageNotItemInSearch=!1),""!==this.searchValue)return 0===this.newArrayBeforeFilterInSearch.length?this.hideMessageNotItemInSearch=!0:this.hideMessageNotItemInSearch=!1,t.filter((function(t){return t.toLowerCase().includes(e.searchValue.toLowerCase())}))}}}),f=b,w=Object(c["a"])(f,d,m,!1,null,null,null),y=w.exports,g={name:"App",components:{Header:p,LeftSidebar:y},data:function(){return{}},methods:{clickAreaAneCloseSidebar:function(e){var t=document.querySelector(".wrapper-sidebar-main-content__left-sidebar"),n=document.querySelector(".btn-open-sidebar");document.documentElement.clientWidth<768&&(e.target.closest(".wrapper-sidebar-main-content__left-sidebar")||t.classList.add("hide-block")),e.target===n&&t.classList.remove("hide-block")}}},v=g,C=Object(c["a"])(v,r,a,!1,null,null,null),_=C.exports,k=n("8c4f"),S=(n("4160"),n("d3b7"),n("159b"),[{path:"/template-item",component:function(){return n.e("about").then(n.bind(null,"6083"))}},{path:"/console",component:function(){return n.e("about").then(n.bind(null,"c6b3"))}},{path:"/variable",component:function(){return n.e("about").then(n.bind(null,"5ca7"))}},{path:"/data-types",component:function(){return n.e("about").then(n.bind(null,"f575"))}},{path:"/if-else",component:function(){return n.e("about").then(n.bind(null,"2fbc"))}},{path:"/switch",component:function(){return n.e("about").then(n.bind(null,"8e0d"))}},{path:"/while",component:function(){return n.e("about").then(n.bind(null,"2e32"))}},{path:"/do-while",component:function(){return n.e("about").then(n.bind(null,"9074"))}},{path:"/for",component:function(){return n.e("about").then(n.bind(null,"0d1e"))}},{path:"/api",component:function(){return n.e("about").then(n.bind(null,"5842"))}},{path:"/destructuring",component:function(){return n.e("about").then(n.bind(null,"6491"))}},{path:"/arrow-function",component:function(){return n.e("about").then(n.bind(null,"9b97"))}},{path:"/json",component:function(){return n.e("about").then(n.bind(null,"5b1e"))}},{path:"/HTMLElement-hidden",component:function(){return n.e("about").then(n.bind(null,"6338"))}},{path:"/date",component:function(){return n.e("about").then(n.bind(null,"7f6b"))}},{path:"/try-catch",component:function(){return n.e("about").then(n.bind(null,"12f7"))}},{path:"/cookies",component:function(){return n.e("about").then(n.bind(null,"5669"))}},{path:"/local-storage",component:function(){return n.e("about").then(n.bind(null,"101d"))}},{path:"/networking-rest-api",component:function(){return n.e("about").then(n.bind(null,"6180"))}},{path:"/fetch",component:function(){return n.e("about").then(n.bind(null,"b4f5"))}},{path:"/math",component:function(){return n.e("about").then(n.bind(null,"a28b"))}},{path:"/regular-expressions",component:function(){return n.e("about").then(n.bind(null,"e0e1"))}},{path:"/send-form-with-fetch",component:function(){return n.e("about").then(n.bind(null,"be94"))}},{path:"/form-data",component:function(){return n.e("about").then(n.bind(null,"99ee"))}},{path:"/rendering",component:function(){return n.e("about").then(n.bind(null,"159e"))}}]),A=S,V=[{path:"/vue-connection",name:"vue-connection",component:function(){return n.e("about").then(n.bind(null,"aca8"))}},{path:"/fetch-request-in-component-vue",name:"fetch-request-in-component-vue",component:function(){return n.e("about").then(n.bind(null,"ecfd"))}},{path:"/basics-vuex",name:"basics-vuex",component:function(){return n.e("about").then(n.bind(null,"e349"))}},{path:"/props",name:"props",component:function(){return n.e("about").then(n.bind(null,"221e"))}}],j=V,P=[{path:"/vuetify-projects",component:function(){return n.e("about").then(n.bind(null,"7539"))}}],T=P,M=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/all-links",name:"Основные ссылки",component:function(){return n.e("about").then(n.bind(null,"7006"))}},{path:"/trash-links-notes",name:"Мусор-ссылки-заметки",component:function(){return n.e("about").then(n.bind(null,"63e7"))}}];A.forEach((function(e,t){M.push(A[t])})),j.forEach((function(e,t){M.push(j[t])})),T.forEach((function(e,t){M.push(T[t])})),M.push({path:"*",name:"error-404",components:{default:function(){return n.e("about").then(n.bind(null,"b2ec"))}}});var H=M;o["a"].use(k["a"]);var x=new k["a"]({routes:H}),N=x,E=n("2f62"),I={arrayNameTheoryJs:["template-item","Console","Variable","Data types","If Else","Switch","While","Do While","For","API","Destructuring","Arrow function","JSON","HTMLElement-hidden","Date","Try Catch","Cookies","Local Storage","Networking REST API","Fetch","Math","Regular expressions","Send form with fetch","Form Data","Rendering"]},L={arrayNameTheoryVue:["vue-connection","Fetch request in component vue","Basics vuex","Props"]},U={arrayNameMiniProjects:["Vuetify projects"]},J={arrayUrlsVideoOne:[{url:"https://www.udemy.com/course/pwa-with-vuejs-quasar-firebase/learn/lecture/20805122#overview",nameContent:"Udemy kurs PWA Vue"},{url:"https://www.youtube.com/channel/UCwUKug4Tn0BmGrZIgcE-_LA",nameContent:"JAVA И SКРИПТЫ"},{url:"https://www.youtube.com/c/VladislavNeverov/playlists",nameContent:"Влад Неверов Vue+js"},{url:"https://www.youtube.com/watch?v=Pm2aASoksJU&feature=emb_logo",nameContent:"VUE CRM Minin курс"},{url:"",nameContent:"Udemi Vue+Vuex курс смотреть"},{url:"https://www.youtube.com/watch?v=5lBf-Fm4io4",nameContent:"Go Frontend канал - VUEX + VUE"},{url:"https://www.youtube.com/channel/UC6eR_ndNgaTeE5t2Ud4ZiHw",nameContent:"анг курс по вью отличный"},{url:"https://www.youtube.com/watch?v=BIuQfQcptIU&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=4",nameContent:"Vuetify KURS"},{url:"https://v15.vuetifyjs.com/ru/",nameContent:"Vuetify дока старая, но на русском"}],arrayUrlsVideoTwo:[{url:"https://webdevkin.ru/posts/frontend/adminka-vue-8-vuex-practice",nameContent:"Vue с примерами учебник"},{url:"https://metanit.com/web/vuejs/8.2.php",nameContent:"Vue практика"},{url:"https://arutyunov.me/blog/vue/26-sovetov-dlya-vue-razrabotchikov/",nameContent:"Полезные советы кто начинает с VUE"},{url:"https://itlogia.ru/article/10_resursov_dlya_izucheniya_vuejs_v_2020_godu",nameContent:"top 10 ресурсов по vue"},{url:"https://ru.vuejs.org/",nameContent:"Vue off doc"},{url:"https://tocode.ru/",nameContent:"TO CODE vue курс"},{url:"https://www.youtube.com/watch?v=p059z-0JTFg&feature=emb_logo",nameContent:"Vue 2021 MININ"},{url:"https://www.youtube.com/playlist?list=PLNkWIWHIRwMH7ahn9uvvc5PG3o1tLscgB",nameContent:"Vue теория"}],arrayUrlsVideoThree:[{url:"https://learn.javascript.ru/",nameContent:"Lern js"},{url:"https://www.youtube.com/playlist?list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD",nameContent:"ES6 ТЕОРИЯ"},{url:"https://www.youtube.com/watch?v=cz4rMkmj4kQ&feature=share",nameContent:"SPA НА ЧИСТОМ JS"}],arrayUrlsVideoFour:[{url:"https://www.youtube.com/playlist?list=PLcvhF2Wqh7DPD5sRK3lw4bjBsKdgY2bPi",nameContent:"Основы js IT kamasutra"},{url:"https://www.youtube.com/watch?v=35va4OY7Y1c&feature=emb_logo",nameContent:"select на js от минина"},{url:"https://www.youtube.com/watch?v=Hn4tRC6NSzI&feature=share",nameContent:"как начать быстро прогать от минина"},{url:"https://www.youtube.com/user/megamichey85",nameContent:"JS основные функции полезные"},{url:"https://www.youtube.com/channel/UCP-xJwnvKCGyS-nbyOx1Wmg",nameContent:"js youtobe"},{url:"https://www.youtube.com/channel/UChSGI2R2kRMjzXJuYqHWQZg",nameContent:"js youtobe good lessons"},{url:"https://www.youtube.com/channel/UCr_ImhIijOhCX7mUzBMFlaA",nameContent:"js youtobe good lessons 2"}],arrayUrlsVideoFive:[{url:"https://www.youtube.com/watch?v=0gjH9CXHPkk&feature=emb_logo",nameContent:"Vue уроки"},{url:"https://www.youtube.com/watch?v=ZqgiuPt5QZo&feature=emb_logo",nameContent:"Vue практика"},{url:"https://www.youtube.com/watch?v=jqp1PNApy3A",nameContent:"Vue уроки 2"},{url:"https://www.youtube.com/watch?v=rncY1tlWShM&feature=share",nameContent:"Vue теория анг"},{url:"https://www.youtube.com/watch?v=rSyFM2FANtk&feature=share",nameContent:"vue refs"},{url:"https://www.youtube.com/watch?v=C0mf4nyRKx8&feature=share",nameContent:"vue slot"},{url:"https://www.youtube.com/watch?v=eEF6Szpda9g&feature=emb_logo",nameContent:"Vue+ VUEX 43min"},{url:"https://www.youtube.com/watch?v=lm9olMCRCIc&feature=share",nameContent:"NUXT+SRR Minin"},{url:"https://www.youtube.com/watch?v=c3yDiVRJ0n0&feature=emb_logo",nameContent:"Лаврик VUE"},{url:"https://www.youtube.com/watch?v=mqsXRxWvR3o&feature=share",nameContent:"Vue практика"},{url:"https://www.youtube.com/watch?v=f_oFy0vl7x0&feature=share",nameContent:"Лаврик Vue 3"},{url:"https://www.youtube.com/watch?v=e-E0UB-YDRk&t=7420s",nameContent:"vue kurs 10 hours"}],arrayUrlsVideoSix:[{url:"https://github.com/cossack-don",nameContent:"my GitHub"}]};o["a"].use(E["a"]);var O=new E["a"].Store({state:{theoryJs:I,theoryVue:L,MiniProjects:U,urlsVideo:J},mutations:{},actions:{},getters:{}});n("b107");o["a"].config.productionTip=!1,new o["a"]({router:N,store:O,render:function(e){return e(_)}}).$mount("#app")},"9a62":function(e,t,n){e.exports=n.p+"img/icon-burger.862338ee.svg"},b107:function(e,t,n){},db95:function(e,t,n){e.exports=n.p+"img/main_logo.72892002.png"},e707:function(e,t,n){e.exports=n.p+"img/closed.39f068c8.svg"}});
//# sourceMappingURL=app.96045074.js.map