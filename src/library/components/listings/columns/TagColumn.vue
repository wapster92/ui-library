<template>
  <ElTableColumn
    :prop="props.prop"
    :label="props.label"
    :sortable="props.sortable"
    :min-width="props.minWidth">
    <template #default="{ row, column }">
      <ElTag
        v-if="getByPath(row, column.property)"
        :size="props.size"
        :color="getByPath(row, column.property)[props.colorProperty]"
        >
        <span :style="{ color: props.colorText }">{{
          getByPath(row, column.property)[props.textProperty]
        }}</span>
      </ElTag>
      <span v-else>-</span>
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn, ElTag } from 'element-plus';
  import { defineProps, withDefaults } from 'vue';
  import { getByPath } from '~/utils/utils';

  interface IProps {
    prop: string;
    sortable?: boolean;
    label?: string;
    width?: number | string;
    minWidth?: number | string;
    textProperty?: string;
    colorProperty?: string;
    colorTag?: string;
    colorText?: string;
    size?: 'large' | 'default' | 'small';
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
    width: 'auto',
    minWidth: 0,
    textProperty: 'name',
    colorProperty: 'color',
    colorTag: '',
    colorText: 'var(--el-color-white)',
    size: 'default',
  });
</script>

<style scoped></style>
