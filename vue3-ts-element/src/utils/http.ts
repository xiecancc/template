import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { endLoading, startLoading } from '../plugins/el-loading';
import { IResponse } from '../types/response';
import { $message } from '@/plugins/el-message';

// 实例化请求对象
const http = axios.create({
  // 公共请求地址。已集成跨域，请在vue.config.ts中配置
  baseURL: '/api',
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 携带 token 请求数据
    const token = localStorage.getItem('token');
    config.headers['Authorization'] = token;
    startLoading();
    return config;
  },
  (err) => {
    endLoading();
    return err;
  },
);

// 响应拦截
http.interceptors.response.use(
  ({ data }) => {
    endLoading();
    // 在这里进行数据处理
    const response: IResponse = {
      code: data.code,
      msg: data.msg,
      data: data.data,
    };
    if (response.code != 200) {
      $message({
        type: 'error',
        message: response.msg,
      });
      return Promise.reject(response.msg);
    }
    return Promise.resolve(response.data);
  },
  (err) => {
    endLoading();
    // 请求错误
    if (err instanceof AxiosError) {
      const message = err.response?.statusText;
      $message({
        type: 'error',
        message,
      });
      return Promise.reject(message);
    }
    return Promise.reject(err);
  },
);

/**
 * 发送网络请求
 */
export default <T = any>(config: AxiosRequestConfig<any>) => {
  return http.request<any, T>(config);
};
