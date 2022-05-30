import { DataStructureNode } from '../_data-structure/linked-list-node';

export const mergeSorted = (
    l1: DataStructureNode<any> | null,
    l2: DataStructureNode<any> | null,
) => {
    const head = new DataStructureNode();
    let tail: typeof head | null = head;
    let A: typeof l1 | null = l1;
    let B: typeof l2 | null = l2;
    while (A && B) {
        if (A.item < B.item) {
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
    A: DataStructureNode<any> | null,
    B: DataStructureNode<any> | null,
) => {
    if (A === null) return B;
    if (B === null) return A;
    let head;
    let nextA: typeof A | null = A;
    let nextB: typeof B | null = B;
    if (A.item < B.item) {
        head = A;
        nextA = A.next;
    } else {
        head = B;
        nextB = B.next;
    }
    head.next = mergeSortedRecursive(nextA, nextB);
    return head;
};
