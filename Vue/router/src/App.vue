<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/award">Go to Award</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
</style>