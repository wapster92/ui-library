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

export const getUrlFilters = (query, fieldDefault) => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === 'string') {
    const { field, type, value } = convertStrFilterToObj(filter);
    if (field === fieldDefault) {
      return { field, type, value };
    }
  }
  return null;
};

export const addUrlFilter = (query, filterObj): string => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return '';
  }
  if (typeof filter === 'string') {
    const { field } = convertStrFilterToObj(filter);
    if (field === filterObj.field) {
      return stringifyQuery({
        filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`],
      });
    }
  }
  if (!filter) {
    return stringifyQuery({
      filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`],
    });
  }
  return '';
};

export const changeUrlFilter = (query, filterObj): string => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return '';
  }
  if (typeof filter === 'string') {
    const { field } = convertStrFilterToObj(filter);
    if (field === filterObj.field) {
      return stringifyQuery({
        filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`],
      });
    }
  }
  return '';
};

export const removeUrlFilter = (query, filterField: string): string => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }

  if (typeof filter === 'string') {
    const { field } = convertStrFilterToObj(filter);
    if (field === filterField) {
      return stringifyQuery({ filter: [] });
    }
  }
  return '';
};
