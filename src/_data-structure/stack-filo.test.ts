import { Stack } from './stack-filo';

test('it pushes down', () => {
    const sut = new Stack<string>();
    sut.push('something');
    expect(sut.pop()).toBe('something');
});

test('null for empty', () => {
    const sut = new Stack<string>();
    expect(sut.pop()).toBeNull();
});

test('it pushes down two ', () => {
    const sut = new Stack<string>();
    sut.push('something');
    sut.push('else');
    expect(sut.pop()).toBe('else');
    expect(sut.pop()).toBe('something');
});

test('array of stacks of strings', () => {
    // just checking signature
    const sut: Stack<string>[] = [new Stack<string>(), new Stack<string>()];
    sut[0].push('foo');
    sut[1].push('bar');
});

test('can convert to binary ', () => {
    const fooStack = new Stack<number>();
    let N = 50;
    while (N > 0) {
        fooStack.push(N % 2);
        N = Math.floor(N / 2);
    }
    const stringArray = [];
    while (!fooStack.isEmpty()) {
        stringArray.push(fooStack.pop());
    }
    expect(stringArray.join('')).toBe('110010');
});

test('it can peek ', () => {
    const sut = new Stack<string>();
    sut.push('something');
    sut.push('else');
    expect(sut.peek()).toBe('else');
});

test('it can peek empty', () => {
    const sut = new Stack<string>();
    expect(sut.peek()).toBeNull();
});

test('it can push and pop a zero', () => {
    const sut = new Stack<number>();
    sut.push(0);
    expect(sut.peek()).toBe(0);
    expect(sut.pop()).toBe(0);
});
