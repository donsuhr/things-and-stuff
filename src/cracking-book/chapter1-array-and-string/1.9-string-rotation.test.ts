import { isRotation } from './1.9-string-rotation';

test('short string', () => {
    expect(isRotation('ab', 'ba')).toBeTruthy();
});

test('wrong length', () => {
    expect(isRotation('bookbook', 'book')).toBeFalsy();
});

test('double string', () => {
    expect(isRotation('bookbook', 'kbookboo')).toBeTruthy();
});

test('repeat', () => {
    expect(isRotation('aaaa', 'aaaa')).toBeTruthy();
});

test('book example', () => {
    expect(isRotation('waterbottle', 'erbottlewat')).toBeTruthy();
});
