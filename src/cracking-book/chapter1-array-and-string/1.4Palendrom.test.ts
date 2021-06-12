import { isPalendrom } from './1.4Palendrom';

test('it palendromes', () => {
    expect(isPalendrom('taco catss')).toBe( true );
    expect(isPalendrom('taco taco')).toBe(true);
    expect(isPalendrom('dog')).toBe(false);
});
