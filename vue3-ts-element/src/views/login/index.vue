<template>
  <el-form ref="formRef" :model="formModel" :rules="formRules" label-width="60px" status-icon>
    <el-form-item label="账号" prop="account">
      <el-input v-model="formModel.account" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formModel.password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm"> 登录 </el-button>
      <el-button @click="resetForm"> 重置 </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { loginApi } from '@/api/account';
import { ILoginParams } from '@/types/account';
import { useElForm } from '@/mixins/el-form';
import { useRouter } from 'vue-router';

const router = useRouter();
const { formRef, formModel, formRules, resetForm, submitForm } = useElForm<ILoginParams>(
  {
    account: 'admin',
    password: '123456',
  },
  {
    account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 12, message: '密码应该为6-12个字符', trigger: 'blur' },
    ],
  },
  (model) => {
    loginApi(model).then((data) => {
      console.log(data);
    });
  },
);
</script>

<style lang="scss">
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #79bbff, transparent);
}
</style>
