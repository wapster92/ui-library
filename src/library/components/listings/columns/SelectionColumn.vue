<template>
  <ElTableColumn
    type="selection"
    :width="props.width"
    :min-width="props.minWidth">
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
  import { defineProps, withDefaults } from 'vue';

  interface IProps {
    width?: number | string;
    minWidth?: number | string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    width: '15px',
    minWidth: 0,
  });
</script>

<style scoped></style>
