import { cons, car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line
import sumOfPairs from '../../src/lesson 3/sumOfPairs';

test('sumOfPairs', () => {
  expect(toString(sumOfPairs(cons(1, 8), cons(8, 3)))).toBe(toString(cons(9, 11)));
  expect(toString(sumOfPairs(cons(10, -1), cons(93, 100)))).toBe(toString(cons(103, 99)));
});
