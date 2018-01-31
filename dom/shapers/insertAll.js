import {insert} from './insert';
import {forEach} from '../../utils/array/forEach';
import {slice} from '../../utils/array/slice';

export function insertAll(nodes, refNode, parent) {
  forEach(slice(nodes, 0), function (node) {
    insert(node, refNode, parent);
  });
}