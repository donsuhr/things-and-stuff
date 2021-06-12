import { isPermutaionOf } from './1.2isPermutationOf';

test('true if string is permutation of other', () => {
    expect(isPermutaionOf('123', '321')).toBe(true);
    expect(isPermutaionOf('abc', 'cba')).toBe(true);
    expect(isPermutaionOf('abc', 'abd')).toBe(false);
    expect(isPermutaionOf('abb', 'abd')).toBe(false);
    expect(isPermutaionOf('abcc', 'ccba')).toBe(true);
    expect(isPermutaionOf('a', 'a')).toBe(true);
    expect(isPermutaionOf('', '')).toBe(true);
    expect(isPermutaionOf('a', 'ccba')).toBe(false);
});
