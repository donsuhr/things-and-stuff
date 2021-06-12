import { Counter } from './Counter';

test('it counts', () => {
    const sut = new Counter('mycounter');
    expect(sut.talley()).toEqual(0);
    sut.increment();
    expect(sut.talley()).toEqual(1);
});

test('it counts down', () => {
    const sut = new Counter('mycounter');
    sut.increment();
    sut.increment();
    sut.decrement();
    expect(sut.talley()).toEqual(1);
});

test('it logs out', () => {
    const sut = new Counter('mycounter');
    sut.increment();
    sut.increment();
    expect(`${sut}`).toContain('2');
    expect(`${sut}`).toContain('mycounter');
});
