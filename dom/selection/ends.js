import {current} from './current';
import {all} from '../queries/all';

export function ends(node) {
  let
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset,
  elements = all('*', node),
  last = elements[elements.length - 1].lastChild;

  return anchor === last
  && last.nodeValue.length - 1 === offset;
}