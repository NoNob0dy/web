<template>
  <div id="app">
    <h1>{{ welcome }}</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/award">Go to Award</router-link>
    </p>
    <router-view></router-view>
    <Button v-if="token == null" @click="btn('den21s')" v-text="register"></Button>
  </div>
</template>

<script>
  import Store from "./store";
  export default {
    name: "App",
    store: Store,
    data() {
      return {}
    },
    computed: {
      welcome() {
        return Store.getters.welcome
      },
      username() {
        return Store.getters["user/username"]
      },
      token() {
        return Store.getters["user/token"]
      }
    },
    methods: {
      btn(username) {
        username && Store.commit('user/register', { username, token: 'sxgWKnLADfS8hUxbiMWyb' })
        username && Store.commit('base', { username })
      }
    }
  };
</script>

<style></style>