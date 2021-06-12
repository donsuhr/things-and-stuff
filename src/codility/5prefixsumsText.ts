export function prefixSums(A: number[]) {
    const n = A.length;
    const P = new Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        P[i] = P[i - 1] + A[i - 1];
    }
    return P;
}

export function sliceSum(P: number[], x: number, y: number) {
    // console.log(P, x, P[x], y, P[y + 1]);
    return P[y + 1] - P[x];
}

export function attempt1(A: number, B: number, K: number) {
    const inside = Math.floor((B - A) / K);
    let outside = 0;
    if ((A !== 0 && A % K === 0) || B % K === 0) {
        outside = 1;
    }
    return inside + outside;
    // return (B - A) / K + 1;
}

export function onineAnswer(A: number, B: number, K: number) {
    return Math.floor((B - (A - (A % K))) / K);
}

export function manualAttempt(A: number, B: number, K: number) {
    let counter = 0;
    const min = A < K ? K : A + (A % K);
    for (let i = min; i <= B; i += K) {
        counter++;
    }
    return counter;
}
