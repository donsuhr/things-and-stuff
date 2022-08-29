import { LinkedListNode } from './linked-list-node';

export class Queue<T> {
    private first: LinkedListNode<T> | null = null;

    private last: LinkedListNode<T> | null = null;

    private count: number = 0;

     isEmpty() {
        return this.first === null;
    }

     size() {
        return this.count;
    }

    enqueue(val: T) {
        const node: LinkedListNode<T> = new LinkedListNode();
        node.value = val;
        node.next = null;
        const oldLast = this.last;
        this.last = node;

        if (this.isEmpty()) {
            this.first = node;
        } else {
            oldLast!.next = node;
        }
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.first;
        this.first = item!.next;
        if (this.isEmpty()) {
            this.last = null;
        }
        this.count--;
        return item!.value;
    }
}
