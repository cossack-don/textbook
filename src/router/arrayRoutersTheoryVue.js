const arrayRoutersTheoryVue = [

    {
        path: "/vue-connection",
        name: "vue-connection",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Подключение вью"
            ),
    },
    {
        path: "/fetch-request-in-component-vue",
        name: "fetch-request-in-component-vue",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Запрос fetch в компоненте вью"
            ),
    },
    {
        path: "/basics-vuex",
        name: "basics-vuex",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Basics vuex"
            ),
    },
    {
        path: "/props",
        name: "props",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Props"
            ),
    },
    {
        path: "/v-bind",
        name: "v-bind",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/v-bind"
            ),
    },
    {
        path: "/v-if-v-else",
        name: "v-if-v-else",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/v-if-v-else"
            ),
    },
    {
        path: "/v-events",
        name: "v-events",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/v-events"
            ),
    },
    {
        path: "/v-for",
        name: "v-for",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/v-for"
            ),
    },

    {
        path: "/computed-watch",
        name: "computed-watch",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/computed-watch"
            ),
    },
    {
        path: "/communication-with-components",
        name: "communication-with-components",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Communication-with-components"
            ),
    },
    {
        path: "/v-model",
        name: "v-model",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/v-model"
            ),
    },
    {
        path: "/project-lifecycle",
        name: "project-lifecycle",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Project-lifecycle"
            ),
    },
    {
        path: "/interpolation",
        name: "interpolation",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Interpolation"
            ),
    },
    {
        path: "/methods",
        name: "methods",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Methods"
            ),
    },
    {
        path: "/computed",
        name: "computed",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Computed"
            ),
    },
    {
        path: "/refs",
        name: "refs",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Refs"
            ),
    },
    {
        path: "/modifiers",
        name: "modifiers",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Modifiers"
            ),
    },
    {
        path: "/utility",
        name: "utility",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Utility"
            ),
    },
    {
        path: "/event-bus",
        name: "eventbus",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Event Bus"
            ),
    },
    {
        path: "/vue-mixins",
        name: "vue-mixins",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/theoryVuePages/Vue Mixins"
            ),
    },

    
];

export default arrayRoutersTheoryVue;
