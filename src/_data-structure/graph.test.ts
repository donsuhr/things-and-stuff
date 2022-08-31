import { Graph } from './graph';
// import { GraphDaily } from '../_daily/graph';

describe.each([
    { fn: Graph },
    // { fn: GraphDaily }
])('Graph $fn.name', ({ fn: CurrentGraph }) => {
    it('can add a vertex', () => {
        const sut = new CurrentGraph();
        sut.addVertex('A');
        expect(sut.adjacencyList).toEqual({ A: [] });
    });

    it('can remove a vertex', () => {
        const sut = new CurrentGraph();
        sut.addVertex('A');
        sut.addVertex('B');
        sut.removeVertex('B');
        expect(sut.adjacencyList).toEqual({ A: [] });
    });

    it('can add an edge', () => {
        const sut = new CurrentGraph();
        sut.addVertex('A');
        sut.addVertex('B');
        sut.addEdge('A', 'B');
        expect(sut.adjacencyList).toEqual({ A: ['B'], B: ['A'] });
    });

    it('can remove an edge', () => {
        const sut = new CurrentGraph();
        sut.addVertex('A');
        sut.addVertex('B');
        sut.addEdge('A', 'B');
        expect(sut.adjacencyList).toEqual({ A: ['B'], B: ['A'] });
        sut.removeEdge('A', 'B');
        expect(sut.adjacencyList).toEqual({ A: [], B: [] });
    });

    it('removes non existent edge', () => {
        const sut = new CurrentGraph();
        sut.addVertex('A');
        sut.addVertex('B');
        sut.removeEdge('A', 'B');
        expect(sut.adjacencyList).toEqual({ A: [], B: [] });
    });

    it('removes edges when removing vertex', () => {
        const sut = new CurrentGraph();
        sut.addVertex('A');
        sut.addVertex('B');
        sut.addVertex('C');
        sut.addEdge('A', 'B');
        sut.addEdge('A', 'C');
        expect(sut.adjacencyList).toEqual({
            A: ['B', 'C'],
            B: ['A'],
            C: ['A'],
        });
        sut.removeVertex('A');
        expect(sut.adjacencyList).toEqual({ B: [], C: [] });
    });

    describe('Searching', () => {
        let g:Graph;

        beforeEach(() => {
            g = new CurrentGraph();
            g.addVertex('A');
            g.addVertex('B');
            g.addVertex('C');
            g.addVertex('D');
            g.addVertex('E');
            g.addVertex('F');

            g.addEdge('A', 'B');
            g.addEdge('A', 'C');
            g.addEdge('B', 'D');
            g.addEdge('C', 'E');
            g.addEdge('D', 'E');
            g.addEdge('D', 'F');
            g.addEdge('E', 'F');
        });

        it('can depthFirstRecursive', () => {
            expect(g.depthFirstRecursive('A')).toEqual([
                'A',
                'B',
                'D',
                'E',
                'C',
                'F',
            ]);
        });

        it('can depthFirstIterative', () => {
            expect(g.depthFirstIterative('A')).toEqual([
                'A',
                'C',
                'E',
                'F',
                'D',
                'B',
            ]);
        });

        it('can breadthFirstIterative', () => {
            expect(g.breadthFirstIterative('A')).toEqual([
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
            ]);
        });
    });
});
