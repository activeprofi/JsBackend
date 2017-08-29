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

import { isEmpty, head, tail, reverse, cons } from 'hexlet-pairs-data';
import { make, node, value, name } from 'hexlet-html-tags';

const map = (func, sequence) => {
  const iter = (seq, acc) => {
    if (isEmpty(seq)) return reverse(acc);

    return iter(tail(seq), cons(func(head(seq)), acc));
  };

  return iter(sequence, make());
};

const reverseStr = (str) => {
  const iter = (counter, acc) => {
    if (counter === str.length) return acc;

    return iter(counter + 1, str[counter] + acc);
  };

  return iter(0, '');
};

const mirror = dom =>
  map(n => node(name(n), reverseStr(value(n))), dom);

export { map, mirror };
