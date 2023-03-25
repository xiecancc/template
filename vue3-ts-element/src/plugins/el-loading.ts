import { ElLoading, LoadingParentElement } from 'element-plus';
import { ComponentPublicInstance, ComponentOptionsBase, Ref } from 'vue';

let loading: {
  close: any;
  setText?: (text: string) => void;
  removeElLoadingChild?: () => void;
  handleAfterLeave?: () => void;
  vm?: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
  $el?: HTMLElement;
  originalPosition?: Ref<string>;
  originalOverflow?: Ref<string>;
  visible?: Ref<boolean>;
  parent?: Ref<LoadingParentElement>;
  background?: Ref<string>;
  svg?: Ref<string>;
  svgViewBox?: Ref<string>;
  spinner?: Ref<string | boolean>;
  text?: Ref<string>;
  fullscreen?: Ref<boolean>;
  lock?: Ref<boolean>;
  customClass?: Ref<string>;
  target?: Ref<HTMLElement>;
  beforeClose?: Ref<(() => boolean) | undefined> | undefined;
  closed?: Ref<(() => void) | undefined> | undefined;
};

/**
 * 开启加载动画
 */
export function startLoading() {
  loading = ElLoading.service({
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
