import { maxSliceA, maxSliceB, maxSliceC } from './max-slice';

// somethings very wrong here

test('maxSliceA', () => {
    expect(maxSliceA([23171, 21011, 21123, 21366, 21013, 21367])).toBe(356);
    expect(maxSliceA([5, -7, 3, 5, -2, 4, -1])).toBe(12);
});
test('maxSliceB', () => {
    expect(maxSliceB([23171, 21011, 21123, 21366, 21013, 21367])).toBe(356);
    expect(maxSliceB([5, -7, 3, 5, -2, 4, -1])).toBe(12);
});
test('maxSliceC', () => {
    expect(maxSliceC([23171, 21011, 21123, 21366, 21013, 21367])).toBe(107684);
    expect(maxSliceC([5, -7, 3, 5, -2, 4, -1])).toBe(10);
});
