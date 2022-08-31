import { LinkedListNode } from './linked-list-node';

export class Stack<T> {
    #top: LinkedListNode<T> | null = null;

    #bottom: LinkedListNode<T> | null = null;

    isEmpty() {
        return this.#top === null;
    }

    push(val: T) {
        const node: LinkedListNode<T> = new LinkedListNode();
        node.value = val;
        if (this.#top) {
            node.next = this.#top;
        }
        this.#top = node;
        if (this.#bottom === null) {
            this.#bottom = node;
        }
    }

    pop() {
        let result;
        if (this.#top) {
            result = this.#top.value;
            this.#top = this.#top.next;
        }
        if (this.#top === null) {
            this.#bottom = null;
        }
        return result;
    }

    peek() {
        if (this.#top) {
            return this.#top.value;
        }
        return null;
    }

    get bottom() {
        return this.#bottom?.value;
    }
}

export const array2stack = <T>(A: T[]): Stack<T> => {
    const stack = new Stack<T>();
    const stackArray = [...A];
    stackArray.reverse().forEach((x) => {
        stack.push(x);
    });
    return stack;
};

export const stack2array = <T>(S: Stack<T>): T[] => {
    const ret: T[] = [];
    while (!S.isEmpty()) {
        ret.push(S.pop()!);
    }
    return ret;
};
