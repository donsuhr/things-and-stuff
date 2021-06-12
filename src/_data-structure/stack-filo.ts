import { DataStructureNode } from './linked-list-node';

export class Stack<T> {
    private first: DataStructureNode<T> | null = null;

    isEmpty() {
        return this.first === null;
    }

    push(val: T) {
        const node: DataStructureNode<T> = new DataStructureNode();
        node.item = val;
        if (!this.isEmpty()) {
            node.next = this.first;
        }
        this.first = node;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.first;
        this.first = item!.next;

        return item!.item;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.first!.item;
    }
}
