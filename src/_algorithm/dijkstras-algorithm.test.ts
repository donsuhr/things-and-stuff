import {
    search,
    calculateParents,
    findLowestCostNode,
} from './dijkstras-algorithm';

const graph = {
    a: {
        b: 10,
        d: 60,
        c: 20,
    },
    b: {
        d: 10,
        e: 50,
    },
    c: {
        f: 20,
    },
    d: {
        e: 20,
        f: 20,
    },
    e: {
        g: 40,
    },
    f: {
        h: 30,
    },
    g: {
        i: 10,
    },
    h: { i: 30 },
    i: {},
};

it('can create parents', () => {
    const parents = calculateParents(graph, 'a');
    expect(parents).toEqual({
        b: { parentNode: 'a', value: 10 },
        d: { parentNode: 'a', value: 60 },
        c: { parentNode: 'a', value: 20 },
        e: { parentNode: null, value: Number.MAX_VALUE },
        f: { parentNode: null, value: Number.MAX_VALUE },
        g: { parentNode: null, value: Number.MAX_VALUE },
        h: { parentNode: null, value: Number.MAX_VALUE },
        i: { parentNode: null, value: Number.MAX_VALUE },
    });
});

test('it can find a node', () => {
    const parents = calculateParents(graph, 'a');
    const processed: string[] = [];
    const result = findLowestCostNode(parents, processed);
    expect(result).toBe('b');
});

test('it can find a second node', () => {
    const parents = calculateParents(graph, 'a');
    const processed = ['b'];
    const result = findLowestCostNode(parents, processed);
    expect(result).toBe('c');
});

it('finds some things', () => {
    expect(search(graph, 'a', 'i')).toEqual(['a', 'b', 'd', 'e', 'g', 'i']);
});

it('finds more things', () => {
    const differentGraph = {
        start: {
            a: 6,
            b: 2,
        },
        a: {
            fin: 1,
        },
        b: {
            a: 3,
            fin: 5,
        },
        fin: {},
    };

    expect(search(differentGraph, 'start', 'fin')).toEqual([
        'start',
        'b',
        'a',
        'fin',
    ]);
});

it('finds even more things', () => {
    const differentGraph = {
        a: {
            b: 5,
            c: 2,
        },
        b: {
            d: 4,
            e: 2,
        },
        c: {
            b: 8,
            e: 7,
        },
        d: {
            f: 3,
            e: 6,
        },
        e: {
            f: 1,
        },
        f: {},
    };

    expect(search(differentGraph, 'a', 'f')).toEqual(['a', 'b', 'e', 'f']);
});

it('example next', () => {
    const differentGraph = {
        a: {
            b: 10,
        },
        b: {
            d: 20,
        },
        c: {
            b: 1,
        },
        d: {
            c: 1,
            e: 30,
        },
        e: {},
    };

    expect(search(differentGraph, 'a', 'e')).toEqual(['a', 'b', 'd', 'e']);
});
