import {update} from './update';
import {one} from '../queries/one';

export function element(tag, config) {
  return update(one().createElement(tag), config);
}