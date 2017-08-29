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

 // <h1>hello, world</h1><h2>header2</h2>
 toString(dom);
*/

import { cons as consPair, car, cdr } from 'hexlet-pairs';
import { l, isEmpty, cons as consList, tail, head } from 'hexlet-pairs-data';

const make = () => l();

const node = (tag, inner) => consPair(tag, inner);

const append = (dom, element) => consList(element, dom);

const toString = (html) => {
  const iter = (tags, acc) => {
    if (isEmpty(tags)) return acc;

    const currentNode = head(tags);
    const tag = car(currentNode);
    const inner = cdr(currentNode);

    return iter(tail(tags), `<${tag}>${inner}</${tag}>${acc}`);
  };

  return iter(html, '');
};

export { make, node, append, toString };
