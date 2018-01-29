import {listen} from './listen';

export function listenSubmit(element, listener, useCapture) {
  return listen('submit', element, listener, useCapture);
}