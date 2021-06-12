export function snail(A: number[][]): number[] {
    let right = A[0].length;
    let left = 0;
    const ret = [];

    while (left < right) {
        let x = left;
        let y = left;
        // move right
        for (let i = left; i < right; i++) {
            x = i;
            ret.push(A[y][x]);
        }
        // move down
        for (let j = left + 1; j < right; j++) {
            y = j;
            ret.push(A[y][x]);
        }
        // move left
        for (let k = right - 2; k >= left; k--) {
            x = k;
            ret.push(A[y][x]);
        }
        // move up
        for (let l = right - 2; l > left; l--) {
            y = l;
            ret.push(A[y][x]);
        }
        right--;
        left++;
    }
    return ret;
}
