<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="60px" status-icon>
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
      <el-button @click="resetForm(ruleFormRef)"> 重置 </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { Login } from '@/api';

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  account: '',
  password: '',
});

const rules: FormRules = {
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 12, message: '密码应该为3-12个字符', trigger: 'blur' },
  ],
};

const submitForm = async (form: FormInstance | undefined) => {
  if (!form) return;
  await form.validate((valid, fields) => {
    if (valid) {
      Login(ruleForm).then((data) => {
        console.log(data);
      });
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (form: FormInstance | undefined) => {
  if (!form) return;
  form.resetFields();
};
</script>

<style lang="scss">
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #79bbff, transparent);
}
</style>
