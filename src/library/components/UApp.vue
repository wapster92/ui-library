<template>
  <div>
    <ElConfigProvider :locale="ru">
      <div class="u-app">
        <ElAside class="u-aside" :width="widthMenu">
          <UMenuPanel :menu-items="props.menuItems">
            <template #logo>
              <slot name="logo" :menu-open="stateMenu.isState"></slot>
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
          <ElMain class="u-main">
            <slot />
          </ElMain>
        </ElContainer>
      </div>
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
  } from 'element-plus';
  import { MenuStore, useMenuStore } from '~/store/panel';
  import { computed, defineProps, ref, withDefaults } from "vue";

  import UHeader from './panel/components/UHeader.vue';
  import ru from 'element-plus/lib/locale/lang/ru';
  import UMenuPanel from './panel/components/UMenuPanel.vue';
  const stateMenu: MenuStore = useMenuStore();
  const widthMenu = computed(() => (stateMenu.isState ? '200px' : '64px'));

  interface IMenuItem {
    iconSvg: object;
    name: string;
    groupName?: string;
    menuItems?: IMenuItem[];
  }

  export interface IProps {
    menuItems: IMenuItem[];
  }
  const props = withDefaults(defineProps<IProps>(), {});
</script>

<style scoped lang="scss">
  .u-header {
    --el-header-padding: 0 0 0 0;
  }

  .u-aside {
    background: #fff;
    transition: width var(--el-transition-duration);
    overflow: hidden;
    will-change: width;
  }
  .u-app {
    height: 100%;
    min-height: 100vh;
    background: #e9ebef;
    color: var(--el-text-color-regular);
    display: grid;
    grid-template-columns: min-content 1fr;
  }
  .u-main {
    padding: 4px;
  }
</style>
