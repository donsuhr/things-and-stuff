import {
    isPlainObject,
    sequenceKeys,
    hasGap,
    flattenObj,
} from './remoteinterview';

test('it plain objects', () => {
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject('hello')).toBe(false);
});

test('creates a sequence of keys in order', () => {
    const objIn = {
        '0': 0,
        '1': 1,
        '2': 2,
        '5': 5,
    };

    const expectedResult = [0, 1, 2, 5];
    expect(sequenceKeys(Object.keys(objIn))).toEqual(expectedResult);
});

test('hasGap', () => {
    expect(hasGap([0, 1, 3])).toBe(true);
    expect(hasGap([1, 1, 2])).toBe(true);
    expect(hasGap([0, 1, 2])).toBe(false);
});

test('flattens 1 nope', () => {
    const objIn = {
        '0': 0,
        '1': 1,
        '2': 2,
        '5': 5,
    };
    expect(flattenObj(objIn)).toEqual(objIn);
});

test('flattens second level', () => {
    const objIn = {
        '0': 0,
        '5': 5,
        a: {
            '0': 'a0',
            '1': 'a1',
            '2': 'a2',
        },
    };

    const expectedResult = {
        '0': 0,
        '5': 5,
        a: ['a0', 'a1', 'a2'],
    };
    expect(flattenObj(objIn)).toEqual(expectedResult);
});

test('flattens 1 yep', () => {
    const objIn = {
        '0': 0,
        '1': 1,
        '2': 2,
    };
    expect(flattenObj(objIn)).toEqual([0, 1, 2]);
});

test('flattens two things', () => {
    const objIn = {
        '0': 0,
        '1': 5,
        '2': {
            '0': 'a0',
            '1': 'a1',
            '2': 'a2',
        },
    };

    const expectedResult = [0, 5, ['a0', 'a1', 'a2']];
    expect(flattenObj(objIn)).toEqual(expectedResult);
});

test('it non destructive', () => {
    const objIn = {
        '0': 0,
        '1': 1,
        '3': 3,
    };
    expect(flattenObj(objIn)).not.toBe(objIn);
});

test('flattens two things not top', () => {
    const objIn = {
        foo: 'test',
        bar: {
            '0': 0,
            '1': 5,
            '2': {
                '0': 'a0',
                '1': 'a1',
                '2': 'a2',
            },
        },
    };

    const expectedResult = { foo: 'test', bar: [0, 5, ['a0', 'a1', 'a2']] };
    expect(flattenObj(objIn)).toEqual(expectedResult);
});
