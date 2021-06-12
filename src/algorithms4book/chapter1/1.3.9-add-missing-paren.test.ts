import { fixParens } from './1.3.9-add-missing-paren';

test('short', () => {
    const input = '1 + 2)';
    const result = '(1 + 2)';
    expect(fixParens(input)).toBe(result);
});

test('long', () => {
    const input = '1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )';
    const result = '((1 + 2) * ((3 - 4) * (5 - 6)))';

    expect(fixParens(input)).toBe(result);
});

test('skip a (', () => {
    const input = '1 + 2 ) * (3 - 4 ) * 5 - 6 ) ) )';
    const result = '((1 + 2) * ((3 - 4) * (5 - 6)))';

    expect(fixParens(input)).toBe(result);
});
