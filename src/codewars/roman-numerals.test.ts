import RomanNumerals from './roman-numerals';

it.only('makes', () => {
    expect(RomanNumerals.toRoman(1)).toBe('I');
    expect(RomanNumerals.toRoman(2)).toBe('II');
    expect(RomanNumerals.toRoman(3)).toBe('III');
    expect(RomanNumerals.toRoman(4)).toBe('IV');
    expect(RomanNumerals.toRoman(5)).toBe('V');
    expect(RomanNumerals.toRoman(6)).toBe('VI');
    expect(RomanNumerals.toRoman(9)).toBe('IX');
    expect(RomanNumerals.toRoman(1000)).toBe('M');
    expect(RomanNumerals.toRoman(2000)).toBe('MM');
    expect(RomanNumerals.toRoman(2500)).toBe('MMD');
    expect(RomanNumerals.toRoman(2600)).toBe('MMDC');

    expect(RomanNumerals.toRoman(3724)).toBe('MMMDCCXXIV');
    expect(RomanNumerals.toRoman(3999)).toBe('MMMCMXCIX');
    expect(RomanNumerals.toRoman(40)).toBe('XL');
    expect(RomanNumerals.toRoman(44)).toBe('XLIV');
    expect(RomanNumerals.toRoman(49)).toBe('XLIX');
    expect(RomanNumerals.toRoman(99)).toBe('XCIX');
    expect(RomanNumerals.toRoman(444)).toBe('CDXLIV');
    expect(RomanNumerals.toRoman(555)).toBe('DLV');
    expect(RomanNumerals.toRoman(900)).toBe('CM');


});

