import { selectionSort, getSmallestIndex } from './selection-sort';
// import { selectionSortDaily } from '../_daily/selectionSort';
import { randomNumbers, isSorted } from '../util';

describe.each([
    { fn: selectionSort },
    // { fn: selectionSortDaily }
])('selection-sort $fn.name', ({ fn: sort }) => {
    it('sorts some things', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut);
        expect(isSorted(sorted, true)).toBe(true);
    });

    it('sorts some things reverse', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut, getSmallestIndex);
        expect(isSorted(sorted)).toBe(true);
    });
});
