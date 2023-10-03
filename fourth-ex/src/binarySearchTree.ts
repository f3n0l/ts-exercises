class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

export class BinarySearchTree {
    root: TreeNode | null = null;

    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

      delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }
     private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                const minValue = this.findMinValue(node.right);
                node.value = minValue;
                node.right = this.deleteNode(node.right, minValue);
            }
        }

        return node;
    }
      private findMinValue(node: TreeNode): number {
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

     inOrderTraversal(callback: (value: number) => void): void {
        this.inOrderTraversalRecursive(this.root, callback);
    }

    private inOrderTraversalRecursive(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraversalRecursive(node.left, callback);
            callback(node.value);
            this.inOrderTraversalRecursive(node.right, callback);
        }
    }

    preOrderTraversal(callback: (value: number) => void): void {
        this.preOrderTraversalRecursive(this.root, callback);
    }

    private preOrderTraversalRecursive(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            callback(node.value);
            this.preOrderTraversalRecursive(node.left, callback);
            this.preOrderTraversalRecursive(node.right, callback);
        }
    }

    postOrderTraversal(callback: (value: number) => void): void {
        this.postOrderTraversalRecursive(this.root, callback);
    }

    private postOrderTraversalRecursive(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.postOrderTraversalRecursive(node.left, callback);
            this.postOrderTraversalRecursive(node.right, callback);
            callback(node.value);
        }
    }
}
