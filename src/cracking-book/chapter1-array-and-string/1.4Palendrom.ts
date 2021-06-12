export function isPalendrom(str: string) {
    const counts = str
        .toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .reduce((acc: { [key: string]: number }, x: string) => {
            acc[x] = acc[x] + 1 || 1;
            return acc;
        }, {});
    const evenOddCounts = Object.entries(counts).reduce(
        (acc, [, val]) => {
            if (val % 2 === 0) {
                acc.even += 1;
            } else {
                acc.odd += 1;
            }
            return acc;
        },
        { even: 0, odd: 0 },
    );
    if (evenOddCounts.odd < 2) {
        return true;
    }
    return false;
}
