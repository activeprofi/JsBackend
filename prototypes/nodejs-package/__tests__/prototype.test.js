import assert from 'assert';
// import { describe, it } from 'mocha';

import parse from '../src/prototype/solution';
import buildNode from '../src/prototype/buildNode';

describe('HtmlBuilder', () => {
  it('#parse', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text'],
          ['hr'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = buildNode('html', {}, '', [
      buildNode('head', {}, '', [
        buildNode('title', {}, 'hello, hexlet!'),
      ]),
      buildNode('body', {}, '', [
        buildNode('h1', { class: 'header' }, 'html builder example'),
        buildNode('div', {}, '', [
          buildNode('span', {}, 'span text'),
          buildNode('hr'),
        ]),
      ]),
    ]);

    assert.deepEqual(ast, expected);
  });

  it('#toString', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['div', { class: 'separator' }],
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['img', { class: 'image', href: '#' }],
          ['span', 'span text2'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = '<html><head><title>hello, hexlet!</title></head><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>';
    assert.equal(ast.toString(), expected);
  });
});
