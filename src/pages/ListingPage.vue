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
            <TextColumn prop="id" label="ID" sortable></TextColumn>
            <TextColumn prop="name" label="Имя" sortable></TextColumn>
            <TagColumn
              prop="tag"
              sortable
              label="Тег"
            ></TagColumn>
            <TextColumn
              prop="company"
              sortable
              label="Компания"
              ></TextColumn>
            <TextColumn
              prop="amount"
              sortable
              label="Цена сделки"
              ></TextColumn>
            <BoolColumn
              prop="completed"
              sortable
              is-icon
              label="Завершено"
              ></BoolColumn>
            <DateColumn prop="deadline" sortable label="Deadline" />
          </TableListing>
        </template>
      </DynamicListing>
    </template>
  </ApiListings>
</template>

<script setup lang="ts">
  import { ElTableColumn } from 'element-plus';
</script>

<style scoped></style>
