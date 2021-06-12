import { rotateRight } from './rotate-array';

it('can rotate an array', () => {
    expect(rotateRight([], 1)).toEqual([]);
    expect(rotateRight([1, 2, 3], 1)).toEqual([3, 1, 2]);
    expect(rotateRight([1, 2, 3], 2)).toEqual([2, 3, 1]);
    expect(rotateRight([1, 2, 3], 3)).toEqual([1, 2, 3]);
});
