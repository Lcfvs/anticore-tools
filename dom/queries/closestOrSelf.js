import {matches} from '../infos/matches';
import {closest} from './closest';

export function closestOrSelf(selector, node) {
  return matches(selector, node)
    ? node
    : closest(selector, node);
}