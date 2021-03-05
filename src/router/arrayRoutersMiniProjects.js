const arrayRoutersMiniProjects = [
    {
        path: "/vuetify-projects",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryMiniProjectPages/Vuetify prod"
            ),
    },
    {
        path: "/mini-prodject-codepen",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryMiniProjectPages/Mini prodject codepen"
            ),
    },
];

export default arrayRoutersMiniProjects;
