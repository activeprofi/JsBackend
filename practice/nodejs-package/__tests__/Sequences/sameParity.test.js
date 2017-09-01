import { l, toString } from 'hexlet-pairs-data';
import sameParity from '../../src/Sequences/sameParity';

describe('sameParity tests', () => {
  it('sameParity', () => {
    expect(toString(sameParity(l(-1, 0, 1, -3, 10, -2)))).toBe('(-1, 1, -3)');
    expect(toString(sameParity(l(2, 0, 1, -3, 10, -2)))).toBe('(2, 0, 10, -2)');
    expect(toString(sameParity(l()))).toBe('()');
  });
});
