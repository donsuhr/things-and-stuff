function binarySearch<T>(A: T[], item: T): number {
    let high = A.length - 1;
    let low = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const current = A[mid];
        if (current > item) {
            high = mid - 1;
        }
        if (current < item) {
            low = mid + 1;
        }
        if (current === item) {
            return mid;
        }
    }

    return -1;
}

export { binarySearch };
