interface Graph {
    [key: string]: string[];
}

function search(
    graph: Graph,
    graphRootKey: string,
    predicate: Function,
): string | null {
    let queue = [...graph[graphRootKey]];
    const searched: string[] = [];
    while (queue.length) {
        const item: string = queue.shift()!;
        if (!searched.includes(item)) {
            searched.push(item);
            if (predicate(item)) {
                return item;
            }
            queue = [...queue, ...graph[item]];
        }
    }
    return null;
}

export { search, Graph };
