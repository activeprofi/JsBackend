import { l, toString } from 'hexlet-pairs-data';
import zip from '../../src/Sequences/zip';

describe('zip tests', () => {
  it('zip', () => {
    expect(toString(zip(l(0, 1, 2), l(3, 5, 7)))).toBe('((0, 3), (1, 5), (2, 7))');
    expect(toString(zip(l(0, 1, 2, 5), l(3, 5, 7)))).toBe('((0, 3), (1, 5), (2, 7))');
    expect(toString(zip(l(0, 1, 2), l(3, 5, 7, 9, 0)))).toBe('((0, 3), (1, 5), (2, 7))');
    expect(toString(zip(l(), l()))).toBe('()');
    expect(toString(zip(l(1, 0), l()))).toBe('()');
    expect(toString(zip(l(), l(1, 8)))).toBe('()');
  });
});

