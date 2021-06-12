export type TripletArray = [string, string, string][];

function parentless(A: string[], graph: { [key: string]: Set<string> }) {
    return A.find(
        (x) => !Object.hasOwnProperty.call(graph, x) || graph[x].size === 0,
    );
}

export function recoverSecret(A: TripletArray): string {
    const graph: { [key: string]: Set<string> } = {};
    const processed = [];
    const parents: { [key: string]: Set<string> } = {};
    const allLetters: Set<string> = new Set();
    // eslint-disable-next-line no-restricted-syntax
    for (const row of A) {
        const [first, second, third] = row;
        allLetters.add(first);
        allLetters.add(second);
        allLetters.add(third);
        graph[first] = (graph[first] || new Set()).add(second);
        graph[second] = (graph[second] || new Set()).add(third);
        parents[second] = (parents[second] || new Set()).add(first);
        parents[third] = (parents[third] || new Set()).add(second);
    }

    while (allLetters.size) {
        const letter = parentless(Array.from(allLetters), graph);
        /* istanbul ignore else */
        if (letter) {
            processed.unshift(letter);
            allLetters.delete(letter);
            if (parents[letter]) {
                parents[letter].forEach((x) => {
                    graph[x].delete(letter);
                });
            }
        }
    }

    return processed.join('');
}
