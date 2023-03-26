<template>
  <el-submenu v-if="menu.children" :index="menu.path">
    <template slot="title">
      <i :class="menu.meta.icon || 'el-icon-menu'"></i>
      <span v-if="!collapse">{{ menu.meta.title }}</span>
    </template>
    <my-menu v-for="(sub, index) in menu.children" :key="index" :menu="sub"></my-menu>
  </el-submenu>
  <el-menu-item v-else :index="menu.path">
    <template slot="title">
      <i :class="menu.meta.icon || 'el-icon-menu'"></i>
      <span v-if="!collapse">{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script>
import MyMenu from './menu.vue';

export default {
  name: 'MyMenu',
  props: ['menu', 'collapse'],
  components: {
    MyMenu,
  },
};
</script>

<style lang="scss" scoped></style>
