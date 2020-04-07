const state = {
    sidebarCartWatches: [],
    sidebarCartPrice: 0
}

const getters = {
    sidebarCartWatches: function (state) {
        return state.cartWatches;
    },
    sidebarCartWatches: function (state) {
        return state.cartPrice;
    }
}

const mutations = {
    setSidebarCartWatch: function (state, payload) {
        state.sidebarCartWatches = payload;
    },
    setSidebarCartPrice: function (state, payload) {
        state.sidebarCartWatches = payload;
    }
}

export default {
    state,
    getters,
    mutations
}