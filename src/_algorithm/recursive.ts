function sum(list: any[]): number {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sum(list.slice(1));
}

function count(list: any[]): number {
    if (list.length === 0) {
        return 0;
    }
    return count(list.slice(1)) + 1;
}

function max<T>(list: T[]): T | null {
    if (list.length === 0) {
        return null;
    }
    if (list.length === 1) {
        return list[0];
    }
    if (list.length === 2) {
        return list[0] > list[1] ? list[0] : list[1];
    }
    const subMax = max(list.slice(1));
    if (list[0] > subMax!) {
        return list[0];
    }
    return subMax;
}

function sumN(n: number): number {
    if (n <= 0) {
        return 0;
    }
    return n + sumN(n - 1);
}

function factorial(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function len(A: any[]): number {
    if (A[0] === undefined) {
        return 0;
    }
    return 1 + len(A.slice(1));
}

export { sum, count, max, factorial, sumN, len };
