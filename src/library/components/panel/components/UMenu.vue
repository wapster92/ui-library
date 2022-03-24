<template>
  <nav class="menu">
    <ElMenu :collapse="!stateMenu.isState" class="menu-component">
      <template v-for="(menuItem, i) of menuItems" :key="i">
        <ElMenuItemGroup v-if="menuItem.groupName">
          <template #title><span>{{ menuItem.groupName }}</span></template>
          <ElSubMenu :index="i" v-if="menuItem?.menuItems">
            <template #title>
              <ElIcon>
                <component :is="menuItem.iconSvg"></component>
              </ElIcon>
              <span>{{ menuItem.name }}</span>
            </template>
            <ElMenuItem v-for="(subItem, k) of menuItem.menuItems" :key="k" :index="`${i}-${k}`">
              <template #title><span>{{ subItem.name }}</span></template>
            </ElMenuItem>
          </ElSubMenu>
          <ElMenuItem v-else :index="i">
            <ElIcon>
              <component :is="menuItem.iconSvg"></component>
            </ElIcon>
            <template #title><span>{{ menuItem.name }}</span></template>
          </ElMenuItem>
        </ElMenuItemGroup>
        <template v-else>
          <ElSubMenu :index="i" v-if="menuItem?.menuItems">
            <template #title>
              <ElIcon>
                <component :is="menuItem.iconSvg"></component>
              </ElIcon>
              <span>{{ menuItem.name }}</span>
            </template>
            <ElMenuItem v-for="(subItem, k) of menuItem.menuItems" :key="k" :index="`${i}-${k}`">
              <template #title><span>{{ subItem.name }}</span></template>
            </ElMenuItem>
          </ElSubMenu>
          <ElMenuItem v-else :index="i">
            <ElIcon>
              <component :is="menuItem.iconSvg"></component>
            </ElIcon>
            <template #title><span>{{ menuItem.name }}</span></template>
          </ElMenuItem>
        </template>

      </template>
    </ElMenu>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, ref, withDefaults } from "vue";
import {ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup, ElIcon} from "element-plus";
import {MenuStore, useMenuStore} from '../../../store/panel';

const stateMenu:MenuStore = useMenuStore();

interface IMenuItem {
  iconSvg: Function,
  name: string,
  groupName?: string,
  menuItems?: IMenuItem[],
}
interface IProps {
  menuItems: IMenuItem[],
}

const {menuItems} = withDefaults(defineProps<IProps>(), {})
const isCollapse = ref(true)
const collapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.menu-component {
  border-right: none;
}
</style>