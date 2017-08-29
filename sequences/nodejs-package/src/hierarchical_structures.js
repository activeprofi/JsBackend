/* 
 Частой задачей при работе с деревьями (особенно html), является задача выборки узлов по определенному критерию.

 Пара примеров из реальной жизни:

 XPath

 /bookstore/book/price[text()]
 price/@exchange/total
 book[excerpt]/author[degree]
 JQuery

 $("ul li:first-child")
 $("p.class1, #p1")
 
 Реализуйте и экспортируйте функцию select, которая возвращает список тегов в соответствии с запросом. Запрос это список из имен тегов, 
 в котором каждый следующий тег это тег, вложенный в предыдущий.

 const html1 = make();
 const html2 = append(html1, node('h1', 'scheme'));
 const html3 = append(html2, node('p', 'is a lisp'));

 const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
 const html4 = append(html3, node('ul', children1));
 const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
 const html5 = append(html4, node('ol', children2));
 const html6 = append(html5, node('p', 'is a functional language'));
 const children3 = l(node('li', 'item'));
 const html7 = append(html6, node('ul', children3));
 const html8 = append(html7, node('div', l(node('p', 'text'))));
 const html9 = append(html8, node('div', l(node('ul', l(node('li', 'text'))))));
 const html10 = append(html9, node('h1', 'prolog'));

 const html = append(html10, node('p', 'is about logic'));

 length(select(l('ul', 'li'), html)); // 3
 length(select(l('div', 'div', 'p'), html)); // 1
 Алгоритм работы функции
 Список тегов для поиска будем называть словом query.
 query ищется с любого уровня дерева, а не только с верхнего. Например если наш query это p, то будут найдены все p на всех уровнях.
 По сути все сводится к двум основным процессам:

 Первый, внешний процесс, идет от верхнего уровня узлов до самого глубокого. И на каждом уровне запускает второй процесс, 
 который занимается поиском query начиная с текущего уровня (того на котором находится внешний процесс).

 Разберем конкретный пример: select(l('ul', 'li'), html). В данном запросе, select должен вернуть все li вложенные в ul. html, 
 собранный выше, содержит 4 таких места, причем они находятся на разных уровнях дерева. Кроме этого, в примере выше, 
 есть вариант где li находится внутри тега ol. Такие li не удовлетворяют нашему запросу.

 Внешний процесс запускает внутренний процесс для поиска query начиная с текущего уровня нод. При первом запуске, 
 текущий уровень это самый верхний уровень. На выходе от внутреннего процесса, внешний, получает newAcc и 
 мержит его (append) со своим acc.
 Дальше рекурсивно запускает себя с новым аккумулятором и списком тегов следующего уровня, которые нужно сначала подготовить.
 Процесс повторяется до тех пор пока мы не пройдем самый глубокий уровень нод.

 Внутренний процесс берет из query head и смотрит есть ли такие теги среди текущих (того что передал внешний процесс).
 Если они есть, то для всех этих тегов, собираются в кучу (reduce) их дети и для них запускается этот процесс повторно с query без head,
 то есть с tail(query). Процесс продолжается до тех пор пока мы не пройдем весь query. Оставшиеся теги возвращаются обратно.
 Вполне возможно что ничего не было найдено и будет возвращен пустой список.

 Подсказки
 hasChildren - функция, которая проверяет, есть ли потомки у элемента
 children - функция, которая возвращает список потомков
 
 p.s. В целом, эта функция достаточно сложна и если вы сможете решить эту задачу самостоятельно, то вас смело можно брать на работу).
 
 */
import { isEmpty, isList, head, tail, l, reduce, filter } from 'hexlet-pairs-data';
import { hasChildren, children, append, is } from 'hexlet-html-tags';

export const countLeaves = (tree) => {
  if (isEmpty(tree)) {
    return 0;
  }

  if (!isList(tree)) {
    return 1;
  }

  return countLeaves(head(tree)) + countLeaves(tail(tree));
};

export const select = (query, tree) => {
  if (isEmpty(tree)) {
    return l();
  }

  const nextLevel = (elements) => {
    const withChildren = filter(item => hasChildren(item), elements);
    return reduce((item, result) => append(result, children(item)), l(), withChildren);
  };

  const iterList = (list, elements, acc) => {
    if (isEmpty(list)) {
      return acc;
    }

    const newAcc = filter(item => is(head(list), item), elements);
    return iterList(tail(list), nextLevel(newAcc), newAcc);
  };

  const iterMain = (list, elements, acc) => {
    if (isEmpty(elements)) {
      return acc;
    }

    const nextLevelElements = nextLevel(elements);
    const newAcc = iterList(list, elements, l());
    return iterMain(list, nextLevelElements, append(acc, newAcc));
  };

  return iterMain(query, tree, l());
};
