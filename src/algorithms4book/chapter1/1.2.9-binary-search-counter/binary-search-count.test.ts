import { BinarySearch } from './binary-search-count';
import { Counter } from './Counter';

test('it finds an index', () => {
    const counter = new Counter('mycounter');
    const arr = [1, 2, 3];
    expect(BinarySearch.findIndex(2, arr)).toEqual(1);
    expect(BinarySearch.findIndex(1, arr, false, counter)).toEqual(0);
    expect(BinarySearch.findIndex(3, arr)).toEqual(2);
    expect(BinarySearch.findIndex(5, arr)).toEqual(-1);
});

test('it consoles after final search', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const arr = [1, 2, 3];
    const counter = new Counter('mycounter');
    BinarySearch.findIndex(2, arr, false, counter);
    expect(spy).not.toHaveBeenCalled();
    BinarySearch.findIndex(2, arr, true, counter);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});

test('its loop count is correct', () => {
    const counter = new Counter('mycounter');
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const arr = [1, 2, 3];
    BinarySearch.findIndex(2, arr, true, counter);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('1'));
    const result = BinarySearch.findIndex(2, [1, 2, 3, 4, 5], true, counter);
    expect(result).toEqual(1);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('4'));
});
