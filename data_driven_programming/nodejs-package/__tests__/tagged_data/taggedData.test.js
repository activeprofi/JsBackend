import { cons, car, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, length, get } from 'hexlet-pairs-data'; // eslint-disable-line
import { make as makeSimpleCard } from '../../src/tagged_data/simpleCard'; // eslint-disable-line
import { make as makePercentCard } from '../../src/tagged_data/percentCard'; // eslint-disable-line
import make from '../../src/tagged_data/taggedData'; // eslint-disable-line

describe('CardGame', () => {
  it('#flow 1', () => {
    const cards = l(
      makeSimpleCard('Жесткий ломатель мироздания', 6),
    );
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(pairToString(car(step1))).toBe('(10, 10)');

    const step2 = get(1, log);
    expect(pairToString(car(step2))).toBe('(10, 4)');

    const step3 = get(2, log);
    expect(pairToString(car(step3))).toBe('(4, 4)');

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(4, -2)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(4, -2)');
  });

  it('#flow 2', () => {
    let cardIndex = 1;
    const cards = l(
      makeSimpleCard('Ошарашивающие шорты равновесия', 7),
      makePercentCard('Фаланговая знатность утешения', 80),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(pairToString(car(step1))).toBe('(10, 10)');

    const step2 = get(1, log);
    expect(pairToString(car(step2))).toBe('(10, 3)');

    const step3 = get(2, log);
    expect(pairToString(car(step3))).toBe('(2, 3)');

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(2, -4)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(2, -4)');
  });
});
