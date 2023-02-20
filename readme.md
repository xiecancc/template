## uniapp2-weapp：微信小程序框架

+ 集成 [uniapp](https://uniapp.dcloud.net.cn/component/view.html#) 组件库、[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html) 组件库、[weapp](https://vant-contrib.gitee.io/vant-weapp/#/home) 组件库。无需配置，开箱即用！

+ 封装了 `uni.request` 网络请求，使用 `uni.$http` 快速发起网络请求

  ```javascript
  async getList(){
    this.list = await uni.$http({
      url: "/list",
      // data: {},
      // method: "GET"
    })
  }
  ```

## vue2：vue2框架

+ 集成 `vue2`、`vue-router`、`vuex`，并开启了持久化存储

+ 封装了 `axios` 网络请求，使用 `this.$axios` 或导出接口快速发起网络请求

  ```js
  async getList(){
    this.list = await this.$axios({
      url: "/list",
      // params: {},
      // method: "GET"
    })
  }  
  ```
  
  ```js
  getList(){
    this.$axios({
      url: "/list",
      // params: {},
      // method: "GET"
    }).then((data) => {
      this.list = data
    })
  }  
  ```
  
  ```js
  // api/index.js
  import http from '@/utils/http';
  
  export const GetUsers = (data) => {
    return http({
      method: 'GET',
      url: '/user',
      params: data,
    });
  };
  
  // app.vue
  import { GetUsers } from '@/api'
  
  GetList(){
    GetUsers().then((data) => {
      this.list = data
    })
  }
  ```

+ 封装了跨域代理相关配置

## vue2-vant：vue2移动端框架

+ 集成 `vue2`、`vue-router`、`vuex`、`vant2`，并开启了持久化存储
+ 封装了 `axios` 网络请求，使用 `this.$axios` 或导出接口快速发起网络请求
+ 封装了 `rem` 移动端自适应布局配置
+ 封装了跨域代理相关配置

## vue2-element-ui：vue2后台管理框架

+ 集成 `vue2`、`vue-router`、`vuex`、`element-ui`，并开启了持久化存储
+ 封装了 `axios` 网络请求，使用 `this.$axios` 或导出接口快速发起网络请求
+ 封装了左侧导航菜单、标准路由配置、全局导航守卫、登录退出等基础功能
+ 封装了跨域代理相关配置





