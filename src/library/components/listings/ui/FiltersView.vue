<template>
  <div class="filters-view">
    <slot name="filters"> </slot>

    <ElDropdown v-if="filtersList.length" trigger="click">
      <div class="add-filter" :class="{ 'add-filter--more':  filtersList.length < defaultFilters.length}">
        <ElIcon>
          <PlusIcon></PlusIcon>
        </ElIcon>
        <span v-if="filtersList.length === defaultFilters.length" class="add-filter__text"
          >Добавить фильтр</span
        >
      </div>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem
            v-for="(filter, i) of filtersList"
            :key="i"
            @click="addFilter(filter)"
            >{{ filter.label }}</ElDropdownItem
          >
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
  import {
    ElIcon,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  } from 'element-plus';
  import { Plus as PlusIcon } from '@element-plus/icons-vue';
  import {computed, inject, onMounted, ref, useSlots, watch} from 'vue';
  import {useRoute, useRouter} from 'vue-router';
  import {addUrlFilter, getUrlFilters} from '~/utils/api-querys';
  export interface IFilter {
    field: string;
    label: string;
    type: string;
    value: string | boolean | number;
  }
  const slots = useSlots();
  const uRoute = inject('useRoute', useRoute)
  const uRouter = inject('useRouter', useRouter)

  const route = uRoute();
  const router = uRouter();

  const [filterSlot] = slots.filters();
  const childrenInFilterSlot = filterSlot.children;

  const filteringSlots = slots => {
    if (Array.isArray(slots)) {
      return slots.filter(
        slot => slot?.props?.field && slot?.props?.label && slot?.props?.type
      );
    }
    return [];
  };

  const defaultFilters = computed(() => {
    const currentSlots = filteringSlots(childrenInFilterSlot);
    if (Array.isArray(currentSlots) && currentSlots.length) {
      return currentSlots.map(filter => {
        return {
          field: filter.props.field,
          label: filter.props.label,
          type: filter.props.type,
          value: filter.props.value ?? null,
        };
      });
    }
    return [];
  });

  const filtersList = ref([]);
  filtersList.value = defaultFilters.value
  const addFilter = (filterObj: IFilter) => {
    const query = addUrlFilter(route?.query?.filters, filterObj);
    if (query) {
      router.replace({ query: { filters: query } });
    }
  };
  const getFilter = query => {
    if (query) {
      const activeFilters = getUrlFilters(query);
      console.log(activeFilters)
      if (activeFilters === null) {
        filtersList.value = defaultFilters.value;
      }
      if(Array.isArray(activeFilters)) {
        filtersList.value = defaultFilters.value.filter(el => {
          return !(activeFilters.some(activeFilter => el.field === activeFilter.field && el.type === activeFilter.type))
        })
      }
    } else {
      filtersList.value = defaultFilters.value;
    }
  };

  watch(
    () => route?.query?.filters,
    val => {
      getFilter(val);
    }
  );

  onMounted(() => {
    if (route?.query?.filters) {
      getFilter(route.query['filters']);
    }
  });

</script>

<style scoped lang="scss">
  .filters-view {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .add-filter {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--more {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }
    &__text {
      margin-left: 5px;
      display: inline-flex;
    }
  }
</style>
