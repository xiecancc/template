import { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';

/**
 * 混入表单常用功能
 * @param model 数据绑定
 * @param rules 验证规则
 * @param submit 提交表单
 * @returns
 */
export const useElForm = <T extends object>(model: T, rules?: FormRules, submit?: (model: T) => void) => {
  /**
   *
   */
  const formRef = ref<FormInstance>();
  /**
   *
   */
  const formModel = reactive(model);
  /**
   *
   */
  const formRules = rules;

  /**
   *
   * @returns
   */
  const submitForm = () => {
    if (!formRef) return;
    formRef.value?.validate((valid) => {
      if (valid && submit) {
        submit(model);
      }
    });
  };

  const resetForm = () => {
    if (!formRef) return;
    formRef.value?.resetFields();
  };

  return {
    formRef,
    formModel,
    formRules,
    submitForm,
    resetForm,
  };
};
