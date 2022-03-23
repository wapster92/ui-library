<template>
  <div class="menu-wrapper">
    <div class="logo-in-menu">
      <ULogo>
        <template #default>
          <slot name="logo" />
        </template>
      </ULogo>
    </div>
    <UMenu v-bind="$attrs"></UMenu>
  </div>

</template>

<script lang="ts" setup>
import ULogo from './ULogo.vue'
import UMenu from './UMenu.vue'

</script>

<style scoped lang="scss">
.logo-in-menu {
  padding: 9px 0;
}
</style>