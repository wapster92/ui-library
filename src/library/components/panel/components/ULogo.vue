<template>
  <div class="logo">
    <a href="/" class="logo__link">
      <slot />
    </a>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  .logo {
    --u-logo-padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: var(--u-logo-padding);
    &__link {
      display: inline-flex;

      max-height: 38px;
      :slotted(svg) {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
