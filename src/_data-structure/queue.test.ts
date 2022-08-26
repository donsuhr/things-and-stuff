import { Queue } from './queue';

test('it starts empty', () => {
    const sut = new Queue<string>();
    expect(sut.isEmpty()).toBe(true);
});

test('add one increases count', () => {
    const sut = new Queue<string>();
    expect(sut.size()).toBe(0);
    sut.enqueue('something');
    expect(sut.size()).toBe(1);
});

test('returns null on dequeue empty', () => {
    const sut = new Queue<string>();

    expect(sut.dequeue()).toBeNull();
});

test('it pushes', () => {
    const sut = new Queue<string>();
    sut.enqueue('something');
    expect(sut.dequeue()).toBe('something');
});

test('it pushes two', () => {
    const sut = new Queue<string>();
    sut.enqueue('something');
    sut.enqueue('else');
    expect(sut.dequeue()).toBe('something');
});
