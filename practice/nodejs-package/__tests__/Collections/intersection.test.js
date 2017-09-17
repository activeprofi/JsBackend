import intersection from '../../src/Collections/intersection';

describe('intersection', () => {
  test('intersection', () => {
    expect(intersection([2, 0, 1, 4, 7, 0], [2, 3, 7, 0, -7, 0, 0])).toEqual([2, 0, 7]);
    expect(intersection([], [])).toEqual([]);
    expect(intersection([], [1, 3])).toEqual([]);
    expect(intersection([1, 4, 0], [])).toEqual([]);
  });
});
