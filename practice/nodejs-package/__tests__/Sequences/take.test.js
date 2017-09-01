import { l, toString } from 'hexlet-pairs-data';
import take from '../../src/Sequences/take';

describe('take tests', () => {
  it('take', () => {
    expect(toString(take(3, l()))).toBe('()');
    expect(toString(take(3, l(1, 2)))).toBe('(1, 2)');
    expect(toString(take(1, l(7, 2)))).toBe('(7)');
  });
});
