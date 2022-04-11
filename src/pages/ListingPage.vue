<template>
  <div>
    <ApiListings>
      <ListingsWrapper>
        <template #filters>
          <DateFilter></DateFilter>
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