import { arrayDiffv2 as arrayDiff } from './array-diff';

it('1', () => {
    expect(arrayDiff([], [4, 5])).toEqual([]);
});

it('2', () => {
    expect(arrayDiff([3, 4], [4])).toEqual([3]);
});

it('3', () => {
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
});

it('4', () => {
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
});
