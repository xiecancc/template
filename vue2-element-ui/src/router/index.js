import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/login/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('../views/admin/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/admin/dashboard/index.vue'),
        redirect: '/dashboard/list',
        meta: {
          title: '数据概述',
        },
        children: [
          {
            path: '/dashboard/list',
            component: () => import('../views/admin/dashboard/list.vue'),
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

// 解决重复点击路由的错误信息
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
const routerReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location) {
  return routerReplace.call(this, location).catch((error) => error);
};
