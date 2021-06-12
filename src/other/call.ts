export function call<T extends [unknown, string, ...unknown[]], R>(
    f: (...rest: T) => R,
    ...args: T
): R {
    return f(...args);
}

export function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
}
/*
export function is<T>(...args: T[]): boolean {
    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] !== args[i + 1]) {
            return false;
        }
    }
    return true;
}
*/
// b: 1 to count T's... at least one
//
export function is<T>(a: T, ...b: [T, ...T[]]): boolean {
    return b.every((x) => x === a);
}
