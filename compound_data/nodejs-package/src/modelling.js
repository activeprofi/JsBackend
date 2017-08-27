/*
Рассмотрим задачу представления отрезков на прямой плоскости. 
Каждый отрезок представляется как пара точек: начало и конец. Он может быть быть описан, например, так: [(1, 3), (5, 4)]. 
Это означает, что наш отрезок начинается в точке (1, 3) и заканчивается в точке (5, 4) координатной плоскости.

В этом задании необходимо разработать абстракцию для работы с отрезками (англ. сегмент), 
которая позволяет строить их из точек, извлекать из отрезков составные части (начало или конец сегмента), а так же получать текстовое представление сегмента.

Абстракция заключается в том, что конкретное представление сегмента определяется внутри функций, 
описывающих работу с отрезками и зависит от создателя библиотеки. 
С точки зрения клиента библиотеки (кода который ее вызывает), не важно как конкретно устроен сегмент, важно только то, 
что есть некоторый набор функций (абстракция), позволяющий работать с ним.

Определите и экспортируйте следующие функции:

Конструктор makeSegment, который принимает на вход две точки и возвращает сегмент. Первая точка это начало сегмента, вторая это конец.
Селекторы startSegment и endSegment, которые извлекают из сегмента его начальную и конечную точку соответственно.
Вспомогательную функцию segmentToString, которая возвращает текстовое представление сегмента: [(1, 2), (-4, -2)].
Функцию midpointSegment, которая находит точку на середине отрезка по формулaм: x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
import * as points from 'hexlet-points';

// не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// работать используя функции для работы с сегментами
const segment = makeSegment(points.makePoint(1, 2), points.makePoint(-4, -2));
console.log(toStr(segment)); // [(1, 2), (-4, -2)]

const point1 = startSegment(segment); // (1, 2)
console.log(points.toString(point1);

const point2 = endSegment(segment);
console.log(points.toString(point2)); // (-4, -2)

points.toString(startSegment(segment)) == points.toString(makePoint(1, 2)); // true

points.toString(midpointSegment(segment)); // (-1.5, 0)
Поскольку на текущий момент мы знакомы только с парами для работы с составными данными, то и реализация сегментов должна быть основана на них.
*/

import * as pairs from 'hexlet-pairs';
import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';

export const makeSegment = (p1, p2) => pairs.cons(p1, p2);
export const startSegment = segment => pairs.car(segment);
export const endSegment = segment => pairs.cdr(segment);
export const midPointSegment = (segment) => {
  const p1 = startSegment(segment);
  const p2 = endSegment(segment);

  const midX = (getX(p1) + getX(p2)) / 2;
  const midY = (getY(p1) + getY(p2)) / 2;

  return makePoint(midX, midY);
};

export const segmentToString = segment =>
  `(${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))})`;
