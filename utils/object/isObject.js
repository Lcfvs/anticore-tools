import {demethodize} from '../function/demethodize';

const
toString = demethodize(Object.prototype.toString);

export function isObject(value) {
  return toString(value) === '[object Object]';
}