import assert from 'assert';
import { l, length, get } from 'hexlet-pairs-data';
import * as simpleCard from '../../src/native_objects/simpleCard.js';
import * as percentCard from '../../src/native_objects/percentCard.js';
import make from '../../src/native_objects/solution';

describe('CardGame', () => {
  it('#flow 1', () => {
    const cards = l(
      simpleCard.make('Королевский хлыст шанса', 6),
    );
    const game = make(cards);
    const log = game('John', 'Ada');

    assert.equal(length(log), 5);

    const step1 = get(0, log);
    assert.equal(step1.health1, 10);
    assert.equal(step1.health2, 10);

    const step2 = get(1, log);
    assert.equal(step2.health1, 10);
    assert.equal(step2.health2, 4);

    const step3 = get(2, log);
    assert.equal(step3.health1, 4);
    assert.equal(step3.health2, 4);

    const step4 = get(3, log);
    assert.equal(step4.health1, 4);
    assert.equal(step4.health2, -2);

    const step5 = get(4, log);
    assert.equal(step5.health1, 4);
    assert.equal(step5.health2, -2);
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
    assert.equal(step1.health1, 10);
    assert.equal(step1.health2, 10);

    const step2 = get(1, log);
    assert.equal(step2.health1, 10);
    assert.equal(step2.health2, 3);

    const step3 = get(2, log);
    assert.equal(step3.health1, 2);
    assert.equal(step3.health2, 3);

    const step4 = get(3, log);
    assert.equal(step4.health1, 2);
    assert.equal(step4.health2, -4);

    const step5 = get(4, log);
    assert.equal(step5.health1, 2);
    assert.equal(step5.health2, -4);
  });
});
