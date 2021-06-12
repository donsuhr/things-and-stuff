/*
    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.
*/

const ImpactFactor = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
};

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

export function solution(S: string, P: number[], Q: number[]) {
    const parts = S.split('') as [keyof typeof ImpactFactor];
    const ifArr = parts.map((x) => prop(ImpactFactor, x));
    return P.map((x, i) =>
        [...new Set(ifArr.slice(P[i], Q[i] + 1))].sort().shift(),
    );
}
