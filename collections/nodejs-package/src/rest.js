/*
 solution.js
 Реализуйте метод where, основываясь на следующем интерфейсе:

 Функция может принимать любое количество параметров, каждый из которых может быть либо функцией, либо объектом. 
 Для функций должна осуществляться простая фильтрация, для объектов нужно проверять соответствие элемента коллекции значениям 
 по тем же ключам, что и в переданном объекте.

 const cars = [
 { brand: 'bmw', model: 'm5', year: 2014 },
 { brand: 'bmw', model: 'm4', year: 2013 },
 { brand: 'kia', model: 'sorento', year: 2014 },
 { brand: 'kia', model: 'rio', year: 2010 },
 { brand: 'kia', model: 'sportage', year: 2012 },
 ];
 coll = new Enumerable(cars);

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
 
 Подсказки
 Извлечь ключи из объекта можно функцией Object.keys.
 Проверка на функцию: typeof <value> === 'function'.
 Функция every проверяет то, что все элементы коллекции удовлетворяют переданному предикату.
*/

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(operation) {
    const newOps = this.operations.slice();
    newOps.push(operation);

    return new Enumerable(this.collection, newOps);
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, sortDirection = 'asc') {
    let operation;
    if (sortDirection === 'asc') {
      operation = coll => coll.sort((a, b) => fn(a) - fn(b));
    } else {
      operation = coll => coll.sort((a, b) => fn(b) - fn(a));
    }

    return this.build(operation);
  }

  where(...predicates) {

    return this.build((coll) => {
      let acc = coll;

      predicates.forEach((predicate) => {
        if (typeof predicate === 'function') {
          acc = acc.filter(predicate);
          return;
        }

        const keys = Object.keys(predicate);
        acc = acc.filter(element => keys.every(key => element[key] === predicate[key]));
      });

      return acc;
    });

    // return this.build(coll => predicates.reduce((acc, predicate) => {
    //   if (typeof predicate === 'function') {
    //     return acc.filter(predicate);
    //   }

    //   const keys = Object.keys(predicate);
    //   return acc.filter(element => keys.every(key => element[key] === predicate[key]));
    // }, coll));
  }

  get length() {
    return this.toArray().length;
  }

  toArray() {
    const coll = this.collection.slice();
    const array = this.operations.reduce((acc, op) => op(acc), coll);

    if (!this.memo) {
      this.memo = array;
    }

    return this.memo;
  }
}

export default Enumerable;
