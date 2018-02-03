import {listen} from './listen';

export function listenMouseOver(element, listener, useCapture) {
  return listen('mouseover', element, listener, useCapture);
}