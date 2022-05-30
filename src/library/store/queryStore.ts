import { defineStore } from 'pinia';

interface IQueryObj {
  filter?: string | string[];
}

export interface QueryStore {
  filter?: string[];
}

export const useQueryStore = defineStore('query', {
  state: () => {
    return <QueryStore>{
      filter: [],
    };
  },
  actions: {
    setFilter(val) {
      /*const candidate = checkForComplianceFilters(this.filter, val);
      if (candidate) {
        this.filter.push(candidate);
      }*/
      this.filter = val;
    },
  },
});

const checkForComplianceFilters = (filters, payload) => {
  const match = filters.includes(payload);
  if (!match) {
    return payload;
  }
  return false;
};
