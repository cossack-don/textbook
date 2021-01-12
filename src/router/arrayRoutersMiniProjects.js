const arrayRoutersMiniProjects = [
    {
        path: "/fetcha",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryMiniProjectPages/Fetcha"
            ),
    },
];

export default arrayRoutersMiniProjects;
