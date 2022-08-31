import { bubbleSort } from './bubble-sort';
// import { bubbleSortDaily } from '../_daily/bubbleSort';
import { randomNumbers, isSorted } from '../util';

describe.each([
    { fn: bubbleSort },
    // { fn: bubbleSortDaily }
])('bubble-sort $fn.name', ({ fn: sort }) => {
    it('sorts some things', () => {
        const sut = randomNumbers(10);
        expect(isSorted(sut)).toBe(false);
        const sorted = sort(sut);
        expect(isSorted(sorted)).toBe(true);
    });

    it('aborts for no swaps', () => {
        const sut = [1, 2, 3];
        const sorted = sort(sut);
        expect(isSorted(sorted)).toBe(true);
    });
});
