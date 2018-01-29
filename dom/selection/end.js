import {lastOrSelf} from '../queries/lastOrSelf';
import {text} from '../infos/text';
import {select} from './select';

export function end(node) {
  let
  last = lastOrSelf(node);

  select(last, text(last).length);

  return last;
}