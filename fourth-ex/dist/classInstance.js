"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearchTree_1 = require("./binarySearchTree");
const bst = new binarySearchTree_1.BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);
console.log('In-Order Traversal:');
bst.inOrderTraversal((value) => console.log(value));
console.log('Pre-Order Traversal:');
bst.preOrderTraversal((value) => console.log(value));
// Perform post-order traversal and print the elements
console.log('Post-Order Traversal:');
bst.postOrderTraversal((value) => console.log(value));
