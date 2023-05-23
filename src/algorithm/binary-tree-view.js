// get binary-tree value array from left view or top view

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
  const result = [{ ...treeNode, offset: 0 }];
  let minOffset = 0;
  let maxOffset = 0;

  const queue = [{ ...treeNode, offset: 0 }];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode.offset > maxOffset) {
      result.push(currentNode);
      maxOffset = currentNode.offset;
    } else if (currentNode.offset < minOffset) {
      result.push(currentNode);
      minOffset = currentNode.offset;
    }
    if (currentNode.left) {
      queue.push({ ...currentNode.left, offset: currentNode.offset + 1 });
    }
    if (currentNode.right) {
      queue.push({ ...currentNode.right, offset: currentNode.offset - 1 });
    }
  }

  return result.sort((a, b) => b.offset - a.offset).map((item) => item.value);
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
