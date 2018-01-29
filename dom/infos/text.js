import {isElement} from './isElement';

export function text(node) {
  return isElement(node)
  ? node.textContent
  : node.nodeValue;
}