import { quickSort } from './quick-sort';
import { randomNumbers, isSorted } from '../util';

it('sorts some things', () => {
    const sut = randomNumbers(10);
    expect(isSorted(sut)).toBe(false);
    const sorted = quickSort(sut);
    expect(isSorted(sorted)).toBe(true);
});
