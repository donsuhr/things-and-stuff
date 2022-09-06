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

// O(n^2) O(1) space
// never used, just for educational purposes 
export function selectionSortInPlace<T>(A: T[]): T[] {
    for (let i = 0; i < A.length; i++) {
        let ist = i;
        for (let j = i + 1; j < A.length; j++) {
            if (A[j] < A[ist]) {
                ist = j;
            }
        }
        /* eslint-disable-next-line no-param-reassign */
        [A[ist], A[i]] = [A[i], A[ist]];
    }
    return A;
}
