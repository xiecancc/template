import http from './http';

interface ILoginParams {
  account: string;
  password: string;
}

export const Login = (data: ILoginParams) => {
  return http({
    url: '/login2',
    method: 'POST',
    data,
  });
};
