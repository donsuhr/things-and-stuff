export const reverseNumber = (x: number): number => {
    let ret = 0;
    let rest = Math.abs(x);
    while (rest) {
        const lsd = rest % 10;
        ret = ret * 10 + lsd;
        rest = Math.floor(rest / 10);
    }
    return x < 0 ? -ret : ret;
};
