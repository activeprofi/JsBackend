import assert from 'assert';

import Enumerable from '../src/rest';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = new Enumerable(cars);
  });

  it('#where', () => {
    const result = coll
      .where(car => car.brand === 'kia')
      .where(car => car.year > 2011);

    assert.deepEqual(result.toArray(), [cars[2], cars[4]]);

    const result2 = coll.where({ brand: 'bmw' });
    assert.deepEqual(result2.toArray(), [cars[0], cars[1]]);

    const result3 = coll.where({ brand: 'kia', model: 'sorento' });
    assert.deepEqual(result3.toArray(), [cars[2]]);

    const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
    assert.deepEqual(result4.toArray(), [cars[3], cars[4]]);
  });
});
