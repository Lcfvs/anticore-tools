import {forEach} from '../../utils/array/forEach';
import {update} from './update';

export function updateAll(elements, config) {
  forEach(elements, function (element) {
    update(element, config);
  });

  return elements;
}