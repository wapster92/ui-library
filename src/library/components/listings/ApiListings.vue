<template>
  <slot :table-data="tableData"></slot>
  <pre>{{queryFilter.queryObj}}</pre>
</template>

<script setup lang="ts">
  import { useQueryFilter } from "~/utils/query";
  import { ref } from "vue";

  const tableData = ref([]);
  const queryFilter = useQueryFilter();


</script>

<style scoped></style>
