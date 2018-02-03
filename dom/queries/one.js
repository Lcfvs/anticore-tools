import {global} from '../../utils/global';

export function one(selector, refNode) {
  refNode = (refNode || global.document);

  return selector === undefined ? refNode : refNode.querySelector(selector);
}