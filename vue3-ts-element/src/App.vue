<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <div class="page">
          <component :is="Component" />
        </div>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.page {
  height: 100vh;
}

@for $i from 1 through 10 {
  .ellipsis-#{$i} {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: $i;
    -webkit-box-orient: vertical;
  }
}
</style>
