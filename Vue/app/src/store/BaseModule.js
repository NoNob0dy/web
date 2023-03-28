const BaseModule = {
    state: () => ({
        welcome: 'welcome'
    }),
    getters: {
        welcome(state) {
            return state.welcome
        },
    },
    mutations: {
        base(state, username) {
            state.welcome += ', ' + username;
        },
    },
    actions: {}
}