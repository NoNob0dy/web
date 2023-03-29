<template>
  <div id="app">
    <Store />
    <Router />
    <ECharts />
  </div>
</template>

<script>
  import Store from "./components/StoreComponent.vue"
  import Router from "./components/RouterComponent.vue"
  import ECharts from "./components/EChartsComponent.vue"
  export default {
    name: "App",
    components: {
      Store,
      Router,
      ECharts,
    }

  };
</script>

<style></style>