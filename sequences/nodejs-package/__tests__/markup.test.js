import { make, node, append, toString } from '../src/markup';

test('markup toString 1', () => {
  expect(toString(make())).toBe('');
});

test('markup toString 2', () => {
  const dom1 = make();
  const dom2 = append(dom1, node('h1', 'hello, world'));
  const result = '<h1>hello, world</h1>';

  expect(toString(dom2)).toBe(result);
});

test('markup toString 3', () => {
  const html = make();
  const html1 = append(html, node('h3', 'text'));
  const html2 = append(html1, node('p', 'paragraph'));
  const result = '<h3>text</h3><p>paragraph</p>';

  expect(toString(html2)).toBe(result);
});
