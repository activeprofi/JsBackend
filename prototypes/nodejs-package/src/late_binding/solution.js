/* 
 В этом упражнении реализация наших типов (Node и ее подтипов) будет опираться на следующие свойства js:

 Функция это объект
 Позднее связывание
 Побочные эффекты (apply)
 Node.js
 Реализуйте базовый тип Node используя подход описанный в видео.

 PairedTag.js, SingleTag.js
 Реализуйте типы тегов как подтипы типа Node.

 Подсказки
 При определении функции внутри конструктора есть одна деталь. Функция создается каждый раз заново, 
 это означает что сравнение объектов даже в случае deepEqual будет давать false. Ведь функция это объект, 
 а объекты друг другу не равны (даже если структура одинаковая), если это не один и тот же объект.

 По этой причине функцию нужно описывать вне конструктора (выше в файле), а внутри присваивать ее соответствующему свойству.
*/

import buildNode from './buildNode';

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
