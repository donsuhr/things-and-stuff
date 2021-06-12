export function sequenceKeys(A: string[]): number[] {
    return A.map((x) => parseInt(x, 10)).sort();
}

export function hasGap(A: number[]): boolean {
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== i) {
            return true;
        }
    }
    return false;
}
export function isPlainObject(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

export function flattenObj(obj: object) {
    const ret: any = { ...obj };
    Object.entries(ret).forEach(([key, val]) => {
        if (isPlainObject(val)) {
            ret[key] = flattenObj(val as object);
        }
    });
    const keys = sequenceKeys(Object.keys(ret));
    if (!hasGap(keys)) {
        return Object.values(ret);
    }
    return ret;
}
