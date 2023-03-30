import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import * as echarts from 'echarts'
import ECsOption from "./echarts"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI);

const app = new Vue({
  router,
  render: h => h(App),
  mounted() {
    this.$nextTick(() => {
      let ECharts = echarts.init(document.getElementById("myChart"));
      ECharts.setOption(ECsOption);
    }) 
  }
});
app.$mount("#app");