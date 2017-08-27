import { makePoint, getX, getY } from 'hexlet-points';

export const quadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;

  return -1;
};

const square = x => x ** 2;

export const distance = (point1, point2) =>
  Math.sqrt(square(getX(point2) - getX(point1)) + square(getY(point2) - getY(point1)));

export const symmetricalPoint = point =>
  makePoint(-getX(point), -getY(point));
