import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage";
import AllDaPokePage from "./pages/AllDaPokePage";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage },
  { path: "/all-da-poke", component: AllDaPokePage }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
