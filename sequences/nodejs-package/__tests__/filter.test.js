import * as data from 'hexlet-pairs-data';
import { make, append, node, is, toString } from 'hexlet-html-tags';
import { filter, quotes, removeHeaders } from '../src/filter';

describe('lists filter tests', () => {
    let dom;

    beforeEach(() => {
        const dom1 = make();
        const dom2 = append(dom1, node('h1', 'scheme'));
        const dom3 = append(dom2, node('p', 'is a lisp'));

        const dom4 = append(dom3, node('h1', 'haskell'));
        const dom5 = append(dom4, node('p', 'is a functional language'));

        const dom6 = append(dom5, node('h1', 'prolog'));
        dom = append(dom6, node('p', 'is about logic'));
    });

    // test('#removeHeaders', () => {
    //     const processedDom = removeHeaders(dom);
    //     const result = '<p>is a lisp</p><p>is a functional language</p><p>is about logic</p>';

    //     expect(processedDom).toBe(result);
    // });

    test('filter', () => {
        const processedDom = filter((element) => is('h1', element), dom);
        const result = '<h1>scheme</h1><h1>haskell</h1><h1>prolog</h1>';

        expect(toString(processedDom)).toBe(result);
    });

    test('quotes', () => {
        const dom = append(make(), node('h1', 'scheme'));
        const dom1 = append(dom, node('blockquote', 'live is live'));
        const dom2 = append(dom1, node('blockquote', 'i am sexy, and i know it'));
        const result = data.l('i am sexy, and i know it', 'live is live');

        expect(data.toString(quotes(dom2))).toBe(data.toString(result));
    });

});