const binarySearchRecursive = <T>(
    l: T[],
    search: T,
    lo?: number,
    hi?: number,
): number => {
    const hiIndex = hi ?? l.length - 1;
    const loIndex = lo ?? 0;
    const midIndex = loIndex + Math.floor((hiIndex - loIndex) / 2);

    const midVal = l[midIndex];
    if (midVal === search) {
        return midIndex;
    }
    if (hiIndex === loIndex) {
        return -1;
    }

    if (search < midVal) {
        return binarySearchRecursive(l, search, loIndex, midIndex - 1);
    }
    return binarySearchRecursive(l, search, midIndex + 1, hiIndex);
};

const binarySearch = <T>(l: T[], item: T): number => {
    const arr = l.sort();
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        const midVal = arr[mid];
        if (midVal === item) {
            return mid;
        }
        if (item < midVal) {
            hi = mid - 1;
        }
        if (item > midVal) {
            lo = mid + 1;
        }
    }
    return -1;
};

export { binarySearchRecursive, binarySearch };
