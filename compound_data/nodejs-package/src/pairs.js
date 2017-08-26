// @flow

import * as pairs from 'hexlet-pairs';

export const makePoint = (x, y) => pairs.cons(x, y);
export const getX = point => pairs.car(point);
export const getY = point => pairs.cdr(point);
export const pointToString = point => pairs.toString(point);

export const makeSegment = (p1, p2) => pairs.cons(p1, p2);
export const startSegment = segment => pairs.car(segment);
export const endSegment = segment => pairs.cdr(segment);
export const midPoint = segment => {
    const p1 = startSegment(segment);
    const p2 = endSegment(segment);

    const midX = (getX(p1) + getX(p2)) / 2;
    const midY = (getY(p1) + getY(p2)) / 2;

    return makePoint(midX, midY);
};
export const segmentToString = segment => `(${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))})`;