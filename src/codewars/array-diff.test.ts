import { arrayDiffV2, arrayDiff as arrayDiffV1 } from './array-diff';

describe.each([{ fn: arrayDiffV1 }, { fn: arrayDiffV2 }])(
    'codewars array-diff: $fn.name',
    ({ fn: arrayDiff }) => {
        it('1', () => {
            expect(arrayDiff([], [4, 5])).toEqual([]);
        });

        it('2', () => {
            expect(arrayDiff([3, 4], [4])).toEqual([3]);
        });

        it('3', () => {
            expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
        });

        it('4', () => {
            expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
        });
    },
);
