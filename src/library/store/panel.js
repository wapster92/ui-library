import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      isState: false,
    }
  },
  actions: {
    changeState() {
      this.isState = !this.isState
    },
  },
})
