/* 
 Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

 import { node, append, make, reduce } from 'hexlet-html-tags';

 const html1 = append(make(), node('h1', 'header1'));
 const html2 = append(html1, node('h1', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 reduce((element, acc) => {
 return is('h1', element) ? acc + 1 : acc;
 }, 0, html3); // 2
 Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.

 import { toString } from 'hexlet-pairs-data';
 import { make, append, node } from 'hexlet-html-tags';

 const html1 = make();
 const html2 = append(html1, node('h1', 'scheme'));
 const html3 = append(html2, node('p', 'is a lisp'));
 const html4 = append(html3, node('blockquote', ''));
 const html5 = append(html4, node('blockquote', ''));
 const html6 = append(html5, node('blockquote', 'quote'));

 emptyTagsCount('blockquote', html6); // 2
*/

import { head, tail, isEmpty } from 'hexlet-pairs-data';
import { node, filter, name, value } from 'hexlet-html-tags';

export const reduce = (func, initial, seq) => {

    const iter = (elements, acc) => {
        if (isEmpty(elements)) {
            return acc;
        }

        const element = head(elements);
        const newAcc = func(element, acc);

        return iter(tail(elements), newAcc);
    };

    return iter(seq, initial);
};

export const emptyTagsCount = (tag, html) => {

    return reduce((element, acc) => {
        return tag === name(element) && value(element) === ''
            ? acc + 1
            : acc;
    }, 0, html);

};