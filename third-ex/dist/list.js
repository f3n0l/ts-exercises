"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    data;
    next = null;
    constructor(data) {
        this.data = data;
    }
}
class LinkedList {
    head = null;
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    remove(data) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }
    search(data) {
        let index = 0;
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data.toString();
            if (current.next !== null) {
                result += ' -> ';
            }
            current = current.next;
        }
        console.log(result);
    }
}
exports.LinkedList = LinkedList;
