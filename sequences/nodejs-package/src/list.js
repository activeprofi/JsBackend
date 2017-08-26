/* 
 Реализуйте функцию has, которая проверяет, является ли переданное значение элементом списка.

 const numbers = l(3, 4, 5, 8);
 has(numbers, 8); // true
 has(numbers, 0); // false
 
 Реализуйте функцию reverse, которая переворачивает список используя итеративный процесс.

 const numbers = l(3, 4, 5);
 reverse(numbers); // (5, 4, 3)
 
 Реализуйте функцию append, которая соединяет два списка используя рекурсивный процесс (Попробуйте сначала представить как работала бы функция copy, которая принимает на вход список и возвращает его копию).

 const numbers = l(3, 4, 5, 8);
 const numbers2 = l(3, 2, 9);
 append(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
 */

import { l, head, tail, isEmpty, cons } from 'hexlet-pairs-data';

export const has = (list, number) => {
    if (isEmpty(list)) {
        return false;
    }

    if (number === head(list)) {
        return true;
    }

    return has(tail(list), number);
};

export const reverse = list => {
    const iter = (list, acc) => {
        if (isEmpty(list)) {
            return acc;
        }

        return iter(tail(list), cons(head(list), acc));
    };

    return iter(list, l());
};

export const append = (l1, l2) => {
    if (isEmpty(l1)) {
        return l2;
    }

    return cons(head(l1), append(tail(l1), l2));
};