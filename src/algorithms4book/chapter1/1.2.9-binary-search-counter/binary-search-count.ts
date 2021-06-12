import { ICounter } from './Counter';

export class BinarySearch {
    private static search<T>(key: T, A: T[], counter?: ICounter) {
        let low = 0;
        let high = A.length - 1;
        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            if (counter) {
                counter.increment();
            }
            if (key < A[mid]) {
                high = mid - 1;
            } else if (key > A[mid]) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    static findIndex<T>(
        key: T,
        A: T[],
        isFinalSearch = false,
        counter?: ICounter,
    ) {
        const sorted = [...A].sort();
        const index = BinarySearch.search(key, sorted, counter);

        if (isFinalSearch && counter) {
            // eslint-disable-next-line no-console
            console.log(`Search counter: ${counter}`);
        }
        return index;
    }
}
