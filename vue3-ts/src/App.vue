<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <section class="page">
          <component :is="Component" />
        </section>
      </keep-alive>
    </transition>
  </router-view>
</template>
