export function removeNr(n: number) {
    const ret = [];
    // let prefix = 0;
    // for (let i = 1; i < n + 1; i++) {
    // prefix += i;
    // }
    const prefix = (n * (n + 1)) / 2;
    for (let i = 1; i < n; i++) {
        const y = (prefix - i) / (i + 1);
        const prefixSum = prefix - i - y;

        if (prefixSum % i === 0 && prefixSum === i * y && y < n && y !== i) {
            ret.push([i, y]);
        }
    }
    return ret;
}
