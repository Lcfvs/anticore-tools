import {one} from '../queries/one';

export function fragment() {
  return one().createDocumentFragment();
}