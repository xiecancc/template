import http from '@/utils/http';
import { ILoginParams } from '@/types/IAccount';

/**
 * 登录API
 * @param data 请求参数
 * @returns 登录结果
 */
export const loginApi = (data: ILoginParams) => {
  return http<{ token?: string }>({
    url: '/login',
    method: 'POST',
    data,
  });
};
