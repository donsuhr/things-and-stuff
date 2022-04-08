import Calculator from './calculator';

test('one', () => {
    const foo = new Calculator();
    expect(foo.evaluate('123')).toBe(123);
});

test.skip('two', () => {
    const foo = new Calculator();
    expect(foo.evaluate('+ 2')).toBe(2);
});

test('three', () => {
    const foo = new Calculator();
    expect(foo.evaluate('10 * 11 + 1 - 10')).toBe(101);
});

test('1 + 1', () => {
    const foo = new Calculator();
    expect(foo.evaluate('1 + 1')).toBe(2);
});

test('1 + 1 - 1', () => {
    const foo = new Calculator();
    expect(foo.evaluate('1 + 1 - 1')).toBe(1);
});

test('1 - 2 - 3', () => {
    const foo = new Calculator();
    expect(foo.evaluate('1 - 2 + 3')).toBe(2);
});

test('10 * 5 / 2', () => {
    const foo = new Calculator();
    expect(foo.evaluate('10 * 5 / 2')).toBe(25);
});

test('10 +1', () => {
    const foo = new Calculator();
    expect(() => foo.evaluate('10 +1')).toThrow();
});
