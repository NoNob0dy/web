<template>
  <div id="app">
    <Store />
    <Router />
    <Chart />
  </div>
</template>

<script>
  import StoreComponent from "./components/StoreComponent.vue"
  import RouterComponent from "./components/RouterComponent.vue"
  import EchartsComponent from "./components/EchartsComponent.vue"
  export default {
    name: "App",
    components: {
      Store: StoreComponent,
      Router: RouterComponent,
      Chart: EchartsComponent
    }

  };
</script>

<style></style>