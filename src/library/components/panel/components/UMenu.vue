<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu-item" v-for="item of props.menuItems">
        <component :is="item.iconSvg"></component>
        <span class="menu-item__item">{{ item.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

interface IMenuItem {
  iconSvg: Function,
  name: string,
}
interface IProps {
  menuItems: IMenuItem[],
}

const props = withDefaults(defineProps<IProps>(), {})
</script>

<style scoped>

</style>