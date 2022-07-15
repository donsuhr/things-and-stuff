// https://leetcode.com/problems/maximum-subarray/

export function maxSliceB(arr: number[]) {
    // O(n^2)
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let currentArray = 0;
        for (let j = i; j < arr.length; j++) {
            currentArray += arr[j];
            max = Math.max(max, currentArray);
        }
    }
    return max;
}

export function maxSliceC(arr: number[]) {
    // O(n)
    let max = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxSum = Math.max(arr[i], maxSum + arr[i]);
        max = Math.max(max, maxSum);
    }
    return max;
}
