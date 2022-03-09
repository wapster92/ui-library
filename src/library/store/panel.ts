import { defineStore } from 'pinia';

export interface MenuStore {
  isState: boolean;
  changeState(): void;
}


export const useMenuStore = defineStore('menu', {
  state: () => {
    return <MenuStore>{
      isState: false,
    };
  },
  actions: {
    changeState() {
      this.isState = !this.isState;
    },
  },
});
