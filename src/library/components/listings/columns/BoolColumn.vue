<template>
  <ElTableColumn
    class-name="bool-column"
    :prop="props.prop"
    :label="props.label"
    :sortable="props.sortable">
    <template #default="{ row, column }">
      <ElIcon v-if="props.isIcon" :size="props.sizeIcon">
        <CircleCheck
          v-if="isPositive(row, column)"
          :style="{ color: props.trueIconColor }" />
        <CircleClose v-else :style="{ color: props.falseIconColor }" />
      </ElIcon>
      <template v-else>
        <span v-if="isPositive(row, column)">{{ props.trueText }}</span>
        <span v-else>{{ props.falseText }}</span>
      </template>
    </template>
  </ElTableColumn>
</template>

<script setup lang="ts">
  import { ElTableColumn, ElIcon } from 'element-plus';
  import { CircleCheck, CircleClose } from '@element-plus/icons-vue';
  import { getByPath } from '~/utils/utils';
  import { defineProps, withDefaults } from 'vue';

  interface IProps {
    prop: string;
    sortable?: boolean;
    label?: string;
    isIcon?: boolean;
    sizeIcon?: number | string;
    trueIconColor?: string;
    falseIconColor?: string;
    width?: number | string;
    trueText?: string;
    falseText?: string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    sortable: false,
    label: '',
    isIcon: false,
    sizeIcon: 18,
    trueIconColor: 'var(--el-color-success)',
    falseIconColor: 'var(--el-color-error)',
    width: 'auto',
    trueText: 'Да',
    falseText: 'Нет',
  });

  const isPositive = (row, column) => getByPath(row, column.property);
</script>

<style lang="scss">
  .bool-column {
    .cell {
      display: flex;
      align-items: center;
    }
  }
</style>
