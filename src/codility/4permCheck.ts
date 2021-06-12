export function permCheck(A: number[]): 0 | 1 {
    const n = A.length;
    const completeSum = (n * (n + 1)) / 2;
    const checkDouble: { [key: number]: boolean } = {};
    const arraySum = A.reduce((acc, x) => {
        if (x > n || checkDouble[x]) {
            return 0;
        }
        checkDouble[x] = true;
        return acc + x;
    }, 0);
    return arraySum === completeSum ? 1 : 0;
}
