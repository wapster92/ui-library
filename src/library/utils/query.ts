import qs from 'qs';
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQueryStore } from '~/store/queryStore';

export const useQueryFilter = () => {
  const uRoute = inject('useRoute', useRoute);
  const uRouter = inject('useRouter', useRouter);
  const route = uRoute();
  const router = uRouter();

  interface IFilterObj {
    field: string;
    operator: string;
    value?: string | string[] | boolean;
  }

  const queryObj = useQueryStore();
  const goToQuery = async (val: { filter: IFilterObj[] }) => {
    const filters = val.filter.map(filter => Object.values(filter).join('||'));
    const qrObj = {
      filter: filters,
    };
    await router.replace({
      query: {
        filters: qs.stringify(qrObj, { encode: true }),
      },
    });
  };
  queryObj.$subscribe(async (_, state) => {
    await goToQuery({ filter: state.filter });
  });

  /* watch(
    () => route,
    (val, oldVal) => {
      console.log(oldVal);
      console.log(val);
      // if(oldVal.length) {
      //
      // }
    }
  ); */

  const initialFilters = () => {
    if (Array.isArray(queryObj?.filter)) {
      return queryObj?.filter;
    }
    if (route?.query?.filters) {
      const query = qs.parse(<string>route.query.filters);
      let filters = [];
      if (Array.isArray(query.filter)) {
        filters = query.filter.map(el => {
          const [field, operator, value] = el.split('||');
          return { field, operator, value };
        });
      }
      queryObj.setFilter(filters);
    }
    return queryObj?.filter || [];
  };

  const getQueryFilters = (filterObj?: IFilterObj) => {
    const filters = initialFilters();
    if (filterObj) {
      const obj = filters.find(
        filter =>
          filter.field === filterObj.field &&
          filter.operator === filterObj.operator
      );
      return obj || null;
    }
    if (filters.length) {
      return filters;
    }
    return null;
  };

  const addQueryFilter = (filterObj: IFilterObj) => {
    const filters = initialFilters();
    const idx = filters.findIndex(
      el => el.field === filterObj.field && el.operator === filterObj.operator
    );
    if (idx >= 0) {
      filters[idx] = filterObj;
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
    const filters = queryObj.filter.filter(
      el =>
        !(el.field === filterObj.field && el.operator === filterObj.operator)
    );
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
