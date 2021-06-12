import { create, LinkedList } from './linked-list';
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

describe('the new linked list', () => {
    test('it can add a value', () => {
        const linkedList = new LinkedList<string>();
        let first = new DataStructureNode<string>();
        const second = new DataStructureNode<string>();
        const third = new DataStructureNode<string>();

        first.item = 'to';
        second.item = 'be';
        third.item = 'or';

        first.next = second;
        second.next = third;

        linkedList.add(first);
        linkedList.add(second);

        const oldFirst = first;
        first = new DataStructureNode<string>();
        first.item = 'not';
        first.next = oldFirst;

        expect(first.item).toBe('not');
        expect(oldFirst.item).toBe('to');
        expect(first.next.item).toBe('to');
    });

    test('it can add values that are not typed', () => {
        const linkedList = new LinkedList<string>();
        linkedList.add('thing');
        const second = linkedList.add('foo');
        const first = linkedList.getFirst()!;
        first.next = second;
        expect(first.item).toBe('thing');
        expect(first.next.item).toBe(second.item);
    });
});
