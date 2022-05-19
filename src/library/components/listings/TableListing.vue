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
        border
        @sort-change="test">
        <ElTableColumn prop="id" label="ID" width="50" />
        <ElTableColumn prop="name" sortable label="Имя" width="250" />
        <ElTableColumn prop="deadline" sortable label="Deadline" width="250" />
        <ElTableColumn prop="company" sortable label="Компания" width="250" />
        <ElTableColumn prop="amount" sortable label="Цена сделки" width="250" />
        <ElTableColumn
          prop="completed"
          sortable
          label="Завершено"
          width="250" />
      </ElTable>
      <div class="listing__bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElTable, ElTableColumn, ElEmpty } from 'element-plus';
  import { defineProps, onMounted, ref, withDefaults } from 'vue';

  const listing = ref();
  const tableListingRef = ref();
  interface IProps {
    tableData: object[];
  }
  const props = withDefaults(defineProps<IProps>(), {});

  const test = e => {
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
</script>

<style scoped lang="scss">
  .listing {
    &__table-component {
      //  width: 100%;
      // width: 700px;
    }
  }
</style>
