<template>
  <ULogo>
    <template #default>
      <slot name="logo" />
    </template>
  </ULogo>
</template>

<script setup>
  import { useMenuStore } from '../../../store/panel.js'
  import ULogo from './ULogo.vue'

  const state = useMenuStore()
  state.changeState()
  console.log(state.isState)
</script>

<style scoped lang="scss"></style>
