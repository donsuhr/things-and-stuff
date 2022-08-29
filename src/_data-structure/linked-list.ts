import { LinkedListNode as Node } from './linked-list-node';

export interface ILinkedList {
    prepend: Function;
    append: Function;
    pop: Function;
    shift: Function;
    getAt: Function;
    setAt: Function;
}

export class LinkedList<T> implements ILinkedList {
    #head: Node<T> | null = null;

    #tail: Node<T> | null = null;

    length = 0;

    getFirst() {
        return this.#head;
    }

    prepend(val: T) {
        const node = new Node<T>(val);
        node.next = this.#head;
        this.#head = node;

        if (this.#tail === null) {
            this.#tail = node;
        }

        this.length += 1;
    }

    append(val: T) {
        const node = new Node<T>(val);

        if (this.#head === null) {
            this.#head = node;
        }

        if (this.#tail !== null) {
            this.#tail.next = node;
        }

        this.#tail = node;

        this.length += 1;
    }

    pop() {
        const result = this.#tail?.value;
        let pointer = this.#head;
        let previous = null;
        while (pointer?.next) {
            previous = pointer;
            pointer = pointer.next;
        }
        if (previous !== null) {
            this.#tail = previous;
            this.#tail.next = null;
        } else {
            // only one left
            this.#tail = null;
            this.#head = null;
        }

        this.length -= 1;
        return result;
    }

    shift() {
        if (this.#head === null) return undefined;
        const result = this.#head.value;
        this.#head = this.#head.next;
        this.length -= 1;
        if (this.#head === null) {
            this.#tail = null;
        }
        return result;
    }

    getAt(index: number) {
        if (index < 0 || index > this.length - 1) {
            return undefined;
        }
        let counter = 0;
        let pointer = this.#head;
        while (counter < index) {
            pointer = pointer!.next;
            counter++;
        }
        return pointer!.value;
    }

    setAt(index: number, val: T) {
        if (index < 0 || index > this.length) {
            throw new Error(`index out of bounds ${index}:${val}`);
        }
        if (index === 0) {
            this.prepend(val);
        }
        if (index === this.length) {
            this.append(val);
        }
        const node = new Node(val);
        let counter = 0;
        let pointer = this.#head;
        while (counter < index - 1) {
            pointer = pointer!.next;
            counter++;
        }
        node.next = pointer!.next;
        pointer!.next = node;
        this.length += 1;
    }
}

export const arrayToLinkedList = (A: any[]) => {
    const list = new LinkedList<any>();
    A.forEach((x) => list.append(x));
    return list;
};

export const linkedListToArray = (ll: LinkedList<any> | Node<any> | null) => {
    const ret = [];
    let pointer = ll instanceof LinkedList ? ll.getFirst() : ll;
    if (pointer) {
        while (pointer) {
            ret.push(pointer.value);
            pointer = pointer.next;
        }
    }
    return ret;
};
