import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './utils/http';
import 'element-ui/lib/theme-chalk/index.css';

// 完整导入
import ElementUI from 'element-ui';
Vue.use(ElementUI);

// 按需导入
// import { Button } from 'element-ui';
// Vue.use(Button);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
