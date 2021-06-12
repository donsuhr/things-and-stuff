export function nextSmaller(n: number): number {
    const parts = n
        .toFixed()
        .split('')
        .map((x) => parseInt(x, 10));
    let lowest = 10;
    let lowestIndex: number;
    for (let i = parts.length - 1; i >= 0; i--) {
        const current = parts[i];
        if (i < parts.length - 1 && lowest < current) {
            parts[i] = lowest;
            parts[lowestIndex!] = current;
            break;
        }
        if (current < lowest) {
            lowest = current;
            lowestIndex = i;
        }
    }
    const result = parseInt(parts.join(''), 10);
    if (result === n || parts[0] === 0) {
        return -1;
    }
    return result;
}

export const minify = (n: number) =>
    [...`${n}`]
        .sort()
        .join('')
        .replace(/^(0+)([1-9])/, '$2$1');
