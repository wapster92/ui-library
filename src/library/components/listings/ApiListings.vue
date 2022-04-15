<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { watch } from 'vue';

  const route = useRoute();
  // const router = useRouter();

  watch(
    () => ([route.query['api-listing'], route.query['api-filters']]),
    value => {
      console.log(value);
    }
  );
  // router.push({ query: { 'api-listing': 'string' } });
</script>

<style scoped></style>
