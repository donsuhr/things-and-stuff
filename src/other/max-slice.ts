export function maxSliceA(arr: number[]) {
    // O(n^3)
    const n = arr.length;
    let ret = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            for (let k = i; k < j + 1; k++) {
                const diff = arr[k] - arr[i];
                ret = Math.max(ret, diff);
            }
        }
    }
    return ret;
}

export function maxSliceB(arr: number[]) {
    // O(n^2)
    const n = arr.length;
    let ret = 0;
    for (let i = 0; i < n; i++) {
        // let sum = 0;
        let diff = 0;
        for (let j = i; j < n; j++) {
            // sum += arr[j];
            diff = arr[j] - arr[i];
            ret = Math.max(ret, diff);
        }
    }
    return ret;
}

export function maxSliceC(arr: number[]) {
    // O(n)
    let maxEnd = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        // maxEnd = Math.max(0, maxEnd + (arr[i + 1] - arr[i]));
        maxEnd = Math.max(0, maxEnd + arr[i]);
        maxSum = Math.max(maxSum, maxEnd);
        // console.log(arr[i], maxEnd, maxSum);
    }
    return maxSum;
}
