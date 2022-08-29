export class LinkedListNode<T> {
    public value: T | null = null;

    public next: LinkedListNode<T> | null = null;

    constructor(val:T | null = null) {
        this.value = val;
    }
}
