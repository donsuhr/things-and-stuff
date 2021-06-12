import { nextSmaller, minify } from './next-smallest-number';

test('21', () => {
    expect(nextSmaller(21)).toBe(12);
});

test('531', () => {
    expect(nextSmaller(531)).toBe(513);
});

test('2071', () => {
    expect(nextSmaller(2071)).toBe(2017);
});

test('2991', () => {
    expect(nextSmaller(2991)).toBe(2919);
});

test('9', () => {
    expect(nextSmaller(9)).toBe(-1);
});

test('111', () => {
    expect(nextSmaller(111)).toBe(-1);
});

test('110', () => {
    expect(nextSmaller(110)).toBe(101);
});

test('1207', () => {
    expect(nextSmaller(1207)).toBe(1027);
});

test('1027', () => {
    expect(nextSmaller(1027)).toBe(-1);
});

// test.only('907', () => {
// expect(nextSmaller(907)).toBe(790);
// });

// test('1027', () => {
// expect(nextSmaller(1234567908)).toBe(1234567890);
// });


test('minify splits a string', () => {
    expect(minify(123)).toBe('123');
    expect(minify(321)).toBe('123');
});
