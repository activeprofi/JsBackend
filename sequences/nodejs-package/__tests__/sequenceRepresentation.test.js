import { l, toString } from 'hexlet-pairs-data';
import { has, reverse, copy, append } from '../src/sequenceRepresentation';

test('list has', () => {
    expect(has(l(1, 2, 3, 0), 0)).toBe(true);
    expect(has(l(1, 2, 3, 0), 2)).toBe(true);
    expect(has(l(1, 2, 3, 0), 3)).toBe(true);
    expect(has(l(1, 2, 3, 0), 10)).toBe(false);
});

test('list reverse', () => {
    const list = l(1, 2, 3, 4, 5);
    
    expect(toString(reverse(list))).toBe('(5, 4, 3, 2, 1)');
});

test('list copy', () => {
    const l1 = l(1, 2);
    const l2 = l(0, 3, 7);

    expect(toString(copy(l1))).toBe('(1, 2)');
    expect(toString(copy(l2))).toBe('(0, 3, 7)');
    expect(toString(copy(l()))).toBe('()');
});

test('list append', () => {
    const l1 = l(1, 2);
    const l2 = l(0, 3, 7);

    expect(toString(append(l1, l2))).toBe('(1, 2, 0, 3, 7)');
    expect(toString(append(l(1, 0), l()))).toBe('(1, 0)');
    expect(toString(append(l(), l(1, 1, 1)))).toBe('(1, 1, 1)');
});