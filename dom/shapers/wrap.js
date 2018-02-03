import {insert} from './insert';

export function wrap(wrapper, node) {
  if (!wrapper.parentNode && node.parentNode) {
    insert(wrapper, node);
  }

  insert(node, null, wrapper);

  return wrapper;
}