<template>
  <div class="filters-view">
    <ElTag class="mx-1 filters-view__tag" size="large" closable v-for="(filter, i) of filters" :key="i" @close="removeFilter(filter)">
      <span class="filters-view__label">{{filter.label}} :</span>
      <span class="filters-view__value">{{filter.value}}</span>
    </ElTag>
    <ElPopover placement="bottom" trigger="click">
      <template #reference>
        <div class="add-filter" :class="{'add-filter--more':filters.length}">
          <ElIcon>
            <Plus></Plus>
          </ElIcon>
          <span v-if="!filters.length" class="add-filter__text">Добавить фильтр</span>
        </div>
      </template>
      <ElPopover placement="bottom" trigger="click">
        <template #reference>
          <div class="add-filter">
            <ElIcon>
              <Plus></Plus>
            </ElIcon>
            <span class="add-filter__text">Добавить фильтр</span>
          </div>
        </template>
        <span>Test df dfsa asd fdasf sa asd dsa sa sa sa</span>
      </ElPopover>
    </ElPopover>
  </div>
</template>

<script setup lang="ts">
import { ElTag, ElIcon, ElPopover } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import {reactive} from "vue";

interface Filter {
  label: string,
  value: string
}
const filters:Filter[] = reactive([
  {
    label: 'Имя',
    value: 'Тимур'
  },
  {
    label: 'Удален',
    value: 'Нет'
  },
])

const removeFilter = (item:Filter) => {
  console.log(item)
  const idx = filters.findIndex(filter => filter.label === item.label);
  console.log(idx)
  if (~idx) {
    filters.splice(idx, 1)
  }
}
</script>

<style scoped lang="scss">
.filters-view {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  &__tag {
    margin-right: 6px;
  }
}
.add-filter {
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &--more {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
  &__text {
    margin-left: 5px;
    display: inline-flex;
  }
}
</style>