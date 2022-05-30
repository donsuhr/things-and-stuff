import { sum, count, max, factorial, sumN, len } from './recursive';
// import { lenDaily } from '../_daily/lenRecursive';
// import { maxDaily } from '../_daily/maxRecursive';
// import { sumDaily } from '../_daily/sumRecursive';

it('counts the number of elements in a list', () => {
    expect(count([1, 2, 3])).toBe(3);
});
it('factorial', () => {
    expect(factorial(6)).toBe(720);
});
it('sumN', () => {
    expect(sumN(4)).toBe(10);
});

describe.each([
    { fn: len },
    // { fn: lenDaily }
])('length recursive: $fn.name', ({ fn: lenFn }) => {
    it('len', () => {
        expect(lenFn([1, 2, 3])).toBe(3);
    });

    it('len 1', () => {
        expect(lenFn([1])).toBe(1);
    });

    it('len 0', () => {
        expect(lenFn([])).toBe(0);
    });
});

const maxFunctions = [
    { fn: max },
    // { fn: maxDaily }
];

describe.each(maxFunctions)('max recursive: $fn.name', ({ fn: maxFn }) => {
    it('max', () => {
        expect(maxFn([1, 2, 3])).toBe(3);
    });

    it('max 1', () => {
        expect(maxFn([1])).toBe(1);
    });

    it('max null', () => {
        expect(maxFn([])).toBe(null);
    });

    it('max 4', () => {
        expect(maxFn([1, 4, 1])).toBe(4);
    });
    it('max various', () => {
        expect(maxFn([99, 1, 2, 3, 100])).toBe(100);
        expect(maxFn([99, 1])).toBe(99);
        expect(maxFn([99, 1, 2])).toBe(99);
    });
});

const sumFunctions = [
    { fn: sum },
    // { fn: sumDaily }
];

describe.each(sumFunctions)('sum recursive $fn.name', ({ fn: sumFn }) => {
    it('sum', () => {
        expect(sumFn([1, 2, 3])).toBe(6);
    });

    it('sum 0', () => {
        expect(sumFn([])).toBe(0);
    });

    it('sum 1', () => {
        expect(sumFn([2])).toBe(2);
    });
});
