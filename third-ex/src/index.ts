import { LinkedList } from './list';

const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log("Original Linked List:");
list.print();

list.remove(2);
console.log("\nLinked List after removing 2:");
list.print();

console.log("\nIndex of 1:", list.search(1));
console.log("Index of 2:", list.search(2));
