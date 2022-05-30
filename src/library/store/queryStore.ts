import { defineStore } from 'pinia';

interface IFilterObj {
  field: string;
  operator: string;
  value?: string | string[] | boolean;
}

interface IQueryObj {
  filter?: IFilterObj[];
  or?: string[];
}

export interface QueryStore {
  filter?: IFilterObj[];
}

export const useQueryStore = defineStore('query', {
  state: () => {
    return <QueryStore>{
      filter: [],
      or: [],
    };
  },
  actions: {
    addFilter(payload) {
      if(this.filter.length <= 0) {
        this.filter.push(`${payload.field}||${payload.operator}||${payload.value}`);
      }

      const candidates = this.filter.reduce((acc, filter) => {
        const [field, operator] = filter.split('||');
        if(field === payload.field && operator === payload.operator) {
          acc.push([field, operator, payload.value].join(operator));
          return acc;
        }
        acc.push(`${payload.field}||${payload.operator}||${payload.value}`);
        return acc;
      }, []);
      console.log(candidates)
    },
    setFilter(val) {
      this.filter = val;
    },
  },
});