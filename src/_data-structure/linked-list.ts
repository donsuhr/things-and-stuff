import { DataStructureNode } from './linked-list-node';

interface Snake {
    value: any;
    next?: Snake;
}

export function create() {
    const head: Snake = { value: null };
    let next = head;

    return {
        add(value: any) {
            next.value = value;
            next.next = { value: null };
            next = next.next;
        },
        getFirst() {
            return head;
        },
    };
}

// ------------

export class LinkedList<T> {
    private head: DataStructureNode<T> | null = null;

    public add(val: DataStructureNode<T> | T) {
        let node;
        if (val instanceof DataStructureNode) {
            node = val;
        } else {
            node = new DataStructureNode<T>();
            node.item = val;
        }
        if (!this.head) {
            this.head = node;
        }
        return node;
    }

    public getFirst(){
        return this.head;
    }
}
