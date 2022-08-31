import { Bag } from './bag';

test('it adds item', () => {
    const sut = new Bag<number>();
    sut.add(1);
});

test('iterate', () => {
    const sut = new Bag<number>();
    sut.add(1);
    sut.add(2);
    sut.add(3);
    sut.add(4);
    let counter = 4;
    // eslint-disable-next-line no-restricted-syntax
    for (const val of sut) {
        expect(val).toBe(counter--);
    }
});
