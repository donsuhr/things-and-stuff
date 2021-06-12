import { twoSum } from './two-sum';

test('short', () => {
    expect(twoSum([1, 2], 3)).toEqual([0, 1]);
});

test('longer', () => {
    expect(twoSum([1, 2, 5, 8, 9], 17)).toEqual([3, 4]);
});

test('fail', () => {
    expect(twoSum([1, 2, 5, 8, 9], 22)).toBeNull();
});
