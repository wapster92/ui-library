// Оновной компонент
import UApp from '~/components/UApp.vue';

// Списки
import ApiListings from '~/components/listings/ApiListings.vue';
import TableListing from '~/components/listings/TableListing.vue';
import DynamicListing from '~/components/listings/DynamicListing.vue';

// Фильтры
import DateFilter from '~/components/listings/filters/DateFilter.vue';
import BooleanFilter from '~/components/listings/filters/BooleanFilter.vue';

// Ячейки таблицы
import TextColumn from '~/components/listings/columns/TextColumn.vue';
import DateColumn from '~/components/listings/columns/DateColumn.vue';
import BoolColumn from '~/components/listings/columns/BoolColumn.vue';
import TagColumn from '~/components/listings/columns/TagColumn.vue';
import SelectionColumn from '~/components/listings/columns/SelectionColumn.vue';
import SlotColumn from '~/components/listings/columns/SlotColumn.vue';

// Элементы форм
import UiInput from '~/components/forms/inputs/UiInput.vue';

const UI = {
  install(Vue, options) {
    Vue.component('UApp', UApp);
    Vue.component('TableListing', TableListing);
    Vue.component('DynamicListing', DynamicListing);
    Vue.component('DateFilter', DateFilter);
    Vue.component('BooleanFilter', BooleanFilter);
    Vue.component('ApiListings', ApiListings);
    Vue.component('TextColumn', TextColumn);
    Vue.component('DateColumn', DateColumn);
    Vue.component('BoolColumn', BoolColumn);
    Vue.component('TagColumn', TagColumn);
    Vue.component('SelectionColumn', SelectionColumn);
    Vue.component('SlotColumn', SlotColumn);
    Vue.component('UiInput', UiInput);
    Vue.provide('useRouter', options.useRouter);
    Vue.provide('useRoute', options.useRoute);
  },
};

export default UI;
