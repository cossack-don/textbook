const arrayRoutersTheoryVue = [
    {
        path: "/counttwo",
        name: "CountTwo2",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/CountTwo"
            ),
    },
    {
        path: "/vue-connection",
        name: "CountTwo2",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Подключение вью"
            ),
    },
    {
        path: "/fetch-request-in-component-vue",
        name: "CountTwo2",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Запрос fetch в компоненте вью"
            ),
    },
    {
        path: "/basics-vuex",
        name: "CountTwo2",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Basics vuex"
            ),
    }
    
];

export default arrayRoutersTheoryVue;
