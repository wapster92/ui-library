<template>
  <ElConfigProvider :locale="ru">
    <ElContainer>
      <ElHeader height="40px" class="u-header">
        <UHeader>
          <template #logo>
            <slot name="logo" />
          </template>
        </UHeader>
      </ElHeader>
      <ElContainer>
        <ElAside width="200px" />
        <ElMain>
          <ElDatePicker />
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

  const state = useMenuStore();
  state.changeState();
  console.log(state.isState);
  import UHeader from './panel/components/UHeader.vue';
  import ru from 'element-plus/lib/locale/lang/ru';
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
</style>
