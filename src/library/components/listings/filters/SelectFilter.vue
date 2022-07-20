<template>
  <div v-show="filterVisible">
    <ElPopover
      v-model:visible="filterPopoverVisible"
      placement="bottom"
      width="auto"
      trigger="click"
      @hide="closeFilterPopover">
      <template #reference>
        <ElTag
          class="mx-1 filters-view__tag"
          size="large"
          closable
          @click="openFilterPopover"
          @close="closeFilter">
          <span class="filters-view__label">{{ label }}: </span>
          <span class="filters-view__value">Значение</span>
        </ElTag>
      </template>
      <template #default> </template>
    </ElPopover>
  </div>
</template>

<script setup lang="ts">
  import { ElPopover, ElTag, ElSelect, ElOption } from 'element-plus';
  import { ref, withDefaults, defineProps, computed, watch } from 'vue';
  import { useQueryFilter } from '~/utils/query';

  type tValue =
    | boolean
    | string
    | string[]
    | number
    | number[]
    | object
    | object[];

  interface IProps {
    label: string;
    field: string;
    operator: string;
    value?: tValue;
    options?: object[];
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
  });

  const option = ref<tValue>(null);
  const filterVisible = ref(false);
  const filterPopoverVisible = ref(false);

  const queryFilter = useQueryFilter();

  const getFilter = () => {
    const obj = {
      field: props.field,
      operator: props.operator,
    };
    const filterObj = queryFilter.getQueryFilters(obj);
    if (filterObj === null) {
      filterVisible.value = false;
      return;
    }
    if (!Array.isArray(filterObj)) {
      if (filterObj?.field === props.field) {
        filterVisible.value = true;
        if (filterObj?.value !== null) {
          option.value = filterObj.value;
        } else {
          option.value = null;
          filterPopoverVisible.value = true;
        }
      }
    }
  };

  watch(queryFilter.queryObj, () => {
    getFilter();
  });

  const changeFilter = e => {
    const filterObj = {
      field: props.field,
      operator: props.operator,
      value: e,
    };
    queryFilter.changeQueryFilter(filterObj);
  };

  const removeFilter = () => {
    const filterObj = {
      field: props.field,
      operator: props.operator,
    };
    queryFilter.removeQueryFilter(filterObj);
  };

  const closeFilter = () => {
    removeFilter();
    filterPopoverVisible.value = false;
  };

  const openFilterPopover = () => {
    filterPopoverVisible.value = true;
  };

  const closeFilterPopover = () => {
    if (filterPopoverVisible.value) {
      filterPopoverVisible.value = false;
    }
  };
</script>

<style scoped></style>
