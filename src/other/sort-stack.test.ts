import { array2stack, stack2array } from '../_data-structure/stack';
import { sortStack } from './sort-stack';
// import { sortMergeStacksDaily } from '../_daily/merge-2-unsorted-stacks';
import { randomNumbers, isSorted } from '../util';

const table = [
    {
        fn: sortStack,
    },
    // {
    // fn: sortMergeStacksDaily,
    // },
];

describe.each(table)('sort-stack: $fn.name', ({ fn: sort }) => {
    it('sorts the stack', () => {
        const a = array2stack([34, 3, 31, 98, 92, 23]);
        const b = sort(a);
        expect(stack2array(b)).toEqual([3, 23, 31, 34, 92, 98]);
    });

    it('sorts the stack 1', () => {
        const a = array2stack([34]);
        const b = sort(a);
        expect(stack2array(b)).toEqual([34]);
    });

    it('sorts the stack empty', () => {
        const a = array2stack([]);
        const b = sort(a);
        expect(stack2array(b)).toEqual([]);
    });

    it('sorts the stack 2', () => {
        const a = array2stack([2, 1]);
        const b = sort(a);
        expect(stack2array(b)).toEqual([1, 2]);
    });

    it('sorts some things', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const a = array2stack(sut);
        const b = sort(a);
        expect(isSorted(stack2array(b))).toBe(true);
    });

    it('sorts two lists', () => {
        const a = array2stack([34, 3, 31, 98, 92, 23]);
        const b = array2stack([34, 3, 31, 98, 92, 23]);
        const c = sort(a, b);
        expect(stack2array(c)).toEqual([
            3, 3, 23, 23, 31, 31, 34, 34, 92, 92, 98, 98,
        ]);
    });

    it('sorts', () => {
        const A = array2stack([5, 4, 2, 1]);
        const B = array2stack([6, 3, 2, 0]);
        const C = stack2array(sort(A, B));
        expect(C).toEqual([0, 1, 2, 2, 3, 4, 5, 6]);
    });

    it('sorts2', () => {
        const A = array2stack([2, 1]);
        const B = array2stack([3, 2, 0, 4, 1]);
        const C = stack2array(sort(A, B));
        expect(C).toEqual([0, 1, 1, 2, 2, 3, 4]);
    });

    it('sorts', () => {
        const A = array2stack([5, 5, 5]);
        const B = array2stack([5, 5, 5]);
        const C = stack2array(sort(A, B));
        expect(C).toEqual([5, 5, 5, 5, 5, 5]);
    });
});
