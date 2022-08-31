import { MaxHeapTree } from './max-heap-binary-tree';
// import { MaxHeapTreeDaily } from '../_daily/max-heap-binary-tree';

describe.each([
    { fn: MaxHeapTree },
    // { fn: MaxHeapTreeDaily }
])('Max Heap Binary Tree: $fn.name', ({ fn: CurrentMaxHeap }) => {
    describe('max heap binary tree', () => {
        it('inserts', () => {
            const heap = new CurrentMaxHeap();
            heap.insert(41);
            heap.insert(39);
            heap.insert(33);
            heap.insert(18);
            heap.insert(27);
            heap.insert(12);
            heap.insert(55);
            heap.insert(1);
            expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33, 1]);
        });

        it('extractMax', () => {
            const heap = new CurrentMaxHeap();
            heap.insert(41);
            heap.insert(39);
            heap.insert(33);
            heap.insert(18);
            heap.insert(27);
            heap.insert(12);
            heap.insert(55);
            expect(heap.extractMax()).toBe(55);
            expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);
        });

        it('extractMax on empty set', () => {
            const heap = new CurrentMaxHeap();
            expect(heap.extractMax()).not.toBeDefined();
            expect(heap.values).toEqual([]);
        });
    });
});
