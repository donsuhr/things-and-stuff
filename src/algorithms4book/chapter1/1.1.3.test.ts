import { checkArguments, Exercise15 } from './1.1.3';

test('it console logs equal', () => {
    const origArgv = process.argv;
    process.argv = ['node', 'command', '1', '1'];
    const spy = jest.spyOn(console, 'log').mockImplementation();
    checkArguments();

    expect(spy).toHaveBeenCalledWith('equal');
    spy.mockRestore();
    process.argv = origArgv;
});

test('it console logs not equal', () => {
    const origArgv = process.argv;
    process.argv = ['node', 'command', '1', '2'];
    const spy = jest.spyOn(console, 'log').mockImplementation();
    checkArguments();

    expect(spy).toHaveBeenCalledWith('not equal');
    spy.mockRestore();
    process.argv = origArgv;
});

test('it exercise15', () => {
    expect(Exercise15.rank(4, [1, 2, 3, 4])).toBe(3);
});

test('it exercise15', () => {
    expect(Exercise15.rank(0, [1, 2, 3, 4])).toBe(-1);
});

test('it lg', () => {
    expect(Exercise15.lg(10)).toBe(5);
});

test('it factoral', () => {
    expect(Exercise15.factoral(4)).toBe(24);
});
