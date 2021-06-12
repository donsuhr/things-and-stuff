import { solution } from './5.2GenomicRangeQuery';

test('one', () => {
    const P = [0];
    const Q = [0];
    const result = [1];
    expect(solution('A', P, Q)).toEqual(result);
});

test('one alt', () => {
    const P = [0];
    const Q = [0];
    const result = [4];
    expect(solution('T', P, Q)).toEqual(result);
});

test('two', () => {
    const P = [0, 0];
    const Q = [0, 1];
    const result = [1, 1];
    expect(solution('AC', P, Q)).toEqual(result);
});

test('three', () => {
    const P = [2, 5, 0];
    const Q = [4, 5, 6];
    const result = [2, 4, 1];
    expect(solution('CAGCCTA', P, Q)).toEqual(result);
});
