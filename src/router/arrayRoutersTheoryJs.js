const arrayRoutersTheoryJs = [
    {
        path: "/template-item",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/template-item"
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
    {
        path: "/while",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Цикл While"
            ),
    },
    {
        path: "/do-while",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Цикл Do While"
            ),
    },
    {
        path: "/for",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Цикл For"
            ),
    },
    {
        path: "/api",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/theoryJsPages/API"),
    },
    {
        path: "/destructuring",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Деструктуризация"
            ),
    },
    {
        path: "/arrow-function",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Arrow function"
            ),
    },
    {
        path: "/json",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/JSON"
            ),
    },
];

export default arrayRoutersTheoryJs;
