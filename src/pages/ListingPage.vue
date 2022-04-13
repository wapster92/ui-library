<template>
  <div>
    <ApiListings>
      <ListingsWrapper>
        <template #filters>
          <DateFilter label="Дата добавления" field="createdAt" type="$eq"></DateFilter>
        </template>
        <template #listings>
          <TableListing />
        </template>
      </ListingsWrapper>
    </ApiListings>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>