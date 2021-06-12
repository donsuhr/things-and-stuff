import { removeDuplicates, removeDuplicatesNoTemp } from './2.1-remove-doubles';

test('short string', () => {
    const ll = ['a', 'a', 'b'];

    expect(removeDuplicates(ll)).toEqual(['a', 'b']);
});

test('it works in the non set way', () => {
    const ll = ['b', 'a', 'a', 'b'];

    expect(removeDuplicatesNoTemp(ll)).toEqual(['b', 'a']);
});
