<template>
  <div>
    <h3>Главная</h3>
    <RouterLink :to="{ path: '/users' }">К пользователям</RouterLink>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'IndexPage',
  };
</script>

<style scoped></style>
