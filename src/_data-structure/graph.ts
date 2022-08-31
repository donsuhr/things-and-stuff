//  vertex (node) + edges (connections)

// directed / undirected
// weighted / unweighted
// cyclic / acyclic

// represented by:
//    Adjacency list (usually)
//    Edge list
//    Adjacency matrix  (use when lots of connections)

export class Graph {
    #adjacencyList: { [key: string]: string[] } = {};

    addVertex(key: string) {
        this.#adjacencyList[key] = [];
    }

    removeVertex(key: string) {
        while (this.#adjacencyList[key].length > 0) {
            this.removeEdge(key, this.#adjacencyList[key].pop()!);
        }

        delete this.#adjacencyList[key];
    }

    addEdge(v1: string, v2: string) {
        this.#adjacencyList[v1].push(v2);
        this.#adjacencyList[v2].push(v1);
    }

    removeEdge(v1: string, v2: string) {
        const v1Index = this.#adjacencyList[v1].indexOf(v2);
        if (v1Index !== -1) {
            this.#adjacencyList[v1].splice(v1Index, 1);
        }
        const v2Index = this.#adjacencyList[v2].indexOf(v1);
        if (v2Index !== -1) {
            this.#adjacencyList[v2].splice(v2Index, 1);
        }
    }

    get adjacencyList() {
        return this.#adjacencyList;
    }

    depthFirstRecursive(
        vertex: string,
        visited: { [key: string]: boolean } = {},
        result: string[] = [],
    ) {
        // explore as far as possible before backtracking
        // as apposed to bfs: visit neighbors at current depth first
        // eslint-disable-next-line no-param-reassign
        visited[vertex] = true;
        result.push(vertex);
        this.#adjacencyList[vertex].forEach((x) => {
            if (!visited[x]) {
                this.depthFirstRecursive(x, visited, result);
            }
        });
        return result;
    }

    depthFirstIterative(vertex: string) {
        const visited = new Set(vertex);
        const result = [];
        const stack: string[] = [vertex];
        while (stack.length) {
            const item = stack.pop()!;
            result.push(item);
            this.#adjacencyList[item].forEach((x) => {
                if (!visited.has(x)) {
                    visited.add(x);
                    stack.push(x);
                }
            });
        }
        return result;
    }

    breadthFirstIterative(vertex: string) {
        // visit neighbors at current depth first
        const queued = new Set(vertex);
        const result = [];
        const queue: string[] = [vertex];
        while (queue.length) {
            const item = queue.shift()!;
            result.push(item);
            this.#adjacencyList[item].forEach((x) => {
                if (!queued.has(x)) {
                    queued.add(x);
                    queue.push(x);
                }
            });
        }
        return result;
    }
}
