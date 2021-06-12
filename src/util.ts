function randomNumber(min = 1, max = 10): number {
    return Math.floor(Math.random() * max) + min;
}

function randomNumbers(n: number): number[] {
    const ret: number[] = [];
    for (let i = 0; i < n; i += 1) {
        ret.push(Math.floor(Math.random() * 100));
    }
    return ret;
}

function isSorted(A: any[], reverse = false): boolean {
    for (let i = 0; i < A.length; i += 1) {
        if (reverse && A[i] < A[i + 1]) {
            return false;
        }
        if (!reverse && A[i] > A[i + 1]) {
            return false;
        }
    }
    return true;
}

export { randomNumbers, isSorted, randomNumber };
