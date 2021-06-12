/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.

FOLLOW UP

How would you solve this problem if a temporary buffer is not allowed?
*/

export function removeDuplicates(A: string[]): string[] {
    return [...new Set(A)];
}

export function removeDuplicatesNoTemp(A: string[]): string[] {
    const workingArray = [...A];
    for (let i = 0; i < workingArray.length; i++) {
        const iVal = workingArray[i];
        for (let y = i + 1; y < workingArray.length; y++) {
            const yVal = workingArray[y];
            if (yVal === iVal) {
                workingArray.splice(y, 1);
            }
        }
    }
    return workingArray;
}
