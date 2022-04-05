<template>
  <div>
    <ElPopover placement="bottom" width="auto" trigger="click">
      <template #reference>
        <ElTag
          class="mx-1 filters-view__tag"
          size="large"
          closable
          @close="removeFilter"
        >
          <span class="filters-view__label">Дата: </span>
          <span class="filters-view__value">значение</span>
        </ElTag>
      </template>
      <template #default>
        <ElDatePicker type="datetimerange"/>
      </template>
    </ElPopover>
  </div>
</template>

<script setup lang="ts">
import {ElPopover, ElTag, ElDatePicker} from "element-plus";

const removeFilter = () => {
  console.log('remove')
}
</script>

<style scoped>

</style>