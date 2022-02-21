<template>
  <ElConfigProvider :locale="ru">
    <ElContainer class="u-app">
      <ElHeader height="40px" class="u-header">
        <UHeader>
          <template #logo>
            <slot name="logo" />
          </template>
        </UHeader>
      </ElHeader>
      <ElContainer>
        <ElAside class="u-aside" :width="widthMenu">
          <div class="menu"></div>
          <div class="menu-item" @transitionend="test">
            <span class="menu-item__icon">Ikon</span>
            <span class="menu-item__item"  :class="{'menu-item__item--active': stateMenu.isState}">Item</span>
          </div>
        </ElAside>
        <ElMain>
          <ElDatePicker type="time" />
          <slot />
        </ElMain>
      </ElContainer>
      <ElFooter />
    </ElContainer>
  </ElConfigProvider>
</template>

<script setup lang="ts">
  import {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElConfigProvider,
    ElAside,
    ElDatePicker,
  } from 'element-plus';
  import { useMenuStore } from '../store/panel.js';
  import {computed} from "vue";


  import UHeader from './panel/components/UHeader.vue';
  import ru from 'element-plus/lib/locale/lang/ru';
  const stateMenu = useMenuStore();
  const widthMenu = computed(() => stateMenu.isState ? '200px': '50px')

  const test = () => {
    console.log('animation end')
  }
</script>

<style scoped lang="scss">
  .u-header {
    --el-header-padding: 0 0 0 0;
    background: linear-gradient(
      0deg,
      rgba(231, 230, 233, 1) 0%,
      rgba(182, 188, 189, 1) 100%
    );
  }

  .u-aside {
    border-right: 1px solid #303133;
    background: #939b9b;
    transition: width var(--el-transition-duration);
  }
  .u-app {
    height: 100%;
    min-height: 100vh;
  }
  .menu-item {
    &__item {
      transition: opacity .3s;
      opacity: 0;
      &--active {
        opacity: 1;
      }
    }
  }
</style>
