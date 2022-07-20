<template>
  <div>
    <h3>Главная</h3>
    <RouterLink :to="{ path: '/users' }">К пользователям</RouterLink>
    <UiInput v-model="val"></UiInput>
    <pre>
      {{ val }}
    </pre>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const val = ref('');
</script>

<style scoped></style>
