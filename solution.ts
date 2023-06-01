Here is a TypeScript solution for finding the lowest common ancestor of two nodes in a binary tree:

```typescript
class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    findLowestCommonAncestor(root: Node | null, value1: number, value2: number): Node | null {
        if (!root) {
            return null;
        }

        if (root.value === value1 || root.value === value2) {
            return root;
        }

        const left = this.findLowestCommonAncestor(root.left, value1, value2);
        const right = this.findLowestCommonAncestor(root.right, value1, value2);

        if (left && right) {
            return root;
        }

        return left ? left : right;
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

const lca = tree.findLowestCommonAncestor(tree.root, 4, 5);
if (lca) {
    console.log(`Lowest Common Ancestor is ${lca.value}`);
} else {
    console.log('Lowest Common Ancestor not found');
}
```

This code first defines a `Node` class for the nodes of the binary tree and a `BinaryTree` class for the binary tree itself. The `findLowestCommonAncestor` method in the `BinaryTree` class is used to find the lowest common ancestor of two nodes. The `findLowestCommonAncestor` method uses a recursive approach to traverse the binary tree and find the lowest common ancestor. The main logic of the method is that if the current node is one of the two nodes, it returns the current node. If the current node is not one of the two nodes, it checks the left and right subtrees. If both subtrees return a node, it means that the current node is the lowest common ancestor. If only one subtree returns a node, it means that the lowest common ancestor is in that subtree.