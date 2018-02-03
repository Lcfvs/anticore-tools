import {toString} from './toString';

export function isObject(value) {
  return toString(value) === '[object Object]';
}