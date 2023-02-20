import { Toast } from 'vant';

let loading;
export function startLoading() {
  loading = Toast.loading({
    forbidClick: true,
    message: '加载中……',
  });
}
export function endLoading() {
  loading.close();
}
