import { binarySearch, binarySearchRecursive } from './binary-search';
// import {
    // binarySearchDaily,
    // binarySearchRecursiveDaily,
// } from '../_daily/binarySearch';

const table = [
    { fn: binarySearch },
    { fn: binarySearchRecursive },
    // { fn: binarySearchDaily },
    // { fn: binarySearchRecursiveDaily },
];

describe.each(table)('binary-search: $fn.name', ({ fn: search }) => {
    it('finds some things', () => {
        const list = [1, 3, 5, 6, 7, 9];
        expect(search(list, 3)).toBe(1);
        expect(search(list, 11)).toBe(-1);
        expect(search(list, 5)).toBe(2);
        expect(search(list, 1)).toBe(0);
        expect(search(list, 9)).toBe(5);
    });
    it('finds edge case', () => {
        expect(search([], 2)).toBe(-1);
        expect(search([1], 2)).toBe(-1);
        expect(search([3], 3)).toBe(0);
    });
});
