<template>
  <div id="app">
    <el-container>
      <el-header id="header">
        <Router />
        <Store />
      </el-header>
      <el-container>
        <el-aside id="aside">
          <Form />
        </el-aside>
        <el-main id="main">
          <Table />
        </el-main>
      </el-container>
      <el-footer id="footer">
        <ECharts />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Form from "./components/FormComponent.vue"
  import Table from "./components/TableComponent.vue"
  import Store from "./components/StoreComponent.vue"
  import Router from "./components/RouterComponent.vue"
  import ECharts from "./components/EChartsComponent.vue"
  export default {
    name: "App",
    components: {
      Form,
      Table,
      Store,
      Router,
      ECharts
    }
  };
</script>

<style>
  #main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>