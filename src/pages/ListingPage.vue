<template>
  <div>
    <ApiListings>
      <DynamicListing>
        <template #filters>
          <DateFilter
            label="Дата добавления"
            field="createdAt"
            type="$eq"></DateFilter>
          <BooleanFilter
            label="Удален"
            field="deletedAt"
            type="$bool"></BooleanFilter>

          <TableListing/>
        </template>
      </DynamicListing>
    </ApiListings>
    <RouterLink :to="{ path: '/' }">На главную</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
