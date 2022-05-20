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
          <TableListing :table-data="tableData" />
        </template>
      </DynamicListing>
    </template>
  </ApiListings>
</template>

<script setup lang="ts"></script>

<style scoped></style>
