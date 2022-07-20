<template>
  <div class="header">
    <div class="button-wrapper">
      <ElButton
        class="btn"
        size="small"
        type="primary"
        @click="changeMenuStatus">
        <ElIcon>
          <Fold v-if="menuStore.isState" />
          <Expand v-else />
        </ElIcon>
      </ElButton>
    </div>
    <div></div>
    <UUserPanel></UUserPanel>
  </div>
</template>

<script setup lang="ts">
  import { ElButton, ElIcon } from 'element-plus';
  import { Fold, Expand } from '@element-plus/icons-vue';
  import { MenuStore, useMenuStore } from '~/store/panel';
  import UUserPanel from './UUserPanel.vue';

  const menuStore: MenuStore = useMenuStore();
  const changeMenuStatus = () => {
    menuStore.changeState();
  };
</script>

<style scoped lang="scss">
  .header {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr 65px;
    grid-template-rows: minmax(100%, 42px);
    background: #f3f5f8;
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }
</style>
