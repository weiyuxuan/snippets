class Tree {
  constructor (value, leftNode, rightNode) {
    this.value = value;
    this.left = leftNode || null;
    this.right = rightNode || null;
  }

  setLeftChild (treeNode) {
    this.left = treeNode;
  }

  setRightChild (treeNode) {
    this.right = treeNode;
  }
}

function binaryTreeLeftView (treeNode) {
  const result = [];
  let maxHeight = 0;

  const stack = [{ ...treeNode, height: 1 }];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.height > maxHeight) {
      result.push(currentNode.value);
      maxHeight = currentNode.height;
    }
    if (currentNode.right) {
      stack.push({ ...currentNode.right, height: currentNode.height + 1 });
    }
    if (currentNode.left) {
      stack.push({ ...currentNode.left, height: currentNode.height + 1 });
    }
  }

  return result;
}

function binaryTreeTopView (treeNode) {
  const result = [];
  let maxLeftWidth = 0;
  let maxRightWidth = 0;

  const queue = [{ ...treeNode, leftWidth: 1, rightWidth: 1 }];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode.leftWidth > maxLeftWidth) {
      result.push({ value: currentNode.value, leftWidth: currentNode.leftWidth });
      maxLeftWidth = currentNode.leftWidth;
    } else if (currentNode.rightWidth > maxRightWidth) {
      result.push({ value: currentNode.value, leftWidth: currentNode.leftWidth });
      maxRightWidth = currentNode.rightWidth;
    }
    if (currentNode.left) {
      queue.push({ ...currentNode.left, leftWidth: currentNode.leftWidth + 1, rightWidth: currentNode.rightWidth - 1 });
    }
    if (currentNode.right) {
      queue.push({ ...currentNode.right, leftWidth: currentNode.leftWidth - 1, rightWidth: currentNode.rightWidth + 1 });
    }
  }

  return result.sort((a, b) => b.leftWidth - a.leftWidth).map((item) => item.value);
}

const tree7 = new Tree(7);
const tree6 = new Tree(6, tree7);

const tree5 = new Tree(5);
const tree4 = new Tree(4);

const tree3 = new Tree(3, null, tree6);
const tree2 = new Tree(2, tree4, tree5);
const tree1 = new Tree(1, tree2, tree3);

console.log(binaryTreeLeftView(tree1));
console.log(binaryTreeTopView(tree1));
