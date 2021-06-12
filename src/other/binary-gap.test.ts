import { binaryGap, binaryGap2 } from './binary-gap';

it('finds the most zeros in a binary number', () => {
    // 10000010001
    expect(binaryGap(1041)).toBe(5);
    // 100000
    expect(binaryGap(32)).toBe(0);
});

it('can find it by counting instead of splitting', ()=> {
    // 10000010001
    expect(binaryGap2(1041)).toBe(5);
    // 100000
    expect(binaryGap2(32)).toBe(0);
});
