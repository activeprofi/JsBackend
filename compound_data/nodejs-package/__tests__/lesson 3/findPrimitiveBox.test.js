import { cons, car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line
import findPrimitiveBox from '../../src/lesson 3/findPrimitiveBox';

test('findPrimitiveBox', () => {
  const pair1 = cons(
    cons(null, cons(cons(true, false), null)),
    null,
  );
  expect(toString(findPrimitiveBox(pair1))).toBe(toString(cons(true, false)));

  const pair2 = cons(
    null,
    cons(cons(null, cons(null, cons(false, true))), null),
  );
  expect(toString(findPrimitiveBox(pair2))).toBe(toString(cons(false, true)));

  const pair3 = cons(
    null,
    cons('one', 'two'),
  );
  expect(toString(findPrimitiveBox(pair3))).toBe(toString(cons('one', 'two')));
});
