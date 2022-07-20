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
          <span class="filters-view__label">Дата: </span>
          <span class="filters-view__value">{{ dateString }}</span>
        </ElTag>
      </template>
      <template #default>
        <ElDatePicker
          v-model="date"
          type="daterange"
          @change="changeFilter"
          @visible-change="datePickerVisibleChange" />
      </template>
    </ElPopover>
  </div>
</template>

<script setup lang="ts">
  import { DateTime } from 'luxon';
  import { ElPopover, ElTag, ElDatePicker } from 'element-plus';
  import { ref, computed, withDefaults, defineProps, watch } from 'vue';
  import { useQueryFilter } from '~/utils/query';

  interface IProps {
    label: string;
    field: string;
    operator: string;
    value?: Date | string;
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
  });

  const date = ref<Date[] | Date>(null);
  const filterVisible = ref(false);
  const filterPopoverVisible = ref(false);

  const dateString = computed(() => {
    if (Array.isArray(date.value) && date.value?.length) {
      const [first, last] = date.value;
      console.log(first);
      return `с ${DateTime.fromJSDate(first).toLocaleString(
        DateTime.DATE_MED
      )} по ${DateTime.fromJSDate(last).toLocaleString(DateTime.DATE_MED)}`;
    }
    if (!Array.isArray(date.value) && date.value) {
      return DateTime.fromJSDate(date.value).toLocaleString(DateTime.DATE_MED);
    }
    return 'Выберете дату';
  });

  const queryFilter = useQueryFilter();

  const datesIsoStringToDate = (value: string | string[] | boolean) => {
    let values = [];
    if (Array.isArray(value)) {
      values = value;
    }
    if (typeof value === 'string') {
      values = value.split(',');
    }
    if (values.length > 1) {
      return values.map(val => DateTime.fromISO(val).toJSDate());
    }
    return DateTime.fromISO(value[0]).toJSDate();
  };

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
          date.value = datesIsoStringToDate(filterObj.value);
        } else {
          date.value = null;
          filterPopoverVisible.value = true;
        }
      }
    }
  };

  watch(queryFilter.queryObj, () => {
    getFilter();
  });

  const datesToIsoStrings = (value: Date | Date[]) => {
    if (Array.isArray(value)) {
      return value.map(val => DateTime.fromJSDate(val).toISO());
    }
    return DateTime.fromJSDate(value).toISO();
  };

  const changeFilter = e => {
    const filterObj = {
      field: props.field,
      operator: props.operator,
      value: datesToIsoStrings(e),
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

  const datePickerVisibleChange = e => {
    if (!e) {
      filterPopoverVisible.value = false;
    }
  };
</script>

<style scoped></style>
