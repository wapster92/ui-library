<template>
  <div class="header">
    <ULogo>
      <template #default>
        <slot name="logo" />
      </template>
    </ULogo>
    <div class="main">
      <ElButton size="small" type="primary" @click="changeMenuStatus">
        <ElIcon>
          <Fold v-if="menuStore.isState" />
          <Expand v-else />
        </ElIcon>
      </ElButton>
    </div>
  </div>
</template>

<script setup>
  import { ElButton, ElIcon } from 'element-plus';
  import { Fold, Expand } from '@element-plus/icons-vue';
  import { useMenuStore } from '../../../store/panel.js';
  import ULogo from './ULogo.vue';
  const menuStore = useMenuStore();
  const changeMenuStatus = () => {
    menuStore.changeState();
  };
</script>

<style scoped lang="scss">
  .header {
    height: 100%;
    display: grid;
    grid-template-columns: 130px 1fr;
    grid-template-rows: minmax(100%, 40px);
  }
  .main {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>
