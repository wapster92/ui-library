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
  import { Plus as PlusIcon } from '@element-plus/icons-vue';
  import { reactive, useSlots } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { addUrlFilter } from '~/utils/api-querys';
  export interface IFilter {
    field: string;
    label: string;
    type: string;
    value: string | boolean | number;
  }
  const slots = useSlots();
  const router = useRouter();
  const route = useRoute();

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

  const defaultFilters = () => {
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
  };

  const filters: IFilter[] = reactive([]);

  const filtersList: IFilter[] = reactive(defaultFilters());
  const addFilter = (filterObj: IFilter) => {
    const query = addUrlFilter(route?.query?.filters, filterObj);
    if (query) {
      router.replace({ query: { filters: query } });
    }
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
