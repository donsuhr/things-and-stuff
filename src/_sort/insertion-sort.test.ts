import { insertionSort } from './insertion-sort';
// import { insertionSortDaily } from '../_daily/insertionSort';
import { randomNumbers, isSorted } from '../util';

describe.each([
    { fn: insertionSort },
    // { fn: insertionSortDaily }
])(
    'insertion-sort $fn.name',
    ({ fn: sort }) => {
        it('sorts some things', () => {
            const sut = randomNumbers(10);
            expect(isSorted(sut)).toBe(false);
            const sorted = sort(sut);
            expect(isSorted(sorted)).toBe(true);
        });
    },
);
