const UserModule = {
   namespaced: true,
   state: () => ({
      username: '',
      token: null,
   }),
   getters: {
      username(state) {
         return state.username
      },
      token(state) {
         return state.token
      }
   },
   mutations: {
      register(state, { username, token }) {
         state.username = username
         state.token = token
      },
   },
}

export default UserModule