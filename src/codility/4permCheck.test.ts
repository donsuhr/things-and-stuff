import { permCheck } from './4permCheck';

test('it', () => {
    expect(permCheck([4, 1, 3, 2])).toBe(1);
    expect(permCheck([4])).toBe(0);
    expect(permCheck([1, 4, 1])).toBe(0);
    expect(permCheck([1, 3, 2])).toBe(1);
    expect(permCheck([2, 2, 2])).toBe(0);
});
