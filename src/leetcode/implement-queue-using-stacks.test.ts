import { QueueFromStacks } from './implement-queue-using-stacks-232';
// import { QueueFromStacksDaily } from '../_daily/queue-from-two-stacks';

describe.each([
    { fn: QueueFromStacks },
    // { fn: QueueFromStacksDaily }
])('Queue from Stacks: $fn.name', ({ fn: Queue }) => {
    it('pushes and peek', () => {
        const sut = new Queue();
        sut.push('foo');
        expect(sut.peek()).toBe('foo');
    });

    it('has isEmpty', () => {
        const sut = new Queue();
        expect(sut.isEmpty()).toBeTruthy();
        sut.push('foo');
        expect(sut.isEmpty()).toBeFalsy();
        sut.pop();
        expect(sut.isEmpty()).toBeTruthy();
    });

    it('can pop', () => {
        const sut = new Queue();
        sut.push('foo');
        expect(sut.pop()).toBe('foo');
    });

    it('can push pop', () => {
        const sut = new Queue();
        sut.push('foo');
        sut.push('bar');
        sut.pop();
        sut.push('baz');
        expect(sut.pop()).toBe('bar');
    });

    it('can peek after pop', () => {
        const sut = new Queue();
        sut.push('foo');
        sut.push('bar');
        expect(sut.peek()).toBe('foo');
        sut.pop();
        expect(sut.peek()).toBe('bar');
    });
});
