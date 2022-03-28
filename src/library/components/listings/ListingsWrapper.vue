<template>
  <div class="listings">
    <div class="listings__header">
      <div></div>
      <ElInput
        v-model="input"
        class="w-50 m-2"
        placeholder="Поиск"
        :suffix-icon="Search"
      />
      <div class="listings__filters">
        <ElTag class="mx-1" size="large" closable>Large</ElTag>
        <ElTag class="mx-1" size="large" closable>Large</ElTag>
        <ElTag class="mx-1" size="large" closable>Large</ElTag>
      </div>
    </div>
    <slot name="listings"></slot>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {ElInput, ElTag} from "element-plus";
import {Search} from "@element-plus/icons-vue";

const input = ref<string>('');
</script>

<style lang="scss">
.listings {
  &__header {
    display: grid;
    height: 42px;
    grid-template-columns: 20px 220px 1fr auto;
    border: 1px solid var(--el-border-color);
    background: var(--el-color-white);
    .el-input {
      height: 100%;
      &__inner {
        height: 100%;
        border-radius: 0;
        box-shadow: none;
        border-right: 1px solid var(--el-border-color);
        border-left: 1px solid var(--el-border-color);
      }
    }

  }
  &__filters {
    display: flex;
    align-items: center;
    padding: 0 17px;
  }
}
</style>