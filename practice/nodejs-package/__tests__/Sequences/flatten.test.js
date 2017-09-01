import { l, toString } from 'hexlet-pairs-data';
import flatten from '../../src/Sequences/flatten';

describe('flatten tests', () => {
  it('flatten', () => {
    expect(toString(flatten(l(1, 2, l(3, 5), l(l(4, 3), 2))))).toBe('(1, 2, 3, 5, 4, 3, 2)');
    expect(toString(flatten(l()))).toBe('()');
  });
});
