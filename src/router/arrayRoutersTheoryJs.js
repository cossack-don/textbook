const arrayRoutersTheoryJs = [
    {
        path: "/fetch",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Fetch"
            ),
    },
    {
        path: "/console",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Console"
            ),
    },
    {
        path: "/variable",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Переменные"
            ),
    },
    {
        path: "/sort",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Sort"
            ),
    },
    {
        path: "/data-types",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Типы данных"
            ),
    },
    {
        path: "/if-else",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/OperatorIfElse"
            ),
    },
    {
        path: "/switch",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Switch"
            ),
    },
];

export default arrayRoutersTheoryJs;
