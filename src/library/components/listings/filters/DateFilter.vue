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
          @close="removeFilter">
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
  import {
    ref,
    computed,
    withDefaults,
    defineProps,
    watch,
    onMounted,
  } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import {
    changeUrlFilter,
    getUrlFilters,
    removeUrlFilter,
  } from '~/utils/api-querys';

  interface IProps {
    label: string;
    field: string;
    type: string;
    value?: Date | string;
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
  });

  const date = ref<Date[] | Date>(null);
  const route = useRoute();
  const router = useRouter();

  const filterVisible = ref(false);
  const filterPopoverVisible = ref(false);

  onMounted(() => {
    if (route.query['filters']) {
      getFilter(route.query['filters']);
    }
  });

  watch(
    () => route.query['filters'],
    val => {
      getFilter(val);
    }
  );

  const dateString = computed(() => {
    if (Array.isArray(date.value) && date.value?.length) {
      const [first, last] = date.value;
      return `с ${DateTime.fromJSDate(first).toLocaleString(
        DateTime.DATE_MED
      )} по ${DateTime.fromJSDate(last).toLocaleString(DateTime.DATE_MED)}`;
    }
    if (!Array.isArray(date.value) && date.value) {
      return DateTime.fromJSDate(date.value).toLocaleString(DateTime.DATE_MED);
    }
    return 'Выберете дату';
  });

  const getFilter = query => {
    if (query) {
      const { field, value } = getUrlFilters(query, props.field, props.type);
      if (field) {
        filterVisible.value = true;
        if (value !== 'null') {
          date.value = datesIsoStringToDate(value);
        } else {
          filterPopoverVisible.value = true;
        }
      }
    } else {
      filterVisible.value = false;
    }
  };

  const changeFilter = (e: Date) => {
    const filterObj = {
      field: props.field,
      type: props.type,
      value: datesToIsoStrings(e),
    };
    const query = changeUrlFilter(route.query['filters'], filterObj);
    router.replace({ query: { filters: query } });
  };

  const removeFilter = () => {
    const query = removeUrlFilter(route.query['filters'], props.field);
    router.replace({ query: { filters: query } });
  };

  const datesToIsoStrings = (value: Date|Date[]) => {
    if (Array.isArray(value)) {
      return value.map(val => DateTime.fromJSDate(val).toISO())
    }
    return DateTime.fromJSDate(value).toISO();
  }

  const datesIsoStringToDate = (value: string) => {
    const values = value.split(',');
    if (values.length > 1) {
      return values.map(val => DateTime.fromISO(val).toJSDate())
    }
    return DateTime.fromISO(value).toJSDate();
  }

  const openFilterPopover = () => {
    filterPopoverVisible.value = true;
  };

  const closeFilterPopover = () => {
    filterPopoverVisible.value = false;
  };

  const datePickerVisibleChange = e => {
    if (!e) {
      filterPopoverVisible.value = false;
    }
  };
</script>

<style scoped></style>
