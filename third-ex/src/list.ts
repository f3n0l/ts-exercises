class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T extends { toString(): string }> {
    private head: Node<T> | null = null;

    add(data: T): void {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data: T): void {
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

    search(data: T): number {
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

    print(): void {
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
