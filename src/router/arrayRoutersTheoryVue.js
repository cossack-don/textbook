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
];

export default arrayRoutersTheoryVue;
