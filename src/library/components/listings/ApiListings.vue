<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // router.push({ query: { 'api-listing': 'string' } });
</script>

<style scoped></style>
