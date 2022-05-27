<template>
  <ElTableColumn
    :prop="props.prop"
    :label="props.label"
    :sortable="props.sortable"
    :min-width="props.minWidth">
    <template #default="{ row, column }">
      {{ formatTime(getByPath(row, column.property)) }}
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
  import { DateTime } from 'luxon';
  import { defineProps, withDefaults } from 'vue';
  import { getByPath } from '~/utils/utils';

  interface IProps {
    prop: string;
    sortable?: boolean;
    label?: string;
    format?: string;
    width?: number | string;
    minWidth?: number | string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
    format: 'dd-MM-yyyy',
    width: 'auto',
    minWidth: 0,
  });

  const formatTime = time => {
    const dateParsed = new Date(Date.parse(time));
    if (dateParsed.toISOString() === time) {
      // является ли время формата ISO
      return DateTime.fromISO(time).toFormat(props.format);
    }
    return time;
  };
</script>

<style scoped></style>
