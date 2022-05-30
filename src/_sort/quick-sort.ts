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
