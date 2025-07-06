class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert value into the BST
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // no duplicates

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Find value in the BST
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  // In-order Traversal (Left, Root, Right)
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order Traversal (Root, Left, Right)
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order Traversal (Left, Right, Root)
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Level-order (Breadth First Search)
  levelOrder() {
    let result = [];
    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }
}
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("In-Order: ", bst.inOrder());   // [3, 5, 7, 10, 15]
console.log("Pre-Order:", bst.preOrder());  // [10, 5, 3, 7, 15]
console.log("Post-Order:", bst.postOrder()); // [3, 7, 5, 15, 10]
console.log("Level-Order:", bst.levelOrder()); // [10, 5, 15, 3, 7]

console.log("Search 7:", bst.search(7));    // true
console.log("Search 20:", bst.search(20));  // false
