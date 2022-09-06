import { mergeSort, mergeSortInPlace, biggest } from './merge-sort';
// import { mergeSortDaily } from '../_daily/mergeSort';
import { randomNumbers, isSorted } from '../util';

describe.each([
    { fn: mergeSort },
    { fn: mergeSortInPlace },
    // { fn: mergeSortDaily }
])('quick sort: $fn.name', ({ fn: sort }) => {
    it('sorts some things', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut);
        expect(isSorted(sorted)).toBe(true);
    });

    it('sorts some things reversed', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut, biggest);
        expect(isSorted(sorted, true)).toBe(true);
    });
});
