type IComparator = <T>(a: T, b: T) => boolean;

export const smallest: IComparator = (a, b) => a < b;
export const biggest: IComparator = (a, b) => a > b;

// recursively split the array and then merge it back to gether
// n log(n) - Linearithmic - space: log(n) Logarithmic

function merge<T>(arr1: T[], arr2: T[], comparator: IComparator): T[] {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        // make a new array by taking the lower of
        // each item in the arrays we are merging,
        if (comparator(arr1[i], arr2[j])) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // add the rest on the end
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

export const mergeSort = <T>(
    arr: T[],
    comparator: IComparator = smallest,
): T[] => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort<T>(arr.slice(0, mid), comparator);
    const right = mergeSort<T>(arr.slice(mid), comparator);
    return merge(left, right, comparator);
};

function mergeInPlace<T>(
    arr: T[],
    comparator: IComparator,
    left: number,
    mid: number,
    right: number,
) {
    /* eslint-disable no-param-reassign */
    const tmpLeft = arr.slice(left, mid + 1);
    const tmpRight = arr.slice(mid + 1, right + 1);

    let leftIndex = 0;
    let rightIndex = 0;
    let arrIndex = left;
    while (leftIndex < tmpLeft.length && rightIndex < tmpRight.length) {
        if (comparator(tmpLeft[leftIndex], tmpRight[rightIndex])) {
            arr[arrIndex] = tmpLeft[leftIndex];
            leftIndex++;
        } else {
            arr[arrIndex] = tmpRight[rightIndex];
            rightIndex++;
        }
        arrIndex++;
    }
    while (leftIndex < tmpLeft.length) {
        arr[arrIndex] = tmpLeft[leftIndex];
        leftIndex++;
        arrIndex++;
    }
    while (rightIndex < tmpRight.length) {
        arr[arrIndex] = tmpRight[rightIndex];
        rightIndex++;
        arrIndex++;
    }
    /* eslint-enable no-param-reassign */
}

export const mergeSortInPlace = <T>(
    arr: T[],
    comparator: IComparator = smallest,
    left = 0,
    right = arr.length - 1,
) => {
    if (left >= right) {
        return arr;
    }
    const mid = left + Math.floor((right - left) / 2);
    mergeSortInPlace(arr, comparator, left, mid);
    mergeSortInPlace(arr, comparator, mid + 1, right);
    mergeInPlace(arr, comparator, left, mid, right);
    return arr;
};
