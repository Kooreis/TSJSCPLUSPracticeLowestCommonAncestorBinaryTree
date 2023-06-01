Here is a JavaScript solution for finding the lowest common ancestor of two nodes in a binary tree:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    findLowestCommonAncestor(root, n1, n2) {
        if (!root) {
            return null;
        }

        if (root.data === n1 || root.data === n2) {
            return root;
        }

        let left = this.findLowestCommonAncestor(root.left, n1, n2);
        let right = this.findLowestCommonAncestor(root.right, n1, n2);

        if (left && right) {
            return root;
        }

        return left ? left : right;
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log("LCA(4, 5) = " + tree.findLowestCommonAncestor(tree.root, 4, 5).data);
console.log("LCA(4, 6) = " + tree.findLowestCommonAncestor(tree.root, 4, 6).data);
console.log("LCA(3, 4) = " + tree.findLowestCommonAncestor(tree.root, 3, 4).data);
console.log("LCA(2, 4) = " + tree.findLowestCommonAncestor(tree.root, 2, 4).data);
```

This solution uses a recursive approach to traverse the binary tree and find the lowest common ancestor. It checks if the current node is one of the two nodes. If it is, it returns the current node. If not, it checks the left and right subtrees. If both subtrees return a node, it means that one node is in the left subtree and the other is in the right subtree, so the current node is the lowest common ancestor. If only one subtree returns a node, it means that both nodes are in that subtree, so it returns the node found.