import { frogJump } from './frog-jump';

test('it', () => {
    expect(frogJump([1, 3, 1, 4, 2, 3, 5, 4], 5)).toBe(6);
    expect(frogJump([2, 1], 2)).toBe(1);
    expect(frogJump([5, 4, 3, 2, 1], 6)).toBe(-1);
    expect(frogJump([5, 5, 5], 3)).toBe(-1);
});
