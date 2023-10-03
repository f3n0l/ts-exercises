"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class TreeNode {
    value;
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
class BinarySearchTree {
    root = null;
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.right, value);
        }
        else {
            return true;
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
            }
            else if (node.left === null) {
                node = node.right;
            }
            else if (node.right === null) {
                node = node.left;
            }
            else {
                const minValue = this.findMinValue(node.right);
                node.value = minValue;
                node.right = this.deleteNode(node.right, minValue);
            }
        }
        return node;
    }
    findMinValue(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }
    inOrderTraversal(callback) {
        this.inOrderTraversalRecursive(this.root, callback);
    }
    inOrderTraversalRecursive(node, callback) {
        if (node !== null) {
            this.inOrderTraversalRecursive(node.left, callback);
            callback(node.value);
            this.inOrderTraversalRecursive(node.right, callback);
        }
    }
    preOrderTraversal(callback) {
        this.preOrderTraversalRecursive(this.root, callback);
    }
    preOrderTraversalRecursive(node, callback) {
        if (node !== null) {
            callback(node.value);
            this.preOrderTraversalRecursive(node.left, callback);
            this.preOrderTraversalRecursive(node.right, callback);
        }
    }
    postOrderTraversal(callback) {
        this.postOrderTraversalRecursive(this.root, callback);
    }
    postOrderTraversalRecursive(node, callback) {
        if (node !== null) {
            this.postOrderTraversalRecursive(node.left, callback);
            this.postOrderTraversalRecursive(node.right, callback);
            callback(node.value);
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
