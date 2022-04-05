<template>
  <div>
    <ListingsWrapper>
      <template #filters>
        <DateFilter></DateFilter>
      </template>
      <template #listings>
        <TableListing />
      </template>
    </ListingsWrapper>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>