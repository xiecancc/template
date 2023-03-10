<template>
  <div class="card">
    <button type="button" @click="store.increment()">count is {{ double }}</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';

const store = useStore();
const { double } = storeToRefs(store);
</script>
