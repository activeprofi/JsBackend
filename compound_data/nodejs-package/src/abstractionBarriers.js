import { cons, car, cdr, toString } from 'hexlet-pairs';
import { makePoint, getX, getY, quadrant } from 'hexlet-points';

const makeRectangle = (leftBottomPoint, width, height) => cons(leftBottomPoint, cons(width, height));