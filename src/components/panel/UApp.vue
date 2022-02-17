<template>
<ElConfigProvider :locale="ru">
    <ElContainer>
      <ElHeader class="u-header">
        <UHeader logo="LOGO"></UHeader>
      </ElHeader>
      <ElContainer>
        <ElAside width="200px"></ElAside>
        <ElMain>
          <slot></slot>
        </ElMain>
      </ElContainer>
      <ElFooter></ElFooter>
  </ElContainer>
</ElConfigProvider>

</template>

<script setup lang="ts">
import {ElContainer, ElHeader, ElMain, ElFooter, ElConfigProvider, ElAside} from 'element-plus';
import UHeader from './components/UHeader.vue'
import ru from 'element-plus/lib/locale/lang/ru'
import 'element-plus/theme-chalk/index.css'

</script>

<style scoped lang="scss">
.u-header {
  --el-header-padding: 0 20px 0 0;
}
</style>