import { findit } from './find-double-intuit';

test('find duplicate', () => {
    const foo = [3, 0, 2, 1, 2];
    expect(findit(foo)).toBe(2);
});

test('edge', () => {
    const foo = [3, 0, 2, 1, 1];
    expect(findit(foo)).toBe(1);
});

test('not found', () => {
    const foo = [3, 0, 2, 1, 4];
    expect(findit(foo)).toBe(-1);
});
