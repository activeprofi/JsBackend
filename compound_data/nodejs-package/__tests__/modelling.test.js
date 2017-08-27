import { makePoint, toString as pointToString } from 'hexlet-points';
import { makeSegment, segmentToString, startSegment, endSegment, midPointSegment } from '../src/modelling';

test('segmets API', () => {
  const p1 = makePoint(1, 2);
  const p2 = makePoint(5, 6);
  const segment = makeSegment(p1, p2);

  expect(segmentToString(segment)).toBe('((1, 2), (5, 6))');
  expect(pointToString(startSegment(segment))).toBe(pointToString(p1));
  expect(pointToString(endSegment(segment))).toBe(pointToString(p2));
  expect(pointToString(midPointSegment(segment))).toBe(pointToString(makePoint(3, 4)));
});
