<template>
    <ApiListings url="http://localhost:5000/api" entity="orders">
      <template #default="{tableData}">
        <DynamicListing>
          <template #filters>
            <DateFilter
              label="Дата добавления"
              field="deadline"
              type="$eq"></DateFilter>
            <BooleanFilter
              label="Завершен"
              field="completed"
              type="$eq"></BooleanFilter>
          </template>
          <template #listings>
            <TableListing :table-data="tableData"/>
          </template>
        </DynamicListing>
      </template>

    </ApiListings>
</template>

<script setup lang="ts"></script>

<style scoped></style>
