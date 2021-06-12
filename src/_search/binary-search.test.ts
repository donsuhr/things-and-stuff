import { binarySearch } from './binary-search';

it('finds some things', () => {
    const list = [1, 3, 5, 6, 7, 9];
    expect(binarySearch(list, 3)).toBe(1);
    expect(binarySearch(list, 11)).toBe(-1);
});
