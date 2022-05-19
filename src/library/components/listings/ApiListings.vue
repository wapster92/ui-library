<template>
  <slot :table-data="tableData"></slot>
  <pre>{{queryFilter.queryObj}}</pre>
  <button @click="addFilter">Add filter</button>
  <button @click="removeFilter">Remove filter</button>
  <button @click="changeFilter">Change filter</button>
</template>

<script setup lang="ts">
  import { useQueryFilter } from "~/utils/query";
  import { ref } from "vue";
  const queryFilter = useQueryFilter();
  const tableData = ref([]);
  const addFilter = () => {
    queryFilter.addQueryFilter({field: 'test', type: '$in', value: null})
  }
  const removeFilter = () => {
    queryFilter.removeQueryFilter({field: 'test', type: '$in', value: null})
  }

  const changeFilter = () => {
    queryFilter.changeQueryFilter({field: 'test', type: '$in', value: 5})
  }

</script>

<style scoped></style>
