import qs from 'qs';
import { computed, inject, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useQueryFilter = () => {
  const uRoute = inject('useRoute', useRoute);
  const uRouter = inject('useRouter', useRouter);
  const route = uRoute();
  const router = uRouter();

  const valueToString = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.join(',');
    }
    return value;
  };

  const convertStrFilterToObj = str => {
    const [field, type, value] = str.split('||');
    return { field, type, value };
  };

  const convertObjToString = filterObj => {
    return `${filterObj.field}||${filterObj.type}||${valueToString(
      filterObj.value
    )}`;
  };

  interface IQueryObj {
    filter?: string | string[];
  }
  interface IFilterObj {
    field: string;
    type: string;
    value?: string | string[] | boolean;
  }
  const query = ref<string>('');
  const queryObj = computed<IQueryObj>({
    get() {
      return qs.parse(query.value);
    },
    async set(val) {
      await router.replace({
        query: {
          filters: qs.stringify(val, { encode: true, arrayFormat: 'repeat' }),
        },
      });
    },
  });

  watch(
    () => route?.query?.filters,
    val => {
      query.value = <string>val;
    }
  );

  onMounted(() => {
    if (route?.query?.filters) {
      query.value = <string>route.query.filters;
    }
  });

  const initialFilters = () => {
    let filters = [];
    if (queryObj.value?.filter) {
      if (typeof queryObj.value.filter === 'string') {
        filters = [queryObj.value.filter];
      }
      if (Array.isArray(queryObj.value.filter)) {
        filters = queryObj.value.filter;
      }
    }
    return filters;
  };

  const getQueryFilters = (filterObj?: IFilterObj) => {
    const filters = initialFilters();
    if (filterObj) {
      const obj = filters.find(filter => {
        const { field, type } = convertStrFilterToObj(filter);
        return field === filterObj.field && type === filterObj.type;
      });
      return obj ? convertStrFilterToObj(obj) : null;
    }
    filters.map(filter => {
      return convertStrFilterToObj(filter);
    });
    if (filters.length) {
      return filters;
    }
    return null;
  };

  const addQueryFilter = (filterObj: IFilterObj) => {
    const filters = initialFilters();
    filters.push(convertObjToString(filterObj));
    queryObj.value = { filter: filters };
  };

  const changeQueryFilter = (filterObj: IFilterObj) => {
    let filters = initialFilters();
    filters = filters.map(el => {
      const { field, type } = convertStrFilterToObj(el);
      if (field === filterObj.field && type === filterObj.type) {
        return convertObjToString(filterObj);
      }
      return el;
    });
    queryObj.value = { filter: filters };
  };

  const removeQueryFilter = (filterObj: IFilterObj) => {
    let filters = [];
    if (typeof queryObj.value.filter === 'string') {
      filters = [queryObj.value.filter];
    }
    if (Array.isArray(queryObj.value.filter)) {
      filters = queryObj.value.filter;
    }
    filters = filters.filter(el => {
      const { field, type } = convertStrFilterToObj(el);
      return !(field === filterObj.field && type === filterObj.type);
    });
    queryObj.value = { filter: filters };
  };

  return {
    queryObj,
    getQueryFilters,
    addQueryFilter,
    changeQueryFilter,
    removeQueryFilter,
  };
};
