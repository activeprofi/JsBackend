import { makePoint, toString as pointToString } from 'hexlet-points';

import {
  makeRectangle,
  startPoint,
  width,
  height,
  square,
  perimeter,
  containsTheOrigin,
} from '../src/abstractionBarriers';

const rectangle = makeRectangle(makePoint(0, 1), 5, 4);

test('selectors', () => {
  expect(pointToString(startPoint(rectangle))).toBe('(0, 1)');
  expect(width(rectangle)).toBe(5);
  expect(height(rectangle)).toBe(4);
});

test('square', () => {
  expect(square(rectangle)).toBe(20);
});

test('perimeter', () => {
  expect(perimeter(rectangle)).toBe(18);
});

test('containsTheOrigin', () => {
  expect(containsTheOrigin(rectangle)).toBe(false);

  expect(containsTheOrigin(makeRectangle(makePoint(-4, 3), 5, 4))).toBe(true);
  expect(containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2))).toBe(false);
  expect(containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8))).toBe(false);
});
