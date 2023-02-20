import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/login/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/admin',
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('../views/admin/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/admin/dashboard',
        redirect: '/admin/dashboard/index',
        meta: {
          title: '数据概述',
        },
        children: [
          {
            path: '/admin/dashboard/index',
            component: () => import('../views/admin/dashboard/index.vue'),
            meta: {
              title: '数据列表',
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    }
  }
});
