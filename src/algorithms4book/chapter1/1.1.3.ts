export function checkArguments(): boolean {
    const argInts: number[] = process.argv.slice(2).map((x) => parseInt(x, 10));
    const isEqual = !argInts.find((x, i, arr) => x !== arr[0]);
    console.log(isEqual ? 'equal' : 'not equal'); // eslint-disable-line no-console

    return isEqual;
}

export class Exercise15 {
    // this is wrong
    static lg(N: number): number {
        let logInt: number = N;
        let count: number = 0;
        while (logInt > 0) {
            logInt = Math.floor(logInt / 2);
            count += 1;
        }

        return count + 1;
    }

    static factoral(N: number): number {
        if (N <= 1) {
            return 1;
        }
        return N * Exercise15.factoral(N - 1);
        /*
    let result: number = 1;
    for (let i: number = 1; i <= N; i++) {
      result = result * i;
    }
    return result;
    */
    }

    static rank(key: number, a: number[], lo = 0, argHi?: number): number {
        // this is wrong too, not sure whats supposed to happen
        // Index of key in a[], if present, is not smaller than lo
        //                                  and not larger than hi.
        //
        const hi = argHi || a.length;

        if (lo > hi) return -1;
        const mid: number = Math.floor(lo + (hi - lo) / 2);
        if (key < a[mid]) {
            return Exercise15.rank(key, a, lo, mid - 1);
        }
        if (key > a[mid]) {
            return Exercise15.rank(key, a, mid + 1, hi);
        }
        return mid;
    }
}
