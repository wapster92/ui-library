import qs from 'qs';

export const readQuery = str => {
  return qs.parse(str);
};

export const stringifyQuery = obj => {
  obj.value = valueToString(obj.value);
  return qs.stringify(obj, { encode: true, arrayFormat: 'repeat' });
};

export const convertStrFilterToObj = str => {
  const [field, type, value] = str.split('||');
  return { field, type, value };
};

export const getUrlFilters = (query, filterObj?) => {
  if (query) {
    const { filter } = readQuery(query);
    let filters = [];
    if (typeof filter === 'string') {
      filters = [filter];
    }
    if (Array.isArray(filter)) {
      filters = filter;
    }
    if (filterObj) {
      const obj = filters.find(el => {
        const { field, type } = convertStrFilterToObj(el);
        return field === filterObj.field && type === filterObj.type;
      });
      return obj ? convertStrFilterToObj(obj) : null;
    }
    return filters.map(el => {
      return convertStrFilterToObj(el);
    });
  }
  return null;
};

export const addUrlFilter = (query, filterObj): string => {
  if (query) {
    const { filter } = readQuery(query);
    let filters = [];
    if (typeof filter === 'string') {
      filters = [filter];
    }
    if (Array.isArray(filter)) {
      filters = filter;
    }
    filters.push(`${filterObj.field}||${filterObj.type}||${filterObj.value}`);
    return stringifyQuery({
      filter: filters,
    });
  }
  return stringifyQuery({
    filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`],
  });
};

export const changeUrlFilter = (query, filterObj): string => {
  if (query) {
    const { filter } = readQuery(query);
    let filters = [];
    if (typeof filter === 'string') {
      filters = [filter];
    }
    if (Array.isArray(filter)) {
      filters = filter;
    }
    filters = filters.map(el => {
      const { field, type } = convertStrFilterToObj(el);
      if (field === filterObj.field && type === filterObj.type) {
        return `${filterObj.field}||${filterObj.type}||${filterObj.value}`;
      }
      return el;
    });
    return stringifyQuery({
      filter: filters,
    });
  } else {
    return stringifyQuery({
      filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`],
    });
  }
};

export const removeUrlFilter = (query, filterObj): string => {
  if (query) {
    const { filter } = readQuery(query);
    let filters = [];
    if (typeof filter === 'string') {
      filters = [filter];
    }
    if (Array.isArray(filter)) {
      filters = filter;
    }
    filters = filters.filter(el => {
      const { field, type } = convertStrFilterToObj(el);
      return !(field === filterObj.field && type === filterObj.type);
    });
    return stringifyQuery({
      filter: filters,
    });
  } else {
    return stringifyQuery({
      filter: [],
    });
  }
};

const valueToString = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value;
};
