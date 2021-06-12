export function rotate(A: number[][]): number[][] {
    const ret = A.map((x) => [...x]);
    const N = ret.length;

    for (let i = 0; i < N / 2; i++) {
        for (let j = i; j < N - i - 1; j++) {
            // Swap elements of each cycle
            // in clockwise direction
            const temp = ret[i][j];
            ret[i][j] = ret[N - 1 - j][i];
            ret[N - 1 - j][i] = ret[N - 1 - i][N - 1 - j];
            ret[N - 1 - i][N - 1 - j] = ret[j][N - 1 - i];
            ret[j][N - 1 - i] = temp;
        }
    }
    return ret;
}
export function rotateLeft(A: number[][]): number[][] {
    const ret = A.map((x) => [...x]);
    const N = ret.length;

    for (let i = 0; i < N / 2; i++) {
        for (let j = i; j < N - i - 1; j++) {
            const temp = ret[i][j];

            ret[i][j] = ret[j][N - 1 - i];
            ret[j][N - 1 - i] = ret[N - 1 - i][N - 1 - j];
            ret[N - 1 - i][N - 1 - j] = ret[N - 1 - j][i];
            ret[N - 1 - j][i] = temp;
        }
    }
    return ret;
}

/*
 *      |
 * i, j | j, n-i
 *---------------
 * n-j,i| n-i, n-j
 *      |
 *
 */

export function withWordsFromAnswer(A: number[][]): number[][] {
    const ret = A.map((x) => [...x]);
    const N = ret.length;

    for (let outerRingLayer = 0; outerRingLayer < N / 2; outerRingLayer++) {
        const first = outerRingLayer;
        const last = N - 1 - outerRingLayer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = ret[first][i];
            //  top <- left
            ret[first][i] = ret[last - offset][first];
            // left <- bottom
            ret[last - offset][first] = ret[last][last - offset];
            // bottom <- right
            ret[last][last - offset] = ret[i][last];
            // right <- top
            ret[i][last] = top;
        }
    }
    return ret;
}
