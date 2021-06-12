import { zeroMatrix } from './1.8-zero-matrix';

test('it zero  none', () => {
    expect(zeroMatrix([[]])).toEqual([[]]);
});
test('it zero 1x1 none', () => {
    expect(zeroMatrix([[1]])).toEqual([[1]]);
});
test('it zero 1x1 one', () => {
    expect(zeroMatrix([[0]])).toEqual([[0]]);
});
test('it zero 2x2 none', () => {
    expect(
        zeroMatrix([
            [1, 1],
            [1, 1],
        ]),
    ).toEqual([
        [1, 1],
        [1, 1],
    ]);
});
test('it zero 2x2 one', () => {
    expect(
        zeroMatrix([
            [1, 1],
            [0, 1],
        ]),
    ).toEqual([
        [0, 1],
        [0, 0],
    ]);
});
test('it zero 3x3 one', () => {
    expect(
        zeroMatrix([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]),
    ).toEqual([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
    ]);
});
test('it zero 3x3 two', () => {
    expect(
        zeroMatrix([
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
        ]),
    ).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
    ]);
});
test('it zero 4x4 two', () => {
    expect(
        zeroMatrix([
            [1, 1, 1, 1],
            [1, 0, 1, 1],
            [1, 1, 0, 1],
            [1, 1, 1, 1],
        ]),
    ).toEqual([
        [1, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 1],
    ]);
});
