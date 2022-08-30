import { BinarySearchTree } from './binary-search-tree';
// import { BinarySearchTreeDaily } from '../_daily/binarySearchTree';
import { isSorted } from '../util';

describe.each([
    { fn: BinarySearchTree },
    // { fn: BinarySearchTreeDaily }
])('Binary Search Tree: $fn.name', ({ fn: CurrentBinarySearchTree }) => {
    let sut: BinarySearchTree<number>;

    beforeEach(() => {
        //     9
        //  4     20
        // 1  6  15 170

        sut = new CurrentBinarySearchTree<number>();
        sut.insert(9);
        sut.insert(4);
        sut.insert(6);
        sut.insert(20);
        sut.insert(170);
        sut.insert(15);
        sut.insert(1);
    });

    it('creates a tree', () => {
        const dfs = sut.depthFirstSearch();
        expect(sut.depthFirstSearch()).toEqual(dfs);
        expect(isSorted(dfs)).toBe(true);
    });

    it('breadthFirstSearch', () => {
        expect(sut.breadthFirstSearch().result).toEqual([
            9, 4, 20, 1, 6, 15, 170,
        ]);
        expect(sut.breadthFirstSearch().formatted).toMatchSnapshot();
    });

    it('finds existing', () => {
        const found = sut.find(20)!;
        expect(found.value).toBe(20);
        expect(found.left!.value).toBe(15);
    });

    it('does not find missing', () => {
        expect(sut.find(44)).not.toBeDefined();
    });

    describe('Depth First Search', () => {
        it('preOrder', () => {
            expect(
                sut.depthFirstSearch(undefined, undefined, 'preOrder'),
            ).toEqual([9, 4, 1, 6, 20, 15, 170]);
        });

        it('inOrder', () => {
            expect(
                sut.depthFirstSearch(undefined, undefined, 'inOrder'),
            ).toEqual([1, 4, 6, 9, 15, 20, 170]);
        });

        it('postOrder', () => {
            expect(
                sut.depthFirstSearch(undefined, undefined, 'postOrder'),
            ).toEqual([1, 6, 4, 15, 170, 20, 9]);
        });
    });
});
