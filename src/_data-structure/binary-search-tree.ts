import { TreeNode as Node } from './tree-node';

export class BinarySearchTree<T> {
    #root: Node<T> | null = null;

    // remove(): no implementation, complicated

    insert(val: T) {
        const node = new Node<T>(val);

        if (this.#root === null) {
            this.#root = node;
        } else {
            let pointer = this.#root;
            while (pointer) {
                if (node.value! > pointer.value!) {
                    if (pointer.right === null) {
                        pointer.right = node;
                        break;
                    }
                    pointer = pointer.right;
                } else {
                    if (pointer.left === null) {
                        pointer.left = node;
                        break;
                    }
                    pointer = pointer.left;
                }
            }
        }
    }

    find(val: T) {
        let pointer = this.#root;
        while (pointer !== null) {
            if (pointer.value === val) {
                return pointer;
            }
            if (pointer.value && val > pointer.value) {
                pointer = pointer.right;
            } else {
                pointer = pointer.left;
            }
        }
        return undefined;
    }

    /*
      Depth First Search

      less memory than BFS. However its recursive call stacks can get deep
      does a path exist, solve a maze
      can get slow, dont use on big trees with rare results

      - in order: return a sorted array from bst
      - pre order: useful for copy a tree
      - post order: ?
    */

    depthFirstSearch(
        node = this.#root,
        result: T[] = [],
        order: 'preOrder' | 'inOrder' | 'postOrder' = 'inOrder',
    ) {
        if (order === 'preOrder' && node?.value) {
            result.push(node.value);
        }

        if (node?.left) {
            this.depthFirstSearch(node.left, result, order);
        }

        if (order === 'inOrder' && node?.value) {
            result.push(node.value);
        }

        if (node?.right) {
            this.depthFirstSearch(node.right, result, order);
        }

        if (order === 'postOrder' && node?.value) {
            result.push(node.value);
        }
        return result;
    }

    /*
       Breadth First Search

       use to find the shortest path, most related items, closest friends
       uses more memory
        - avoid on wide tree

       Dijkstra’s : doesn't work with negative numbers
       Bellman-Ford
    */

    breadthFirstSearch() {
        let node = this.#root;
        const queue = [node];
        const result = [];
        let currentCount = 1; // for pretty print
        let nextCount = 0; // for pretty print
        let resultString = '';
        while (queue.length) {
            node = queue.shift()!;
            result.push(node.value);
            currentCount -= 1;
            resultString += `${node.value} `;
            if (node.left) {
                queue.push(node.left);
                nextCount++;
            }
            if (node.right) {
                queue.push(node.right);
                nextCount++;
            }
            if (currentCount === 0) {
                resultString += `\n`;
                [currentCount, nextCount] = [nextCount, currentCount];
            }
        }
        return { result, formatted: resultString };
    }
}
