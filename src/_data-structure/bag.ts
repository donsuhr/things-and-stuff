import { DataStructureNode } from './linked-list-node';

/* predefined by typescript
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

interface IteratorResult<T> {
    done: boolean;
    value: T;
}

IterableIterator

*/
export class Bag<T> implements IterableIterator<T | null> {
    private first: DataStructureNode<T> | null = null;

    private pointer: DataStructureNode<T> | null = null;

    add(val: T) {
        const node = new DataStructureNode<T>();
        node.value = val;
        node.next = this.first;
        this.first = node;
    }

    next(): IteratorResult<T | null> {
        const current = this.pointer;

        if (current) {
            this.pointer = current.next;
            return {
                done: false,
                value: current!.value,
            };
        }
        return {
            done: true,
            value: null,
        };
    }

    [Symbol.iterator](): IterableIterator<T | null> {
        this.pointer = this.first;
        return this;
    }
}
