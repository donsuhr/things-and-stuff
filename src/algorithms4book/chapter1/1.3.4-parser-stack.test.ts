import { isBalanced } from './1.3.4-parser-stack';

test('is easy', () => {
    expect(isBalanced('()')).toBe(true);
});

test('is easy false', () => {
    expect(isBalanced('(')).toBe(false);
});
test('is ballanced', () => {
    expect(isBalanced('[()]{}{[()()]()}')).toBe(true);
});

test('detects false', () => {
    expect(isBalanced('[(])')).toBe(false);
});
