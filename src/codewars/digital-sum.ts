 const sum = (a: number[]) => a.reduce((acc, x) => acc + x, 0);

const digitalSum = (a: number): number => {
    if (a <  10) {
        return a;
    }
    const vals = String(a)
        .split('')
        .map((x) => parseInt(x, 10));
    return digitalSum(sum(vals));
};

export default digitalSum;
