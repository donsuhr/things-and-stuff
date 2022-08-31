import {
    findLongestSubstringOfUniqueChars,
    findLongestWord,
    findLongestWordReduce,
} from './findLongestSubstringOfUniqueChars';
// import { findLongestSubstringOfUniqueCharsDaily } from '../_daily/findLongestSubstringOfUniqueChars';

describe.each([
    { fn: findLongestSubstringOfUniqueChars },
    // { fn: findLongestSubstringOfUniqueCharsDaily }
])(
    'finds the longest substring of unique characters in string: $fn.name',
    ({ fn: findit }) => {
        it('empty', () => {
            expect(findit('')).toBe(0);
        });

        it('abc', () => {
            expect(findit('abc')).toBe(3);
        });

        it('bbbbbb', () => {
            expect(findit('bbbbbb')).toBe(1);
        });

        it('rithmschool', () => {
            expect(findit('rithmschool')).toBe(7);
        });

        it('thisisawesome', () => {
            expect(findit('thisisawesome')).toBe(6);
        });

        it('thecatinthehat', () => {
            expect(findit('thecatinthehat')).toBe(7);
        });

        it('longestsubstring', () => {
            expect(findit('longestsubstring')).toBe(8);
        });

        it('thisishowwedoit', () => {
            expect(findit('thisishowwedoit')).toBe(6);
        });
    },
);

describe('findLongestWord', () => {
    it('finds the longest word', () => {
        expect(findLongestWord('the longest word')).toBe('longest');
    });

    it('finds the longest word with reduce', () => {
        expect(findLongestWordReduce('the longest word')).toBe('longest');
    });
});
