// O(n^2)
function bubbleSort<T>(A: T[]): T[] {
    let j = 0;
    const result:T[] = [...A];
    const ii = A.length;
    while (j < ii) {
        let swapped = false;
        for (let i = 0; i < ii; i += 1) {
            if (result[i] > result[i + 1]) {
                swapped = true;
                const a = result[i];
                const b = result[i + 1];
                result[i + 1] = a;
                result[i] = b;
            }
        }
        if (!swapped) {
            j += 1;
        }
    }
    return result;
}

export { bubbleSort };
