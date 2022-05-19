<template>
  <div v-show="filterVisible">
    <ElDropdown ref="dropdown" trigger="click">
      <ElTag
        class="mx-1 filters-view__tag"
        size="large"
        closable
        @click="openFilterPopover"
        @close="closeFilter">
        <span class="filters-view__label">{{ props.label }}: </span>
        <span class="filters-view__value">{{
          filterValue ? props.trueText : props.falseText
        }}</span>
      </ElTag>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem @click="changeFilter(true)">{{
            props.trueText
          }}</ElDropdownItem>
          <ElDropdownItem @click="changeFilter(false)">{{
            props.falseText
          }}</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
  import {
    ElTag,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  } from 'element-plus';
  import {
    ref,
    withDefaults,
    defineProps,
    watch,
  } from 'vue';

  import { useQueryFilter } from "~/utils/query";

  export interface IProps {
    label: string;
    field: string;
    type: string;
    value?: boolean;
    trueText?: string;
    falseText?: string;
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
    trueText: 'Да',
    falseText: 'Нет',
  });

  const dropdown = ref();

  const filterValue = ref(false);
  const filterVisible = ref(false);

  const queryFilter = useQueryFilter();

  const getFilter = () => {
    const obj = {
      field: props.field,
      type: props.type,
    };
    const filterObj = queryFilter.getQueryFilters(obj);
    if (filterObj === null) {
      filterVisible.value = false;
      return;
    }
    if (!Array.isArray(filterObj)) {
      if (filterObj?.field === props.field) {
        filterVisible.value = true;
        if (filterObj?.value !== 'null') {
          filterValue.value = stringToBoolean(filterObj.value);
        } else {
          dropdown.value.handleOpen();
        }
      }
    }
  };

  watch(queryFilter.queryObj, () => {
    getFilter();
  });

  const stringToBoolean = (value: string) => {
    return value === 'true';
  };

  const changeFilter = (e: boolean) => {
    const filterObj = {
      field: props.field,
      type: props.type,
      value: e,
    };
    queryFilter.changeQueryFilter(filterObj);
  };

  const removeFilter = () => {
    const filterObj = {
      field: props.field,
      type: props.type,
    };
    queryFilter.removeQueryFilter(filterObj);
  };

  const closeFilter = () => {
    dropdown.value.handleClose();
    removeFilter();
  };

  const openFilterPopover = () => {
    dropdown.value.handleOpen();
  };
</script>

<style scoped></style>
