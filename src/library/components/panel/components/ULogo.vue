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
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--u-logo-padding);
    &__link {
      display: flex;
      height: 100%;
      :slotted(svg) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
