const arrayRoutersTheoryJs = [
    {
        path: "/fetch",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Fetch"
            ),
    },
    {
        path: "/ajax",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Ajax"
            ),
    },
];

export default arrayRoutersTheoryJs;
