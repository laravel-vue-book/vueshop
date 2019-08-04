export default {
    namespaced: true,
    state: {
        user    : {},
    },
    mutations: {
        set: (state, payload) => {
            state.user  = payload
        },
    },
    actions: {
        set: ({commit}, payload) => {
            commit('set', payload)
        },
    },
    getters: {
        user  : state => state.user,
        guest : state => Object.keys(state.user).length === 0,
    }
}