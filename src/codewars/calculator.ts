export default function Calculator() {
    this.doMath = (left = 0, right = 0, op = '+') => {
        switch (op) {
            case '+':
            default:
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return left / right;
        }
    };

    this.parseNumber = (x: string | number) => {
        const ret = Number(x);
        if (!/^[\d]+$/.test(x) || Number.isNaN(ret)) {
            throw new Error(`Parse error: ${x}`);
        }
        return ret;
    };

    this.evaluate = (string: string): number => {
        const operands = ['*', '/', '+', '-'];
        const parts = string.split(' ');
        const ops = [];
        const vals = [];
        while (parts.length) {
            const part = parts.shift();
            if (operands.includes(part)) {
                ops.push(part);
            } else {
                vals.push(this.parseNumber(part));
                const lastOp = ops[ops.length - 1];
                if (lastOp === '*' || lastOp === '/') {
                    const right: number = vals.pop();
                    const left: number = vals.pop();
                    const op = ops.pop();
                    vals.push(this.doMath(left, right, op));
                }
            }
        }
        while (ops.length) {
            const op = ops.shift();
            const left: number = vals.shift();
            const right: number = vals.shift();
            vals.unshift(this.doMath(left, right, op));
        }

        return vals[0];
    };
}
