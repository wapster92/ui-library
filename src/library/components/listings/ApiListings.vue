<template>
  <slot :table-data="tableData"></slot>
</template>

<script setup lang="ts">
  import {
    defineProps,
    inject,
    onMounted,
    ref,
    watch,
    withDefaults,
  } from 'vue';
  import qs from 'qs';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  const uRoute = inject('useRoute', useRoute);
  const uRouter = inject('useRouter', useRouter);

  export interface IProps {
    limit?: number;
  }

  const route = uRoute();
  const router = uRouter();
  const props = withDefaults(defineProps<IProps>(), {
    limit: 50,
  });

  const tableData = ref([]);

  const query = ref('');

  const generateQS = () => {
    let queryObj = {
      filter: [],
      limit: props.limit,
    };
    const filtersInQuery = route?.query?.filters;
    if (filtersInQuery) {
      if (typeof filtersInQuery === 'string') {
        const { filter } = qs.parse(filtersInQuery);
        const filters = parseFilters(filter);
        queryObj.filter = filters.map(
          filter => `${filter.field}||${filter.operator}||${filter.value}`
        );
      }
    }
    query.value = qs.stringify(queryObj, {
      encode: true,
      arrayFormat: 'repeat',
    });
  };
  const test = () => {
    const query = { ...route.query, orders: { order: 'test' } };
    router.replace({ query });
    console.log(route.query.order)
  };
  onMounted(() => {
    const filters = route?.query?.filters;
    if (filters) {
      generateQS();
    }
  });

  watch(
    () => route?.query?.filters,
    val => {
      generateQS();
    }
  );

  watch(query, (current, old) => {
    if (current !== old) {
      getData();
    }
  });

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/orders?${query.value}`
    );
    tableData.value = data.data;
  };

  const parseFilters = (filters: string | string[]) => {
    if (Array.isArray(filters)) {
      return filters.reduce((acc, filter) => {
        const [field, operator, value] = filter.split('||');
        if (value !== 'null') {
          acc.push({ field, operator, value });
        }
        return acc;
      }, []);
    }
    const [field, operator, value] = filters.split('||');
    if (value !== 'null') {
      return [{ field, operator, value }];
    }
    return [];
  };
</script>

<style scoped></style>
