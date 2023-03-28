<template>
  <div id="app">
    <Store />
    <Router />
    <Echarts />
  </div>
</template>

<script>
  import StoreComponent from "./components/StoreComponent.vue"
  import EchartsComponent from "./components/EchartsComponent.vue"
  import { RouterComponent, Router } from "./components/RouterComponent.vue"
  export default {
    name: "App",
    components: {
      Store: StoreComponent,
      Router: RouterComponent,
      Echarts: EchartsComponent
    },
    router: Router,
  };
</script>

<style></style>