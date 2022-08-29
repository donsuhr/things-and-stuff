import { LinkedListNode } from '../_data-structure/linked-list-node';

type Node = LinkedListNode<number> | null;

export const reverseLinkedList = (head: Node) => {
    let prev = null;
    let cur: Node = head;
    while (cur !== null) {
        const tmpNext: Node = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmpNext;
    }

    return prev;
};
