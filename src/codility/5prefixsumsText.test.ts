import {
    prefixSums,
    sliceSum,
    attempt1,
    onineAnswer,
    manualAttempt,
} from './5prefixsumsText';

it('prefix sums', () => {
    expect(prefixSums([1, 2, 3, 4, 5, 6])).toEqual([0, 1, 3, 6, 10, 15, 21]);
});

it('can sum up someo of those prefixes', () => {
    const prefixes = prefixSums([1, 2, 3, 4, 5, 6]);
    expect(sliceSum(prefixes, 0, 1)).toBe(3);
});

it('attempt 1', () => {
    expect(attempt1(34, 345, 17)).toBe(19);
});

it('attempt 1 end outside', () => {
    expect(attempt1(35, 340, 17)).toBe(18);
});

it('attempt 1 NO outside', () => {
    expect(attempt1(35, 341, 17)).toBe(18);
});

it('answer online', () => {
    expect(onineAnswer(11, 345, 17)).toBe(20);
});

it('manual attempt', () => {
    expect(manualAttempt(34, 345, 17)).toBe(19);
});

it('A < K attempt', () => {
    expect(manualAttempt(11, 345, 17)).toBe(20);
});
