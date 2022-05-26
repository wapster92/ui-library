<template>
  <ElTableColumn
    :prop="props.prop"
    :label="props.label"
    :sortable="props.sortable"
    :min-width="props.minWidth"
  >
    <template #default="{row, column}">
      {{row[column.property]}}
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
  import { defineProps, withDefaults } from 'vue';
  interface IProps {
    prop: string;
    sortable?: boolean;
    label?: string;
    width?: number|string;
    minWidth?: number|string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
    width: 'auto',
    minWidth: 0,
  });
</script>

<style scoped></style>
