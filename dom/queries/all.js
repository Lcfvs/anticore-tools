import {global} from '../../utils/global';

export function all(selector, refNode) {
  return (refNode || global.document).querySelectorAll(selector);
}