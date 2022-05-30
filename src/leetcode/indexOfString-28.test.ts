import { indexOf } from './indexOfString-28';
// import {indexOfDaily} from '../_daily/indexOf';

describe.each([
    { fn: indexOf },
    // { fn: indexOfDaily }
])('indexOf $fn.name', ({ fn: indexOfFn }) => {
    it('finds the index', () => {
        expect(indexOfFn('hello', 'll')).toBe(2);
    });

    it('finds the index', () => {
        expect(indexOfFn('hello', 'hello')).toBe(0);
    });

    it('aborts fast for too long', () => {
        expect(indexOfFn('abc', 'abcd')).toBe(-1);
    });

    it('finds the string 2', () => {
        expect(indexOfFn('aaaaa', 'bba')).toBe(-1);
    });

    it('finds the string 2', () => {
        expect(indexOfFn('mississippi', 'issip')).toBe(4);
    });

    it('finds the string 2', () => {
        expect(indexOfFn('mississippi', 'pi')).toBe(9);
    });
});
