import { defineStore } from 'pinia';

export interface MenuStore {
  isState: boolean;
  changeState(): void;
}

let state = false;
if (window !== undefined) {
  state = JSON.parse(localStorage.getItem('stateMenu')) ?? false;
}

export const useMenuStore = defineStore('menu', {
  state: () => {
    return <MenuStore>{
      isState: state,
    };
  },
  actions: {
    changeState() {
      this.isState = !this.isState;
      localStorage.setItem('stateMenu', this.isState);
    },
  },
});
