import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import * as echarts from 'echarts'
import EChartsOption from "./echarts"

const app = new Vue({
  router,
  render: h => h(App),
  mounted() {
    this.$nextTick(() => {
      let ECharts = echarts.init(document.getElementById("myChart"));
      ECharts.setOption(EChartsOption);
    }) 
  }
});
app.$mount("#app");