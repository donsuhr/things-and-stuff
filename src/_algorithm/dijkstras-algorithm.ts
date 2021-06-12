interface GraphItem {
    [key: string]: number;
}

interface Graph {
    [key: string]: GraphItem;
}

interface Parent {
    [key: string]: { parentNode: string | null; value: number };
}

function calculateParents(graph: Graph, startNodeKey: keyof Graph): Parent {
    return Object.entries(graph).reduce(
        (acc: Parent, [parentKey, children]) => {
            if (parentKey === startNodeKey) {
                Object.entries(children).forEach(([childKey, value]) => {
                    acc[childKey] = { parentNode: parentKey, value };
                });
            } else if (!Object.hasOwnProperty.call(acc, parentKey)) {
                acc[parentKey] = {
                    parentNode: null,
                    value: Number.MAX_VALUE,
                };
            }
            return acc;
        },
        {},
    );
}

function findLowestCostNode(nodes: Parent, processed: string[]) {
    let lowestCost = Number.MAX_VALUE;
    let lowestCostNode;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, { value }] of Object.entries(nodes)) {
        if (value < lowestCost && !processed.includes(key)) {
            lowestCost = value;
            lowestCostNode = key;
        }
    }
    return lowestCostNode;
}

function search(graph: Graph, startNodeKey: string, endNodeKey: string) {
    const processed: string[] = [];
    const parents: Parent = calculateParents(graph, startNodeKey);

    let node = findLowestCostNode(parents, processed);

    // 1.  while we have nodes to process
    while (node) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [neighbor, neighborCost] of Object.entries(graph[node])) {
            // 3. update costs for its neighbors
            const newCost = parents[node].value + neighborCost;
            if (parents[neighbor].value > newCost) {
                // 4. if costs updated for neighbor, update its parents
                parents[neighbor].value = newCost;
                parents[neighbor].parentNode = node;
            }
        }
        // 5. mark node processed
        processed.push(node);
        // 2.  grab the node closest to start
        node = findLowestCostNode(parents, processed);
    }

    let parentNodeKey = parents[endNodeKey].parentNode;
    const result: string[] = [endNodeKey];
    while (parentNodeKey !== startNodeKey) {
        result.unshift(parentNodeKey!);
        parentNodeKey = parents[parentNodeKey!].parentNode;
    }
    result.unshift(startNodeKey);

    return result;
}
export { search, calculateParents, findLowestCostNode };
