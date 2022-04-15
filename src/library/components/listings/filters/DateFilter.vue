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
          type="date"
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
  import { getUrlFilters, removeUrlFilter } from "~/utils/api-querys";

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
    if (route.query['api-listing']) {
      getUrlFilters(route.query['api-listing'], props.field, filterVisible, filterPopoverVisible);
    }
  });

  watch(() => route.query['api-listing'], (val) => {
    console.log('watch')
    getUrlFilters(val, props.field, filterVisible, filterPopoverVisible);
  });

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

  const removeFilter = () => {
    const query = removeUrlFilter(route.query['api-listing'], props.field);
    router.replace({query: {'api-listing': query}})
  };

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
