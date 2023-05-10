function preOrderUnRecur (node) {
  if (!node) {
    throw new Error('Empty Tree');
  }

  const stack = [];
  stack.push(node);
  while (stack.length !== 0) {
    node = stack.pop();
    console.log(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function levelOrderTraversal (node) {
  if (!node) {
    throw new Error('Empty Tree');
  }

  const queue = [];
  queue.push(node);
  while (queue.length !== 0) {
    node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
