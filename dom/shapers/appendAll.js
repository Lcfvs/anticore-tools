import {append} from './append';
import {forEach} from '../../utils/array/forEach';
import {slice} from '../../utils/array/slice';

export function appendAll(nodes, parent) {
  forEach(slice(nodes, 0), function (node) {
    append(node, parent);
  });
}