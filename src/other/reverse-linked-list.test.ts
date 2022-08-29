import { reverseLinkedList } from './reverse-linked-list';
// import { reverseLinkedListDaily } from '../_daily/reverse-linked-list';
import {
    arrayToLinkedList,
    linkedListToArray,
} from '../_data-structure/linked-list';

describe.each([
    { fn: reverseLinkedList },
    // { fn: reverseLinkedListDaily }
])('reverses a linked list: $fn.name', ({ fn: reverse }) => {
    it('reverses', () => {
        const list = arrayToLinkedList([1, 2, 3]);
        const reversed = reverse(list.getFirst());
        const array = linkedListToArray(reversed);
        expect(array).toEqual([3, 2, 1]);
    });
});
