import {indexOf} from '../utils/array/indexOf';
import {all} from '../queries/all';

export function matches(selector, node) {
  let
  current = node;

  while (current.parentNode) {
    if (indexOf(all(selector, current.parentNode), node) > -1) {
      return true;
    }

    current = current.parentNode;
  }

  return false;
}