import { removeNr } from './sum-x-y';

test('it ', () => {
    expect(removeNr(26)).toEqual([
        [15, 21],
        [21, 15],
    ]);
});

test('it ', () => {
    expect(removeNr(100)).toEqual([]);
});

test('it ', () => {
    // expect(removeNr(10)).toEqual([[1, 1]]);
});
