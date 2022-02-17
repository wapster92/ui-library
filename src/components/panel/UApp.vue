<template>
<ElConfigProvider :locale="ru">
    <ElContainer>
      <ElHeader></ElHeader>
      <ElMain>
        <ElDatePicker
            type="datetimerange"
            v-model="time"
        ></ElDatePicker>
        <p>{{time}}</p>
      </ElMain>
      <ElFooter></ElFooter>
  </ElContainer>
</ElConfigProvider>

</template>

<script setup lang="ts">
import {ElContainer, ElHeader, ElMain, ElFooter, ElDatePicker, ElConfigProvider} from 'element-plus';
import ru from 'element-plus/lib/locale/lang/ru'
import 'element-plus/theme-chalk/index.css'

import { ref, Ref, watch } from 'vue';

const time:Ref<string[]> = ref()
watch(time, (val):void => {
    console.log(val)
})
</script>

<style>

</style>