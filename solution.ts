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