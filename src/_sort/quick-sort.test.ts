import { quickSort, quickSortInPlace } from './quick-sort';
// import { quickSortDaily } from '../_daily/quicksort';
import { randomNumbers, isSorted } from '../util';

describe.each([
    { fn: quickSort },
    { fn: quickSortInPlace },
    // { fn: quickSortDaily }
])('quick sort: $fn.name', ({ fn: sort }) => {
    it('sorts some things', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut);
        expect(isSorted(sorted)).toBe(true);
    });
});
