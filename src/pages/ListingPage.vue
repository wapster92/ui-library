<template>
  <div>
    <ApiListings>
      <ListingsWrapper>
        <template #filters>
          <DateFilter
            label="Дата добавления"
            field="createdAt"
            type="$eq"></DateFilter>
        </template>
        <template #listings>
          <TableListing />
        </template>
      </ListingsWrapper>
    </ApiListings>
    <RouterLink :to="{ path: '/' }">На главную</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
