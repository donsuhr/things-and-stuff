const binarySearch = <T>(
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
        return binarySearch(l, search, loIndex, midIndex - 1);
    }
    return binarySearch(l, search, midIndex + 1, hiIndex);
};

export { binarySearch };
