/* 
 Реализуйте базовый интерфейс для создания html. Он включает в себя следующие функции:

 make - конструктор.
 node - создает новый тег. Содержит два элемента, имя тега и его содержимое.
 append - добавляет элемент в список.
 toString - возвращает текстовое представление html
 import { make, append, toString, node } from './solution';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'hello, world'));
 const dom = append(dom2, node('h2', 'header2'));

 <h1>hello, world</h1><h2>header2</h2>
 toString(dom);
*/

import { l, isEmpty, head, tail, cons, toString as toStringList, append as appendLists } from 'hexlet-pairs-data';

export const make = () => l();

export const node = (tagName, text) => cons(tagName, text);

export const append = (html, node) => {
    //return appendLists(html, l(node));
    return cons(node, html);
};

export const toString = html => {
    if (isEmpty(html)) {
        return '';
    }

    const tag = head(html);
    const tagString = `<${head(tag)}>${tail(tag)}</${head(tag)}>`;

    //return `${tagString}${toString(tail(html))}`;
    return `${toString(tail(html))}${tagString}`;
};