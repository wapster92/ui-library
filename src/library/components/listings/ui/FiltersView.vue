<template>
  <div class="filters-view">
    <slot name="filters"> </slot>

    <ElDropdown trigger="click">
      <div class="add-filter" :class="{ 'add-filter--more': filters.length }">
        <ElIcon>
          <Plus></Plus>
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
  import { reactive, useSlots, VNode } from 'vue';

  const slots = useSlots();
  console.log(slots.filters());
  const [filterSlot] = slots.filters();
  const childrensInFilterSlot = filterSlot.children;

  console.log(Array.isArray(childrensInFilterSlot));

  const defaultFilters = () => {
    if (Array.isArray(childrensInFilterSlot)) {
      return childrensInFilterSlot.map(({props: {field, label, type, value}}) => ({
        field,
        label,
        type,
        value: value ?? null,
      }));
    }
    return [];
  };

  console.log(defaultFilters());

  interface Filter {
    field: string;
    label: string;
    type: string;
    value: string | boolean | number;
  }
  const filters: Filter[] = reactive([]);

  const filtersList: Filter[] = reactive(defaultFilters());

  const removeFilter = (item: Filter) => {
    const idx = filters.findIndex(filter => filter.label === item.label);
    if (~idx) {
      filters.splice(idx, 1);
    }
  };

  const addFilter = (item: Filter) => {
    filters.push(item);
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
