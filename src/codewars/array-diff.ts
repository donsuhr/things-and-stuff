export const arrayDiff = (a: number[], b: number[]): number[] => {
    // eslint-disable-next-line no-restricted-syntax
    // for (const x of b) {
    b.forEach((x) => {
        let y = a.indexOf(x);
        while (y > -1) {
            a.splice(y, 1);
            y = a.indexOf(x);
        }
    });
    return a;
};

export const arrayDiffV2 = (a: number[], b: number[]): number[] =>
    a.filter((x) => !b.includes(x));
