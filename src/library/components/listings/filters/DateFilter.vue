<template>
  <div v-if="false">
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
  import { ref, computed, withDefaults, defineProps } from "vue";

  interface IProps {
    label: string;
    field: string;
    type: string;
    value?: Date|string;
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
  });

  console.log(props)

  const date = ref<Date[] | Date>(null);

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

  const filterPopoverVisible = ref(true);

  const removeFilter = () => {
    console.log('remove');
  };

  const openFilterPopover = () => {
    console.log('click');
    filterPopoverVisible.value = true;
  };

  const closeFilterPopover = () => {
    console.log('close');
    filterPopoverVisible.value = false;
  };

  const datePickerVisibleChange = e => {
    if (!e) {
      filterPopoverVisible.value = false;
    }
  };
</script>

<style scoped></style>
