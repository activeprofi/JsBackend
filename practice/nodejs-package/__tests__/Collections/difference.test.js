import difference from '../../src/Collections/difference';

describe('difference', () => {
  test('difference', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([0, 5, 2, 1], [2, 3, 9])).toEqual([0, 5, 1]);
    expect(difference([], [])).toEqual([]);
  });
});
