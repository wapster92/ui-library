<template>
  <div ref="listing" class="listing">
    <div v-if="!props.tableData.length" class="listing__empty">
      <ElEmpty></ElEmpty>
    </div>
    <div v-else class="listing__table">
      <ElTable
        ref="tableListingRef"
        class="listing__table-component"
        table-layout="auto"
        :height="listingHeight"
        :data="props.tableData"
        size="small"
        border
        @sort-change="test"
        @selection-change="handleSelectionChange">
        <slot></slot>
      </ElTable>
      <div class="listing__bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElTable, ElEmpty } from 'element-plus';
  import { defineEmits, defineProps, onMounted, ref, withDefaults } from 'vue';
  const listing = ref();
  const tableListingRef = ref();
  interface IProps {
    tableData: object[];
  }
  const props = withDefaults(defineProps<IProps>(), {});

  const test = () => {
    tableListingRef.value.sort(null, null);
  };

  const listingHeight = ref(0);
  const calcHeight = () => {
    const offsetTop = listing.value.offsetTop;
    const windowHeight = window.innerHeight;
    return windowHeight - offsetTop - 4; // 4 - это паддинг основной части страницы
  };

  onMounted(async () => {
    listingHeight.value = calcHeight();
  });

  const emit = defineEmits(['selection-change']);
  const handleSelectionChange = val => {
    emit('selection-change', val);
  };
</script>

<style scoped lang="scss">
  .listing {
    &__table-component {
      //  width: 100%;
      //width: 700px;
    }
  }
</style>
