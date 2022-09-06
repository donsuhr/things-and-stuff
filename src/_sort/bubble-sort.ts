/* eslint-disable no-param-reassign */
// O(n^2) quadratic - O(1) space
// never used, just for educational purposes 
function bubbleSort<T>(A: T[]): T[] {
    let noSwaps = true;
    for (let i = A.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (A[j] > A[j + 1]) {
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return A;
}

export { bubbleSort };
