const state = {
    cartWatches: [],
    cartPrice: 0
}

const getters = {
    cartWatches: function (state) {
        return state.cartWatches;
    },
    cartPrice: function (state) {
        return state.cartPrice;
    }
}

const mutations = {
    setCartWatch: function (state, payload) {
        state.cartWatches = payload;
    },
    setCartPrice: function (state, payload) {
        state.cartPrice = payload;
    }
}

export default {
    state,
    getters,
    mutations
}
