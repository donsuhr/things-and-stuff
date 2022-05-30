export function getBiggestIndex<T>(A: T[]): number {
    return A.reduce((acc: number, x: T, i: number, arr: T[]) => {
        if (x > arr[acc]) {
            return i;
        }
        return acc;
    }, 0);
}

export function getSmallestIndex<T>(A: T[]): number {
    return A.reduce((acc: number, x: T, i: number, arr: T[]) => {
        if (x < arr[acc]) {
            return i;
        }
        return acc;
    }, 0);
}

export function selectionSort<T>(A: T[], istIndexFn = getBiggestIndex): T[] {
    const tmp = [...A];
    const ret = [];
    while (tmp.length) {
        ret.push(tmp.splice(istIndexFn(tmp), 1)[0]);
    }
    return ret;
}
