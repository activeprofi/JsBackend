/*
Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого всегда параллельны осям. При такой постановке, 
достаточно знать только три параметра для однозначного задания прямоугольника на плоскости: координаты левой-верхней точки, ширину и высоту. 
Зная их, мы всегда можем построить прямоугольник одним единственным способом.

  |
4 |    точка   ширина
  |       *-------------
3 |       |            |
  |       |            | высота
2 |       |            |
  |       —------------
1 |
  |
  |---------------------------
0    1   2   3   4   5   6   7
Основной интерфейс:

makeRectangle (конструктор) - создает прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту.
Селекторы startPoint, width и height
Вспомогательные функции для выполнения расчетов:

square - возвращает площадь прямоугольника (a * b).
perimeter - возвращает периметр прямоугольника (2 * (a + b)).
containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). 
Чтобы в этом убедиться, достаточно проверить, что все точки прямоугольника лежат в разных квадрантах.
Так как это интерфейсные функции, то они должны быть экспортированы. Если этого не сделать, система модулей js не даст ими воспользоваться.

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// —---------
// |         |
// |         | 5
// |         |
// —---------
const p = makePoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);

// Вычисление площади прямоугольника
square(rectangle); // 20;

perimeter(rectangle); // 18
containsTheOrigin(rectangle); // false

const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
containsTheOrigin(rectangle02); // true

containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2)); // false
containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8)); // false
*/

import { cons, car, cdr, isPair, toString } from 'hexlet-pairs';
import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';

const makeRectangle = (startPoint, width, height) =>
  cons(startPoint, cons(width, height));

const startPoint = rectangle => car(rectangle);
const width = rectangle => car(cdr(rectangle));
const height = rectangle => cdr(cdr(rectangle));

const square = rectangle =>
  width(rectangle) * height(rectangle);

const perimeter = rectangle =>
  2 * (width(rectangle) + height(rectangle));

const containsTheOrigin = (rectangle) => {
  const leftTop = car(rectangle);
  const w = width(rectangle);
  const h = height(rectangle);

  if (
    (getX(leftTop) < 0 && getY(leftTop) > 0) &&
    (getX(leftTop) + w > 0 && getY(leftTop) > 0) &&
    (getX(leftTop) < 0 && getY(leftTop) - h < 0) &&
    (getX(leftTop) + w > 0 && getY(leftTop) - h < 0)
  ) {
    return true;
  }

  return false;
};

export { makeRectangle, startPoint, width, height, square, perimeter, containsTheOrigin };
