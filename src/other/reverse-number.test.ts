import { reverseNumber } from './reverse-number';
// import { reverseNumberDaily } from '../_daily/reverseNumber';

describe.each([
    { fn: reverseNumber },
    // { fn: reverseNumberDaily }
])('reverse-number $fn.name', ({ fn: reverse }) => {
    it('reverses', () => {
        expect(reverse(123)).toBe(321);
    });
    it('reverses 0 ', () => {
        expect(reverse(0)).toBe(0);
    });
    it('reverses -1', () => {
        expect(reverse(-1)).toBe(-1);
    });
    it('reverses -123', () => {
        expect(reverse(-123)).toBe(-321);
    });
});
