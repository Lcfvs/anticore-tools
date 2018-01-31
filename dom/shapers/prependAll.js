import {prepend} from './prepend';
import {forEach} from '../../utils/array/forEach';
import {slice} from '../../utils/array/slice';

export function prependAll(nodes, parent) {
  forEach(slice(nodes, 0), function(node) {
    prepend(node, parent);
  });
}