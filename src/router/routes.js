import arrayRoutersTheoryJs from "./arrayRoutersTheoryJs";
import arrayRoutersTheoryVue from "./arrayRoutersTheoryVue";
import arrayRoutersMiniProjects from "./arrayRoutersMiniProjects";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "about" */ "@/views/Home"),
    },
    {
        path: "/all-links",
        name: "Основные ссылки",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/Основные ссылки"),
    },
    {
        path: "/trash-links-notes",
        name: "Мусор-ссылки-заметки",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/Мусор-ссылки-заметки"),
    },
];

// Routers по справочнику JS
arrayRoutersTheoryJs.forEach(function(item, index) {
    routes.push(arrayRoutersTheoryJs[index]);
});
// Routers по справочнику Vue
arrayRoutersTheoryVue.forEach(function(item, index) {
    routes.push(arrayRoutersTheoryVue[index]);
});
// Routers по справочнику miniProjects
arrayRoutersMiniProjects.forEach(function(item, index) {
    routes.push(arrayRoutersMiniProjects[index]);
});

routes.push({
    path: "*",
    name: "error-404",
    components: {
        default: () =>
            import(/* webpackChunkName: "about" */ "../views/Error404.vue"),
    },
});

export default routes;
