import { missingInt } from './4missingInt';

test('finds a missing int', () => {
    expect(missingInt([-1, 0, 1, 2, 4])).toBe(3);
    expect(missingInt([1, 2, 3])).toBe(4);
    expect(missingInt([1])).toBe(2);
    expect(missingInt([])).toBe(1);
    expect(missingInt([-1, -3])).toBe(1);
});
