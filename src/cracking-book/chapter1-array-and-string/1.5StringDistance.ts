export function distance(a: string, b: string) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                counter++;
                break;
            }
        }
    }
    return Math.max(a.length, b.length) - counter;
}
