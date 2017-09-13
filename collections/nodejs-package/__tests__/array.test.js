// import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

import uniq from '../src/array';

describe('uniq', () => {
  it('should work', () => {
    assert.deepEqual(uniq([]), []);
    assert.deepEqual(uniq([2, 1]), [2, 1]);
    assert.deepEqual(uniq([2, 1, 2, 3]), [2, 1, 3]);
    assert.deepEqual(uniq([-2, 20, 0, 4, 20, 0]), [-2, 20, 0, 4]);
  });
});
