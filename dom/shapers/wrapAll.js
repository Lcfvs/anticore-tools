import {wrap} from './wrap';
import {forEach} from '../../utils/array/forEach';
import {slice} from '../../utils/array/slice';

export function wrapAll(nodes, wrapper) {
  forEach(slice(nodes, 0), function (node) {
    wrap(wrapper, node);
  });

  return wrapper;
}