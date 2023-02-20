import http from '@/utils/http';

/**
 * 登录
 * @param {Object} data 登录参数
 * @returns Promise
 */
export const Login = (data) => {
  return http({
    url: '/login',
    method: 'POST',
    data,
  });
};
