export default function rowSumOddNumbers(n: number) {
    const end = n * (n + 1) - 1;
    let acc = end;
    let val = end;

    for (let i = n; i > 1; i--) {
        val -= 2;
        acc += val;
    }

    return acc;
}
