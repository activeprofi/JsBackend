/* Реализуйте абстракцию для работы с рациональными числами:

 Конструктор make.
 Селекторы numer (числитель) и denom (знаменатель).
 Функцию toString, возвращающую строковое представление рационального числа.
 Функцию isEqual, проверяющую равенство двух чисел.
 Функцию add, выполняющую сложение.
 Функцию sub, выполняющую вычитание.
 Функцию mul, выполняющую умножение.
 Функцию div, выполняющую деление.
 Пример:

 const rat1 = make(2, 3);
 const rat12 = make(4, 6);
 const rat2 = make(7, 2);

 toString(rat12);  '4 / 6'
 isEqual(rat1, rat12);  true

 add(rat1, rat2);  make(25, 6)
 sub(rat2, rat1);  make(17, 6)
 mul(rat1, rat2);  make(14, 6)
 div(rat1, rat2);   make(4, 21)
 Рациональные числа — это целые и дробные числа. Формулы:

 Сложение:

 a/b + c/d = (a * d + b * c) / b * d
 Вычитание:

a/b - c/d = (a * d - b * c) / b * d
Умножение:

a/b * c/d = a * c / b * d
Деление:

a/b / c/d = a * d / b * c
Равенство:

a/b = c/d, если a * d = c * b

*/

import { cons, car, cdr } from 'hexlet-pairs';

const gcd = (m, n) => {
  if (n === 0) return m;

  return gcd(n, m % n);
};

const make = (numer, denom) => {
  const divisor = gcd(numer, denom);

  return cons(numer / divisor, denom / divisor);
};

const numer = rat => car(rat);
const denom = rat => cdr(rat);

const add = (r1, r2) =>
  make(numer(r1) * denom(r2) + numer(r2) * denom(r1), denom(r1) * denom(r2));

const sub = (r1, r2) =>
  make(numer(r1) * denom(r2) - numer(r2) * denom(r1), denom(r1) * denom(r2));

const mul = (r1, r2) =>
  make(numer(r1) * numer(r2), denom(r1) * denom(r2));

const div = (r1, r2) =>
  make(numer(r1) * denom(r2), denom(r1) * numer(r2));

const isEqual = (r1, r2) =>
  numer(r1) * denom(r2) === numer(r2) * denom(r1);

const toString = rat => `${numer(rat)} / ${denom(rat)}`;

export { make, numer, denom, add, toString, isEqual, sub, mul, div };
