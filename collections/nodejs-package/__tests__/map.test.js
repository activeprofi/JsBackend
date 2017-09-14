import assert from 'assert';

import { wordsCount } from '../src/map';

describe('wordsCount', () => {
  let data;

  beforeEach(() => {
    data = [
      [
        [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]],
        ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'],
      ],
      [
        [['maybe', 2], ['what', 2], ['where', 1], ['wha', 1], ['hat', 1]],
        ['aNd', 'maybe', 'MAYBE', 'whAt', 'WHerE', 'wHat', 'wha', 'hat', 'Or'],
      ],
    ];
  });

  it('should work', () => {
    data.forEach(([expected, words]) => {
      const actual = wordsCount(words);
      assert.deepEqual([...actual], expected);
    });
  });
});
