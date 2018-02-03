# anticore-tools
[DRAFT] An [anticore](https://github.com/Lcfvs/anticore) toolbox

## dom

```js
on(selector, element, middleware)
```


### dom/infos

```js
isElement(node)
```

```js
isEmpty(node)
```

```js
isText(node)
```

```js
matches(selector, node)
```

```js
nodeName(node)
```

```js
text(node)
```

### dom/listeners

```js
listen(event, element, listener, useCapture)
```

```js
listenBack(element, listener, useCapture)
```

```js
listenBlur(element, listener, useCapture)
```

```js
listenChange(element, listener, useCapture)
```

```js
listenClick(element, listener, useCapture)
```

```js
listenDelete(element, listener, useCapture)
```

```js
listenDown(element, listener, useCapture)
```

```js
listenDrag(element, listener, useCapture)
```

```js
listenDrop(element, listener, useCapture)
```

```js
listenEnter(element, listener, useCapture)
```

```js
listenFocus(element, listener, useCapture)
```

```js
listenLeft(element, listener, useCapture)
```

```js
listenMouseOver(element, listener, useCapture)
```

```js
listenMouseOut(element, listener, useCapture)
```

```js
listenRight(element, listener, useCapture)
```

```js
listenSelectionChange(element, listener, useCapture)
```

```js
listenShiftEnter(element, listener, useCapture)
```

```js
listenSubmit(element, listener, useCapture)
```

```js
listenUp(element, listener, useCapture)
```

### dom/queries

```js
all(selector, node)
```

```js
closest(selector, node)
```

```js
closestOrSelf(selector, node)
```

```js
firstOrSelf(node)
```

```js
lastOrSelf(node)
```

```js
nextSiblings(node)
```

```js
one(selector, node)
```

```js
previousSiblings(node)
```

### dom/selection

```js
current()
```

```js
end(node)
```

```js
ends(node)
```

```js
next(node, targets)
```

```js
previous(node, targets)
```

```js
select(node, start, end)
```

```js
start(node)
```

```js
starts(node)
```

### dom/shapers

```js
after(node, refNode)
```

```js
afterAll(nodes, refNode)
```

```js
append(node, parent)
```

```js
appendAll(nodes, parent)
```

```js
element(tag, config)
```

```js
fragment()
```

```js
insert(node, refNode, parent)
```

```js
insertAll(nodes, refNode, parent)
```

```js
prepend(node, parent)
```

```js
prependAll(nodes, parent)
```

```js
remove(node)
```

```js
removeAll(nodes)
```

```js
replace(node, refNode)
```

```js
update(node, config)
```

```js
updateAll(nodes, config)
```

```js
wrap(wrapper, node)
```

```js
wrapAll(wrapper, node)
```

## utils

```js
global
```

### utils/array

```js
every(values, callback, thisArg)
```

```js
filter(values, callback, thisArg)
```

```js
forEach(values, callback, thisArg)
```

```js
indexOf(values, value)
```

```js
map(values, callback, thisArg)
```

```js
reverse(values)
```

```js
slice(values, begin, end)
```

### utils/function

```js
demethodize(method, thisArg, ...params)
```

### utils/object

```js
create(prototype, descriptors)
```

```js
isObject(value)
```

```js
keys(object)
```

```js
toString(object)
```


## License

[MIT](./licence.md)