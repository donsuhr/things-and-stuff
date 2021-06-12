/*
const foo = [3, 0, 2, 1, 2];
// [1,0,2,3,2]
// [0,1,2,3,2]
// [0,1,2,2,3]
// [0,1,2,2
const bar = {};
let answer;

 solution 1 O(n)
for (let i = 0; i < foo.length; i++) {
    const current = foo[i];
    bar[current] = bar[current] + 1 || 1;
    if (bar.current >= 2) {
        answer = current;
        break;
    }
}
*/
/*
for (let i = 0; i < foo.length; i++) {
    const current = foo[i];
    for (let j = i + 1; j < foo.length; j++) {
        if (current === foo[j]) {
            answer = current;
        }
    }
}

const sorted = foo.sort();
for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) {
        return i;
    }
}
*/

function findit(A) {
    const workingA = [...A];
    let duplicate = -1;
    const ii = workingA.length;
    let i = 0;
    while (i < ii) {
        const current = workingA[i];
        if (current === i) {
            i++;
        } else {
            const swap = workingA[current];
            if (current === swap) {
                duplicate = current;
                break;
            }
            workingA[current] = current;
            workingA[i] = swap;
        }
    }
    return duplicate;
}

export { findit };
