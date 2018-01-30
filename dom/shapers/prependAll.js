import {prepend} from './prepend';
import {forEach} from '../../utils/array/forEach';

export function prependAll(nodes, parent) {
  forEach(nodes, function(node) {
    prepend(node, parent);
  });
}