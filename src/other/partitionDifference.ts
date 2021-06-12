export function partitionDifference(A: number[]) {
    let inFront = A[0];
    let behind = A.reduce((acc, x, i) => {
        if (i < 1) {
            return acc;
        }
        return acc + x;
    }, 0);
    let smallest = Number.MAX_VALUE;
    for (let i = 1; i < A.length; i++) {
        const diff = Math.abs(behind - inFront);
        if (diff < smallest) {
            smallest = diff;
        }
        inFront += A[i];
        behind -= A[i];
    }

    return smallest;
}
