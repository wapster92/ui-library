<template>
  <div class="filters-view">

    <slot name="filters">
<!--      <ElPopover v-for="(filter, i) of filters" :key="i" placement="bottom" trigger="click">
        <template #reference>
          <ElTag
            class="mx-1 filters-view__tag"
            size="large"
            closable
            @close="removeFilter(filter)"
          >
            <span class="filters-view__label">{{ filter.label }}: </span>
            <span class="filters-view__value">{{ filter.value }}</span>
          </ElTag>
        </template>
        <template #default>
          test
        </template>
      </ElPopover>-->
    </slot>

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
          <ElDropdownItem v-for="(filter, i) of filtersList" :key="i" @click="addFilter(filter)">{{
            filter.label
          }}</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
  import {
    ElTag,
    ElIcon,
    ElPopover,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  } from 'element-plus';
  import { Plus } from '@element-plus/icons-vue';
  import { reactive } from 'vue';

  interface Filter {
    label: string;
    type: string;
    value: string|boolean|number;
  }
  const filters: Filter[] = reactive([

  ]);

  const filtersList = reactive([
    {
      label: 'Имя',
      type: 'like',
      value: ''
    },
    {
      label: 'Дата',
      type: 'date',
      value: '',
    },
    {
      label: 'Удален',
      type: 'bool',
      value: false,
    },
  ]);

  const removeFilter = (item: Filter) => {
    const idx = filters.findIndex(filter => filter.label === item.label);
    if (~idx) {
      filters.splice(idx, 1);
    }
  };

  const addFilter = (item: Filter) => {
    filters.push(item)
  }
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
