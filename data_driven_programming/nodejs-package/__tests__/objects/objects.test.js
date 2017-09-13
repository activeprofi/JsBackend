import assert from 'assert';

import { car, toString } from 'hexlet-pairs';
import { l, length, get } from 'hexlet-pairs-data';
import * as simpleCard from '../../src/objects/simpleCard.js';
import * as percentCard from '../../src/objects/percentCard.js';
import make from '../../src/objects/solution';

describe('CardGame', () => {
  it('#flow 1', () => {
    const cards = l(
      simpleCard.make('Королевский хлыст шанса', 6),
    );
    const game = make(cards);
    const log = game('John', 'Ada');

    assert.equal(length(log), 5);

    const step1 = get(0, log);
    assert.equal(toString(car(step1)), '(10, 10)');

    const step2 = get(1, log);
    assert.equal(toString(car(step2)), '(10, 4)');

    const step3 = get(2, log);
    assert.equal(toString(car(step3)), '(4, 4)');

    const step4 = get(3, log);
    assert.equal(toString(car(step4)), '(4, -2)');

    const step5 = get(4, log);
    assert.equal(toString(car(step5)), '(4, -2)');
  });

  it('#flow 2', () => {
    let cardIndex = 1;
    const cards = l(
      simpleCard.make('Бул-Катосова награда издёвки', 7),
      percentCard.make('Покрытый царапинами клык демона коряги', 80),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 1 ? 0 : 1;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    assert.equal(length(log), 5);

    const step1 = get(0, log);
    assert.equal(toString(car(step1)), '(10, 10)');

    const step2 = get(1, log);
    assert.equal(toString(car(step2)), '(10, 3)');

    const step3 = get(2, log);
    assert.equal(toString(car(step3)), '(2, 3)');

    const step4 = get(3, log);
    assert.equal(toString(car(step4)), '(2, -4)');

    const step5 = get(4, log);
    assert.equal(toString(car(step5)), '(2, -4)');
  });
});
