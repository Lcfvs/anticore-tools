import {matches} from '../infos/matches';

export function closest(selector, node) {
  let
  current = node;

  while (current.parentNode) {
    current = current.parentNode;

    if (matches(selector, current)) {
      return current;
    }
  }

  return null;
}