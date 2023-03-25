import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css';

interface MyMessageParams {
  type?: 'success' | 'warning' | 'error' | 'info';
  grouping?: true;
  showClose?: true;
  message?: string;
}

export const $message = (option: MyMessageParams) => {
  ElMessage({
    type: 'info',
    grouping: false,
    showClose: true,
    ...option,
  });
};
