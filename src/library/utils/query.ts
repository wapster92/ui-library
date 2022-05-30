import qs from 'qs';
import { inject } from 'vue';
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

  interface IFilterObj {
    field: string;
    operator: string;
    value?: string | string[] | boolean;
  }

  const queryObj = useQueryStore();

  // queryObj.$subscribe(async (_, state) => {
  //   await goToQuery({ filter: state.filter });
  // });

  const goToQuery = async val => {
    await router.replace({
      query: {
        filters: qs.stringify(val, { encode: true, arrayFormat: 'repeat' }),
      },
    });
  };

  const initialFilters = () => {
    const filters = queryObj?.filter;
    return filters;
  };

  const getQueryFilters = (filterObj?: IFilterObj) => {
    const filters = initialFilters();
    if (filterObj) {
      const obj = filters.find(filter => {
        return filter.field === filterObj.field && filter.operator === filterObj.operator;
      });
      return obj ? obj : null;
    }
    if (filters.length) {
      return filters;
    }
    return null;
  };

  const addQueryFilter = (filterObj: IFilterObj) => {
    const filters = initialFilters();
    const idx = filters.findIndex(el => el.field === filterObj.field && el.operator === filterObj.operator);
    if (~idx) {
      filters[idx] = filterObj
    } else {
      filters.push(filterObj);
    }
    queryObj.setFilter(filters);
  };

  const changeQueryFilter = (filterObj: IFilterObj) => {
    let filters = initialFilters();
    filters = filters.map(el => {
      if (el.field === filterObj.field && el.operator === filterObj.operator) {
        return filterObj;
      }
      return el;
    });
    queryObj.setFilter(filters);
  };

  const removeQueryFilter = (filterObj: IFilterObj) => {
    const filters = queryObj.filter.filter(el => {
      return !(el.field === filterObj.field && el.operator === filterObj.operator);
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
