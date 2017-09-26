/* 
 Текущая версия htmlBuilder должна уметь работать с одиночными тегами. Список тегов, которые являются одиночными, находится в singleTagsList.

 Пример:

 <br>
 ['br'];

 <img src="/path">
 ['img', { src: '/path' }];
 
 solution.js
 Реализуйте и экспортируйте функции parse и render.

 Функция render принимает на вход ast и возвращает строковое представление.
 Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.
 const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
  ['title', 'hello, hexlet!'],
  ]],
  ['body', [
  ['br'],
  ]],
 ]];

 const ast = parse(data);

 { name: 'html', attributes: {}, body: '', children: [
 { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
 { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
 ]},
 { name: 'body', attributes: {}, body: '', children: [
 { name: 'br', attributes: {}, body: '', children: [] },
 ]},
 ]}
*/

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

const buildAttributes = attributes =>
  Object
    .keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`)
    .join('');

const parse = (data) => {
  const astTag = {
    tagName: data[0],
    attributes: {},
    children: [],
    body: '',
  };

  data.slice(1).forEach((item) => {
    const argType = getArgType(item);

    if (argType === 'children') {
      astTag[argType] = item.map(parse);
    } else {
      astTag[argType] = item;
    }
  });

  return astTag;
};

const singleTagsList = new Set(['br', 'img', 'hr']);

const render = ast =>
  `<${ast.tagName}${buildAttributes(ast.attributes)}>` +
  `${ast.body}${ast.children.map(tag => render(tag)).join('')}` +
  `${singleTagsList.has(ast.tagName) ? '' : `</${ast.tagName}>`}`;

export { parse, render };
