class DictTree {
  constructor () {
    this.tree = {
      value: '',
      children: []
    };
  }

  insert (str) {
    const letters = str.split('');
    let currentNode = this.tree;

    for (const letter of letters) {
      const node = currentNode.children.find((item) => item.value === letter);
      if (!node) {
        const newNode = { value: letter, children: [] };
        currentNode.children.push(newNode);
        currentNode = newNode;
      } else {
        currentNode = node;
      }
    }
  }

  search (keyword) {
    const letters = keyword.split('');
    let currentNode = this.tree;

    for (const letter of letters) {
      const node = currentNode.children.find((item) => item.value === letter);
      if (!node) {
        return [];
      }
      currentNode = node;
    }

    return this.getSubTreePath(currentNode, letters.slice(0, letters.length - 1).join(''));
  }

  getSubTreePath (node, keyword) {
    const result = [];

    function parseNode (node, prefix = '') {
      if (!node.children || node.children.length === 0) {
        result.push(`${keyword}${prefix}${node.value}`);
        return;
      }

      for (const child of node.children) {
        parseNode(child, `${prefix}${node.value}`);
      }
    }

    parseNode(node);

    return result;
  }
}

const words = ['preference', 'present', 'pressure', 'preview', 'premium', 'statement', 'statistics', 'stabilize', 'stereotype', 'stethoscope', 'internship', 'interview', 'intersection', 'intermediate', 'interpretation', 'relationship', 'relaxation', 'religious', 'remarkable', 'remember'];

const dict = new DictTree();

for (const word of words) {
  dict.insert(word);
}

console.log(dict.search('pre'));
