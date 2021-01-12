const arrayRoutersTheoryVue = [
    {
        path: "/counttwo",
        name: "CountTwo2",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/CountTwo"
            ),
    },
];

export default arrayRoutersTheoryVue;
