import {insert} from './insert';

export function wrap(wrapper, node) {
  insert(node, null, wrapper);

  return wrapper;
}