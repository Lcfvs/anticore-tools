import {append} from './append';
import {forEach} from '../utils/array/forEach';

export function appendAll(nodes, parent) {
  forEach(nodes, function (node) {
    append(node, parent);
  });
}