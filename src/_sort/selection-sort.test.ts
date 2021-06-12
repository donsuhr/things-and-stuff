import { selectionSort, getSmallestIndex } from './selection-sort';
import { randomNumbers, isSorted } from '../util';

it('sorts some things', () => {
    const sut = randomNumbers(10);
    expect(isSorted(sut)).toBe(false);
    const sorted = selectionSort(sut);
    expect(isSorted(sorted, true)).toBe(true);
});

it('sorts somet things reverse', () => {
    const sut = randomNumbers(10);
    expect(isSorted(sut)).toBe(false);
    const sorted = selectionSort(sut, getSmallestIndex);
    expect(isSorted(sorted)).toBe(true);
});
