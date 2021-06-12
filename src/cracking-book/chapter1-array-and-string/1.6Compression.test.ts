import { compress } from './1.6Compression';

test('it compress', () => {
    expect(compress('hello world')).toBe('h1e1l2o1 1w1o1r1l1d1');
    expect(compress('aabcccccaaa')).toBe('a2b1c5a3');
});
