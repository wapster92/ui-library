<template>
  <div class="listings">
    <div class="listings__header">
      <div class="listings__views">
        <ul class="views">
          <li class="views__item">
            <ElIcon :size="20">
              <Calendar></Calendar>
            </ElIcon>
          </li>
          <li class="views__item">
            <ElIcon :size="20">
              <Kanban />
            </ElIcon>
          </li>
          <li class="views__item">
            <ElIcon :size="20">
              <List></List>
            </ElIcon>
          </li>
        </ul>
      </div>
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
        <ElPopover placement="bottom" trigger="click">
          <template #reference>
            <div class="add-filter">
              <ElIcon>
                <Plus></Plus>
              </ElIcon>
              <span class="add-filter__text">Добавить фильтр</span>
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
    </div>
    <slot name="listings"></slot>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { ElInput, ElTag, ElIcon, ElPopover } from 'element-plus';
  import { Search, Plus } from '@element-plus/icons-vue';
  import Calendar from '~/assets/icons/calendar.svg';
  import Kanban from '~/assets/icons/kanban.svg';
  import List from '~/assets/icons/list.svg';

  const input = ref<string>('');
</script>

<style lang="scss">
  .listings {
    &__header {
      display: grid;
      height: 42px;
      grid-template-columns: 128px 220px 1fr auto;
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
  .views {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    justify-content: center;
    align-items: center;
    &__item {
      padding: 5px;
      cursor: pointer;
      border-radius: var(--el-border-radius-base);
      background: transparent;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover,
      &:focus {
        background: var(--el-color-primary-light-8);
      }
    }
  }
  .add-filter {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &__text {
      margin-left: 5px;
      display: inline-flex;
    }
  }
</style>
