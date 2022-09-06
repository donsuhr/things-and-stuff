// O(n log n) O(n) space
// more memory than quick sort
// guaranteed O(n log n), quicksort worst is O(n^2)
// space: O(n)
// pick a pivot, put everything less on the left, everything more on the right

export const quickSort = <T>(A: T[]): T[] => {
    const ret = [...A];
    if (A.length < 2) {
        return ret;
    }
    const pivotPoint = Math.floor(Math.random() * A.length);
    const pivot = A[pivotPoint];
    const partitioned = [
        ...A.slice(0, pivotPoint),
        ...A.slice(pivotPoint + 1),
    ].reduce(
        ({ lesser, greater }: { lesser: T[]; greater: T[] }, x) => {
            if (x < pivot) {
                lesser.push(x);
            } else {
                greater.push(x);
            }
            return { lesser, greater };
        },
        { lesser: [], greater: [] },
    );
    return [
        ...quickSort(partitioned.lesser),
        pivot,
        ...quickSort(partitioned.greater),
    ];
};

function partition<T>(arr: T[], left: number, right: number) {
    /* eslint-disable no-param-reassign */
    const pivot = arr[left];
    let swapIndex = left;

    for (let i = left + 1; i <= right; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[swapIndex], arr[left]] = [arr[left], arr[swapIndex]];
    return swapIndex;
    /* eslint-enable no-param-reassign */
}

function partitionRandom<T>(arr: T[], left: number, right: number) {
    // pick random, then move it to the first position
    // then regular partition it using the left position as pivot
    /* eslint-disable no-param-reassign */
    const pivotPoint = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[pivotPoint], arr[left]] = [arr[left], arr[pivotPoint]];
    return partition(arr, left, right);
    /* eslint-enable no-param-reassign */
}

export const quickSortInPlace = <T>(
    arr: T[],
    left = 0,
    right = arr.length - 1,
) => {
    if (left < right) {
        const pivotIndex = partitionRandom(arr, left, right);
        quickSortInPlace(arr, left, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, right);
    }
    return arr;
};
