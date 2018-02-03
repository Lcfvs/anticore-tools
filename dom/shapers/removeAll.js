import {forEach} from '../../utils/array/forEach';
import {remove} from './remove';

export function removeAll(nodes) {
  forEach(nodes, remove);
}