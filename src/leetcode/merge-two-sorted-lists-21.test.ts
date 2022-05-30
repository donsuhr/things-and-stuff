import { mergeSorted, mergeSortedRecursive } from './merge-two-sorted-lists-21';
import { LinkedList, arrayToLinkedList } from '../_data-structure/linked-list';

describe.each([
    { fn: mergeSorted },
    { fn: mergeSortedRecursive }
])('merge sorted list: $fn.name', ({ fn: sort }) => {
    it('sorts some things', () => {
        const A = arrayToLinkedList([1, 2, 3]);
        const B = arrayToLinkedList([1, 3, 4]);
        const sorted = sort(A.getFirst(), B.getFirst());
        const expected = arrayToLinkedList([1, 1, 2, 3, 3, 4]);
        expect(JSON.stringify(sorted)).toEqual(JSON.stringify(expected.getFirst()));
    });
    it('sorts some other things', () => {
        const A = arrayToLinkedList([1, 3, 4]);
        const B = arrayToLinkedList([1, 2, 3]);
        const sorted = sort(A.getFirst(), B.getFirst());
        const expected = arrayToLinkedList([1, 1, 2, 3, 3, 4]);
        expect(JSON.stringify(sorted)).toEqual(JSON.stringify(expected.getFirst()));
    });

    it('base case', () => {
        const A = new LinkedList<any>();
        const B = arrayToLinkedList([1]);
        const sorted = sort(A.getFirst(), B.getFirst());
        const expected = arrayToLinkedList([1]);
        expect(JSON.stringify(sorted)).toEqual(JSON.stringify(expected.getFirst()));
    });
});
