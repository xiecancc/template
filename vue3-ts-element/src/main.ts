import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'normalize.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router).use(pinia).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
