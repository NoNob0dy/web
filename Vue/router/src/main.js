import Vue from "vue";
import App from "./App.vue";
import Router from "./router";

const app = new Vue({ 
  router: Router,
  render: h => h(App) 
});
app.$mount("#app");