const arrayRoutersMiniProjects = [
    {
        path: "/vuetify-projects",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryMiniProjectPages/Vuetify prod"
            ),
    },
];

export default arrayRoutersMiniProjects;
