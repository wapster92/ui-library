<template>
  <slot :table-data="tableData"></slot>
  <pre>{{queryFilter.queryObj}}</pre>
</template>

<script setup lang="ts">
  import { useQueryFilter } from "~/utils/query";
  import {defineProps, ref, watch, withDefaults} from "vue";
  import { RequestQueryBuilder, CondOperator } from "@nestjsx/crud-request";

  export interface IProps {
    limit: number;
  }
  const props = withDefaults(defineProps<IProps>(), {
    limit: 50,
  });

  const filters = ref([])

  const tableData = ref([]);
  const queryFilter = useQueryFilter();

  const generateQS = () => {
    const qb = RequestQueryBuilder.create()
    qb
      .setFilter(filters.value)
      .setLimit(props.limit)
    return qb.query();
  }

  watch(queryFilter.queryObj, value => {
    if(value?.filter) {
      filters.value = parseFilters(value.filter)
      console.log(generateQS())
    }
  })


  const parseFilters = (filters: string|string[]) => {
    if(Array.isArray(filters)) {
      return filters.reduce((acc, filter) => {
        const [field, operator, value] = filter.split('||');
        if (value !== 'null') {
          acc.push({field, operator, value});
        }
        return acc;
      }, []);
    }
    const [field, operator, value] = filters.split('||');
    if (value !== 'null') {
      return [{field, operator, value}];
    }
    return [];
  }


</script>

<style scoped></style>
