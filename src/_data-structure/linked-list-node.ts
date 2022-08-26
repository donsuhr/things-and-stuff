/*
export class Node<T> {
    private previous: Node<T> | null = null;

    private next: Node<T> | null = null;

    constructor(data: T) {}
}
*/

export class DataStructureNode<T> {
    public value: T | null = null;

    public next: DataStructureNode<T> | null = null;
}
