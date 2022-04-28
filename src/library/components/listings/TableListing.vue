<template>
  <div class="listing">
    <ElTable :data="tableData" @sort-change="test" ref="tableListingRef" border style="width: 100%">
      <ElTableColumn prop="id" label="ID" width="180" />
      <ElTableColumn prop="amount1" sortable label="Amount 1" />
      <ElTableColumn prop="amount2" sortable label="Amount 2" />
      <ElTableColumn prop="amount3" sortable label="Amount 3" />
    </ElTable>
  </div>
</template>

<script setup lang="ts">
  import { ElTable, ElTableColumn } from 'element-plus';
  import {ref} from "vue";


  const tableData = [
    {
      id: '12987122',
      name: 'Tom',
      amount1: '234',
      amount2: '3.2',
      amount3: 10,
    },
    {
      id: '12987123',
      name: 'Tom',
      amount1: '165',
      amount2: '4.43',
      amount3: 12,
    },
    {
      id: '12987124',
      name: 'Tom',
      amount1: '324',
      amount2: '1.9',
      amount3: 9,
    },
    {
      id: '12987125',
      name: 'Tom',
      amount1: '621',
      amount2: '2.2',
      amount3: 17,
    },
    {
      id: '12987126',
      name: 'Tom',
      amount1: '539',
      amount2: '4.1',
      amount3: 15,
    },
  ];

  const tableListingRef = ref()
  const test = (e) => {
    console.log(e)
    tableListingRef.value.sort(null, null);
  }

</script>

<style scoped></style>
