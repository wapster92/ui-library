import qs, { stringify } from 'qs';

export const readQuery = str => {
  return qs.parse(str);
};

export const stringifyQuery = obj => {
  return qs.stringify(obj, { encode: true, arrayFormat: 'repeat' });
};

export const convertStrFilterToObj = str => {
  const [field, type, value] = str.split('||');
  return { field, type, value };
};

export const getUrlFilters = (
  query,
  fieldDefault,
  filterVisible,
  filterPopoverVisible
) => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === 'string') {
    const { field, value } = convertStrFilterToObj(filter);
    if (field === fieldDefault) {
      filterVisible.value = true;
    }
    if (value === 'null') {
      filterPopoverVisible.value = true;
    }
  }
  if (!filter) {
    filterPopoverVisible.value = false;
    filterVisible.value = false;
  }
};

export const addUrlFilter = (queryString, field): string => {
  return;
};

export const removeUrlFilter = (query, filterField: string): string => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === 'string') {
    const { field, value } = convertStrFilterToObj(filter);
    if (field === filterField) {
      return stringifyQuery({ filter: [] });
    }
  }
  return;
};
