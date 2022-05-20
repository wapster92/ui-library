<template>
  <ElTableColumn :prop="props.prop" :label="props.label" :sortable="props.sortable">
    <template #default>
      <slot></slot>
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
  import { defineProps, withDefaults } from "vue";
  interface IProps {
    prop: string,
    sortable?: boolean,
    label?: string,
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
  });
</script>

<style scoped></style>
