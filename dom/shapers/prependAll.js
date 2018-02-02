import {prepend} from './prepend';
import {forEach} from '../../utils/array/forEach';
import {slice} from '../../utils/array/slice';
import {insert} from './insert';

export function prependAll(nodes, parent) {
  let
  items = slice(nodes, 0),
  first;

  if (items.length) {
    return;
  }

  first = prepend(items.shift(), parent);

  forEach(items, function(item) {
    insert(item, first.nextSibling, parent);
  });
}