import { recoverSecret, TripletArray } from './random-triplets';

test('empty', () => {
    const A: TripletArray = [];
    expect(recoverSecret(A)).toBe('');
});

test('one', () => {
    const A: TripletArray = [['a', 'b', 'd']];
    expect(recoverSecret(A)).toBe('abd');
});

test('it does two strings', () => {
    const A: TripletArray = [
        ['a', 'b', 'd'],
        ['b', 'c', 'd'],
    ];
    expect(recoverSecret(A)).toBe('abcd');
});

test('it does three strings', () => {
    const A: TripletArray = [
        ['a', 'b', 'e'],
        ['b', 'd', 'e'],
        ['b', 'c', 'd'],
    ];
    expect(recoverSecret(A)).toBe('abcde');
});

test('start part', () => {
    const A: TripletArray = [
        ['c', 'd', 'e'],
        ['a', 'b', 'c'],
    ];
    expect(recoverSecret(A)).toBe('abcde');
});

test('start part', () => {
    const A: TripletArray = [
        ['c', 'd', 'e'],
        ['a', 'c', 'd'],
    ];
    expect(recoverSecret(A)).toBe('acde');
});

test('start part', () => {
    const A: TripletArray = [
        ['c', 'e', 'f'],
        ['c', 'd', 'e'],
    ];
    expect(recoverSecret(A)).toBe('cdef');
});

test('their test', () => {
    const secret1 = 'whatisup';
    const triplets1: TripletArray = [
        ['t', 'u', 'p'],
        ['w', 'h', 'i'],
        ['t', 's', 'u'],
        ['a', 't', 's'],
        ['h', 'a', 'p'],
        ['t', 'i', 's'],
        ['w', 'h', 's'],
    ];
    const ans = recoverSecret(triplets1);
    expect(ans).toBe(secret1);
});

test('their test 2', () => {
    const A: TripletArray = [
        ['f', 'u', 'n'],
        ['h', 'i', 'f'],
        ['t', 'i', 'n'],
        ['m', 'a', 's'],
        ['m', 'a', 't'],
        ['m', 'i', 's'],
    ];

    expect(recoverSecret(A)).toBe('mathisfun');
});
