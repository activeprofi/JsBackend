/*
Реализуйте и экспортируйте по-умолчанию, функцию select, которая принимает на вход имя тега, а возвращает список всех нод соответствующих имени. 
Ноды возвращаются в том виде, в котором они представлены в дереве, другими словами если у возвращаемых нод есть потомки, они так же остаются внутри ноды. 
Порядок, в котором ноды возвращаются - не важен.

Предположим, что у нас есть такой html:

<h1>scheme</h1>
<p>is a lisp</p>
<ul>
    <li>item 1</li>
    <li>item 2</li>
</ul>
<ol>
    <li>item 1</li>
    <li>item 2</li>
</ol>
<p>
    is a functional lang
</p>
<ul>
    <li>item</li>
</ul>
<div>
    <p>text</p>
</div>
<div>
    <div>
        <p>text</p>
    </div>
</div>
<h1>prolog</h1>
<p>is about logic</p>
Тогда:

const dom1 = make(); // Список нод, то есть это лес, а не дерево
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children1));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', 'text'))))));

const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

select('li', dom);
// [('li', 'item 1'), ('li', 'item 2'), ('li', 'item 1'), ('li', 'item 2'), ('li', 'item')]

select('p', dom);
// [('p', 'is a lisp'), ('p', 'text'), ('p', 'text'), ('p', 'is about logic'), ('p', 'is a functional language')]

### Подсказки

* hasChildren - функция, которая проверяет, есть ли потомки у элемента
* children - функция, которая возвращает список потомков
* Проанализируйте тесты
*/


import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
import { is, toString as htmlToString, hasChildren, children, map, filter, reduce, node } from 'hexlet-html-tags';

const append = (list1, list2) => {
  if (isEmpty(list1)) return list2;

  return consList(head(list1), append(tail(list1), list2));
};

// const select = (tag, dom) => {
//   if (isEmpty(dom)) return l();

//   if (!isList(dom)) {
//     if (is(tag, dom)) {
//       return dom;
//     }

//     return l();
//   }

//   const h = head(dom);
//   const t = tail(dom);

//   if (isList(h)) {
//     return append(select(h), select(t));
//   }

//   if (is(tag, h)) {
//     return append(h, select(t));
//   }

//   return append(l(), select(t));
// };

const select = (tagName, html) =>
  reduce((element, acc) => {
    const newAcc = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;

    return is(tagName, element) ? consList(element, newAcc) : newAcc;
  }, l(), html);

export default select;
