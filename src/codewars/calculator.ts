const AllOps = ['+', '-', '*', '/'] as const;
type OpsTuple = typeof AllOps;
type Ops = OpsTuple[number];

interface ICalculator {
    new (): ICalculator;
    doMath: (left?: number, right?: number, op?: Ops) => number;
    parseNumber: (x: string | number) => number;
    evaluate: (str: string) => number;
}

function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function isOps(x: any): x is Ops {
    return AllOps.includes(x as Ops);
}

function calculator(this: ICalculator) {
    this.doMath = (left = 0, right = 0, op = '+') => {
        switch (op) {
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return left / right;
            case '+':
            default:
                return left + right;
        }
    };

    this.parseNumber = (x) => {
        const ret = Number(x);
        if (!isNumber(x) && (!/^[\d]+$/.test(x) || Number.isNaN(ret))) {
            throw new Error(`Parse error: ${x}`);
        }
        return ret;
    };

    this.evaluate = (str: string) => {
        const parts = str.split(' ');
        const ops: Ops[] = [];
        const values: number[] = [];
        while (parts.length) {
            const part = parts.shift()!;
            if (isOps(part)) {
                ops.push(part);
            } else {
                values.push(this.parseNumber(part));
                const lastOp = ops[ops.length - 1];
                if (lastOp === '*' || lastOp === '/') {
                    const right: number = values.pop()!;
                    const left: number = values.pop()!;
                    const op = ops.pop();
                    values.push(this.doMath(left, right, op));
                }
            }
        }
        while (ops.length) {
            const op = ops.shift();
            const left: number = values.shift()!;
            const right: number = values.shift()!;
            values.unshift(this.doMath(left, right, op));
        }

        return values[0];
    };
}

const Calculator = calculator as any as ICalculator;
export default Calculator;
