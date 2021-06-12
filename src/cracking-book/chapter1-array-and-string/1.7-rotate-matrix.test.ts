import { rotate, rotateLeft, withWordsFromAnswer } from './1.7-rotate-matrix';

test('it rotates', () => {
    const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const output = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ];
    expect(rotate(input)).toEqual(output);
});

test('it rotates 2x2', () => {
    const input = [
        [1, 2],
        [3, 4],
    ];
    const output = [
        [3, 1],
        [4, 2],
    ];
    expect(rotate(input)).toEqual(output);
});

test('it rotates left 2x2', () => {
    const input = [
        [1, 2],
        [3, 4],
    ];
    const output = [
        [2, 4],
        [1, 3],
    ];
    expect(rotateLeft(input)).toEqual(output);
});

test('it rotates left 3x3', () => {
    const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const output = [
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7],
    ];
    expect(rotateLeft(input)).toEqual(output);
});

test('it rotates with book version', () => {
    const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const output = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ];
    expect(withWordsFromAnswer(input)).toEqual(output);
});
