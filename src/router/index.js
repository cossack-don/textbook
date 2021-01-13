import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes,
});

export default router;

// выдает предупреждение в консоли из за путей
// ГУГЛИТЬ encodeURI ПРИ ЗАГРУЗКЕ СТР ВЫДАЕТ 404 ЕСЛИ КЛИКАЮ ПО ССЫЛКЕ ТО ВСЕ ОК, ЛИБО ПИСАТЬ ССЫЛКИ РОУТЫ НА АНГ

// vue-router] Route with path "/переменные" 
// contains unencoded characters, make sure your path is correctly encoded before 
// passing it to the router. Use encodeURI to encode static segments of your path.

// vue-router.esm.js?8c4f:16 [vue-router] Route with path "/типы-данных" contains
//  unencoded characters, make sure your path is correctly encoded before passing
//   it to th