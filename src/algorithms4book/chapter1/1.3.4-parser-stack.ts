/*
WriteastackclientParenthesesthatreadsinatextstreamfromstandardinput
and uses a stack to determine whether its parentheses are properly
balanced. For ex- ample, your program should print true
for [()]{}{[()()]()} and false for [(]).
*/

import { Stack } from '../../_data-structure/stack-filo';

const reverseBracket = {
    ']': '[',
    ')': '(',
    '}': '{',
};

export function isBalanced(S: string): boolean {
    // @ts-ignore
    const stack: Stack<Things> = new Stack();
    // @ts-ignore
    const chars = S.split('') as Things[];
    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];
        if ('])}'.includes(current)) {
            const stackItem = stack.pop();
            // @ts-ignore
            if (stackItem !== reverseBracket[current]) {
                return false;
            }
        } else {
            stack.push(chars[i]);
        }
    }

    if (stack.isEmpty()) {
        return true;
    }
    return false;
}
