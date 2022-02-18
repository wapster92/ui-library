import UApp from '~/components/UApp.vue';
import 'element-plus/theme-chalk/index.css';

const UI = {
  install(Vue) {
    Vue.component('UApp', UApp);
    /*Vue.use(createPinia())*/
  },
};

export default UI;
