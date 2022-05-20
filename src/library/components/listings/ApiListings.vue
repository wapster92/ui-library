<template>
  <slot :table-data="tableData"></slot>
</template>

<script setup lang="ts">
  import { useQueryFilter } from '~/utils/query';
  import { defineProps, onMounted, ref, watch, withDefaults } from "vue";
  import { RequestQueryBuilder } from "@nestjsx/crud-request/lib";
  import axios from "axios";

  export interface IProps {
    limit?: number;
  }
  const props = withDefaults(defineProps<IProps>(), {
    limit: 50,
  });

  const filters = ref([]);

  const tableData = ref([]);
  const queryFilter = useQueryFilter();

  const query = ref('')

  const generateQS = () => {
    const qb = RequestQueryBuilder.create();
    qb.setFilter(filters.value).setLimit(props.limit);
    return qb.query();
  };


  onMounted(() => {
    if (queryFilter.queryObj.value?.filter) {
      filters.value = parseFilters(queryFilter.queryObj.value.filter);
    }
    query.value = generateQS();
  })

  watch(queryFilter.queryObj, value => {
    if (value?.filter) {
      filters.value = parseFilters(value.filter);
      query.value = generateQS();
    }
  });

  /*onMounted(() => {
    query.value = generateQS();

  })*/

  watch(query, (current, old) => {
    if (current !== old) {
      getData();
    }
  })

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/orders?${query.value}`)
    tableData.value = data.data;
  }

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
