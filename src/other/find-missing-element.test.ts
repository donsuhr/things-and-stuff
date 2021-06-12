import { findMissing } from './find-missing-element';

test('it can find', () => {
    expect(findMissing([1, 2, 5, 3])).toBe(4);
    expect(findMissing([2])).toBe(1);
    expect(findMissing([])).toBe(1);
    expect(findMissing([2, 3])).toBe(1);
    expect(findMissing([3, 1, 5, 4])).toBe(2);
    expect(findMissing([1])).toBe(2);
});
