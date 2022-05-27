<template>
  <ElTableColumn
    prop="id"
    :label="props.label"
    :min-width="props.minWidth">
    <template #default="{ row }">
      <slot :row="row"></slot>
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
  import { defineProps, withDefaults } from 'vue';

  interface IProps {
    label?: string;
    width?: number | string;
    minWidth?: number | string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    label: '',
    width: 'auto',
    minWidth: 0,
  });
</script>

<style scoped></style>
