export function binarySearch<T>(A: T[], item: T): number {
    let high = A.length - 1;
    let low = 0;

    while (low <= high) {
        const pivot = Math.floor((low + high) / 2);
        const guess = A[pivot];
        if (guess === item) {
            return pivot;
        }
        if (guess > item) {
            high = pivot - 1;
        } else {
            low = pivot + 1;
        }
    }
    return -1;
}

export function binarySearchRecursive<T>(
    A: T[],
    item: T,
    low: number = 0,
    high: number = A.length - 1,
): number {
    if (low > high) {
        return -1;
    }

    const pivot = Math.floor((low + high) / 2);
    const guess = A[pivot];
    if (guess === item) {
        return pivot;
    }
    if (item > guess) {
        return binarySearchRecursive(A, item, pivot + 1, high);
    }
    return binarySearchRecursive(A, item, low, pivot - 1);
}
