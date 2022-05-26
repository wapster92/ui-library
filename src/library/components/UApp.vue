<template>
  <div>
    <ElConfigProvider :locale="ru">
      <ElContainer class="u-app">
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
  } from 'element-plus';
  import { MenuStore, useMenuStore } from '~/store/panel';
  import { computed, defineProps, ref, watch, withDefaults } from "vue";

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

  /*const minWidth = 64;
  const maxWidth = 200;
  const currentWidth = ref<number>(stateMenu.isState ? maxWidth : minWidth);
  const widthMenu = ref(currentWidth.value + 'px');
  // testing requestAnimationFrame
  const writeCurrentWidth = (width) => {
    if (width >= maxWidth) {
      return maxWidth;
    }
    if (width <= minWidth) {
      return minWidth;
    }
    return width;
  }
  const animateMenuWidth = (val, duration = 5) => {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = Math.abs((time - start) / duration);
      currentWidth.value = writeCurrentWidth(val ? currentWidth.value + timeFraction : currentWidth.value - timeFraction);
      widthMenu.value = currentWidth.value + 'px';
      if (currentWidth.value > minWidth && currentWidth.value < maxWidth) {
        requestAnimationFrame(animate)
      }
    })
  }

  watch(() => stateMenu.isState, (value) => {
    animateMenuWidth(value);
  })*/
</script>

<style scoped lang="scss">
  .u-header {
    --el-header-padding: 0 0 0 0;
  }

  .u-aside {
    background: #fff;
    // transition: width var(--el-transition-duration);
    overflow: hidden;
    will-change: width;
  }
  .u-app {
    height: 100%;
    min-height: 100vh;
    background: #e9ebef;
    color: var(--el-text-color-regular);
  }
  .u-main {
    padding: 4px;
  }
</style>
