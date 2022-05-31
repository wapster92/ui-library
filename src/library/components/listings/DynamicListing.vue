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
        clearable
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
    <slot name="listings" :table-data="props.tableData"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, watch, withDefaults } from "vue";
  import { ElInput, ElIcon } from 'element-plus';
  import { Search } from '@element-plus/icons-vue';
  import Calendar from '~/assets/icons/calendar.svg';
  import Kanban from '~/assets/icons/kanban.svg';
  import List from '~/assets/icons/list.svg';
  import FiltersView from '~/components/listings/ui/FiltersView.vue';
  import { useQueryFilter } from '~/utils/query';

  interface IProps {
    tableData?: object[] | null;
    multipleSearch?: string[];
  }
  const props = withDefaults(defineProps<IProps>(), {
    tableData: null,
    multipleSearch: null,
  });

  const queryFilter = useQueryFilter();
  const getInitValue = () => {
    let filters = [];

    props.multipleSearch.forEach(el => {
      const candidate = queryFilter.getQueryFilters({
        field: el,
        operator: '$cont',
      });
      if (candidate) {
        filters.push(candidate);
      }
    });

    if (filters.length === props.multipleSearch.length) {
      return filters.every(el => el.value === filters[0].value)
        ? filters[0].value
        : '';
    }
    return ''
  };
  const input = ref(getInitValue());
  const addOrRemoveFilters = () => {
    if (props.multipleSearch.length) {
      if(input.value.length >= 3) {
        props.multipleSearch.forEach(prop => {
          const candidate = queryFilter.getQueryFilters({
            field: prop,
            operator: '$cont',
          });
          if (candidate) {
            queryFilter.changeQueryFilter({
              field: prop,
              operator: '$cont',
              value: input.value,
            })
          } else {
            queryFilter.addQueryFilter({
              field: prop,
              operator: '$cont',
              value: input.value,
            });
          }
        });
      } else {
        props.multipleSearch.forEach(el => {
          const candidate = queryFilter.getQueryFilters({
            field: el,
            operator: '$cont',
          });
          console.log(candidate)
          if (candidate) {
            queryFilter.removeQueryFilter(candidate)
          }
        });
      }
    }
  };
  onMounted(() => {
    addOrRemoveFilters();
  })
  watch(input, () => {
    console.log('watch')
    addOrRemoveFilters()
  })
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
    gap: 5px;
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
