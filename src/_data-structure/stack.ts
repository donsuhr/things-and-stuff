import { DataStructureNode } from './linked-list-node';

export class Stack<T> {
    #first: DataStructureNode<T> | null = null;

    isEmpty() {
        return this.#first === null;
    }

    push(val: T) {
        const node: DataStructureNode<T> = new DataStructureNode();
        node.item = val;
        if (this.#first) {
            node.next = this.#first;
        }
        this.#first = node;
    }

    pop() {
        if (this.#first) {
            const item = this.#first;
            this.#first = item.next;

            return item.item;
        }
        return null;
    }

    peek() {
        if (this.#first) {
            return this.#first.item;
        }
        return null;
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
