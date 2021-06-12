import { odd } from './odd-item-in-list';

it('finds the odd item in the list', () => {
    expect(odd([9, 3, 9, 3, 9, 7, 9, 8])).toBe(7);
    expect(odd([])).toBeNull();
});
