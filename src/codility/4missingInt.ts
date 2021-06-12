export function missingInt(A: number[]): number {
    const mySet = Array.from(
        A.reduce((acc, x) => {
            if (x > 0) {
                acc.add(x);
            }
            return acc;
        }, new Set()),
    ).sort((a: any, b: any) => a - b);

    if (mySet.length === 0) {
        return 1;
    }

    for (let i = 0; i < mySet.length; i++) {
        if (mySet[i] !== i + 1) {
            return i + 1;
        }
    }

    return mySet.length + 1;
}
