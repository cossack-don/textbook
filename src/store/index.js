import Vue from "vue";
import Vuex from "vuex";

// папка по сайтбару(массивы справочников)
import theoryJs from "./arrayTeory/arrayNameTheoryJs";
import theoryVue from "./arrayTeory/arrayNameTheoryVue";
import MiniProjects from "./arrayTeory/arrayNameMiniProjects";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theoryJs,
        theoryVue,
        MiniProjects,
    },

    // вывод одного тестового справочника, нужно тестить
    // computed
    // one() {
    //   // return this.$store.state.urls
    //   console.log(this.$store.state.theoryJs.arrayNameTheoryJs)

    // },

    mutations: {},
    actions: {},
    modules: {},
});
