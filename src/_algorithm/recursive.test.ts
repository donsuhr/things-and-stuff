import { sum, count, max, factorial, sumN } from './recursive';

it('sums', () => {
    expect(sum([1, 2, 3])).toBe(6);
});

it('counts the number of elements in a list', () => {
    expect(count([1, 2, 3])).toBe(3);
});
it('max', () => {
    expect(max([99, 1, 2, 3, 100])).toBe(100);
    expect(max([99, 1])).toBe(99);
    expect(max([99, 1, 2])).toBe(99);
});
it('factorial', () => {
    expect(factorial(6)).toBe(720);
});
it('sumN', () => {
    expect(sumN(4)).toBe(10);
});
