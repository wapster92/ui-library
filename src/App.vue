<template>
  <u-app :menuItems="items">
    <template #logo="{menuOpen}">
      <transition name="fade" mode="out-in">
        <Logo v-if="menuOpen" />
        <LogoSmall v-else />
      </transition>
      
    </template>
    <h1>Тестинг</h1>
    <button @click="changeItems">Click</button>
  </u-app>
</template>
<script setup>
  import Logo from '@/assets/img/logo.svg';
  import LogoSmall from '@/assets/img/logo-small.svg';
  import { ref } from "vue";
  
  const items = ref([
    {
      iconSvg: LogoSmall,
      name: 'Name - 1',
      menuItems: [
        { name: "Name - 1 - 1" }
      ]
    },
    {
      iconSvg: LogoSmall,
      name: 'Name - 2',
      groupName: 'Info'
    },
    {
      iconSvg: LogoSmall,
      name: 'Name - 3'
    },
  ]);
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
