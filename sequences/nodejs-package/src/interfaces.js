/* 
 Реализуйте и экспортируйте функцию extractHeaders, которая извлекает все заголовки h2 из html и возвращает новый html, в котором заголовки заменены на p. 
 Тело при этом остается тем же.

 import { node, append, make, reduce } from 'hexlet-html-tags';

 const html1 = append(make(), node('h2', 'header1'));
 const html2 = append(html1, node('h2', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 <p>header1</p><p>header2</p>
 toString(extractHeaders(html3));

 Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег. 
 Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc, которая уже импортирована в модуль solution.

 import { make, append, node } from 'hexlet-html-tags';

 const html1 = append(make(), node('h2', 'header1 lisp'));
 const html2 = append(html1, node('p', 'content'));
 const html3 = append(html2, node('h2', 'lisp header2 lisp'));
 const html4 = append(html3, node('p', 'content lisp'));

 wordsCount('h2', 'lisp', html4); // 3
 Подсказки
 Подсчет слов в тексте: wc(word, text)
*/

import { node, reduce, filter, map, is, value } from 'hexlet-html-tags';

const extractHeaders = dom =>
  map(el => node('p', value(el)),
    filter(el => is('h2', el), dom));

const wc = (word, text) => {
  const re = new RegExp(word, 'g');
  return (String(text).match(re) || []).length;
};

const wordsCount = (tagName, word, dom) =>
  reduce((t, acc) => wc(word, t) + acc,
    0, map(n => value(n),
      filter(n => is(tagName, n), dom)));

export { extractHeaders, wordsCount };
