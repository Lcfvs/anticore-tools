import {text} from './text';

export function isEmpty(node) {
  return !(text(node) || '').trim().length;
}