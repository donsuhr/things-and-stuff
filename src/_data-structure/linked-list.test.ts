import {
    create,
    LinkedList,
    arrayToLinkedList,
    linkedListToArray,
} from './linked-list';
import { DataStructureNode } from './linked-list-node';

test('it can add a value', () => {
    const sut = create();
    sut.add(2);
    expect(sut.getFirst().value).toBe(2);
    sut.add(4);
    expect(sut.getFirst().next!.value).toBe(4);
});

test('it can while loop', () => {
    const sut = create();
    sut.add({ foo: 'bar' });
    sut.add({ bar: 'baz' });

    let reader = sut.getFirst();
    while (reader.next) {
        expect(reader.value).not.toBeNull();
        reader = reader.next;
    }
});

describe('linked-list utils', () => {
    it('arrayToLinkedList', () => {
        const list = arrayToLinkedList([1, 2, 3]);
        expect(list.getFirst()!.value).toBe(1);
        expect(list.getFirst()!.next!.value).toBe(2);
        expect(list.getFirst()!.next!.next!.value).toBe(3);
    });

    it('linkedListToArray', () => {
        const list = arrayToLinkedList([1, 2, 3]);
        list.add(12);
        const array = linkedListToArray(list);
        expect(array).toEqual([1, 2, 3, 12]);
    });

    it('empty linkedListToArray', () => {
        const list = new LinkedList<number>();
        expect(linkedListToArray(list)).toEqual([]);
    });
});

describe('the new linked list', () => {
    test('it can add a value', () => {
        const linkedList = new LinkedList<string>();
        let first = new DataStructureNode<string>();
        const second = new DataStructureNode<string>();
        const third = new DataStructureNode<string>();

        first.value = 'to';
        second.value = 'be';
        third.value = 'or';

        first.next = second;
        second.next = third;

        linkedList.add(first);
        linkedList.add(second);

        const oldFirst = first;
        first = new DataStructureNode<string>();
        first.value = 'not';
        first.next = oldFirst;

        expect(first.value).toBe('not');
        expect(oldFirst.value).toBe('to');
        expect(first.next.value).toBe('to');
    });

    test('it can add values that are not typed', () => {
        const linkedList = new LinkedList<string>();
        linkedList.add('thing');
        const second = linkedList.add('foo');
        const first = linkedList.getFirst()!;
        first.next = second;
        expect(first.value).toBe('thing');
        expect(first.next.value).toBe(second.value);
    });
});
