import { getStations } from './greedy-aprox';

it('finds some things', () => {
    const stations: { [key: string]: Set<string> } = {};

    stations.kone = new Set(['id', 'nv', 'ut']);
    stations.ktwo = new Set(['wa', 'id', 'mt']);
    stations.kthree = new Set(['or', 'nv', 'ca']);
    stations.kfour = new Set(['nv', 'ut']);
    stations.kfive = new Set(['ca', 'az']);

    const statesNeeded = new Set([
        'mt',
        'wa',
        'or',
        'id',
        'nv',
        'ut',
        'ca',
        'az',
    ]);

    expect(getStations(stations, statesNeeded)).toEqual([
        'kone',
        'ktwo',
        'kthree',
        'kfive',
    ]);
});
