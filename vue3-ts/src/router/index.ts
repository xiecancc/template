import { createRouter, createWebHistory } from 'vue-router';

// 使用函数懒加载，能够进行有效的分包处理
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      // 显示底部导航菜单
      showTabbar: true,
    },
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

router.beforeEach((to, from, next) => {
  // 如果想要访问的页面需要进行验证
  if (to.meta.requireToken) {
    // 获取身份信息
    const account = '';
    // 获取成功，则跳转至指定页面
    if (account) next();
    // 获取失败，跳转至登录页面，并将想要访问的页面作为参数进行传递
    else next({ name: 'login', query: { redirect: to.fullPath } });
  } else next();
});
