/* solution.js
 Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.

 import buildHtml from './solution';

 const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
    ]],
 ]];

 buildHtml(data);

 <html>
 <meta><title>hello, hexlet!</title></meta>
 <body class="container">
  <h1 class="header">html builder example</h1>
 <div>
  <span>span text2</span>
  <span>span text3</span>
 </div>
 </body>
 </html>
*/

const types = {
  children: arg => arg instanceof Array,
  attributes: arg => arg instanceof Object,
  body: arg => typeof arg === 'string',
};

const getArgType = arg => Object.keys(types).filter(key => types[key](arg))[0];

const buildAttributes = attributes =>
  Object
    .keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`)
    .join('');

const buildHtml = (data) => {
  const tag = data
    .slice(1)
    .reduce((acc, arg) =>
      Object.assign(acc, { [getArgType(arg)]: arg }),
    { tagName: data[0], attributes: {}, body: '', children: [] });

  return `<${tag.tagName}${buildAttributes(tag.attributes)}>` +
         `${tag.body}${tag.children.map(buildHtml).join('')}` +
         `</${tag.tagName}>`;
};

export default buildHtml;
