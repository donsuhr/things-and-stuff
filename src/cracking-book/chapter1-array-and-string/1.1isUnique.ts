export function hasAllUniqueCharacters(str: string) {
    // return new Set(str.split('')).size === str.length
    if (str.length > 128) {
        return false;
    }
    const switches = new Array(128).fill(false);
    const ii = str.length;
    for (let i = 0; i < ii; i++) {
        const code = str.charCodeAt(i);
        if (switches[code]) {
            return false;
        }
        switches[code] = true;
    }
    return true;
}
