import { Stack } from '../../_data-structure/stack-filo';

export function fixParens(S: string) {
    const charsArray = S.replace(/\s/g, '').split('');
    const operators: Stack<string> = new Stack<string>();
    const operands: Stack<string> = new Stack<string>();
    const operatorChars = '+*-/';

    while (charsArray.length) {
        const char = charsArray.shift() as string;
        if (char === '(') {
            // nothing
        } else if (operatorChars.includes(char)) {
            operators.push(char);
        } else if (char === ')') {
            const operator = operators.pop();
            const back = operands.pop();
            const front = operands.pop();
            const sub = `(${front} ${operator} ${back})`;
            operands.push(sub);
        } else {
            operands.push(char);
        }
    }
    return operands.pop();
}
