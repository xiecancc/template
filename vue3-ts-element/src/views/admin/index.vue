<template>
  <el-container>
    <el-aside :width="isCollapse ? '65px' : '200px'">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" :default-active="$route.path" text-color="#fff" :collapse="isCollapse" router>
        <template v-for="(item, index) in $router.options.routes[0].children">
          <el-menu-item v-if="!item.children" :index="item.path">
            <el-icon><Menu /></el-icon>
            <span>{{ item.meta?.title }}</span>
          </el-menu-item>
          <el-sub-menu v-else :index="String(index)">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>{{ item.meta?.title }}</span>
            </template>
            <el-menu-item v-for="sub in item.children" :index="sub.path">{{ item.meta?.title }}</el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-button @click="isCollapse = !isCollapse">
          <el-icon>
            <Expand v-if="isCollapse" />
            <Fold v-else />
          </el-icon>
        </el-button>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <el-breadcrumb>
          <el-breadcrumb-item v-for="router in $route.matched" :to="{ path: router.path }">{{ router.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isCollapse = ref(false);
const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.replace('/login');
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;

  .el-aside {
    background-color: #545c64;
    overflow-x: hidden;
    .el-menu--collapse {
      width: 65px;
    }
  }

  .el-header {
    // line-height: 60px;
    border-bottom: 1px solid #545c64;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .el-main {
    .el-breadcrumb {
      margin-bottom: 10px;
    }
  }
}
</style>
