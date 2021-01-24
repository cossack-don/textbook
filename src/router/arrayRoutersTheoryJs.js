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
    {
        path: "/HTMLElement-hidden",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/HTMLElement.hidden"
            ),
    },
    {
        path: "/date",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Date"
            ),
    },
    {
        path: "/try-catch",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Try Catch"
            ),
    },
    {
        path: "/cookies",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Cookies"
            ),
    },
    {
        path: "/local-storage",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Local Storage"
            ),
    },
    {
        path: "/networking-rest-api",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Сетевое взаимодействие"
            ),
    },
    {
        path: "/fetch",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Fetch"
            ),
    },
        {
        path: "/math",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Math"
            ),
    },
    {
        path: "/regular-expressions",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryJsPages/Regular expressions"
            ),
    },
];

export default arrayRoutersTheoryJs;
