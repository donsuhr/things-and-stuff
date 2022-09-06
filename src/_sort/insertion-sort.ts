/* eslint-disable no-param-reassign */
// O(n^2) quadratic - O(1) space
// use when small list or already mostly sorted
export const insertionSort = <T>(A: T[]): T[] => {
    // left hand side becomes always sorted;
    for (let i = 1; i < A.length; i++) {
        const currentVal = A[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (A[j] < currentVal) {
                break;
            }
            A[j + 1] = A[j];
        }
        A[j + 1] = currentVal;
    }
    return A;
};
