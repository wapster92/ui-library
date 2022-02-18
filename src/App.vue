<template>
  <u-app>
    <template #logo>
      <Logo />
    </template>
    <h1>Тестинг</h1>
  </u-app>
</template>
<script setup>
  import Logo from './assets/img/logo.svg';
</script>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
