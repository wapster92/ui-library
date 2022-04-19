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
    () => ([route.query['filters']]),
    value => {
      console.log(value);
    }
  );
  // router.push({ query: { 'filters': 'string' } });
</script>

<style scoped></style>
