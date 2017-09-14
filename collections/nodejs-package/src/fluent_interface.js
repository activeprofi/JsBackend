/* 
 solution.js
 Select
 Реализуйте метод select, который отображает коллекцию.

 const cars = [
 { brand: 'bmw', model: 'm5', year: 2014 },
 { brand: 'bmw', model: 'm4', year: 2013 },
 { brand: 'kia', model: 'sorento', year: 2014 },
 { brand: 'kia', model: 'rio', year: 2010 },
 { brand: 'kia', model: 'sportage', year: 2012 },
 ];
 coll = new Enumerable(cars);

 const result = coll.select(car => car.model);

 assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);
 
 OrderBy
 Реализуйте метод orderBy, который на вход принимает два параметра:

 Функцию, возвращающую значение, по которому будет происходить сортировка.
 Направление сортировки: asc - по возрастанию, desc - по убыванию (по-умолчанию asc).
 const cars = [
 { brand: 'bmw', model: 'm5', year: 2014 },
 { brand: 'bmw', model: 'm4', year: 2013 },
 { brand: 'kia', model: 'sorento', year: 2014 },
 { brand: 'kia', model: 'rio', year: 2010 },
 { brand: 'kia', model: 'sportage', year: 2012 },
 ];
 coll = new Enumerable(cars);

 const result = coll.orderBy(car => car.year, 'desc')
 .where(car => car.brand === 'bmw')
 .select(car => car.model);

 assert.deepEqual(result.toArray(), ['m5', 'm4']);
 
 Подсказки
 Для выполнения сортировки воспользуйтесь встроенной функцией: sort. 
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, sortDirection = 'asc') {
    this.collection = sortDirection === 'asc'
      ? this.collection.sort((a, b) => fn(a) - fn(b))
      : this.collection.sort((a, b) => fn(b) - fn(a));

    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
