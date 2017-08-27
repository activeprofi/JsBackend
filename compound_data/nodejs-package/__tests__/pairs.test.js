import { cons, car, cdr, toString } from '../src/pairs';

test('pairs', () => {
  expect(toString(cons(1, 3))).toBe('(1, 3)');
  expect(toString(cons(-5, 3))).toBe('(-5, 3)');
  expect(toString(cons(0, 0))).toBe('(0, 0)');
  expect(toString(cons(-4, -8))).toBe('(-4, -8)');

  expect(car(cons(-4, -8))).toBe(-4);
  expect(car(cons(0, -8))).toBe(0);
  expect(cdr(cons(-4, -8))).toBe(-8);
  expect(cdr(cons(0, 18))).toBe(18);
});
