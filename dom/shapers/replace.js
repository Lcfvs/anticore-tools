export function replace(node, refNode) {
  refNode.parentNode.replaceChild(node, refNode);

  return node;
}