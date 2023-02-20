<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
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
