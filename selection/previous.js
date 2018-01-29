import {indexOf} from '../utils/array/indexOf';
import {end} from './end';

export function previous(node, targets) {
  let
  key = indexOf(targets, node);

  while (node = targets[key -= 1]) {
    if (node.parentNode) {
      return end(node);
    }
  }
}