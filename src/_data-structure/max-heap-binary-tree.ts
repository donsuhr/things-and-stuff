// start, first stage after adding 55:
//              41
//     39                  33
// 18      27         12        55

// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5   6

// then it bubbles up the 55 to the top

// left child stored at 2n + 1;
// right child stored at 2n + 2;
// parent at (n - 1) / 2


// a simple priority queue could just be an array that
// gets re-sorted on every push

export class MaxHeapTree<T> {
    #values:T[] = [];

    #bubbleUp() {
        let index = this.#values.length - 1;
        const node = this.#values[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parentNode = this.#values[parentIndex];
            if (node <= parentNode) break;
            [this.#values[parentIndex], this.#values[index]] = [
                this.#values[index],
                this.#values[parentIndex],
            ];
            index = parentIndex;
        }
    }

    #bubbleDown() {
        let index = 0;
        const nodeCount = this.#values.length;
        const newNode = this.#values[0];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            let biggest = null;
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            if (leftIndex < nodeCount && this.#values[leftIndex] > newNode) {
                biggest = leftIndex;
            } else {
                biggest = index;
            }
            if (
                rightIndex < nodeCount &&
                this.#values[rightIndex] > this.#values[biggest]
            ) {
                biggest = rightIndex;
            }
            if (biggest === index) break;

            this.#values[index] = this.#values[biggest];
            this.#values[biggest] = newNode;
            index = biggest;
        }
    }

    insert(val:T) {
        this.#values.push(val);
        this.#bubbleUp();
    }

    extractMax() {
        const max = this.#values[0];
        const end = this.#values.pop() as T;
        if (this.#values.length > 0) {
            this.#values[0] = end;
            this.#bubbleDown();
        }
        return max;
    }

    get values() {
        return this.#values;
    }
}
