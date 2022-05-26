<template>
  <ElTableColumn :prop="props.prop" :label="props.label">
    <template #default="{ row, column }">
      {{ formatTime(row[column.property]) }}
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
  import { DateTime } from 'luxon';
  import { defineProps, withDefaults } from 'vue';

  interface IProps {
    prop: string;
    sortable?: boolean;
    label?: string;
    format?: string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
    format: 'dd-MM-yyyy',
  });

  const formatTime = time => {
    const dateParsed = new Date(Date.parse(time));
    if (dateParsed.toISOString() === time) { // является ли время формата ISO
      return DateTime.fromISO(time).toFormat(props.format);
    }
    return time;
  };
</script>

<style scoped></style>
