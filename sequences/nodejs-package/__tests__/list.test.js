import { l, toString } from 'hexlet-pairs-data';
import { has, reverse, append } from '../src/list';

test('list has', () => {
    expect(has(l(1, 2, 3, 0), 0)).toBe(true);
    expect(has(l(1, 2, 3, 0), 2)).toBe(true);
    expect(has(l(1, 2, 3, 0), 3)).toBe(true);
    expect(has(l(1, 2, 3, 0), 10)).toBe(false);
});

test('list reverse', () => {
    const list = l(1, 2, 3, 4, 5);
    const reversedList = l(5, 4, 3, 2, 1);
    expect(toString(reverse(list))).toBe(toString(reversedList));
});

test('list append', () => {
    const l1 = l(1, 2);
    const l2 = l(0, 3, 7);

    expect(toString(append(l1, l2))).toBe(toString(l(1, 2, 0, 3, 7)));
    expect(toString(append(l(1, 0), l()))).toBe(toString(l(1, 0)));
    expect(toString(append(l(), l(1, 1, 1)))).toBe(toString(l(1, 1, 1)));
});