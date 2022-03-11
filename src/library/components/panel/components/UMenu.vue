<template>
  <div class="menu-wrapper">
    <div class="logo-in-menu">
      <ULogo>
        <template #default>
          <slot name="logo" />
        </template>
      </ULogo>
    </div>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu-item" v-for="item of props.menuItems">

          <span class="menu-item__item">{{ item.name }}</span>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script lang="ts" setup>
import ULogo from './ULogo.vue'
import { Component, defineProps, withDefaults } from "vue";

interface IMenuItem {
  name: String,
}
interface IProps {
  menuItems: IMenuItem[],
}

const props = withDefaults(defineProps<IProps>(), {})

</script>

<style scoped lang="scss">
.logo-in-menu {
  padding: 9px 0;
}
</style>