<template>
  <div v-show="filterVisible">
    <ElDropdown ref="dropdown" trigger="click">
      <ElTag
        class="mx-1 filters-view__tag"
        size="large"
        closable
        @click="openFilterPopover"
        @close="closeFilter">
        <span class="filters-view__label">Удален: </span>
        <span class="filters-view__value">Нет</span>
      </ElTag>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>Да</ElDropdownItem>
          <ElDropdownItem>Нет</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>


<!--    <ElPopover
      v-model:visible="filterPopoverVisible"
      placement="bottom"
      width="auto"
      trigger="click"
      @hide="closeFilterPopover">
      <template #reference>
        <ElTag
          class="mx-1 filters-view__tag"
          size="large"
          closable
          @click="openFilterPopover"
          @close="closeFilter">
          <span class="filters-view__label">Удален: </span>
          <span class="filters-view__value">{{ dateString }}</span>
        </ElTag>
      </template>
      <template #default>

      </template>
    </ElPopover>-->
  </div>
</template>

<script setup lang="ts">
  import { DateTime } from 'luxon';
  import { ElTag, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
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
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: null,
  });

  const dropdown = ref();

  const date = ref<Date[] | Date>(null);
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

  const dateString = computed(() => {
    return 'Выберете дату';
  });

  const getFilter = query => {
    if (query) {
      const filterObj = getUrlFilters(query, props.field, props.type);
      if (filterObj?.field === props.field) {
        filterVisible.value = true;
        if (filterObj?.value !== 'null') {
          date.value = datesIsoStringToDate(filterObj.value);
        } else {
          dropdown.value.handleOpen();
        }
      }
    } else {
      filterVisible.value = false;
    }
  };

  const changeFilter = (e: Date) => {
    const filterObj = {
      field: props.field,
      type: props.type,
      value: datesToIsoStrings(e),
    };
    const query = changeUrlFilter(route.query['filters'], filterObj);
    router.replace({ query: { filters: query } });
  };

  const removeFilter = () => {
    const query = removeUrlFilter(route.query['filters'], props.field);
    router.replace({ query: { filters: query } });
  };

  const datesToIsoStrings = (value: Date | Date[]) => {
    if (Array.isArray(value)) {
      return value.map(val => DateTime.fromJSDate(val).toISO());
    }
    return DateTime.fromJSDate(value).toISO();
  };

  const datesIsoStringToDate = (value: string) => {
    const values = value.split(',');
    if (values.length > 1) {
      return values.map(val => DateTime.fromISO(val).toJSDate());
    }
    return DateTime.fromISO(value).toJSDate();
  };

  const closeFilter = () =>  {
    removeFilter();
    dropdown.value.handleClose();
  };

  const openFilterPopover = () => {
    dropdown.value.handleOpen();
  };

  const closeFilterPopover = () => {
    dropdown.value.handleClose();
  };

  const datePickerVisibleChange = e => {
    if (!e) {
      dropdown.value.handleClose();
    }
  };
</script>

<style scoped></style>
