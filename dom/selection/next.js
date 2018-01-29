import {indexOf} from '../../utils/array/indexOf';
import {start} from './start';

export function next(node, targets) {
  let
  key = indexOf(targets, node);

  while (node = targets[key += 1]) {
    if (node.parentNode) {
      return start(node);
    }
  }
}