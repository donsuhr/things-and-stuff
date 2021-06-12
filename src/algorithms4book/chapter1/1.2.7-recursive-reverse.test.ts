import { reverse } from './1.2.7-recursive-reverse';

it('reverses the string', () => {
    expect(reverse('abcdefg')).toBe('gfedcba');
    expect(reverse('hello world')).toBe('dlrow olleh');
});
