// import 'element-plus/theme-chalk/index.css';
import UApp from '~/components/UApp.vue';
import TableListing from '~/components/listings/TableListing.vue';
import ListingsWrapper from '~/components/listings/ListingsWrapper.vue';
import DateFilter from '~/components/listings/filters/DateFilter.vue';

const UI = {
  install(Vue) {
    Vue.component('UApp', UApp);
    Vue.component('TableListing', TableListing);
    Vue.component('ListingsWrapper', ListingsWrapper);
    Vue.component('DateFilter', DateFilter);
  },
};

export default UI;
