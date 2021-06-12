export function findMissing(A: number[]): number {
    if (!A.length) {
        return 1;
    }

    const sorted = A.sort((a, b) => a - b);
    if (sorted[0] !== 1) {
        return 1;
    }
    const missingIndex = sorted.findIndex((x, i) => x !== i + 1);

    const beforeMissing = missingIndex === -1 ? sorted.pop() : missingIndex;
    return beforeMissing! + 1;
}
