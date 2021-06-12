import { isSorted, randomNumber } from './util';

test('it sorts', () => {
    expect(isSorted([1, 2, 3])).toBe(true);
    expect(isSorted([3, 2, 1], true)).toBe(true);
    expect(isSorted([3, 2, 1, 5], true)).toBe(false);
});

test('it random numbers', () => {
    for (let i = 0; i < 100; i++) {
        const value = randomNumber();
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(10);
    }
});
