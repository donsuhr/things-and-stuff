import rowSumOddNumbers from './addTriangle';

test('1', () => {
    expect(rowSumOddNumbers(1)).toBe(1);
});
test('2', () => {
    expect(rowSumOddNumbers(2)).toBe(8);
});
test('3', () => {
    expect(rowSumOddNumbers(3)).toBe(27);
});
test('4', () => {
    expect(rowSumOddNumbers(4)).toBe(64);
});
test('42', () => {
    expect(rowSumOddNumbers(42)).toBe(74088);
});
