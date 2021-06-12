import { binarySearch } from './binary-search';

it('finds', () => {
    const list = [1, 2, 3];
    expect(binarySearch(list, 2)).toBe(1);
});

it('finds1', () => {
    const list = [1, 2, 3, 4];
    expect(binarySearch(list, 1)).toBe(0);
});

it('finds2', () => {
    const list = [1, 2, 3, 4];
    expect(binarySearch(list, 2)).toBe(1);
});

it('finds3', () => {
    const list = [1, 2, 3, 4];
    expect(binarySearch(list, 3)).toBe(2);
});
it('finds4', () => {
    const list = [1, 2, 3, 4];
    expect(binarySearch(list, 4)).toBe(3);
    const list2 = [1, 2, 3, 4];
    expect(binarySearch(list2, 5)).toBe(-1);
});

it('finds some things', () => {
    const list = [1, 3, 5, 6, 7, 9];
    expect(binarySearch(list, 3)).toBe(1);
    expect(binarySearch(list, 11)).toBe(-1);
});

