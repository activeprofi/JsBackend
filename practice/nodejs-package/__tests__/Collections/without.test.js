import without from '../../src/Collections/without';

describe('without', () => {
  test('without', () => {
    expect(without([2, 1, 2, 3], 1, 2, 5)).toEqual([3]);
    expect(without([2, 1, 2, 3, 0, 5, 9, -8, 5, 0, 1], 0, 5)).toEqual([2, 1, 2, 3, 9, -8, 1]);
    expect(without([])).toEqual([]);
    expect(without([], 1, 2, 3)).toEqual([]);
  });
});

