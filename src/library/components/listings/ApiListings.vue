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
  import { ElNotification } from "element-plus";
  const uRoute = inject('useRoute', useRoute);
  const uRouter = inject('useRouter', useRouter);

  interface IProps {
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

  // watch(
  //   () => route?.query?.filters,
  //   val => {
  //     generateQS();
  //   }
  // );

  // watch(query, (current, old) => {
  //   if (current !== old) {
  //     getData('watch');
  //   }
  // });
  // onMounted(() => {
  //   generateQS();
  //   // getData('mounted');
  // })
  const getData = async (dot) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/orders?${query.value}`
      );
      console.log(dot)
      tableData.value = data.data;
    } catch (e) {
      ElNotification({
        title: 'Ошибка',
        message: e.message || 'Произошла ошибка',
        type: 'error',
      })
    }
  };

  const parseFilters = (filters) => {
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
