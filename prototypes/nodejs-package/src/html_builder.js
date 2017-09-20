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

const buildHtml = (data) => {
  const tagName = data[0];
  let html = '';

  if (data[1] instanceof Array) {
    html += `<${tagName}>${buildHtml(data[1])}</${tagName}>`;
  }

  if (data[1] instanceof Object) {
    let attributes = '';
    Object.keys(data[1]).forEach(key => attributes += ` ${key}=${data[1][key]} `);

    html += `<${tagName} ${attributes}></${tagName}>`;
  }

  if (typeof data[1] === 'string') {
    html += `<${tagName}>${data[1]}</${tagName}>`;
  }

  return html;
};

export default buildHtml;
