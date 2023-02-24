import http from '@/utils/http';

export const Login = (data) => {
  return http({
    url: '/login',
    data,
    method: 'POST',
  });
};

export const GetList = (data) => {
  // return http({
  //   url: '/GetList',
  //   params: data,
  //   method: 'GET',
  // });

  const { page, limit } = data;
  const list = [];
  for (let i = 1; i <= limit; i++) {
    list.push(page * limit + i);
  }
  return Promise.resolve({ list, total: 300 });
};
