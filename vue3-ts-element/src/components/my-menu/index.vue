<template>
  <!-- 没有子菜单 -->
  <el-menu-item v-if="!item.children || item.children.length == 0" :index="item.path">
    <el-icon><Menu /></el-icon>
    <span>{{ item.meta?.title }} </span>
  </el-menu-item>
  <!-- 有子菜单 -->
  <el-sub-menu v-else :index="String(index)">
    <template #title>
      <el-icon><Menu /></el-icon>
      <span>{{ item.meta?.title }}</span>
    </template>
    <template v-for="(sub, i) in item.children">
      <my-menu :item="sub" :index="`${index}-${i}`"></my-menu>
    </template>
  </el-sub-menu>
</template>

<script lang="ts" setup>
import myMenu from './index.vue';
import { RouteRecordRaw } from 'vue-router';

defineProps<{
  item: RouteRecordRaw;
  index?: number | string;
}>();
</script>

<style lang="scss" scoped></style>
