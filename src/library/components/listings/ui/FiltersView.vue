<template>
  <div class="filters-view">
    <slot name="filters"> </slot>

    <ElDropdown trigger="click">
      <div class="add-filter" :class="{ 'add-filter--more': filters.length }">
        <ElIcon>
          <PlusIcon></PlusIcon>
        </ElIcon>
        <span v-if="!filters.length" class="add-filter__text"
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
  import { Plus } from '@element-plus/icons-vue';
  const PlusIcon = Plus;
  import { reactive, useSlots } from 'vue';
  import { stringify, parse } from 'qs';
  import { useRouter } from 'vue-router';
  export interface IFilter {
    field: string;
    label: string;
    type: string;
    value: string | boolean | number;
  }
  const slots = useSlots();
  const router = useRouter();

  const [filterSlot] = slots.filters();
  const childrenInFilterSlot = filterSlot.children;

  const defaultFilters = () => {
    if (Array.isArray(childrenInFilterSlot)) {
      console.log(childrenInFilterSlot);
      return childrenInFilterSlot.map(filter => ({
        field: filter['props'].field,
        label: filter['props'].label,
        type: filter['props'].type,
        value: filter['props'].value ?? null,
      }));
    }
    return [];
  };

  const filters: IFilter[] = reactive([]);

  const filtersList: IFilter[] = reactive(defaultFilters());

  /*const removeFilter = (item: IFilter) => {
    const idx = filters.findIndex(filter => filter.label === item.label);
    if (~idx) {
      filters.splice(idx, 1);
    }
  };*/

  const addFilter = (filterObj: IFilter) => {
    const filter = {
      filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`],
    };
    const qs = stringify(filter, { encode: true, arrayFormat: 'repeat' });
    router.replace({ query: { 'api-listing': qs } });
    console.log(parse(qs));
  };
</script>

<style scoped lang="scss">
  .filters-view {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    &__tag {
      margin-right: 6px;
    }
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
