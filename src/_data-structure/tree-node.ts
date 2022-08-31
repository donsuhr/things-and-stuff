export class TreeNode<T> {
    public value: T | null = null;

    public left: TreeNode<T> | null = null;

    public right: TreeNode<T> | null = null;

    constructor(
        val: T | null = null,
        left: TreeNode<T> | null = null,
        right: TreeNode<T> | null = null,
    ) {
        this.value = val;
        this.left = left;
        this.right = right;
    }
}
