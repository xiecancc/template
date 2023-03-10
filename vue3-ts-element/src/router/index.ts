import { createRouter, createWebHistory } from 'vue-router';

// 使用函数懒加载，能够进行有效的分包处理
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

router.beforeEach((to, from, next) => {
  if (to.name == 'login') return next();
  const token = localStorage.getItem('token');
  if (token) return next();
  return next('/login');
});
