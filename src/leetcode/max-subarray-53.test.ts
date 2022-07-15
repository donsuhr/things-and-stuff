import { maxSliceB, maxSliceC } from './max-subarray-53';
// import { maxSubArrayDaily } from '../_daily/maxSubArray';

const table = [
    { fn: maxSliceB },
    { fn: maxSliceC },
    // { fn: maxSubArrayDaily },
];

describe.each(table)('max subarray: $fn.name', ({ fn: maxSlice }) => {
    it('maxSlice', () => {
        expect(maxSlice([23171, 21011, 21123, 21366, 21013, 21367])).toBe(
            129051,
        );
        expect(maxSlice([5, -7, 3, 5, -2, 4, -1])).toBe(10);
        expect(maxSlice([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
        expect(maxSlice([5, 4, -1, 7, 8])).toBe(23);
        expect(maxSlice([1])).toBe(1);
    });
});
