import { make, append, node, toString } from 'hexlet-html-tags';
import { extractHeaders, wordsCount } from '../src/interfaces';

describe('dom', () => {
  let dom;

  beforeAll(() => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'scheme'));
    const dom3 = append(dom2, node('p', 'is a lisp'));

    const dom4 = append(dom3, node('h2', 'haskell'));
    const dom5 = append(dom4, node('p', 'is a functional language'));

    const dom6 = append(dom5, node('h2', 'prolog'));
    const dom7 = append(dom6, node('p', 'sicp'));
    const dom8 = append(dom7, node('blockquote', 'haskell haskell'));
    const dom9 = append(dom8, node('blockquote', 'quote'));
    const dom10 = append(dom9, node('h2', 'haskell'));
    dom = append(dom10, node('p', 'is about logic haskell'));
  });

  test('extractHeaders', () => {
    const headersAsP = extractHeaders(dom);
    const result = '<p>haskell</p><p>prolog</p><p>haskell</p>';

    expect(toString(headersAsP)).toBe(result);
  });

  test('wordsCount', () => {
    expect(wordsCount('blockquote', 'haskell', dom)).toBe(2);
    expect(wordsCount('h2', 'haskell', dom)).toBe(2);
  });
});
