export function frogJump(A: number[], x: number) {
    let maxStep = 0;
    const pending: { [key: string]: boolean } = {};
    for (let i = 0; i < A.length; i++) {
        const item = A[i];
        if (item === maxStep + 1) {
            maxStep += 1;
            let pendinginc = true;
            while (pendinginc) {
                pendinginc = pending[maxStep + 1];
                if (pendinginc) {
                    maxStep += 1;
                }
            }
        }
        if (item > maxStep + 1) {
            pending[item] = true;
        }

        if (maxStep === x) {
            return i;
        }
    }
    return -1;
}
