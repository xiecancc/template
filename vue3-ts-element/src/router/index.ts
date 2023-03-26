import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('@/views/admin/index.vue'),
    redirect: '/dashboard',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '数据预览',
          token: true,
        },
        component: () => import('@/views/admin/dashboard/index.vue'),
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '用户管理',
        },
        redirect: '/user/list',
        children: [
          {
            path: '/user/list',
            name: 'userlist',
            meta: {
              title: '用户列表',
              token: true,
            },
            component: () => import('@/views/admin/user/list.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
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

/**
 * 路由守卫
 * @param to 跳转的路由
 * @param from 来源路由
 * @param next 跳转到下一个路由
 */
router.beforeEach((to, from, next) => {
  // 判断目标路由是否需要 token，如果不需要，则直接跳转到目标路由
  if (!to.meta.token) return next();

  // 获取本地存储的 token，如果存在，则表示用户已经登录，直接跳转到目标路由
  const token = localStorage.getItem('token');
  if (token) return next();

  // 如果没有 token，则表示用户未登录，跳转到登录页面
  return next('/login');
});
