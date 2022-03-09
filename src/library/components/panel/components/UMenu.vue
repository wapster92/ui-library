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
        <li class="menu-item">
          <span class="menu-item__icon">Ikon</span>
          <span class="menu-item__item">Item</span>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script lang="ts" setup>
import ULogo from './ULogo.vue'
</script>

<style scoped lang="scss">
.logo-in-menu {
  padding: 9px 0;
}
</style>