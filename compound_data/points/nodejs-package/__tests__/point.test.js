import * as point from '../src/point';

test('point', () => {
  expect(point.getX(point.makePoint(1, 2))).toBe(1);
  expect(point.getY(point.makePoint(1, 2))).toBe(2);
  expect(point.toString(point.makePoint(1, 2))).toBe('(1, 2)');

  expect(point.distance(point.makePoint(0, 0), point.makePoint(3, 4))).toBe(5);
  expect(point.distance(point.makePoint(0, 0), point.makePoint(0, 0))).toBe(0);

  expect(point.quadrant(point.makePoint(5, 3))).toBe(1);
  expect(point.quadrant(point.makePoint(-5, 3))).toBe(2);
  expect(point.quadrant(point.makePoint(-2, -10))).toBe(3);
  expect(point.quadrant(point.makePoint(7, -9))).toBe(4);
  expect(point.quadrant(point.makePoint(0, 0))).toBe(-1);
  
  expect(point.toString(point.symmetricalPoint(point.makePoint(0, 0)))).toBe('(0, 0)');
  expect(point.toString(point.symmetricalPoint(point.makePoint(2, 4)))).toBe('(-2, -4)');
  expect(point.toString(point.symmetricalPoint(point.makePoint(7, -3)))).toBe('(-7, 3)');
});
