import { l, toString } from 'hexlet-pairs-data';
import union from '../../src/Sequences/union';

describe('union tests', () => {
  it('union', () => {
    const list1 = l(2, 3, 2, 1, 7);
    const list2 = l(1, 5, 3, 5, 8, 9);

    expect(toString(union(list1, list2))).toBe('(2, 3, 1, 7, 5, 8, 9)');
    expect(toString(union(l(0, 1, 2), l(3, 5, 7)))).toBe('(0, 1, 2, 3, 5, 7)');
    expect(toString(union(l(), l()))).toBe('()');
  });
});
