<template>
  <ApiListings :limit="50">
    <template #default="{ tableData }">
      <DynamicListing :multiple-search="['company', 'name']">
        <template #filters>
          <DateFilter
            label="Дата добавления"
            field="deadline"
            operator="$eq"></DateFilter>
          <BooleanFilter
            label="Завершен"
            field="completed"
            operator="$eq"></BooleanFilter>
          <SelectFilter
            label="Тэг"
            field="order.tag"
            operator="$eq"></SelectFilter>
        </template>
        <template #listings>
          <TableListing :table-data="tableData" @selection-change="test">
            <SelectionColumn></SelectionColumn>
            <TextColumn prop="id" label="ID" sortable></TextColumn>
            <TextColumn prop="name" label="Имя" sortable></TextColumn>
            <TagColumn
              prop="tag"
              sortable
              label="Тег"
              color-property="color"></TagColumn>
            <TextColumn
              prop="company"
              min-width="20"
              sortable
              label="Компания"></TextColumn>
            <TextColumn prop="amount" sortable label="Цена сделки"></TextColumn>
            <BoolColumn
              prop="completed"
              sortable
              is-icon
              label="Завершено"></BoolColumn>
            <DateColumn prop="deadline" sortable label="Deadline" />
            <SlotColumn label="Слот">
              <template #default="{ row }">
                {{ row.id }}
              </template>
            </SlotColumn>
          </TableListing>
        </template>
      </DynamicListing>
    </template>
  </ApiListings>
</template>

<script setup lang="ts">
  // import { ElTableColumn } from 'element-plus';
  import SelectFilter from '~/components/listings/filters/SelectFilter.vue';

  const options = [
    {
      name: 'Рок',
      value: '1',
    },
  ];
</script>

<style scoped></style>
