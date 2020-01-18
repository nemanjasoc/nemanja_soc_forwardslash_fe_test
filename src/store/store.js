import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import banner from './modules/banner';
import table from './modules/table';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [(createPersistedState())],
    modules: {
        banner,
        table
    }
})
