export function findit(A: number[]): number {
    const arrayCopy = [...A];
    let i = 0;
    const ii = arrayCopy.length;

    while (i < ii) {
        const current = arrayCopy[i];
        const tmp = arrayCopy[current];
        if (current === i) {
            i++;
        } else {
            if (current === tmp) {
                return current;
            }
            arrayCopy[current] = current;
            arrayCopy[i] = tmp;
        }
    }
    return -1;
}
