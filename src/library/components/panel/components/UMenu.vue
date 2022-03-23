<template>
  <nav class="menu">
    <ElMenu>
      <template v-for="(menuItem, i) of menuItems" :key="i">
        <ElMenuItemGroup v-if="menuItem.groupName">
          <template #title><span>{{ menuItem.groupName }}</span></template>
          <ElSubMenu :index="i" v-if="menuItem?.menuItems">
            <template #title>{{ menuItem.name }}</template>
          </ElSubMenu>
          <ElMenuItem v-else :index="i">{{ menuItem.name }}</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubMenu v-if="menuItem?.menuItems">
          <template #title>{{ menuItem.name }}</template>
        </ElSubMenu>
        <ElMenuItem v-else :index="i">{{ menuItem.name }}</ElMenuItem>
      </template>
    </ElMenu>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
import {ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup} from "element-plus";

interface IMenuItem {
  iconSvg: Function,
  name: string,
  groupName?: string,
  menuItems?: IMenuItem[],
}
interface IProps {
  menuItems: IMenuItem[],
}

const props = withDefaults(defineProps<IProps>(), {})
</script>

<style scoped>

</style>