import {listen} from './listen';

export function listenMouseOut(element, listener, useCapture) {
  return listen('mouseout', element, listener, useCapture);
}