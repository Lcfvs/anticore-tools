import {listen} from './listen';

export function listenBlur(element, listener, useCapture) {
  return listen('blur', element, listener, useCapture);
}