import { partitionDifference } from './partitionDifference';

test('it.... no clue ', () => {
    expect(partitionDifference([3, 1, 2, 4, 3])).toBe(1);
    expect(partitionDifference([3, -10])).toBe(13);
    expect(partitionDifference([1,2,5,12])).toBe(4);
});
