<template>
  <u-app :menu-items="items">
    <template #logo="{ menuOpen }">
      <!--      <transition name="fade" mode="out-in">-->
      <!--        -->
      <!--      </transition>-->
      <Logo v-if="menuOpen" />
      <LogoSmall v-else />
    </template>
    <template #default>
      <router-view></router-view>
    </template>
  </u-app>
</template>
<script setup lang="ts">
  import Logo from '@/assets/img/logo.svg';
  import LogoSmall from '@/assets/img/logo-small.svg';
  import { markRaw, reactive } from 'vue';
  import { User, SetUp, Help } from '@element-plus/icons-vue';

  const items = reactive([
    {
      iconSvg: markRaw(User),
      name: 'Пользователи',
    },
    {
      iconSvg: markRaw(SetUp),
      name: 'Система',
    },
    {
      iconSvg: markRaw(Help),
      name: 'Помощь',
    },
  ]);
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif !important;
    line-height: 1.2 !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  .box {
    width: 100%;
    height: 100%;
    background: var(--el-color-white);
  }
</style>
