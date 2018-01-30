import {text} from './text';
import {isElement} from './isElement';
import {one} from '../queries/one';

export function isEmpty(node) {
  return (!isElement(node) || !one('*', node))
  && !(text(node) || '').trim().length;
}