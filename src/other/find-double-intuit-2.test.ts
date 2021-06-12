import { findit } from './find-double-intuit-2';

test('find duplicate', () => {
    const foo = [3, 0, 2, 1, 2];
    expect(findit(foo)).toBe(2);
});

test('edge front', () => {
    const foo = [3, 0, 2, 3, 1];
    expect(findit(foo)).toBe(3);
});

test('not found', () => {
    const foo = [3, 0, 2, 1, 4];
    expect(findit(foo)).toBe(-1);
});
