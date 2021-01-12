import Vue from "vue";
import Vuex from "vuex";

// папка по сайтбару(массивы справочников)
import theoryJs from "./arrayTeory/arrayNameTheoryJs";
import theoryVue from "./arrayTeory/arrayNameTheoryVue";
import MiniProjects from "./arrayTeory/arrayNameMiniProjects";

// файл по импорту ссылок с видео курсов и ютуб ссылок
import urlsVideo from "./urlsVideoContent"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theoryJs,
        theoryVue,
        MiniProjects,
        // ссылки на видео контент,курсы,ютуб
        urlsVideo,
        // taggle for sidebar in header
        toggleBurger: false,
    },

    // вывод одного тестового справочника, нужно тестить
    // computed
    // one() {
    //   // return this.$store.state.urls
    //   console.log(this.$store.state.theoryJs.arrayNameTheoryJs)

    // },

    mutations: {
        CHANGE_DROPDOWN: (state) => {
            state.toggleBurger = !state.toggleBurger
        },

    },
    actions: {
        TOGGLE_DROPDOWN({ commit }) {
            commit('CHANGE_DROPDOWN')
        },


    },
    getters: {
        DROPDOWN_STATE(state) {
            return state.toggleBurger
        },

    },
});
