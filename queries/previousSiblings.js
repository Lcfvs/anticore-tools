import {slice} from '../utils/array/slice';
import {indexOf} from '../utils/array/indexOf';

export function previousSiblings(node) {
  let
  siblings = node.parentNode.childNodes;

  return slice(siblings, 0, indexOf(siblings, node));
}