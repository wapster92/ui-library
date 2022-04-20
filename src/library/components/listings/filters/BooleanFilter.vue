<template>
  <div v-show="filterVisible">
    <ElDropdown ref="dropdown" trigger="click">
      <ElTag
        class="mx-1 filters-view__tag"
        size="large"
        closable
        @click="openFilterPopover"
        @close="closeFilter">
        <span class="filters-view__label">{{ props.label }}: </span>
        <span class="filters-view__value">{{
          filterValue ? props.trueText : props.falseText
        }}</span>
      </ElTag>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem @click="changeFilter(true)">{{props.trueText}}</ElDropdownItem>
          <ElDropdownItem @click="changeFilter(false)">{{props.falseText}}</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
  import {
    ElTag,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  } from 'element-plus';
  import {
    ref,
    computed,
    withDefaults,
    defineProps,
    watch,
    onMounted,
  } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import {
    changeUrlFilter,
    getUrlFilters,
    removeUrlFilter,
  } from '~/utils/api-querys';

  interface IProps {
    label: string;
    field: string;
    type: string;
    value?: boolean;
    trueText?: string;
    falseText?: string;
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
    trueText: 'Да',
    falseText: 'Нет',
  });

  const dropdown = ref();

  const filterValue = ref(false);
  const route = useRoute();
  const router = useRouter();

  const filterVisible = ref(false);

  onMounted(() => {
    if (route.query['filters']) {
      getFilter(route.query['filters']);
    }
  });

  watch(
    () => route.query['filters'],
    val => {
      getFilter(val);
    }
  );

  const getFilter = query => {
    if (query) {
      const filterObj = getUrlFilters(query, props.field, props.type);
      if (filterObj?.field === props.field) {
        filterVisible.value = true;
        if (filterObj?.value !== 'null') {
          filterValue.value = stringToBoolean(filterObj.value);
        } else {
          dropdown.value.handleOpen();
        }
      }
    } else {
      filterVisible.value = false;
    }
  };

  const stringToBoolean = (value: string) => {
    if (value === 'true') {
      return true;
    }
    return false;
  }

  const changeFilter = (e: boolean) => {
    const filterObj = {
      field: props.field,
      type: props.type,
      value: e,
    };
    const query = changeUrlFilter(route.query['filters'], filterObj);
    router.replace({ query: { filters: query } });
  };

  const removeFilter = () => {
    const query = removeUrlFilter(route.query['filters'], props.field);
    router.replace({ query: { filters: query } });
  };

  const closeFilter = () => {
    dropdown.value.handleClose();
    removeFilter();
  };

  const openFilterPopover = () => {
    dropdown.value.handleOpen();
  };
</script>

<style scoped></style>
