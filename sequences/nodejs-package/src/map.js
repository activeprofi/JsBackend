/* 
 Реализуйте функцию map для библиотеки html-tags используя итеративный процесс:

 import { make, append, node, value, is } from 'hexlet-html-tags';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'scheme'));
 const dom3 = append(dom2, node('p', 'is a lisp'));

 const processedDom = map((element) => {
 if (is('h1', element)) {
 return node('h2', value(element));
 }
 return element;
}, dom3);

 Реализуйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

 import { make, append, node, value, is } from 'hexlet-html-tags';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'scheme'));
 const dom3 = append(dom2, node('p', 'is a lisp'));

 <h1>emehcs</h1>
 <p>psil a si</p>
 toString(mirror(dom3));
*/

import { l, isEmpty, cons, head, tail, append } from 'hexlet-pairs-data';
import { make, node, value, is } from 'hexlet-html-tags';

export const map = (func, elements) => {
    const iter = (sequence, acc) => {
        if (isEmpty(sequence)) {
            return acc;
        }

        const newElement = func(head(sequence));

        return iter(tail(sequence), append(acc, l(newElement)));
    };

    return iter(elements, l());
};

const reverseString = str => {
    const length = str.length - 1;

    const iter = (s, counter, acc) => {
        if (counter < 0) {
            return acc;
        }

        return iter(s, counter - 1, `${acc}${s[counter]}`);
    };

    return iter(str, length, '');
};

export const mirror = elements => {
    if (isEmpty(elements)) {
        return null;
    }

    const element = head(elements);
    const tag = head(element);
    const value = tail(element);
    const reversedValue = reverseString(value);

    return cons(cons(tag, reversedValue), mirror(tail(elements)));
};