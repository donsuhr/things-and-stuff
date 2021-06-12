function getStations(
    graph: { [key: string]: Set<string> },
    argNeeded: Set<string>,
) {
    const result = [];
    let needed = new Set(argNeeded);

    while (needed.size) {
        let biggestStation = null;
        let statesCovered = new Set();

        // eslint-disable-next-line no-restricted-syntax
        for (const [station, covers] of Object.entries(graph)) {
            const currentStationIntersection = new Set(
                Array.from(needed).filter((x) => covers.has(x)),
            );

            if (currentStationIntersection.size > statesCovered.size) {
                biggestStation = station;
                statesCovered = covers;
            }
        }
        result.push(biggestStation);
        // statesNeeded -= statesCovered;
        needed = new Set([...needed].filter((x) => !statesCovered.has(x)));
    }
    return result;
}

export { getStations };
