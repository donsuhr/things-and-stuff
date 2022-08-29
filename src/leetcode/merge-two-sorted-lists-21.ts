import { LinkedListNode } from '../_data-structure/linked-list-node';

export const mergeSorted = (
    l1: LinkedListNode<any> | null,
    l2: LinkedListNode<any> | null,
) => {
    const head = new LinkedListNode();
    let tail: typeof head | null = head;
    let A: typeof l1 | null = l1;
    let B: typeof l2 | null = l2;
    while (A && B) {
        if (A.value < B.value) {
            tail.next = A;
            A = A.next;
        } else {
            tail.next = B;
            B = B.next;
        }
        tail = tail.next;
    }
    tail.next = A || B;
    return head.next;
};

export const mergeSortedRecursive = (
    A: LinkedListNode<any> | null,
    B: LinkedListNode<any> | null,
) => {
    if (A === null) return B;
    if (B === null) return A;
    let head;
    let nextA: typeof A | null = A;
    let nextB: typeof B | null = B;
    if (A.value < B.value) {
        head = A;
        nextA = A.next;
    } else {
        head = B;
        nextB = B.next;
    }
    head.next = mergeSortedRecursive(nextA, nextB);
    return head;
};
