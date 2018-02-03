import {forEach} from '../../utils/array/forEach';
import {remove} from './remove';
import {slice} from '../../utils/array/slice';

export function removeAll(nodes) {
  forEach(slice(nodes, 0), remove);

  return nodes;
}