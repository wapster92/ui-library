

// Оновной компонент
import UApp from '~/components/UApp.vue';

// Списки
import ApiListings from '~/components/listings/ApiListings.vue';
import TableListing from '~/components/listings/TableListing.vue';
import DynamicListing from '~/components/listings/DynamicListing.vue';

// Фильтры
import DateFilter from '~/components/listings/filters/DateFilter.vue';
import BooleanFilter from '~/components/listings/filters/BooleanFilter.vue';

//Ячейки таблицы
import TableColumn from '~/components/listings/columns/TableColumn.vue'
import DateColumn from '~/components/listings/columns/DateColumn.vue'

const UI = {
  install(Vue, options) {
    Vue.component('UApp', UApp);
    Vue.component('TableListing', TableListing);
    Vue.component('DynamicListing', DynamicListing);
    Vue.component('DateFilter', DateFilter);
    Vue.component('BooleanFilter', BooleanFilter);
    Vue.component('ApiListings', ApiListings);
    Vue.component('TableColumn', TableColumn);
    Vue.provide('useRouter', options.useRouter)
    Vue.provide('useRoute', options.useRoute)
  },
};

export default UI;