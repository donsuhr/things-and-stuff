export function rotateRight(arr: any[], count: number) {
    if (arr.length === 0) {
        return [];
    }
    let tmpArray = [...arr];
    for (let i = 0; i < count; i++) {
        const last = tmpArray.pop();
        tmpArray = [last, ...tmpArray];
    }
    return tmpArray;
}
