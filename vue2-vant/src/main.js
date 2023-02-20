import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './utils/http';
import 'vant/lib/index.css';

// 完整导入
import Vant from 'vant';
Vue.use(Vant);

// 按需导入
// import { Button } from 'vant';
// Vue.use(Button);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
