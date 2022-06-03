import qs from 'qs';
import { inject, watch } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
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

  queryObj.$subscribe(async (_, state) => {
    await goToQuery({ filter: state.filter });
  });

  watch(
    () => route,
    (val, oldVal) => {
      console.log(oldVal);
      console.log(val);
      // if(oldVal.length) {
      //
      // }
    }
  );

  const goToQuery = async val => {
    const filters = val.filter.map(filter => {
      return Object.values(filter).join('||');
    });
    console.log(filters);
    const qrObj = {
      filter: filters,
    };
    router.replace({
      query: {
        filters: qs.stringify(qrObj, { encode: false }),
      },
    });
  };

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
      if (typeof query.filter === 'string') {
        const [field, operator, value] = query.filter.split('||');
        filters = [{ field, operator, value }];
      }
      queryObj.setFilter(filters);
    }
    return queryObj?.filter || [];
  };

  const getQueryFilters = (filterObj?: IFilterObj) => {
    const filters = initialFilters();
    console.log(filters);
    if (filterObj) {
      const obj = filters.find(filter => {
        return (
          filter.field === filterObj.field &&
          filter.operator === filterObj.operator
        );
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
    const idx = filters.findIndex(
      el => el.field === filterObj.field && el.operator === filterObj.operator
    );
    if (~idx) {
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
    console.log('входящие данные', filterObj);
    console.log('массив фильтров', queryObj.filter);
    const filters = queryObj.filter.filter(el => {
      return !(
        el.field === filterObj.field && el.operator === filterObj.operator
      );
    });
    console.log('полученный массив', filters);
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
