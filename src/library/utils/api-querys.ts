import qs, { stringify } from 'qs';

export const readQuery = str => {
  return qs.parse(str);
};

export const stringifyQuery = obj => {
  return qs.stringify(obj, { encode: true, arrayFormat: 'repeat' });
};
