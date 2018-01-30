import {insert} from './insert';

export function prepend(node, parent) {
  return insert(node, parent.firstChild, parent);
}