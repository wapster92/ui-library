<template>
  <ApiListings :limit="200">
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
            <ElTableColumn prop="id" label="ID" width="80" />
            <ElTableColumn prop="name" sortable label="Имя" width="250" />
            <DateColumn prop="deadline" sortable label="Deadline" width="250" />
            <ElTableColumn prop="company" sortable label="Компания" width="250" />
            <ElTableColumn prop="amount" sortable label="Цена сделки" width="250" />
            <ElTableColumn
              prop="completed"
              sortable
              label="Завершено"
              width="250" />
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
