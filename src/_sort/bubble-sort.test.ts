import { bubbleSort } from './bubble-sort';
import { randomNumbers, isSorted } from '../util';

it('sorts some things', () => {
    const sut = randomNumbers(10);
    expect(isSorted(sut)).toBe(false);
    const sorted = bubbleSort(sut);
    expect(isSorted(sorted)).toBe(true);
});
