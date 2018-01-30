import {insert} from './insert';
import {forEach} from '../../utils/array/forEach';

export function insertAll(nodes, refNode, parent) {
  forEach(nodes, function (node) {
    insert(node, refNode, parent);
  });
}