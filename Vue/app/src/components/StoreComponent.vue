<template>
    <div id="store">
      <h1>{{ welcome }}</h1>
      <input v-if="token == null" type="button" @click="btn('den21s')" value="register" />
    </div>
</template>
  
<script>
  import store from "../store"
  export default {
    name: "StoreComponent",
    store,
    data() {
      return {}
    },
    computed: {
      welcome() {
        return store.getters.welcome
      },
      username() {
        return store.getters["user/username"]
      },
      token() {
        return store.getters["user/token"]
      }
    },
    methods: {
      btn(username) {
        console.log(username);
        username && store.commit('user/register', { username, token: 'sxgWKnLADfS8hUxbiMWyb' })
        username && store.commit('base', { username })
      }
    }
  };
</script>
  
<style></style>