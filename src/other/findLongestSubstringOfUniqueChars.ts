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
