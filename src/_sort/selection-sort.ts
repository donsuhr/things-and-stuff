function getBiggstIndex<T>(A: T[]): number {
    return A.reduce((acc: number, x: T, i: number, arr: T[]) => {
        if (x > arr[acc]) {
            return i;
        }
        return acc;
    }, 0);
}

function getSmallestIndex<T>(A: T[]): number {
    return A.reduce((acc: number, x: T, i: number, arr: T[]) => {
        if (x < arr[acc]) {
            return i;
        }
        return acc;
    }, 0);
}

function selectionSort<T>(A: T[], predicateIndex = getBiggstIndex): T[] {
    const tmp = [...A];
    const ret = [];
    while (tmp.length) {
        ret.push(tmp.splice(predicateIndex(tmp), 1)[0]);
    }
    return ret;
}

export { selectionSort, getSmallestIndex };
