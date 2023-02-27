import axios from 'axios';

const http = axios.create({
  baseURL: '/api', // 请求时的基地址
});

// 在所有请求之前执行的代码
http.interceptors.request.use(
  (config) => {
    // 处理请求前代码
    // token
    const token = localStorage.getItem('token');
    config.headers = {
      Authorization: token,
      ...config.headers,
    };

    return config;
  },
  (error) => {
    // 请求失败
    console.log(error);
    return Promise.reject(error);
  },
);

// 当服务器返回数据时执行的代码
http.interceptors.response.use(
  ({ data }) => {
    // 请求成功时，拦截的代码
    return Promise.resolve(data);
  },
  (error) => {
    // 请求失败时，拦截的代码
    console.log(error);
    return Promise.reject(error);
  },
);

export default http;