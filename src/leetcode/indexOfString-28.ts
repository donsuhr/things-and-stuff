export function indexOf(haystack: string, needle: string): number {
    if (needle.length > haystack.length) {
        return -1;
    }
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) === needle.charAt(j)) {
                if (j === needle.length - 1) {
                    return i;
                }
            } else {
                break;
            }
        }
    }
    return -1;
}
