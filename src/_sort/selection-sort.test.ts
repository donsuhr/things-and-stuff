import {
    selectionSort,
    getSmallestIndex,
    selectionSortInPlace,
} from './selection-sort';
// import {
// selectionSortDaily,
// selectionSortDailyInPlace,
// } from '../_daily/selectionSort';
import { randomNumbers, isSorted } from '../util';

describe.each([
    { fn: selectionSort },
    { fn: selectionSortInPlace },
    // { fn: selectionSortDaily },
    // { fn: selectionSortDailyInPlace },
])('selection-sort $fn.name', ({ fn: sort }) => {
    it('sorts some things', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut, getSmallestIndex);
        expect(isSorted(sorted)).toBe(true);
    });

    it('sorts some things reversed', () => {
        if (
            sort === selectionSortInPlace
            // || sort === selectionSortDailyInPlace
        ) {
            return;
        }
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut);
        expect(isSorted(sorted, true)).toBe(true);
    });
});
