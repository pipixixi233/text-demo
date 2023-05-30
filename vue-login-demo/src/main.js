import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router";
import router from "@/assets/router";
import axios from "axios";
import VueAxios from "vue-axios";
import bootstrap from 'bootstrap'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
