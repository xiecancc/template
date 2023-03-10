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
    console.error(err);
  },
);

http.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    console.error(err);
  },
);

interface IResponse<T extends any> {
  code: number;
  msg: string;
  data: T;
}

export default async <T = any>(config: AxiosRequestConfig<any>): Promise<T> => {
  try {
    const data = (await http.request<T>(config)) as unknown as IResponse<T>;
    if (data.code === 200 || data.code === 0 || data.data) {
      return data.data;
    }
    throw new Error(data.msg || '请求失败');
  } catch (error: any) {
    throw error;
  }
};
