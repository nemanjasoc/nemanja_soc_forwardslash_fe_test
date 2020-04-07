import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import banner from './modules/banner';
import table from './modules/table';
import header from './modules/header';
import sidebar from './modules/sidebar';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [(createPersistedState())],
    modules: {
        banner,
        table,
        header,
        sidebar
    }
})
