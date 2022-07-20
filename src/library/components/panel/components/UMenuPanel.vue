<template>
  <div class="menu-wrapper">
    <div class="logo-in-menu">
      <ULogo>
        <template #default>
          <slot name="logo" />
        </template>
      </ULogo>
    </div>
    <slot name="menu">
      <UMenu :menu-items="props.menuItems"></UMenu>
    </slot>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, withDefaults } from 'vue';
  import ULogo from './ULogo.vue';
  import UMenu from './UMenu.vue';

  interface IMenuItem {
    iconSvg: object;
    name: string;
    groupName?: string;
    menuItems?: IMenuItem[];
  }

  interface IProps {
    menuItems: IMenuItem[];
  }
  const props = withDefaults(defineProps<IProps>(), {});
</script>

<style scoped lang="scss">
  .logo-in-menu {
    padding: 9px 0;
  }
</style>
