<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100vh;
  width: 100vw;
}

#app > div {
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
