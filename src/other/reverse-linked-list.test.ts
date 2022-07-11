import { reverseLinkedList } from './reverse-linked-list';
// import { reverseLinkedListDaily } from '../_daily/reverse-linked-list';
import {
    LinkedList,
    arrayToLinkedList,
    linkedListToArray,
} from '../_data-structure/linked-list';

describe.each([
    { fn: reverseLinkedList },
    // { fn: reverseLinkedListDaily }
])('reverses a linked list: $fn.name', ({ fn: reverse }) => {
    it('reverses', () => {
        const list = arrayToLinkedList([1, 2, 3]);
        const newHead = reverse(list.getFirst());
        const newList = new LinkedList<number>();
        newList.add(newHead!);
        const array = linkedListToArray(newList);
        expect(array).toEqual([3, 2, 1]);
    });
});
