// @flow

import { makePoint, makeSegment, segmentToString, pointToString, startSegment, endSegment, midPoint } from '../src/pairs';

const p1 = makePoint(1, 2);
const p2 = makePoint(5, 6);
const segment = makeSegment(p1, p2);

test('pairs', () => {
    expect(segmentToString(segment)).toBe('((1, 2), (5, 6))');
    expect(pointToString(startSegment(segment))).toBe(pointToString(p1));
    expect(pointToString(endSegment(segment))).toBe(pointToString(p2));
    expect(pointToString(midPoint(segment))).toBe(pointToString(makePoint(3, 4)));
});