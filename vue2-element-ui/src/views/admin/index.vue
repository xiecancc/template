<template>
  <el-container>
    <el-aside :width="(collapse ? 64 : 200) + 'px'">
      <el-menu router background-color="#545c64" text-color="#fff" :default-active="active" active-text-color="#ffd04b" :collapse="collapse">
        <my-menu v-for="(menu, index) in menus" :key="index" :menu="menu" :collapse="collapse"></my-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-button @click="collapse = !collapse" :icon="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></el-button>
        <el-button @click="logout">退出</el-button>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(route, index) in $route.matched" :key="index" :to="route.path">{{ route.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import MyMenu from './menu.vue';

export default {
  data() {
    return {
      collapse: false,
    };
  },
  computed: {
    menus() {
      return this.$router.options.routes.find((item) => item.path == '/admin').children;
    },
    active() {
      return this.$route.fullPath;
    },
  },
  components: {
    MyMenu,
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.replace('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-aside {
    background-color: #545c64;
    overflow-y: hidden;
  }

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-main {
    background-color: #e9eef3;
  }
}
</style>
