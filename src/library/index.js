// import 'element-plus/theme-chalk/index.css';

// Оновной компонент
import UApp from '~/components/UApp.vue';

// Списки
import ApiListings from '~/components/listings/ApiListings.vue';
import TableListing from '~/components/listings/TableListing.vue';
import ListingsWrapper from '~/components/listings/ListingsWrapper.vue';

// Фильтры
import DateFilter from '~/components/listings/filters/DateFilter.vue';

const UI = {
  install(Vue) {
    Vue.component('UApp', UApp);
    Vue.component('TableListing', TableListing);
    Vue.component('ListingsWrapper', ListingsWrapper);
    Vue.component('DateFilter', DateFilter);
    Vue.component('ApiListings', ApiListings);
  },
};

export default UI;
