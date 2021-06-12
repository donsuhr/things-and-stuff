export function zeroMatrix(A: number[][]): number[][] {
    const ret = [...A.map((x) => x)];
    const N = ret.length;
    const rowToZero = new Set<number>();
    const colToZero = new Set<number>();

    ret.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === 0) {
                rowToZero.add(i);
                colToZero.add(j);
            }
        });
    });

    rowToZero.forEach((row) => {
        ret[row] = new Array(N).fill(0);
    });

    colToZero.forEach((colIndex) => {
        ret.map((row) => {
            // eslint-disable-next-line no-param-reassign
            row[colIndex] = 0;
            return row;
        });
    });

    return ret;
}
