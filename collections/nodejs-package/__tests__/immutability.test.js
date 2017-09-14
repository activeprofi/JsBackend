import assert from 'assert';

import Enumerable from '../src/immutability';

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


  it('should be immutable', () => {
    const result = coll
      .where(car => car.brand === 'kia')
      .where(car => car.year > 2011);

    coll.orderBy(car => car.year, 'asc')
      .where(car => car.model === 'sorento');

    assert.deepEqual(result.toArray(), [cars[2], cars[4]]);
    assert.deepEqual(result.toArray(), [cars[2], cars[4]]);
  });
});
