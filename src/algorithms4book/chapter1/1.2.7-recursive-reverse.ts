export function reverse(str: string): string {
    if (str.length <= 1) {
        return str;
    }
    const mid = Math.floor(str.length / 2);

    return reverse(str.substr(mid)) + reverse(str.substring(0, mid));
}
