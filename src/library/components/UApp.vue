<template>
  <div>
    <ElConfigProvider :locale="ru">
      <ElContainer class="u-app">
        <ElAside class="u-aside" :width="widthMenu">
          <UMenuPanel v-bind="$attrs">
            <template #logo>
              <slot name="logo" :menuOpen="stateMenu.isState"></slot>
            </template>
            <template #menu>
              <slot name="menu"></slot>
            </template>
          </UMenuPanel>
        </ElAside>
        <ElContainer>
          <ElHeader height="42px" class="u-header">
            <UHeader>
              <template #logo>
                <slot name="logo" />
              </template>
            </UHeader>
          </ElHeader>
          <ElMain>
            <slot />
          </ElMain>
        </ElContainer>
      </ElContainer>
    </ElConfigProvider>
  </div>
</template>

<script setup lang="ts">
  import {
    ElContainer,
    ElHeader,
    ElMain,
    ElConfigProvider,
    ElAside,
    ElDatePicker,
  } from 'element-plus';
  import {MenuStore, useMenuStore} from '../store/panel';
  import {computed} from "vue";


  import UHeader from './panel/components/UHeader.vue';
  import ru from 'element-plus/lib/locale/lang/ru';
  import UMenuPanel from './panel/components/UMenuPanel.vue'
  const stateMenu:MenuStore = useMenuStore();
  const widthMenu = computed(() => stateMenu.isState ? '200px': '64px');
</script>

<style scoped lang="scss">
  .u-header {
    --el-header-padding: 0 0 0 0;
  }

  .u-aside {
    background: #fff;
    transition: width var(--el-transition-duration);
    overflow: hidden;
  }
  .u-app {
    height: 100%;
    min-height: 100vh;
    background: #E9EBEF;
  }
</style>
