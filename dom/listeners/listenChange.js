import {listen} from './listen';

export function listenChange(element, listener, useCapture) {
  return listen('change', element, listener, useCapture);
}