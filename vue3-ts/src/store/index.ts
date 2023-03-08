import { defineStore } from 'pinia';

export const useStore = defineStore('index-store', {
  persist: true,
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
