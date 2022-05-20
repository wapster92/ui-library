<template>
  <ApiListings :limit="10">
    <template #default="{ tableData }">
      <DynamicListing>
        <template #filters>
          <DateFilter
            label="Дата добавления"
            field="deadline"
            operator="$eq"></DateFilter>
          <BooleanFilter
            label="Завершен"
            field="completed"
            operator="$eq"></BooleanFilter>
        </template>
        <template #listings>
          <TableListing :table-data="tableData">
            <ElTableColumn prop="name" label="Название"></ElTableColumn>
            <TableColumn prop="name" label="Название"></TableColumn>
          </TableListing>
        </template>
      </DynamicListing>
    </template>
  </ApiListings>
</template>

<script setup lang="ts">
import { ElTableColumn } from "element-plus";
</script>

<style scoped></style>
