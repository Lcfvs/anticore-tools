import {listen} from './listen';

export function listenDrag(element, listener, useCapture) {
  return listen('drag', element, listener, useCapture);
}