import { hasAllUniqueCharacters } from './1.1isUnique';

test('it returns true for unique characters', () => {
    expect(hasAllUniqueCharacters('abc')).toBe(true);
});

test('it returns false for duplicate chars', () => {
    expect(hasAllUniqueCharacters('abcc')).toBe(false);
});

test('it cant be unique if over char limit', () => {
    let A: string[] = [];
    for (let i = 0; i < 129; i += 1) {
        A = A.concat(String.fromCharCode(i));
    }

    expect(hasAllUniqueCharacters(A.join(''))).toBe(false);
});
