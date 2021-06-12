export interface ICounter {
    increment: () => void;
    decrement: () => void;
    talley: () => number;
    toString: () => string;
    count: number;
    name: string;
}

export class Counter implements ICounter {
    name: string;

    count: number;

    constructor(id: string) {
        this.count = 0;
        this.name = id;
    }

    talley() {
        return this.count;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    toString() {
        return `Counter ${this.name}: ${this.count}`;
    }
}
