<template>
  <u-app>
    <template #logo="{menuOpen}">
      <transition name="fade" mode="out-in">
        <Logo v-if="menuOpen" />
        <LogoSmall v-else />
      </transition>

    </template>
    <h1>Тестинг</h1>
  </u-app>
</template>
<script setup>
  import Logo from './assets/img/logo.svg';
  import LogoSmall from './assets/img/logo-small.svg';
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>
