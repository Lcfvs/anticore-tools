import {element} from './element';
import {wrapAll} from './wrapAll';
import {fragment} from './fragment';

export function parse(data) {
  const
  body = element('body');

  body.innerHTML = data;

  return wrapAll(fragment(), body.childNodes);
}