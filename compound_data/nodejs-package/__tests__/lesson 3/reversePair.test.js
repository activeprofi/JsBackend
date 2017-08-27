import { cons, car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line
import reversePair from '../../src/lesson 3/reversePair';

test('reversePair', () => {
  expect(toString(reversePair(cons(4, 3)))).toBe(toString(cons(3, 4)));
  expect(toString(reversePair(cons(-10, 1)))).toBe(toString(cons(1, -10)));
});
