import {slice} from '../utils/array/slice';
import {indexOf} from '../utils/array/indexOf';

export function nextSiblings(node) {
  let
  siblings = node.parentNode.childNodes;

  return slice(siblings, indexOf(siblings, node) + 1);
}