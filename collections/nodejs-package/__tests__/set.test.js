import assert from 'assert';
import difference from '../src/set';

describe('Difference', () => {
  it('should works', () => {
    const result1 = difference(new Set([2, 1]), new Set([2, 3]));
    assert.deepEqual(result1, new Set([1]));

    const result2 = difference(new Set([]), new Set([2, 3]));
    assert.deepEqual(result2, new Set([]));

    const result3 = difference(new Set([2, 1]), new Set([]));
    assert.deepEqual(result3, new Set([2, 1]));
  });
});
