export function isPermutaionOf(str: string, matchstr: string) {
    if (str.length !== matchstr.length) {
        return false;
    }
    if (str === matchstr) {
        return true;
    }
    // const a = str.split("").sort();
    // const b = matchstr.split("").sort();
    // for (let i = 0; i < a.length; i++) {
    // if (a[i] !== b[i]) {
    // return false;
    // }
    // }
    // return true;

    const matchHash = matchstr
        .split('')
        .reduce((acc: { [index: string]: number }, x: string) => {
            acc[x] = acc[x] + 1 || 1;
            return acc;
        }, {});
    for (let i = 0; i < str.length; i++) {
        // const index = matchArray.indexOf(str[i]);

        if (
            matchHash[str[i]] === 0 ||
            !Object.hasOwnProperty.call(matchHash, str[i])
        ) {
            return false;
        }
        // matchArray[index] = null;
        matchHash[str[i]] -= 1;
    }
    return true;
}
