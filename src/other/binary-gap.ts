export function binaryGap(val: number): number {
    const longest = val
        .toString(2)
        .split('1')
        .slice(0, -1)
        .filter((x) => x !== '')
        .reduce((acc, x) => {
            if (x.length > acc.length) {
                return x;
            }
            return acc;
        }, '');
    return longest.length;
}

export function binaryGap2(val: number): number {
    let guardPassed = false;
    let max = 0;
    val.toString(2)
        .split('')
        .reduceRight((acc, x) => {
            let ret = acc;
            if (guardPassed) {
                if (x === '0') {
                    ret++;
                } else {
                    ret = 0;
                }
            }
            if (x === '1') {
                guardPassed = true;
            }
            if (acc > max) {
                max = acc;
            }

            return ret;
        }, 0);
    return max;
}
