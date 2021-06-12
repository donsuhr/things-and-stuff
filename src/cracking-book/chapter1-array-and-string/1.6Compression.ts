export function compress(str: string) {
    let currentChar = str[0];
    let lastChar = str[0];
    let result = '';
    let currentCount = 0;
    for (let i = 0; i <= str.length; i++) {
        currentChar = str[i];
        if (currentChar === lastChar) {
            currentCount++;
        } else {
            result += lastChar + currentCount;
            currentCount = 1;
        }
        lastChar = currentChar;
    }
    return result;
}
