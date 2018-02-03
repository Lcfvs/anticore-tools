import {insert} from './insert';

export function after(node, refNode) {
  return insert(node, refNode.nextSibling, refNode.parentNode);
}