import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home";

// import Fetch from "../views/teoriyaJs/Fetch";
// import Test from "@/components/HelloWorld";

Vue.use(VueRouter);

const routes = [
    // start HOME PAGE
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "about" */ "@/views/Home"),
    },
    // end HOME PAGE

    // Main url content

    {
        path: "/fetch",
        name: "Fetch",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/teoriyaJs/Fetch"),
    },
    {
        path: "/sort",
        name: "Sort",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/teoriyaJs/Sort"),
    },
    // end Main url content

    // start 404 ERROR
    {
        path: "*",
        name: "Error404",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Error404.vue"),
    },
    // start 404 ERROR
];

const router = new VueRouter({
    routes,
});

export default router;
