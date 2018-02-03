import {isObject} from '../../utils/object/isObject';
import {keys} from '../../utils/object/keys';
import {listen} from '../listeners/listen';
import {forEach} from '../../utils/array/forEach';

export function update(element, config) {
  if (isObject(config)) {
    forEach(keys(config), function(name) {
      let
      value = config[name];

      if (name.substr(0, 2) === 'on') {
        listen(name.substr(2).toLowerCase(), element, value);
      } else if (name === 'style' && isObject(value)) {
        forEach(keys(value), function(name) {
          element.style[name] = value[name];
        });
      } else if (name === 'dataset' && isObject(value)) {
        forEach(keys(value), function(name) {
          element.dataset[name] = value[name];
        });
      } else if (name === 'text') {
        element.innerHTML = '';
        element.appendChild(element.ownerDocument.createTextNode(value));
      } else if (name === 'parent') {
        value.appendChild(element);
      } else if (name === 'next') {
        value.parentNode.insertBefore(element, value);
      } else {
        element.setAttribute(name, value);
      }
    });
  }

  return element;
}