import { search, Graph } from './breadth-first-search';

it('finds some things', () => {
    const graph: Graph = {};
    graph.you = ['alice', 'bob', 'claire'];
    graph.bob = ['anuj', 'peggy'];
    graph.alice = ['peggy'];
    graph.claire = ['thom', 'jonny'];
    graph.anuj = [];
    graph.peggy = [];
    graph.thom = [];
    graph.jonny = [];

    function isMatch(val: string): boolean {
        return val.endsWith('m');
    }

    function notfound(val: string): boolean {
        return val.endsWith('xxx');
    }
    expect(search(graph, 'you', isMatch)).toBe('thom');
    expect(search(graph, 'you', notfound)).toBeNull();
});
