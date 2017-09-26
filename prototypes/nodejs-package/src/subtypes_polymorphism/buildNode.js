/* 
 buildNode.js
 Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа. 
 Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.

 PairedTag.js, SingleTag.js
 Реализуйте типы тегов со следующим интерфейсом:

 Конструктор, который принимает на вход: name, attributes, body, children.
 Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
*/

import SingleTag from './SingleTag';
import PairedTag from './PairedTag';

const singleTagsList = new Set(['br', 'img', 'hr']);

const buildNode = (name, ...args) => {
  if (singleTagsList.has(name)) {
    return new SingleTag(name, ...args);
  }

  return new PairedTag(name, ...args);
};

const getArgType = (argument) => {
  const types = {
    children: arg => arg instanceof Array,
    attributes: arg => arg instanceof Object,
    body: arg => typeof arg === 'string',
  };

  return Object
    .keys(types)
    .filter(key => types[key](argument))[0];
};

const parse = (data) => {
  const astTag = {
    name: data[0],
  };

  data.slice(1).forEach((item) => {
    const argType = getArgType(item);

    if (argType === 'children') {
      astTag[argType] = item.map(parse);
    } else {
      astTag[argType] = item;
    }
  });

  const { name, attributes, body, children } = astTag;
  return buildNode(name, attributes, body, children);
};

export default parse;
