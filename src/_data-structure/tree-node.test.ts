import { TreeNode } from './tree-node';

it('can be null', () => {
    const sut = new TreeNode();
    expect(sut.value).toBeNull();
    expect(sut.left).toBeNull();
    expect(sut.right).toBeNull();
});

it('can have a value', () => {
    const left = new TreeNode<string>();
    const right = new TreeNode<string>();
    const sut = new TreeNode<string>('foo', left, right);
    expect(sut.value).toBe('foo');
    expect(sut.left).toBe(left);
    expect(sut.right).toBe(right);
});
