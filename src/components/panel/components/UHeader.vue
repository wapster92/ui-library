<template>
  {{ logo }}
</template>

<script setup>
import {defineProps} from "vue";
import {useMenuStore} from "../../../store/panel.js";

const props = defineProps({
  logo: {
    type: String,
    default: 'hello'
  }
})

const state = useMenuStore();
state.changeState()
console.log(state.isState)
</script>

<style scoped>

</style>