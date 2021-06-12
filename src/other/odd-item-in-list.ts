export function odd(arr: number[]): number | null {
    const map = arr.reduce((acc: { [key: string]: number }, x) => {
        acc[x] = acc[x] + 1 || 1;
        return acc;
    }, {});

    const [key] = Object.entries(map).find(
        ([, count]: [string, number]) => count % 2 !== 0,
    ) || [null];

    return key === null ? key : parseInt(key, 10);
}
