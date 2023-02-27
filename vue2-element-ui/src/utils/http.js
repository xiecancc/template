import axios from 'axios';
import { startLoading, endLoading } from './loading';

/**
 * 创建 axios 实例，添加默认配置
 */
const http = axios.create({
  baseURL: '/api', // 请求时的基地址
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 处理请求前代码
    // token
    const token = localStorage.getItem('token');
    config.headers = {
      Authorization: token,
      ...config.headers,
    };

    startLoading();
    return config;
  },
  (error) => {
    // 请求失败
    console.log(error);
    return Promise.reject(error);
  },
);

// 响应拦截
http.interceptors.response.use(
  ({ data }) => {
    endLoading();
    // 请求成功时，拦截的代码
    return Promise.resolve(data);
  },
  (error) => {
    endLoading();
    // 请求失败时，拦截的代码
    console.log(error);
    return Promise.reject(error);
  },
);

export default http;
