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
        :suffix-icon="Search" />
      <div class="listings__filters">
        <FiltersView>
          <template #filters>
            <slot name="filters"></slot>
          </template>
        </FiltersView>
      </div>
    </div>
    <slot name="listings" :tableData="props.tableData"></slot>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref, withDefaults} from 'vue';
  import { ElInput, ElIcon } from 'element-plus';
  import { Search } from '@element-plus/icons-vue';
  import Calendar from '~/assets/icons/calendar.svg';
  import Kanban from '~/assets/icons/kanban.svg';
  import List from '~/assets/icons/list.svg';
  import FiltersView from '~/components/listings/ui/FiltersView.vue';
const input = ref('')
interface IProps {
  tableData?: object[],
}
const props = withDefaults(defineProps<IProps>(), {

});
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
        &__wrapper {
          border-radius: 0;
          box-shadow: none;
          border-right: 1px solid var(--el-border-color);
          border-left: 1px solid var(--el-border-color);
        }
        &__inner {
          height: 100%;
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
</style>
