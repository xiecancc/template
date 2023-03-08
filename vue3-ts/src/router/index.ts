import { createRouter, createWebHistory } from 'vue-router';

// 使用函数懒加载，能够进行有效的分包处理
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    // 其他所有路由都跳转至首页
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
