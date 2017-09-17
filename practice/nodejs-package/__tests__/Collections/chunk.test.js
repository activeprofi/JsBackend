import chunk from '../../src/Collections/chunk';

describe('chunk', () => {
  test('chunk', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk([])).toEqual([]);
    expect(chunk([], 2)).toEqual([]);
  });
});
