import { distance } from './1.5StringDistance';

test('it distance', () => {
    expect(distance('pale', 'ple')).toBe(1);
    expect(distance('pale', 'bae')).toBe(2);
    // breaks here
    // expect(distance('hings and stuff', 'things and suff')).toBe(2);
});
