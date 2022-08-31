import { Stack } from '../_data-structure/stack';

export class QueueFromStacks<T> {
    #inbound = new Stack<T>();

    #outbound = new Stack<T>();

    push(val: T) {
        this.#inbound.push(val);
    }

    pop() {
        if (this.#outbound.isEmpty()) {
            while (!this.#inbound.isEmpty()) {
                this.#outbound.push(this.#inbound.pop()!);
            }
        }

        return this.#outbound.pop();
    }

    peek() {
        if (!this.#outbound.isEmpty()) {
            return this.#outbound.peek();
        }
        return this.#inbound.bottom;
    }

    isEmpty() {
        return this.#inbound.isEmpty() && this.#outbound.isEmpty();
    }
}
