import { cons, car, cdr } from '../../src/CompoundData/pairsWithoutFunctions';

test('car, cdr', () => {
  expect(car(cons(1, 2))).toBe(1);
  expect(cdr(cons(1, 2))).toBe(2);

  expect(car(cons(15, 11))).toBe(15);
  expect(cdr(cons(15, 11))).toBe(11);
});
