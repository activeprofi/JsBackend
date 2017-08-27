import { cons, car, cdr } from '../../src/CompoundData/pairsWithoutFunctions';

test('car, cdr', () => {
  expect(car(cons(1, 2))).toBe(1);
  expect(cdr(cons(1, 2))).toBe(2);

  expect(car(cons(-1, 125))).toBe(-1);
  expect(cdr(cons(489, -2582))).toBe(-2582);
});
