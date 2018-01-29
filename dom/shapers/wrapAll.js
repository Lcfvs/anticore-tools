import {wrap} from './wrap';
import {forEach} from '../../utils/array/forEach';

export function wrapAll(wrapper, nodes) {
  forEach(nodes, wrap.bind(null, wrapper));

  return parent;
}