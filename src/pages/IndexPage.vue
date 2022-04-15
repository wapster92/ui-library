<template>
  <div>
    <h3>Главная</h3>
    <RouterLink :to="{path: '/users'}">К пользователям</RouterLink>
  </div>
</template>

<script>
export default {
  name: "IndexPage"
}
</script>

<style scoped>

</style>