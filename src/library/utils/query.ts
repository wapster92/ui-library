import qs from 'qs';
import { computed, inject, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQueryStore } from '~/store/queryStore';

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
    const [field, operator, value] = str.split('||');
    return { field, operator, value };
  };

  const convertObjToString = filterObj => {
    return `${filterObj.field}||${filterObj.operator}||${valueToString(
      filterObj.value
    )}`;
  };

  interface IQueryObj {
    filter?: string | string[];
  }
  interface IFilterObj {
    field: string;
    operator: string;
    value?: string | string[] | boolean;
  }

  const queryObj = useQueryStore();

  queryObj.$subscribe(async (_, state) => {
    await goToQuery({ filter: state.filter });
  });

  const goToQuery = async val => {
    await router.replace({
      query: {
        filters: qs.stringify(val, { encode: true, arrayFormat: 'repeat' }),
      },
    });
  };

  /*watch(
    () => route?.query?.filters,
    val => {
      query.value = <string>val;
    }
  );

  onMounted(() => {
    if (route?.query?.filters) {
      query.value = <string>route.query.filters;
    }
  });*/

  const initialFilters = () => {
    let filters = [];
    if (queryObj?.filter) {
      if (typeof queryObj.filter === 'string') {
        filters = [queryObj.filter];
      }
      if (Array.isArray(queryObj.filter)) {
        filters = queryObj.filter;
      }
    }
    return filters;
  };

  const getQueryFilters = (filterObj?: IFilterObj) => {
    let filters = initialFilters();
    if (filterObj) {
      const obj = filters.find(filter => {
        const { field, operator } = convertStrFilterToObj(filter);
        return field === filterObj.field && operator === filterObj.operator;
      });
      return obj ? convertStrFilterToObj(obj) : null;
    }
    filters = filters.map(filter => {
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
    //queryObj.value = { filter: filters };
    queryObj.setFilter(filters);
  };

  const changeQueryFilter = (filterObj: IFilterObj) => {
    let filters = initialFilters();
    filters = filters.map(el => {
      const { field, operator } = convertStrFilterToObj(el);
      if (field === filterObj.field && operator === filterObj.operator) {
        return convertObjToString(filterObj);
      }
      return el;
    });
    queryObj.setFilter(filters);
  };

  const removeQueryFilter = (filterObj: IFilterObj) => {
    let filters = [];
    if (typeof queryObj.filter === 'string') {
      filters = [queryObj.filter];
    }
    if (Array.isArray(queryObj.filter)) {
      filters = queryObj.filter;
    }
    filters = filters.filter(el => {
      const { field, operator } = convertStrFilterToObj(el);
      return !(field === filterObj.field && operator === filterObj.operator);
    });
    queryObj.setFilter(filters);
  };

  return {
    queryObj,
    getQueryFilters,
    addQueryFilter,
    changeQueryFilter,
    removeQueryFilter,
  };
};
