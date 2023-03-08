import http from './http';

interface ILoginParams {
  username: string;
  password: string;
}

export const Login = (data: ILoginParams) => {
  return http({
    url: '/login',
    method: 'POST',
    data,
  });
};
