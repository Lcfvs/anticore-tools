import {listen} from './listen';

export function listenDrop(element, listener, useCapture) {
  return listen('drop', element, listener, useCapture);
}