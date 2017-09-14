import assert from 'assert';

import Enumerable from '../src/fluent_interface';

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
  });

  it('#orderBy', () => {
    const result = coll.orderBy(car => car.year)
      .where(car => car.brand === 'kia')
      .select(car => car.model);

    assert.deepEqual(result.toArray(), ['rio', 'sportage', 'sorento']);
  });

  it('#orderByDesc', () => {
    const result = coll.orderBy(car => car.year, 'desc')
      .where(car => car.brand === 'bmw')
      .select(car => car.model);

    assert.deepEqual(result.toArray(), ['m5', 'm4']);
  });

  it('#select', () => {
    const result = coll
      .select(car => car.brand);
    assert.deepEqual(result.toArray(), ['bmw', 'bmw', 'kia', 'kia', 'kia']);
  });
});
