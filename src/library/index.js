import 'element-plus/theme-chalk/index.css';
import UApp from '~/components/UApp.vue';
import TableListing from '~/components/listings/TableListing.vue';

const UI = {
  install(Vue) {
    Vue.component('UApp', UApp);
    Vue.component('TableListing', TableListing);
  },
};

export default UI;
