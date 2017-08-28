/* 
 Реализуйте функцию has, которая проверяет, является ли переданное значение элементом списка.

 const numbers = l(3, 4, 5, 8);
 has(numbers, 8); // true
 has(numbers, 0); // false
 
 Реализуйте функцию reverse, которая переворачивает список используя итеративный процесс.

 const numbers = l(3, 4, 5);
 reverse(numbers); // (5, 4, 3)
 
 Реализуйте функцию append, которая соединяет два списка используя рекурсивный процесс (Попробуйте сначала представить как работала бы функция copy, 
 которая принимает на вход список и возвращает его копию).

 const numbers = l(3, 4, 5, 8);
 const numbers2 = l(3, 2, 9);
 append(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
 */

import { l, cons, head, tail, isEmpty }  from 'hexlet-pairs-data';

const has = (list, val) => {
  if (isEmpty(list)) return false;

  if (head(list) === val) return true;

  return has(tail(list), val);
};

const reverse = list => {
  const iter = (seq, acc) => {
    if (isEmpty(seq)) return acc;

    return iter(tail(seq), cons(head(seq), acc));
  };

  return iter(list, l());
};

const copy = list => {
  if (isEmpty(list)) return l();

  return cons(head(list), copy(tail(list)));
};

const append = (list1, list2) => {
  if (isEmpty(list1)) return list2;

  return cons(head(list1), append(tail(list1), list2));
};

export { has, reverse, copy, append };