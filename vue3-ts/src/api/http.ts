import axios, { AxiosRequestConfig } from 'axios';

const http = axios.create({
  baseURL: '/api',
});

http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token') || '';
    return config;
  },
  (err) => {
    console.log(err);
  },
);

http.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    console.log(err);
  },
);

interface IResponse<T extends any> {
  code: number;
  msg: string;
  data?: T;
}

export default async <T = any>(config: AxiosRequestConfig<any>): Promise<IResponse<T>> => {
  try {
    const { data } = await http.request<IResponse<T>>(config);
    if (data.code === 200 || data.code === 0) {
      return {
        code: 200,
        msg: data.msg || 'ok',
        data: data.data,
      };
    } else {
      return {
        code: -1,
        msg: data.msg || '请求失败',
        data: null as any,
      };
    }
  } catch (error: any) {
    console.log(error); // 失败消息提示
    return {
      code: -1,
      msg: error.message || '请求失败',
    };
  }
};
