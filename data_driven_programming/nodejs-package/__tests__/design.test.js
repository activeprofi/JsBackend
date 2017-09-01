import { cons, car, toString } from 'hexlet-pairs';
import { l, get, length } from 'hexlet-pairs-data';
import { make } from '../src/design';

describe('CardGame', () => {

  test('should work 1', () => {
    const cards = l(
      cons('Костяная кочерга гробницы', () => 6),
    );
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(1, log);
    expect(toString(car(step1))).toBe('(10, 10)');

    const step2 = get(2, log);
    expect(toString(car(step2))).toBe('(10, 4)');

    const step3 = get(3, log);
    expect(toString(car(step3))).toBe('(4, 4)');

    const step4 = get(4, log);
    expect(toString(car(step4))).toBe('(4, -2)');

    const step5 = get(5, log);
    expect(toString(car(step5))).toBe('(4, -2)');
  });

  test('should work 2', () => {
    const cards = l(
      cons('Разъяряющая осада отчаяния', () => 5),
    );
    const game = make(cards);
    const log = game('Mike', 'Alan');

    expect(length(log)).toBe(5);

    const step1 = get(1, log);
    expect(toString(car(step1))).toBe('(10, 10)');

    const step2 = get(2, log);
    expect(toString(car(step2))).toBe('(10, 5)');

    const step3 = get(3, log);
    expect(toString(car(step3))).toBe('(5, 5)');

    const step4 = get(4, log);
    expect(toString(car(step4))).toBe('(5, 0)');

    const step5 = get(5, log);
    expect(toString(car(step5))).toBe('(5, 0)');
  });

});
