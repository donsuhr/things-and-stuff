export const findLongestSubstringOfUniqueChars = (str: string) => {
    // find the longest substring of unique characters
    let result = 0;
    let start = 0;
    const seen: { [key: string]: number } = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in seen) {
            start = Math.max(start, seen[char] + 1);
        }
        seen[char] = i;
        result = Math.max(result, i - start + 1);
    }
    return result;
};

/* similar to consider */

export const findLongestWord = (sen: string) => {
    let result = '';
    let currentResult = '';
    for (let i = 0; i < sen.length; i++) {
        if (/\w/.test(sen[i])) {
            currentResult += sen[i];
        } else {
            currentResult = '';
        }
        result = result.length >= currentResult.length ? result : currentResult;
    }
    return result;
};

export const findLongestWordReduce = (sen: string) =>
    sen.match(/\w+/g)!.reduce((acc, x) => (acc.length >= x.length ? acc : x));
