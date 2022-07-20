<template>
  <ElInput size="large" :model-value="props.modelValue" @input="updateValue">
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
  </ElInput>
</template>

<script lang="ts" setup>
  import { ElInput } from 'element-plus';
  import { defineProps, withDefaults, defineEmits } from 'vue';

  interface IProps {
    modelValue: string;
    label?: string;
  }
  const props = withDefaults(defineProps<IProps>(), {
    modelValue: '',
    label: '',
  });

  const emit = defineEmits(['update:modelValue']);
  const updateValue = val => {
    emit('update:modelValue', val);
  };
</script>

<style scoped></style>
