import { Stack } from '../_data-structure/stack';

export const sortStack = (...args: Stack<number>[]) => {
    const ret = new Stack<number>();
    args.forEach((x) => {
        while (!x.isEmpty()) {
            const item = x.pop()!;

            while (!ret.isEmpty() && item > ret.peek()!) {
                x.push(ret.pop()!);
            }

            ret.push(item);
        }
    });
    return ret;
};
