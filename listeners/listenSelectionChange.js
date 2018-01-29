import {listen} from './listen';
import {one} from '../queries/one';

export function listenSelectionChange(listener, useCapture) {
  return listen('selectionchange', one, listener, useCapture);
}