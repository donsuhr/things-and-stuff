import {
    LinkedList,
    arrayToLinkedList,
    linkedListToArray,
} from './linked-list';
// import { LinkedListDaily } from '../_daily/linked-list';

describe('linked-list utils', () => {
    it('arrayToLinkedList', () => {
        const list = arrayToLinkedList([1, 2, 3]);
        expect(list.getFirst()!.value).toBe(1);
        expect(list.getFirst()!.next!.value).toBe(2);
        expect(list.getFirst()!.next!.next!.value).toBe(3);
    });

    it('linkedListToArray', () => {
        const list = arrayToLinkedList([1, 2, 3]);
        list.append(12);
        const array = linkedListToArray(list);
        expect(array).toEqual([1, 2, 3, 12]);
    });

    it('empty linkedListToArray', () => {
        const list = new LinkedList<number>();
        expect(linkedListToArray(list)).toEqual([]);
    });
});

describe.each([
    { fn: LinkedList },
    // { fn: LinkedListDaily }
])('linked-list $fn.name', ({ fn: CurrentLinkedList }) => {
    describe('the new linked list', () => {
        it('can prepend', () => {
            const sut = new CurrentLinkedList<string>();
            sut.prepend('first');
            sut.prepend('second');
            const first = sut.getFirst()!;

            expect(first.value).toBe('second');
            expect(first!.next!.value).toBe('first');
        });

        it('can append', () => {
            const linkedList = new CurrentLinkedList<string>();
            linkedList.append('first');
            linkedList.append('second');
            const first = linkedList.getFirst()!;

            expect(first.value).toBe('first');
            expect(first!.next!.value).toBe('second');
        });

        describe('pop', () => {
            it('can pop one item', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                const foo = sut.pop();
                expect(foo).toBe('foo');
                expect(sut.length).toBe(0);
            });

            it('can pop two items', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                sut.append('bar');
                expect(sut.length).toBe(2);
                const bar = sut.pop();
                expect(sut.length).toBe(1);
                const foo = sut.pop();
                expect(sut.length).toBe(0);
                expect(foo).toBe('foo');
                expect(bar).toBe('bar');
            });

            it('pops empty', () => {
                const sut = new CurrentLinkedList<string>();
                const foo = sut.pop();
                expect(foo).not.toBeDefined();
            });
        });

        describe('shift', () => {
            it('can shift one item', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                const foo = sut.shift();
                expect(foo).toBe('foo');
                expect(sut.length).toBe(0);
            });

            it('can shift two items', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                sut.append('bar');
                expect(sut.length).toBe(2);
                const foo = sut.shift();
                expect(sut.length).toBe(1);
                const bar = sut.pop();
                expect(sut.length).toBe(0);
                expect(foo).toBe('foo');
                expect(bar).toBe('bar');
            });

            it('shifts empty', () => {
                const sut = new CurrentLinkedList<string>();
                const foo = sut.shift();
                expect(foo).not.toBeDefined();
            });
        });

        describe('getAt', () => {
            it('getsAt index', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                sut.append('bar');
                const bar = sut.getAt(1);
                const foo = sut.getAt(0);
                expect(foo).toBe('foo');
                expect(bar).toBe('bar');
            });

            it('getAt empty', () => {
                const sut = new CurrentLinkedList<string>();
                const foo = sut.getAt(0);
                expect(foo).not.toBeDefined();
            });

            it('getAt out of bounds', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                sut.append('bar');
                const baz = sut.getAt(3);
                expect(baz).not.toBeDefined();
            });
        });

        describe('setAt', () => {
            it('setAt index', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                sut.append('bar');
                sut.append('baz');
                sut.setAt(2, 'changed');
                const baz = sut.getAt(2);
                expect(baz).toBe('changed');
            });

            it('setsAt empty', () => {
                const sut = new CurrentLinkedList<string>();
                sut.setAt(0, 'foo');
                const foo = sut.getFirst()!.value;
                expect(foo).toBe('foo');
            });

            it('setsAt out of bounds', () => {
                const sut = new CurrentLinkedList<string>();
                expect(() => sut.setAt(3, 'foo')).toThrow('out of bounds');
            });

            it('setsAt = list length', () => {
                const sut = new CurrentLinkedList<string>();
                sut.append('foo');
                sut.setAt(1, 'baz');
                const baz = sut.getAt(1);
                expect(baz).toBe('baz');
            });
        });
    });
});
