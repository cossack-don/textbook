const arrayRoutersTheoryVue = [

    {
        path: "/vue-connection",
        name: "vue-connection",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Подключение вью"
            ),
    },
    {
        path: "/fetch-request-in-component-vue",
        name: "fetch-request-in-component-vue",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Запрос fetch в компоненте вью"
            ),
    },
    {
        path: "/basics-vuex",
        name: "basics-vuex",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Basics vuex"
            ),
    },
    {
        path: "/props",
        name: "props",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Props"
            ),
    }
    
];

export default arrayRoutersTheoryVue;
