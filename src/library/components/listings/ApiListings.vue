<template>
  <slot :table-data="tableData"></slot>
</template>

<script setup lang="ts">
import {computed, defineProps, inject, onMounted, ref, watch, withDefaults} from 'vue';
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import {readQuery, stringifyQuery} from "~/utils/api-querys";

const uRoute = inject('useRoute', useRoute)
// const uRouter = inject('useRouter', useRouter)

const route = uRoute();
// const router = uRouter();
interface IProps {
  url: string,
  entity: string,
  limit: number|string,
}
const props = withDefaults(defineProps<IProps>(), {
  limit: 50
});

const tableData = ref([])

const filters = ref<string>('')
const generateFilters = (str) => {
  if (str) {
    const query = readQuery(str);
    let filters = [];
    if (Array.isArray(query.filter)) {
      filters.push(...query.filter)
    } else {
      filters.push(query.filter)
    }
    filters = filters.filter((filter) => {
      return filter.split('||')[2] !== 'null'
    })
    return stringifyQuery({filter:filters})
  }
  return '';
}

watch(
  () => [route.query['filters']],
  ([filtersQuery]) => {
    if (filtersQuery) {
      filters.value = generateFilters(filtersQuery)
    }
  }
);
const getData = async () => {
  const {data} = await axios.get(generateUrl.value)
  console.log(data)
  tableData.value = data.data
}

const generateUrl = computed(() => {
  const fil = filters.value ? `?${filters.value}` : '';
  return `${props.url}/${props.entity}${fil}&limit=${props.limit}`
})

watch(generateUrl, () => {
  getData()
})

onMounted( () => {
  getData()
})



</script>

<style scoped></style>
