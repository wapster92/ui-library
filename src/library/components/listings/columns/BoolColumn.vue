<template>
  <ElTableColumn
    :prop="props.prop"
    :label="props.label"
    :sortable="props.sortable">
    <template #default="{row, column}">
      {{row[column.property]}}
      <ElIcon>
        <CircleCheck />
      </ElIcon>
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn, ElIcon } from 'element-plus';
  import { CircleCheck } from "@element-plus/icons-vue";
  import { defineProps, withDefaults } from 'vue';
  interface IProps {
    prop: string;
    sortable?: boolean;
    label?: string;
    isIcon?: boolean;
    width?: number|string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
    isIcon: false,
    width: 'auto'
  });
</script>

<style scoped></style>
