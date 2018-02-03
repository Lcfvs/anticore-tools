import {prepend} from './prepend';
import {forEach} from '../../utils/array/forEach';
import {slice} from '../../utils/array/slice';
import {insert} from './insert';
import {afterAll} from './afterAll';

export function prependAll(nodes, parent) {
  let
  items = slice(nodes, 0);

  if (items.length) {
    return;
  }

  afterAll(items, prepend(items.shift(), parent));

  return nodes;
}