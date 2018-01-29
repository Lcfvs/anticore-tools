import {listen} from './listen';

export function listenFocus(element, listener, useCapture) {
  return listen('focus', element, listener, useCapture);
}