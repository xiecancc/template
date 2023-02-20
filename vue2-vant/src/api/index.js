import http from '@/utils/http';

export const Login = (data) => {
  return http({
    url: '/login',
    data,
    method: 'POST',
  });
};
