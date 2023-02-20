import { Loading } from 'element-ui';

let loading;
/**
 * 开启加载动画
 */
export function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)',
  });
}

/**
 * 关闭加载动画
 */
export function endLoading() {
  loading.close();
}
