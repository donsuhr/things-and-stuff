import { fill, call, is } from './call';

test('it fills', () => {
    expect(call(fill, 3, 't').length).toBe(3);
});

/*
test('it fails if second argument is not a string', () => {
    function explode(x: number, y: number): number {
        throw new Error('error');
        return x + y;
    }

    expect(() => {
        call(explode, 3, 3);
    }).toThrow();
});
*/

test('is numbers', () => {
    expect(is('string', 'otherstring')).toBe(false);
    expect(is(42, 42)).toBe(true);
    // expect(is(42)).toBe(true);
    expect(is(true, false)).toBe(false);
    // expect(is(10, 'foo')).toBe(false);
    expect(is(10, 10, 10)).toBe(true);
    expect(is([1], [1, 2], [1, 2, 3])).toBe(false);
});
