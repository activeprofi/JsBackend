import { makePoint, toString } from 'hexlet-points';
import * as point from '../src/point';

test('point', () => {
  expect(point.distance(makePoint(0, 0), makePoint(3, 4))).toBe(5);
  expect(point.distance(makePoint(0, 0), makePoint(0, 0))).toBe(0);

  expect(point.quadrant(makePoint(5, 3))).toBe(1);
  expect(point.quadrant(makePoint(-5, 3))).toBe(2);
  expect(point.quadrant(makePoint(-2, -10))).toBe(3);
  expect(point.quadrant(makePoint(7, -9))).toBe(4);
  expect(point.quadrant(makePoint(0, 0))).toBe(-1);

  expect(toString(point.symmetricalPoint(makePoint(0, 0)))).toBe('(0, 0)');
  expect(toString(point.symmetricalPoint(makePoint(2, 4)))).toBe('(-2, -4)');
  expect(toString(point.symmetricalPoint(makePoint(7, -3)))).toBe('(-7, 3)');
});
