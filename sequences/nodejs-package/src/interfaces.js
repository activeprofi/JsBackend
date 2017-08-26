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

import { node, append, make, reduce, filter, map, is, value } from 'hexlet-html-tags';

export const extractHeaders = html => {
    return map(tag => node('p', value(tag)),
        filter(element => is('h2', element),
            html));
};

export const wc = (word, text) => {
    const re = new RegExp(word, 'g');
    return (String(text).match(re) || []).length;
};

export const wordsCount = (tag, word, html) => {
    return reduce((text, acc) => acc + wc(word, text), 0,
        map(tag => value(tag),
            filter(element => is(tag, element),
                html)));
};